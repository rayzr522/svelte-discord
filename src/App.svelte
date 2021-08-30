<script>
    import { onMount } from 'svelte'

    import Editor from './Editor.svelte'
    import Guilds from './Guilds.svelte'
    import Oauth2Receiver from './Oauth2Receiver.svelte'
    import Profile from './Profile.svelte'
</script>

<Oauth2Receiver />

<nav>
    <Profile />
</nav>

<main>
    <Guilds />
</main>

<style>
    nav {
        box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.5);
        background: rgb(66, 114, 175);
        color: white;

        display: flex;
        align-items: center;
        gap: 0.5em;
        padding: 0.5em;
    }
    main {
        padding: 0.5em 2em;
    }
</style>
