const {MarkovMachine} = require('./markov');

describe("Markov Chains", () => {
    test('creates markov chain correctly', () => {
        const chain = {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [undefined]};
        const mmChain = new MarkovMachine("the cat in the hat").makeChains();
        expect(mmChain).toEqual(chain)
    });

    test('throws error on empty input', () => {
        expect(() => new MarkovMachine("").makeChains()).toThrow();
    });

    test('returns markov string', () => {
        const mmChain = new MarkovMachine("the cat in the hat").makeText();
        expect(mmChain).toEqual(expect.any(String));
    })
})