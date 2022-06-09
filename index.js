// code your solution here

//Variable Declaration
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`

}

saturdayFun("bathe my dog")

//Variable Expression
const  mondayWork = function(activityMonday="go to the office") {
    return `This Monday, I will ${activityMonday}.`

}
mondayWork();


function wrapAdjective(wrapper="*") {

    return function (adjective="a hard worker") {
        return `You are ${wrapper}${adjective}${wrapper}!`

    }
}


console.log(wrapAdjective());


