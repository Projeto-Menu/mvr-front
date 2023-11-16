import api from "./api";

export async function find(id) {
    try {
        const { data } = await api.get(`search.php?f=${id}`);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function findAll() {
    try {
        const { data } = await api.get(`random.php`);
        return data;
    } catch (error) {
        throw error;
    }
}