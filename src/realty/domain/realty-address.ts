import { RealtyAddressErrorCodes } from './realty-address-error-codes';
import { RealtyAddressException } from './realty-address.exception';

interface RealtyAddressProps {
  street: string;
  zipCode: string;
}

export class RealtyAddress {
  _street: string;
  _zipCode: string;

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

  private set zipCode(value: string) {
    if (!value) {
      throw new RealtyAddressException(
        RealtyAddressErrorCodes.ZIP_CODE_IS_REQUIRED,
      );
    }
    const zipCodeRegex = /^\d{5}-\d{3}$/;
    if (!zipCodeRegex.test(value)) {
      throw new RealtyAddressException(
        RealtyAddressErrorCodes.ZIP_CODE_IS_INVALID,
      );
    }
    this._zipCode = value;
  }

  get zipCode(): string {
    return this._zipCode;
  }
}
