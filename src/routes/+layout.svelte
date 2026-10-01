<script lang="ts">
  	import Nav from '$lib/components/Nav.svelte';
	import '../app.css'
	let { children } = $props();
</script>

<div class='center'>
<Nav />
{@render children()}
</div>