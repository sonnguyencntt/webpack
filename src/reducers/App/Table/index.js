import { combineReducers } from 'redux';
import  rooms from './rooms';
import status from './status';
import stttable from './stttable';
import * as event from './eventtable';
import navigation from './navigation';
import * as form from './formtable';
import * as redirect from './../redirect';
import * as modal from './modal'
import * as formRoom from './formroom'
import styleEvent from './styleevent'
import * as tap from './tap'
import * as table from './table';
import actionPrevent from './actionprevent';
import { filterActions } from 'redux-ignore'; 

const appReducers = combineReducers({
    redirect : redirect.redirect,
    table : combineReducers({
        index : table.index,
        count : table.count,
        data : table.data
    }),
    stttable,
    event : combineReducers ({
       room : event.room,
        table: event.table,
        status : event.status
    }),
    navigation,
    formtable : combineReducers({
        idtable : form.idtable,
        name : form.name,
        idarea : form.idarea,
        status : form.status,
        bill : form.bill
    }),

    /////////// Edit Reducers (ROOM) ///////////////////////

    showModal : combineReducers({
        mTable : combineReducers({
            text : modal.t_Text,
                   classOntap : modal.t_Ontap,
        }),
        mRoom : combineReducers({
            text : modal.r_Text,
            classOntap : modal.r_Ontap
        }),
    
    }),
    formroom : combineReducers({
        room : formRoom.room,
        name : formRoom.name,
        id : formRoom.id,
        onSearch : formRoom.search

    }),
    eventUpdate_Insert : styleEvent,
    rooms ,
    status,
    onTap : combineReducers({
        room : tap.room,
        table : tap.table,
        btnRoom : tap.btnRoom,
        btnTable : tap.btnTable

    }),

    //event preventDefault
    actionPrevent,
   

 
});

export default appReducers;