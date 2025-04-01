import { parseISO, formatDistancToNow } from 'date-fns' 

const TimeAgo = () => {
let timeAgo = ''
if(timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistancToNow(date)
    timeAgo = `${timePeriod} ago`
}
//May not be timeAgi - just make time of post???
return (
    <span>
        &nbsp; <p>{timeAgo}</p>
    </span>
)
}

export default TimeAgo