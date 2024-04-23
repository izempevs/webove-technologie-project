//contact us form checker:
document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('submitBtn');
  const termsCheckbox = document.getElementById('termsCheckbox');
  const emailInput = document.getElementById('emailInput');
  const nameInput = document.getElementById('nameInput');
  const form = document.getElementById('contactForm');
  const errorMessage = document.createElement('div');
  errorMessage.textContent = 'Všetky povinné polia musia byť vyplnené';
  errorMessage.style.color = 'red';
  errorMessage.style.display = 'none';
  form.appendChild(errorMessage);

  submitBtn.addEventListener('click', function(event) {
      if (!termsCheckbox.checked || !emailInput.value || !nameInput.value) {
          event.preventDefault();
          errorMessage.style.display = 'block';
      }
  });

  termsCheckbox.addEventListener('change', function() {
      errorMessage.style.display = 'none';
  });

  emailInput.addEventListener('input', function() {
      errorMessage.style.display = 'none';
  });

  nameInput.addEventListener('input', function() {
      errorMessage.style.display = 'none';
  });
});

//galery:
$(document).ready(function () {
  $(".gallery-item").fancybox({
      loop: true
  });
});

//JSON and AJAX
function loadAlbums() {
    var xhttp = new XMLHttpRequest();
    console.log("функция началась!");
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    
    };
    xhttp.open("GET", "albums.json", true);
    xhttp.send();
}


function myFunction(mytext) {
var myJson = JSON.parse(mytext);

const review1Link = myJson.albuminfo1.review.reviewLink;
const album1img = myJson.albuminfo1.album.img;
const album1title = myJson.albuminfo1.album.title;
const album1autor = myJson.albuminfo1.album.autor;
const reviewer1link = myJson.albuminfo1.reviewers.reviewerLink;
const reviewer1name = myJson.albuminfo1.reviewers.reviewer;
const category1link = myJson.albuminfo1.categories.categoryLink;
const category1title = myJson.albuminfo1.categories.category;

const review2Link = myJson.albuminfo2.review.reviewLink;
const album2img = myJson.albuminfo2.album.img;
const album2title = myJson.albuminfo2.album.title;
const album2autor = myJson.albuminfo2.album.autor;
const reviewer2link = myJson.albuminfo2.reviewers.reviewerLink;
const reviewer2name = myJson.albuminfo2.reviewers.reviewer;
const category2link = myJson.albuminfo2.categories.categoryLink;
const category2title = myJson.albuminfo2.categories.category;

loadAlbumsButton.style.display = "none";

const row = document.createElement("div");
row.className = 'album row mt-4 mb-4';
albumContainer.appendChild(row);

const col1 = document.createElement("div");
col1.className = 'col-2 pt-4 pb-4';
row.appendChild(col1);

const col2 = document.createElement("div");
col2.className = 'col-4 pt-4 pb-4';
row.appendChild(col2);

const col3 = document.createElement("div");
col3.className = 'col-4 pt-4 pb-4';
row.appendChild(col3);

const col4 = document.createElement("div");
col4.className = 'col-2 pt-4 pb-4';
row.appendChild(col4);


//Gemini album:

const block1 = document.createElement("div");
block1.className = 'block';
col2.appendChild(block1);

const link1 = document.createElement("a");
link1.setAttribute('href', review1Link);
block1.appendChild(link1);

const img1 = document.createElement("img");
img1.className = 'img-fluid';
img1.setAttribute('src',  album1img);
img1.setAttribute('alt', 'Rob Cope Gemini');
link1.appendChild(img1);

const link1_2 = document.createElement("a");
link1_2.setAttribute('href', review1Link);
link1_2.className = 'album-link';
block1.appendChild(link1_2);

const autor1 = document.createElement("div");
autor1.className = 'autor';
link1_2.appendChild(autor1);

const autor1name = document.createTextNode(album1autor);
autor1.appendChild(autor1name);

const title1 = document.createElement("div");
title1.className = 'album';
link1_2.appendChild(title1);

const album1name = document.createTextNode(album1title);
title1.appendChild(album1name);

const txt1center = document.createElement("div");
txt1center.className = 'text-center';
block1.appendChild(txt1center);

const reviewer1 =  document.createElement("a");
reviewer1.setAttribute('href', reviewer1link);
reviewer1.className = 'reviewer-link';
txt1center.appendChild(reviewer1);

const rev1name = document.createTextNode(reviewer1name);
reviewer1.appendChild(rev1name);

const slash1 = document.createTextNode(' / ');
txt1center.appendChild(slash1);

const category1 =  document.createElement("a");
category1.setAttribute('href', category1link);
category1.className = 'category-link';
txt1center.appendChild(category1);

const cat1title = document.createTextNode(category1title);
category1.appendChild(cat1title);

//Time Out album:

const block2 = document.createElement("div");
block2.className = 'block';
col3.appendChild(block2);

const link2 = document.createElement("a");
link2.setAttribute('href', review2Link);
block2.appendChild(link2);

const img2 = document.createElement("img");
img2.className = 'img-fluid';
img2.setAttribute('src',  album2img);
img2.setAttribute('alt', 'The Dave Brubeck Quartet Time Out');
link2.appendChild(img2);

const link2_2 = document.createElement("a");
link2_2.setAttribute('href', review2Link);
link2_2.className = 'album-link';
block2.appendChild(link2_2);

const autor2 = document.createElement("div");
autor1.className = 'autor';
link2_2.appendChild(autor2);

const autor2name = document.createTextNode(album2autor);
autor2.appendChild(autor2name);

const title2 = document.createElement("div");
title2.className = 'album';
link2_2.appendChild(title2);

const album2name = document.createTextNode(album2title);
title2.appendChild(album2name);

const txt2center = document.createElement("div");
txt2center.className = 'text-center';
block2.appendChild(txt2center);

const reviewer2=  document.createElement("a");
reviewer2.setAttribute('href', reviewer2link);
reviewer2.className = 'reviewer-link';
txt2center.appendChild(reviewer2);

const rev2name = document.createTextNode(reviewer2name);
reviewer2.appendChild(rev2name);

const slash2 = document.createTextNode(' / ');
txt2center.appendChild(slash2);

const category2 =  document.createElement("a");
category2.setAttribute('href', category2link);
category2.className = 'category-link';
txt2center.appendChild(category2);

const cat2title = document.createTextNode(category2title);
category2.appendChild(cat2title);
} 