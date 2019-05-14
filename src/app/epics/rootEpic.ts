import { combineEpics } from 'redux-observable';
import * as pingEpics from 'app/epics/pingEpic';


export default combineEpics(...Object.values(pingEpics));
