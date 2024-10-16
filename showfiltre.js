function open_filtre() {
    // Show the filter section with col-12 class
    const filtreBloc = document.querySelector('.filtre_bloc');
    filtreBloc.classList.remove('col-3', 'd-none', 'd-md-block');
    filtreBloc.classList.add('col-11', 'd-block', 'mx-auto');
  
    // Hide the main page content
    document.querySelector('.col-12.col-md-9').style.display = 'none';
  
    // Show the app-bar and search button
    document.querySelector('.app-bar').classList.remove('d-none');
    document.querySelector('.app-bar').classList.add('d-block');
    
    document.querySelector('.search-button-container .search-button').classList.remove('d-none');
    document.querySelector('.search-button-container .search-button').classList.add('d-block');
  }
  
  function close_filtre() {
    // Restore filter section to col-3 and hide on small screens
    const filtreBloc = document.querySelector('.filtre_bloc');
    filtreBloc.classList.remove('col-12', 'd-block');
    filtreBloc.classList.add('col-3', 'd-none', 'd-md-block');
  
    // Show the main page content again
    document.querySelector('.col-12.col-md-9').style.display = 'block';
  
    // Hide the app-bar and search button
    document.querySelector('.app-bar').classList.remove('d-block');
    document.querySelector('.app-bar').classList.add('d-none');
    
    document.querySelector('.search-button-container .search-button').classList.remove('d-block');
    document.querySelector('.search-button-container .search-button').classList.add('d-none');
  }
  