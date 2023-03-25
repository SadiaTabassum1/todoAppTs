import {
  Module,
  Mutation,
  MutationAction,
  Action,
  VuexModule
} from "vuex-module-decorators";
import { supabase } from '@/helpers/database'

// const database = new Database();
// const supabase = database.supabase;
type task = {
  id: number,
  created_at: string,
  completed_at: null,
  description: string,
  status: boolean
}

@Module({ namespaced: true, stateFactory: true, name: "todo" })
export default class TaskModule extends VuexModule {
  // taskList: task[] = []
  taskList=[]

  get tasks() {
    return this.taskList
  }
  @Mutation
  setTasks(tasks: any) {
    this.taskList = tasks
  }

  @Action
  async getTasks() {
    try {
      const { data: tasks, error } = await supabase
        .from('Todos')
        .select()
        .order('id', { ascending: false });

      if (error) {
        return { success: false };
      }

      // handle for when no todos are returned
      if (tasks === null) {
        return { success: false };
      }

      // store response to allTodos
      this.setTasks(tasks)
      return { success: true };
    } catch (err) {
      throw new Error(err);
    }
   
    
  }
}


