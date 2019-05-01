// -- Tasks

export type TTaskID = string
export type TTasks = { [ID: string]: ITask }

export interface ITask {
  readonly id: TTaskID
  title: string
  description: string
  priority: EPriorities
  completed: boolean
  readonly timeCreated: number
  // time in seconds
  timeLastModified: number
}

// -- Priorities
export enum EPriorities {
  High = 3,
  Medium = 2,
  Low = 1,
  None = 0
}

// -- Tags
export type TTagID = string
export type TTags = { [ID: string]: ITag }

export interface ITag {
  readonly id: TTagID
  name: string
  readonly type: ETabs.tags
  tasks: TTaskID[]
}

// -- Lists
export type TListID = string
export type TLists = { [ID: string]: IList }

export interface IList {
  readonly id: TListID
  name: string
  readonly type: ETabs.lists,
  tasks: TTaskID[]

}


export type TCustomListID = string
export type TCustomLists = { [ID: string]: ICustomList }

export interface ICustomList {
  readonly id: TCustomListID
  name: string
  readonly type: ETabs.custom
}

// tabs
// export const tabs = ['lists', 'tags', 'custom'];
export enum ETabs {
  lists = 'lists',
  tags = 'tags',
  custom = 'custom'
}
