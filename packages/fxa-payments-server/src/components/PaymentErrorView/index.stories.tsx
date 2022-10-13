import React from 'react';
import { PaymentErrorView } from './index';
import { SELECTED_PLAN } from '../../lib/mock-data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Meta } from '@storybook/react';

export default {
  title: 'components/PaymentError',
  component: PaymentErrorView,
} as Meta;

export const Default = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <PaymentErrorView
              error={{ code: 'general-paypal-error' }}
              actionFn={() => {}}
              plan={SELECTED_PLAN}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
