import api from "../api";

export async function diasfuncionamento() {
    try {
        const { data } = await api.get(`diaFuncionamento/`);
        return data;
    } catch (error) {
        throw error;
    }
}
export async function diaFuncionamento(id) {
    try {
        const { data } = await api.get(`diaFuncionamento/${id}/`);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function cardapios() {
    try {
        const { data } = await api.get(`cardapio/`);
        return data;
    } catch (error) {
        throw error;
    }
}
export async function cardapio(id) {
    try {
        const { data } = await api.get(`cardapio/${id}/`);
        return data;
    } catch (error) {
        throw error;
    }
}
export async function refeicoes() {
    try {
        const { data } = await api.get(`refeicoes/`);
        return data;
    } catch (error) {
        throw error;
    }
}
export async function refeicao(id) {
    try {
        const { data } = await api.get(`refeicoes/${id}/`);
        return data;
    } catch (error) {
        throw error;
    }
}