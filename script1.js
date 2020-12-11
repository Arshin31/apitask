var request = new XMLHttpRequest();
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function () {
    var data = JSON.parse(this.response);
    //console.log(data);
    let lat=data[239].latlng[0];
    let long=data[239].latlng[1];
    let cityname=data[104].capital;
    //weatherbylatlong(lat,long);
    weatherbycityname(cityname);
}
request.onerror=function(){
    alert('Network Error');
}

function weatherbylatlong(lat,long){
    var request=new XMLHttpRequest();

    var url='http://api.openweathermap.org/data/2.5/weather?lat='+lat+ '&lon='+long+'&appid=38f847493d5a4b618c44bf14222a9c28'

    request.open('GET',url,true);

    request.send();

    request.onload=function(){
        var data = JSON.parse(this.response);
        //console.log(data);
    }

}

function weatherbycityname(cityname){
    var request=new XMLHttpRequest();

    var urlstr='http://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid=38f847493d5a4b618c44bf14222a9c28'
    request.open('GET',urlstr,true);

    request.send();

    request.onload=function(){
        var data = JSON.parse(this.response);
        console.log(data);
    }
}