import { combineReducers } from 'redux';
import * as Menu from './Menu';
import * as List from './List'
import * as Feature from './feature'
import * as Payment from './payment'
import * as Confirm from './confirm'


const appReducers = combineReducers({
   
    areas : Menu.area,
    table : List.table,
    cates : Menu.cate,
    menu : List.menu,
    search_menu : Feature.search,
    show_list_table : Feature.show_list_table,
    payment_total : Payment.totalPrice,
    guest_money : Payment.guestMoney,
    extra_money : Payment.extraMoney,
    tab_controll : Feature.tabControll,
    style_forListMenu : Feature.tabBackgroundControllM,
    style_forListTable : Feature.tabBackgroundControllT,
    search_customer : Feature.search_customer,
    show_customer : Feature.show_customer,
    show_table : Feature.show_table,
    idbill_default : Feature.idbill_default,
    confirm : Confirm.confirmPos



});

export default appReducers;