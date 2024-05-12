const items = [
  "1",
  "1",
  "2",
  "2",
  "3",
  "3",
  "4",
  "4",
  "5",
  "5",
  "6",
  "6",
  "7",
  "7",
  "8",
  "8",
];

// Bu hissede internetden komeklik almisam
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

var shulfledArr = shuffleArray(items);
for (let i = 0; i < items.length; i++) {
  let card = document.createElement("div");
  card.className = "card";
  let img = document.createElement("img");
  img.className = "card-img";
  img.src = `assets/img${shulfledArr[i]}.png`;
  card.appendChild(img);
  card.onclick = function () {
    card.classList.add("cardOpened");
    setTimeout(() => {
      var img = card.querySelector(".card-img");
      img.style.display = "block"; 
      if (document.querySelectorAll(".cardOpened").length > 1) {
        var openedCards = document.querySelectorAll(".cardOpened");

        if (
          openedCards[0].querySelector(".card-img").src ===
          openedCards[1].querySelector(".card-img").src
        ) {
          openedCards[0].classList.add("cardFinded");
          openedCards[1].classList.add("cardFinded");
          openedCards[0].classList.remove("cardOpened");
          openedCards[1].classList.remove("cardOpened");
          if (document.querySelectorAll(".cardFinded").length == items.length) {
            alert("windana");
          } 
        }
        else {
          openedCards[0].classList.remove('cardOpened');
          openedCards[1].classList.remove('cardOpened');
          
          // img.style.display = "none";
           setTimeout(()=>{
            openedCards[0].querySelector(".card-img").style.display = 'none';
           openedCards[1].querySelector(".card-img").style.display = 'none';

           },400);
          // openedCards[1].querySelector(".card-img").classList.add('ifUncorrect');
          // openedCards[0].querySelector(".card-img").classList.remove('card-img');
          // openedCards[1].querySelector(".card-img").classList.remove('card-img');

          
          // openedCards[0].classList.add('ifUncorrect');
          // openedCards[1].classList.add('ifUncorrect');
        }
      }
    }, 100);
  };

  document.querySelector(".gameArea").appendChild(card);
}

setTimeout(hideCards, 3000);

function hideCards() {

  var cards = document.querySelectorAll(".card-img");
  cards.forEach(function (card) {
    card.style.display = "none";
  });
}


function ResetbtnClicked()
{
  location.reload();

}