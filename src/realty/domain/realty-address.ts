import { RealtyAddressErrorCodes } from './realty-address-error-codes';
import { RealtyAddressException } from './realty-address.exception';

interface RealtyAddressProps {
  street: string;
  zipCode: string;
  houseNumber: number;
  complement?: string;
  cityId: number;
}

export class RealtyAddress {
  _street: string;
  _zipCode: string;
  _houseNumber: number;
  _complement: string;
  _cityId: number;

  constructor(realtyAddressProps: RealtyAddressProps) {
    this.street = realtyAddressProps.street;
    this.zipCode = realtyAddressProps.zipCode;
    this.houseNumber = realtyAddressProps.houseNumber;
    this.complement = realtyAddressProps.complement;
    this.cityId = realtyAddressProps.cityId;
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

  private set houseNumber(value: number) {
    if (value === null || value === undefined) {
      throw new RealtyAddressException(
        RealtyAddressErrorCodes.HOUSE_NUMBER_IS_REQUIRED,
      );
    }
    if (value < 0) {
      throw new RealtyAddressException(
        RealtyAddressErrorCodes.HOUSE_NUMBER_MUST_BE_A_POSITIVE_NUMBER,
      );
    }
    this._houseNumber = value;
  }

  get houseNumber(): number {
    return this._houseNumber;
  }

  private set complement(value: string) {
    if (value && value.length > 500) {
      throw new RealtyAddressException(
        RealtyAddressErrorCodes.COMPLEMENT_MUST_BE_LESS_THAN_OR_EQUAL_500,
      );
    }
    this._complement = value;
  }

  get complement(): string {
    return this._complement;
  }

  private set cityId(value: number) {
    if (value < 1) {
      throw new RealtyAddressException(
        RealtyAddressErrorCodes.CITY_ID_MUST_BE_A_POSITIVE_NUMBER,
      );
    }
    this._cityId = value;
  }

  get cityId(): number {
    return this._cityId;
  }
}
