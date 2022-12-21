import { dogProfiles } from "./dog.js";


let profileIndex = -1
const profileElement = document.getElementById("profile-info")
const profileContainer = document.getElementsByClassName("container")[0]
const profileReaction = document.querySelector(".container .reaction img")

profileContainer.addEventListener("click",()=>{
    showNextProfile()
})
document.getElementById("btn-heart").addEventListener("click",()=>{
    reactionClick("like")
})
document.getElementById("btn-cross").addEventListener("click",()=>{
    reactionClick("nope")
})

function reactionClick(reaction){
    if (reaction === "like"){
        dogProfiles[profileIndex].hasBeenLiked = true
    
    } else{
        dogProfiles[profileIndex].hasBeenLiked = false
    }
    dogProfiles[profileIndex].hasBeenSwiped = true
    setReaction()
    setTimeout(()=>{showNextProfile()},"600")
}

function setProfile(){
    profileElement.innerHTML = `<h2>${dogProfiles[profileIndex].name}, ${dogProfiles[profileIndex].age}</h2>
    <p>${dogProfiles[profileIndex].bio}</p>`
    profileContainer.style.backgroundImage = `url("${dogProfiles[profileIndex].avatar}")`
    setReaction()
}

function setReaction(){
    console.log(`setting reaction ` + dogProfiles[profileIndex].getReaction())
    switch (dogProfiles[profileIndex].getReaction()){
        case "nope":
            profileReaction.src = "images/badge-nope.png"
            profileReaction.style.visibility = "visible"
            break;
        case "like":
            profileReaction.src = "images/badge-like.png"
            profileReaction.style.visibility = "visible"
            break;
        default:
            profileReaction.style.visibility = "hidden"
            break;
    }
}

function showNextProfile(){
// at the end roll back around to dog 1
    if (dogProfiles.length-1 === profileIndex) { profileIndex = -1} 
    profileIndex++
    setProfile()
}

// MAIN Code
showNextProfile()
