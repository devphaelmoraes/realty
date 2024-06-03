export enum RealtyAddressErrorCodes {
  STREET_IS_REQUIRED = 'street_is_required',
  STREET_MUST_BE_LESS_THAN_OR_EQUAL_250 = 'street_must_be_less_than_or_equal_250',
  ZIP_CODE_IS_REQUIRED = 'zip_code_is_required',
  ZIP_CODE_IS_INVALID = 'zip_code_is_invalid',
  HOUSE_NUMBER_MUST_BE_A_POSITIVE_NUMBER = 'house_number_must_be_a_positive_number',
  HOUSE_NUMBER_IS_REQUIRED = 'house_number_is_required',
  COMPLEMENT_MUST_BE_LESS_THAN_OR_EQUAL_500 = 'complement_must_be_less_than_or_equal_500',
  CITY_ID_MUST_BE_A_POSITIVE_NUMBER = 'city_id_must_be_a_positive_number',
  CITY_ID_IS_REQUIRED = 'city_id_is_required',
  STATE_ID_IS_REQUIRED = 'state_id_is_required',
  STATE_ID_MUST_BE_A_POSITIVE_NUMBER = 'state_id_must_be_a_positive_number',
}
