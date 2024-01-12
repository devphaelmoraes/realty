interface RealtyProps {
  title: string;
  description?: string;
  price?: number;
  type?: string;
}

export class Realty {
  private _id: number;
  private _title: string;
  private _description: string;
  private _price: number;

  constructor(props: RealtyProps) {
    this.title = props.title;
    this.description = props.description;
    this.price = props.price;
  }

  private set title(value: string) {
    if (!value) {
      throw new Error('title is required');
    }
    if (value.length < 3 || value.length > 300) {
      throw new Error('title must contain between 3 and 300 characters');
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
    if (value != null && (value <= 0 || isNaN(value))) {
      throw new Error('price must be a positive number');
    }
    this._price = value;
  }

  get price(): number {
    return this._price;
  }

  get type() {
    return 'APARTMENT';
  }
}
