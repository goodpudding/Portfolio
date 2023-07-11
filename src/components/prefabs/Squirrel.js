
// You can write more code here

/* START OF COMPILED CODE */

class Squirrel extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 37, y ?? 24, texture || "squirrel", frame ?? "Squirrel_Idle1.png");

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 32, 32), Phaser.Geom.Rectangle.Contains);
		scene.physics.add.existing(this, false);
		this.body.setOffset(8, 19);
		this.body.setSize(16, 13, false);

		// startAnimationScript
		const startAnimationScript = new StartAnimationScript(this);

		// startAnimationScript (prefab fields)
		startAnimationScript.animationKey = "Squirrel_Idle";

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
