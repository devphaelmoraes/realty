interface RealtyProps {
  title: string;
  description?: string;
}

export class Realty {
  private _id: number;
  private _title: string;
  private _description: string;

  private constructor(props: RealtyProps) {
    this._title = props.title;
    this._description = props.description;
  }

  public static create(props: RealtyProps) {
    if (!props.title) {
      throw new Error('title is required');
    }
    if (props.title.length < 3 || props.title.length > 300) {
      throw new Error('title must contain between 3 and 300 characters');
    }

    if (props.description?.length > 500) {
      throw new Error(
        'description must be less than or equal to 500 characters',
      );
    }
    return new Realty(props);
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }
}
