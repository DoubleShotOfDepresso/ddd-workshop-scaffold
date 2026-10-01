<script lang="ts">
  import Post from '$lib/components/Post.svelte';

    import { supabase } from '$lib/supabaseClient';

    let content = $state("");
    let user = $state("");

    let posts: any = $state([]);

    async function search() {
      posts = []

      if (content == "" && user == "") {
        return
      }

    if (user != "" && content != "") {
        const { data, error } = await supabase
            .from("posts")
            .select("*")
            .eq("username", user)
            .ilike("content", "%" + content + "%")

        if (error) {
            console.log(error.message)
            return
        }

        posts = data
        return
    }


      if (user != "") {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("username", user)
        if (error) {
          console.log(error.message)
        }

        posts = data

        return
    }
        
      

      if (content != "") {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .ilike("content", "%" + content + "%")
        if (error) {
          console.log(error.message)
        }

        posts = data

        return
      }
    }

</script>


<div class="container">
    <input bind:value={user} type="text" placeholder="Name">
    <div class="post-container">
            <input bind:value={content} type="text" placeholder="Contains">
    </div>
    <button onclick={search}>Search</button>

</div>

{#each posts.toReversed() as post}
  <Post
    user={post.username}
    content={post.content}
    created={post.created_at}
  />
{/each}