'use strict';
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks() {

  /* usuń zawartość titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  const articles = document.querySelectorAll(optArticleSelector);
  let html = '';

  /* dla każdego artykułu */
  for (let article of articles) {
    /* pobierz ID artykułu */
    const articleId = article.getAttribute('id');
    /* znajdź element tytułowy */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* stwórz HTML linku */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* wstaw link do titleList */
    html = html + linkHTML;
  }

  console.log('HTML:', html); // Dodano console.log, aby wyświetlić zawartość zmiennej html
  titleList.innerHTML = html;
}

generateTitleLinks();

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] usuń klasę 'active' ze wszystkich linków */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [DONE] dodaj klasę 'active' do klikniętego linku */
  clickedElement.classList.add('active');

  /* [DONE] usuń klasę 'active' ze wszystkich artykułów */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] pobierz atrybut 'href' z klikniętego linku */
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* [DONE] znajdź odpowiedni artykuł na podstawie selektora (wartość atrybutu 'href') */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* [DONE] dodaj klasę 'active' do odpowiedniego artykułu */
  targetArticle.classList.add('active');
};

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}

console.log('links:', links); // Przeniesiono poza pętlę, aby logowało się tylko raz

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll('.post');
  /* START LOOP: for every article: */

    /* find tags wrapper */

    /* make html variable with empty string */

    /* get tags from data-tags attribute */

    /* split tags into array */

    /* START LOOP: for each tag */

      /* generate HTML of the link */

      /* add generated code to html variable */

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();