const HandlerPlugin = require('@/plugin/handlerPlugin');

describe('Handler Plugin Tests', () => {
		
		it('test interface', () => {
			
			const handler = new HandlerPlugin("test");
			expect(handler.onEvent).toBeDefined();
			expect(handler.onEvent).toThrow();
			expect(handler.name).toBe("test");

			
		});

	}
);
