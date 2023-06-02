/*a=1
b=2
A=10
B=30
c=a+b
C=A+B
alert("el resultado de a+b es =" +c)
alert("el resultado de A+B es =" +C)

num1=1
num2=2
sum= num1+num2
mul= num1*num2
div=num1/num2
*/
/*
alert("el resultado de la suma es =" +sum +"\nel resultado de la multiplicacion es = " +mul +"\nel resultado de la divicion es = " +div)*/
/*
var a1=20
var a2=30
alert(a1)
var a1 
const constante=100
alert(constante)
let numero=1
numero++
alert(numero)
numero--
alert(numero)
*/
/*
const arreglo=["carros",1,"gatos",2,"perros"]
const arreglo1= new Array("maria", "juan", "carlos",true,false)
alert(arreglo)
alert(arreglo1)
arreglo1.sort()
alert(arreglo1)
arreglo1.pop()
alert(arreglo1)
arreglo.push(3)
alert(arreglo)
*/

function areatri(){
    let bas,altu
    bas =parceInt(document.getElementById('bas').value)
    altu = parceInt(document.getElementById('altu').value)
    let res =(bas+altu)/2
    alert("el area del triangulo es = " +res)

}
function operaciones() {
    let num1,num2
    num1= parseInt(document.getElementById('num1').value)
    num2= parseInt(document.getElementById('num2').value)
    let sum= num1+num2
    let div= num1/num2
    let mult= num1*num2
    let modu=num1%num2
    alert(num1+ "-"+ num2)
    alert("la suma es ="+ sum)
    alert("la multiplicacion es ="+ mult)
    if(num1<num2){
        alert("la divicion no se puede hacer")
    }else{
        alert("divicion es =" + div)
    }
}
