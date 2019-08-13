export const getStatus = () => {
    return fetch('/api/status').then(res => res.text())
}