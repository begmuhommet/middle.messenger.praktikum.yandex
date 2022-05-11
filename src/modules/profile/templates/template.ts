import { Routes } from "../../../routes";

const template = `
  <div class="profile">
  
  <div class="back-icon__wrapper">
    <a class="back-icon" href="${Routes.Chat}">
      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="13" y="6.80005" width="11" height="1.6" transform="rotate(-180 13 6.80005)" fill="white"/>
        <path d="M6 11L2 6L6 1" stroke="white" stroke-width="1.6"/>
      </svg>
    </a>
  </div>
  
  <div class="profile__content">
    <div class="profile__avatar">
      <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="65" cy="65" r="65" fill="#EFEFEF"/>
      </svg>
    </div>
    
    <div class="profile__settings">
      <div class="profile__settings-item">
        <p class="setting__name">Email</p>
        <p class="setting__value">bega@gmail.com</p>
      </div>
    </div>
    
    <div class="save-btn__wrapper">
      {{{ button }}}
    </div>
  </div>
  
  
  
  </div>
`;

export default template;
