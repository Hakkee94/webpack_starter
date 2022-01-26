import Dragon from './shared/images/Dragon.svg'
import baloons from './shared/images/balloons.png'
import './style.scss'

class WorldName {
    #name

    constructor() {
        this.#name = ''
    }

    setName() {
        this.#name = prompt("Please write your name")
    }

    getName() {
        return this.#name
    }
}

const myName = new WorldName()
myName.setName()


const heading = document.createElement('h1')
heading.textContent = 'Hello world!' + myName.getName()

const img = document.createElement('img')
img.src = Dragon

const baloonsImg = document.createElement('img')
baloonsImg.src = baloons


const root = document.querySelector('#root')
root.append(heading)
root.append(img)
root.append(baloonsImg)

