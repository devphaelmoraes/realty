interface RealtyAddressProps {
  street: string;
}

export class RealtyAddress {
  _street: string;

  constructor(realtyAddressProps: RealtyAddressProps) {
    this.street = realtyAddressProps.street;
  }

  set street(value: string) {
    this._street = value;
  }

  get street(): string {
    return this._street;
  }
}
