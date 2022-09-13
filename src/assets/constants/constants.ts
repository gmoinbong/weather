export const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
export const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

export const myDate = new Date('September 28, 2022 08:33:00');
export const fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] +
    " " + myDate.getFullYear() + ", " + daysOfWeek[myDate.getDay()];