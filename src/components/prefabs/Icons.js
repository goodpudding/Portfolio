
// You can write more code here

/* START OF COMPILED CODE */

class Icons extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 104, y ?? 53, texture || "itch-io", frame);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 10, 10), Phaser.Geom.Rectangle.Contains);
		this.scaleX = 0.015031028725241168;
		this.scaleY = 0.015031028725241168;
		scene.physics.add.existing(this, false);
		this.body.setSize(2048, 2048, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	website = "";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
