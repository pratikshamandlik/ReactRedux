import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import FoodList from '../components/Food/FoodList';

import * as actionTypes from '../store/actions';

const Persons1 =()=> {
    const prs = useSelector(state => state.persons);
    const loginData = useSelector(state => state.login.uname);

    const dispatch = useDispatch();
     return (
            <div>
                <AddPerson personAdded={() =>dispatch({type: actionTypes.ADD_PERSON})} />
                {loginData}my
                {prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                       clicked={() => dispatch({type: actionTypes.REMOVE_PERSON, personId: person.id})}
                       />
                ))}
                <FoodList/>
            </div>
        );
    }



export default Persons1;