/// <reference path='../vendor/babylon.d.ts'/>

console.log('hello world!');
// BABYLON.

//get canvas
const canvas = document.getElementById('renderCanvas');

//create a BabylonJS engine
const engine = new BABYLON.Engine(canvas, true);

//scene
function createScene(){
    const scene= new BABYLON.Scene(engine);

//camera
const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0,0,-15), scene);
camera.attachControl(canvas, true);
//light
const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0,1,0), scene);


//create box
const box = BABYLON.MeshBuilder.CreateBox('box', {
    size: 1
}, scene);
box.rotation.x = 2;
box.rotation.y = 3;

 

//create sphere
const sphere = BABYLON.MeshBuilder.CreateSphere('sphere',{
    // segments: 10
    diameter: 2
}, scene);
    sphere.position = new BABYLON.Vector3(3, 0, 0), scene;
    sphere.scaling = new BABYLON.Vector3(1,1.5,1);


    //create plane
    const plane = BABYLON.MeshBuilder.CreatePlane('plane',{}, scene);
    plane.position = new BABYLON.Vector3(-3.0,0);

    //create a line
    const points = [ 
        new BABYLON.Vector3(0,0,0),
        new BABYLON.Vector3(10,0,0),
        new BABYLON.Vector3(0,10,10),
        new BABYLON.Vector3(-20,0,10),
        new BABYLON.Vector3(0,10,0),
    ];

    const lines = BABYLON.MeshBuilder.CreateLines('lines',{
        points
    },scene);

    const material = new BABYLON.StandardMaterial('material', scene);
    material.diffuseColor = new BABYLON.Color3(1,0,1);    
    material.emissiveColor = new BABYLON.Color3(1,0,1); 

    box.material = material;

    const material2 = new BABYLON.StandardMaterial('material', scene);
    material2.diffuseTexture = new BABYLON.Texture('assets/images/coney_island_edit.jpg', scene);

    sphere.material = material2;

    const materialforbox = new BABYLON.StandardMaterial('material', scene);
    box.material = materialforbox;
    materialforbox.wireframe = true;

return scene;

}


// polyfill accessibility

// const xrPolyfillPromise = new Promise((resolve) => {
//     if (navigator.xr) {
//         return resolve();
//     }
//     if (window.WebXRPolyfill) {
//         new WebXRPolyfill();
//         return resolve();
//     } else {
//         const url = "https://cdn.jsdelivr.net/npm/webxr-polyfill@latest/build/webxr-polyfill.js";
//         const s = document.createElement("script");
//         s.src = url;
//         document.head.appendChild(s);
//         s.onload = () => {
//             new WebXRPolyfill();
//             resolve();
//         };
//     }
// });

//waiting for initializing?
// var createScene = async function () {
//     // wait for the polyfill to kick in
//     await xrPolyfillPromise;
//     console.log(navigator.xr); // should be there!
//     console.log(await BABYLON.WebXRSessionManager.IsSessionSupportedAsync("immersive-vr")); // should be true
//     // create your scene
//     var scene = new BABYLON.Scene(engine);
//     var camera = new BABYLON.DeviceOrientationCamera("DevOr_camera", new BABYLON.Vector3(-30, -30, -30), scene);
//     camera.setTarget(BABYLON.Vector3.Zero());
//     camera.attachControl(canvas, true);
//     var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 0, 0), scene);
//     scale = 100;
//     // initialize XR
//     var xr = await scene.createDefaultXRExperienceAsync();
  
//     return scene;
//   };

//create scene
const scene = createScene();

engine.runRenderLoop(()=>{
    scene.render();
});

//