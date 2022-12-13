/*CADA JUGADOR TIENE SEIS NUMEROS ALEATORIOS SIN REPETIR
LA JUAGADA DEBE COMPARARSE CON BOTON TERMINAR Y LUEGO INFORMAR COINCIDENCIAS
*/
function Loto(jugador,n1,n2,n3,n4,n5,n6){
    this.jugador=jugador,
    this.numero1=n1,
    this.numero2=n2,
    this.numero3=n3,
    this.numero4=n4,
    this.numero5=n5,
    this.numero6=n6,
    this.resultado=res
}

body = document.body
var input0=document.createElement('input')
input0.id='input_0'
input0.placeholder='JUGADOR'
body.appendChild(input0)
var input1 = document.createElement('input')
input1.id = 'input_1'
input1.placeholder='1er numero'
body.appendChild(input1)
var input2 = document.createElement('input')
input2.id = 'input_2'
input2.placeholder='2do numero'
body.appendChild(input2)
var input3 = document.createElement('input')
input3.id = "input_3"
input3.placeholder='3er numero'
body.appendChild(input3)
var input4 = document.createElement('input')
input4.id = 'input_4'
input4.placeholder='4to numero'
body.appendChild(input4)
var input5 = document.createElement('input')
input5.id = 'input_5'
input5.placeholder='5to numero'
body.appendChild(input5)
var input6 = document.createElement('input')
input6.id = 'input_6'
input6.placeholder='6to numero'
body.appendChild(input6)

//boton AGREGAR JUGADOR
var btn_agregar = document.createElement('button')
btn_agregar.innerHTML = "AGREGAR JUGADOR"
btn_agregar.onclick = () => agregar()
body.appendChild(btn_agregar)
//boton TERMINAR JUEGO
var btn_terminar= document.createElement('button')
btn_terminar.innerHTML = "TERMINAR"
btn_terminar.onclick = () => terminar()
body.appendChild(btn_terminar)

//TABLA
var tabla = document.createElement('table')
var tr = document.createElement('tr')
var td = document.createElement('td')
td.innerHTML = "JUGADOR"
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = "NUMERO 1"
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = "NUMERO 2"
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = "NUMERO 3"
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = "NUMERO 4"
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = "NUMERO 5"
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = "NUMERO 6"
tr.appendChild(td)
tabla.appendChild(tr)
body.appendChild(tabla)


var lotos=[]
i=0;
const agregar = ()=>{
    //jugadores.push(
        //new Loto(//
    jugador= document.getElementById('input0').value,
    numero1=parseInt(document.getElementById('input1').value),
    numero2=parseInt(document.getElementById('input2').value),
    numero3=parseInt(document.getElementById('input3').value),
    numero4=parseInt(document.getElementById('input4').value),
    numero5=parseInt(document.getElementById('input5').value),
    numero6=parseInt(document.getElementById('input6').value), 
    
    loto=new Loto(jugador,n1,n2,n3,n4,n5,n6)
    lotos.push(loto)

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.innerHTML = loto.jugador1
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = loto.numero1
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = loto.numero2
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = loto.numero3
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = jugador.numero4
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = loto.numero5
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = loto.numero6
    tr.appendChild(td)
    td = document.createElement('td')

    document.getElementById('input0').value = ""
    document.getElementById('input1').value = ""
    document.getElementById('input2').value = ""
    document.getElementById('input3').value = ""
    document.getElementById('input4').value = ""
    document.getElementById('input5').value = ""
    document.getElementById('input6').value = ""
    ++i;
}
const valores = llenarInputs()
    document.getElementById('input0').value = "Jugador_"+i
    document.getElementById('input1').value = valores[0]
    document.getElementById('input2').value = valores[1]
    document.getElementById('input3').value = valores[2]
    document.getElementById('input4').value = valores[3]
    document.getElementById('input5').value = valores[4]
    document.getElementById('input6').value = valores[5]   
values = []
    duplicados = false
    while( ! duplicados){
        values.push(Math.ceil(Math.random()*42))
        values.push(Math.ceil(Math.random()*42))
        values.push(Math.ceil(Math.random()*42))
        values.push(Math.ceil(Math.random()*42))
        values.push(Math.ceil(Math.random()*42))
        values.push(Math.ceil(Math.random()*42))
        values = values.sort()
        for(i=0;i<5;++i){
            if(values[i]!=values[i+1]){
                duplicados = true
            }else{
                duplicados = false
                values = []
                break
                
            }
        }
    
    } 
    console.log(values)
    return values     
    
/*jugador=document.getElementById('input0').value
nunero1=parseInt(document.getElementById('input1').value)
numero2=parseInt(document.getElementById('input2').value)
numero3=parseInt(document.getElementById('input3').value)
numero4=parseInt(document.getElementById('input4').value)
numero5=parseInt(document.getElementById('input5').value)
numero6=parseInt(document.getElementById('input6').value)

numero = new Loto(jugador,n1,n2,n3,n4,n5,n6)
numeros.push(numero)*/
