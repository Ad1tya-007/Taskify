export interface ITask {
  id: number | null;
  name: string | null;
  date: string | null;
  completed: boolean | false;
  type: string | 'ALL';
}
