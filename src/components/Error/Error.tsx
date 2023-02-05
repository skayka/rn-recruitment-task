import * as React from 'react';
import { SText } from '../ui-helpers';
import { CenterScreenWrapper } from '../ui-helpers/CenterScreenWrapper';

const ErrorCentered = ({ error }: { error: string | undefined }): JSX.Element => {
  return (
    <CenterScreenWrapper>
      <SText.Bold>{error}</SText.Bold>
    </CenterScreenWrapper>
  );
};
export { ErrorCentered };
