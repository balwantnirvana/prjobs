import { jobConstants } from "../constants";

export function jobs(state = { loading: false}, action) {
  switch (action.type) {
    case jobConstants.CREATE_REQUEST:
      return {
        creating: true,
      };
    case jobConstants.CREATE_SUCCESS:
      return {
        job: action.payload,
        created: true,
      };
      case jobConstants.DETAIL_REQUEST:
        return {
          loading: true,
        };  
    case jobConstants.DETAIL_SUCCESS:
      return {
        job: action.payload,
        loading: false,
      };
    case jobConstants.DETAIL_FAILURE:
      return {
        error: action.error,
        loading: false,
      };
    case jobConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case jobConstants.GETALL_SUCCESS:
      return {
        job: action.payload,
        loading: false,
      };
    case jobConstants.GETALL_FAILURE:
      return {
        error: action.error,
        loading: false,
      };

      case jobConstants.DELETE_REQUEST:
        return {
          deleting: true,
        };
      case jobConstants.DELETE_SUCCESS:
        return {
          job: state,
          deleting: false,
        };
      case jobConstants.DELETE_FAILURE:
        return {
          error: action.error,
          loading: false,
        };  

    default:
      return state;
  }
}
