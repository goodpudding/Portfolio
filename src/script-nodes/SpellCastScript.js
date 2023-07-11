/* START OF COMPILED CODE */

class SpellCastScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.GameObject} */
	Player;
	/** @type {string} */
	Spells = "";

	/* START-USER-CODE */

	// Write your code here.

	start() {
		// Listen for the SPACE keydown event to cast a spell
		this.scene.input.keyboard.on("keydown-SPACE", this.castSpell, this);
	}

	castSpell() {
		// Get the current facing direction of the player
		const playerFacing = this.getPlayerFacing();

		// Get the spell direction based on the player's facing direction
		const spellDirection = this.directions[playerFacing];

		// Iterate through the spell list and cast each spell
		for (const spell of this.Spells) {
			this.player.castSpell(spell, spellDirection);
		}
	}

	getPlayerFacing() {
		// Determine the player's facing direction based on the cursor keys
		if (this.player.cursors.left.isDown) {
			if (this.player.cursors.up.isDown) {
				return "up-left";
			} else if (this.player.cursors.down.isDown) {
				return "down-left";
			} else {
				return "left";
			}
		} else if (this.player.cursors.right.isDown) {
			if (this.player.cursors.up.isDown) {
				return "up-right";
			} else if (this.player.cursors.down.isDown) {
				return "down-right";
			} else {
				return "right";
			}
		} else if (this.player.cursors.up.isDown) {
			return "up";
		} else if (this.player.cursors.down.isDown) {
			return "down";
		} else {
			return "idle";
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
