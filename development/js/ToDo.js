import React, { useState } from "react";

const ToDo = () => {
  //inicjalizacja tablicy dla mapy
  const fromLocalStorage = JSON.parse(localStorage.getItem("toDoList"));
  const [toDoLists, setToDoList] = useState(fromLocalStorage);
  // pośrednie przechowanie aktualizowanego statu wyżej
  const [task, setTask] = useState();
  const hClickAdd = () => {
    if (task.length < 1) {
      alert("Nic nie wpisałeś");
      return;
    } else if (task === " ") {
      alert("Wpisz coś więcej :)");
      return;
    }
    //pobranie danych z value i przekazanie do state z state task
    setToDoList(prevState => {
      //przypisanie taska do localStorage
      const newToDoList = [...prevState, task];
      localStorage.setItem("toDoList", JSON.stringify(newToDoList));

      return newToDoList;
    });
    setTask("");
  };
  // 0.2 pobranie parametru index z mapy li
  const hClickRemove = index => {
    // 0.3 przejscie po poprzednim stanie, dodanie drugiej funkcji przyjmującej parametry z map
    setToDoList(prevState => {
      const newToDoList = prevState.filter((el, idx) => idx !== index);
      //nadpisanie taska do localStorage po aktualizacji

      localStorage.setItem("toDoList", JSON.stringify(newToDoList));
      return newToDoList;
    });
  };
  //zapobieganie przeładowaniu
  const hSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className={"ToDo_content"}>
      <div className={"ToDo_lists"}>
        <ul className={"List_elements"}>
          {toDoLists.map((toDo, index) => (
            <li key={index} className={"ToDo_items"}>
              {/* 0.1 przekazanie funkcji kiknięcia indexu elementu */}
              <button onClick={() => hClickRemove(index)}> X </button>
              {toDo}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={hSubmit}>
        <input
          type="text"
          placeholder="Masz coś do zrobienia?"
          // wyświetlenie z danych ze state
          value={task}
          //wysłanie danych do state
          onChange={event => setTask(event.target.value)}
        />
        <button onClick={hClickAdd} className={"add_btn"} type="submit">
          Dodaj
        </button>
      </form>
    </div>
  );
};

export default ToDo;
