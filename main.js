let output = document.querySelector('#output');
let message = "";
let input = document.querySelector('#input');
const error = "<p style ='color:red; font-size:34px'>Digite algum valor</p>";
function criarTabuada(){

    if(input.valueAsNumber >= 0){
        limparTabuada()
        let n = parseInt(input.valueAsNumber);
        let i = 0;
        while(i<=10){
            message += n+' X '+i+' = '+(n*i) +'<br style="margin-botton:1%;">';
            i++; 
        }
        output.innerHTML = message;
        input.value='';
    }else{
        
        output.innerHTML = error;
    }
}
function limparTabuada(){
    message = "";
    output.innerHTML = message;
}