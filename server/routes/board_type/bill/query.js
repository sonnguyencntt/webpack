module.exports = {
    query_select : "SELECT bill.IdBill,bill.id, staff.name, tables.TableName, customers.CustomerName,"+
    "DATE_FORMAT(bill.create_at , '%d-%m-%y %h:%m:%s') as create_at,bill.idStatus,bill.Totalprice,"+
    " bill.Note, GROUP_CONCAT(billdetail.IdDetail SEPARATOR '@#$') as idbilldetail "+
    " ,GROUP_CONCAT(billdetail.IdMenu SEPARATOR '@#$') as idmenu, GROUP_CONCAT(billdetail.Quantity SEPARATOR '@#$') as quantity"+
    ", GROUP_CONCAT(billdetail.Price SEPARATOR '@#$') as billdetail_price , GROUP_CONCAT(menus.NameMenu SEPARATOR '@#$') as namemenu"+
    ",GROUP_CONCAT(menus.Unit SEPARATOR '@#$') as unit,GROUP_CONCAT(menus.Price SEPARATOR '@#$') as menu_price FROM "+
    " billdetail,users,tables,staff, menus, bill LEFT JOIN customers ON bill.IdCustomer = customers.IdCustomer   WHERE bill.IdBill = billdetail.IdBill and bill.IdUser=users.UserId"+
    " and bill.IdTable = tables.IdTable  AND users.id_staff = staff.id AND"+
    " billdetail.IdMenu = menus.IdMenu GROUP BY billdetail.IdBill",
    query_searchfor_Idbill : function(id)
    {
    return "SELECT bill.IdBill, staff.name, tables.TableName, customers.CustomerName,"+
    "DATE_FORMAT(bill.create_at , '%d-%m-%y %h:%m:%s') as create_at,bill.idStatus,bill.Totalprice,"+
    " bill.Note, GROUP_CONCAT(billdetail.IdDetail SEPARATOR '@#$') as idbilldetail "+
    " ,GROUP_CONCAT(billdetail.IdMenu SEPARATOR '@#$') as idmenu, GROUP_CONCAT(billdetail.Quantity SEPARATOR '@#$') as quantity"+
    ", GROUP_CONCAT(billdetail.Price SEPARATOR '@#$') as billdetail_price , GROUP_CONCAT(menus.NameMenu SEPARATOR '@#$') as namemenu"+
    ",GROUP_CONCAT(menus.Unit SEPARATOR '@#$') as unit,GROUP_CONCAT(menus.Price SEPARATOR '@#$') as menu_price FROM bill"+
    ", billdetail,users,tables,customers,staff, menus  WHERE bill.IdBill = billdetail.IdBill and bill.IdUser=users.UserId"+
    " and bill.IdTable = tables.IdTable and bill.IdCustomer = customers.IdCustomer AND users.id_staff = staff.id AND"+
    " billdetail.IdMenu = menus.IdMenu AND bill.IdBill LIKE '%"+id+"%'  GROUP BY billdetail.IdBill"
    },
    query_searchfor_datetime : function(from, to)
    {
    return "SELECT bill.IdBill, staff.name, tables.TableName, customers.CustomerName,"+
    "DATE_FORMAT(bill.create_at , '%d-%m-%y %h:%m:%s') as create_at,bill.idStatus,bill.Totalprice,"+
    " bill.Note, GROUP_CONCAT(billdetail.IdDetail SEPARATOR '@#$') as idbilldetail "+
    " ,GROUP_CONCAT(billdetail.IdMenu SEPARATOR '@#$') as idmenu, GROUP_CONCAT(billdetail.Quantity SEPARATOR '@#$') as quantity"+
    ", GROUP_CONCAT(billdetail.Price SEPARATOR '@#$') as billdetail_price , GROUP_CONCAT(menus.NameMenu SEPARATOR '@#$') as namemenu"+
    ",GROUP_CONCAT(menus.Unit SEPARATOR '@#$') as unit,GROUP_CONCAT(menus.Price SEPARATOR '@#$') as menu_price FROM bill"+
    ", billdetail,users,tables,customers,staff, menus  WHERE bill.IdBill = billdetail.IdBill and bill.IdUser=users.UserId"+
    " and bill.IdTable = tables.IdTable and bill.IdCustomer = customers.IdCustomer AND users.id_staff = staff.id AND"+
    " billdetail.IdMenu = menus.IdMenu AND bill.create_at BETWEEN '"+from+" 00:00:01' AND '"+to+" 23:59:59'  GROUP BY billdetail.IdBill"
    },
    query_exportExcel : "SELECT bill.IdBill, staff.name, tables.TableName, customers.CustomerName,"+
    "DATE_FORMAT(bill.create_at , '%d-%m-%y %h:%m:%s') as create_at,bill.idStatus,bill.Totalprice,"+
    " bill.Note, billdetail.IdDetail"+
    " ,billdetail.IdMenu ,billdetail.Quantity"+
    ", billdetail.Price ,menus.NameMenu "+
    ",menus.Unit ,menus.Price FROM bill"+
    ", billdetail,users,tables,customers,staff, menus  WHERE bill.IdBill = billdetail.IdBill and bill.IdUser=users.UserId"+
    " and bill.IdTable = tables.IdTable and bill.IdCustomer = customers.IdCustomer AND users.id_staff = staff.id AND"+
    " billdetail.IdMenu = menus.IdMenu ",
}
