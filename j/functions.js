$(document).ready(function()
{
	
	/*-------------------------------------------    
  		Grey Initial Values
	-------------------------------------------*/
	var filled = $('input.filled');
		
	if(filled.length > 0){
		for(var i = 0; i < filled.length; i++){
				
			
			$(filled[i]).addClass('empty');
			filled[i].initialValue = filled[i].value;
			
			filled[i].onclick = filled[i].onfocus = function(){
				$(this).removeClass('empty');
				$(this).addClass('filled');
				if(this.value == this.initialValue){
					this.value= '';
				}
			}
			
			filled[i].onblur = function(){
				if(this.value == this.initialValue || this.value == ''){
					$(this).addClass('empty');
					$(this).removeClass('filled');
					this.value = this.initialValue;
				}else{
					$(this).addClass('empty');
					$(this).removeClass('filled');
				}
			}
		}
	}
	
	else
	{
		return; 
	}
	
	
	/*-------------------------------------------    
  		Load Login Popup
	-------------------------------------------*/
	if ($('a.login-link').size()) {

		var str = '<div class="login-wrap"></div>';

		$('li.nav-login').append(str);

		$("div.login-wrap").hide();

		$('a.login-link').click(function(){

			if ($('div.login-wrap form').size()) {

				$('div.login-wrap').show();

				$('a.login-link').addClass('on');

				$('a.close-login').click(function(){
					$('div.login-wrap').hide();
					$('a.login-link').removeClass('on');
					return false;
				});
			}

			else {

				$('div.login-wrap').load($(this).attr('href')+' #login-form',{},function(){

					var closeStr = '<a href="#" class="close-login">close</a>';

					$("form#login-form").append(closeStr);

					$("div.login-wrap").show();

					$('a.login-link').addClass('on');

					$('a.close-login').click(function(){
						$('div.login-wrap').hide();
						$('a.login-link').removeClass('on');
						return false;
					});

				});
			}

			return false;
		});
	}
	
});

