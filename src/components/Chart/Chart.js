import React, {Component} from 'react';
import get_datetime from './../../getDateTime'
import callApi from './../../ultis/apiCaller'
import {Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';
import * as action from '../../actions/index';

class Chart extends Component{

   
    
     prop = (data)=>{
       return {
                  labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7','Chủ nhật'],
                  datasets:[
                    {
                      label : 'Doanh thu',
                      data:data,
                      
                      backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(62, 138, 138, 1)'

                      ]
                    }
                  ]
                }
             
     }
     componentWillMount(){
      callApi('chart', 'POST',get_datetime()).then(res =>{
        if(res == false)
        {
            return;
        }
        console.log(res.data)
       this.props.get_dataChart({
           type : {
               get_chart : {
                   type : 'GET_CHART',
                   data : res.data,
               }
           }
       });
       console.log(res);
    
       
    });
     //this.props.get_dataChart(get_datetime())
     }
 
  render(){
    return (
      <div>


	<div class="col-md-12">
  <Bar
          data={this.prop(this.props.data)}
          options={{
            legend: { display: false },
            title: {
              
              display: true,
              text: 'Thống Kê Doanh Thu Hằng Ngày Trong Tuần',
              fontSize: 30
            },
           
          }}
        />
	</div>

      
      </div>
    )
  }
}
const  mapStateToProps = state =>{
  return{
   data : state.chart,


  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
  
    get_dataChart : (data) =>{
      dispatch(data);
     
    },
  
  }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Chart); 