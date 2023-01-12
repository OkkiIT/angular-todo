import {ColumnsType} from "./columns";

export interface Task {
  id: string;
  description: string;
  title: string;
  currentStatus: ColumnsType
}

