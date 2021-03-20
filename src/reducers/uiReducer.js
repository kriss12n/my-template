// cada reducer tiene un initial state
import {OPEN_SIDEBAR,OPEN_SIDEBAR_MOBILE, OPEN_MENU_USER} from "../types";

const INIT_STATE = {
    sidebarWebOpen:false,
    sidebarMobileOpen:false,
    menuUser:false,
    loading:false
}

export const uiReducer = (state = INIT_STATE, action) => {

    switch(action.type){
        
        case OPEN_SIDEBAR:
            return{
                ...state,
                sidebarWebOpen:action.payload
            }
        case OPEN_SIDEBAR_MOBILE:
            return{
                ...state,
                sidebarMobileOpen:action.payload
            }
        case OPEN_MENU_USER:
            return{
                ...state,
                menuUser:action.payload
            }

        default:
            return state;
    }
}

export default uiReducer;