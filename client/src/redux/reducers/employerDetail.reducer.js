import { employerConstants } from "../constants";

export function employerDetail(state = { loading: true }, action) {
  switch (action.type) {
    case employerConstants.DETAIL_REQUEST:
      return {
        loading: true,
      };
    case employerConstants.DETAIL_SUCCESS:
      return {
        detail: action.payload,
        loading: false,
      };
    case employerConstants.DETAIL_FAILURE:
      return {
        error: action.error,
        loading: false,
      };
    case employerConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case employerConstants.GETALL_SUCCESS:
      return {
        detail: action.payload,
        loading: false,
      };
    case employerConstants.GETALL_FAILURE:
      return {
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}
