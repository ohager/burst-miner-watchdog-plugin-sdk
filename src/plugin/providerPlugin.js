/**
 * The provider plugin base class
 *
 * A Provider provides a source of events
 * The watchdog uses _three_ source providers, each provider type must be a single instance, i.e. there cannot be two Explorers
 * - Explorer: Is responsible for getting the most recent mined block height of the BURST network
 * - Miner Observable: Is responsible for delegating the current block your miner is working on to the watchdog
 * - Miner Process: Is responsible for pointing to the miner process, such that can be restarted.
 *
 * Inherit from this class and override provide() for writing your own watchdog provider.
 *
 * @see MinerObservablePlugin
 */
class ProviderPlugin {
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
	 * Provides an event source in form of RxJs Observable
	 * @return {IObservable} An RxJS observable
	 */
	provide(){
		throw `provide() method is not implemented by Provider Plugin '${this.name}'`;
	}
}

module.exports = ProviderPlugin;
