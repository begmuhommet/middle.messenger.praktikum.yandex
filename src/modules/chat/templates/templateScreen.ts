const templateScreen = `
  <div class="chat">
  
    <div class="chat__friends">
    
    <div class="chat__navigation-links">
    
      <a href="/main" class="main-link">Main</a>
      
      <a href="/profile" class="profile-link">
        <span>Profile</span>
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9L5 5L1 1" stroke="#999999"/>
        </svg>
      </a>
      
    </div>
    
      
    <div class="search">
      <div class="search__icon">
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59239 8.41382C6.16047 9.84574 3.83886 9.84574 2.40694 8.41382C0.975017 6.9819 0.975017 4.6603 2.40694 3.22837C3.83886 1.79645 6.16047 1.79645 7.59239 3.22837C9.02431 4.6603 9.02431 6.9819 7.59239 8.41382ZM8.03277 9.79678C6.07255 11.2962 3.25696 11.1495 1.46413 9.35663C-0.488491 7.40401 -0.488491 4.23819 1.46413 2.28556C3.41675 0.332943 6.58258 0.332943 8.5352 2.28556C10.3279 4.07831 10.4747 6.89373 8.97555 8.85394L12.5423 12.4206L11.5994 13.3635L8.03277 9.79678Z" fill="#999999"/>
        </svg>
      </div>
      <input type="text" placeholder="Search">
    </div>
      
      {{{ friend }}}
    </div>
    
    <div class="chat__messages">
    
      <div class="messages__top-bar">
        <div class="top-bar__personal-info">
          <div class="avatar__wrapper">
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>
            </svg>
          </div>
          <h6 class="friend__name">Вадим</h6>
        </div>
        
        <button class="chat__messages-menu">
          <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
            <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
            <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
            </svg>
        </button>
      </div>

      <div class="messages__wrapper">
        <div class="messages-left">Friend</div>
        <div class="messages-right">Me</div>
      </div>    
      
      <div class="messages__bottom-bar">
        <div class="attach-icon">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18662 12.5L13.7628 4.92389L14.7056 5.8667L7.12943 13.4428L6.18662 12.5Z" fill="#3369F3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70067 15.014L16.2768 7.43781L17.2196 8.38062L9.64348 15.9568L8.70067 15.014Z" fill="#3369F3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0433 20.3567L21.6195 12.7806L22.5623 13.7234L14.9861 21.2995L14.0433 20.3567Z" fill="#3369F3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5574 22.8706L24.1335 15.2945L25.0763 16.2373L17.5002 23.8134L16.5574 22.8706Z" fill="#3369F3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5574 22.8709C13.9423 25.486 9.71181 25.4954 7.10831 22.8919C4.50482 20.2884 4.51424 16.0579 7.12936 13.4428L6.18655 12.5C3.0484 15.6381 3.0371 20.7148 6.16129 23.839C9.28549 26.9632 14.3621 26.9518 17.5003 23.8137L16.5574 22.8709Z" fill="#3369F3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6195 12.7806L22.5623 13.7234C25.003 11.2826 25.0118 7.3341 22.5819 4.90417C20.152 2.47424 16.2035 2.48304 13.7627 4.92381L14.7055 5.86662C16.6233 3.94887 19.7257 3.94196 21.6349 5.85119C23.5441 7.76042 23.5372 10.8628 21.6195 12.7806Z" fill="#3369F3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70092 15.0144C6.95751 16.7578 6.95123 19.5782 8.68689 21.3138C10.4226 23.0495 13.2429 23.0432 14.9863 21.2998L14.0435 20.357C12.8231 21.5774 10.8489 21.5818 9.63391 20.3668C8.41894 19.1518 8.42334 17.1776 9.64373 15.9572L8.70092 15.0144Z" fill="#3369F3"/>
          </svg>
        </div>
        
        <div class="message__input">
          <input type="text" placeholder="Message">
        </div>
        
        <div class="send-message__icon">
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="5.19995" width="11" height="1.6" fill="white"/>
            <path d="M7 1L11 6L7 11" stroke="white" stroke-width="1.6"/>
          </svg>
        </div>
      </div>
      
    </div>
    
  </div>
`;

export default templateScreen;
