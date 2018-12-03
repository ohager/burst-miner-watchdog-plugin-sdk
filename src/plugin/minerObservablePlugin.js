const ProviderPlugin = require('./providerPlugin');

function throwUnimplementedMethod(methodName, pluginName){
	throw `${methodName} method is not implemented by Plugin '${pluginName}'`
}

/**
 * A base class to simplify the implementantion of a Miner Observable Plugin, which is also a Provider Plugin
 *
 * The Miner observable is a listener, that checks the miner for current blocks, errors and exits
 *
 * When writing a Miner observable, you don't need to implement `provide()` but the following methods:
 *
 * - blockEvents()
 * - errorEvents()
 * - closeEvents()
 *
 */
class MinerObservablePlugin extends ProviderPlugin {
	/**
	 * @param {string} name
	 */
	constructor(name){
		super(name);
	}
	
	/**
	 * @return {IObservable} A rxjs (V6+) event stream, i.e. Observable, of current mining block
	 */
	blockEvents() {
		throwUnimplementedMethod('blockEvents', this.name);
	}
	
	/**
	 * @return {IObservable} A rxjs (V6+) event stream, i.e. Observable, of errors
	 */
	errorEvents() {
		throwUnimplementedMethod('errorEvents', this.name);
	}
	
	/**
	 * @return {IObservable} A rxjs (V6+) event stream, i.e. Observable, of close/exit events (if possible)
	 */
	closeEvents() {
		throwUnimplementedMethod('closeEvents', this.name);
	}
	
	/**
	 * Provides three event streams used by backbone
	 * @returns {{blockEvents: IObservable, errorEvents: IObservable, closeEvents: IObservable}}
	 */
	provide(){
		return {
			blockEvents : this.blockEvents(),
			errorEvents : this.errorEvents(),
			closeEvents : this.closeEvents()
		}
	}
}

module.exports = MinerObservablePlugin;
