import { createStandardAction } from 'typesafe-actions';

export const ping = createStandardAction('PING')<undefined>();
export const pong = createStandardAction('PONG')<undefined>();
