import CreateEvent from "./create-event";

interface EventProps{
    params:{
        eventId:string
    }
}


const EventIdPage = ({params}:EventProps) => {

    if(params.eventId ==="new"){
        return <CreateEvent />
    }
    return ( 
        <div className="px-10 ">
            event details page
        </div>
     );
}

export default EventIdPage;