import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://qjzomytkedaxixmlxiku.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqem9teXRrZWRheGl4bWx4aWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNzE1NjAsImV4cCI6MjA0Nzk0NzU2MH0.CN6CHZxCBerWFApmlZ6ul90u4Mme0rtK2_1KKRHTaJk');

export default supabase;