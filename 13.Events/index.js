    import EventEmitter from 'events'

    //creating Instance
    const CustomEmitter = new EventEmitter();

    // 1. on: listen/register for an event.
    // 2. once: listen/register for an event.
    // 3. emit: emit/call an event

    CustomEmitter.once('response',(name,id) => {
        console.log(`user: ${name} id: ${id}`)
    })

     CustomEmitter.emit('response',"Darshu", 21);
        CustomEmitter.emit('response',"nagendra", 9);
