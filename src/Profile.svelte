<script>
    import { cookies, discordToken } from './stores'
    import { callApiIfAuthed } from './discord'

    $: profileDataPromise = callApiIfAuthed('/users/@me', $discordToken)

    function login() {
        const oauth2Url = new URL('https://discord.com/oauth2/authorize')
        oauth2Url.searchParams.set('client_id', __CLIENT_ID__)
        oauth2Url.searchParams.set('redirect_uri', window.location.href)
        oauth2Url.searchParams.set('response_type', 'token')
        oauth2Url.searchParams.set('scope', 'identify email guilds')
        window.location.href = oauth2Url
    }

    function logout() {
        cookies.delete('discord-token')
    }
</script>

{#if $discordToken}
    <button on:click={logout}>Logout</button>
{:else}
    <button on:click={login}>Login</button>
{/if}

{#await profileDataPromise then profileData}
    {#if profileData}
        <div class="profile">
            <img
                src="https://cdn.discordapp.com/avatars/{profileData.id}/{profileData.avatar}.webp?size=32"
                alt={profileData.username}
                class="avatar" />
            <span>{profileData.email}</span>
        </div>
    {/if}
{/await}

<style>
    .profile {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
    .avatar {
        border-radius: 100%;
    }
    button {
        background: none;
        color: inherit;
        border: 1px solid currentColor;
        border-radius: 3px;
        padding: 0.5em;
        font-size: 1em;
        transition: background 0.1s ease;
    }
    button:hover {
        background: rgba(0, 0, 0, 0.1);
    }
    button:active {
        background: rgba(0, 0, 0, 0.3);
    }
</style>
