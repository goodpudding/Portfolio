/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// v1_2_portfolio
		const v1_2_portfolio = this.add.tilemap("V1.2_portfolio");
		v1_2_portfolio.addTilesetImage("Portfolio", "tileset");
		v1_2_portfolio.addTilesetImage("props", "props");
		v1_2_portfolio.addTilesetImage("GUI", "GUI");

		// spaceKey
		const spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// rightKey
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// leftKey
		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// upKey
		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// downKey
		const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// image_1
		const image_1 = this.add.image(-1, -14, "goodpudding_a_background_for_a_16_bit_pixelated_game_that_is_ca_60c4ec3e-9c9a-4658-a54b-1a52795afd18");
		image_1.setOrigin(0, 0);

		// background_1
		const background_1 = v1_2_portfolio.createLayer("Background", ["Portfolio","props","GUI"], -2, -14);

		// collision_1
		const collision_1 = v1_2_portfolio.createLayer("Collision", ["props","Portfolio"], -2, -14);

		// text_1
		const text_1 = this.add.text(322, 1871, "", {});
		text_1.scaleX = 0.22489658534377943;
		text_1.scaleY = 0.22489658534377943;
		text_1.text = "Instructions";
		text_1.setStyle({ "color": "#000000ff", "fontSize": "60px", "stroke": "#000000ff", "strokeThickness":6});

		// text_2
		const text_2 = this.add.text(287, 1889, "", {});
		text_2.scaleX = 0.21718006065676748;
		text_2.scaleY = 0.21718006065676748;
		text_2.text = "Use the left and right arrow to move. \nPress spacebar to jump.\nHold the up arrow to float up.";
		text_2.setStyle({ "color": "#000000ff", "fontSize": "40px", "stroke": "#000000ff", "strokeThickness":4});

		// container_1
		const container_1 = this.add.container(109, 611);

		// hornedBeastSmall
		const hornedBeastSmall = this.add.image(-2, 960, "HornedBeastSmall");
		container_1.add(hornedBeastSmall);

		// wTFSmall
		const wTFSmall = this.add.image(306, 639, "WTFSmall");
		container_1.add(wTFSmall);

		// consoleQuestScreenShotSmall
		const consoleQuestScreenShotSmall = this.add.image(0, 327, "ConsoleQuestScreenShotSmall");
		container_1.add(consoleQuestScreenShotSmall);

		// consoleQuest2Small
		const consoleQuest2Small = this.add.image(306, 0, "ConsoleQuest2Small");
		container_1.add(consoleQuest2Small);

		// text_3
		const text_3 = this.add.text(65.32637023925781, 935.78271484375, "", {});
		text_3.scaleX = 0.21718006065676748;
		text_3.scaleY = 0.21718006065676748;
		text_3.text = "This was a my\nfirst react \nproject and\nit was so fun \nto learn how\nto use react.";
		text_3.setStyle({ "color": "#000000ff", "fontSize": "40px", "stroke": "#000000ff", "strokeThickness":4});
		text_3.setWordWrapWidth(text_3.style.wordWrapWidth, true);
		container_1.add(text_3);

		// text
		const text = this.add.text(-54.67362976074219, 994.78271484375, "", {});
		text.scaleX = 0.22489658534377943;
		text.scaleY = 0.22489658534377943;
		text.text = "Horned Beasts";
		text.setStyle({ "color": "#000000ff", "fontSize": "60px", "stroke": "#000000ff", "strokeThickness":6});
		container_1.add(text);

		// cat
		const cat = new Cat(this, 139, 1838, "cat", "idle0.png");
		this.add.existing(cat);
		cat.scaleX = 1;
		cat.scaleY = 1;
		cat.body.setOffset(10, 17);
		cat.body.setSize(17, 16, false);

		// foreGround_1
		const foreGround_1 = v1_2_portfolio.createLayer("ForeGround", ["props"], -1, -14);

		// squirrel1
		const squirrel1 = new Squirrel(this, 102, 1634);
		this.add.existing(squirrel1);

		// squirrel2
		const squirrel2 = new Squirrel(this, 422, 1314);
		this.add.existing(squirrel2);
		squirrel2.flipX = true;
		squirrel2.flipY = false;

		// squirrel3
		const squirrel3 = new Squirrel(this, 101, 994);
		this.add.existing(squirrel3);

		// squirrel
		const squirrel = new Squirrel(this, 439, 674);
		this.add.existing(squirrel);
		squirrel.flipX = true;
		squirrel.flipY = false;

		// lists
		const squirrels = [squirrel1, squirrel2, squirrel3, squirrel];

		// HornedBeastSquirrel
		this.physics.add.collider(cat, squirrels, this.openWebsite, undefined, this);

		// collider
		this.physics.add.collider(cat, collision_1);

		// squirrel1 (prefab fields)
		squirrel1.website = "https://github.com/goodpudding/gallery-of-horns/tree/main";

		// squirrel2 (prefab fields)
		squirrel2.website = "https://github.com/Team-Fox-trot/What-the-Fox";

		// squirrel3 (prefab fields)
		squirrel3.website = "https://github.com/Console-Quest/console-quest";

		// squirrel (prefab fields)
		squirrel.website = "https://github.com/Console-Quest/console-quest-two";

		this.background_1 = background_1;
		this.collision_1 = collision_1;
		this.cat = cat;
		this.foreGround_1 = foreGround_1;
		this.squirrel1 = squirrel1;
		this.v1_2_portfolio = v1_2_portfolio;
		this.spaceKey = spaceKey;
		this.rightKey = rightKey;
		this.leftKey = leftKey;
		this.upKey = upKey;
		this.downKey = downKey;
		this.squirrels = squirrels;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	background_1;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	collision_1;
	/** @type {Cat} */
	cat;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	foreGround_1;
	/** @type {Squirrel} */
	squirrel1;
	/** @type {Phaser.Tilemaps.Tilemap} */
	v1_2_portfolio;
	/** @type {Phaser.Input.Keyboard.Key} */
	spaceKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	rightKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	leftKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	upKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	downKey;
	/** @type {Squirrel[]} */
	squirrels;

	/* START-USER-CODE */

  // Write more code here

  create() {
    console.log("hello", this.scene);
    this.editorCreate();
    this.initCamera();

    // Iterate over the layers
    const layers = [this.collision_1];
    layers.forEach((layer) => {
      const tilesets = layer.layer.tilemapLayer.tilemap.tilesets;
      tilesets.forEach((tileset) => {
        const tileProperties = tileset.tileProperties;

        // Enable collisions based on tile properties
        layer.layer.data.forEach((row) => {
          row.forEach((tile) => {
            if (tile.index !== -1) {
              const properties = tileProperties[tile.index - tileset.firstgid];
              if (
                properties &&
                (properties.collide === true || properties.collides === true)
              ) {
                layer.setCollision(tile.index, true);
              }
            }
          });
        });
      });
    });
  }

  // initCamera() {
  // 	const cam = this.cameras.main;
  // 	cam.setBounds(0, 0, this.background_1.width, this.background_1.height);
  // }
  initCamera() {
    const cam = this.cameras.main;
    cam.startFollow(this.cat);
    cam.setBounds(0, 0, this.background_1.width, this.background_1.height);
    cam.setZoom(2.5);
  }

  update() {
    this.movePlayer();
  }

	movePlayer() {
		const body = this.cat.body;

		const jumpDown = this.spaceKey.isDown;
		const leftDown = this.leftKey.isDown;
		const rightDown = this.rightKey.isDown;
		const upDown = this.upKey.isDown;

		if (jumpDown && body.onFloor()) {
			this.cat.body.velocity.y = -250;
			this.cat.play("cat_jump", true); // Play the jumping animation
		} else if (upDown) {
			this.cat.body.velocity.y = -150;
		}

		const vel = 150;

		if (leftDown) {
			this.cat.body.velocity.x = -vel;
			this.cat.play("cat_walk", true);
			this.cat.flipX = true; // Flip the sprite horizontally
		} else if (rightDown) {
			this.cat.body.velocity.x = vel;
			this.cat.play("cat_walk", true);
			this.cat.flipX = false; // Reset the sprite's flipping
		} else {
			this.cat.body.velocity.x = 0;

			if (this.downKey.isDown) {
				this.cat.play("cat_crouch", true);
			} else if (this.cat.anims.currentAnim.key === "cat_wallgrab") {
				this.cat.flipX = true; // Flip the sprite horizontally
			} else if (body.onFloor()) { // Add this condition to check if the cat is on the floor
				this.cat.play("cat_idle", true);
				this.cat.flipX = false; // Reset the sprite's flipping
			}
		}

		// Play 'cat_wallgrab' animation only when the cat is rising due to upKey, and not when it is falling or jumping due to spaceKey
		if (this.cat.body.velocity.y < 0 && upDown) {
			this.cat.play("cat_wallgrab", true);
		} 
		// When the cat is falling
		else if (this.cat.body.velocity.y > 0) {
			this.cat.play("cat_fall", true);
		}
		// Switch back to 'cat_idle' when the cat hits the floor
		else if (this.cat.body.velocity.y >= 0 && body.onFloor()) {
			this.cat.play("cat_idle", true);
		}
	}
	openWebsite(player, squirrel) {
    // Check if the squirrel has a website
    if (squirrel.website) {
        // Open the website associated with the squirrel in a new tab
        window.open(squirrel.website, '_blank');
    }
		squirrel.destroy();
}



	// Then outside the function, register an event listener for when the fall animation completes



  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
