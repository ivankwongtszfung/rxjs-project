import { Observable,from, fromEvent } from 'rxjs';
import { map,scan,filter } from 'rxjs/operators';

window.addEventListener("DOMContentLoaded",(event)=>{
    
    const emojiCode = 127828;
    let emojiCurrent = emojiCode;
    let emojiCount = 0;
    const data = [1,2,3,4,5,6,7,8,9];
    
    const basic = Observable.create((observer)=>{
        observer.next('A');
        observer.next('B');
        observer.next('C');
        observer.complete();
    });
    basic.subscribe(print);

    const basicFrom = from(data).pipe(
        map(d => d*d),
        scan((acc,val) => acc+val),
    );
    basicFrom.subscribe(print)
    
    const basicEvent = fromEvent(window,'scroll').pipe(
        
    );
    basicEvent.subscribe(print);

    function print(data){
        let text = document.createElement("H1");
        text.innerHTML = `&#${emojiCurrent};:${data}`;
        document.body.appendChild(text);
        emojiCurrent =  emojiCode  + ((++emojiCount) % 50);
    }
     
    
});




