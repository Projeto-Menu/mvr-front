/* eslint-disable no-useless-catch */
import api from "@/services/api";

export async function create(form) {
    try {
        const { data } = await api.post(`users`, form);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function find(id) {
    try {
        const { data } = await api.get(`users/${id}`);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function findAll() {
    try {
        const { data } = await api.get(`users`);
        return data;
    } catch (error) {
        throw error;
    }
}
