import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase';
import { RunnableSequence } from '@langchain/core/runnables';
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { createClient } from '@/utils/supabase/client';

export const createChain = async () => {
  const embeddings = new OpenAIEmbeddings();
  const supabaseClient = await createClient();

  // Connect to existing pgvector index inside Supabase
  const vectorStore = await SupabaseVectorStore.fromExistingIndex(embeddings, {
    client: supabaseClient,
    tableName: 'documents',
    queryName: 'match_documents',
  });

  // Define prompt structure
  const prompt = ChatPromptTemplate.fromMessages([
    [
      'system',
      "You are a helpful AI assistant. Answer questions based on the provided context. If the context doesn't contain relevant information, say so rather than making things up.",
    ],
    new MessagesPlaceholder('chat_history'),
    ['human', '{input}'],
    ['system', 'Context:\n{context}'],
  ]);

  const llm = new ChatOpenAI({ temperature: 0.3 });
  const retriever = vectorStore.asRetriever();

  // Create a chain that retrieves context and generates responses
  return RunnableSequence.from([
    {
      input: ({ input }) => input,
      context: async ({ input }) => {
        const docs = await retriever.invoke(input);
        return docs.map((doc) => doc.pageContent).join('\n\n');
      },
      chat_history: ({ history }) => history ?? [],
    },
    prompt,
    llm,
  ]);
};
