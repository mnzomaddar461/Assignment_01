// function studentIntroduction(student) {
//     if((typeof student !== 'object' || student === null || Object.keys(student).length === 0) || (!student.name || !student.age || !student.course)){
//         return "Invalid"
//     }
//     else return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
// }

const { act } = require("react")

// let students = {
//     name: "Rafi",
//     age: 18,
//     course: "JavaScript"
// }

// console.log(studentIntroduction({}))

// function filterActiveUsers(users) {
//     if(!Array.isArray(users) || users.length === 0){
//         return "Invalid"
//     }
//     else{
//         let chackIsActiveKeys = users.filter((user) => user.isActive === undefined)
//             if(chackIsActiveKeys.length > 0) return "Invalid"
//     }

//     let activeUsers = users.filter((user) => user.isActive === true);
//     return activeUsers
// }

// let users = [{name:"A", isActive:true},{name:"B", isActive:false}]
// console.log(filterActiveUsers(users))

// function countHashtags(caption) {
//     if(typeof caption !== 'string' || typeof caption === "number" || caption.length === 0) return "Invalid"

//     let partOfCaption = caption.split(" ")

//     let hashtags = partOfCaption.filter((word) => word.startsWith("#"));

//     if (hashtags.length === 0) {
//         return { hashtagCount: 0, longestTag: "" };
//     }

//     let lengthOfword = hashtags.map((words) => words.length)
//     let maxLengthOfword = Math.max(...lengthOfword)


//     let findMaxLengthWord = hashtags.find((word) => word.length === maxLengthOfword)

//     let leftHashtag = findMaxLengthWord.slice(1)

//     return {hashtagCount: hashtags.length, longestTag: leftHashtag}
// }

// function bonusScore(scores) {
//     if(!Array.isArray(scores) || scores.length === 0) {
//         return "Invalid"
//     }else{
//         let chackIndexNaN = scores.filter((index) => typeof index !== "number")
//         if(chackIndexNaN.length > 0){
//             return "Invalid"
//         }
//     }

//     let addExtraValue = scores.map((point) => point + 10)

//     let afterAddExtraValue = addExtraValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
//     return afterAddExtraValue
// }

// function generateLeaderboard(students) {
//     if (!Array.isArray(students)) {
//         return "Invalid";
//     }

//     if (students.length === 0) {
//         return "Invalid";
//     }

//     let chackScore = students.filter((points) => typeof points.score !== "number" || points.score === undefined )
//         if(chackScore.length > 0){
//             return "Invalid"
//         }

//     const qualified = students.filter((student) => {
//         return student.score >= 70;
//     });

//     const names = qualified.map((student) => {
//         return student.name.toUpperCase();
//     });

//     return names.slice(0, 3);
// }

// ------------------------------------- Assignment 03 soln: codes-------------------------
//Problem-01: Student Introduction Generator
function studentIntroduction(student) {
    if((typeof student !== 'object' || student === null || Object.keys(student).length === 0) || (!student.name || !student.age || !student.course)){
        return "Invalid"
    }
    else return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
}

//Problem-02: Active User Filter
function filterActiveUsers(users) {
    if(!Array.isArray(users) || users.length === 0){
        return "Invalid"
    }
    else{
        let chackIsActiveKeys = users.filter((user) => user.isActive === undefined)
            if(chackIsActiveKeys.length > 0) return "Invalid"
    }

    let activeUsers = users.filter((user) => user.isActive === true);
    return activeUsers
}

//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
    
    if(typeof caption !== 'string' || typeof caption === "number" || caption.length === 0) return "Invalid"

    let partOfCaption = caption.split(" ")

    let hashtags = partOfCaption.filter((word) => word.startsWith("#"));

    if (hashtags.length === 0) {
        return { hashtagCount: 0, longestTag: "" };
    }

    let lengthOfword = hashtags.map((words) => words.length)
    let maxLengthOfword = Math.max(...lengthOfword)


    let findMaxLengthWord = hashtags.find((word) => word.length === maxLengthOfword)

    let leftHashtag = findMaxLengthWord.slice(1)

    return {hashtagCount: hashtags.length, longestTag: leftHashtag}
}

//Problem-04: Bonus Score Calculator
function bonusScore(scores) {
    if(!Array.isArray(scores) || scores.length === 0) {
        return "Invalid"
    }else{
        let chackIndexNaN = scores.filter((index) => typeof index !== "number")
        if(chackIndexNaN.length > 0){
            return "Invalid"
        }
    }

    let addExtraValue = scores.map((point) => point + 10)

    let afterAddExtraValue = addExtraValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return afterAddExtraValue
}


//Problem-05: Debugging Challenge - AI Leaderboard Generator
function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

    let chackScore = students.filter((points) => typeof points.score !== "number" || points.score === undefined )
        if(chackScore.length > 0){
            return "Invalid"
        }

    const qualified = students.filter((student) => {
        return student.score >= 70;
    });

    const names = qualified.map((student) => {
        return student.name.toUpperCase();
    });

    return names.slice(0, 3);
}

