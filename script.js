const submit = () => {
    const ans = document.getElementById("answer").value
    console.log(ans)

    if(ans === "Jude Mathis") {
        const intro = document.getElementById("bio")
        intro.textContent += "Jude Mathis is a Med Student"
        const image = document.getElementById("character-image")
        image.src = "jude.jpg"        
    }
}