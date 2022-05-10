const templateScreen = `
  <div class="chat">
  
    <div class="chat__friends">
    
      <a href="/profile" class="profile-link">
        <span>Profile</span>
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9L5 5L1 1" stroke="#999999"/>
        </svg>
      </a>
      
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
    </div>
    
  </div>
`;

export default templateScreen;
