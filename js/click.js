var nl=document.querySelectorAll("nav li");
var ospan=document.querySelector("nav span");
var nl1=document.getElementById("nl1");
var nl2=document.getElementById("nl2");
var main=document.getElementById("main");
var mains=document.getElementById("mains");
var ma=document.getElementById("main_a");
var dian=document.getElementById("dian");
var yuan=document.getElementById("yuan");
var pin=document.getElementById("pin");
var mine=document.getElementById("mine");
nl2.onclick=function(){
	nl1.style.color="#000";
	this.style.color="#ff5f16";
	ospan.style.left="2.15rem";
	sec.style.display="none";
	asd.style.display="block";
}
nl1.onclick=function(){
	nl2.style.color="#000";
	this.style.color="#ff5f16";
	ospan.style.left="0.55rem";
	asd.style.display="none";
	sec.style.display="block";
}
ma.onclick=function(ev){
	ev.preventDefault();
	main.innerHTML=`
		<div class="header"><a href="">X</a><span>当前城市 - </span></div>
		<div class="inp"><input type="text" placeholder="输入城市名或拼音"/></div>
		<ul class="oul">
			<div class="oul_d">
				<p>GPS定位你所在城市</p>
				<span>大庆</span>
				<p>热门城市</p>
				<span>北京</span><span>上海</span><span>广州</span><span>深圳</span>
			</div>
			<li>
				<p>A</p>
				<span>阿拉善盟</span><span>鞍山</span><span>安庆</span><span>安阳</span><span>安顺</span><span>安康</span>
			</li>
			<li>
				<p>B</p>
				<span>北京</span><span>保定</span><span>包头</span><span>巴彦卓尔</span><span>本溪</span><span>白山</span><span>北京</span><span>保定</span><span>包头</span><span>巴彦卓尔</span><span>本溪</span><span>白山</span>
			</li>
			<li>
				<p>C</p>
				<span>承德</span><span>沧州</span><span>长治</span><span>赤峰</span><span>朝阳</span><span>长沙</span><span>承德</span><span>沧州</span><span>长治</span><span>赤峰</span><span>朝阳</span><span>长沙</span>
			</li>
			<li>
				<p>D</p>
				<span>大同</span><span>大连</span><span>丹东</span><span>大庆</span><span>东营</span><span>德州</span><span>大同</span><span>大连</span><span>丹东</span><span>大庆</span><span>东营</span><span>德州</span>
			</li>
			<li>
				<p>E</p>
				<span>鄂尔多斯</span><span>鄂州</span><span>恩施土家族苗族自治州</span>
			</li>
			<li>
				<p>F</p>
				<span>抚顺</span><span>福州</span><span>富阳</span><span>抚顺</span><span>福州</span><span>富阳</span>
			</li>
			<li>
				<p>G</p>
				<span>赣州</span><span>广州</span><span>桂林</span><span>赣州</span><span>广州</span><span>桂林</span>
			</li>
			<li>
				<p>H</p>
				<span>邯郸</span><span>衡水</span><span>呼和浩特</span><span>哈尔滨</span><span>邯郸</span><span>衡水</span><span>呼和浩特</span><span>哈尔滨</span><span>邯郸</span><span>衡水</span><span>呼和浩特</span><span>哈尔滨</span>
			</li>
			<li>
				<p>J</p>
				<span>阿拉善盟</span><span>鞍山</span><span>安庆</span><span>安阳</span><span>安顺</span><span>安康</span>
			</li>
			<li>
				<p>K</p>
				<span>北京</span><span>保定</span><span>包头</span><span>巴彦卓尔</span><span>本溪</span><span>白山</span><span>北京</span><span>保定</span><span>包头</span><span>巴彦卓尔</span><span>本溪</span><span>白山</span>
			</li>
			<li>
				<p>L</p>
				<span>承德</span><span>沧州</span><span>长治</span><span>赤峰</span><span>朝阳</span><span>长沙</span><span>承德</span><span>沧州</span><span>长治</span><span>赤峰</span><span>朝阳</span><span>长沙</span>
			</li>
			<li>
				<p>M</p>
				<span>大同</span><span>大连</span><span>丹东</span><span>大庆</span><span>东营</span><span>德州</span><span>大同</span><span>大连</span><span>丹东</span><span>大庆</span><span>东营</span><span>德州</span>
			</li>
			<li>
				<p>N</p>
				<span>鄂尔多斯</span><span>鄂州</span><span>恩施土家族苗族自治州</span>
			</li>
			<li>
				<p>P</p>
				<span>赣州</span><span>广州</span><span>桂林</span><span>赣州</span><span>广州</span><span>桂林</span>
			</li>
			<li>
				<p>Q</p>
				<span>邯郸</span><span>衡水</span><span>呼和浩特</span><span>哈尔滨</span><span>邯郸</span><span>衡水</span><span>呼和浩特</span><span>哈尔滨</span><span>邯郸</span><span>衡水</span><span>呼和浩特</span><span>哈尔滨</span>
			</li>
			<li>
				<p>R</p>
				<span>抚顺</span><span>福州</span><span>富阳</span><span>抚顺</span><span>福州</span><span>富阳</span>
			</li>
			<li>
				<p>S</p>
				<span>阿拉善盟</span><span>鞍山</span><span>安庆</span><span>安阳</span><span>安顺</span><span>安康</span>
			</li>
			<li>
				<p>T</p>
				<span>北京</span><span>保定</span><span>包头</span><span>巴彦卓尔</span><span>本溪</span><span>白山</span><span>北京</span><span>保定</span><span>包头</span><span>巴彦卓尔</span><span>本溪</span><span>白山</span>
			</li>
			<li>
				<p>W</p>
				<span>承德</span><span>沧州</span><span>长治</span><span>赤峰</span><span>朝阳</span><span>长沙</span><span>承德</span><span>沧州</span><span>长治</span><span>赤峰</span><span>朝阳</span><span>长沙</span>
			</li>
			<li>
				<p>X</p>
				<span>大同</span><span>大连</span><span>丹东</span><span>大庆</span><span>东营</span><span>德州</span><span>大同</span><span>大连</span><span>丹东</span><span>大庆</span><span>东营</span><span>德州</span>
			</li>
			<li>
				<p>Y</p>
				<span>抚顺</span><span>福州</span><span>富阳</span><span>抚顺</span><span>福州</span><span>富阳</span>
			</li>
			<li>
				<p>Z</p>
				<span>阿拉善盟</span><span>鞍山</span><span>安庆</span><span>安阳</span><span>安顺</span><span>安康</span>
			</li>
		</ul>
		<div class="abc"><span>A</span><span>B</span><span>C</span><span>D</span><span>E</span><span>F</span><span>G</span><span>H</span><span>J</span><span>K</span><span>L</span><span>M</span><span>N</span><span>P</span><span>Q</span><span>R</span><span>S</span><span>T</span><span>W</span><span>X</span><span>Y</span><span>Z</span></div>
	`;
}
yuan.onclick=function(ev){
	this.innerHTML=`<img src="img/下载%20(12).png" ><span style="color: #ff5f16;">电影</span>`;
	dian.innerHTML=`<img src="img/下载%20(13).png" ><span style="color: #797d82;">电影</span>`;
	mine.innerHTML=`<img src="img/下载%20(2).png" ><span style="color: #797d82;">电影</span>`;
	ev.preventDefault();
	mains.innerHTML=`
		<div class="header"><a id="main_a" href="" style="top:0.1rem;color:#000;background:#fff;">信阳&nbsp;&gt;</a><h3>影院</h3></div>
		<div class="nav"><li>全城&nbsp;&gt;</li><li>最近去过&nbsp;&gt;</li></div>
		<div class="section">
			<dl>
				<dt><h3>横店电影城（天润广场店）</h3><p>信阳市浉河区万家灯火城市广场天润广场五楼</p></dt>
				<dd><h3>￥41起</h3><p>距离未知</p></dd>
			</dl>
			<dl>
				<dt><h3>奥斯卡国际影城(和美广场店)</h3><p>东方红大道和美广场移动营业厅4楼</p></dt>
				<dd><h3>￥53起</h3><p>距离未知</p></dd>
			</dl>
			<dl>
				<dt><h3>信阳奥斯卡好声音影院</h3><p>瑞龙商务宾馆东侧300米（法院对面）</p></dt>
				<dd><h3>￥31起</h3><p>距离未知</p></dd>
			</dl>
			<dl>
				<dt><h3>信阳恒大影城</h3><p>河南省信阳市羊山新区恒大名都1号楼层</p></dt>
				<dd><h3>￥33起</h3><p>距离未知</p></dd>
			</dl>
			<dl>
				<dt><h3>时代华纳影视城</h3><p>信阳市平桥区中心大道与农林路交叉口，亚兴广场四楼</p></dt>
				<dd><h3>￥38起</h3><p>距离未知</p></dd>
			</dl>
		</div>
	`;
}
mine.onclick=function(ev){
	this.innerHTML=`<img src="img/下载%20(11).png" ><span style="color: #ff5f16;">电影</span>`;
	dian.innerHTML=`<img src="img/下载%20(13).png" ><span style="color: #797d82;">电影</span>`;
	yuan.innerHTML=`<img src="img/下载.png" ><span style="color: #797d82;">电影</span>`;
	ev.preventDefault();
	mains.innerHTML=`
		<div class="login"><img src="img/下载 (3).png"/><span>立即登录</span></div>
		<div class="log">
			<dl>
				<dt><img src="img/下载 (4).png"/></dt>
				<dd>电影订单</dd>
			</dl>
			<dl>
				<dt><img src="img/下载 (5).png"/></dt>
				<dd>拼团订单</dd>
			</dl>
		</div>
		<div class="may">
			<li><img src="img/下载 (6).png" /><span>卖座卡</span><img src="img/下载 (9).png" /></li>
			<li><img src="img/下载 (7).png" /><span>余额</span><img src="img/下载 (9).png" /></li>
			<li><img src="img/下载 (8).png" /><span>设置</span><img src="img/下载 (9).png" /></li>
		</div>
	`;
}
