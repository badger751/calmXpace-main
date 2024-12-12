import supabase from './supabaseclient';

// Fetch all data from the 'up' table
const fetchData = async () => {
  const { data, error } = await supabase.from('up').select('*');

  if (error) {
    console.error('Error fetching data:', error);
    // Handle error, e.g., display an error message
  }

  return data;
};

export default fetchData;

export const fetchDatancr = async () => {
  const { data, error } = await supabase.from('ncr').select('*');

  if (error) {
    console.error('Error fetching data:', error);
    // Handle error, e.g., display an error message
  }

  return data;
};

export const fetchDatabihar = async () => {
  const { data, error } = await supabase.from('bihar').select('*');

  if (error) {
    console.error('Error fetching data:', error);
    // Handle error, e.g., display an error message
  }

  return data;
};

export const fetchDatamp = async () => {
  const { data, error } = await supabase.from('mp').select('*');

  if (error) {
    console.error('Error fetching data:', error);
    // Handle error, e.g., display an error message
  }

  return data;
};

// Fetch post by ID
export const fetchPostById = async (postId: string) => {
  const { data, error } = await supabase
    .from('up')
    .select('*')
    .eq('id', postId)
    .single();

  if (error) {
    console.error('Error fetching post:', error);
    throw new Error('Failed to fetch post');
  }

  return data;
};

export const fetchPostByIdb = async (postId: string) => {
  const { data, error } = await supabase
    .from('bihar')
    .select('*')
    .eq('id', postId)
    .single();

  if (error) {
    console.error('Error fetching post:', error);
    throw new Error('Failed to fetch post');
  }

  return data;
};

// Fetch live stream data
export const fetchLiveStream = async (streamId: string) => {
  const { data, error } = await supabase
    .from('live') // Adjust table name if needed
    .select('*') // Fetch only required columns
    .eq('id', streamId) // Match the specific live stream ID
    .single();

  if (error) {
    console.error('Error fetching live stream:', error);
    throw new Error('Failed to fetch live stream');
  }
  return data;
};
