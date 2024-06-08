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
        title: "Dreams Sunny Beach",
        content: 'Спомените, които създадохме заедно на последния лагер, все още държат страстта към спорта и ' +
            'приключенията жива. Ако изпитвате носталгия, не се косете, а се пригответе, защото следващият лагер ' +
            'е броени мигове от вас! Със същия хъс, ентусиазъм и работа в екип, нека заедно го направим още по-вълнуващ и незабравим.'
    }

    const propsEventTwo = {
        slides: [
            {image: eventTwoFirst},
            {image: eventTwoSecond},
            {image: eventTwoThird},
        ],
        delay: 5000,
        title: "Sol Nessebar",
        content: 'Първият тренировъчен лагер на Fit Squad е вече в историята, но сега тепърва започваме. Вие ни показахте, че има смисъл да го правим' +
            'Искаме да благодарим на всички вас, че ни уважихте. Ние си изкарахме супер яко и се надяваме, че сме успяли да ви предадем част от нашата енергия.' +
            'Очаквайте много снимки и видеа в страниците ни във фейсбук и инстаграм.' +
            'Вие ни помагате да растем и усъвършенстваме, а ние ще ви счупим лагерите... '
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