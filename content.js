
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'pasteEmoji') {
    const searchInput = document.querySelector('.CheckRun-search-input');

    const keyboardEventInit = {bubbles:false, cancelable:false, composed:false, key:'', code:'', location:0};
    searchInput.focus();
    searchInput.dispatchEvent(new KeyboardEvent("keydown", keyboardEventInit));
    searchInput.value = '❌';
    searchInput.dispatchEvent(new KeyboardEvent("keyup", keyboardEventInit));
    searchInput.dispatchEvent(new Event('input', {bubbles: true})); 
  }
});
