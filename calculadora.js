class Input{
    constructor(type,name,id,value){
        this.type = type;
        this.name = name;
        this.id = id;
        this.value = value;
        this.div = this.getDiv();
    }
    // Div con label e input
    getDiv(){
        let div = document.createElement('div');
        if((this.type === 'radio')||(this.type === 'checkbox')){
            div.appendChild(this.getInput());
            div.appendChild(this.getLabel());
        }else{
            div.appendChild(this.getLabel());
            div.appendChild(this.getInput());
        }
        return div;
    }
    getLabel(){
        let label = document.createElement('label');
        label.setAttribute('for',this.id);
        label.textContent = this.id+': ';

        // algunos input no tienen label
        if((this.type ==='radio')||(this.type ==='checkbox')){
        }else{
            if((this.value!==undefined)&&(this.value!==null)){
                label.style.display = 'none';
        }
        }
        return label;
    }
    getInput(){
        let input = document.createElement('input');
        input.setAttribute('type',this.type);
        input.setAttribute('name',this.name);
        input.setAttribute('id',this.id);
        //
        if((this.value!==undefined)&&(this.value!==null)){
            input.setAttribute('value',this.value);
        }
        return input;
    }
}
const CALCULADORA = document.getElementById('calculadora');//div HTML
// input => precio,iva,(valor+iva||valor-iva), calcular.
const BOXPRECIO = new Input('number','Precio','Precio');
const BOXIVA = new Input('number','Iva','Iva');
const BOXSIIVA = new Input('radio','if','Precio_tiene_iva','true');
const BOXNOIVA = new Input('radio','if','Precio_no_tiene_iva','true');
const BOXCALCULAR = new Input('button','calcular','calcular','Calcular');
//
const H2 = document.createElement('h2');
const FORM = document.createElement('form');
// elementos sobre la pagina
H2.textContent = 'Calculador de Iva';
CALCULADORA.appendChild(H2);
FORM.appendChild(BOXPRECIO.div);
FORM.appendChild(BOXIVA.div);
FORM.appendChild(BOXSIIVA.div);
FORM.appendChild(BOXNOIVA.div);
FORM.appendChild(BOXCALCULAR.div);
CALCULADORA.appendChild(FORM);
// variables
const PRECIO = document.getElementById('Precio');
const IVA = document.getElementById('Iva');
const SIIVA = document.getElementById('Precio_tiene_iva');
const NOIVA = document.getElementById('Precio_no_tiene_iva');
const CALCULAR = document.getElementById('calcular');
// evento
CALCULAR.addEventListener('click', ()=>{
    // clean table
    let findTable = CALCULADORA.querySelector('table')    ;
    if(findTable){
        findTable.remove();
    }
    // variables previas
    const REALPRECIO = parseFloat(PRECIO.value);
    const REALIVA =parseFloat(IVA.value);
    let precioIva = 0;
    let valorIva = 0;
    // calcular 
    if(SIIVA.checked){
        valorIva = (REALPRECIO/(REALIVA+100)*REALIVA).toFixed(3);
        precioIva = (REALPRECIO).toFixed(3);
    }else if(NOIVA.checked){
        valorIva = (REALPRECIO*REALIVA/100);
        precioIva = (valorIva+REALPRECIO).toFixed(3);
        valorIva = valorIva.toFixed(3);
    }
    // table
    const RESULTADO = [['Precio: $',PRECIO.value],['Iva: %',IVA.value],['Precio con iva: $',precioIva],['Valor de iva: $',valorIva]];
    const TABLE = document.createElement('table');
    // for => tr, for => td
    for(let i of RESULTADO){
        const ROW = document.createElement('tr');
        for(let j of i){
            const COLUMN = document.createElement('td');
            COLUMN.textContent = j;
            ROW.appendChild(COLUMN);
        }
        TABLE.appendChild(ROW);
    }
    CALCULADORA.appendChild(TABLE);
});
// style
H2.style.margin = '0';
//
CALCULADORA.style.display = 'flex';
CALCULADORA.style.flexDirection = 'column';
CALCULADORA.style.gap = '15px';
CALCULADORA.style.margin = '20px';
CALCULADORA.style.padding = '15px';
CALCULADORA.style.border = '1px solid gray';
CALCULADORA.style.borderRadius = '15px';
CALCULADORA.style.width = '190px';
CALCULADORA.style.background = 'white';
CALCULADORA.style.boxShadow = 'black 0px 0px 10px';
//
FORM.style.display = 'flex';
FORM.style.flexDirection = 'column';
FORM.style.gap = '8px';
FORM.width = '100%';
//
PRECIO.style.borderRadius = '5px';
PRECIO.style.margin = '3px';
IVA.style.borderRadius = '5px';
IVA.style.margin = '3px';
//
CALCULAR.style.border = '1px solid gray';
CALCULAR.style.borderRadius = '5px';
CALCULAR.style.background = '#00D1B2';
CALCULAR.style.color = 'white';
CALCULAR.style.padding = '4px';