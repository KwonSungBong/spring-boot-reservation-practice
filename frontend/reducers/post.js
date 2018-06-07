import { FIND_POST_SUMMARY_LIST,FIND_POST_SUMMARY_LIST_SUCCESS,FIND_POST_SUMMARY_LIST_FAIL,
    FIND_POST_DETAIL_ONE, FIND_POST_DETAIL_ONE_SUCCESS, FIND_POST_DETAIL_ONE_FAIL,
    CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAIL,
    UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_FAIL,
    REMOVE_POST, REMOVE_POST_SUCCESS, REMOVE_POST_FAIL } from '../constants'

const initialState = {
    loading: false,
    summaryList: {},
    infiniteSummaryList: {},
    detailOne: {},
    searchStatus: [],
    search: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FIND_POST_SUMMARY_LIST:
            return { ...state}
        case FIND_POST_SUMMARY_LIST_SUCCESS:
            return { ...state}
        case FIND_POST_SUMMARY_LIST_FAIL:
            return { ...state}
        case FIND_POST_DETAIL_ONE:
            return { ...state}
        case FIND_POST_DETAIL_ONE_SUCCESS:
            return { ...state}
        case FIND_POST_DETAIL_ONE_FAIL:
            return { ...state}
        case CREATE_POST:
            return { ...state}
        case CREATE_POST_SUCCESS:
            return { ...state}
        case CREATE_POST_FAIL:
            return { ...state}
        case UPDATE_POST:
            return { ...state}
        case UPDATE_POST_SUCCESS:
            return { ...state}
        case UPDATE_FAIL:
            return { ...state}
        case REMOVE_POST:
            return { ...state}
        case REMOVE_POST_SUCCESS:
            return { ...state}
        case REMOVE_POST_FAIL:
            return { ...state}
        default:
            return state
    }
}

export function findSummaryList(){
    return {
        types: [FIND_POST_SUMMARY_LIST, FIND_POST_SUMMARY_LIST_SUCCESS, FIND_POST_SUMMARY_LIST_FAIL],
        promise: (client) => client.get('/post')
    }
}
