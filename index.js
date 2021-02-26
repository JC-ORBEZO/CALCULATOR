operEnSi=(a,b,c,d)=>{
    switch(a){
        case `+`:d=parseFloat(b)+parseFloat(c);        
            break;
        case `-`:d=parseFloat(b)-parseFloat(c);
            break;
        case `x`:d=parseFloat(b)*parseFloat(c);
            break;
        case `/`:d=parseFloat(b)/parseFloat(c);
            break;
    }
    return d;
}

class Calculadora{
    //atributos
    valor1;
    valor2;
    resultado="banana";
    operacion;
    //métodos
    mostrar(){
        console.log(`VALOR 1: ${this.valor1}`);
        console.log(`VALOR 2: ${this.valor2}`);
        console.log(`RESULTADO: ${this.resultado}`);
        console.log(`OPERACION: ${this.operacion}`);
    }

    suma(valor1,valor2){
        this.valor1=valor1;
        this.valor2=valor2;        
        this.resultado=this.valor1+this.valor2;
        this.valor1=this.resultado;
        //return this.resultado;
    }

    resta(valor1,valor2){
        this.valor1=valor1;
        this.valor2=valor2;
        this.resultado=this.valor1-this.valor2;
        this.valor1=this.resultado;
        //return this.resultado;
    }

    producto(valor1,valor2){
        this.valor1=valor1;
        this.valor2=valor2;
        this.resultado=this.valor1*this.valor2;
        this.valor1=this.resultado;
        //return this.resultado;
    }

    division(valor1,valor2){
        this.valor1=valor1;
        this.valor2=valor2;
        this.resultado=this.valor1/this.valor2;
        this.valor1=this.resultado;
        //return this.resultado;
    }

    cuadrado(valor1){
        this.valor1=valor1;
        this.resultado=this.valor1**2;
        this.valor1=this.resultado;
    }

    exponente(valor1,valor2){
        this.valor1=valor1;
        this.valor2=valor2;
        this.resultado=this.valor1**this.valor2;
        this.valor1=this.resultado;
    }

    raizCuadrada(valor1){
        this.valor1=valor1;
        this.resultado=Math.sqrt(this.valor1);
        this.valor1=valor1;
    }

    //setters
    set oper(o){
        this.operacion=o;
    }

    set result(r){
        this.resultado=r;
    }

    set val1(v1){
        this.valor1=v1;
    }

    set val2(v2){
        this.valor2=v2;
    }

    //getters
    get oper(){
        return this.operacion;
    }

    get result(){
        return this.resultado;
    }

    get val1(){
        return this.valor1;
    }

    get val2(){
        return this.valor2;
    }
}

const reg=new Calculadora;
reg.val1=4;
reg.val2=5;
reg.result=10;
reg.mostrar();

//reg.val1();
//reg.val2();

ingresoNum=(o)=>{
    if(document.getElementById("panta").value!="0")
    document.getElementById("panta").value=document.getElementById("panta").value+o;
    
    else document.getElementById("panta").value=o;
    }
    
    opera=(a)=>{
        
    switch(a){
        case `+`:reg.val1=parseFloat(document.getElementById("panta").value);
        //console.log(reg.val1);
        reg.oper="+";
        document.getElementById("panta").value="";
            break;
        case `-`:reg.val1=parseFloat(document.getElementById("panta").value);
        //console.log(reg.val1);
        reg.oper="-";
        document.getElementById("panta").value="";
            break;
        case `x`:reg.val1=parseFloat(document.getElementById("panta").value);
        //console.log(reg.val1);
        reg.oper="x";
        document.getElementById("panta").value="";
            break;
        case `/`:reg.val1=parseFloat(document.getElementById("panta").value);
        //console.log(reg.val1);
        reg.oper="/";
        document.getElementById("panta").value="";
            break;
        case `=`:
        reg.val2=parseFloat(document.getElementById("panta").value);
        reg.result=operEnSi(reg.oper,reg.val1,reg.val2,reg.result);
        document.getElementById("panta").value=reg.result;
            break;
        case `DEL`:
            document.getElementById("panta").value="0";
            break;
        case `ON`:
            document.getElementById("panta").value="";
            document.getElementById("panta").blur();
            break;
    }
    }
      
    resultado=(r)=>{
    
    }


/*
const operar(op){
    const reg=new  Calculadora;
    case `+`:
        break;
    case `-`:
        break;
    case `*`:
        break;
    case `/`:
        break;
    case `=`:
        break;
}
switch()
*/
