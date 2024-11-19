let box = document.querySelector(".box");
let btn = document.querySelector("button");


const speak = (input)=>{
    let speakInput = new SpeechSynthesisUtterance(input)
    speakInput.rate = 2
    speakInput.pitch = 2
    // speakInput.lan
    window.speechSynthesis.speak(speakInput)
}

window.onload= ()=>{
    // speak("hello pranav what may i help you ?")
    greet()

}

const greet = ()=>{
    let date = new Date();
    let hour = date.getHours();
    
    if(hour >= 0 && hour < 12){
        speak("Good Morning Pranav, How may I help You ");
    }
    else if(hour >= 12 && hour < 16){
        speak("Good Afternoon , How may I help You ");
    }
    else{
        speak("Good Evening , How may I help You ");
    }
}



//TO OPEN THE MICROPHONE WHEN CLICKED ON THE BUTTON

const startVoiceInput = ()=>{
    if('webkitSpeechRecognition' in window){
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US' 

        recognition.onresult = (e)=>{
            let spokenText = e.results[0][0].transcript
            handleCommand(spokenText.toLowerCase())

                // to change button icons when stopped talking 
            box.classList.remove("btn-box");
            btn.innerHTML = '<i class="fa-solid fa-microphone-lines-slash"></i>'            
        }
        recognition.start();
    }else{
        alert("Your Browser does not Support the Voice Recognition")
    }
    
}

//TO CHANGE THE BUTTON ICON WHEN CLICKED 
btn.addEventListener("click", function(){
    box.classList.add("btn-box");
    btn.innerHTML = '<i class="fa-solid fa-microphone-lines"></i>'

    startVoiceInput();
})

//TO PRINT THE SPOKEN TEXT FROM USER 
const handleCommand = (command)=>{
    console.log(command) ;

    if(command.includes("hello") || command.includes("hi") || command.includes("hey")){
        speak("Hello sir, How may I Help You !")
    }
    else if(command.includes("who are you") || command.includes("developed") || command.includes("hu r u")){
        speak("Hi I am a Virtual assistance Developed by Pranav and cloud infotechs and their team")
    }
    else if(command.includes("open cloud infotechs youtube channel") || command.includes("cloud infotechs") || command.includes("cloud infotechs channel")){
        speak("opening cloud infotechs youtube channel");
        window.open("https://www.youtube.com/@CloudInfotechs")
    }
    else if(command.includes("open cloud infotechs website") || command.includes("cloud infotechs website")){
        speak("opening cloud infotechs official website");
        window.open("http://www.cloudinfotechs.in/")
    }
    else if(command.includes("open youtube") || command.includes("youtube")){
        speak("opening youtube homepage");
        window.open("https://www.youtube.com/")
    }
    else if(command.includes("open google") || command.includes("google")){
        speak("opening google homepage");
        window.open("https://www.google.co.in/")
    }
    else if(command.includes("whats the current time") || command.includes("time please") || command.includes("current time") || command.includes("please tell me current time")){
        let time = new Date().toLocaleDateString(undefined, {hour:'numeric', minute:'numeric'})
        speak("current time is" + time)
    }
    else if(command.includes("whats the todays date") || command.includes("tell me date") || command.includes("date") || command.includes("can you please tell me whats todays date")){
        let date = new Date().toLocaleDateString(undefined, {day:'numeric', month:'long'})
        speak("todays date is " + date)
    }
    else if(command.includes("open chatgpt") || command.includes("chatgpt") || command.includes("chat gpt") || command.includes("open chat gpt")){
        let time = new Date().toLocaleDateString(undefined, {hour:'numeric', minute:'numeric'})
        speak(time)
    }
    else{
        speak(`this is what I found on internet regarding ${command}`)
        window.open(`https://www.google.com/search?q=${command}`)
    }

}