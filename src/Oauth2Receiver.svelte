<script>
    import { onMount } from 'svelte'
    import { cookies } from './stores'

    onMount(() => {
        if (window.location.hash.includes('access_token')) {
            const oauth2Payload = Object.fromEntries(
                window.location.hash
                    .slice(1)
                    .split('&')
                    .map((item) => item.split('='))
            )
            cookies.add(
                `discord-token=${oauth2Payload.access_token}; max-age=${oauth2Payload.expires_in}`
            )
            history.replaceState(
                '',
                document.title,
                location.pathname + location.search
            )
        }
    })
</script>
