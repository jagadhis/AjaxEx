let button = document.getElementById("click");

let fetchInformation = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users/1/todos", {
    method: "GET",
  });
  let data = await res.json();
  for (var i = 0; i < data.length; i++) {
    let container = document.createElement("div");
    container.classList.add("container");
    let idContainer = document.createElement("p");

    let UserIdContainer = document.createElement("p");

    let TitleContainer = document.createElement("p");

    let CompletionContainer = document.createElement("div");

    idContainer.innerText = data[i].id;
    UserIdContainer.innerText = data[i].userId;
    TitleContainer.innerText = data[i].title;
    CompletionContainer.innerText = data[i].completed;

    container.append(idContainer);
    container.append(UserIdContainer);
    container.append(TitleContainer);
    container.append(CompletionContainer);

    let parentContainer = document.getElementById("container");
    parentContainer.append(container);
  }
};

button.addEventListener("click", fetchInformation);
