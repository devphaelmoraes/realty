interface RealtyAddressProps {
  street: string;
}

export class RealtyAddress {
  _street: string;

  constructor(realtyAddressProps: RealtyAddressProps) {
    this.street = realtyAddressProps.street;
  }

  set street(value: string) {
    if (!value) {
      throw new Error('street_is_required');
    }
    this._street = value;
  }

  get street(): string {
    return this._street;
  }
}
