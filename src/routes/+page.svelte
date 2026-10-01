<script lang="ts">
let { data } = $props();
import Post from '$lib/components/Post.svelte';
import Text from '$lib/components/Text.svelte'
</script>

<Text />
{#each data.posts.toReversed() as post}
<Post user={post.username} content={post.content} created={post.created_at}/>
{/each}

