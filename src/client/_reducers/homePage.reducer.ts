import homePageConstants from '../_constants/homePage.constants';

export default function homePageReducer(
  state = { loading: true },
  action: {type: string, payload: any}
) {
  switch (action.type) {
    case homePageConstants.REQUEST:
      return {
        ...state,
        loading: true
      };
    case homePageConstants.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    default:
      return state;
  }
}
