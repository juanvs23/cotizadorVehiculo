//const
const marca=document.querySelector('#marca'),
model=document.querySelector('#model'),
anio=document.querySelector('#anio'),
type=document.querySelectorAll('input[name="tipo"]'),
form= document.querySelector('#cotizar-seguro'),
cargando=document.querySelector('#cargando'),
resultado=document.querySelector('#cargando');


//listenners
form.addEventListener('submit',(e)=>{
e.preventDefault();
});
document.addEventListener('DOMContentLoaded',function () {
    getMark();
});



//functions
function hey() {
    console.log('desde onchange')
}
function getMark(){
    let api=`https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json`

    /* const test= async ()=>{
         await  fetch(api)
            .then(  function (res) {
                           return  res.json().then(data=>{
                                idea=data
                                //console.log(idea)
                                return  idea;
                            })
                            
                        })                            
                        
                        //console.log(idea.Results);
                        let list =idea.Results.map(res=>{
                            let {Make_ID,Make_Name}=res;
                            document.getElementById('preloader').style.transition= "opacity 400ms";
                            document.getElementById('preloader').classList.add('hide');
                             setTimeout(()=>{document.getElementById('preloader').style.display="none";},3000);
                            return{ value: Make_ID, label: Make_Name }
                            
                        })
                      
                        console.log([...list])
                            return [...list] 

       } ;




    const example = new Choices('#marca',{ removeItemButton: true,
        searchPlaceholderValue: "Escribe el modelo",
        loadingText: 'Cargando',
        noResultsText: 'No encontrado',
        itemSelectText: 'Presione para seleccionar'
      }).setChoices(
         test,
          'value',
          'label',
          false,
      );
            */
           
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
                             setTimeout(()=>{document.getElementById('preloader').style.display="none";},3000);
                 
              })
          }
          )
        
        
    }
    
    function getModel(){
        console.log(marca.value);
        
        let api=`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${marca.value}?format=json`
console.log(api)
         fetch(api)
    .then(
        (Response)=>{
            Response.json().then(Res=>{
                let html=' <option value="">- Seleccionar -</option>';
               Res.Results.map((resultado,i)=>{
                   
                        let {Model_ID,Model_Name}=resultado;
                        html+=`<option value="${Model_ID}">- ${Model_Name} -</option>`;
               })
               model.innerHTML= html;
              
               
            })
        }
        )
       //let modelSelect=  new Choices('#model')
    }
    function getYear(params) {
        console.log('hola')
    }