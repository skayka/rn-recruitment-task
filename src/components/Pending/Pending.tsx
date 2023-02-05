import * as React from 'react';

import { SText } from '../ui-helpers';
import { CenterScreenWrapper } from '../ui-helpers/CenterScreenWrapper';

const PendingCentered = (): JSX.Element => {
  return (
    <CenterScreenWrapper>
      <SText.Bold>Please wait</SText.Bold>
    </CenterScreenWrapper>
  );
};
export { PendingCentered };
