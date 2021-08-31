import { derived, writable } from 'svelte/store'

function parseCookies(cookies) {
    return Object.fromEntries(
        cookies.split(';').map((cookie) => cookie.trim().split('='))
    )
}

function createCookieStore() {
    const { subscribe, set } = writable(parseCookies(document.cookie))

    function refresh() {
        set(parseCookies(document.cookie))
    }

    let lastCookie = document.cookie
    setInterval(() => {
        if (document.cookie !== lastCookie) {
            lastCookie = document.cookie
            refresh()
        }
    }, 5000)

    return {
        subscribe,
        refresh,
        /**
         * Adds a new cookie to document.cookie
         *
         * @param {string} newCookie The new cookie to add
         */
        add: (newCookie) => {
            document.cookie = newCookie
            refresh()
        },
        delete: (cookieName) => {
            document.cookie = `${cookieName}=; max-age=0`
            refresh()
        },
    }
}

export const cookies = createCookieStore()
export const discordToken = derived(cookies, (value) => value['discord-token'])
