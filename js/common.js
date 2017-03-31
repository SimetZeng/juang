/* 响应式导航栏 */
	var navigation = responsiveNav(".nav-collapse", {
			animate: true,                    // Boolean: Use CSS3 transitions, true or false
			transition: 284,                  // Integer: Speed of the transition, in milliseconds
			label: "Menu",                    // String: Label for the navigation toggle
			insert: "after",                  // String: Insert the toggle before or after the navigation
			customToggle: "",                 // Selector: Specify the ID of a custom toggle
			closeOnNavClick: false,           // Boolean: Close the navigation when one of the links are clicked
			openPos: "relative",              // String: Position of the opened nav, relative or static
			navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
			navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
			jsClass: "js",                    // String: 'JS enabled' class which is added to <html> element
			init: function(){},               // Function: Init callback
			open: function(){},               // Function: Open callback
			close: function(){}               // Function: Close callback
		});

/* 图片轮播 */
	$('#myCarousel').carousel({interval: 2000});
	
/* 登录 */
	function login()
	{
		var username=document.getElementById("username").value;
		var password = document.getElementById("password").value;
			
		if (password != ""&&username!="") 
		{
			var reg1= /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;				/*username*/
			var reg2=/^[a-zA-Z]\w{5,17}$/;							/*password*/
				
			if (!reg1.test(username)) 
			{
				alert("用户名格式:字母开头，允许5-16字节，允许字母数字下划线！");
			}
			else if(!reg2.test(password))
			{
				alert("密码格式:字母开头，长度在6~18之间，只能包含字母、数字和下划线！");
			}
			else
			{
				location.href="../index.htm";/*跳转页面*/
			}
		}
		else
		{
			alert("请检查是否还有空缺项！");
		}
	}
	
/* 注册 */
	function register()
	{
	
		var username=document.getElementById("username").value;
		var password = document.getElementById("password").value;
		var password1 = document.getElementById("password1").value;
		
  		if (password != ""&&username!=""&&password1!="") 
		{
    		var reg1= /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;				/*username*/
     		var reg2=/^[a-zA-Z]\w{5,17}$/;							/*password*/
			
       		if (!reg1.test(username)) 
			{
          		alert("用户名格式:字母开头，允许5-16字节，允许字母数字下划线！");
       		}
			else if(!reg2.test(password))
			{
				alert("密码格式:字母开头，长度在6~18之间，只能包含字母、数字和下划线！");
			}
			else if(password1!=password)
			{
				alert("请输入第一次输入的密码！");
			}
			else
			{
				location.href="../index.htm";/*跳转页面*/
			}
    	}
		else
		{
			alert("请检查是否还有空缺项！");
		}
	}
	
/* 找回密码 */
	function forgetpassword()
	{
		var username=document.getElementById("username").value;
		var num = document.getElementById("num").value;
				
		if (num != ""&&username!="") 
		{
			var reg1= /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;				/* username */
			var reg2= /^\d{4,6}$/;									/* num */
					
			if (!reg1.test(username)) 
			{
				alert("用户名格式:字母开头，允许5-16字节，允许字母数字下划线！");
			}
			else if(!reg2.test(num))
			{
				alert("请正确输入验证码！");
			}
			else
			{
				location.href="resetpassword.htm";/*跳转页面*/
			}
		}
		else
		{
			alert("请检查是否还有空缺项！");
		}
	}	
	
/* 重置密码 */
	function resetpassword()
	{
		var number=document.getElementById("number").value;
		var num = document.getElementById("num").value;
				
		if (number != ""&&num!="") 
		{
			var reg1=/^[a-zA-Z]\w{5,17}$/;							/*password*/
					
			if (!reg1.test(number)) 
			{
				alert("请正确输入密码！");
			}
			else if(num!=number)
			{
				alert("请输入与第一次相同的密码！");
			}
			else
			{
				location.href="passworddone.htm";/*跳转页面*/
			}
		}
		else
		{
			alert("请检查是否还有空缺项！");
		}
	}
	
/* 帮助中心 */
	function help()
	{
		var username = document.getElementById("username").value;
		var email = document.getElementById("email").value;
		var num = document.getElementById("num").value;
		var problem = document.getElementById("problem").value;
				
		if (username != "" && email != "" && num != "" && problem != "") 
		{
			var reg1= /^[\u4E00-\u9FA5A-Za-z0-9]+$/;													/* username */
			var reg2=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;									/* email */
			var reg3=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;			/* num */
			var reg4=/^.{3,60}$/;													/* problem */
					
			if (!reg1.test(username)) 
			{
				alert("请正确输入用户名！");
			}
			else if(!reg2.test(email))
			{
				alert("请正确输入邮箱！");
			}
			else if(!reg3.test(num))
			{
				alert("请正确输入手机号码！");
			}
			else if(!reg4.test(problem))
			{
				alert("请正确输入您的问题！");
			}
			else
			{
				location.href="message.htm";/*跳转页面*/
			}
		}
		else
		{
			alert("请检查是否还有空缺项！");
		}
	}