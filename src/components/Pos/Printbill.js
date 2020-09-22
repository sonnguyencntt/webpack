import React from "react";
import ReactToPrint from "react-to-print";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import Printdata from './Printdata'


class Example extends React.Component {
  render() {
    console.log(this.props.feature)
    return (
      <div>

        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.refs.componentRef}
        />
        <div style = {{display : 'none'}}>
        <Printdata 
        feature = {this.props.feature}
        customer = {this.props.customer}
        ref="componentRef" />
        </div>
       
      </div>
    );
  }
}

const  mapStateToProps = state =>{
  console.log(state);
	return{
  feature : state.pos,
  customer : state.user
	}
  };
  
  
 
  export default connect(mapStateToProps,null)(Example);