import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

const Persons11 =()=> {
    interface ApplicationState {
       id:number,
       name:string,
       age:number
        
      }
      type appState = {
        persons: ApplicationState[]
}
    const prs = useSelector((state:appState) => state.persons);
  
    const dispatch = useDispatch();
     return (
            <div>
                <AddPerson personAdded={() =>dispatch({type: actionTypes.ADD_PERSON})} />
                1111111111111111111111111
                {prs.map((person:ApplicationState) => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                       clicked={() => dispatch({type: actionTypes.REMOVE_PERSON, personId: person.id})}
                       />
                ))}
            </div>
        );
    }



export default Persons11;