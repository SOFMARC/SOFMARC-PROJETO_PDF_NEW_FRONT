export const AddToCart = (value) => async dispatch =>{
    dispatch({
        type: "ADD_TO_CART",
        payload: value
    })
}

export const SwitcherAction = (Actiontype)=> async dispatch =>{
    dispatch({
        type:Actiontype
    })
}

export const changePrimaryColor = (value) => async dispatch =>{
    dispatch({
        type: "lightPrimaryColor",
        payload: value
    })
}

export const darkPrimaryColor = (value) => async dispatch =>{
    dispatch({
        type: "darkPrimaryColor",
        payload: value
    })
}