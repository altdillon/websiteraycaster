(()=>{


    let globalConsts = {
        ambiantlight: 3.2,
        lighting_side_delta: 0.3,
        floor_ambiantlight: 1,
        textured_sky_floor: true,
        player_height: 100.0,
        box_side_sizeX: 20.0,
        box_side_sizeY: 20.0
    }

    const grid = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,2],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,6,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,3,2,3,0,0,0,0,0,0,0,1],
        [1,0,0,4,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
        [1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,3,0,0,0,0,0,0,6,0,0,0,0,0,0,0,1],
        [1,0,0,4,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,2,0,0,0,0,6,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,3,0,0,0,0,6,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ]

    const grid2 = [
        [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,2,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,2],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,2,0,0,0,6,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,3,2,8,0,0,0,0,0,0,0,7],
        [7,0,0,4,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,7],
        [7,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,7,3,0,0,0,0,0,0,6,0,0,0,0,0,0,0,7],
        [7,0,0,4,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,2,0,0,0,0,6,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,3,0,0,0,0,6,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
    ]

    const grid3 = [
        [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
        [7,7,7,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,3,0,0,0,0,0,0,0,3,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,6,6,6,6,6,0,6,6,6,6,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,4,4,4,4,4,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,3,0,0,0,0,0,0,0,3,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,0,7,7,7,7,7,7,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,3,0,0,0,0,0,0,0,3,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,3,0,0,0,0,0,0,0,3,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,4,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,4,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,8,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,4,0,0,0,0,0,0,7,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,4,0,0,0,0,0,0,7,0,0,0,0,0,7,0,3,0,0,0,0,0,0,0,0,0,3,0,7,0,0,0,0,0,7,0,6,6,6,6,6,0,6,6,6,0,6,6,6,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,3,0,7,0,0,0,0,0,0,3,0,0,0,0,0,0,7,0,3,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,3,0,0,0,0,0,0,0,3,0,0,7,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,7,0,0,3,0,0,0,0,0,0,0,3,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,0,0,0,0,0,7,0,0,0,0,0,6,6,6,0,0,0,0,0,7,0,0,0,0,0,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,6,2,6,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,7,0,0,0,0,0,6,6,6,0,0,0,0,0,7,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,7,0,0,0,0,0,0,3,0,0,0,0,0,0,7,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,3,0,0,0,0,0,0,0,3,0,0,7,0,0,0,0,0,7,0,3,0,0,0,0,0,0,0,0,0,3,0,7,0,0,0,0,0,7,0,3,0,0,0,0,0,0,0,0,0,0,3,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,2,0,2,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,4,4,4,4,4,0,4,4,4,4,4,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,2,0,2,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,0,0,3,0,0,0,0,0,0,0,3,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,3,0,0,0,0,0,0,0,0,0,0,3,0,7,0,7],
        [7,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,7],
        [7,0,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,0,0,0,0,0,3,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,7],
        [7,0,0,6,6,6,6,6,6,6,0,6,6,6,6,6,6,6,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,2,6,6,0,6,6,6,6,6,6,6,6,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
        [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]
    ];

    let texttures = []
    let textureImageData = []
    function generateTextures(){
  
        // make red bricks
        let bricks_canvas = document.createElement('canvas')
        bricks_canvas.width = 64
        bricks_canvas.height = 64
        let ctx1 = bricks_canvas.getContext('2d')
        ctx1.fillStyle = '#333'   // mortar color
        ctx1.fillRect(0, 0, 64, 64)
        for(let x=0;x<64;x+=8){
            for(let y=0;y<64;y+=6){ 
                ctx1.fillStyle = 'red'
                if(Math.floor(y / 6) % 2 == 0){
                    ctx1.fillRect(x,y,6,4)
                } else {
                    ctx1.fillRect(x+3,y,6,4)
                }
            }
        }
        texttures[6] = bricks_canvas
    
        // make blue gray bricks
        let graybricks_canvas = document.createElement('canvas')
        graybricks_canvas.width = 64
        graybricks_canvas.height = 64
        let ctx2 = graybricks_canvas.getContext('2d')

        ctx2.fillStyle = '#333'   // mortar color
        ctx2.fillRect(0, 0, 64, 64)
        for(let x=0;x<64;x+=8){
            for(let y=0;y<64;y+=6){ 
                ctx2.fillStyle = 'grey'
                if(Math.floor(y / 6) % 2 == 0){
                    ctx2.fillRect(x,y,6,4)
                } else {
                    ctx2.fillRect(x+3,y,6,4)
                }
            }
        }
        texttures[7] = graybricks_canvas
        textureImageData[7] = ctx2.getImageData(0,0,graybricks_canvas.width,graybricks_canvas.height)

        // generate the wood texture that will be used on the celing
        // Function to draw a single plank
        function drawPlank(ctx,x, y, width, height) {
            // Plank color
            ctx.fillStyle = '#8B4513';
            ctx.fillRect(x, y, width, height);

            // Add wood grain lines
            ctx.strokeStyle = '#A0522D';
            ctx.lineWidth = 1;
            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                let yPos = y + (height / 5) * i + Math.random() * 10;
                ctx.moveTo(x + 5, yPos);
                ctx.lineTo(x + width - 5, yPos + Math.random() * 5);
                ctx.stroke();
            }
        }

        // generate a wood ctexture
        let woodcanvas = document.createElement('canvas')
        woodcanvas.width = 64
        woodcanvas.height = 256
        let woodctx = woodcanvas.getContext('2d')
        drawPlank(woodctx,0,0,256,64)
        texttures[8] = woodcanvas
        // cel_tex.getContext('2d').getImageData(0,0,cel_tex.width,cel_tex.height)
        textureImageData[8] = woodctx.getImageData(0,0,woodcanvas.width,woodcanvas.height)
    }

    // take in a texture and a list of rays and compute the celing and floor warp
    // this will serve as a way to pre compute the warp each frame and drawing it to another canvas that can then be copied to the other frame
    function warp(texture,rays,map,inverted=false){

        const SCREEN_WIDTH = window.innerWidth
        const SCREEN_HEIGHT = window.innerHeight
        const PROJECTION_PLANE_DIST = (SCREEN_WIDTH/2) / Math.tan(player.fov/2) 

        const rows = globalConsts.box_side_sizeX
        const cols = globalConsts.box_side_sizeY 
        let boxSizeX = window.innerWidth / cols
        let boxSizeY = window.innerHeight / rows

        let texture_data = texture.getContext('2d').getImageData(0,0,texture.width,texture.height)
        let wrapped_texture_data = new ImageData(texture.width,texture.height)

        let stripWidth = Math.ceil(SCREEN_WIDTH / rays.length)
        let horizon = SCREEN_HEIGHT/2 + player.height 

        if(inverted == false){
            for(let n=0;n<rays.length;n++){
                let stripHeight = PROJECTION_PLANE_DIST / rays[n].perp_dist
                let stripX = n * stripWidth
                let wallButtom = Math.floor(horizon + stripHeight/2) // start with the bottom of the wall
                let beta = Math.abs(rays[n].angle - player.angle) // angle between the player's direction and the ray cast angle
                for(let y=wallButtom;y<SCREEN_HEIGHT;y++){
                    let floor_dist = PROJECTION_PLANE_DIST / (y-horizon)
                    let worldX = player.px + floor_dist * Math.cos(rays[n].theta)
                    let worldY = player.py + floor_dist * Math.sin(rays[n].theta)
                    // ok, now that we know worldX and worldY we have to map that into a wrapped texture 
                    let texX = Math.floor((worldX % boxSizeX) / boxSizeX * texture.width)
                    let texY = Math.floor((worldY % boxSizeY) / boxSizeY * texture.height)
                    // then I guess copy that to wrapped texture
                    let sourceIndex = (texY * texture.width + texX) * 4
                    let destIndex = (y * SCREEN_WIDTH + stripX) * 4
                    //debugger  
                }

            }
        }
    }

    let keys = []

    let player ={
        angle: Math.PI/2,
        fov: 60.0 * (Math.PI/180),
        px: 100,
        py: 100,
        height: 0.0
    }

    let canvasstate = {}

    // basicly init everything and start the draw loop
    window.addEventListener('load', () => { 
        // grab the canvas state 
        generateTextures()
        canvasstate.canvas = document.getElementById("thecanvas")
        canvasstate.ctx = canvasstate.canvas.getContext("2d")
        canvasstate.canvas.height = window.innerHeight
        canvasstate.canvas.width = window.innerWidth
        draw()
    })

    function colormap(ctx,ncolor,brightness=0){

        if(brightness == 0){
            if(ncolor == 1){
                ctx.fillStyle = 'blue'
            } else if(ncolor == 2){
                ctx.fillStyle = 'red'
            } else if(ncolor == 3){
                ctx.fillStyle = 'green'
            } else if(ncolor == 4) {
                ctx.fillStyle = 'yellow'
            } else if(ncolor == 5) {
                ctx.fillStyle = 'purple'
            }  
        } else {
            let R,G,B
            if(ncolor == 1){
                // blue
                R = 0
                G = 0
                B = 255
            } else if(ncolor == 2){
                // red
                R = 255
                G = 0
                B = 0
            } else if(ncolor == 3){
                R = 0
                G = 255
                B = 0
            } else if(ncolor == 4){
                R = 255
                G = 255
                B = 0
            } else if(ncolor == 5){
                R = 128
                G = 0
                B = 128
            }
            ctx.fillStyle = `rgb(${Math.floor(R*brightness)}, ${Math.floor(G*brightness)}, ${Math.floor(B*brightness)})`
        }
    }

    function drawTopBottom(ctx,angle,floor_imagedata,sky_imagedata,map,rays){
        // pre compute some constents
        const SCREEN_WIDTH = window.innerWidth
        const SCREEN_HEIGHT = window.innerHeight
        const PROJECTION_PLANE_DIST = (SCREEN_WIDTH/2) / Math.tan(player.fov/2) 


        //const rows = map.length        // 20
        //const cols = map[0].length     // 20
        const rows = globalConsts.box_side_sizeX
        const cols = globalConsts.box_side_sizeY 
        let boxSizeX = window.innerWidth / cols
        let boxSizeY = window.innerHeight / rows

        // compute start and stop angles
        let start_angle = angle - player.fov / 2
        let stop_angle = angle + player.fov / 2

        // render the sky texture
        let sky_texture = new ImageData(SCREEN_WIDTH,SCREEN_HEIGHT/2)
        let floor_texture = new ImageData(SCREEN_WIDTH,SCREEN_HEIGHT/2)
        //let sky_ctx = cel_tex.getContext('2d').getImageData(0,0,cel_tex.width,cel_tex.height)


        let stripWidth = Math.ceil(SCREEN_WIDTH / rays.length)
        let horizon = SCREEN_HEIGHT/2 + player.height 

        // compute the floor first '
        for(let n=0;n<rays.length;n++){
            if(!rays[n]){continue} // skip if there's something bad
            // find the bottom of the rect
            let stripHeight = PROJECTION_PLANE_DIST / rays[n].perp_dist
            // let horizon = SCREEN_HEIGHT/2 + player.height 
            let rect_top = horizon - stripHeight/2 
            let rect_bottom = horizon + stripHeight/2 
            // let stripWidth = Math.ceil(SCREEN_WIDTH / rays.length)
            let stripX = n * stripWidth
            // figure out dims of the rest of the block
            let floorBlockWidth = stripWidth
            let floorBlockHeight = rect_bottom
            // draw a text rect 
            // ctx.fillStyle = 'brown'
            // ctx.fillRect(stripX,rect_bottom,stripWidth,floorBlockHeight)
            ctx.drawImage(floor_imagedata,stripX,rect_bottom,stripWidth,floorBlockHeight)
        }

        // let frac = (v) => {return v - Math.floor(v)}

        // for(let y=0;y<SCREEN_HEIGHT/2;y++){
        //     let rowDist = (PROJECTION_PLANE_DIST / (SCREEN_HEIGHT/2 - y)) * boxSizeY
        //     //let brightness = Math.min(globalConsts.ambiantlight, globalConsts.ambiantlight / rowDist)
        //     let brightness = Math.min(1.0, globalConsts.floor_ambiantlight / (rowDist/100))
        //     //debugger
        //     let leftRayX = player.px + rowDist * Math.cos(start_angle)
        //     let leftRayY = player.py + rowDist * Math.sin(start_angle)
        //     let rightRayX = player.px + rowDist * Math.cos(stop_angle)
        //     let rightRayY = player.py + rowDist * Math.sin(stop_angle)

        //     let stepX = (rightRayX - leftRayX) / SCREEN_WIDTH
        //     let stepY = (rightRayY - leftRayY) / SCREEN_WIDTH

        //     let worldX = leftRayX
        //     let worldY = leftRayY

        //     for(let x=0;x<SCREEN_WIDTH;x++){
        //         let texX = Math.floor(frac(worldX / boxSizeX) * sky_imagedata.width)
        //         let texY = Math.floor(frac(worldY / boxSizeY) * sky_imagedata.height)
        //         // texX = Math.abs(texX) % cel_tex.width
        //         // texY = Math.abs(texY) % cel_tex.height
        //         //let texX = Math.floor(frac(worldX / cel_tex.width) * cel_tex.width)
        //         //let texY = Math.floor(frac(worldY / cel_tex.height) * cel_tex.height)


        //         let sourceIndex = (texY * sky_imagedata.width + texX) * 4
        //         let destIndex = (y * SCREEN_WIDTH + x) * 4

        //         sky_texture.data[destIndex] = sky_imagedata.data[sourceIndex]  * brightness    // red
        //         sky_texture.data[destIndex+1] = sky_imagedata.data[sourceIndex+1] * brightness // blue
        //         sky_texture.data[destIndex+2] = sky_imagedata.data[sourceIndex+2] * brightness // green
        //         // sky_texture.data[destIndex+3] = sky_ctx.data[sourceIndex+3] // alpha
        //         sky_texture.data[destIndex+3] = 255                //debugger

        //         worldX += stepX
        //         worldY += stepY

        //     }

        // }

    
        // for(let y=0;y<SCREEN_HEIGHT/2;y+=9){
        //     let rowDist = (PROJECTION_PLANE_DIST / (SCREEN_HEIGHT/2 -y)) * boxSizeY
        //     //let brightness = Math.min(globalConsts.ambiantlight, globalConsts.ambiantlight / rowDist)
        //     let brightness = Math.min(1.0, globalConsts.floor_ambiantlight / (rowDist/100))
        //     //debugger
        //     let leftRayX  = player.px + rowDist * Math.cos(start_angle)
        //     let leftRayY  = player.py + rowDist * Math.sin(start_angle)
        //     let rightRayX = player.px + rowDist * Math.cos(stop_angle)  // + not -
        //     let rightRayY = player.py + rowDist * Math.sin(stop_angle)  // + not -

        //     let stepX = (rightRayX - leftRayX) / SCREEN_WIDTH  // right - left, not left - right
        //     let stepY = (rightRayY - leftRayY) / SCREEN_WIDTH
        //     let worldX = leftRayX
        //     let worldY = leftRayY

        //     for(let x=0;x<SCREEN_WIDTH;x+=9){
        //         let texX = Math.floor(frac(worldX / boxSizeX) * floor_imagedata.width)
        //         let texY = Math.floor(frac(worldY / boxSizeY) * floor_imagedata.height)
        //         // texX = Math.abs(texX) % cel_tex.width
        //         // texY = Math.abs(texY) % cel_tex.height
        //         //let texX = Math.floor(frac(worldX / cel_tex.width) * cel_tex.width)
        //         //let texY = Math.floor(frac(worldY / cel_tex.height) * cel_tex.height)


        //         let sourceIndex = (texY * floor_imagedata.width + texX) * 4
        //         //let destIndex = (y * SCREEN_WIDTH + x) * 4
        //        let destIndex = (y * SCREEN_WIDTH + (SCREEN_WIDTH - 1 - x)) * 4 
        //         //let destIndex = (SCREEN_HEIGHT/2 - 1 - y)

        //         floor_texture.data[destIndex] = floor_imagedata.data[sourceIndex]  * brightness    // red
        //         floor_texture.data[destIndex+1] = floor_imagedata.data[sourceIndex+1] * brightness // blue
        //         floor_texture.data[destIndex+2] = floor_imagedata.data[sourceIndex+2] * brightness // green
        //         // sky_texture.data[destIndex+3] = sky_ctx.data[sourceIndex+3] // alpha
        //         floor_texture.data[destIndex+3] = 255                //debugger

        //         worldX += stepX
        //         worldY += stepY

        //     }

        // }

        // draw both textures to the scren
        // ctx.putImageData(sky_texture,0,0)
        //ctx.putImageData(floor_texture,0,Math.floor(SCREEN_HEIGHT/2))
    }

    function drawWorld3D(ctx,rays){
        const SCALE_fACTOR = 1.0
        // const rows = map.length        // 20
        // const cols = map[0].length     // 20
        //let boxSideX = window.innerWidth / cols
        //let boxSideY = window.innerHeight / rows
        // let boxSideX = globalConsts.box_side_sizeX
        // let boxSideY = globalConsts.box_side_sizeY 
        const SCREEN_WIDTH = window.innerWidth
        const SCREEN_HEIGHT = window.innerHeight
        const PROJECTION_PLANE_DIST = (SCREEN_WIDTH/2) / Math.tan(player.fov/2) * SCALE_fACTOR
       
        if(!globalConsts.textured_sky_floor){
            // ceiling
            ctx.fillStyle = 'black'
            ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT/2)

            // floor
            ctx.fillStyle = 'grey'
            ctx.fillRect(0, SCREEN_HEIGHT/2, SCREEN_WIDTH, SCREEN_HEIGHT/2) 
        }

        //return // stub!!!        

        for(let n=0;n<rays.length;n++){
            //debugger
             
            if(!rays[n]) {continue}
         
            let stripHeight = PROJECTION_PLANE_DIST / rays[n].perp_dist
            let shadedist = Math.min(globalConsts.ambiantlight,globalConsts.ambiantlight / rays[n].perp_dist) 
            if(rays[n].side == 1){
                shadedist = shadedist * globalConsts.lighting_side_delta
            }

            // test the side detection by changing colors on some of the sides
            // if(rays[n].side == 0){
            //     colormap(ctx,rays[n].color_code,shadedist)
            // } else if(rays[n].side == 1){
            //     colormap(ctx,rays[n].color_code+1,shadedist)
            // }

            let horizon = SCREEN_HEIGHT/2 + player.height 
            // let rect_top = SCREEN_HEIGHT/2 - stripHeight/2
            let rect_top = horizon - stripHeight/2 
            // let rect_bottom = SCREEN_HEIGHT/2 + stripHeight/2
            let rect_bottom = horizon + stripHeight/2 
            let stripWidth = Math.ceil(SCREEN_WIDTH / rays.length)
            let stripX = n * stripWidth

            if(rays[n].color_code < 6){
                colormap(ctx,rays[n].color_code,shadedist)
                ctx.fillRect(stripX, rect_top, stripWidth, stripHeight)   // draw the top rect
            } else {
                // debugger
                let texture = texttures[rays[n].color_code] 
                let texX = Math.floor(rays[n].wallX * texture.width)
                ctx.drawImage(
                    texture,
                    texX, 0,          // source column
                    1, texture.height, // 1px wide slice
                    stripX, rect_top,  // destination position
                    stripWidth, stripHeight  // stretched to strip size
                )
                // apply a gamma over the image slice so that it looks like it's getting darker when I walk away from it.
                ctx.fillStyle = `rgba(0, 0, 0, ${1.0 - shadedist})`
                ctx.fillRect(stripX, rect_top, stripWidth, stripHeight)
            }
        }
    }

    function drawMap2D(ctx,mapworld){
        const rows = mapworld.length        // 20
        const cols = mapworld[0].length     // 20
        //const cellsq = 10 // some value of pixes to draw on the screen
        let boxSideX = window.innerWidth / cols
        let boxSideY = window.innerHeight / rows
        // let boxSideX = globalConsts.box_side_sizeX
        // let boxSideY = globalConsts.box_side_sizeY

        for(let x = 0;x<cols;x++){
            for(let y=0;y<rows;y++){
                // compute the location of the boxes x and y
                let boxX = x * boxSideX
                let boxY = y * boxSideY
                if(mapworld[x][y] > 0){
                    // if(mapworld[x][y] == 1){
                    //     ctx.fillStyle = 'blue'
                    // } else if(mapworld[x][y] == 2){
                    //     ctx.fillStyle = 'red'
                    // } else if(mapworld[x][y] == 3){
                    //     ctx.fillStyle = 'green'
                    // } else if(mapworld[x][y] == 4) {
                    //     ctx.fillStyle = 'yellow'
                    // }
                    colormap(ctx,mapworld[x][y])
                    if(mapworld[x][y] < 6){
                        ctx.fillRect(boxX,boxY,boxSideX,boxSideY)
                    } else {
                        let texIndex = mapworld[x][y]
                        ctx.drawImage(texttures[texIndex],boxX,boxY,boxSideX,boxSideY)
                    }
                }
            }
        }
    }

    function drawTriangle(ctx, x, y, width, height, angle) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI/2);
        ctx.beginPath();
        ctx.moveTo(0, -height / 2);
        ctx.lineTo(width / 2, height / 2);
        ctx.lineTo(-width / 2, height / 2);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }

    function drawPlayer2D(ctx,x,y,angle){
        drawTriangle(ctx,x,y,20,20,angle)
    }

    function castRay(map, x, y, theta, boxSizeX, boxSizeY) {
        // which cell are we starting in
        let mapX = Math.floor(x / boxSizeX)
        let mapY = Math.floor(y / boxSizeY)

        // step direction
        let stepX = Math.cos(theta) > 0 ? 1 : -1
        let stepY = Math.sin(theta) > 0 ? 1 : -1

        // delta dist — how far along ray between grid line crossings
        let deltaDistX = Math.abs(1 / Math.cos(theta))
        let deltaDistY = Math.abs(1 / Math.sin(theta))

        // initial partial step to first crossing
        let sideDistX, sideDistY
        if (stepX > 0) {
            sideDistX = ((mapX + 1) * boxSizeX - x) / boxSizeX * deltaDistX
        } else {
            sideDistX = (x - mapX * boxSizeX) / boxSizeX * deltaDistX
        }
        if (stepY > 0) {
            sideDistY = ((mapY + 1) * boxSizeY - y) / boxSizeY * deltaDistY
        } else {
            sideDistY = (y - mapY * boxSizeY) / boxSizeY * deltaDistY
        }

        // DDA loop
        let hit = false
        let side // 0 = vertical wall, 1 = horizontal wall
        while (!hit) {
            if (sideDistX < sideDistY) {
                sideDistX += deltaDistX
                mapX += stepX
                side = 0
            } else {
                sideDistY += deltaDistY
                mapY += stepY
                side = 1
            }

            // bounds check
            if (mapX < 0 || mapX >= map[0].length || mapY < 0 || mapY >= map.length) break

            if (map[mapY][mapX] > 0) hit = true
        }

        // perpendicular distance (fisheye correction built in)
        let perpDist
        if (side === 0) {
            perpDist = sideDistX - deltaDistX
        } else {
            perpDist = sideDistY - deltaDistY
        }

        return { perpDist, mapX, mapY, side, hit }
    }    


    function rayCast(ctx,map,dda,x,y,angle,rayLength,nrays){
        const draw2Dlines = false
        const rows = map.length        // 20
        const cols = map[0].length     // 20
        let boxSideX = window.innerWidth / cols
        let boxSideY = window.innerHeight / rows
        let hits = new Array(nrays) 
        let start_angle = angle - player.fov/2
        let stop_angle = angle + player.fov/2
        let dtheta = player.fov / nrays
        //let theta = angle
        let n = 0 
        for(let theta = start_angle;theta < (stop_angle);theta+=dtheta){

        // ***********************************************************************
            let oldGridX = Math.floor(x / boxSideX)
            let oldGridY = Math.floor(y / boxSideY)
            nddas = rayLength / dda
            for(let i=1;i<nddas;i++){
                let dx = dda * Math.cos(theta)
                let dy = dda * Math.sin(theta)
                let ddaX = dx * i
                let ddaY = dy * i
                // let gridX = Math.floor(ddaX / boxSideX)
                // let gridY = Math.floor(ddaY / boxSideY)
                let gridX = Math.floor((x + ddaX) / boxSideX)  // absolute pixel position
                let gridY = Math.floor((y + ddaY) / boxSideY)
                // debugger 
                if(map[gridX][gridY] > 0){
                    // find the magnitude of the stop
                    radial_dist = Math.sqrt(ddaX*ddaX + ddaY*ddaY) / boxSideX
                    perp_dist = radial_dist * Math.cos(theta - player.angle) // cos correction for fish eye
                    color_code = map[gridX][gridY]
                    // compute if the hit was on a horizontal or vertical side
                    let side
                    if(gridX !== oldGridX){
                        side = 0 // ray costed into a verticle line
                    } else {
                        side = 1 // ray crossed into a horizontal line
                    }

                    // find hitX,hitY, wallX
                    // wallX is needed to find which slice of a texture we're using
                    //let hitX,hitY
                    let wallX
                    // do the compute
                    if(side == 0){
                       let hitY = y + ddaY
                       wallX = (hitY / boxSideY) % 1.0
                    } else if(side == 1){
                       let hitX = x + ddaX
                       wallX = (hitX / boxSideX) % 1.0
                    }

                    hits[n] = {perp_dist,color_code,side,wallX,theta}
                    break
                } else {
                    if(draw2Dlines){
                        ctx.beginPath()
                        ctx.moveTo(x,y)
                        ctx.lineTo(x + ddaX,y + ddaY)
                        ctx.closePath()
                        ctx.stroke()
                    }
                }
                oldGridX = gridX
                oldGridY = gridY
            }
            n++
        }
        // **********************************************************************
        


        return hits // array of how amy rays where cased
    }


    let drawFPV = true

    // Register global listeners
    window.addEventListener('keydown', (e) => {
        console.log(`Key pressed: ${e.key}`); // e.g., "ArrowUp", "w"
        keys[e.key] = true
    
        // special ahdnle for drawFPV
        // if(e.key == 'x' && e.repeat == false){
        //     drawFPV = ~drawFPV
        // }
        if(e.repeat == false){
            if(e.key == 'm' || e.key == 'M' || e.key == 'x'){
                drawFPV = !drawFPV // turn first person view on or off
            }
            // if(e.key == 'c'){
            //     player.height += 10.0
            // }
        }
    });

    window.addEventListener('keyup',(e) => {
        keys[e.key] = false
    })

    

    const NUM_RAWS = 1001
    const STEP_DDA = 2
    const DELTA_THETA = 0.1
    const ds = 3
    const gamemap = grid3 // map that we're going to use for this game
    let drawFPV_Last_value = true

    function draw(){

        // crounch function
        if(keys['c']){
            player.height = -200.0
        }else{
            player.height = 0.0
        }


        // rotate
        if(keys['a']){
            player.angle -= DELTA_THETA
        } else if(keys['d']){
            player.angle +=  DELTA_THETA 
        }

        // forward and backwards
        if(keys['w']){
            player.px += Math.cos(player.angle) * ds
            player.py += Math.sin(player.angle) * ds
        }


        if(keys['s']){
            player.px -= Math.cos(player.angle) * ds
            player.py -= Math.sin(player.angle) * ds
        }

        canvasstate.ctx.clearRect(0, 0, canvasstate.canvas.width, canvasstate.canvas.height); // blank out the frame
        // 2d View of the player
        if(!drawFPV){
            drawPlayer2D(canvasstate.ctx,player.px,player.py,player.angle)
            rayCast(canvasstate.ctx,gamemap,STEP_DDA,player.px,player.py,player.angle,10000,NUM_RAWS)
            drawMap2D(canvasstate.ctx,gamemap)
        } else {
            //drawPlayer2D(canvasstate.ctx,player.px,player.py,player.angle)
            let hitrays = rayCast(canvasstate.ctx,gamemap,STEP_DDA,player.px,player.py,player.angle,10000,NUM_RAWS)
            let warped_floor = warp(texttures[7],hitrays,gamemap)
            let warped_ceil = warp(texttures[8],hitrays,gamemap)
            //drawMap2D(canvasstate.ctx,grid)
            if(globalConsts.textured_sky_floor){
                drawTopBottom(canvasstate.ctx,player.angle,texttures[7],texttures[8],gamemap,hitrays)
            }
            drawWorld3D(canvasstate.ctx,hitrays)
        }

        ref = window.requestAnimationFrame(draw)
    }

})()