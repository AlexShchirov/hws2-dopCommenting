const initState = {
    themeId: 1,
}
export type ThemeState = {
    theme: {
        themeId: number;
    };
}

export type ThemeStateType = typeof initState

type SetThemeIdAction = {
    type: 'SET_THEME_ID'
    payload: number
}

type ActionsType = SetThemeIdAction

export const themeReducer = (state: ThemeStateType = initState, action: ActionsType): ThemeStateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return { ...state, themeId: action.payload }
        default:
            return state
    }
}

export const changeThemeId = (id: number): SetThemeIdAction => ({
    type: 'SET_THEME_ID',
    payload: id,
})