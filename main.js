const inpValue = document.getElementById("inpValue");
const addBtn = document.getElementById("addBtn");
const cbxInp = document.querySelector("#cbxInp");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  if (inpValue.value == "") {
    alert("Inpute deyer verin");
  } else {
    list.innerHTML += `
    <div id="list__card">
            <div class="list__card__left">
                <div class="checkbox-wrapper-45">
                    <input id="cbxInp" type="checkbox" data-action="check"/>
                    <label class="cbx" for="cbxInp">
                      <div class="flip">
                        <div class="front"></div>
                        <div class="back">
                          <svg width="16" height="14" viewBox="0 0 16 14">
                            <path d="M2 8.5L6 12.5L14 1.5"></path>
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>                   
                <p>${inpValue.value}</p>
            </div>
            <div class="list__card__right">
                <button id="deleteCard" data-action="delete">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </div>
    `;
    inpValue.value = "";   
  }
});

list.addEventListener("click", (e) => {
    if (e.target.dataset.action === "delete") {
        e.target.parentElement.parentElement.style.display = "none";
    }
});

list.addEventListener("click", (e) => {
    if (e.target.dataset.action === "check") {
        const paragraph = e.target.parentElement.nextElementSibling;
        console.log(paragraph); 
        paragraph.classList.toggle("inpCheckP"); 
    }
});



