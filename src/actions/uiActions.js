import {OPEN_SIDEBAR,OPEN_SIDEBAR_MOBILE,OPEN_MENU_USER} from "../types";

export const open_sidebar = (ui) => {

    return(dispatch)=>{
        dispatch({type:OPEN_SIDEBAR,payload:ui}); 
        dispatch({ type: OPEN_SIDEBAR_MOBILE, payload: false });
    }
}

export const open_sidebar_mobile = (ui) => {

    return(dispatch)=>{
        dispatch({type:OPEN_SIDEBAR_MOBILE,payload:ui});
        dispatch({ type: OPEN_SIDEBAR, payload: false });
        
    }

}

export const open_menu_user = (ui) => {
    return(dispatch)=>{
        dispatch({type:OPEN_MENU_USER,payload:ui});
    }
}