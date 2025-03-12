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

function generateTags() {
  /* znajdź wszystkie artykuły */
  const articles = document.querySelectorAll(optArticleSelector);

  /* dla każdego artykułu */
  for (let article of articles) {
    /* znajdź kontener tagów */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    
    /* stwórz zmienną html z pustym stringiem */
    let html = '';
    
    /* pobierz tagi z atrybutu data-tags */
    const articleTags = article.getAttribute('data-tags');
    
    /* podziel tagi na tablicę */
    const tagsArray = articleTags.split(' ');

    /* dla każdego tagu */
    for (let tag of tagsArray) {
      /* stwórz HTML dla linku tagu */
      const linkHTML = '<li><a href="#">' + tag + '</a></li>';
      
      /* dodaj wygenerowany HTML do zmiennej html */
      html += linkHTML;
    }

    /* wstaw wygenerowane tagi do kontenera */
    tagsWrapper.innerHTML = html;
  }
}

generateTags();