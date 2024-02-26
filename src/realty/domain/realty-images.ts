interface RealtyImagesProps {
  url: string;
  isCover: boolean;
}

export class RealtyImages {
  private images: RealtyImagesProps[] = [];

  public setImage(image: RealtyImagesProps): void {
    this.images.push(image);
  }

  public getImages(): RealtyImagesProps[] {
    return this.images;
  }
}
