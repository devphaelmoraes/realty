export enum RealtyErrorCodes {
  PRICE_IS_REQUIRED = 'price_is_required',
  PRICE_MUST_BE_A_POSITIVE_NUMBER = 'price_must_be_a_positive_number',
  TYPE_IS_REQUIRED = 'type_is_required',
  TITLE_IS_REQUIRED = 'title_is_required',
  TITLE_MUST_BE_GREATER_THAN_3_AND_LESS_THAN_300 = 'title_must_be_greater_than_3_and_less_than_300',
  DESCRIPTION_MUST_BE_LESS_THAN_OR_EQUAL_500 = 'description_must_be_less_than_or_equal_500',
  MAX_IMAGES_EXCEEDED = 'max_images_exceeded',
  DUPLICATED_COVER = 'duplicated_cover',
}
