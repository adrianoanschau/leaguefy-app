import path from "path";

import type { CodegenConfig } from "@graphql-codegen/cli";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const GRAPHQL_PATH = process.env.CODEGEN_SUPABASE_GRAPHQL_PATH!;
const API_EKY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`${SUPABASE_URL}${GRAPHQL_PATH}`]: {
      headers: {
        apiKey: API_EKY,
      },
    },
  },
  documents: path.resolve(process.cwd(), "src/schemas/**/*.graphql"),
  generates: {
    "src/gql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
        {
          add: {
            content: `
type FetchOptions = {
cache?: RequestCache;
next?: NextFetchRequestConfig;
};

            type RequestInit = {
              headers: (HeadersInit & FetchOptions) | FetchOptions;
            };`,
          },
        },
      ],
      config: {
        withHooks: true,
        // Needed to support the updated React Query 5 API
        reactQueryVersion: 5,
        legacyMode: false,
        exposeFetcher: true,
        exposeQueryKeys: true,
        addSuspenseQuery: true,
        fetcher: "@/lib/fetcher#fetcher",
      },
    },
    "src/gql/": {
      preset: "client",
      plugins: [],
      hooks: {
        beforeDone: ["prettier --write"],
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
