<script>
    import { callApiIfAuthed } from './discord'
    import { discordToken } from './stores'

    $: guildsPromise = callApiIfAuthed('/users/@me/guilds', $discordToken)
</script>

{#await guildsPromise then guilds}
    {#if guilds}
        <ul class="guilds">
            {#each guilds as guild}
                <li class="guild">
                    <img
                        src="https://cdn.discordapp.com/icons/{guild.id}/{guild.icon}.webp?size=32"
                        alt={guild.name} />
                    <span>{guild.name}</span>
                </li>
            {/each}
        </ul>
    {/if}
{:catch error}
    <pre>{error}</pre>
{/await}

<style>
    .guilds {
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    .guild {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
    .guild img {
        border-radius: 100%;
    }
</style>
