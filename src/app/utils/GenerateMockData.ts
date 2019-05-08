import { Chance } from 'chance';
import { EPriorities, ETabs, TLists, TTags, TTasks } from 'app/types/types';

const MOCK_TASKS_AMOUNT = 1000;
const chance = new Chance(Math.random);

export default function generateMockData(
  tasks: TTasks, tags: TTags, lists: TLists) {

  // generate tasks
  for (let i = 0; i < MOCK_TASKS_AMOUNT; i += 1) {
    const guid = chance.guid();
    const date = new Date();
    const time = date.getTime();
    tasks[guid] = {
      id: guid,
      title: chance.sentence({ words: chance.integer({ min: 2, max: 6 }) }),
      description: chance.sentence({ words: 10 }),
      priority: chance.pickone([
        EPriorities.High,
        EPriorities.Medium,
        EPriorities.Low,
        EPriorities.None]),
      completed: chance.weighted([true, false], [1, 5]),
      timeCreated: time,
      timeLastModified: time

    };
  }
  // generate tags
  for (let i = 0; i < 10; i += 1) {
    const guid = chance.guid();
    tags[guid] = {
      id: guid,
      name: chance.word({ length: chance.integer({ min: 3, max: 10 }) }),
      type: ETabs.tags,
      tasks: chance.pickset(Object.keys(tasks), chance.integer({
        min: MOCK_TASKS_AMOUNT / 10,
        max: MOCK_TASKS_AMOUNT / 5
      }))
    };
  }
  // generate lists
  const randomTasksToDistribute = Object.keys(tasks);
  for (let i = 0; i < 4; i += 1) {
    const guid = chance.guid();
    lists[guid] = {
      id: guid,
      name: chance.capitalize(chance.word({ length: chance.integer({ min: 3, max: 10 }) })),
      type: ETabs.lists,
      tasks: randomTasksToDistribute.splice(0, chance.integer({ min: MOCK_TASKS_AMOUNT / 25, max: MOCK_TASKS_AMOUNT / 6 }))
    };
  }
}
