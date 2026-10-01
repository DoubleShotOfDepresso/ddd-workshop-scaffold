<!-- PostCard.svelte -->
<script lang="ts">
    let {user, created, content} = $props();
</script>

<div class='container'>
    <div style="display: flex; justify-content: space-between;">
    
    <span class='post-info'>{user} says</span>
        <span class='post-info'>{created}</span>
    </div>
    <div class="content">{content}</div>
</div>
