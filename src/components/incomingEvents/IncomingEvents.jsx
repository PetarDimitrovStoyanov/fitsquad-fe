import "./incomingEvents.scss"
import eventOneFirst from "./images/emerald1.jpg"
import eventOneSecond from "./images/emerald2.jpg"
import eventOneThird from "./images/emerald3.png"
import IncEvents from "../incEvent/IncEvent.jsx";

export default function IncomingEvents() {

    const amount = 0;
    //const amount = 750 * 100;

    const propsEventOne = {
        slides: [
            {image: eventOneSecond},
            {image: eventOneThird},
            {image: eventOneFirst},
        ],
        delay: 4000,
        amount: amount,
        title: "Emerald Beach Resort & Spa - All Inclusive - 14-16 Юни 2024",
        content: 'Спортният адреналин е вече във въздуха! Наближава най-готиният спортен лагер на морето, който ще ' +
            'срещнете - 14-16 юни! Готови ли сте да се потопите във вълнуваща комбинация от спорт, забавление и ' +
            'приключение? Пригответе се за дни изпълнени с емоции, нови приятелства и незабравими спортни предизвикателства!',
        program: [
            {
                day: 1,
                text: '<div class="days-programs">' +
                    '<div style="font-size: 25px; color: lightgray">&#x25A0;</div>' +
                    '<div class="program">' +
                    '<span>Петък - 14.06.2024</span>' +
                    '<span>15:00 - Настаняване и време за отдих</span>' +
                    '<span>17:00 - Пилатес</span>' +
                    '<span>18:20 - Тонизираща тренировка</span>' +
                    '<span>20:00 - Вечеря</span>' +
                    '<span>21:30 - Хаус парти (SKY BAR)</span>' +
                    '</div></div>'
            },
            {
                day: 2,
                text: '<div class="days-programs">' +
                    '<div style="font-size: 25px; color: lightgray">&#x25A0;</div>' +
                    '<div class="program">' +
                    '<span>Събота - 15.06.2024</span>' +
                    '<span>8:00 -  Закуска</span>' +
                    '<span>10:00 - Тренировка + отборни игри (на стадиона)</span>' +
                    '<span>12:00 - Обяд, време за отдих и плаж</span>' +
                    '<span>18:00 - Йога</span>' +
                    '<span>20:00 - Вечеря</span>' +
                    '<span>21:00 - Гръцко парти - Aristos Constantinou & Live Band</span>' +
                    '</div></div>'
            },
            {
                day: 3,
                text: '<div class="days-programs">' +
                    '<div style="font-size: 25px; color: lightgray">&#x25A0;</div>' +
                    '<div class="program">' +
                    '<span>Неделя - 16. 06.2024</span>' +
                    '<span>8:00 - Закуска</span>' +
                    '<span>10:00 - Тренировка (на плажа)</span>' +
                    '<span>12:00-13:00 - Напускане на стаите</span>' +
                    '</div></div>'
            },
            {
                text: `<p>
                            За въпроси относно лагера, моля пишете на лично.
                            Ако има хора, които няма с какво да дойдат или искат да пътуват с някого, да се свържат с мен,
                             за да организираме нещата.
                        </p>`
            },
            // {
            //     text: `<p><span style="font-size: 25px; color: lightgray">&#x25A0;</span> Цена: <b> ${amount / 100} лева</b></p>`
            // }
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