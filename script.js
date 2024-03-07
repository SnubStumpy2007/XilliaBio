const submit = () => {
    const ans = document.getElementById("answer").value

    if(ans === "Jude Mathis") {
        const intro = document.getElementById("bio")
        intro.textContent += "Jude Mathis is a Med Student"
        const image = document.getElementById("character-image")
        image.src = "jude.jpg"        
    } else if (ans === "Milla Maxwell") {
        const intro = document.getElementById("bio")
        intro.textContent += "Milla Maxwell is a god"
        const image = document.getElementById("character-image")
        image.src = "milla.jpg"        
    } else if (ans === "Leia Rolando") {
        const intro = document.getElementById("bio")
        intro.textContent += "Also a Med Student"
        const image = document.getElementById("character-image")
        image.src = "leia.jpg"        
    } else if (ans === "Elize Lutus") {
        const intro = document.getElementById("bio")
        intro.textContent += "Healer with Teepo"
        const image = document.getElementById("character-image")
        image.src = "elize.jpg"        
    } else if (ans === "Rowen J. Ilbert") {
        const intro = document.getElementById("bio")
        intro.textContent += "Old man"
        const image = document.getElementById("character-image")
        image.src = "rowen.jpg"        
    } else if (ans === "Alvin") {
        const intro = document.getElementById("bio")
        intro.textContent += "Traitor"
        const image = document.getElementById("character-image")
        image.src = "alvin.jpg"        
    } else {
        const intro =  document.getElementById("bio")
        intro.textContent = "Pick a valid character.  All selections are text sensitive"
    }
}

const reset = () => {
    location.reload()
}