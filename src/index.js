import React from "react";
import ReactDOM from "react-dom";
import Button from "./apps/button";

import "./styles.css";

async function getUsers() {
  //получ пользов
  let url =
    "https://randomuser.me/api/1.3/?results=10&inc=gender,name,location,email,dob,phone,picture";
  let response = await fetch(url);
  let json = await response.json();
  let results = json.results;
  return results;
}

function App() {
  //компоненты
  return (
    <div>
      <div id="info-title">Информация о 10 случайных пользователях</div>
      <Button label="Получить" onClick={() => getUsers()} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
