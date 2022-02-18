window.onload = () => {
  const btn = document.getElementById("inputGroup-sizing-sm");
  btn.addEventListener("click", (event) => {
    let text = document.getElementById("text").value;
    if (text === "") {
      return alert("plz write some text ");
    } else {
      let text = document.getElementById("text").value;
      // creating div
      const divlis = document.createElement("div");
      divlis.classList.add("todoP");
      // creating li
      const li = document.createElement("li");
      li.innerText = text;
      divlis.appendChild(li);
      // creating button
      const btn = document.createElement("i");
      btn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
      btn.classList.add("trash-btn");
      divlis.appendChild(btn);
      document.getElementById("form").appendChild(divlis);
      document.getElementById("text").value = "";
    }
  });
};
