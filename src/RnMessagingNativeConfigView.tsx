import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { RnMessagingNativeConfigViewProps } from './RnMessagingNativeConfig.types';

const NativeView: React.ComponentType<RnMessagingNativeConfigViewProps> =
  requireNativeViewManager('RnMessagingNativeConfig');

export default function RnMessagingNativeConfigView(props: RnMessagingNativeConfigViewProps) {
  return <NativeView {...props} />;
}
