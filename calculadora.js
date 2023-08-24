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
//