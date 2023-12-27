export interface ITask {
  id: number;
  name: string;
  date: string;
  completed: boolean;
  type: string;
}

export interface IList {
  id: string;
  name: string;
  color: string;
}
