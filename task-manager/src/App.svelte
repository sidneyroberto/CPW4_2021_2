<script lang="ts">
    import { Router, Route } from "svelte-navigator";
    import Header from "./components/Header.svelte";
    import Home from "./views/Home.svelte";
</script>

<Header />

<Router>
    <Route to="/" component={Home} />
</Router>
