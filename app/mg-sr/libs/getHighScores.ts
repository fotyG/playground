import { supabase } from "@/lib/supabaseClient";
import { toast } from "react-hot-toast";

export const fetchScores = async () => {
  let { data } = await supabase
    .from("mg_hs")
    .select()
    .order("score", { ascending: true })
    .order("inserted_at", { ascending: true })
    .limit(10);

  return data;
};

export const registerScore = async ({
  name,
  score,
}: {
  name: string;
  score: number;
}) => {
  const { error: supaBaseError } = await supabase
    .from("mg_hs")
    .insert({ name, score });

  if (supaBaseError) {
    toast.error("Something went wrong!");
    throw supaBaseError;
  }
};
