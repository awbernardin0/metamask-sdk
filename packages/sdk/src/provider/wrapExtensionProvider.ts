import { MetaMaskInpageProvider } from '@metamask/providers';
import { TrackingEvents } from '@metamask/sdk-communication-layer';
import { RPC_METHODS } from '../config';
import { MetaMaskSDK } from '../sdk';
import { logger } from '../utils/logger';

interface RequestArguments {
  method: string;
  params?: any[];
}

export const wrapExtensionProvider = ({
  provider,
  sdkInstance,
}: {
  provider: MetaMaskInpageProvider;
  sdkInstance: MetaMaskSDK;
}) => {
  // prevent double wrapping an invalid provider (it could happen with older web3onboard implementions)
  // TODO remove after web3onboard is updated
  if ('state' in provider) {
    throw new Error(`INVALID EXTENSION PROVIDER`);
  }

  return new Proxy(provider, {
    get(target, propKey: keyof MetaMaskInpageProvider) {
      if (propKey === 'request') {
        return async function (args: RequestArguments) {
          logger(`[wrapExtensionProvider()] Overwriting request method`, args);

          const { method, params } = args;

          sdkInstance.analytics?.send({
            event: TrackingEvents.SDK_RPC_REQUEST,
            params: { method, from: 'extension' },
          });

          // special method handling
          if (method === RPC_METHODS.METAMASK_BATCH && Array.isArray(params)) {
            // params is a list of RPCs to call
            const responses = [];
            for (const rpc of params) {
              const response = await provider?.request({
                method: rpc.method,
                params: rpc.params,
              });
              responses.push(response);
            }

            return responses;
          }

          return target.request(args);
        };
      }
      return target[propKey];
    },
  });
};
