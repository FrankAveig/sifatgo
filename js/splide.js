var splide = new Splide( '.splide', { 
    perPage: 3,
    gap    : '2rem',
    breakpoints: {
      1024: {
        perPage: 3,
        gap    : '.7rem',
  
      },
      800: {
        perPage: 3,
        gap    : '.7rem',
  
      },
      680: {
        perPage: 2,
        gap    : '.7rem',
  
      },
      500: {
        perPage: 1,
        gap    : '.7rem',
      }
    },
  } );
  
  splide.mount();