const {of} = require('rxjs');
const {tap} = require('rxjs/operators');
const {exitKey, key, sequence, forKey} = require('@sdk/keys/keyOperators');

let key$;
beforeAll(() => {
	key$ = of(
		{name: 'a', sequence: ''},
		{name: 'escape', sequence: ''},
		{name: 'b', sequence: '\u0003'},
	);
});

describe('Key Tests', () => {
	
	it('key filter operator', () => {
		
		const fn = jest.fn();
		
		key$.pipe(key('a')).subscribe(fn);
		
		expect(fn).toHaveBeenCalledTimes(1);
		
	});
	
	it('sequence filter operator', () => {
		
		const fn = jest.fn();
		
		key$.pipe(sequence('\u0003')).subscribe(fn);
		
		expect(fn).toHaveBeenCalledTimes(1);
		
	});
	
	it('exitKey', () => {
		
		const fn = jest.fn();
		
		key$.pipe(exitKey).subscribe(fn);
		
		expect(fn).toHaveBeenCalledTimes(2);
		
	});
	
	it('forKey', () => {
		
		const fn = jest.fn();
		const afn = jest.fn();
		const bfn = jest.fn();
		
		key$.pipe(
			tap(forKey('a')(afn)),
			tap(forKey('b')(bfn)),
		).subscribe(fn);
		
		expect(afn).toHaveBeenCalledTimes(1);
		expect(bfn).toHaveBeenCalledTimes(1);
		expect(fn).toHaveBeenCalledTimes(3);
		
	});
	
});

