
let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let myJSON = {
  "title" : "K/DA is a virtual K-pop girl group consisting of four themed versions of League of Legends characters: Ahri, Akali, Evelynn and Kai'Sa.",
  "picture_url" : "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_28.jpg",
  "favorite_color" : "#eebbdf",
  "pets" : ["leader","founder","main vocalist"]
}

var randomIndex = Math.floor(Math.random() * myJSON["pets"].length);

printToPage( myJSON['title']);

function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let jsonDatabase = [
  {
    "title" : "Ahri",
    "picture_url" : "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_28.jpg",
    "favorite_color" : "#eebbdf",
    "pets" : ["leader","founder","main vocalist"]
  },
  {
    "title" : "Akali",
    "picture_url" : "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_32.jpg",
    "favorite_color" : "#828ee0",
    "pets" : ["main rapper"]
  },
  {
    "title" : "Evelynn",
    "picture_url" : "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_15.jpg",
    "favorite_color" : "#908ed6",
    "pets" : ["lead vocalist"]
  },
  {
    "title" : "Kai'Sa",
    "picture_url" : "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_26.jpg",
    "favorite_color" : "#b285ce",
    "pets" : ["main dancer","choreographer"]
  }
];

// createElementMessy(myJSON);

// createElementProper(jsonDatabase[0]);

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementMessy(incomingJSON) {

  /// Start our HTML chunk
  var incompleteHTML = "<div class=\"contentItem\" style=\"background-color: " + incomingJSON['favorite_color'] + "\"> <h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3><h4>Position:</h4><ul class=\"petList\">";

  /// Append Pets to the list
  for (var i = 0; i < incomingJSON['pets'].length; i++) {
    var petString = "<li>" + incomingJSON['pets'][i] + "</li>";
    incompleteHTML += petString;
  }

  /// Complete our HTML chunk
  incompleteHTML += "</ul></div>";
  contentGridElement.innerHTML = incompleteHTML;
  console.log(incompleteHTML);
}

function createElementProper(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Create & add LIST HEADLINE to the item
  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "Position:";
  newContentElement.appendChild(newContentSubhead);

  /// Create & add PET LIST to the item
  let newContentPetList = document.createElement("UL");
  newContentElement.appendChild(newContentPetList);

  /// Create & add all the pet LIST ITEMS to the PET LIST
  for (var i = 0; i < incomingJSON['pets'].length; i++) {
    var currentPetString = incomingJSON['pets'][i];
    var newPetItem = document.createElement("LI");
    newPetItem.innerText = currentPetString;
    newContentPetList.appendChild(newPetItem);
  }

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);

}
