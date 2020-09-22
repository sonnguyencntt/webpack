import React, { Component, Fragment } from 'react';
import Menu from './Menu';
import NumberTable from './NumberTable';
import MenuProduct from './MenuProduct';
import ListProduct from './ListProduct';
import { connect } from 'react-redux';




///////







///////////
class Tabs extends Component {
    showTab = ()=>{
    if(this.props.pos.tab_controll == 'table')
    {
      return(
        <Fragment>
                <Menu/>
                <NumberTable/> 
        </Fragment>
      )
    }
    else
    {
      return (
        <Fragment>
           <MenuProduct/>
                <ListProduct/>
        </Fragment>
      )
    }
    
  }
  render() 
  {

    return (
     
       
        
			<div class="col-md-6 tablist-color" id="table-list">
			
      <div role="tabpanel">
          <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" >
              <a href="#tab" onClick = {(e)=>{e.preventDefault()
                                       var style_menu = {
                                        backgroundColor :''
                                       }
                                       var style_table = {
                                        backgroundColor : '#eb9898'
                                       }
                                        // this.setState({tab : 'table',
                                        // style_forListMenu : style_menu,
                                        // style_forListTable : style_table
                                        //               });
                        this.props.changeTab({
                          type : {
                            tab_pos_controll : {
                                type : 'TAB_POS_CONTROLL',
                                data : 'table',
                                  }, 
                                  tabbackgroundM_pos_controll : {
                                    type : 'TABBACKGROUND_M_POS_CONTROLL',
                                data : style_menu,
                                  },
                                  tabbackgroundT_pos_controll : {
                                    type : 'TABBACKGROUND_T_POS_CONTROLL',
                                data : style_table,
                                  }
                                }
                        })
              }
                
              } style = {this.props.pos.style_forListTable} >
                  <i class="fa fa-table" aria-hidden="true"></i> &nbsp;&nbsp; Phòng Bàn</a>
              </li>
              <li role="presentation">
                  <a href="#tab"  onClick = {(e)=>{e.preventDefault()
                   var style_menu = {
                    backgroundColor :'#eb9898'
                   }
                   var style_table = {
                    backgroundColor : ''
                   }
                                      //    this.setState({tab : 'menu',
                                      //    style_forListMenu : style_menu,
                                      //    style_forListTable : style_table
  
                                      // });
                                      this.props.changeTab({
                                        type : {
                                          tab_pos_controll : {
                                              type : 'TAB_POS_CONTROLL',
                                              data : 'menu',
                                                }, 
                                                tabbackgroundM_pos_controll : {
                                                  type : 'TABBACKGROUND_M_POS_CONTROLL',
                                              data : style_menu,
                                                },
                                                tabbackgroundT_pos_controll : {
                                                  type : 'TABBACKGROUND_T_POS_CONTROLL',
                                              data : style_table,
                                                }
                                              }
                                      })
              }}style = {this.props.pos.style_forListMenu} >
                  <i class="fa fa-list-alt" aria-hidden="true"></i> &nbsp;&nbsp;
                    Thực Đơn</a>
              </li>
          </ul>
      
          <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="home">
                {this.showTab()}
                {/* <Menu></Menu>
                <NumberTable/> */}
              </div>
              {/* <div role="tabpanel" class="tab-pane" id="tab">
              <MenuProduct></MenuProduct>
                <ListProduct/>
              </div> */}
          </div>
      </div>
      
			</div>

        

    );
  }
}

const  mapStateToProps = state =>{
  console.log(state);
    return{
	  pos: state.pos,
	 
    }
  }

const mapDispatchToProps = (dispatch, props) =>{
  return {
	changeTab: (action) =>{
		dispatch(action)
	},
	
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Tabs);