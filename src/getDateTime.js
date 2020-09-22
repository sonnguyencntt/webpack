function getFirstWeektoLastWeek(now){

	var ObjectDay = 
		{
			Firstday  : 0,
			Lastday : 6
		}
	
	switch (now)
{
    
    case 1 : {
		return ObjectDay = 
		{
			Firstday : 0,
			Lastday : 6,
		}
       
	}
	case 2 : {
		

		return ObjectDay = 
		{
			Firstday :1,
			Lastday : 5,
		}
        
	}
	case 3 : {
		return ObjectDay = 
		{
			Firstday : 2,
			Lastday : 4,
		}
        
	}
	
	case 4 : {
		return ObjectDay = 
		{
			Firstday : 3,
			Lastday : 3,
		}
      
	}
	case 5 : {
		return ObjectDay = 
		{
			Firstday : 4,
			Lastday : 2,
		}
       
	}
	case 6 : {
     
        return ObjectDay = 
		{
			Firstday : 5,
			Lastday : 1,
		}
	}
	case 0 : {
     
        return ObjectDay = 
		{
			Firstday : 6,
			Lastday : 0,
		}
	}
	
    default : {
		console.log('Gia tri dau vao khong hop le, vui long kiem tra lai');
		return null;
    }
}
}

function subtractAndAddDateTime(object){
	var dayOfweek = [];

	
	

	//let monday = subTractday.getDate() + "/" + (subTractday.getMonth() + 1) + "/" + subTractday.getFullYear();
	for(var date = 0; date <=6; date++)
	{
		const beginDay = new Date(new Date().setDate(new Date().getDate()-object.Firstday + date));
		dayOfweek[date] = beginDay.getDate() + "/" + (beginDay.getMonth() + 1) + "/" + beginDay.getFullYear();
	}
	
	return dayOfweek
	// const addDay = new Date(new Date().setDate(new Date().getDate()+object.Lastday
	// ));

	// let sunday = addDay.getDate() + "/" + (addDay.getMonth() + 1) + "/" + addDay.getFullYear();

	

}

export default function(){

	const date = new Date();
	const now = date.getDay();
	console.log(now);

	const ObjectDay = getFirstWeektoLastWeek(now);

	

	let FristAndLastDateofWeek = 
	{
		FromDay : '1/1/1990',
		NextDay : '9/9/9999'
	}
	return  FristAndLastDateofWeek = subtractAndAddDateTime(ObjectDay);
	
	
}
