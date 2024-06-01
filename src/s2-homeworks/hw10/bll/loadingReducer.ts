const CHANGE_LOADING = 'CHANGE_LOADING';

const initState = {
    isLoading: false,
};

type LoadingStateType = typeof initState;

type LoadingActionType = {
    type: typeof CHANGE_LOADING;
    isLoading: boolean;
};

export const loadingReducer = (state: LoadingStateType = initState, action: LoadingActionType): LoadingStateType => {
    switch (action.type) {
        case CHANGE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading 
            };
        default:
            return state;
    }
};

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: CHANGE_LOADING,
    isLoading,
});