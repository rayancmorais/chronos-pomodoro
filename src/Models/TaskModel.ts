export type TaskModel = {
  id: string;
  name: string;
  durationInMinutes: number;
  startDate: number;
  completeDate: number | null; //quando o timer chega ao final
  interruptDate: number | null; //quando a task for interrupted
  type: 'workTime' | 'longBreakTime' | 'shortBreakTime';
  
};
