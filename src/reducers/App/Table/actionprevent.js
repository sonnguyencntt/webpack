import * as Types from './../../../constants/ActionType';
import { table } from './eventtable';



const actionPrevent = (state = {link : '/table'} , action) =>
{
  var newstate = {...state}
  return newstate;
}
export default actionPrevent;