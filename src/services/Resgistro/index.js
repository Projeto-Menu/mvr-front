/* eslint-disable no-useless-catch */
import api from "../api";

export async function create(form) {
    try {
        const { data } = await api.post(`usuarios/`, form);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function find(id) {
    try {
        const { data } = await api.get(`usuarios/${id}`);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function findAll() {
    try {
        const { data } = await api.get(`usuarios/`);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function altenticacao() {
    try {
        const { data } = await api.get(`login/`);
        return data;
    } catch (error) {
        throw error;
    }
}
