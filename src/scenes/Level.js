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
    const spaceKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    // rightKey
    const rightKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT
    );

    // leftKey
    const leftKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.LEFT
    );

    // upKey
    const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

    // downKey
    const downKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.DOWN
    );

    // image_1
    const image_1 = this.add.image(
      -1,
      -14,
      "goodpudding_a_background_for_a_16_bit_pixelated_game_that_is_ca_60c4ec3e-9c9a-4658-a54b-1a52795afd18"
    );
    image_1.setOrigin(0, 0);

    // background_1
    const background_1 = v1_2_portfolio.createLayer(
      "Background",
      ["Portfolio", "props", "GUI"],
      -2,
      -14
    );

    // collision_1
    const collision_1 = v1_2_portfolio.createLayer(
      "Collision",
      ["props", "Portfolio"],
      -2,
      -14
    );

    // text_1
    const text_1 = this.add.text(322, 1871, "", {});
    text_1.scaleX = 0.22489658534377943;
    text_1.scaleY = 0.22489658534377943;
    text_1.text = "Instructions";
    text_1.setStyle({
      color: "#000000ff",
      fontSize: "60px",
      stroke: "#000000ff",
      strokeThickness: 6,
    });

    // text_2
    const text_2 = this.add.text(284, 1889, "", {});
    text_2.scaleX = 0.21718006065676748;
    text_2.scaleY = 0.21718006065676748;
    text_2.text =
      "Use the left and right arrow to move. \nPress spacebar to jump.\nHold the up arrow to float up.\nCatch the squirrel to open the github.";
    text_2.setStyle({
      color: "#000000ff",
      fontSize: "40px",
      stroke: "#000000ff",
      strokeThickness: 4,
    });

    // container_1
    const container_1 = this.add.container(109, 611);

    // hornedBeastSmall
    const hornedBeastSmall = this.add.image(-2, 960, "HornedBeastSmall");
    container_1.add(hornedBeastSmall);

    // wTFSmall
    const wTFSmall = this.add.image(313, 638, "WTFSmall");
    wTFSmall.scaleX = 0.9164434635316165;
    wTFSmall.scaleY = 0.9164434635316165;
    container_1.add(wTFSmall);

    // consoleQuestScreenShotSmall
    const consoleQuestScreenShotSmall = this.add.image(
      -2,
      316,
      "ConsoleQuestScreenShotSmall"
    );
    consoleQuestScreenShotSmall.scaleX = 0.765261458422027;
    consoleQuestScreenShotSmall.scaleY = 0.765261458422027;
    container_1.add(consoleQuestScreenShotSmall);

    // consoleQuest2Small
    const consoleQuest2Small = this.add.image(315, -5, "ConsoleQuest2Small");
    consoleQuest2Small.scaleX = 0.8779839567674348;
    consoleQuest2Small.scaleY = 0.8779839567674348;
    container_1.add(consoleQuest2Small);

    // text_3
    const text_3 = this.add.text(65.32637023925781, 935.78271484375, "", {});
    text_3.scaleX = 0.21718006065676748;
    text_3.scaleY = 0.21718006065676748;
    text_3.text =
      "This was a my\nfirst React \nproject and\nit was so fun \nto learn how\nto use React.";
    text_3.setStyle({
      color: "#000000ff",
      fontSize: "40px",
      stroke: "#000000ff",
      strokeThickness: 4,
    });
    text_3.setWordWrapWidth(text_3.style.wordWrapWidth, true);
    container_1.add(text_3);

    // text
    const text = this.add.text(-54.67362976074219, 994.78271484375, "", {});
    text.scaleX = 0.22489658534377943;
    text.scaleY = 0.22489658534377943;
    text.text = "Horned Beasts";
    text.setStyle({
      color: "#000000ff",
      fontSize: "60px",
      stroke: "#000000ff",
      strokeThickness: 6,
    });
    container_1.add(text);

    // text_4
    const text_4 = this.add.text(256, 675, "", {});
    text_4.scaleX = 0.22489658534377943;
    text_4.scaleY = 0.22489658534377943;
    text_4.text = "What the Fox";
    text_4.setStyle({
      color: "#000000ff",
      fontSize: "60px",
      stroke: "#000000ff",
      strokeThickness: 6,
    });
    container_1.add(text_4);

    // text_5
    const text_5 = this.add.text(-57, 353, "", {});
    text_5.scaleX = 0.22489658534377943;
    text_5.scaleY = 0.22489658534377943;
    text_5.text = "Console Quest";
    text_5.setStyle({
      color: "#000000ff",
      fontSize: "60px",
      stroke: "#000000ff",
      strokeThickness: 6,
    });
    container_1.add(text_5);

    // text_6
    const text_6 = this.add.text(262, 31, "", {});
    text_6.scaleX = 0.19803311217747327;
    text_6.scaleY = 0.19803311217747327;
    text_6.text = "Console Quest 2";
    text_6.setStyle({
      color: "#000000ff",
      fontSize: "60px",
      stroke: "#000000ff",
      strokeThickness: 6,
    });
    container_1.add(text_6);

    // text_7
    const text_7 = this.add.text(125, -357, "", {});
    text_7.scaleX = 0.22489658534377943;
    text_7.scaleY = 0.22489658534377943;
    text_7.text = "Thank You!";
    text_7.setStyle({
      color: "#000000ff",
      fontSize: "60px",
      stroke: "#000000ff",
      strokeThickness: 6,
    });
    container_1.add(text_7);

    // text_8
    const text_8 = this.add.text(70, -336, "", {});
    text_8.scaleX = 0.16156144621080226;
    text_8.scaleY = 0.16156144621080226;
    text_8.text = "Hit the Icon to open to my page\n";
    text_8.setStyle({
      color: "#000000ff",
      fontSize: "60px",
      stroke: "#000000ff",
      strokeThickness: 6,
    });
    container_1.add(text_8);

    // text_9
    const text_9 = this.add.text(174, 608, "", {});
    text_9.scaleX = 0.21718006065676748;
    text_9.scaleY = 0.21718006065676748;
    text_9.text =
      "My first team\nproject \nworking with \nReact and APIs.\nI had so much \nfun learning \nhow to connect \nto API's.";
    text_9.setStyle({
      color: "#000000ff",
      fontSize: "40px",
      stroke: "#000000ff",
      strokeThickness: 4,
    });
    text_9.setWordWrapWidth(text_9.style.wordWrapWidth, true);
    container_1.add(text_9);

    // text_10
    const text_10 = this.add.text(52, 288, "", {});
    text_10.scaleX = 0.21718006065676748;
    text_10.scaleY = 0.21718006065676748;
    text_10.text =
      "Another Team\nproject where\nwe connected to\nthe OpenAI API\nand used it to\ncreate a neat \ntext based RPG \ngame, using\nChatGPT.";
    text_10.setStyle({
      color: "#000000ff",
      fontSize: "40px",
      stroke: "#000000ff",
      strokeThickness: 4,
    });
    text_10.setWordWrapWidth(text_10.style.wordWrapWidth, true);
    container_1.add(text_10);

    // text_11
    const text_11 = this.add.text(174, -33, "", {});
    text_11.scaleX = 0.20310604683683303;
    text_11.scaleY = 0.20310604683683303;
    text_11.text =
      "It started as\na continuation\nof the original, \nbut I played\naround with the\nPhaser.js \nframework and my\nteam wanted to \nmake a more visual\ngame.";
    text_11.setStyle({
      color: "#000000ff",
      fontSize: "40px",
      stroke: "#000000ff",
      strokeThickness: 4,
    });
    text_11.setWordWrapWidth(text_11.style.wordWrapWidth, true);
    container_1.add(text_11);

    // cat
    const cat = new Cat(this, 145, 1921, "cat", "idle0.png");
    this.add.existing(cat);
    cat.scaleX = 1;
    cat.scaleY = 1;
    cat.body.setOffset(10, 17);
    cat.body.setSize(17, 16, false);

    // foreGround_1
    const foreGround_1 = v1_2_portfolio.createLayer(
      "ForeGround",
      ["props"],
      -1,
      -14
    );

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

    // squirrel4
    const squirrel4 = new Squirrel(this, 439, 674);
    this.add.existing(squirrel4);
    squirrel4.flipX = true;
    squirrel4.flipY = false;

    // icons_1
    const icons_1 = new Icons(this, 341, 325, "Github");
    this.add.existing(icons_1);
    icons_1.scaleX = 0.05963484962504077;
    icons_1.scaleY = 0.05963484962504077;
    icons_1.body.setOffset(0, 0);
    icons_1.body.setSize(514, 514, false);

    // icons
    const icons = new Icons(this, 270, 327, "linkedin");
    this.add.existing(icons);
    icons.scaleX = 0.05766017079527542;
    icons.scaleY = 0.05766017079527542;
    icons.body.setOffset(0, 0);
    icons.body.setSize(513, 510, false);

    // Itch
    const itch = new Icons(this, 202, 326);
    this.add.existing(itch);

    // lists
    const squirrels = [
      squirrel1,
      squirrel2,
      squirrel3,
      squirrel4,
      itch,
      icons,
      icons_1,
    ];

    // websiteSquirrels
    this.physics.add.collider(
      cat,
      squirrels,
      this.openWebsite,
      undefined,
      this
    );

    // collider
    this.physics.add.collider(cat, collision_1);

    // collider_1
    this.physics.add.collider(cat, foreGround_1);

    // squirrel1 (prefab fields)
    squirrel1.website =
      "https://github.com/goodpudding/gallery-of-horns/tree/main";

    // squirrel2 (prefab fields)
    squirrel2.website = "https://github.com/Team-Fox-trot/What-the-Fox";

    // squirrel3 (prefab fields)
    squirrel3.website = "https://github.com/Console-Quest/console-quest";

    // squirrel4 (prefab fields)
    squirrel4.website = "https://github.com/Console-Quest/console-quest-two";

    // icons_1 (prefab fields)
    icons_1.website = "https://github.com/goodpudding";

    // icons (prefab fields)
    icons.website = "https://www.linkedin.com/in/jamestreyyoung/";

    // itch (prefab fields)
    itch.website = "https://itch.io/c/3473941/portfolio";

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
  /** @type {Array<Squirrel|Icons>} */
  squirrels;

  /* START-USER-CODE */

  // Write more code here

  create() {
    this.editorCreate();
    this.initCamera();
    this.meowSounds = [
      this.sound.add("8Bitcat-meow_1", { volume: 0.5 }),
      this.sound.add("8Bitcat-meow_2", { volume: 0.5 }),
      this.sound.add("8Bitcat-meow_3", { volume: 0.5 }),
      this.sound.add("8Bitcat-meow_4", { volume: 0.5 }),
      this.sound.add("8Bitcat-meow_5", { volume: 0.5 }),
    ];

    this.squirrelSound = this.sound.add("8Bitcat-screaming_1", { volume: 0.5 });
    this.liftingSound = this.sound.add("8Bitcat-annoyedcatmeowsgruntsvowels", {
      volume: 0.5,
    });
    this.isLiftingSoundPlaying = false;

    this.menu_music = this.sound.add("game-music-loop-19-153393");
    const musicConfig = {
      mute: false,
      volume: 0.1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    };
    this.menu_music.play(musicConfig);
    // Iterate over the layers
    const layers = [this.collision_1, this.foreGround_1];
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
      const randomMeowSound = Phaser.Math.RND.pick(this.meowSounds);
      randomMeowSound.play();
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
      } else if (body.onFloor()) {
        // Add this condition to check if the cat is on the floor
        this.cat.play("cat_idle", true);
        this.cat.flipX = false; // Reset the sprite's flipping
      }
    }

    // Play 'cat_wallgrab' animation only when the cat is rising due to upKey, and not when it is falling or jumping due to spaceKey
    if (this.cat.body.velocity.y < 0 && upDown) {
			this.cat.play("cat_wallgrab", true);
			
			// Play the liftingSound only if it's not currently playing
			if (!this.isLiftingSoundPlaying) {
					this.liftingSound.play();
					this.isLiftingSoundPlaying = true;
			}
	} 
	// When the cat is falling
	else if (this.cat.body.velocity.y > 0) {
			this.cat.play("cat_fall", true);
			
			// Stop the liftingSound if it's currently playing
			if (this.isLiftingSoundPlaying) {
					this.liftingSound.stop();
					this.isLiftingSoundPlaying = false;
			}
	}
	// Switch back to 'cat_idle' when the cat hits the floor
	else if (this.cat.body.velocity.y >= 0 && body.onFloor()) {
			this.cat.play("cat_idle", true);
			
			// Stop the liftingSound if it's currently playing
			if (this.isLiftingSoundPlaying) {
					this.liftingSound.stop();
					this.isLiftingSoundPlaying = false;
			}
	}
  }
  openWebsite(player, squirrel) {
    // Check if the squirrel has a website
    this.squirrelSound.play();
    if (squirrel.website) {
      // Open the website associated with the squirrel in a new tab
      window.open(squirrel.website, "_blank");
    }
    squirrel.destroy();
  }

  // Then outside the function, register an event listener for when the fall animation completes

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
