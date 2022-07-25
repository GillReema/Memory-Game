const cardArray = [
	{
		name: 'fries',
		img:
	},
	{
		name: 'cheeseburger',
		img:
	},
	{
		name: 'hotdog',
		img:
	},
	{
		name: 'icecream',
		img:
	},
	{
		name: 'milkshake',
		img:
	},
	{
		name: 'pizza',
		img:
	},
	{
		name: 'fries',
		img:
	},
	{
		name: 'cheeseburger',
		img:
	},
	{
		name: 'hotdog',
		img:
	},
	{
		name: 'icecream',
		img:
	},
	{
		name: 'milkshake',
		img:
	},
	{
		name: 'pizza',
		img:
	},
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function creatboard() {
	far(let i = 0; i < 10; i++) {
		const card = document.createElement('img')
		card.setAttribute('scr', 'images/blank.png')
		card.setAttribute('data-id', i)
		gridDisplay.appendChild(card)

	}
}