console.log('Main!');

import locService from './services/loc.service.js'
import mapService from './services/map.service.js'
import autocompleteService from './services/autocomplete.js'


window.onload = ()=>{
    mapService.initMap()
    .then(autocompleteService.initAutocomplete)
    .then(
        ()=>{
            mapService.addMarker({lat: 32.0749831, lng: 34.9120554});
        }
    );
    // locService.getPosition()
    //     .then(pos => {
    //         console.log('User position is:', pos.coords);
    //     })
    //     .catch(err => {
    //         console.log('err!!!', err);
    //     })
}

// document.querySelector('.btn1').onclick =  () => {
//     console.log('Thanks!');
// }


// document.querySelector('.btn1').addEventListener('click', (ev)=>{
//     console.log('Aha!', ev.target);
// })   
