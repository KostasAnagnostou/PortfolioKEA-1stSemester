 var marker;
  
        var places = [
            ['Portfolio KEA - Copenhagen', 55.706371, 12.53913, 2, 'http://konstantinos-anagnostou.com/portfolio/kea/portfolio.html', 'Portfolio KEA'],
            ['Who Am I - Athens', 37.9715323, 23.725749199999996, 1, 'http://konstantinos-anagnostou.com/portfolio/kea/profile.html', 'Who Am I']
           ];  
   
        function initMap() {
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: {lat: 48.669026, lng: 19.69902400000001},
            mapTypeControl: false,
            styles: [
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 13
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#000000"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#144b53"
              },
              {
                  "lightness": 14
              },
              {
                  "weight": 1.4
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#08304b"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#0c4152"
              },
              {
                  "lightness": 5
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#000000"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#0b434f"
              },
              {
                  "lightness": 25
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#000000"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#0b3d51"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#146474"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#021019"
              }
          ]
      }
  ]                
            
          });
  
         setMarkers(map);

         var pathCoordinates = [
          {lat: 37.9715323, lng: 23.725749199999996},
          {lat: 55.706371, lng: 12.53913}
        ];

        var path = new google.maps.Polyline({
          path: pathCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

         path.setMap(map);


        }  

    function setMarkers(map) {       
          for (var i = 0; i < places.length; i++) {
            var place = places[i];
            var marker = new google.maps.Marker({
              position: {lat: place[1], lng: place[2]},
              map: map,
              animation: google.maps.Animation.DROP,
              title: place[0],
              zIndex: place[3],
              label: {
                color: 'white',
                fontWeight: 'bold',
                text: place[5],
                },
            });
  
            setLink(marker, place[4]);
          }       
        }
  
    function setLink(marker, url) {
       google.maps.event.addListener(marker, 'click', function () {
                  window.location.href = url;
              });
    }       