import * as actionTypes from './actions';

const initialState = {
    persons: [],
    login:[]
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            return {
                ...state,
                persons: state.persons.concat( newPerson )
            }
        case actionTypes.REMOVE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
       case actionTypes.LOGIN:
           console.log("in login reducer");
                return {
                    ...state,
                    login: action.userData
                }
    }
    return state;
};

export default reducer;