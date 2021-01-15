//create map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15); // important to add leaflet library

// create and add tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat; // to send lat and lng values to backend
  document.querySelector("[name=lng]").value = lng;
  // remove icon marker
  marker && map.removeLayer(marker); // if marker = true, remove layer

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo field
function addPhotoField() {
  // get photo container id=images
  const container = document.querySelector("#images");

  // get .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload"); // gets all

  // clone last added image
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verify if field is empty, if empty don´t add to images
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return; // return empty
  }

  // clear field befor add to image container
  input.value = "";

  // add clone to image container id-images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer.length < 2) {
    // clear field value
    span.parentNode.children[0].value = "";
    return;
  }

  // delete field
  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
  // remove class .active
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  // put class .active
  const button = event.currentTarget;
  button.classList.add("active");

  // update hidden input with correct value
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

function validade(event) {
  //validadr se lat e lnh estão preenchidos
  const needsLatAndLng = false;
  if (needsLatAndLng) {
    event.preventDefault();
    alert("Selecione um ponto no mapa!");
  }
}
