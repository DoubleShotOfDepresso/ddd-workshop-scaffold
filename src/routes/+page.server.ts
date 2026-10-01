import { supabase } from "$lib/supabaseClient";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    console.error("Error loading messages:", error.message);
    return { posts: [], error: error.message };
  }

  return {
    posts: data ?? [],
    error: null,
  };
};
