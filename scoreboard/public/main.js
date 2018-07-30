//Team 1 Add
const buttonClickEvent = () => {
  console.log('button was click')

  // query the DOM for the current value
  let currentValue = document.querySelector('.output1').textContent

  console.log(currentValue)

  // Add 1 to it
  // currentValue += 1 does not work because of types

  const newValue = parseInt(currentValue) + 1

  //put the new value back into the DOM
  document.querySelector('.output1').textContent = newValue

}

document.querySelector('.my-button').addEventListener('click', buttonClickEvent)

//Team 1 SUBTRACT
const buttonminusClickEvent = () => {
  console.log('button was click')

  // query the DOM for the current value
  let currentValue = document.querySelector('.output1').textContent

  console.log(currentValue)

  // Add 1 to it
  // currentValue += 1 does not work because of types

  const newValue = parseInt(currentValue) - 1

  //put the new value back into the DOM
  document.querySelector('.output1').textContent = newValue

}

document.querySelector('.my-buttonminus').addEventListener('click', buttonminusClickEvent)

// Team 2 Add

const button2ClickEvent = () => {
  console.log('button was click')

  // query the DOM for the current value
  let currentValue2 = document.querySelector('.output2').textContent

  console.log(currentValue2)

  // Add 1 to it
  // currentValue += 1 does not work because of types

  const newValue2 = parseInt(currentValue2) + 1

  //put the new value back into the DOM
  document.querySelector('.output2').textContent = newValue2

}

document.querySelector('.my-button2').addEventListener('click', button2ClickEvent)

// Team 2 Subtract

const button2MinusClickEvent = () => {
  console.log('button was click')

  // query the DOM for the current value
  let currentValue2 = document.querySelector('.output2').textContent

  console.log(currentValue2)

  // Add 1 to it
  // currentValue += 1 does not work because of types

  const newValue2 = parseInt(currentValue2) - 1

  //put the new value back into the DOM
  document.querySelector('.output2').textContent = newValue2

}

document.querySelector('.my-button2minus').addEventListener('click', button2MinusClickEvent)

//Team 1 name
