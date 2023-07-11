
// You can write more code here

/* START OF COMPILED CODE */

class Cat extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 68, y ?? 73, texture || "cat", frame ?? "idle0.png");

		this.scaleX = 3;
		this.scaleY = 3;
		scene.physics.add.existing(this, false);
		this.body.gravity.y = 500;
		this.body.setSize(40, 40, false);

		// startAnimationScript
		const startAnimationScript = new StartAnimationScript(this);

		// startAnimationScript (prefab fields)
		startAnimationScript.animationKey = "cat_idle";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
