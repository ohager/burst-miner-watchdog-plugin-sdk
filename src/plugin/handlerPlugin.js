/**
 * Handler Plugin base class.
 *
 * A Handler receives events from the watchdog backbone. Based on that events you may trigger any action you want, i.e. send message on won block, etc.
 * The watchdog can serve multiple handlers.
 *
 * Inherit from this class and override onEvent() for writing your own watchdog handler.
 */
class HandlerPlugin {
	/**
	 * @param {string} name The name of this plugin
	 */
	constructor(name){
		this.__name = name;
	}
	
	/**
	 * @returns {string} The name of this plugin
	 */
	get name(){ return this.__name};
	
	/**
	 * Called by watchdog backbone
	 * @param {string} typeName The name of the event
	 * @param {object} event the event object itself
	 */
	onEvent(typeName, event){
		throw `onEvent() method is not implemented by custom Plugin '${this.name}'`
	}
}

module.exports = HandlerPlugin;
