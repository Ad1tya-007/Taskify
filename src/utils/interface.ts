export interface ITask {
  id: number | null;
  name: string | null;
  date: string | null;
  completed: boolean | false;
  type: string | 'ALL';
}

export interface IList {
  id: string | null;
  name: string | null;
  color: string;
}
