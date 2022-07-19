// Code EyesOnMe Component Here

function clickLog() {
    console.log("Good!")
}
function antiClickLog() {
    console.log("Hey! Eyes on me!")
}


export default function EyesOnMe() {
    return (

            <button onFocus={(e)=>clickLog()} onBlur={(e)=>antiClickLog()}>Eyes on me</button>

    )
}

