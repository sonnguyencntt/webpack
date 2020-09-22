import React, { Component } from 'react';







///////////
class Header extends Component {
  
 
  render() 
  {
	console.log('header')

    return (
     
       
     <div className="position-fixed">
		<div id="topsidebar">
		<nav class="navbar navbar-color" role="navigation">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
					<span class="sr-only color">Toggle navigation</span>
					<span class="icon-bar color"></span>
					<span class="icon-bar color"></span>
					<span class="icon-bar color"></span>
				</button>
				<a class="navbar-brand text-color" href="#" onClick={ev => {ev.preventDefault()}}>Quản lý Quán Cà Phê</a>
			</div>
		
			<div class="collapse navbar-collapse navbar-ex1-collapse collapse-index">
				
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<a href="#" class="dropdown-toggle text-color" data-toggle="dropdown">Xin chào Admin<b class="caret " ></b></a>
						<ul class="dropdown-menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li><a href="#">Separated link</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
		
		</div>
     </div>
    );
  }
}

export default Header;