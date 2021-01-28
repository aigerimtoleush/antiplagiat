/*Sidebar toggle*/
$(function() {
	$('#sidebarCollapse').on('click', function () {
      $('#r-sidebar').toggleClass('active');
  });
});

/*Language change*/
$(function() {
	$('.lang-btn-toggle').on('click', function () {
      $('.lang-btn-toggle').toggleClass('active');
  });
});

/*Faculty list change*/
$(function() {
	$('.list-btn-toggle').on('click', function () {
      $('.list-btn-toggle').toggleClass('active');
  });
});

/*Active page icon <*/
$(function(){
	feather.replace();
	$('li').on('click', function () {
		$('.semi-circle').remove();
      $(this).append('<div class="semi-circle d-inline-block"><i data-feather="chevron-left" class="icon-left"></i></div>');
	  feather.replace();
  });
});


/*chart*/
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
		datasets: [{
			label: 'Faculty',
			data: [10, 50.8, 40.4, 70, 50.5, 70, 60, 70.1, 80, 70.2, 70.8],
			backgroundColor: "#5863B3",
			borderColor: "#5863B3",
			borderCapStyle: 'round',
			fill: false,
			pointRadius: 0,
		}]
	},
	
	options: {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			display: false,
		},
		scales: {
			yAxes: [{
				gridLines: {
					display: false,
				},
				ticks: {
					display:false,
                    beginAtZero: true,
					max: 100
                },
			}],
			
			xAxes: [{
				gridLines: {
					display: true,
					drawBorder: false,
					color: "#5863B3",
					lineWidth: 2,
					zeroLineColor: "#5863B3",
					zeroLineWidth: 2,
				},
				ticks: {
					fontColor: 'transparent',
				}
			}],
		},
		 layout: {
            padding: {
                top: 16
            }
        }
	}
});

