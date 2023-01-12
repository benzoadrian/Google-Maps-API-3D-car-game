// Copyright 2021 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Loader } from '@googlemaps/js-api-loader';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';



const apiOptions = {
  apiKey: "AIzaSyCViqMybum1d7N2ATpoqtP1usGrZFUA8z8",
  version: "beta"
};

// 48.852538000000266    2.3034894

var latt = 48.834611
var lngg = 2.370941

var lattgeocoding = 48.834611
var lngggeooding = 2.370641



const mapOptions = {
  "tilt": 0,
  "heading": 2,
  "zoom": 20,
  "center": { lat: latt, lng: lngg },
  "mapId": "d48bfae13a56e05e"    
}

async function initMap() {    
  const mapDiv = document.getElementById("map");
  const apiLoader = new Loader(apiOptions);
  await apiLoader.load();
  


  return new google.maps.Map(mapDiv, mapOptions);
  

  




}


function initWebGLOverlayView(map) {  
  let scene, renderer, camera, loader;
  const webGLOverlayView = new google.maps.WebGLOverlayView();
  
  webGLOverlayView.onAdd = () => {   
    // set up the scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera();
    const ambientLight = new THREE.AmbientLight( 0xffffff, 0.75 ); // soft white light
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.25);
    directionalLight.position.set(0.5, -1, 0.5);
    scene.add(directionalLight);
  
    // load the model    
    loader = new GLTFLoader();     
             
    // the ferrari
    const source = "scene.gltf"

    //lamborghini
    const source2 = "untitled.gltf"

    loader.load(
      source,
      gltf => {      
        gltf.scene.scale.set(10,10,10);
        gltf.scene.rotation.x = 180 * Math.PI/360; // rotations are in radians
        gltf.scene.rotation.y = 180 * Math.PI/45; // rotations are in radian
        gltf.scene.rotation.z = 180 * Math.PI/45; // rotations are in radian\
        gltf.scene.position.x = 48.852538000000266
        gltf.scene.position.y = 2.3034894
        gltf.scene.name = "Ferrari"
        
        scene.add(gltf.scene);  
      }
    );

    loader.load(
      source2,
      gltf => {      
        gltf.scene.scale.set(5,5,5);
        gltf.scene.rotation.x = 180 * Math.PI/360; // rotations are in radians
        gltf.scene.rotation.y = 180 * Math.PI/45; // rotations are in radian
        gltf.scene.rotation.z = 180 * Math.PI/45; // rotations are in radian\
        gltf.scene.position.x = 48.852538000000266
        gltf.scene.position.y = 2.3034894
        
        gltf.scene.name = "pula1"
    
    
        scene.add(gltf.scene);           
      }
    );
    const btnleft = document.querySelector("#dafrtleft");
    const btnup = document.querySelector("#dafrtup");
    const btndown = document.querySelector("#dafrtdown");
    const btnright = document.querySelector("#dafrtright");
    const latilongi1 = document.querySelector("#latilongi");

    

    btnleft.addEventListener("click", function () {
     //latt = latt + 0.0000001;
     //lngg = lngg + 0.0000001;
     
     //const request = new XMLHttpRequest();
     //request.open("GET", "http://localhost:5016/posts/"+latt+"A"+lngg)
     //request.send();
     
     // GET Request.
         
     var fov = scene.getObjectByName('Ferrari');
     fov.position.x = fov.position.x - 1
     
     
     latilongi1.innerHTML=fov.position.x




   });

   btnright.addEventListener("click", function () {
     //latt = latt + 0.0000001;
     //lngg = lngg + 0.0000001;
     
     //const request = new XMLHttpRequest();
     //request.open("GET", "http://localhost:5016/posts/"+latt+"A"+lngg)
     //request.send();
     




       //var xhReq = new XMLHttpRequest();
       //xhReq.open("GET", 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDwJ_hTpkhZxEWKTFa-lGqMrI_HGoMJuAg&cx=507bfcfc0bff54017&q=ferrari', false);
       //xhReq.send(null);
       //var jsonObject = JSON.parse(xhReq.responseText);

       //alert(JSON.stringify(jsonObject.kind))
    
     
     
     var fov = scene.getObjectByName('Ferrari');
     fov.position.x = fov.position.x + 1
     //fov.position.y = fov.position.y + 1
   });


   btnup.addEventListener("click", function () {
    //latt = latt + 0.0000001;
    //lngg = lngg + 0.0000001;
    
    //const request = new XMLHttpRequest();
    //request.open("GET", "http://localhost:5016/posts/"+latt+"A"+lngg)
    //request.send();
    
    // GET Request.
        
    var fov = scene.getObjectByName('Ferrari');
    fov.position.y = fov.position.y + 1

  });

  btndown.addEventListener("click", function () {
    //latt = latt + 0.0000001;
    //lngg = lngg + 0.0000001;
    
    //const request = new XMLHttpRequest();
    //request.open("GET", "http://localhost:5016/posts/"+latt+"A"+lngg)
    //request.send();
    
    // GET Request.
        
    var fov = scene.getObjectByName('Ferrari');
    fov.position.y = fov.position.y - 1
    lattgeocoding = lattgeocoding - 0.00001 
    

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           
          

           var xmlDoc = xhttp.responseText;
           //var x = xmlDoc.getElementsByTagName("addressparts")[0];

           alert(xmlDoc);
        }
    };
    xhttp.open("GET", "https://nominatim.openstreetmap.org/reverse?lat=48.8738&lon="+lattgeocoding, true);
    xhttp.send();
    




  });
    



    

    

    
  }
  
  webGLOverlayView.onContextRestored = ({gl}) => {    
    // create the three.js renderer, using the
    // maps's WebGL rendering context.
    renderer = new THREE.WebGLRenderer({
      canvas: gl.canvas,
      context: gl,
      ...gl.getContextAttributes(),
    });
    renderer.autoClear = false;

    // wait to move the camera until the 3D model loads    
    loader.manager.onLoad = () => {        
      renderer.setAnimationLoop(() => {
        map.moveCamera({
          "tilt": mapOptions.tilt,
          "heading": mapOptions.heading,
          "zoom": mapOptions.zoom
        });            
        
        // rotate the map 360 degrees 
        if (mapOptions.tilt < 67.5) {
          mapOptions.tilt += 0.5
        } else if (mapOptions.heading <= 360) {
          mapOptions.heading += 0.2;
        } else {
          renderer.setAnimationLoop(0)
        }

        


        
      });        
    }
  }


  

  webGLOverlayView.onDraw = ({gl, transformer}) => {
    
    // step 1, fix the loop when you click , try a different even except the draw one
    // step 2 only execute once when you click the button
    // step 3 cors policy 
       
    


    // update camera matrix to ensure the model is georeferenced correctly on the map
    const latLngAltitudeLiteral = {
        lat: latt,
        lng: lngg,
        altitude: 0
    }

  
    

    const matrix = transformer.fromLatLngAltitude(latLngAltitudeLiteral);
    camera.projectionMatrix = new THREE.Matrix4().fromArray(matrix);
    
    webGLOverlayView.requestRedraw();      
    renderer.render(scene, camera);                  

    // always reset the GL state
    renderer.resetState();
  }
  webGLOverlayView.setMap(map);


}

(async () => {        
  const map = await initMap();
  initWebGLOverlayView(map);    
})();

