import "./incomingEvents.scss"
import malaga1 from "./images/1.webp"
import malaga2 from "./images/2.webp"
import malaga3 from "./images/3.webp"
import malaga4 from "./images/4.webp"
import malaga5 from "./images/5.webp"
import malaga6 from "./images/6.webp"
import malaga7 from "./images/7.webp"
import malaga8 from "./images/8.webp"
import malaga9 from "./images/9.webp"
import malaga10 from "./images/10.webp"
import malaga11 from "./images/11.webp"
import IncEvents from "../incEvent/IncEvent.jsx";

export default function IncomingEvents() {

    const amount =  1500 * 100;
    //const amount = 380 * 100;


    const propsEventOne = {
        slides: [
            // {image: eventOneSecond},
            // {image: eventOneThird},
            // {image: eventOneFirst},
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

    const propsEventTwo = {
        slides: [
            {image: "https://res.cloudinary.com/dndecbxfg/video/upload/v1718396387/malina-compressed_a69woj.mp4"},
        ],
        delay: 4000,
        alignRow: true,
        amount: amount,
        title: "Вила Малина - 2024",
        content: <div>Искате ли да избягате от градската суета и да се насладите на свеж въздух, физически активности и
            незабравими преживявания сред природата? Нашият спортен лагер е точно за вас! Фитскуад Ви кани в сърцето на <b>Пампорово</b>.
            <p>Периодът е <b>20-22 септември</b>, а мястото <b><a href="https://malina-pamporovo.com/%d0%b3%d0%b0%d0%bb%d0%b5%d1%80%d0%b8%d1%8f/" target="_blank">Вили Малина</a></b>.</p>

            <ul>
                <p>Какво Ви очаква?</p>
                <li>Уникални тренировки и спортни занимания на открито.</li>
                <li>Йога и медитация сред зеленина.</li>
                <li>Вечери край лагерния огън и незабравими разговори.</li>
            </ul>

            <ul>
                <p>Защо да се присъедините?</p>
                <li>Подобряване на физическата формa.</li>
                <li>Нови приятели и забавления.</li>
                <li>Пълноценна почивка далеч от ежедневния стрес.</li>
                <li>Възможност за преоткриване на природата.</li>
            </ul>
            <span>Не пропускайте тази възможност за приключение и възстановяване! Регистрирайте се сега и запазете своето място!</span>
        </div>,
        // content: `Искате ли да избягате от градската суета и да се насладите на свеж въздух, физически активности и незабравими преживявания сред природата? Нашият спортен лагер е точно за вас!
        // Фит скуад ви кани в сърцето на Пампорово.` +
        //     `Периодът е 20-22 септември\n` +
        //     `Място: Вили Малина\n` +
        //     `Какво ви очаква:\n` +
        //     `Уникални тренировки и спортни занимания на открито\n` +
        //     `Йога и медитация сред зеленина\n` +
        //     `Вечери край лагерния огън и незабравими разговори\n` +
        //     `Защо да се присъедините:\n` +
        //     `* Подобряване на физическата форма\n` +
        //     `* Нови приятели и забавления\n'` +
        //     `* Пълноценна почивка далеч от ежедневния стрес\n` +
        //     `* Възможност за преоткриване на природата\n` +
        //     `Не пропускайте тази възможност за приключение и възстановяване! Регистрирайте се сега и запазете своето място!\n`
        //     ,
        program: [
            // {
            //     text: `<p>За повече информация, моля свържете се с нас.</p>`
            // },
            // {
            //     text: `<p><span style="font-size: 25px; color: lightgray">&#x25A0;</span> Цена: <b> ${(amount / 100).toFixed(2)} лева</b></p>`
            // }
        ]
    }


    const propsEventThree = {
        slides: [
             {image: malaga1},
             {image: malaga2},
             {image: malaga3},
             {image: malaga4},
             {image: malaga5},
             {image: malaga6},
             {image: malaga7},
             {image: malaga8},
             {image: malaga9},
             {image: malaga10},
             {image: malaga11}
        ],
        delay: 4000,
        amount: amount,
        title: "СПОРТЕН ЛАГЕР – МАГИЯТА НА ИСПАНИЯ",
        content: '<div>' +
            '<div><h3>Дестинация: Малага, Испания</h3>' +
            '&#x25A0; Период: 25 – 29 март 2024 г. (4 нощувки)</br>' +
            '&#x25A0; Цена на човек: <b> 1500.00 лева</b><div>' +
            '</br><h4>Акценти на офертата: </h4>' +
            '</div>' +
            '<div><span>🌞</span> <span>Спортен лагер в Испания – уникално съчетание от активна почивка, културни открития и релаксация на Средиземно море.</span> </div>' +
            '<div><span>🏨</span> <span>Настаняване в FAY HOTELS VICTORIA BEACH – модерен хотел, разположен на самия морски бряг.</span></div>' +
            '<div><span>🚴‍♀️ </span> <span>Спортни активности и обиколки на открито – насладете се на активни дни под слънчевите лъчи на Малага.</span></div></div className="square">',
        program: [
            {
                day: 1,
                text: '<div class="days-programs">' +
                    '<div style="font-size: 25px; color: lightgray">&#x25A0;</div>' +
                    '<div class="program">' +
                    '<span><b>1-ви ден / 25.03.2025 (СОФИЯ - МАЛАГА)</b></span>' +
                    '<span>5:45 - Отпътуване от летище София с директен полет на авиокомпания "Ryanair". </span>' +
                    '<span>8:50 - Пристигане и трансфер от летището до FAY HOTELS VICTORIA BEACH. </span>' +
                    '<span>10:00 - Настаняване и свободно време за релаксация край морето. </span>' +
                    '<span>12:00 - Обяд </span>' +
                    '<span>16:00 - Тренировка за корем + стречинг практика </span>' +
                    '<span>19:00 - Лекция на тема здравословно хранене и фитнес тренировки </span>' +
                    '<span>20:30 - Вечеря </span>' +
                    '</div></div>'
            },
            {
                day: 2,
                text: '<div class="days-programs">' +
                    '<div style="font-size: 25px; color: lightgray">&#x25A0;</div>' +
                    '<div class="program">' +
                    '<span><b>2-ри ден / 26.03.2025 </b></span>' +
                    '<span>8:00 - Закуска </span>' +
                    '<span>10:00 - Тренировка на плажа </span>' +
                    '<span>12:00 - Обяд </span>' +
                    '<span>13:00 - Обиколка на Малага с велосипед. </span>' +
                    '<span>Посещения на забележителности: </span>' +
                    '<span>- Катедралата на Малага (Catedral de Málaga).</span>' +
                    '<span>- Музеят на Малага (Museo de Málaga).</span>' +
                    '<span>- Крепостта Гибралфаро (Castillo de Gibralfaro)  – невероятни панорамни гледки към града и морето. </span>' +
                    '<span>- Арената за корида на Малага (Plaza de Toros) </span>' +
                    '<span>20:00 - Вечеря </span>' +
                    '</div></div>'
            },
            {
                day: 3,
                text: '<div class="days-programs">' +
                    '<div style="font-size: 25px; color: lightgray">&#x25A0;</div>' +
                    '<div class="program">' +
                    '<span><b>3-ти ден / 27.03.2025</b></span>' +
                    '<span>8:00 - Закуска </span>' +
                    '<span>10:00 - Екскурзия до Каминито дел Рей (Caminito del Rey)  – емблематична пътека за любителите на адреналина със спиращи дъха и ума гледки! </span>' +
                    '<span>14:00 - Обяд </span>' +
                    '<span>17:00 - Тренировка на плажа </span>' +
                    '<span>20:00 - Вечеря </span>' +
                    '</div></div>'
            },
            {
                day: 4,
                text: '<div class="days-programs">' +
                    '<div style="font-size: 25px; color: lightgray">&#x25A0;</div>' +
                    '<div class="program">' +
                    '<span><b>4-ти ден / 28.03.2025</b></span>' +
                    '<span>8:00 - Закуска </span>' +
                    '<span>10:00 - Тренировка на плажа </span>' +
                    '<span>12:00 - Обяд </span>' +
                    '<span>16:00 – Пилатес с Кристина Маврова </span>' +
                    '<span>20:00 - Вечеря на крайбрежно заведение </span>' +
                    '</div></div>'
            },
            {
                day: 5,
                text: '<div class="days-programs">' +
                    '<div style="font-size: 25px; color: lightgray">&#x25A0;</div>' +
                    '<div class="program">' +
                    '<span><b>5-ти ден / 29.03.2025 (МАЛАГА - СОФИЯ)</b></span>' +
                    '<span>5:20 - Закуска </span>' +
                    '<span>5:40 - Трансфер до летището </span>' +
                    '<span>7:05 - Отпътуване от летище Малага с директен полет на авиокомпания "Ryanair". </span>' +
                    '</div></div>'
            },
            {
                text: `<p>Програмата подлежи на промяна!</p>`
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
                <IncEvents props={propsEventThree}/>
            </div>
        </div>
    )
}