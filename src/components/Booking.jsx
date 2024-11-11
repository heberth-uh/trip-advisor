export default function Booking({ info }) {
    console.log(info)
    return (
        <section>
            <h2>Booking</h2>
            <img src={info.provider_img} alt={info.provider} height='24'/>
            <br />
            <a href={info.url} target="_blank">{info.button_text}</a>
        </section>
    )
}