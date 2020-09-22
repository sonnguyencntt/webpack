import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as Feature from './../../actions/pos/feature'


///////







///////////
class ListProduct extends Component {
  


  totalPrice = (list) =>{
	  var total = 0
	  for(var i =0; i<list.length ; i++)
	  {
		  total = Number(list[i].TotalPrice) + Number(total)
	  }
	  return total;

  }
appendTable = (id, guestMoney) =>{
    var appendData = Feature.append(id, this.props.menu.menu, this.props.menu.show_list_table);
    if(appendData == true)
    {
        return;
    }
    var oldData = [...this.props.menu.show_list_table]

    var pushToArray = oldData.push(appendData);
    var totalPrice = this.totalPrice(oldData);
    var extraMoney = Number(guestMoney) - Number(totalPrice);


    this.props.append_Data({
        type : {
           
            feature_appendmenu : {
                type : 'FEATURE_APPENDMENU',
                data : oldData
              },
              payment_total: {
                type : 'PAYMENT_TOTAL',
                data : totalPrice
                },
                extra_money: {
                  type : 'EXTRA_MONEY',
                  data : extraMoney
                  },
          }
    })
}

    showList_Menu = (menus) =>
    {
    var result = null;
    if(menus.length > 0)
    {
      
     result = menus.map((menu,index) =>
      {
       
     return (
 
                     
          
<li style = {{backgroundColor: '#baaba1',
                                        borderRadius: '10px'}}
     class="tb-active"><a onClick = {(e)=>{
        e.preventDefault();
        this.appendTable(menu.IdMenu, this.props.menu.guest_money)
        }}  href="#" onclick="cms_select_menu()" title="">
                        <div class="img-product">
                            <img  style = {{borderRadius: '10px'}} src={menu.Images} alt=""/>
                        </div>
                        <div class="product-info">
     <span class="product-name">{menu.NameMenu}</span>
                            <br/>
                            <strong>{menu.Price}</strong>
                        </div>
                    </a>
                </li>      
       );
      })
    }
    else
    {
      var Undefined_ = [];
      for(var i = 0; i< 8 ; i++)
      {
       Undefined_[i] = 	<li class="tb-active"  onclick="cms_load_pos()">Undefined!!!!</li>
         
      }
      result = Undefined_
     return result
    }
    return result;
    };
 
 
  render() 
  
  {
    return (
     
       
        <div class="row product-list">
        <div class="col-md product-list-content">
            <ul>
               
                       
                {/* <li style = {{backgroundColor: '#baaba1',
                                        borderRadius: '10px'}}
     class="tb-active"><a href="#" onclick="cms_select_menu()" title="">
                        <div class="img-product">
                            <img style = {{borderRadius: '10px'}} src="http://lambanh365.com/wp-content/uploads/2015/05/cach-lam-banh-flan-sua-tuoi-cho-be-yeu-93.jpg" alt=""/>
                        </div>
                        <div class="product-info">
                            <span class="product-name">Bánh Flan</span>
                            <br/>
                            <strong>24.000.000đ</strong>
                        </div>
                    </a>
                </li> */}
                {this.showList_Menu(this.props.menu.menu)}
                
               
                
            </ul>
        </div>
    </div>

    );
  }
}

const  mapStateToProps = state =>{
	return{
	 menu : state.pos
	}
  };

  const mapDispatchToProps = (dispatch, props) =>{
    return {
      append_Data : (action) =>{
        dispatch(action)
      }
     
    }
  } 
export default connect(mapStateToProps,mapDispatchToProps)(ListProduct);