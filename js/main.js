const btnSubmit = document.querySelector(".submit-btn");
const form = document.querySelector(".form");
const fieldsData = form.fieldsData;
let titleInp = document.querySelector(".title");
let priceInp = document.querySelector(".price");
let idInp = document.querySelector(".id");
const selector = document.querySelector(".selector");
const deleteCheckbox = document.querySelector(".delete-checkbox");

async function postData(data = {}) {
  let response = await fetch("  http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let inf = await response.json();
  let json = await inf;
}

btnSubmit.onclick = (e) => {
  e.preventDefault();

  if (idInp.value != "") {
    if (deleteCheckbox.checked) {
      deleteData(idInp.value);
    } else {
      editData(idInp.value, {
        title: `${titleInp.value}`,
        price: `${priceInp.value}`,
      });
    }
  } else {
    postData({ title: `${titleInp.value}`, price: `${priceInp.value}` });
  }

  selector.value = "9999";
  titleInp.value = "";
  priceInp.value = "";
  idInp.value = "";
};

