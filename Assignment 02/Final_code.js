//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
        return "Invalid";
    }
    else if(teamAGoals > teamBGoals){
        return "Team A Won";
    }
    else if(teamBGoals > teamAGoals){
        return "Team B Won";
    }
    else{
        return "Draw";
    }
}

//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
    let sum = 0;
    if(!Array.isArray(weights)){
        return "Invalid";
    }
    else{
        for(let i = 0; i < weights.length; i++){
            sum = sum + weights[i]
        }
        if(sum <= 400){
            return true;
        }
        else{
            return false;
        }
    }
}

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    let extra = tokensUsed;
    let extraUnderHundred= tokensUsed - 500;
    if(tokensUsed < 0 || typeof tokensUsed !== "number"){
        return "Invalid"
    }
    else if(tokensUsed <= 500){
        return 0;
    }
    else if(extraUnderHundred < 100){
        return 0;
    }
    else{
        extra = tokensUsed - 500;
        return Math.floor(extra / 100) * 5;
    }
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    if(!Array.isArray(restaurants) || restaurants.length === 0){
        return "Invalid";
    }

    let maxRatingRes = restaurants[0];
    for(let i = 0; i < restaurants.length; i++){
        if(restaurants[i].rating > maxRatingRes.rating){
            maxRatingRes = restaurants[i];
        }
    }

    return maxRatingRes.name.toUpperCase();
}


//Problem-05: Debugging Challenge - API Response Time Monitor
function averageResponseTime(times) {
  if (!Array.isArray(times)) {
        return "Invalid";
   }
   
   if (times.length === 0) {
        return "Invalid";
    }
   
 let total = 0;
    for (let i = 0; i < times.length; i++) {
        if(typeof times[i] !== "number"){
            return "Invalid";
        }
        total = total + times[i];
    }
   
  return total / times.length;
}

