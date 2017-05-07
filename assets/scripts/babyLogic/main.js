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
      updateText = 'Baby is as big as a poppyseed!'
      break
    case 5:
      updateText = 'Baby is as big as a sesame seed!'
      break
    case 6:
      updateText = "Baby is as big as a hershey's kiss!"
      break
    case 7:
      updateText = 'Baby is as big as a blueberry!'
      break
    case 8:
      updateText = 'Baby is as big as a raspberry!'
      break
    case 9:
      updateText = 'Baby is as big as a sushi roll!'
      break
    case 10:
      updateText = 'Baby is as big as a petit four!'
      break
    case 11:
      updateText = 'Baby is as big as a ping pong ball!'
      break
    case 12:
      updateText = 'Baby is as big as a small macaron!'
      break
    case 13:
      updateText = 'Baby is as big as a lemon!'
      break
    case 14:
      updateText = 'Baby is as big as a mini cactus!'
      break
    case 15:
      updateText = 'Baby is as big as an eclair!'
      break
    case 16:
      updateText = 'Baby is as big as an avocado!'
      break
    case 17:
      updateText = 'Baby is as big as a pomegranate!'
      break
    case 18:
      updateText = 'Baby is as big as a croissant!'
      break
    case 19:
      updateText = 'Baby is as big as a palmier cookie!'
      break
    case 20:
      updateText = 'Baby is as big as a raspberry!'
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
