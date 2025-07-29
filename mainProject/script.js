   fetch('https://randomuser.me/api/?results=12')
            .then((data)=>data.json())
            .then((response)=>{
                console.log(response.results)
                let info = response.results
                info.map((val)=>{
                    let _p = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe delectus, veritatis expedita cupiditate sed odit quas commodi repellendus.'
                    const _main = new cmnt(val.picture.medium, _p, val.name.first, val.location.country, val.dob.age)

                    document.getElementById('second').appendChild(_main.complete())
                })
            })


            class cmnt {
                constructor(img, comment, name, nat, age){
                    
                    this.img = img
                    this.comment = comment
                    this.name = name 
                    this.nat = nat
                    this.age = age
                
                }

                top(){
                    let _top = document.createElement('figure')
                    _top.classList.add('tp')
                    _top.innerHTML=`
                        <img src="${this.img}" />
                    `
                    return _top
                }
                middle(){
                    let _middle = document.createElement('div')
                    _middle.classList.add('mid')
                    _middle.innerHTML=`
                        <h4>
                            ${this.comment}
                        </h4>
                    `  
                    return _middle
                }
                bottom(){
                    let _bottom = document.createElement('div')
                    _bottom.classList.add('bot')
                    _bottom.innerHTML=`
                        <span>${this.name}</span>
                        <span>${this.age}</span>
                        <span>${this.nat}</span>
                    `
                    return _bottom
                }


                complete(){
                    let _complete = document.createElement('div')
                    _complete.classList.add('box')
                    _complete.appendChild(this.top())
                    _complete.appendChild(this.middle())
                    _complete.appendChild(this.bottom())
                    return _complete
                }
            }