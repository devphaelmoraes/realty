interface RealtyImagesProps {
  url: string;
  isCover: boolean;
}

export class RealtyImage {
  private _url: string;
  private _isCover: boolean;

  constructor(props: RealtyImagesProps) {
    this._url = props.url;
    this._isCover = props.isCover;
  }

  get url(): string {
    return this._url;
  }

  get isCover(): boolean {
    return this._isCover;
  }
}
