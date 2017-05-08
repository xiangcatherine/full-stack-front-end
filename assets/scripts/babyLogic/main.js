'use strict'

const getImgBasedOnAge = (response) => {
  const week = response['baby']['age']
  const weekImg = document.getElementById('weekImg' + week)
  weekImg.style.display = 'block'
}

const getBabySizeText = function (response) {
  const age = response['baby']['age']
  let updateText = ''

  switch (age) {
    case 4:
      updateText = 'Week 4: Baby is as big as a poppyseed!'
      break
    case 5:
      updateText = 'Week 5: Baby is as big as a sesame seed!'
      break
    case 6:
      updateText = "Week 6: Baby is as big as a hershey's kiss!"
      break
    case 7:
      updateText = 'Week 7: Baby is as big as a blueberry!'
      break
    case 8:
      updateText = 'Week 8: Baby is as big as a raspberry!'
      break
    case 9:
      updateText = 'Week 9: Baby is as big as a sushi roll!'
      break
    case 10:
      updateText = 'Week 10: Baby is as big as a petit four!'
      break
    case 11:
      updateText = 'Week 11: Baby is as big as a ping pong ball!'
      break
    case 12:
      updateText = 'Week 12: Baby is as big as a small macaron!'
      break
    case 13:
      updateText = 'Week 13: Baby is as big as a lemon!'
      break
    case 14:
      updateText = 'Week 14: Baby is as big as a mini cactus!'
      break
    case 15:
      updateText = 'Week 15: Baby is as big as an eclair!'
      break
    case 16:
      updateText = 'Week 16: Baby is as big as an avocado!'
      break
    case 17:
      updateText = 'Week 17: Baby is as big as a pomegranate!'
      break
    case 18:
      updateText = 'Week 18: Baby is as big as a croissant!'
      break
    case 19:
      updateText = 'Week 19: Baby is as big as a palmier cookie!'
      break
    case 20:
      updateText = 'Week 20: Baby is as big as a banana!'
      break
    case 21:
      updateText = 'Week 21: Baby is as big as a bottle of sriracha!'
      break
    case 22:
      updateText = 'Week 22: Baby is as big as a coconut!'
      break
    case 23:
      updateText = 'Week 23: Baby is as big as a burrito!'
      break
    case 24:
      updateText = 'Week 24: Baby is as big as a demi-baguette!'
      break
    case 25:
      updateText = 'Week 25: Baby is as big as a wide-brimmed fedora!'
      break
    case 26:
      updateText = 'Week 26: Baby is as big as a bowling pin!'
      break
    case 27:
      updateText = 'Week 27: Baby is as big as a terrarium!'
      break
    case 28:
      updateText = 'Week 28: Baby is as big as a rollerblade!'
      break
    case 29:
      updateText = 'Week 29: Baby is as big as a pineapple!'
      break
    case 30:
      updateText = 'Week 30: Baby is as big as a zucchini!'
      break
    case 31:
      updateText = 'Week 31: Baby is as big as a large movie popcorn!'
      break
    case 32:
      updateText = 'Week 32: Baby is as big as a bento box!'
      break
    case 33:
      updateText = 'Week 33: Baby is as big as a small chihuahua!'
      break
    case 34:
      updateText = 'Week 34: Baby is as big as a rollerblade!'
      break
    case 35:
      updateText = 'Week 35: Baby is as big as a picnic basket!'
      break
    case 36:
      updateText = 'Week 36: Baby is as big as a pomenarian!'
      break
    case 37:
      updateText = 'Week 37: Baby is as big as a honeydew melon!'
      break
    case 38:
      updateText = 'Week 38: Baby is as big as a ukelele!'
      break
    case 39:
      updateText = 'Week 39: Baby is as big as a beach ball!'
      break
    case 40:
      updateText = 'Week 40: Baby is as big as a pikachu!'
      break
  }

  updateBabySizeText(updateText)
}

const updateBabySizeText = function (message) {
  $('.baby-size-text').text(message)
}

// ["I'm only", age, "years old"].join(" ");

// "assets/images/week4.png"
// document.getElementById("imageid").src="../template/save.png";

// var d = new Date().getDay()
// var dayImg = document.getElementById('dayImg'+d);
// dayImg.style.visibility = "visible";

module.exports = {
  getImgBasedOnAge,
  getBabySizeText,
  updateBabySizeText
}
