const ProviderPlugin = require('@/plugin/providerPlugin');

describe('Provider Plugin Tests', () => {
		
		it('test interface', () => {
			
			const provider = new ProviderPlugin("test");
			expect(provider.provide).toBeDefined();
			expect(provider.provide).toThrow();
			expect(provider.name).toBe("test");
			
		});

	}
);
