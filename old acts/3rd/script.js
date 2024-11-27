function createPost() {
    const postInput = document.getElementById('postInput');
    const postsContainer = document.getElementById('posts');
  
    if (postInput.value.trim() === '') {
      alert('Post cannot be empty!');
      return;
    }
  
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
  
    const postHeader = document.createElement('h3');
    postHeader.textContent = 'Lovely0833'; // Replace with dynamic user name if needed
  
    const postContent = document.createElement('p');
    postContent.textContent = postInput.value;
  
    postDiv.appendChild(postHeader);
    postDiv.appendChild(postContent);
    postsContainer.prepend(postDiv);
  
    postInput.value = '';
  }
  
  function viewProfile() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('profileSection').classList.remove('hidden');
  }
  
  function backToMain() {
    document.querySelector('.container').classList.remove('hidden');
    document.getElementById('profileSection').classList.add('hidden');
  }
  