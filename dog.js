import dogs from "./data.js"

export class Dog{
    constructor(data){
        Object.assign(this,data)
        this.name = data.name
        this.avatar = data.avatar
        this.age = data.age
        this.bio = data.bio
        this.hasBeenSwiped = data.hasBeenSwiped
        this.hasBeenLiked = data.hasBeenLiked
    }
    getReaction(){
        let reaction = "none"
        if (this.hasBeenLiked){ reaction = "like"}
        else {if (this.hasBeenSwiped) {reaction = "nope"} else reaction = "none"}
        return reaction
    }
}

export let dogProfiles = dogs.map((dog)=>{
    return new Dog(dog)
})
