import { RealtyAddressErrorCodes } from './realty-address-error-codes';
import { RealtyAddressException } from './realty-address.exception';

interface RealtyAddressProps {
  street: string;
  zipCode: number;
}

export class RealtyAddress {
  _street: string;
  _zipCode: number;

  constructor(realtyAddressProps: RealtyAddressProps) {
    this.street = realtyAddressProps.street;
    this.zipCode = realtyAddressProps.zipCode;
  }

  private set street(value: string) {
    if (!value) {
      throw new RealtyAddressException(
        RealtyAddressErrorCodes.STREET_IS_REQUIRED,
      );
    }
    if (value.length > 250) {
      throw new RealtyAddressException(
        RealtyAddressErrorCodes.STREET_MUST_BE_LESS_THAN_OR_EQUAL_250,
      );
    }
    this._street = value;
  }

  get street(): string {
    return this._street;
  }

  private set zipCode(value: number) {
    this._zipCode = value;
  }

  get zipCode(): number {
    return this._zipCode;
  }
}
