$(document).ready(function() {

		  // module aliases
		  var Engine = Matter.Engine,
		      Render = Matter.Render,
		      World = Matter.World,
		      Bodies = Matter.Bodies,
		      Composites = Matter.Composites,
		      Common = Matter.Common,
		      Svg = Matter.Svg,
		      Vertices = Matter.Vertices;

		  // create an engine
		  var engine = Engine.create();

		  // create a renderer
		  var render = Render.create({
		      element: document.body,
		      engine: engine,
		      options : {
					width: 1600, // dimensions of physics area
					height: 800,
					background: 'white',
					wireframes: false
				}
		  });

		  // container boundaries (red lines)
		  var ground = Bodies.rectangle(800, 800, 1600, 1, { render: { fillStyle: 'red' }, isStatic: true });
		  var leftwall = Bodies.rectangle(0, 0, 1, 1600, {  render: { fillStyle: 'red' },isStatic: true });
		  var rightwall = Bodies.rectangle(1600, 800, 1, 1600, { render: { fillStyle: 'red' }, isStatic: true });

		  var vertexSets = [],
				color = 'black'; // color of numbers
				size = 0.8; // scale of numbers
				stroke = 0.8; // internal outline stroke width

		  // importing number 1's svg paths
		  $('#one').find('path').each(function(i, path){
		      var v = Bodies.fromVertices(100, -400, Svg.pathToVertices(path, 10), {
		        render: {
		          fillStyle: color,
		          lineWidth: stroke,
		          strokeStyle: color
		        }
		      }, true);
		      Matter.Body.scale(v, size, size);
		    vertexSets.push(v);
		  });

		  // importing number 2's svg paths
		  $('#two').find('path').each(function(i, path){
		      var v = Bodies.fromVertices(200, 40, Svg.pathToVertices(path, 10), {
		        render: {
		          fillStyle: color,
		          lineWidth: stroke,
		          strokeStyle: color
		        }
		      }, true);
		      Matter.Body.scale(v, size, size);
		    vertexSets.push(v);
		  });

		  // importing number 3's svg paths
		  $('#three').find('path').each(function(i, path){
		      var v = Bodies.fromVertices(500, -600, Svg.pathToVertices(path, 10), {
		        render: {
		          fillStyle: color,
		          lineWidth: stroke,
		          strokeStyle: color
		        }
		      }, true);
		      Matter.Body.scale(v, size, size);
		    vertexSets.push(v);
		  });

		  // importing number 4's svg paths
		  $('#four').find('path').each(function(i, path){
		      var v = Bodies.fromVertices(600, 80, Svg.pathToVertices(path, 10), {
		        render: {
		          fillStyle: color,
		          lineWidth: stroke,
		          strokeStyle: color
		        }
		      }, true);
		      Matter.Body.scale(v, size, size);
		    vertexSets.push(v);
		  });

		  // importing number 5's svg paths
		  $('#five').find('path').each(function(i, path){
		      var v = Bodies.fromVertices(700, -300, Svg.pathToVertices(path, 10), {
		        render: {
		          fillStyle: color,
		          lineWidth: stroke,
		          strokeStyle: color
		        }
		      }, true);
		      Matter.Body.scale(v, size, size);
		    vertexSets.push(v);
		  });

		  // importing number 6's svg paths
		  $('#six').find('path').each(function(i, path){
		      var v = Bodies.fromVertices(1200, -700, Svg.pathToVertices(path, 10), {
		        render: {
		          fillStyle: color,
		          lineWidth: stroke,
		          strokeStyle: color
		        }
		      }, true);
		      Matter.Body.scale(v, size, size);
		    vertexSets.push(v);
		  });

		  // importing number 7's svg paths
		  $('#seven').find('path').each(function(i, path){
		      var v = Bodies.fromVertices(800, 110, Svg.pathToVertices(path, 10), {
		        render: {
		          fillStyle: color,
		          lineWidth: stroke,
		          strokeStyle: color
		        }
		      }, true);
		      Matter.Body.scale(v, size, size);
		    vertexSets.push(v);
		  });

		  // importing number 8's svg paths
		  $('#eight').find('path').each(function(i, path){
		      var v = Bodies.fromVertices(900, -220, Svg.pathToVertices(path, 10), {
		        render: {
		          fillStyle: color,
		          lineWidth: stroke,
		          strokeStyle: color
		        }
		      }, true);
		      Matter.Body.scale(v, size, size);
		    vertexSets.push(v);
		  });

		  // importing number 9's svg paths
		  $('#nine').find('path').each(function(i, path){
		      var v = Bodies.fromVertices(1100, 130, Svg.pathToVertices(path, 10), {
		        render: {
		          fillStyle: color,
		          lineWidth: stroke,
		          strokeStyle: color
		        }
		      }, true);
		      Matter.Body.scale(v, size, size);
		    vertexSets.push(v);
		  });

		  // importing number 0's svg paths
		  $('#zero').find('path').each(function(i, path){
		      var v = Bodies.fromVertices(1300, -100, Svg.pathToVertices(path, 10), {
		        render: {
		          fillStyle: color,
		          lineWidth: stroke,
		          strokeStyle: color
		        }
		      }, true);
		      Matter.Body.scale(v, size, size);
		    vertexSets.push(v);
		  });

		  // add all svg elements into a package
		  vertexSets.push(ground,leftwall,rightwall)

		  // add all of the bodies to the world
		  World.add(engine.world, vertexSets);

		  // run the engine
		  Engine.run(engine);

		  // run the renderer
		  Render.run(render);


        $('home').click
        e.preventDefault();
        setTimeout(function() {window.location.href="google.com";}, 2000);

});