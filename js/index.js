document.getElementById('accept-name').addEventListener('click', event => {
    let name = document.getElementById('name').value;
    if (name != '') {
        document.getElementById('welcome').innerHTML = 'Bienvenidx, ' + name;
        document.getElementById('questions').innerHTML = `<div class="col-10 offset-1" style="background-color: #E7D2CC; border: 2px solid #B9B7BD;">
        <div>
          <p class="mt-2">Pregunta 1. Lorem ipsum dolor maiores itaque corporis?</p>
          <p>Opciones:
            <ol>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
              </0l>
          </p>
          <p>Tu respuesta: <input type="number" class="col-3" id="answer-one"></p>
        </div>
        <div>
          <p class="mt-2">Pregunta 2. Lorem ipsum dolor maiores itaque corporis?</p>
          <p>Opciones:
            <ol>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
              </0l>
          </p>
          <p>Tu respuesta: <input type="number" class="col-3" id="answer-two"></p>
        </div>
        <div>
          <p class="mt-2">Pregunta 3. Lorem ipsum dolor maiores itaque corporis?</p>
          <p>Opciones:
            <ol>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
              </0l>
          </p>
          <p>Tu respuesta: <input type="number" class="col-3" id="answer-three"></p>
        </div>
        <p class="col-6 offset-3"><button class="btn btn-secondary" onclick="checkAnswers()">Enviar respuestas</button></p>
      </div>`;
    } else {
        alert('Debes ingresar tu nombre para jugar.');
    }
});

const checkAnswers = () => {
    let answerOne = document.getElementById('answer-one').value;
    let answerTwo = document.getElementById('answer-two').value;
    let answerThree = document.getElementById('answer-three').value;
    let count = 0;
    let correctAnswer = 0;

    if (answerOne == 1) {
        correctAnswer++;
        count = count + 100;
    }
    if (answerTwo == 3) {
        correctAnswer++;
        count = count + 100;
    }
    if (answerThree == 2) {
        correctAnswer++;
        count = count + 100;
    }

    document.getElementById('questions').innerHTML = `<div class="col-10 offset-1" style="background-color: #E7D2CC; border: 2px solid #B9B7BD;">
    <p class="mt-2">Tuviste ${correctAnswer} correctas!</p>
    <p>Tu puntuacion fue de ${count} puntos!</p>
    <p class="col-6 offset-3"><button class="btn btn-secondary" id="reload-game" onclick="reload()">Volver a jugar</button></p>
  </div>`;
};

const reload = () => {
    document.getElementById('reload-game').addEventListener('click', event => {
        window.location.reload();
    })
};