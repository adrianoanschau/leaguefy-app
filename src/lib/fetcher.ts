import { type DocumentNode } from "graphql";

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_PATH!;
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const fetcher = <TData, TVariables>(
  query: DocumentNode | string,
  variables?: TVariables,
  headers?: RequestInit["headers"]
): (() => Promise<TData>) => {
  return async () => {
    const res = await fetch(GQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
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
