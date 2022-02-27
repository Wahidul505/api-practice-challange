const getAllPhotos = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const data = await res.json();
  displayAllPhotos(data.slice(0, 40));
}
document.getElementById('spinner-container').style.display = 'none';
getAllPhotos();
const displayAllPhotos = photos => {
  const displayAll = document.getElementById('display-all');
  photos.forEach(photo => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div onclick="getPhoto(${photo.id})">
     <img src="${photo.url}"/>
    </div>
    `
    displayAll.appendChild(div);
  })
}
const getPhoto = async id => {
  document.getElementById('spinner-container').style.display = 'block';
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhoto(data);
}
const displayPhoto = photo => {
  const displaySingle = document.getElementById('display-single');
  displaySingle.innerHTML = `
  <div>
  <a target="_blank" href="${photo.thumbnailUrl}">
    <img src="${photo.url}"/>
    </a>
    <p>${photo.title}</p>
    </div>
  `
  document.getElementById('spinner-container').style.display = 'none';
}