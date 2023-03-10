const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://dinoxp.com/wp-content/uploads/2020/03/dinort.png",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://creative-beast.com/wp-content/uploads/2022/04/T.-rex-greyb.jpeg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://www.bu.edu/files/2018/06/t-rex-DestinationDino1.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://i.ytimg.com/vi/51oNcSn6ZxI/maxresdefault.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven???t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/06/cat-217679.jpg?h=c4ed616d&itok=3qHaqQ56"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.gamespot.com/a/uploads/original/1745/17457013/4002791-giga.png"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://www.sciencenews.org/wp-content/uploads/2022/04/042822_AG_dog-breeds_feats.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://images.everydayhealth.com/images/pet-health/cs-pet-health-cat-exercises-1440x810.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/624184-kickstarter3-a54a240b5a8545ab69ae01f5b2446d04.png"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://nationalzoo.si.edu/sites/default/files/animals/20060920-149mm.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn???t get weirded out by the word ???moist.???",
      type: "dino",
      imageUrl: "https://people.com/thmb/5KDao-j60iIjmK-Ds1zgnjUuuas=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/t-rex-2000-fa6c6f21c38249b4995cbf21cb5fe5ed.jpg"
    }
  ];

  //PART 3 
//Function to select a div and show items in (Select an area, send this) //
 const sendToDom=(divId, htmlToSend)=>{
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML=htmlToSend
 }


// (Ignore)const targetingApp = document.querySelector(".petAdopt");

//Function to creat a card for each pet, assing them to domString variable.
// Send to dom function would send domString cards to view in a HTML id app
const cardsOnDom=(array)=>{
let domString ="";
//PART 2Iterations 
for(const pet of array){
  domString += `<div class="card" style="width: 18rem;">
  <div class="img"> 
  <img src="${pet.imageUrl}" class="card-img-top" alt="...">
  </div>
  <div class="card-body">
    <h5 class="card-title">${pet.name}</h5>
    <p class="card-text">${pet.specialSkill}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Color: ${pet.color}</li>
    <li class="list-group-item">Type: ${pet.type}</li>
    </ul>
    <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
</div>`;
}
  sendToDom("#app",domString)
}

cardsOnDom(pets)

 //function to filter
 const filter = (array, typeString)=>{
  const typeArray = []
 for (const pet of array) {
  //If the pet typ match the specified type, then add it in the new array
  if (pet.type === typeString) {
    typeArray.push(pet);
  }
}
return typeArray;
};



//Create a variable to target each button in HTML
const showCatsbtn = document.querySelector("#showCats");
const showDogsbtn = document.querySelector("#showDogs");
const showDinosbtn = document.querySelector("#showDinos")




//Set the buttons to the filtered value
showCatsbtn.addEventListener("click", ()=>{ 
  const catsType= filter(pets, "cat");
//After you filter, show the filtered cards on the DOM
  cardsOnDom(catsType);
})

showDogsbtn.addEventListener("click", ()=>{ 
  const dogsType= filter(pets, "dog");
//After you filter, show the filtered cards on the DOM
  cardsOnDom(dogsType);
})

showDinosbtn.addEventListener("click", ()=>{ 
  const dinosType= filter(pets, "dino");
  //After you filter, show the filtered cards on the DOM
  cardsOnDom(dinosType);
})

//Get all the values from the form
const createPet =(event)=>{
  event.preventDefault();
//grab the value from each field
  const name=document.querySelector("#name")
  const color = document.querySelector("#color");
  const specialSkill = document.querySelector("#specialSkill");
  const type = document.querySelector("#type");
  const image = document.querySelector("#image");
//Put them all in an array
  const newPet={
    name:name.value,
  color:color.value,
  specialSkill: specialSkill.value,
  type:type.value,
  image:image.value,
};
//add it to the the main array
pets.push(newPet);
//show it on the DOM
cardsOnDom(pets);
}
//When the button is click, pass the info to the function
const submitButton = document.querySelector("#form-submit");
submitButton.addEventListener("click", createPet);



//Delete button- Target the app div
const appDiv=document.querySelector("#app");
//Capture the clicks
appDiv.addEventListener("click", (event)=>{
  if (event.target.id.includes("delete")){
    const[nothing, petId]= event.target.id.split("--");
    const indexOfPets= pets.findIndex((obj)=> obj.id === Number(petId));
    pets.splice(indexOfPets, 1);
  }
  cardsOnDom(pets);
})