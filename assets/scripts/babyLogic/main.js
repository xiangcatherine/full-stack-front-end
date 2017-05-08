'use strict'

const getImgBasedOnAge = (response) => {
  const week = response['baby']['age']
  $('.baby-size-img').css('display', 'block')
  // const weekImg = document.getElementById('weekImg' + week)
  // weekImg.style.display = 'block'
  if (week === 4) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494210131/projecttwo/week4.png')
  }
  if (week === 5) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216220/projecttwo/week5.png')
  }
  if (week === 6) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494210133/projecttwo/week6.png')
  }
  if (week === 7) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494210148/projecttwo/week7.png')
  }
  if (week === 8) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216235/projecttwo/week8.png')
  }
  if (week === 9) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494210137/projecttwo/week9.png')
  }
  if (week === 10) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216239/projecttwo/week10.png')
  }
  if (week === 11) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494210142/projecttwo/week11.png')
  }
  if (week === 12) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494210132/projecttwo/week12.png')
  }
  if (week === 13) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494210150/projecttwo/week13.png')
  }
  if (week === 14) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494210137/projecttwo/week14.png')
  }
  if (week === 15) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494210138/projecttwo/week15.png')
  }
  if (week === 16) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216237/projecttwo/week16.png')
  }
  if (week === 17) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494210151/projecttwo/week17.png')
  }
  if (week === 18) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494210148/projecttwo/week18.png')
  }
  if (week === 19) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216236/projecttwo/week19.png')
  }
  if (week === 20) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216236/projecttwo/week20.png')
  }
  if (week === 21) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216236/projecttwo/week21.png')
  }
  if (week === 22) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216266/projecttwo/week22.png')
  }
  if (week === 23) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216268/projecttwo/week23.png')
  }
  if (week === 24) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494210148/projecttwo/week24.png')
  }
  if (week === 25) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216270/projecttwo/week25.png')
  }
  if (week === 26) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216243/projecttwo/week26.png')
  }
  if (week === 27) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216271/projecttwo/week27.png')
  }
  if (week === 28) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216247/projecttwo/week28.png')
  }
  if (week === 29) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216251/projecttwo/week29.png')
  }
  if (week === 31) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216267/projecttwo/week31.png')
  }
  if (week === 32) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494216253/projecttwo/week32.png')
  }
  if (week === 40) {
    $('.baby-size-img').attr('src', 'http://res.cloudinary.com/xiangcatherine/image/upload/v1494210154/projecttwo/week40.png')
  }
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
      updateText = 'week 30: baby is as big as a zucchini!'
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
      updateText = 'week 37: baby is as big as a honeydew melon!'
      break
    case 38:
      updateText = 'week 38: baby is as big as a ukelele!'
      break
    case 39:
      updateText = 'week 39: baby is as big as a beach ball!'
      break
    case 40:
      updateText = 'week 40: baby is as big as a pikachu!'
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
