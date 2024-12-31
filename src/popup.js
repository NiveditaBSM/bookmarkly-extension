document.getElementById('bookmark-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const url = document.getElementById('url').value;
  const author = document.getElementById('author').value;

  saveBookmark(title, url, author);

  document.getElementById('title').value = '';
  document.getElementById('url').value = '';
  document.getElementById('author').value = '';
})



const saveBookmark = (title, url) => {
  fetch ('http://localhost:3002/api/bookmarks', {
    method: 'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({title, url})
  })
  .then( response => response.json())
  .then( data => {
    displayBookmark(data);
  });
}

const displayBookmark = (data) => {
  const list = document.getElementById('bookmark-list');
  const item = document.createElement('div');
  item.textContent = `${data.title} - ${data.url}`;
  list.appendChild(item);
}
  