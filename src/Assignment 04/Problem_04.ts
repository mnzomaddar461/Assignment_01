// Traffic Light Action
type Control = "red" | "yellow" | "green"

function getTrafficAction(light: Control): string {
    if(light === "red"){
        return `Stop`
    }
    else if(light === "yellow"){
        return `Slow Down`
    }
    else{
        return `Go`
    }
}


console.log(getTrafficAction("green"));
