function digitar(n){
    var ipt =   document.getElementById("ipt")

    if (n != "c"  && n != "="){
        ipt.value += n 
        
    } else if( n === "c"){
        ipt.value = ""

    } else{

        ipt.value = ( eval(ipt.value))
        
    }
    
}