import '../scripts/component/navbar.js';
import '../scripts/component/askBar.js';
import '../scripts/component/clock.js';
import anime from '../../node_modules/animejs/lib/anime.es';

const main = () => {

  const baseUrl = 'https://api.agify.io/?name=';

  const insertPost = (data) => {

    fetch(`${baseUrl}${data}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          const listBookElement = document.querySelector('#listBook');
          listBookElement.innerHTML = '';
          listBookElement.innerHTML += `
        <div class="insideCard" style="margin-top: 2%;">
          <div class="card">
            <div class="card-body">
              <center><p>The person with Nickname :</p></center>
              <center><h3>${responseJson.name}</h3></center>
              </br>
              <center><p>Will live until :</p></center>
              <center><h1 style="color:red">"${responseJson.age}"</h1></center>
            </div>
          </div>
        </div>
      `;
        }
      })
      .catch(error => {
        showResponseMessage(error);
      });
  }
  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  document.addEventListener('DOMContentLoaded', () => {

    const inputBookTitle = document.querySelector('#inputBookTitle');
    const buttonSave = document.querySelector('#buttonSave');
    const theTime = document.querySelector('#theTime');

    buttonSave.addEventListener('click', () => {
      const data = inputBookTitle.value;
      insertPost(data);
      let fireNodes1 = document.querySelectorAll("#fireNodes1 .cf-flame");
      let fireNodes2 = document.querySelectorAll("#fireNodes2 .cf-flame");
      let fireNodes3 = document.querySelectorAll("#fireNodes1 .cf-flame");
      let baseFire = document.querySelectorAll("#base-fire .cf-flame");

      const animateBaseFire = () => {
        anime({
          targets: baseFire,
          delay: anime.stagger(300),
          translateY:  () => {
            return anime.random(0, -10);
          },
          keyframes: [{
              scale: .8
            },
            {
              scale: .825
            },
            {
              scale: .9
            },
            {
              scale: .925
            },
            {
              scale: 1
            }
          ],
          duration: 300,
          easing: 'easeInOutSine',
          loop: true,
        })
      }
      const animateFlame1 = () => {
        anime({
          targets: fireNodes1,
          delay: anime.stagger(100),
          translateY: () => {
            return anime.random(0, 300);
          },
          rotate: 30,
          opacity: () => {
            return anime.random(.5, 1);
          },
          translateX: () => {
            return anime.random(0, -60);
          },
          scale: 0,
          skew: () => {
            return anime.random(0, 10);
          },
          loop: true,
          easing: "easeInOutSine",
        })
      }

      const animateFlame2 = () => {
        anime({
          targets: fireNodes2,
          delay: anime.stagger(400),
          translateX: () => {
            return anime.random(-30, 0);
          },
          translateY: () => {
            return anime.random(0, -260);
          },
          translateY: () => {
            return anime.random(-260, -160);
          },
          translateX: () =>{
            return anime.random(0, -30);
          },
          scale: 0,
          rotate: () =>{
            return anime.random(0, 60);
          },
          skew: () => {
            return anime.random(0, 30);
          },
          loop: true,
          easing: "easeInOutSine"
        })
      }

      const animateFlame3 = () => {
        anime({
          targets: fireNodes3,
          delay: anime.stagger(500),
          translateY: () => {
            return anime.random(-300, -200);
          },
          opacity: () => {
            return anime.random(0, 1);
          },
          translateX: () => {
            return anime.random(-50, 50);
          },
          scale: 0,
          rotate: () => {
            return anime.random(0, -30);
          },
          skew: () => {
            return anime.random(0, 20);
          },
          loop: true,
          easing: "easeInOutSine",
        })
      }

      animateFlame1();
      animateFlame2();
      animateFlame3();
      animateBaseFire();



      theTime.removeAttribute("hidden");

    })
  });

}

export default main;