const MinerObservablePlugin = require('@/plugin/minerObservablePlugin');


class TestMinerObservable extends MinerObservablePlugin{

	constructor(name){
		super(name);
	}

	blockEvents() {
		return null;
	}
	errorEvents() {
		return null;
	}
	closeEvents() {
		return null;
	}
	
}


describe('Miner Observable Plugin Tests', () => {
		
		it('test interface', () => {
			
			const provider = new MinerObservablePlugin("test");
			expect(provider.provide).toBeDefined();
			expect(provider.name).toBe("test");
			
			expect(provider.provide).toThrow();
			expect(provider.blockEvents).toThrow();
			expect(provider.errorEvents).toThrow();
			expect(provider.closeEvents).toThrow();
			
		});

		it('test inheritance', () => {
			
			const provider = new TestMinerObservable("test");
			const providedObj = provider.provide();
			
			expect(providedObj.blockEvents).toBeNull();
			expect(providedObj.closeEvents).toBeNull();
			expect(providedObj.errorEvents).toBeNull();
			
		});

	}
);
