import React from 'react';
import BN from 'bn.js';
import { LiquidityAmount, Currency } from '@akropolis-web/primitives';
import Grid from '@material-ui/core/Grid/Grid';

import { AmountInput, AmountInputProps } from '../AmountInput/AmountInput';
import { CurrencyIcon } from '../CurrencyIcon/CurrencyIcon';

export type LiquidityAmountInputProps = Omit<
  AmountInputProps<LiquidityAmount>,
  'makeAmount' | 'getCurrencyIdentifier' | 'getCurrencyLabel' | 'renderSelectOnUnpicked'
> & {
  getCurrencyLabel?: AmountInputProps<LiquidityAmount>['getCurrencyLabel'];
  renderSelectOnUnpicked?: AmountInputProps<LiquidityAmount>['renderSelectOnUnpicked'];
};

export function LiquidityAmountInput(props: LiquidityAmountInputProps) {
  const {
    getCurrencyLabel: customGetCurrencyLabel,
    renderSelectOnUnpicked: customRenderSelectOnUnpicked,
    ...rest
  } = props;

  return (
    <AmountInput<LiquidityAmount>
      {...rest}
      makeAmount={makeAmount}
      getCurrencyIdentifier={getCurrencyIdentifier}
      getCurrencyLabel={customGetCurrencyLabel || getCurrencyLabel}
      renderSelectOnUnpicked={customRenderSelectOnUnpicked || renderSelectOnUnpicked}
    />
  );
}

function getCurrencyIdentifier(currency: Currency) {
  return currency.symbol;
}

const currenciesWithIcons = ['btc', 'eth'];

function getCurrencyLabel(currency: Currency) {
  return currenciesWithIcons.includes(currency.symbol.toLowerCase()) ? (
    <Grid container alignItems="center" wrap="nowrap">
      <CurrencyIcon currency={currency.symbol} />
      &nbsp;
      {currency.symbol}
    </Grid>
  ) : (
    currency.symbol
  );
}

function makeAmount(value: BN, currency: Currency) {
  return new LiquidityAmount(value, currency);
}

function renderSelectOnUnpicked() {
  return 'Select Currency';
}
