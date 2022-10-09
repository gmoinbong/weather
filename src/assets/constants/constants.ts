import moment from 'moment';

export const iconSwitch = (icon: unknown) => {
    switch (icon) {
        case 'Rain':
            return 'rain'
        case 'Clouds':
            return 'mainly_cloudy'
        case 'Clear':
            return 'sun'
        default: return 'sun'
    }
}
moment.updateLocale('en', {
    weekdays: [
        "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
    ],
    months: [
        "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
    ]

});

export const options = [

    { value: 'sav', label: 'Киев' },
    { label: 'Львов' },
    { label: 'Днепр' },
    { label: 'Харьков' },
    { label: 'Ивано-Франковск' },
    { label: 'Тернополь' },
    { label: 'Винница' },
    { label: 'Ровно' },
    { label: 'Одесса' },
    { label: 'Запорожье' },
    { label: 'Хмельницкий' },
    { label: 'Луцк' },
    { label: 'Полтава' },
    { label: 'Житомир' },
    { label: 'Кропивницкий	' },
    { label: 'Черкассы' },
    { label: 'Чернигов' },
    { label: 'Черновцы' },
    { label: 'Николаев' },
    { label: 'Ужгород' },
    { label: 'Сумы' },
    { label: 'Херсон' },
    { label: 'Донецк' },
    { label: 'Луганск' },
    { label: 'Симферополь' },
]
export const day = (count: number) => {
    return moment().add(count, 'days').format('dddd')
}
export const dayInfo = (count: number) => {
    return moment().add(count, 'days').format('D MMMM')
}