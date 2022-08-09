const SUPABASE_URL = 'https://wnqlkddwtioqxzelzrcz.supabase.co';
const SUPABASE_KEY = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InducWxrZGR3dGlvcXh6ZWx6cmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2Mzg0MDcsImV4cCI6MTk3NTIxNDQwN30.sOHh30_09c1idVDabdUcHwVeDGSNmAi2PxGdC33ZcIc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getColors() {
    const response = await client.from('Colors').select('*');

    return response.data;
}

export async function getColor(id) {
    const response = await client.from('Colors').select('*').match({ id }).single();

    return response.data;
}

getColors();



