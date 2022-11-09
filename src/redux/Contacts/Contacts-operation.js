import * as fetch from "components/fetch/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";


export const isDublicate = ({name, phone}, contacts) => {
    const normalizedName = name.toLowerCase();
    const normalizedPhone = phone.toLowerCase();

    const result = contacts.find(item => {
        return (normalizedName === item.name.toLowerCase() && normalizedPhone === item.phone.toLowerCase())
    });
    
    return Boolean(result);
}

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(_, thunkApi) => {
        try {
            const data = await fetch.getContacts();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);
 

export const addContact = createAsyncThunk(
    "contacts/add",
    async (data, { rejectWithValue }) => {
 
        try {
            const result = await fetch.addContact(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, { getState }) => {
            const { contacts } = getState();
            if (isDublicate(data, contacts.items)) {
            const massege = Notiflix.Notify.info(`${data.name} - ${data.phone} is already exist`);
                return massege(data);
            }
        }
    },
)

export const removeContact = createAsyncThunk(
    "contacts/remove",
    async(id, {rejectWithValue}) => {
        try {
            await fetch.removeContact(id);
            return id;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
)