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
moment.updateLocale('ru', {
    weekdays: [
        "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
    ],
    months: [
        "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
    ]
});

export const valuesOfTabs = [
    " На неделю",
    "Еще 7 дней",
]

export const day = (count: number) => {
    return moment().add(count, 'days').format('dddd')
}
export const dayInfo = (count: number) => {
    return moment().add(count, 'days').format('D MMMM')
}
