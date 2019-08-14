export const getStatus = () => {
    return fetch('/api/status').then(res => res.text())
}

export const getUsers = () => {
    return fetch('/api/users');
}

export const getHotels = () => {
    return fetch('/api/hotels');
}