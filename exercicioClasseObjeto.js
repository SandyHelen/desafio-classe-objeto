class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    
    attack(){
        let attackType = 0
        
        switch(this.type){
            case "mago" :
                attackType = "magia"
                break
            case "guerreiro" :
                attackType = "espada"
                break
            case "monge" :
                attackType = "artes marciais"
                break
            case "ninja" :
                attackType = "shuriken"
                break
            default:
                console.log("Tipo de herói não válido")
        }
        
        if (attackType != 0){ 
            console.log(`O ${this.type} atacou usando ${attackType}`)
            
        }
    }
}

let heroAction = new hero("Nome", "25", "mago")

heroAction.attack()