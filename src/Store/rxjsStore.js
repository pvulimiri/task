import {BehaviorSubject, Observable } from 'rxjs'


// function someAsyncStream(subscriber,newVal){
//     subscriber.next(newVal)
// }


const globalValueStore = new BehaviorSubject(1)
// const globalValueStore = Observable.create()

const setGlobalValue = (newVal) => {
    globalValueStore.next(newVal)
}
const getGlobalValue =()=>{
    return globalValueStore
} 
// const setGlobalValue = (observer,newVal) => {
//     observer.next(newVal)
// }
// const getGlobalValue =()=>{
//     return globalValueStore
// } 





export const rxjsStore = {setGlobalValue,getGlobalValue,} 