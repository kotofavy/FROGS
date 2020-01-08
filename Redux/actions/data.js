import {FRIENDS_FAMILY, RECREATION, ORGANISATION, GEOGRAPHICS, SOCIALS} from '../types';

export const friends_family_member = (data) => {
    return {
        type: FRIENDS_FAMILY,
        payload: data
    }
}

export const recreation = (data) => {
    return {
        type: RECREATION,
        payload: data
    }
}

export const organisation = (data) => {
    return {
        type: ORGANISATION,
        payload: data
    }
}

export const geographics = (data) => {
    return {
        type: GEOGRAPHICS,
        payload: data
    }
}

export const socials = (data) => {
    return {
        type: SOCIALS,
        payload: data
    }
}