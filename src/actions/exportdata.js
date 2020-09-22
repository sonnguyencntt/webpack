import axios from 'axios';


export function export_Data(data){
    axios({
		url: 'query/exportdata', //your url
		method: 'POST',
		responseType: 'blob', 
		data : data// important
	  }).then((response) => {
		 const url = window.URL.createObjectURL(new Blob([response.data]));
		 console.log(url)
		 const link = document.createElement('a');
		 link.href = url;
		 link.setAttribute('download', data.board +'.xlsx'); //or any other extension
		 document.body.appendChild(link);
		 link.click();
	  });
}