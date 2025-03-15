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

// Profile elements
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//Form elements
const editProfileModal = document.querySelector('#edit-profile-modal');
const editFormElement = editProfileModal.querySelector('.modal__form');
const profileCloseButton = editProfileModal.querySelector('.modal__close-btn');
const editModalNameInput = editProfileModal.querySelector('#profile-name-input');
const editModalDescriptionInput = editProfileModal.querySelector('#profile-description-input');

const cardModal = document.querySelector('#add-card-modal');
const cardForm = cardModal.querySelector('.modal__form');
const cardModalCloseBtn = cardModal.querySelector('.modal__close-btn');
const cardNameInput = cardModal.querySelector('#add-card-name-input');
const cardLinkInput = cardModal.querySelector('#add-card-link-input');

const previewModal = document.querySelector('#preview-modal');
const previewImageEl = previewModal.querySelector('.modal__image');
const previewModalCaptionEl = previewModal.querySelector('.modal__caption');

const cardTemplate = document.querySelector('#card-template');
const cardsList = document.querySelector('.cards__list');

function getCardElement(data){
  const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);
  const cardNameElement = cardElement.querySelector('.card__title');
  const cardImageElement = cardElement.querySelector('.card__image');
  const cardLikeBtn = cardElement.querySelector('.card__like-button');
  const cardDeleteBtn = cardElement.querySelector('.card__delete-btn');

  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;

  cardLikeBtn.addEventListener('click',()=>{
    cardLikeBtn.classList.toggle('card__like-button_liked');
  });

  cardImageElement.addEventListener('click',()=>{
    openModal(previewModal);
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewImageEl.textContent = data.name;
  });

  cardDeleteBtn.addEventListener('click',()=>{
    cardElement.remove();
  });

  return cardElement;
}


function openModal(modal){
  modal.classList.add('modal_opened');
}

function closeModal(modal){
  modal.classList.remove('modal_opened');
}

function handleProfileSubmit(evt){
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal(editProfileModal);
}

function handleCardSubmit(evt){
  evt.preventDefault();
  const inputValues = {name: cardNameInput.value, link:cardLinkInput.value};
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  closeModal(cardModal);
}

profileEditButton.addEventListener('click', () =>{
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});

profileCloseButton.addEventListener('click', ()=>{
   closeModal(editProfileModal);
  });

  profileAddButton.addEventListener('click', () =>{
    openModal(cardModal);
  });

  cardModalCloseBtn.addEventListener('click', ()=>{
     closeModal(cardModal);
    });

editFormElement.addEventListener('submit', handleProfileSubmit);
cardForm.addEventListener('submit', handleCardSubmit);

initialCards.forEach(function(card){
  const cardElement = getCardElement(card);
  cardsList.append(cardElement);
})
