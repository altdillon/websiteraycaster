(()=>{


    const grid = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,3,2,3,0,0,0,0,0,0,0,1],
    [1,0,0,4,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ]

    let keys = []

    let player ={
        angle: Math.PI/2,
        fov: 60.0 * (Math.PI/180),
        px: 100,
        py: 100,
    }

    let canvasstate = {}

    // basicly init everything and start the draw loop
    window.addEventListener('load', () => { 
        // grab the canvas state 
        canvasstate.canvas = document.getElementById("thecanvas")
        canvasstate.ctx = canvasstate.canvas.getContext("2d")
        canvasstate.canvas.height = window.innerHeight
        canvasstate.canvas.width = window.innerWidth
        draw()
    })

    function colormap(ctx,ncolor){

        if(ncolor == 1){
            ctx.fillStyle = 'blue'
        } else if(ncolor == 2){
            ctx.fillStyle = 'red'
        } else if(ncolor == 3){
            ctx.fillStyle = 'green'
        } else if(ncolor == 4) {
            ctx.fillStyle = 'yellow'
        }
    }

    function drawWorld3D(ctx,rays,map){
        const SCALE_fACTOR = 1.0
        const rows = map.length        // 20
        const cols = map[0].length     // 20
        let boxSideX = window.innerWidth / cols
        let boxSideY = window.innerHeight / rows
        const SCREEN_WIDTH = window.innerWidth
        const SCREEN_HEIGHT = window.innerHeight
        const PROJECTION_PLANE_DIST = (SCREEN_WIDTH/2) / Math.tan(player.fov/2) * SCALE_fACTOR
       
       
        // ceiling
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT/2)

        // floor
        ctx.fillStyle = 'grey'
        ctx.fillRect(0, SCREEN_HEIGHT/2, SCREEN_WIDTH, SCREEN_HEIGHT/2) 
       
        for(let n=0;n<rays.length;n++){
            //debugger
             
            if(!rays[n]) {continue}
         
            let stripHeight = PROJECTION_PLANE_DIST / rays[n].perp_dist
            colormap(ctx,rays[n].color_code)

            let rect_top = SCREEN_HEIGHT/2 - stripHeight/2
            let rect_bottom = SCREEN_HEIGHT/2 + stripHeight/2
            let stripWidth = SCREEN_WIDTH / rays.length
            let stripX = n * stripWidth
            ctx.fillRect(stripX, rect_top, stripWidth, stripHeight)   // draw the top rect
        }
    }

    function drawMap2D(ctx,mapworld){
        const rows = mapworld.length        // 20
        const cols = mapworld[0].length     // 20
        //const cellsq = 10 // some value of pixes to draw on the screen
        let boxSideX = window.innerWidth / cols
        let boxSideY = window.innerHeight / rows

        for(let x = 0;x<cols;x++){
            for(let y=0;y<rows;y++){
                // compute the location of the boxes x and y
                let boxX = x * boxSideX
                let boxY = y * boxSideY
                if(mapworld[x][y] > 0){
                    if(mapworld[x][y] == 1){
                        ctx.fillStyle = 'blue'
                    } else if(mapworld[x][y] == 2){
                        ctx.fillStyle = 'red'
                    } else if(mapworld[x][y] == 3){
                        ctx.fillStyle = 'green'
                    } else if(mapworld[x][y] == 4) {
                        ctx.fillStyle = 'yellow'
                    }

                    ctx.fillRect(boxX,boxY,boxSideX,boxSideY)
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
            // let vertX = x + rayLength * Math.cos(theta)
            // let vertY = y + rayLength * Math.sin(theta)

            // // draw the line
            // ctx.beginPath()
            // ctx.moveTo(x,y)
            // ctx.lineTo(vertX,vertY)
            // ctx.closePath()
            // //ctx.strokeStyle = `rgb(${n}, ${n}, ${n})`
            // ctx.stroke()

            // n = n + 1
      
            // ray = castRay(map,x,y,theta,boxSideX,boxSideY)          
            // let vertX = x + ray["perpDist"] * Math.cos(theta) * boxSideX
            // let vertY = y + ray["perpDist"] * Math.sin(theta) * boxSideY
            // let hitPixelX = (ray.mapX) * boxSideX
            // let hitPixelY = (ray.mapY) * boxSideY


            // // draw the line
            // ctx.beginPath()
            // ctx.moveTo(x,y)
            // ctx.lineTo(hitPixelX,hitPixelY)
            // ctx.closePath()
            // //ctx.strokeStyle = `rgb(${n}, ${n}, ${n})`
            // ctx.stroke()


        // ***********************************************************************
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
                    hits[n] = {perp_dist,color_code}
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
            }
            n++
        }
        // **********************************************************************
        


        return hits // array of how amy rays where cased
    }

    // Register global listeners
    window.addEventListener('keydown', (e) => {
        console.log(`Key pressed: ${e.key}`); // e.g., "ArrowUp", "w"
        keys[e.key] = true
    });

    window.addEventListener('keyup',(e) => {
        keys[e.key] = false
    })

    const NUM_RAWS = 1001
    const STEP_DDA = 2
    const DELTA_THETA = 0.1
    const ds = 4

    function draw(){

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
        let drawFPV = true
        if(!drawFPV){
            drawPlayer2D(canvasstate.ctx,player.px,player.py,player.angle)
            rayCast(canvasstate.ctx,grid,STEP_DDA,player.px,player.py,player.angle,10000,NUM_RAWS)
            drawMap2D(canvasstate.ctx,grid)
        } else {
            //drawPlayer2D(canvasstate.ctx,player.px,player.py,player.angle)
            let hitrays = rayCast(canvasstate.ctx,grid,STEP_DDA,player.px,player.py,player.angle,10000,NUM_RAWS)
            //drawMap2D(canvasstate.ctx,grid)
            drawWorld3D(canvasstate.ctx,hitrays,grid)
        }

        ref = window.requestAnimationFrame(draw)
    }

})()