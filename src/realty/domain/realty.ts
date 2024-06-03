import { RealtyAddress } from './realty-address';
import { RealtyErrorCodes } from './realty-error-codes';
import { RealtyImage } from './realty-image';
import { RealtyType } from './realty-type';
import { RealtyException } from './realty.exception';

const REALTY_MAX_IMAGES = 5;

interface RealtyProps {
  title: string;
  description?: string;
  price: number;
  type: RealtyType;
  images?: RealtyImage[];
  address?: RealtyAddress;
}

export class Realty {
  private _id: number;
  private _title: string;
  private _description: string;
  private _price: number;
  private _type: RealtyType;
  private _images: RealtyImage[];
  private _address: RealtyAddress;

  constructor(props: RealtyProps) {
    this.title = props.title;
    this.description = props.description;
    this.price = props.price;
    this.type = props.type;
    this.images = props.images;
    this.address = props.address;
  }

  private set title(value: string) {
    if (!value) {
      throw new RealtyException(RealtyErrorCodes.TITLE_IS_REQUIRED);
    }
    if (value.length < 3 || value.length > 300) {
      throw new RealtyException(
        RealtyErrorCodes.TITLE_MUST_BE_GREATER_THAN_3_AND_LESS_THAN_300,
      );
    }
    this._title = value;
  }

  get title(): string {
    return this._title;
  }

  private set description(value: string) {
    if (value && value.length > 500) {
      throw new RealtyException(
        RealtyErrorCodes.DESCRIPTION_MUST_BE_LESS_THAN_OR_EQUAL_500,
      );
    }
    this._description = value;
  }

  get description(): string {
    return this._description;
  }

  private set price(value: number) {
    if (!value) {
      throw new RealtyException(RealtyErrorCodes.PRICE_IS_REQUIRED);
    }

    if (value < 0) {
      throw new RealtyException(
        RealtyErrorCodes.PRICE_MUST_BE_A_POSITIVE_NUMBER,
      );
    }
    this._price = value;
  }

  get price(): number {
    return this._price;
  }

  set type(value) {
    if (!value) {
      throw new RealtyException(RealtyErrorCodes.TYPE_IS_REQUIRED);
    }
    this._type = value;
  }

  get type() {
    return this._type;
  }

  private set images(values: RealtyImage[]) {
    if (this.isAtMaxImagesLimit(values)) {
      throw new RealtyException(RealtyErrorCodes.MAX_IMAGES_EXCEEDED);
    }

    if (this.isDuplicatedCover(values)) {
      throw new RealtyException(RealtyErrorCodes.DUPLICATED_COVER);
    }

    this._images = values;
  }

  get images(): RealtyImage[] {
    return this._images;
  }

  private isAtMaxImagesLimit(images: RealtyImage[]): boolean {
    return images?.length > REALTY_MAX_IMAGES;
  }

  private isDuplicatedCover(images: RealtyImage[]): boolean {
    return images?.filter((image) => image.isCover).length > 1;
  }

  public removeImage(id: number): void {
    const imgIdx = this.images.findIndex((image) => image.id === id);
    if (imgIdx === -1) {
      throw new RealtyException(RealtyErrorCodes.IMAGE_NOT_FOUND);
    }
    this.images.splice(imgIdx, 1);
  }

  private set address(value: RealtyAddress) {
    this._address = value;
  }

  get address(): RealtyAddress {
    return this._address;
  }
}
