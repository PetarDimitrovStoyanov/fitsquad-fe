import "./incomingEvents.scss"
import eventOneFirst from "./images/event1-1.jpg"
import eventOneSecond from "./images/event1-2.jpg"
import eventOneThird from "./images/event1-3.jpg"
import IncEvents from "../incEvent/IncEvent.jsx";
export default function IncomingEvents() {

    const amount = 750 * 100;

    const propsEventOne = {
        slides: [
            {image: eventOneFirst},
            {image: eventOneSecond},
            {image: eventOneThird},
        ],
        delay: 4000,
        amount: amount,
        title: "Заглавие на събитие",
        content: 'Sed eget eleifend arcu. Nulla ut velit id mauris maximus finibus. Vivamus nec convallis libero, sit amet malesuada sem. Phasellus ultrices risus vel arcu convallis lobortis. Proin nec semper sapien. Curabitur faucibus mi nec urna mattis, nec condimentum purus pellentesque. Cras lacinia, mauris ac malesuada commodo, magna magna fermentum orci, a consectetur magna dui sit amet ex. Sed vehicula consectetur diam, eget vehicula justo tristique sed. Integer interdum arcu a diam tincidunt placerat. Nullam non dictum sapien. Nulla facilisi.',
        program: [
            {
                day: 1,
                text: '<p><span style="font-size: 25px; color: lightgray">&#x25A0;</span> Description for day 1. <br>Breakfast at 08:00 after that sport on the beach for 3 hours.</p>'
            },
            {
                day: 2,
                text: '<p><span style="font-size: 25px; color: lightgray">&#x25A0;</span> Description for day 2. <br>Cross at 10:00 on the beach.</p>'
            },
            {
                day: 3,
                text: '<p><span style="font-size: 25px; color: lightgray">&#x25A0;</span> Description for day 3. <br>Coffee at 09:00 on the beach. <br>Live discussion at 13:00 in the hotel conference room.</p>'
            },
            {
                text: `<p><span style="font-size: 25px; color: lightgray">&#x25A0;</span> Цена: <b> ${amount / 100} лева</b></p>`
            }
        ]
    }

    return (
        <div className="incoming-events-container" id="incoming-events">
            <h2>Предстоящи Събития</h2>
            <div className="incoming-events">
                <IncEvents props={propsEventOne}/>
            </div>
        </div>
    )
}