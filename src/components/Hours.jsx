export default function Hours({ hours }) {

    const getDay = (dayNumber) => {
        const number = dayNumber
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        return days[number]
    }

    const formatTime = (timeStr) => {
        if (timeStr > 1300) timeStr = timeStr -1200
        const seconds = timeStr.toString().slice(-2)
        const minutes = timeStr.toString().slice(0,-2)
        const indicator = seconds < 12 ? 'AM' : 'PM'
        return `${minutes}:${seconds} ${indicator}`
    }

    return (
        <div>
            <h3>Hours</h3>
            {
                hours.week_ranges.map((day, key) => (
                    <div key={key}>
                        <p>{getDay(key)}</p>
                        {
                            day.map((time, key) => (
                                <div key={key}>
                                    <span>{formatTime(time.open_time)}</span>
                                    <span> - </span>
                                    <span>{formatTime(time.close_time)}</span>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}