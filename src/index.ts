import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to RnMessagingNativeConfig.web.ts
// and on native platforms to RnMessagingNativeConfig.ts
import RnMessagingNativeConfigModule from './RnMessagingNativeConfigModule';
import RnMessagingNativeConfigView from './RnMessagingNativeConfigView';
import { ChangeEventPayload, RnMessagingNativeConfigViewProps } from './RnMessagingNativeConfig.types';

// Get the native constant value.
export const PI = RnMessagingNativeConfigModule.PI;

export function hello(): string {
  return RnMessagingNativeConfigModule.hello();
}

export async function setValueAsync(value: string) {
  return await RnMessagingNativeConfigModule.setValueAsync(value);
}

const emitter = new EventEmitter(RnMessagingNativeConfigModule ?? NativeModulesProxy.RnMessagingNativeConfig);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { RnMessagingNativeConfigView, RnMessagingNativeConfigViewProps, ChangeEventPayload };
