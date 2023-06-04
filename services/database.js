import { api } from './api'


export async function login(data) {
    const res = await api.post('/login', data)
    return res
}

export async function cadastro(data) {
    const res = await api.post('/cadastro', data)
    return res
}

export async function cadastro_permission(data) {
    const res = await api.post('/cadastro/permission', data)
    return res
}