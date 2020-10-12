# react_task2_1

Шарифуллина Александра

Домашнее задание 2.1

<h1> Портфолио с фильтрами </h1>
Необходимо реализовать портфолио с фильтрами, аналогичное указанному на изображении.

<img src="https://github.com/netology-code/ra16-homeworks/blob/master/events-state/filter/assets/portfolio-all.png"/>

<h3> Описание проекта </h3>
Разработайте компонент класса Portfolio хранящий список фильтров (а также активный фильтр) а также список проектов.

Сами фильтры отображаются в компоненте без состояния Toolbar, которому от Portfolio мы передаем три свойства:
<ul>
  <li> filters - список фильтров, название которых совпадает с категориями проектов, </li>
  <li> selected - активный фильтр, </li>
<li> onSelectFilter(filter) - обработчик события, который реагирует на выбор пользователем одного из фильтров, обработчик принимает один аргумент — строку с названием фильтра. </li>
</ul>
Пример:

<Toolbar
  filters={["All", "Websites", "Flayers", "Business Cards"]}
  selected="All"
  onSelectFilter={(filter) => {console.log(filter);}}/>

В данном примере при выборе фильтра его название будет выведено в консоль. Например «Business Cards».

Изображения самих проектов отображаются компонентом без состояния ProjectList, которому от Portfolio мы передаем список проектов — в свойство projects. Отображение проектов — это единственная ответственность компонента ProjectList.

Чтобы компонент Portfolio мог реагировать на выбор пользователем фильтра проектов, например Business Cards, и передававать отфильтрованные по категории Business Cards проекты в компонент ProjectList, в класс Portfolio необходимо добавить состояние (state).

Ваша задача:

- установить состояние выбранного фильтра в обработчике события который Portfolio передает в свойство onSelectFilter компонента Toolbar
- из компонента Portfolio передать активный фильтр в свойство selected компонента Toolbar
- в компоненте Portfolio отфильтровать по активному фильтру проекты и передать их в компонент ProjectList

<img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/assets/portfolio-cards.png"/>

Набор данных для отображения:

[{
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
  category: "Flayers"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
  category: "Flayers"
}]

https://github.com/netology-code/ra16-homeworks/tree/master/events-state/filter#%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE-%D1%81-%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%B0%D0%BC%D0%B8
