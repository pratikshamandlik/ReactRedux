export const ADD_PERSON = 'ADD_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';
export const LOGIN = 'LOGIN';

export const addPerson = () => {
    return {
        type: "ADD_PERSON",
       
       
    }
}

export const removePerson = (id) => {
    return {
        type: "REMOVE_PERSON",
        personId:id
    }
}

export const login = (data) => {
    return {
        type: "LOGIN",
        userData:data
    }
}




