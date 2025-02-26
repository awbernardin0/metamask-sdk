import { useSDK } from '@metamask/sdk-react';
import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Platform,
  StyleSheet,
} from 'react-native';
import { FAB } from 'react-native-paper';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FABGroupFix from '../fab-group-fix/FabGroupFix';
import { IconOriginal } from '../icons/IconOriginal';
import {
  MetaMaskModal,
  MetaMaskModalProps,
} from '../metamask-modal/metamask-modal';

export interface FloatingMetaMaskButtonProps {
  distance?: {
    bottom?: number;
    right?: number;
  };
}

const getStyles = ({
  distance,
}: {
  distance: FloatingMetaMaskButtonProps['distance'];
}) => {
  return StyleSheet.create({
    container: {
      position: Platform.OS === 'web' ? 'fixed' : ('absolute' as any),
      paddingRight: distance?.right,
      paddingBottom: distance?.bottom,
      zIndex: 999,
    },
    fabStyle: {
      zIndex: 999,
    },
  });
};

export const FloatingMetaMaskButton = ({
  distance,
}: FloatingMetaMaskButtonProps) => {
  const { sdk, connected, connecting, provider } = useSDK();
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [target, setTarget] = useState<MetaMaskModalProps['target']>('network');
  const styles = useMemo(() => getStyles({ distance }), [distance]);

  const renderIcon = ({ color }: { color: string }) => {
    if (connecting) {
      return <ActivityIndicator color={color} />;
    }
    return <IconOriginal />;
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleStateChange = async ({ open }: { open: boolean }) => {
    if (!connected) {
      try {
        await sdk?.connect();
        return;
      } catch (error) {
        // Ignore connection issue.
        return;
      }
    }
    setActive(open);
  };

  const handlePress = (e: GestureResponderEvent) => {
    e.preventDefault();
  };

  // Check for mobile browser because regular FAB.Group has an issue https://github.com/callstack/react-native-paper/issues/4202
  const isMobileBrowser =
    Platform.OS === 'web' && /Mobi|Android/i.test(navigator.userAgent);
  const DynamicFabGroup = isMobileBrowser ? FABGroupFix : FAB.Group;

  return (
    <>
      <DynamicFabGroup
        open={active}
        visible
        icon={renderIcon}
        onPress={handlePress}
        fabStyle={styles.fabStyle}
        style={styles.container}
        actions={[
          // {
          //   icon: () => <IconOriginal />,
          //   label: 'Open MetaMask',
          //   onPress: () => console.log('Pressed notifications'),
          // },
          {
            label: 'Network',
            icon: 'swap-horizontal',
            onPress: () => {
              setTarget('network');
              setModalOpen(true);
            },
          },
          // {
          //   label: 'Buy ETH',
          //   icon: 'swap-horizontal',
          //   onPress: () => {
          //     provider?.request({
          //       method: 'metamask_open',
          //       params: [{ target: 'buy' }],
          //     });
          //   },
          // },
          // {
          //   label: 'SWAP',
          //   icon: 'swap-horizontal',
          //   onPress: () => {
          //     setTarget('swap');
          //     setModalOpen(true);
          //   },
          // },
          // {
          //   icon: ({ color }) => (
          //     <MaterialIcons name="price-change" color={color} size={24} />
          //   ),
          //   label: 'Infura GAS Api',
          //   onPress: () => {
          //     setTarget('gasprice');
          //     setModalOpen(true);
          //   },
          // },
          {
            label: 'Disconnect',
            icon: 'logout',
            onPress: () => {
              sdk?.terminate();
              setActive(false);
            },
          },
        ]}
        onStateChange={handleStateChange}
      />
      <MetaMaskModal
        modalOpen={modalOpen}
        target={target}
        onClose={closeModal}
      />
    </>
  );
};
