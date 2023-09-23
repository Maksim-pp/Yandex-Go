import React from 'react'
import style from './Desktop.module.css'
import Header from '../../assets/img/smkt0003 2.png'
import logo from '../../assets/img/Logo.png'
import frame1 from '../../assets/img/Group 2087325527.png'
import frame2 from '../../assets/img/scooter.png'
import frame3 from '../../assets/img/Frame 1171275592.png'
import frame4 from '../../assets/img/Frame 1171275593.png'
import img1 from '../../assets/img/01.png'
import img2 from '../../assets/img/02.png'
import img3 from '../../assets/img/06.png'
import img4 from '../../assets/img/05.png'
import quotationMarks from '../../assets/img/cfee0016.png'
import location from '../../assets/img/smkt0008 2.png'
import coffee from '../../assets/img/smkt0010 6.png'
import smkt2 from '../../assets/img/Group 2087325524.png'
import smkt1 from '../../assets/img/cfee0015.png'
import text from '../../assets/img/Group 2087325522.png'
import plus from '../../assets/img/PLUS_010_0050.png'

function Desktop() {
  return (
    <div className={style.block}>
        <div className={style.gradient}></div>
        <div className={style.gradient__shadow}></div>
        <div className={style.header}>
            <div className={style.block_info}>
                <div className={style.logo}>
                    <img src={logo} alt="" />
                </div>
                <h1>Вступайте <br />в клуб <br /> Самокатов</h1>
                <p className={style.p}>Купите абонемент, чтобы стать <br />частью клуба в новом сезоне–2024. <br /> 8 месяцев за <span className={style.prise}>499 ₽</span>
                    <span className={style.strike}>3190 ₽</span> 
                </p>
                <button>Стать частью клуба</button>
            </div>
            <div>
                <img src={Header} className={style.img} alt="" />
                <div className={style.ellipse3}></div>
            </div>

            <div className={style.text}>
                <img src={text} alt="" />
            </div>
        </div>

        <div className={style.info}>
            <h1>Вот что даёт участие<br /> в клубе</h1>
            <div className={style.items}>
                <div className={style.item}>
                    <img src={frame1} alt="" />
                    <p className={style.p}>0 ₽ за старт в каждой поездке</p>
                </div>
                <div className={style.item}>
                    <img src={frame2} alt="" />
                    <p className={style.p}>Катаетесь с друзьями?<br /> Бронируйте до трёх самокатов<br /> с аккаунта с абонементом — <br />так у всех будет бесплатный старт</p>
                </div>
                <div className={style.item}>
                    <img src={frame3} alt="" />
                    <p className={style.p}>Бесплатная пауза 15 минут<br /> в поездке — например, чтобы<br /> зайти за кофе или передохнуть</p>
                </div>
                <div className={style.item}>
                    <img src={frame4} alt="" />
                    <p className={style.p}>Если самокат недостаточно<br /> заряжен или с ним неудобно<br /> переходить дорогу, замените<br /> по пути на другой — это бесплатно</p>
                </div>
            </div>
        </div>

        <div className={style.block__img}>
            <h1>Эксклюзивный доступ<br /> к событиям Самокатов</h1>
            <div>
                <p className={style.p}>С абонементом — у вас доступ<br /> к специальным мероприятиям,<br /> скидки и классный мерч. В 2023 году<br />
                    мы танцевали на Даче Плюс<br /> с Антохой MC, катались на самокатах<br /> с Сергеем Мезенцевым и слушали хор<br /> Attaque de Panique
                </p>
                <div className={style.banner}>
                    <div>
                        <img  src={img1} alt="" />
                    </div>
                    <div>
                        <img className={style.banner__img} src={img2} alt="" />
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <div>
                        <img src={img4} className={style.banner__img} alt="" />
                    </div>
                </div>
            </div>

            <div><img src={quotationMarks} alt="" className={style.icon__quotationMarks} /></div>
            <div><img src={location} alt="" className={style.icon__location} /></div>
            <div><img src={coffee} alt="" className={style.icon__coffee} /></div>
        </div>

        <div className={style.block__text}>
            <div>
                <h1>Купить<br /> абонемент<br /> и вступить<br /> в клуб смогут<br /> те, кто в Плюсе</h1>
                <p className={style.p}>За каждую поездку на самокатах<br /> такие пользователи получают<br /> кешбэк баллами. 
                    Баллы можно<br /> тратить на поездки на самокатах<br /> и такси с Яндекс Go, покупки<br /> и заказы в других сервисах Яндекса
                </p>
            </div>
            <div>
                <img src={smkt1} className={style.img__samokat1} alt="" />
                <div className={style.ellipse1}></div>
            </div>
            <div>
                <img src={smkt2} className={style.img__samokat2} alt="" />
                <div className={style.ellipse2}></div>
            </div>
            <div>
                <h1>80  % наших<br /> пользователей<br /> уже в клубе<br /> и экономят<br /> на поездках</h1>
                <p className={style.p}>Присоединяйтесь — опция начнёт<br /> действовать в начале сезона–2024.<br /> Об открытии сезона предупредим<br /> заранее, чтобы вы были готовы</p>
                <button className={style.btn}>Хочу абонемент</button>
            </div>

            <div>
                <img src={plus} className={style.plus} alt="" />
            </div>
        </div>

        <div className={style.footer}>
            Доп. опция «Абонемент на самокаты» на 8 месяцев (240 дней) активируется автоматически с момента старта сезона 2024 г. самокатов Яндекс Go,
            далее предусмотрено автопродление доп.опции за 399 руб./мес. Сертификат на доп.опцию «Абонемент на самокаты» на 8 месяцев оформляется на 
            условиях документа <a href="https://yandex.ru/legal/scooters_seasonpass/">yandex.ru/legal/scooters_seasonpass</a>. Доп.опция доступна пользователям
            с активной подпиской (условия подписки: <a href="https://yandex.ru/legal/yandex_plus_conditions/">yandex.ru
            /legal/yandex_plus_conditions</a>), есть ограничения, подробнее: <a href="https://yandex.ru/legal/yandex_plus_opzii_list/">yandex.ru/legal/yandex_plus_opzii_list</a>
            . В случае отсутствия у пользователя 
            активной подписки на дату активации доп.опции, пользователю предоставляется 7 дней подписки Яндекс Плюс бесплатно, далее автопродление — 299
            руб./мес. Электросамокаты Яндекс Go — сервис аренды электросамокатов на условиях: <a href="https://yandex.ru/legal/samokaty/">clck.ru/gwDGn</a>. 0+
        </div>
    </div>
  )
}

export default Desktop