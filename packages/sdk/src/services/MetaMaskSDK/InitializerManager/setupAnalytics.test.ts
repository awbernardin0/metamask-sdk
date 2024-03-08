import { DEFAULT_SERVER_URL } from '@metamask/sdk-communication-layer';
import { Analytics } from '../../Analytics';
import { MetaMaskSDK } from '../../../sdk';
import { setupAnalytics } from './setupAnalytics';

jest.mock('../../Analytics', () => {
  return {
    Analytics: jest.fn().mockImplementation(() => {
      return {};
    }),
  };
});

describe('setupAnalytics', () => {
  let instance: MetaMaskSDK;

  const mockGetPlatformType = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    instance = {
      options: {
        dappMetadata: {},
      },
      platformManager: {
        getPlatformType: mockGetPlatformType,
      },
    } as unknown as MetaMaskSDK;
  });

  it('should initialize Analytics with default values', async () => {
    await setupAnalytics(instance);

    expect(Analytics).toHaveBeenCalledWith({
      serverUrl: DEFAULT_SERVER_URL,
      originatorInfo: {
        url: '',
        title: '',
        platform: '',
        source: '',
      },
    });
  });

  it('should initialize Analytics with custom values', async () => {
    instance.options.communicationServerUrl = 'https://custom.server.url';
    instance.options.dappMetadata = {
      url: 'https://dapp.url',
      name: 'DApp Name',
    };
    instance.options._source = 'custom-source';

    mockGetPlatformType.mockReturnValue('web');

    await setupAnalytics(instance);

    expect(Analytics).toHaveBeenCalledWith({
      serverUrl: 'https://custom.server.url',
      originatorInfo: {
        url: 'https://dapp.url',
        title: 'DApp Name',
        platform: 'web',
        source: 'custom-source',
      },
    });
  });

  it('should set analytics on the instance', async () => {
    const mockAnalytics = {} as Analytics;
    (Analytics as jest.Mock).mockImplementation(() => {
      return mockAnalytics;
    });

    await setupAnalytics(instance);

    expect(instance.analytics).toBe(mockAnalytics);
  });
});
