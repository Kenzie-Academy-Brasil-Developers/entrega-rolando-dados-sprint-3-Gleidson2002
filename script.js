let count = [];




  for(i = 1; i<=1000;i++){
      let somadedado = 0
      
      somadedado = getRandomArbitrary()+ getRandomArbitrary()
      if(count[somadedado]===undefined){
        count[somadedado] = []
    }
    count[somadedado]++
  }
  console.log (count)
function getRandomArbitrary() {
    return Math.floor(Math.random() * (6 - 0) + 1)
    
  }

  let body = document.querySelector('body')
  let div1 = document.createElement('div')
  let ul = document.createElement('ul')

  for(let i = 2 ; i<=12;i++){
    let li = document.createElement('li')
    li.innerText =  `${i} = ${count[i]} `
    div1.appendChild(li)
  }

  body.appendChild(div1)
  div1.appendChild(ul)

  let principal = document.createElement('div')
  principal.id = 'barragrafica'
  body.style.minWidth = "360px"
  body.style.minHeight = "500px"
  

  for(let i =2;i<=12;i++){
    let div = document.createElement('div')
    div.id = i
    div.style.width = "30px"
    div.style.height = ""+count[i]+"px"
    
    div.style.display = "inline-block"
    div.style.border = "1px solid"
    div.style.background = "blue"
    

    principal.appendChild(div)
  }
  body.appendChild(principal)
  
