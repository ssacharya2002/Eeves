

interface EventProps{
    params:{
        eventId:string
    }
}


const EventIdPage = ({params}:EventProps) => {

    return ( 
        <div className="px-10 ">
            event details page
        </div>
     );
}

export default EventIdPage;