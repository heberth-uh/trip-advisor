// Components
import Heading2 from "./common/Heading2"

export default function Hours({ hours }) {

    const getDay = (dayNumber) => {
        const number = dayNumber
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        return days[number]
    }

    const formatTime = (timeStr) => {
        if (timeStr > 1300) timeStr = timeStr - 1200
        const seconds = timeStr.toString().slice(-2)
        const minutes = timeStr.toString().slice(0, -2)
        const indicator = seconds < 12 ? 'AM' : 'PM'
        return `${minutes}:${seconds} ${indicator}`
    }

    return (
        <section>
            <Heading2>Working Hours</Heading2>
            {
                hours.week_ranges.map((day, key) => (
                    <div key={key} className="flex items-center flex-wrap gap-4 justify-between text-base font-light mb-2">
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
        </section>
    )
}