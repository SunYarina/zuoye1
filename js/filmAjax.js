var sec=document.getElementsByTagName("section")[0];
var filmAjax = new XMLHttpRequest;
filmAjax.open("get", "php/films.php", true);
filmAjax.send(null);
filmAjax.onreadystatechange = function () {
    if (filmAjax.readyState === 4 && filmAjax.status === 200) {
        var data=JSON.parse(filmAjax.responseText);
		var str="";
		for(var i=0;i<data.length;i++){
			  str+=`<dl>
				<dt><img src="${data[i].imgurl}" ></dt>
				<dd>
					<div class="sec_h"><h3>${data[i].content}</h3><span>2D</span></div>
					<div class="sec_p"><p>观众评分</p><span>${data[i].pingjia}</span></div>
					<div class="sec_o"><p>${data[i].mess}</p></div>
					<div class="sec_m"><p>${data[i].time}</p></div>
				</dd>
				<div class="sec_b"><a href="">购票</a></div>
			</dl>`;
		}
		sec.innerHTML=str;
     }
}