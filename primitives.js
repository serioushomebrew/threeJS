function sphere(radius, segments, rings){
    // set up the sphere vars
    if(radius === undefined){
        radius = 50;
    }
    if(segments === undefined){
        segments = 16;
    }
    if(rings === undefined){
        rings = 16;
    }

    // create the sphere's material
    var sphereMaterial =
        new THREE.MeshLambertMaterial(
            {
                color: 0xCC0000
            });

    // create a new mesh with
    // sphere geometry
    var sphere = new THREE.Mesh(

        new THREE.SphereGeometry(
            radius,
            segments,
            rings),

        sphereMaterial);

    // add the sphere to the scene
    scene.add(sphere);
}
