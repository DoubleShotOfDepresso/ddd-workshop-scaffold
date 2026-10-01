import { supabase } from "#lib/supabaseClient.js";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  // TASK 1: Get Messages
  // const { data, error } = await supabase

  // if (error) {
  //   console.error("Error loading posts:", error.message);
  //   return { posts: [], error: error.message };
  // }

  return {
    // posts: data ?? [],
    error: null,
  };
};
