import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = [
    {
    id: 1,
    task: "Have a poo.",
    checked: false,     
    },
    {
    id: 2,
    task: "Play some minecraft...",
    checked: false,     
    },
    {
    id: 3,
    task: "Make dinner.",
    checked: true,     
    }
]


const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        itemAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(id, task, checked) {
                return {
                    payload: {
                        id, 
                        task,
                        checked
                    }
                }
            }
         }
    }
})

export const selectAllItems = (state) => state.items
export const { itemAdded } = itemsSlice.actions


export default itemsSlice.reducer
