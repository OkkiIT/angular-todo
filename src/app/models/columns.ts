export interface Column {
  title: string;
  key: ColumnsType
}

export type ColumnsType = 'todo' | 'inProgress' | 'done'
