import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { Document } from "@langchain/core/documents";
import { OpenAIEmbeddings } from "@langchain/openai";
import { createBrowserClient } from "@supabase/ssr";

import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabaseClient = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-small",
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const vectorStore = new SupabaseVectorStore(embeddings, {
  client: supabaseClient,
  tableName: "documents",
  queryName: "match_documents",
});

const documents = [
  new Document({
    pageContent: "Mount Everest is the highest mountain in the world.",
    metadata: { source: "https://en.wikipedia.org/wiki/Mount_Everest" },
  }),
];

(async () => {
  try {
    await vectorStore.addDocuments(documents, { ids: ["1"] });
    console.log("Documents added successfully!");
  } catch (error) {
    console.error("Error adding documents:", error);
  }
})();
