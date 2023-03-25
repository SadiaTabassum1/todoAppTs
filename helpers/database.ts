// import { createClient } from '@supabase/supabase-js';

// export default class Database {
//   static instance = undefined;

//   constructor() {
//     if (Database.instance) {
//       return Database.instance;
//     }

//     this.supabase = createClient(process.env.BASE_URL, process.env.KEY);

//     Database.instance = this;
//   }
// }

import { createClient } from '@supabase/supabase-js'

interface Database {
  public: {
    Tables: {
      todos: {
        Row: {} // The data expected to be returned from a "select" statement.
        Insert: {} // The data expected passed to an "insert" statement.
        Update: {} // The data expected passed to an "update" statement.
      }
    }
  }
}

export const supabase = createClient<Database>(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)




