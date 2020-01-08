import {FRIENDS_FAMILY, GEOGRAPHICS, ORGANISATION, RECREATION, SOCIALS} from '../types';

const initialState = {
    FRIENDS_FAMILY_LIST: [],
    GEOGRAPHICS_LIST: [],
    ORGANISATION_LIST: [],
    RECREATION_LIST: [],
    SOCIALS_LIST: [],
};

export const DataReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case FRIENDS_FAMILY: 
        return {
            ...state,
            FRIENDS_FAMILY_LIST: [...FRIENDS_FAMILY, action.payload]
        }

        case GEOGRAPHICS: {
            return {
                ...state,
                GEOGRAPHICS_LIST: [...GEOGRAPHICS_LIST, action.payload]
            }
        }

        case ORGANISATION: {
            return {
                ...state,
                ORGANISATION_LIST: [...ORGANISATION_LIST, action.payload]
            }
        }

        case RECREATION : {
            return {
                ...state,
                RECREATION_LIST: [...RECREATION_LIST, action.payload]
            }
        }

        case SOCIALS : {
            return {
                ...state,
                SOCIALS_LIST: [...SOCIALS_LIST, action.payload]
            }
        }

         default:
            return state
    }
}