import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//export interface whixh defines the person object
export interface Person{
    id: number;
    name : string
}

//difine the interface for the slide
export interface PersonState {
    persons : Person[]
}


//define the initial state type os personstate
const initialState : PersonState = {
    persons:[]
}

//create slice
export const PersonSlice = createSlice({
    name : "person",
    initialState,
    //reducer contains our actions which are functions that mutate the object
    reducers:{
        //this function take in a state 
        //as well as an action which defines the type of the parameters
        addPerson:(state , action: PayloadAction<{name : string}>) => {
            state.persons.push({
                id:state.persons.length,
                name:action.payload.name
            })     
        }
    }
})

export default PersonSlice.reducer;
export const {addPerson} = PersonSlice.actions