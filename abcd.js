$(document).ready(
$('#u').on('keyup',function(){
var mail==$(this).val();
if(mail!=@ .com||mail!=@ .in)
$(this).next().text("Please enter valid email id");
}
);  
