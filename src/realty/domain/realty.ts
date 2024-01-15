import { RealtyEntityErrorCodes } from './realty-error-codes';
import { RealtyType } from './realty-type';
import { RealtyException } from './realty.exception';

interface RealtyProps {
  title: string;
  description?: string;
  price: number;
  type: RealtyType;
}

export class Realty {
  private _id: number;
  private _title: string;
  private _description: string;
  private _price: number;
  private _type: RealtyType;

  constructor(props: RealtyProps) {
    this.title = props.title;
    this.description = props.description;
    this.price = props.price;
    this.type = props.type;
  }

  private set title(value: string) {
    if (!value) {
      throw new RealtyException(RealtyEntityErrorCodes.TITLE_IS_REQUIRED);
    }
    if (value.length < 3 || value.length > 300) {
      throw new RealtyException(
        RealtyEntityErrorCodes.TITLE_MUST_BE_GREATER_THAN_3_AND_LESS_THAN_300,
      );
    }
    this._title = value;
  }

  get title(): string {
    return this._title;
  }

  private set description(value: string) {
    if (value && value.length > 500) {
      throw new Error(
        'description must be less than or equal to 500 characters',
      );
    }
    this._description = value;
  }

  get description(): string {
    return this._description;
  }

  private set price(value: number) {
    if (!value) {
      throw new Error('price_is_required');
    }
    if (value != null && (value <= 0 || isNaN(value))) {
      throw new Error('price must be a positive number');
    }
    this._price = value;
  }

  get price(): number {
    return this._price;
  }

  set type(value) {
    if (!value) {
      throw new RealtyException(RealtyEntityErrorCodes.TYPE_IS_REQUIRED);
    }
    this._type = value;
  }

  get type() {
    return this._type;
  }
}
