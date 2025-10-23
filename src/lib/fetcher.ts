import { type DocumentNode } from "graphql";
import { createClient } from "./supabase/client";

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_PATH!;
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient();

export const fetcher = <TData, TVariables>(
  query: DocumentNode | string,
  variables?: TVariables,
  headers?: RequestInit["headers"]
): (() => Promise<TData>) => {
  return async () => {
    const { data: { session } } = await supabase.auth.getSession();
    const token = session?.access_token || API_KEY;

    const res = await fetch(GQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: API_KEY,
        Authorization: `Bearer ${token}`,
        ...headers,
      },
      body: JSON.stringify({
        query: typeof query === "string" ? query : query.loc?.source.body,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || "Erro desconhecido";
      throw new Error(message);
    }

    return json.data;
  };
};
