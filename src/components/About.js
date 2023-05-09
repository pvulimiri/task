import { Observable, from, fromEvent, of } from "rxjs"



export default function About(){
    // const agent = new Observable(
    //     function(observer){
    //         try{
    //             observer.next('Ram')
    //             observer.next('Mark')
    //             observer.next('Sita')
    //         }catch(e){
    //             observer.error(e)
    //         }
    //     }
    // )
    // const agent = of(["Akhil","Vamshi","Ankit"])
    const agent = from(["Akhil","Vamshi","Ankit"])
    const name = of("Akhil")
    agent.subscribe(data => {
        console.log(data)
    })
    name.subscribe(data => {
        console.log(data)
    })

    function buttonClick() {
        const btnObservable$= fromEvent
    }
    return(
        <div>
            <h1>
                About
            </h1>
            <button onClick={buttonClick}>
                This is a button
            </button>
        </div>
    )
}








function someAsyncStream(observer){
    setInterval(() =>{
        observer.next(Math.random()*10)
        // console.log(num1)
    },1000)
    
}


var stream1 = Observable.create(someAsyncStream)
// someAsyncStream()
stream1.subscribe(res => Listner(res))
// stream1.subscribe(res => Listner1(res))


function Listner(res){  //Observer   
    console.log(res)
}
// function Listner1(res){  //Observer   
//     console.log(res)
// }