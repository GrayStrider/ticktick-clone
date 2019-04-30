// -- Tasks
export type TTaskID = string
export type TTasks = { [ID: string]: ITask }
export interface ITask {
  readonly id: TTaskID
  title: string
  description: string
  priority: EPriorities
  completed: boolean
  list: TListID
  readonly timeCreated: number
  timeLastModified: number
}

// -- Priorities
export enum EPriorities {
  High = 'HIGH',
  Medium = 'MEDIUM',
  Low = 'LOW',
  None = 'NONE'
}

// -- Tags
export type TTagID = string
export type TTags = { [ID: string]: ITag }
export interface ITag {
  readonly id: TTagID
  name: string
  readonly type: 'tags'
  tasks: TTaskID[]
}

// -- Lists
export type TListID = string
export type TLists = { [ID: string]: IList }
export interface IList {
  readonly id: TListID
  name: string
  readonly type: 'list'
}
