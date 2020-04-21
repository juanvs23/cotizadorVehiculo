//const
const marca=document.querySelector('#marca'),
typeCar=document.querySelector('#type'),
model=document.querySelector('#model'),
anio=document.querySelector('#anio'),
btnsubmit=document.querySelector('#btnsubmit'),
type=document.querySelectorAll('input[name="tipo"]'),
form= document.querySelector('#cotizar-seguro'),
cargando=document.querySelector('#cargando'),
resultado=document.querySelector('#resultado');


//listenners
form.addEventListener('submit',(e)=>{
e.preventDefault();
calculo()
});
document.addEventListener('DOMContentLoaded',function () {
    marca.disabled = true;
    model.disabled = true;
    typeCar.disabled = true;
    anio.disabled = true;
    btnsubmit.disabled=true;
    getMark();
});



//functions
function hey() {
    console.log('desde onchange')
}
function getMark(){
    let api=`https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json`

  
           
      fetch(api)
      .then(
          (Response)=>{
              Response.json().then(Res=>{
                  let html=' <option value="">- Seleccionar -</option>';
                 Res.Results.map((resultado,i)=>{
                     
                          let {Make_ID,Make_Name}=resultado;
                          html+=`<option value="${Make_ID}">- ${Make_Name} -</option>`;
                 })
                 marca.innerHTML= html;
                 document.getElementById('preloader').style.transition= "opacity 400ms";
                            document.getElementById('preloader').classList.add('hide');
                             setTimeout(()=>{document.getElementById('preloader').style.display="none";
                               
                            },3000);
                            marca.disabled=false;

                 
              })
          }
          )
        
        
    }
    
    function getType(){
        console.log(marca.value);
        
        let api=`https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/${marca.value}?format=json`
console.log(api)
         fetch(api)
    .then(
        (Response)=>{
            Response.json().then(Res=>{
                let html=' <option value="">- Seleccionar -</option>';
               Res.Results.map((resultado,i)=>{
                  
                        let {VehicleTypeName}=resultado;
                        html+=`<option value="${VehicleTypeName}">- ${VehicleTypeName} -</option>`;
               })
               typeCar.innerHTML= html;
              typeCar.disabled = false;
               
            })
        }
        )
    }
    function getYear() {
        const max= new Date().getFullYear(),
        min=max-20;
        let html=' <option value="">- Seleccionar -</option>';
        for (let i = max; i > min; i--) {
            html+= `<option value="${i}">- ${i} -</option>`;
            
        }
        anio.innerHTML=html;
        anio.disabled = false;
    }
    function getModel() {
        console.log(typeCar.value);
        console.log(anio.value);
        console.log(marca.value);
        
        let api=`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${marca.value}/modelyear/${anio.value}/vehicleType/${typeCar.value}?format=json`
console.log(api);
         fetch(api)
    .then(
        (Response)=>{
            Response.json().then(Res=>{
                let html=' <option value="">- Seleccionar -</option>';
               Res.Results.map((resultado,i)=>{
                  console.log(resultado)
                        let {Model_Name}=resultado;
                        html+=`<option value="${Model_Name}">- ${Model_Name} -</option>`;
               })
               model.innerHTML= html;
               model.disabled = false;
               btnsubmit.disabled=false;
              
               
            })
        }
        )
    }
    function calculo() {
        console.log('hola desde calculo')
        cargando.style.display="block"
        
    }