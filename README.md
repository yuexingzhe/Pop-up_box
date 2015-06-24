# Pop-up_box
弹窗 demo

简单的弹窗


html部分
<button class="btn_click btn_click_1">try this</button>
其中class="btn_click"是demo中button按钮的默认样式
class="btn-click_1"是自己来进行设置的（可以设置成任何值）

js部分
$(".btn_click_2").click(function() {
	var str = '<input type="text" placeholder="用户名" style="padding: 3px;"/><br /><br /><input type="text" placeholder="密码" style="padding: 3px;"/>';
	$.modal({
		content : str,
		confirm : function(){
			alert("ok");
		},
		cancel : function(){
			alert("false");
		},
		showClose : false
	});
	return false;
});
整个弹窗的调用是通过$.modal(obj)函数来调用的（其中obj是你要传入其中的对象）
content用来指定弹窗中显示的内容
confirm用来指定点击确认按钮时的回调函数
cancel用来指定点击确认按钮时的回调函数
showClose用来指定是否显示弹出窗口的右上角X按钮
最后的return false是用来阻止事件冒泡


整个demo下载下来后就可以直接运行，快来试试吧
