document.querySelector("#submitButton").addEventListener("click", (e) => {
  const value = document.querySelector("#glycemia-response").value;
  const response = document.querySelector("#responseText");
  const doctorQuestionValue = document.querySelector("#patient-response").value;

  if (value == "") {
    response.innerText = "Entre com um valor válido!";
    e.preventDefault();
    return;
  }

  if (value < 70) {
    response.innerText = "O seu nível de glicemia indica um quadro de: Hipoglicemia";
  } else if (value >= 70 && value <= 99) {
    response.innerText = "Glicemia normalizada :)";
  } else {
    response.innerText = "O seu nível de glicemia indica um quadro de: Hiperglicemia";
  }
  checkup(doctorQuestionValue);
})

function checkup(doctorQuestionValue) {
  const doctorQuestion = document.querySelector("#doctor-question");
  const responseDoctorText = document.querySelector("#responseDoctorText");
  doctorQuestion.classList.remove("hidden");
  if (doctorQuestionValue !== undefined && doctorQuestionValue !== "") {
    const difference = checkDates(doctorQuestionValue);
    if (difference >= 365) {
      responseDoctorText.innerText = "Está na hora de fazer um checkup!";
    } else if (difference > 0) {
      responseDoctorText.innerText = "Parabéns! Continue realizando checkups anualmente!";
    } else {
      responseDoctorText.innerText = "Entre com uma data válida";
    }
  }
}

function checkDates(userDate) {
  const currentDate = new Date();
  const userFinalDate = new Date(userDate);
  const oneDayInMilisseconds = 24 * 60 * 60 * 1000;
  const difference = currentDate - userFinalDate;
  const differenceInDays = Math.round(difference / oneDayInMilisseconds);
  return differenceInDays;
}
