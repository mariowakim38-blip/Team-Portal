import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.https://ihdeeiqwzjazuuwxkusz.supabase.co!
const supabaseAnonKey = process.env.sb_publishable_wUO7RLFQ7_MFbxKb26U5ug_AiVELXO_!

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
