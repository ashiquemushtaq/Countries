export let names = []
export let flags = []
export let population = []
export let capitals = []
export let region = []
export let data = {}

async function fetchApi(){
    const res  = await fetch("https://restcountries.com/v3.1/all")
    data = await res.json();
} 

async function getData(){
    await fetchApi().catch(err => {
        console.log(err)
    })
    for(let i=0;i<=data.length-1;i++){  
        names.push(data[i].name.common)
        population.push(data[i].population)
        region.push(data[i].region)
        flags.push(data[i].flags.png)
    }
    for(let j=0;j<=data.length-1;j++){
        if(j!=41 && j!=141 && j!=152 && j!=236){
            capitals.push(data[j].capital[0])
        }
        else{
            capitals.push("NA")
        }
    }
}

getData()