export const quiz_example = {
  "question_type":"multiple_choice",
  "instrucciones":"Las respuestas incorrectas restan la mitad de la puntuación de una pregunta.",
  "choices": [
    {
      "title":"El Mundo Today",
      "img":"./assets/images/StephenHawking.png",
      "score":10,
      "answer":true,
      "index":0,
    }, {
      "title":"Periodico",
      "img":"./assets/images/OldNewspaper.jpg",
      "score":10,
      "answer":false,
      "index":1,
    }, {
      "title":"Barbanegra",
      "img":"El barco en el que navegaba el pirata se llamaba Queen Anne's Revenge",
      "score":10,
      "answer":true,
      "index":2,
    }, {
      "title":"Prison Break",
      "img":"La serie de Prison Break consta de 3 temporadas",
      "score":10,
      "answer":false,
      "index":3,
    },
  ],
};

// Respuestas correctas: +1 punto. Respuestas incorrectas: -0.5 puntos. Respuestas en blanco: 0 puntos.
