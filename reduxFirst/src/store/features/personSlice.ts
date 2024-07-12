// import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// //export interface whixh defines the person object
// export interface Person{
//     id: number;
//     name : string
// }

// //difine the interface for the slide
// export interface PersonState {
//     persons : Person[]
// }


// //define the initial state type os personstate
// const initialState : PersonState = {
//     persons:[]
// }

// //create asyncfunc is a redux toolkit function. it take two arguments.
// //one is a uniqe key among other functions and a function
// //in this case is a async function for data fetching
// // Create the async thunk
// //you can use either one of these functions. 1st one is from ai
// // export const fetchPerson = createAsyncThunk<Person[], void, { rejectValue: string }>(
// //     "person/fetch",
// //     async (_, thunkAPI) => {
// //         const response = await fetch("http://localhost:8000/person", {
// //             method: "GET"
// //         });
// //         if (!response.ok) {
// //             return thunkAPI.rejectWithValue('Failed to fetch persons');
// //         }
// //         const data = await response.json() as Person[];
// //         return data;
// //     }
// // );

// export const fetchPerson : any= createAsyncThunk ("person/fetch" , 
//     async (thunkAPI)=>{
//     const response = await fetch("http://localhost:8000/person",{
//         method:"GET"
//     });
//     const data = response.json()
//     return data
// })

// export const savePerson : any = createAsyncThunk("person/save",async (name:string,thunkAPI)=>{
//     const response = await fetch("http://localhost:8000/person",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             name
//         })
//     })
//     const data =await response.json()
//     return data
// })


// //create slice
// export const PersonSlice = createSlice({
//     name : "person",
//     initialState,
//     //reducer contains our actions which are functions that mutate the object
//     reducers:{
//         //this function take in a state 
//         //as well as an action which defines the type of the parameters
//         addPerson:(state , action: PayloadAction<{name : string}>) => {
//             state.persons.push({
//                 id:state.persons.length,
//                 name:action.payload.name
//             })     
//         }
//     },

//     extraReducers: (builder)=>{
//         builder.addCase(fetchPerson.fulfilled,(state,action)=>{
//             state.persons = action.payload
//         })

//         builder.addCase(savePerson.fulfilled,(state,action)=>{
//             state.persons.push(action.payload)
//         })
//     }
// })

// export default PersonSlice.reducer;
// export const {addPerson} = PersonSlice.actions


import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Person {
  id: number;
  name: string;
}

export interface PersonState {
  persons: Person[];
}

export const initialState: PersonState = {
  persons: [],
};

export const fetchPerson : any = createAsyncThunk(
  "person/fetch",
  async (thunkAPI) => {
    const response = await fetch("http://localhost:8000/person", {
      method: "GET",
    });
    const data = response.json();
    return data;
  },
);

export const savePerson :any = createAsyncThunk(
  "person/save",
  async (name: string, thunkAPI) => {
    const response = await fetch("http://localhost:8000/person", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
    const data = await response.json();
    return data;
  },
);

export const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      state.persons.push({
        id: state.persons.length,
        name: action.payload.name,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPerson.fulfilled, (state, action) => {
      state.persons = action.payload;
    });

    builder.addCase(savePerson.fulfilled, (state, action) => {
      state.persons.push(action.payload);
    });
  },
});

export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions;
