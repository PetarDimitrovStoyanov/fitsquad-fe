import "./previousEvents.scss";
import PrevEvent from "../prevEvent/PrevEvent.jsx";
import eventOneFirst from "./images/event1-1.webp"
import eventOneSecond from "./images/event1-2.webp"
import eventOneThird from "./images/event1-3.webp"
import eventTwoThird from "./images/event2-3.webp"
import eventTwoSecond from "./images/event2-2.webp"
import eventTwoFirst from "./images/event2-1.webp"
import eventThreeOne from "../../components/incomingEvents/images/malina-banner.webp"

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
            'е на броени мигове от Вас! Със същия хъс, ентусиазъм и работа в екип, нека заедно го направим още по-вълнуващ и незабравим.'
    }

    const propsEventTwo = {
        slides: [
            {image: eventTwoFirst},
            {image: eventTwoSecond},
            {image: eventTwoThird},
        ],
        delay: 5000,
        title: "Sol Nessebar",
        content: 'Първият тренировъчен лагер на Фитскуад е вече в историята, но сега тепърва започваме. Вие ни показахте, че има смисъл да го правим. ' +
            'Искаме да благодарим на всички вас, че ни уважихте. Ние си изкарахме супер яко и се надяваме, че сме успяли да Ви предадем част от нашата енергия. ' +
            'Очаквайте много снимки и видеа в страниците ни във фейсбук и инстаграм. ' +
            'Вие ни помагате да растем и да се усъвършенстваме, а ние ще Ви счупим лагерите... '
    }

    const propsEventThree = {
        slides: [
            {image: eventThreeOne}
        ],
        delay: 5000,
        title: "Вила Малина",
        content: 'Бягството от градската среда беше възможно с този неповторим лагер. Фокусът ни беше върху неповторимите изживявания и физическата активност' +
            ' сред чистия въздух и красивата природа на Пампорово. ' +
            'Имаше йога, медитация сред зеленина, спортни дейности на открито, вечери край лагерния огън и незабравими разговори.'
    }

    return (
        <div className="previous-events-container" id="previous-events">
            <div className="previous-content">
                <h2>Изминали Събития</h2>
                <div className="events-container">
                    <PrevEvent props={propsEventOne}/>
                    <PrevEvent props={propsEventTwo}/>
                    <PrevEvent props={propsEventThree}/>
                </div>
            </div>
            <div className="polygon-previous-events"></div>
        </div>
    )
}