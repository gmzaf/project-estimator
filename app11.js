// Print Estimate class: represents a print with size, paper, qty, etc..

class Print {
  constructor(height, width, measure, substrate) {
    this.height = height;
    this.width = width;
    this.measure = measure;
    this.substrate = substrate;
  }

  inchArea() {
    if (this.measure === "in") {
      return Math.ceil(this.height) * Math.ceil(this.width)
    } else {
      return Math.ceil(this.height / 25.4) * Math.ceil(this.width / 25.4)
    }
  }

  cpi() {

    const costGroup01 = ["Archival Textured", "Archival Glossy", "Archival Canvas"];
    const costGroup02 = ["Archival Matte"];
    const costGroup03 = ["Archival Matte Light", "Archival Textured Light"];
    const costGroup04 = ["Fine Art Matte Fiber", " Fine Art Metallic", "Fine Art Canvas"];
    const costGroup05 = ["Fine Art Matte Coated", "Fine Art Luster", "Fine Art Glossy"];
    let cpi;

    if (costGroup01.includes(this.substrate)) {
      if (this.inchArea() <= 100) { cpi = 1.8 }
      else if (100 < this.inchArea() && this.inchArea() <= 150) { cpi = 1.7 }
      else if (150 < this.inchArea() && this.inchArea() <= 200) { cpi = 1.65 }
      else if (200 < this.inchArea() && this.inchArea() <= 250) { cpi = 1.6 }
      else if (250 < this.inchArea() && this.inchArea() <= 300) { cpi = 1.55 }
      else if (300 < this.inchArea() && this.inchArea() <= 400) { cpi = 1.5 }
      else if (400 < this.inchArea() && this.inchArea() <= 1000) { cpi = 1.45 }
      else if (1000 < this.inchArea() && this.inchArea() <= 1500) { cpi = 1.5 }
      else if (1500 < this.inchArea() && this.inchArea() <= 2000) { cpi = 1.55 }
      else if (2000 < this.inchArea() && this.inchArea() <= 2500) { cpi = 1.6 }
      else if (2500 < this.inchArea()) { cpi = 1.65 }
    } else if (costGroup02.includes(this.substrate)) {
      if (this.inchArea() <= 100) { cpi = 1.6 }
      else if (100 < this.inchArea() && this.inchArea() <= 150) { cpi = 1.5 }
      else if (150 < this.inchArea() && this.inchArea() <= 200) { cpi = 1.4 }
      else if (200 < this.inchArea() && this.inchArea() <= 250) { cpi = 1.35 }
      else if (250 < this.inchArea() && this.inchArea() <= 300) { cpi = 1.3 }
      else if (300 < this.inchArea() && this.inchArea() <= 400) { cpi = 1.25 }
      else if (400 < this.inchArea() && this.inchArea() <= 1000) { cpi = 1.2 }
      else if (1000 < this.inchArea() && this.inchArea() <= 1500) { cpi = 1.25 }
      else if (1500 < this.inchArea() && this.inchArea() <= 2000) { cpi = 1.3 }
      else if (2000 < this.inchArea() && this.inchArea() <= 2500) { cpi = 1.35 }
      else if (2500 < this.inchArea()) { cpi = 1.15 }
    } else if (costGroup03.includes(this.substrate)) {
      if (this.inchArea() <= 100) { cpi = 1.35 }
      else if (100 < this.inchArea() && this.inchArea() <= 150) { cpi = 1.25 }
      else if (150 < this.inchArea() && this.inchArea() <= 200) { cpi = 1.15 }
      else if (200 < this.inchArea() && this.inchArea() <= 250) { cpi = 1.1 }
      else if (250 < this.inchArea() && this.inchArea() <= 300) { cpi = 1.05 }
      else if (300 < this.inchArea() && this.inchArea() <= 400) { cpi = 1 }
      else if (400 < this.inchArea() && this.inchArea() <= 1000) { cpi = 0.95 }
      else if (1000 < this.inchArea() && this.inchArea() <= 1500) { cpi = 1 }
      else if (1500 < this.inchArea() && this.inchArea() <= 2000) { cpi = 1.05 }
      else if (2000 < this.inchArea() && this.inchArea() <= 2500) { cpi = 1.1 }
      else if (2500 < this.inchArea()) { cpi = 1.15 }
    } else if (costGroup04.includes(this.substrate)) {
      if (this.inchArea() <= 100) { cpi = 1.2 }
      else if (100 < this.inchArea() && this.inchArea() <= 150) { cpi = 1.1 }
      else if (150 < this.inchArea() && this.inchArea() <= 200) { cpi = 1 }
      else if (200 < this.inchArea() && this.inchArea() <= 250) { cpi = 0.95 }
      else if (250 < this.inchArea() && this.inchArea() <= 300) { cpi = 0.9 }
      else if (300 < this.inchArea() && this.inchArea() <= 400) { cpi = 0.85 }
      else if (400 < this.inchArea() && this.inchArea() <= 1000) { cpi = 0.8 }
      else if (1000 < this.inchArea() && this.inchArea() <= 1500) { cpi = 0.85 }
      else if (1500 < this.inchArea() && this.inchArea() <= 2000) { cpi = 0.9 }
      else if (2000 < this.inchArea() && this.inchArea() <= 2500) { cpi = 0.95 }
      else if (2500 < this.inchArea()) { cpi = 1 }
    } else if (costGroup05.includes(this.substrate)) {
      if (this.inchArea() <= 100) { cpi = 1.05 }
      else if (100 < this.inchArea() && this.inchArea() <= 150) { cpi = 0.95 }
      else if (150 < this.inchArea() && this.inchArea() <= 200) { cpi = 0.85 }
      else if (200 < this.inchArea() && this.inchArea() <= 250) { cpi = 0.8 }
      else if (250 < this.inchArea() && this.inchArea() <= 300) { cpi = 0.75 }
      else if (300 < this.inchArea() && this.inchArea() <= 400) { cpi = 0.7 }
      else if (400 < this.inchArea() && this.inchArea() <= 1000) { cpi = 0.65 }
      else if (1000 < this.inchArea() && this.inchArea() <= 1500) { cpi = 0.7 }
      else if (1500 < this.inchArea() && this.inchArea() <= 2000) { cpi = 0.75 }
      else if (2000 < this.inchArea() && this.inchArea() <= 2500) { cpi = 0.8 }
      else if (2500 < this.inchArea()) { cpi = 0.85 }
    }
    return cpi;
  }

  price() {
    if (this.inchArea() < 80) {
      return Math.ceil(80 * this.cpi())
    }
    else { return Math.ceil(this.inchArea() * this.cpi()) }
  }

}

function currencyFormat(num) {
  return 'HK$ ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

class UI {

  static addPrintToList(print) {
    const list = document.querySelector("#list");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${print.height}x${print.width} ${print.measure}</td>
      <td>${print.substrate}</td>
      <td>${print.price()}</td>
      <td><input type="number" class="qty" min="1" max="1000" step="1" value="1" onpaste="return false;" ondrop="return false;" autocomplete="off" pattern="/d+"></td>
      <td class="subtotal">${print.price()}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }

  static deletePrint(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static displayAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector(".form");
    container.insertBefore(div, form.nextSibling);
    // Disapear in 3 seconds
    setTimeout(() => {
      document.querySelector(".alert").remove()
    }, 5000);

  }

  static clearFields() {
    document.querySelector("#height").value = "";
    document.querySelector("#width").value = "";
    document.querySelector("#substrate").value = "not-valid";
  }

  static calcSubtotals() {
    const qtys = [...document.getElementsByClassName('qty')].forEach((item) => {
      item.addEventListener("input", e => {
        let linePrice = item.parentElement.previousElementSibling.innerText;
        let lineSubtotal = item.parentElement.nextElementSibling;
        lineSubtotal.innerText = linePrice * e.target.value;
        this.calcTotal(); // keep this method here to live update when qtys are changed.
      })
    })

  }

  static calcTotal() {
    const totalMsg = document.querySelector("#total");
    const subtotals = [...document.getElementsByClassName("subtotal")]; // creates an array with the subtotals
    let total = 0;
    subtotals.forEach((sub) => {
      total += (Number(sub.innerText))
    })
    totalMsg.innerHTML = `<h5>Grand Total: <strong>${currencyFormat(total)}</strong></h5>`
  }
}

// Event to add an item to the list
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const measure = document.querySelector('input[type="radio"]:checked').value;
  const height = document.querySelector("#height").value;
  const width = document.querySelector("#width").value;
  const substrate = document.querySelector("#substrate").value;

  // Validate
  const paperMax36 = ["Archival Matte Light"];
  let inchHeight = height;
  let inchWidth = width;
  if (measure === "mm") {
    inchHeight = (height / 25.4).toFixed(2);
    inchWidth = (width / 25.4).toFixed(2);
  }
  if (height === "" || width === "" || substrate === "not-valid") {
    UI.displayAlert("Please enter both dimensions and select substrate", "alert-danger")
  } else if ((paperMax36.includes(substrate) && Math.min(inchHeight, inchWidth) > 35.5)) {
    UI.displayAlert(`Your dimension ${Math.min(height, width)}${measure} exceeds the printable area of this paper (35.5").`, "alert-danger")
  } else if (Math.min(inchHeight, inchWidth) > 43.5) {
    UI.displayAlert(`Your dimension ${Math.min(height, width)}${measure} exceeds the printable area of this paper (43.5").`, "alert-danger")
  } else if (Math.max(inchHeight, inchWidth) > 88) {
    UI.displayAlert(`Large prints require a custom quotation. Please contact us for details.`, "alert-danger")
  } else {
    // Instatiate a Print
    const artPrint = new Print(height, width, measure, substrate)

    // Add item to UI
    UI.addPrintToList(artPrint);
    console.log(`${artPrint.inchArea()} sq.in. ${substrate} at ${artPrint.cpi()}`)
    UI.calcTotal(); // already included in calcSubtotals below, but we need this for the initial display       
    UI.calcSubtotals(); // this includes "UI.calcTotal()", to update the value 
    //UI.displayAlert("Item added", "alert-success") 
    UI.clearFields();
  }
});

// Event to remove an item from the list
document.querySelector("#list").addEventListener("click", (e) => {
  UI.deletePrint(e.target);
  UI.calcTotal();
  //UI.displayAlert("Item removed", "alert-success");
})

const radios = document.querySelectorAll('input[type=radio]');
radios.forEach(radio => radio.addEventListener('change', () => {
  document.querySelector(`#height`).placeholder = radio.value;
  document.querySelector(`#width`).placeholder = radio.value;
}));
