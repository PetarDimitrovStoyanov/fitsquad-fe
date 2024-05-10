import "./previousEvents.scss";
import PrevEvent from "../prevEvent/PrevEvent.jsx";
import eventOneFirst from "./images/event1-1.jpg"
import eventOneSecond from "./images/event1-2.jpg"
import eventOneThird from "./images/event1-3.jpg"
import eventTwoThird from "./images/event2-3.jpg"
import eventTwoSecond from "./images/event2-2.jpg"
import eventTwoFirst from "./images/event2-1.jpg"

export default function PreviousEvents() {
    const propsEventOne = {
        slides: [
            {image: eventOneFirst},
            {image: eventOneSecond},
            {image: eventOneThird},
        ],
        delay: 4000,
        title: "Събитие 1",
        content: 'Sed eget eleifend arcu. Nulla ut velit id mauris maximus finibus. Vivamus nec convallis libero, sit amet malesuada sem. Phasellus ultrices risus vel arcu convallis lobortis. Proin nec semper sapien. Curabitur faucibus mi nec urna mattis, nec condimentum purus pellentesque. Cras lacinia, mauris ac malesuada commodo, magna magna fermentum orci, a consectetur magna dui sit amet ex. Sed vehicula consectetur diam, eget vehicula justo tristique sed. Integer interdum arcu a diam tincidunt placerat. Nullam non dictum sapien. Nulla facilisi.'
    }

    const propsEventTwo = {
        slides: [
            {image: eventTwoFirst},
            {image: eventTwoSecond},
            {image: eventTwoThird},
        ],
        delay: 5000,
        title: "Събитие 2",
        content: 'Vivamus nec convallis libero, sit amet malesuada sem. Phasellus ultrices risus vel arcu convallis lobortis. Proin nec semper sapien. Curabitur faucibus mi nec urna mattis, nec condimentum purus pellentesque. Cras lacinia, mauris ac malesuada commodo, magna magna fermentum orci, a consectetur magna dui sit amet ex. Sed vehicula consectetur diam, eget vehicula justo tristique sed. Integer interdum arcu a diam tincidunt placerat.'
    }

    return (
        <div className="previous-events-container" id="previous-events">
            <div className="previous-content">
                <h2>Изминали Събития</h2>
                <div className="events-container">
                    <PrevEvent props={propsEventOne}/>
                    <PrevEvent props={propsEventTwo}/>
                </div>
            </div>
            <div className="polygon-previous-events"></div>
        </div>
    )
}