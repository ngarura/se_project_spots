const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
  },

  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
  },

  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
  },

  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"

  },

  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
  },

  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"

  }
]

const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const editProfileModal = document.querySelector('#edit-profile-modal');
const editFormElement = editProfileModal.querySelector('.modal__form');
const profileCloseButton = editProfileModal.querySelector('.modal__close-btn');
const editModalNameInput = editProfileModal.querySelector('#profile-name-input');
const editModalDescriptionInput = editProfileModal.querySelector('#profile-description-input');

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector('.cards__list');

function getCardElement(data){
  const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);
  const cardNameElement = cardElement.querySelector('.card__title');
  const cardImageElement = cardElement.querySelector('.card__image');

  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.alttext;

  return cardElement;
}


function openModal(){
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  editProfileModal.classList.add('modal__opened');
}

function closeModal(){
  editProfileModal.classList.remove('modal__opened');
}

function handleProfileSubmit(evt){
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal();
}

profileEditButton.addEventListener('click', openModal)
profileCloseButton.addEventListener('click', closeModal)
editFormElement.addEventListener('submit', handleProfileSubmit);

for (let i = 0; i < initialCards.length; i++){
  const cardElement = getCardElement(initialCards[i]);
  cardsList.append(cardElement);
}
