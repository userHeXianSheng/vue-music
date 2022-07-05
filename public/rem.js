function RemSet(){
    var x=window.document.documentElement.clientWidth || window.innerWidth
    if(x>750){x=750}
    if(x<320)(x=320)
    document.documentElement.style.fontSize=(x/7.5)+'px' //750时1rem=100px，375时1rem=50px
    document.querySelector('body').style.fontSize=0.3+'rem'
}
RemSet()

window.onresize=function(){
    RemSet()
}