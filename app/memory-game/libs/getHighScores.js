import { supabase } from "@/lib/supabaseClient";
import { toast } from "react-hot-toast";

export const fetchScores = async () => {
  let { data } = await supabase
    .from("mg_hs")
    .select()
    .order("score", { ascending: true })
    .limit(10);

  return data;
};

export const registerScore = async ({ name, score }) => {
  const { error } = await supabase.from("mg_hs").insert({ name, score });

  if (error) {
    toast.error(error);
  }
};
