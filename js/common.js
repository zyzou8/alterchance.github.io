// zou zhuoyang 1155107924
$(document).ready(function() {
	
	$(document).scroll(function(e){
		var scrollAmount = $(window).scrollTop();
		var documentHeight = document.body.offsetHeight;
		var windowHeight = document.body.clientHeight;
	
		var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
		console.log(scrollAmount , documentHeight , windowHeight)
		var roundScroll = Math.round(scrollPercent);
	
		$(".scroll").css("width", (scrollPercent + '%'));
		$("#h1").text("屏幕高度进行了" + roundScroll + '%');
	});
	
	Date.prototype.Format = function(fmt) { //author:
		var o = {
			"M+": this.getMonth() + 1, //月份
			"d+": this.getDate(), //日
			"h+": this.getHours(), //小时
			"m+": this.getMinutes(), //分
			"s+": this.getSeconds(), //秒
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度
			"S": this.getMilliseconds() //毫秒
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" +
				o[k]).substr(("" + o[k]).length)));
		return fmt;
	};

	$("#special").click(function() {
		$("#newBar").slideToggle(100);
	});

	var addAlginNumber = 1
	$("#addAlginButton").click(function() {
		addAlginNumber++
		$(".addAlgin").each(function() {
			if (addAlginNumber === 2) {
				$(this).toggleClass("center");
			} else if (addAlginNumber === 3) {
				$(this).toggleClass("right");
			}
		});
		if(addAlginNumber === 4){
			addAlginNumber = 1
			$(".addAlgin").each(function() {
				$(this).removeClass("center right");
			});
		}
	});

	$("#message").click(function() {
		let email = $('#email').val();
		let content = $('#content').val();
		let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
		var radio = $("input[name='red']:checked").val();
		if (email === '') {
			alert("you have to write your email address here ");
		} else if (!reg.test(email)) {
			alert("check your format please, it may be wrong");
		} else if (content === '') {
			alert("you have to comment something here ");
		} else if (radio === undefined) {
			alert("choose red, it can not be empty");
		} else {
			let sendTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
			let str = "<li><div class='emails'>email：" + email + "</div><div class='times'>time：" + sendTime + "</div><div class='contents'>comment contant：" + content + "</div></li>"
			$("#commentList").append(str)
			$(" #email").val("");
			$('#content').val("");
			$("[name=red]:checkbox").prop("checked", false);
		}
	});
	
	$("#addHobbiesButton").click(function(){
		let content = $("#myHobbies").val();
		$(".hobbyList p").append('<span>' + content + '</span>、')
		$("#myHobbies").val('');
		$('#exampleModal').modal('toggle')
		$('html,body').animate({scrollTop: document.body.clientHeight+'px'}, 800);
	});
	
	$("#showProgress").click(function(){
		$("#header").slideToggle(100);
	});

});