import { createStore, combineReducers } from 'redux';
import Default from './themes/default';
import WeeklyCalendar from './themes/weeklyCalendar';
import GreetingsTitle from './themes/greetingsTitle';
import Productpage from './themes/productpage';

            
const reducers = combineReducers({
    Default,
WeeklyCalendar,
GreetingsTitle,
Productpage,

});

const store = createStore(reducers);

export default (store);