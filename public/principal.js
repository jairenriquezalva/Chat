const PARENTNODEID = 'game'

document.addEventListener('juegoListo',()=>{
		juegoListo()
})

// b

var juego;

function juegoListo(){
	var fondoJuego;
	var nave;
	var cursores;
	var balas;
	var tiempoBala=0;
	var botonDisparo;
	var enemigos;
	var laser;
	juego = new Phaser.Game(370, 550, Phaser.CANVAS,PARENTNODEID);
	var ganaste;
	var estadoPrincipal={
		preload: function () {
			// carga todos los recursos
			juego.load.image('fondo','img/space.png')
			juego.load.image('personaje','img/nave.png')
			juego.load.image('laser','img/laser.png')
			juego.load.image('enemigo','img/pajaro2.png')
			juego.load.image('ganaste','img/ganaste.png')
			juego.load.audio('laser', 'laser.wav');
		},
		
		create: function(){
			//mostrar pantalla
			ganaste = juego.add.sprite(juego.width,juego.height,'ganaste')
			ganaste.anchor.setTo(0.5)
			fondoJuego=juego.add.tileSprite(0,0,370,550,'fondo')
			nave = juego.add.sprite(juego.width/2,500,'personaje')
			nave.anchor.setTo(0.5)
			cursores = juego.input.keyboard.createCursorKeys()
			botonDisparo=juego.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
			laser = juego.add.audio('laser');
			balas = juego.add.group()
			balas.enableBody = true;
			balas.physicsBodyType = Phaser.Physics.ARCADE;
			balas.createMultiple(20,'laser')
			balas.setAll('anchor.x',0.5)
			balas.setAll('anchor.y',1.0)
			balas.setAll('outOfBoundsKill',true)
			balas.setAll('checkWorldBounds',true)
			enemigos = juego.add.group()
			enemigos.enableBody=true
			enemigos.physicsBodyType = Phaser.Physics.ARCADE;
			for(var i = 0; i<6;i++){
				for(var j = 0; j<5; j++){
					var enemigo = enemigos.create(i*50,j*50,'enemigo')
					enemigo.anchor.setTo(0.5)
				}
			}
			enemigos.x = 50
			enemigos.y = 30
			var animacion = juego.add.tween(enemigos).to({x:100},1000,Phaser.Easing.Linear.None,true,0,1000,true)
		},

		update: function(){
			//animamos el juego
			if(cursores.right.isDown)
				nave.position.x+=3
			if(cursores.left.isDown)
				nave.position.x-=3
			var bala;
			if(botonDisparo.isDown){
				if(juego.time.now > tiempoBala){
					bala = balas.getFirstExists(false)
				}
				if(bala){
					bala.reset(nave.x,nave.y)
					bala.body.velocity.y = -300
					tiempoBala=juego.time.now + 100
					laser.play()
				}
			}
			if(juego.rnd.integerInRange(0,80) == 1){
					var naveDisparo = juego.rnd.integerInRange(0,enemigos.length-1)
					let enem = enemigos.getChildAt(naveDisparo)
					if(enem.alive){
						var balaEnemigo = juego.add.sprite(enem.position.x+enem.width,enem.position.y+enem.height,'laser')
						balaEnemigo.anchor.x = 0.5;
						balaEnemigo.anchor.y = -0.5;
						juego.physics.arcade.enable(balaEnemigo)
						balaEnemigo.outOfBoundsKill = true;
						balaEnemigo.checkWorldBouns = true;
						balaEnemigo.body.velocity.y = 200;
					}
					
			}
			juego.physics.arcade.overlap(balas,enemigos,colision,null,this)
			if(enemigos.countLiving()==0){
				ganaste = juego.add.sprite(juego.width/2,juego.height/2,'ganaste')
				ganaste.anchor.x = 0.5
				ganaste.anchor.y = 0.5
			}
		}
	};
	function colision(bala,enemigo){
		bala.kill();
		enemigo.kill();
	}

	//Asignamos el estado que acaba de crear al juego
	juego.state.add('principal',estadoPrincipal);
	//Iniciar el juego del estado principal por defecto
	juego.state.start('principal');
}	
	