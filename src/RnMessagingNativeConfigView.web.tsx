import * as React from 'react';

import { RnMessagingNativeConfigViewProps } from './RnMessagingNativeConfig.types';

export default function RnMessagingNativeConfigView(props: RnMessagingNativeConfigViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
