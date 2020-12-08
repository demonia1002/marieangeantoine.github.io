(function() {
    const part1 = document.querySelector('.part1');
    const part2 = document.querySelector('.part2');
    const logo = document.querySelector('header img');
    const strong = document.querySelector('.logo>strong');
    const livraison = document.querySelector('.livraison');
    const scrollTop = document.querySelector('#scrollTop');
    const search = document.querySelector('#search');
    const iconSearch = document.querySelector('#iconSearch');
  
    /* navbar ------------------*/
  
    window.addEventListener('scroll', () => {
      if (scrollY > 90) {
        part1.classList.add('part1-active');
        logo.classList.add('headerImg-active');
        livraison.classList.add('livraison-active');
        part2.classList.add('part2-active');
        strong.classList.add('strong-active');
      } else {
        part1.classList.remove('part1-active');
        logo.classList.remove('headerImg-active');
        livraison.classList.remove('livraison-active');
        part2.classList.remove('part2-active');
        strong.classList.remove('strong-active');
      }
    });
  
    /* dropdown nav --------------------------*/
  
    document.querySelector('.nav-woman').addEventListener('mouseover', e => {
      document.querySelector('.menu-woman').classList.remove('hide');
      e.stopPropagation();
      e.preventDefault();
    });
  
    document.querySelector('body').addEventListener('mouseout', e => {
      if (e.target !== document.querySelector('.menu-woman')) {
        document.querySelector('.menu-woman').classList.add('hide');
        e.stopPropagation();
        e.preventDefault();
      }
    });
  
    document.querySelector('.nav-man').addEventListener('mouseover', e => {
      document.querySelector('.menu-man').classList.remove('hide');
      e.stopPropagation();
      e.preventDefault();
    });
  
    document.querySelector('body').addEventListener('mouseout', e => {
      if (e.target !== document.querySelector('.menu-man')) {
        document.querySelector('.menu-man').classList.add('hide');
        e.stopPropagation();
        e.preventDefault();
      }
    });
  
    document.querySelector('.nav-accessoire').addEventListener('mouseover', e => {
      document.querySelector('.menu-accessoire').classList.remove('hide');
      e.stopPropagation();
      e.preventDefault();
    });
  
    document.querySelector('body').addEventListener('mouseout', e => {
      if (e.target !== document.querySelector('.menu-accessoire')) {
        document.querySelector('.menu-accessoire').classList.add('hide');
        e.stopPropagation();
        e.preventDefault();
      }
    });
    /* search -----------------------*/
    iconSearch.addEventListener('click', function() {
      search.classlist.add('activeSearch');
    });
    /* haut de page ------------------*/
    scrollTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
    /* fiche produit img -----------------------------*/
  
    $('.col-img-product a').mouseover(function(e) {
      e.preventDefault();
      $('.main-img-product img').attr('src', $(this).attr('href'));
    });
  
    $('.linkFeedback').click(function(e) {
      e.preventDefault();
      $('.hidden').toggle(500);
    });
  
    /* ----navsmal-------------------------------------*/
  
    const burger = document.querySelector('#burger');
    const navul = document.querySelector('#navul');
    let ouvert = false;
    burger.addEventListener('click', e => {
      if (!ouvert) {
        navul.classList.remove('cache');
        ouvert = true;
        e.stopPropagation();
      } else {
        navul.classList.add('cache');
        e.stopPropagation();
        ouvert = false;
      }
    });
  
    /* calendrier---------------------*/
    $.datepicker.setDefaults({
      showOn: 'both',
      buttonImageOnly: true,
      buttonImage: 'calendar.gif',
      buttonText: 'Calendar',
    });
  })();
  