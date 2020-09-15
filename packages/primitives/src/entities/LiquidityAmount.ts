import { formatBalance, formatShortBalance } from '../bnHexWei';
import { Value } from '../fraction';
import { Amount } from './amount';
import { Currency } from './Currency';

const uniqType = Symbol('LiquidityAmount type');

export class LiquidityAmount extends Amount<Currency> {
  public _type: typeof uniqType = uniqType;

  // eslint-disable-next-line class-methods-use-this
  public makeAmount(amount: Value, currency: Currency): this {
    return new LiquidityAmount(amount, currency) as this;
  }

  public toFormattedString(precision: number = 2, withSymbol = true): string {
    return formatBalance({
      amountInBaseUnits: this.toBN(),
      tokenSymbol: withSymbol ? this.currency.symbol : undefined,
      baseDecimals: this.currency.decimals,
      precision,
      symbolPosition: 'start',
    });
  }

  public toShortString(withSymbol = true): string {
    return formatShortBalance({
      amountInBaseUnits: this.toBN(),
      tokenSymbol: withSymbol ? this.currency.symbol : undefined,
      baseDecimals: this.currency.decimals,
      symbolPosition: 'start',
    });
  }
}
