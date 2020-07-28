import { Select } from './select/select'
import './select/style.scss'

const select = new Select('#select', {
  placeholder: 'Choose item',
  // Опция для определения дефолтно выбранного элемента в дропдауне
  // selectedId: '4',

  data: [
    { id: '1', value: 'Item 1' },
    { id: '2', value: 'Item 2' },
    { id: '3', value: 'Item 3' },
    { id: '4', value: 'Item 4' },
    { id: '5', value: 'Item 5' },
    { id: '6', value: 'Item 6' },
  ],
  // Функция отдает в выбранный эелемент списка
  onSelect(item) {
    console.log(item)
  },
})

window.s = select
