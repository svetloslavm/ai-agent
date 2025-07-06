export const getCookieKey = (): string => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const match = supabaseUrl.match(/\/\/([^.]*)\./);
  const subdomain = match ? match[1] : '';

  return `sb-${subdomain}-auth-token`;
};
