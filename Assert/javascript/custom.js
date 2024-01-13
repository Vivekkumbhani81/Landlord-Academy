
$(document).ready(function () {
  $('select').niceSelect();
  // $("html").niceScroll();	
  // $(".list").niceScroll();
  $('.xyz').on('click', function () {

    event();
  });
});
// -----------------------------------------------------------------------------------------------------------------------------------


//  ----------------------------------------------------------------------- GRAPH 1 ------------------------------------------------------------
$(function () {
  $('#container').highcharts({
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Campaign Activity'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'datetime',
      labels: {
        overflow: 'justify'
      }
    },
    yAxis: {
      title: {
        text: 'Daily Activity Totals'
      },
      min: 0,
      minorGridLineWidth: 0,
      // gridLineWidth: 0,
      // alternateGridColor: null,
      // plotBands: []
    },
    tooltip: {
      valueSuffix: ' users/week'
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 3
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 86400000 * 7,
        pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
      }
    },
    series: [{
      name: 'New Users',
      data: [130, 260, 350, 250, 400, 450, 300, 200, 100, 180, 220, 250, 290, 350, 370, 390, 170, 350, 200, 230, 280, 150, 201, 140, 110, 240, 330, 230, 380,]
    }, {
      name: 'Active Users',
      data: [120, 150, 170, 190, 110, 150, 200, 230, 280, 150, 201, 140, 110, 240, 330, 230, 380, 430, 280, 180, 80, 150, 190, 220, 260, 310, 330, 350, 130, 310]
    }, {
      name: 'Sweepstakes Registrations',
      data: [150, 180, 200.5, 220, 140, 180, 250, 280, 330, 180, 221, 160, 130, 260, 350, 250, 400, 450, 300, 200, 100, 180, 220, 250, 290, 350, 370, 390, 170, 350]
    }]
    ,
    navigation: {
      menuItemStyle: {
        fontSize: '20px'
      }
    }
  });
});

//------------------------------------------------------------------- GRAPH 2 --------------------------------------------------------------
$(function () {
  $('#garph_data_two').highcharts({
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Campaign Activity'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'datetime',
      labels: {
        overflow: 'justify'
      }
    },
    yAxis: {
      title: {
        text: 'Daily Activity Totals'
      },
      min: 0,
      minorGridLineWidth: 0,
      // gridLineWidth: 0,
      // alternateGridColor: null,
      // plotBands: []
    },
    tooltip: {
      // valueSuffix: ' users/week'
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 3
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 86400000 * 7,
        pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
      }
    },
    series: [{
      name: 'New Users',
      data: [130, 260, 350, 250, 400, 450, 300, 200, 100, 180, 220, 250, 290, 350, 370, 390, 170, 350, 200, 230, 280, 150, 201, 140, 110, 240, 330, 230, 380,]
    }, {
      name: 'Active Users',
      data: [120, 150, 170, 190, 110, 150, 200, 230, 280, 150, 201, 140, 110, 240, 330, 230, 380, 430, 280, 180, 80, 150, 190, 220, 260, 310, 330, 350, 130, 310]
    }, {
      name: 'Sweepstakes Registrations',
      data: [150, 180, 200.5, 220, 140, 180, 250, 280, 330, 180, 221, 160, 130, 260, 350, 250, 400, 450, 300, 200, 100, 180, 220, 250, 290, 350, 370, 390, 170, 350]
    }]
    ,
    navigation: {
      menuItemStyle: {
        fontSize: '20px'
      }
    }
  });
});


//---------------------------------------------------------------------------------------------------------------------------------

function openNav() {
  console.log("opennav");
  document.body.classList.toggle('sb-sidenav-toggled');
}
function closeNav() {
  console.log("opennav");
  document.body.classList.toggle('sb-sidenav-toggled');
}

function toggleSidenav() {
  var body = document.body;
  if (window.innerWidth <= 1200) {
    body.classList.remove('sb-sidenav-toggled');
  } else {
    body.classList.add('sb-sidenav-toggled');
  }
}

// Initial check on page load
toggleSidenav();

// Listen for window resize events
window.addEventListener('resize', toggleSidenav);

// Toggle the class on DOMContentLoaded
window.addEventListener('DOMContentLoaded', event => {
  toggleSidenav();
});

// --------------------------------------------------------- active class ------------------------------------------------------------------

function activateLink(link) {
  // Remove "active" class from all links
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function (item) {
      item.classList.remove('active');
  });

  // Add "active" class to the clicked link
  link.classList.add('active');
}