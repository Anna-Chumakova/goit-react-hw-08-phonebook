//import axios from "axios";
import instance from "./FetchUser";

export const getContacts = async () => {
    const { data }  = await instance.get("/contacts");
    return data;
}

export const addContact = async (data) => {
    const {data: result} = await instance.post("/contacts", data);
    return result;
};

export const removeContact = async (id) => {
    const { data } = await instance.delete(`/contacts/${id}`);
    return data;
};