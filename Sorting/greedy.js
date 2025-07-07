function maxEvents(start, end){
    const events = start.map((s,i)=>({start:s , end: end[i]}));
    events.sort ((a,b)=> a.end -b.end);

    let count = 0 ;
    let lasEndtime = 0 ;
    for(const event of events){
        count++;
        
    }
}