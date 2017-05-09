'use strict'

const getImgBasedOnAge = (response) => {
  const week = response['baby']['age']
  $('.baby-size-img').css('display', 'block')
  // const weekImg = document.getElementById('weekImg' + week)
  // weekImg.style.display = 'block'
  const imgSource = ("assets/images/week" + week + ".PNG")
  $('.baby-size-img').attr('src', imgSource)
}

const getBabySizeText = function (response) {
  const age = response['baby']['age']
  let updateText = ''

  switch (age) {
    case 4:
      updateText = 'week 4: baby is as big as a poppyseed!'
      break
    case 5:
      updateText = 'week 5: baby is as big as a nerd!'
      break
    case 6:
      updateText = "week 6: baby is as big as a hershey's kiss!"
      break
    case 7:
      updateText = 'week 7: baby is as big as a blueberry!'
      break
    case 8:
      updateText = 'week 8: baby is as big as a raspberry!'
      break
    case 9:
      updateText = 'week 9: baby is as big as a sushi roll!'
      break
    case 10:
      updateText = 'week 10: baby is as big as a lego man!'
      break
    case 11:
      updateText = 'week 11: baby is as big as a ping pong ball!'
      break
    case 12:
      updateText = 'week 12: baby is as big as a small macaron!'
      break
    case 13:
      updateText = 'week 13: baby is as big as a lemon!'
      break
    case 14:
      updateText = 'week 14: baby is as big as a mini cactus!'
      break
    case 15:
      updateText = 'week 15: baby is as big as an eclair!'
      break
    case 16:
      updateText = 'week 16: baby is as big as an avocado!'
      break
    case 17:
      updateText = 'week 17: baby is as big as a pomegranate!'
      break
    case 18:
      updateText = 'week 18: baby is as big as a croissant!'
      break
    case 19:
      updateText = 'week 19: baby is as big as a pint of ice cream!'
      break
    case 20:
      updateText = 'week 20: baby is as big as a banana!'
      break
    case 21:
      updateText = 'week 21: baby is as big as a bottle of sriracha!'
      break
    case 22:
      updateText = 'week 22: baby is as big as a coconut!'
      break
    case 23:
      updateText = 'week 23: baby is as big as a burrito!'
      break
    case 24:
      updateText = 'week 24: baby is as big as a demi-baguette!'
      break
    case 25:
      updateText = 'week 25: baby is as big as a wide-brimmed fedora!'
      break
    case 26:
      updateText = 'week 26: baby is as big as a bowling pin!'
      break
    case 27:
      updateText = 'week 27: baby is as big as a terrarium!'
      break
    case 28:
      updateText = 'week 28: baby is as big as an eggplant!'
      break
    case 29:
      updateText = 'week 29: baby is as big as a pineapple!'
      break
    case 30:
      updateText = 'week 30: baby is as big as a small platypus!'
      break
    case 31:
      updateText = 'week 31: baby is as big as a large movie popcorn!'
      break
    case 32:
      updateText = 'week 32: baby is as big as a bento box!'
      break
    case 33:
      updateText = 'week 33: baby is as big as a small chihuahua!'
      break
    case 34:
      updateText = 'week 34: baby is as big as a butternut squash!'
      break
    case 35:
      updateText = 'week 35: baby is as big as a picnic basket!'
      break
    case 36:
      updateText = 'week 36: baby is as big as a small pomenarian!'
      break
    case 37:
      updateText = 'week 37: baby is as big as a beach ball!'
      break
    case 38:
      updateText = 'week 38: baby is as big as a ukelele!'
      break
    case 39:
      updateText = 'week 39: baby is as big as a mini skateboard!'
      break
    case 40:
      updateText = 'week 40: baby is as big as a watermelon!'
      break
  }

  updateBabySizeText(updateText)
}

const updateBabySizeText = function (message) {
  $('.baby-size-text').text(message)
}

module.exports = {
  getImgBasedOnAge,
  getBabySizeText,
  updateBabySizeText
}
