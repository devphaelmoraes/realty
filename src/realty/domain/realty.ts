interface RealtyProps {
  title: string;
}

export class Realty {
  private _id: number;
  private _title: string;

  private constructor(props: RealtyProps) {
    this._title = props.title;
  }

  public static create(props: RealtyProps) {
    if (!props.title) {
      throw new Error('title is required');
    }
    if (props.title.length < 3 || props.title.length > 300) {
      throw new Error('title must contain between 3 and 300 characters');
    }
    return new Realty(props);
  }

  get title(): string {
    return this._title;
  }
}
