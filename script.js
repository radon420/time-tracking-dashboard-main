let result = fetch("./data.json").then((response) => {
  return response.json();
});

let variable = (x, buttonValue) =>
  result.then((data) => {
    let values = Object.entries(data[x]);
    switch (buttonValue) {
      case 1:
        return [values[1][1].daily.current, values[1][1].daily.previous];

      case 2:
        return [values[1][1].weekly.current, values[1][1].weekly.previous];

      case 3:
        return [values[1][1].monthly.current, values[1][1].monthly.previous];
    }
  });

function workContent(call_variable) {
  call_variable.then((current) => {
    document.querySelector("#work .current-time").textContent =
      current[0] + "hrs";
    document.querySelector("#work-time").textContent = current[1] + "hrs";
  });
}

function playContent(call_variable) {
  call_variable.then((current) => {
    document.querySelector("#play .current-time").textContent =
      current[0] + "hrs";
    document.querySelector("#play-time").textContent = current[1] + "hrs";
  });
}

function study(call_variable) {
  call_variable.then((current) => {
    document.querySelector("#study .current-time").textContent =
      current[0] + "hrs";
    document.querySelector("#study-time").textContent = current[1] + "hrs";
  });
}

function exercise(call_variable) {
  call_variable.then((current) => {
    document.querySelector("#exercise .current-time").textContent =
      current[0] + "hrs";
    document.querySelector("#exercise-time").textContent = current[1] + "hrs";
  });
}

function social(call_variable) {
  call_variable.then((current) => {
    document.querySelector("#social .current-time").textContent =
      current[0] + "hrs";
    document.querySelector("#social-time").textContent = current[1] + "hrs";
  });
}

function selfCare(call_variable) {
  call_variable.then((current) => {
    document.querySelector("#self-care .current-time").textContent =
      current[0] + "hrs";
    document.querySelector("#self-care-time").textContent = current[1] + "hrs";
  });
}

function textChange(buttonValue) {
  if (buttonValue == 1) {
    document.querySelectorAll(".previous-time-text").forEach((element) => {
      element.textContent = "Yesterday - ";
    });
  } else if (buttonValue == 2) {
    document.querySelectorAll(".previous-time-text").forEach((element) => {
      element.textContent = "Last Week - ";
    });
  } else if (buttonValue == 3)
    document.querySelectorAll(".previous-time-text").forEach((element) => {
      element.textContent = "Last Month - ";
    });
}

function callDaily(buttonValue = 1) {
  workContent(variable(0, buttonValue));
  playContent(variable(1, buttonValue));
  study(variable(2, buttonValue));
  exercise(variable(3, buttonValue));
  social(variable(4, buttonValue));
  selfCare(variable(5, buttonValue));
  textChange(buttonValue);
}

function callWeekly(buttonValue = 2) {
  workContent(variable(0, buttonValue));
  playContent(variable(1, buttonValue));
  study(variable(2, buttonValue));
  exercise(variable(3, buttonValue));
  social(variable(4, buttonValue));
  selfCare(variable(5, buttonValue));
  textChange(buttonValue);
}

function callMonthly(buttonValue = 3) {
  workContent(variable(0, buttonValue));
  playContent(variable(1, buttonValue));
  study(variable(2, buttonValue));
  exercise(variable(3, buttonValue));
  social(variable(4, buttonValue));
  selfCare(variable(5, buttonValue));
  textChange(buttonValue);
}
