export function callApiIfAuthed(endpoint, token, options = {}) {
    return (
        token &&
        fetch(`https://discord.com/api/v8${endpoint}`, {
            ...options,
            headers: {
                Authorization: `Bearer ${token}`,
                ...options.headers,
            },
        }).then((response) => {
            if (!response.ok) {
                return response
                    .json()
                    .then(({ message }) => Promise.reject(new Error(message)))
            }
            return response.json()
        })
    )
}
