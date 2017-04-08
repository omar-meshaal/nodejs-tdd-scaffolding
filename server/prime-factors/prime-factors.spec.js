import {primefactors} from './prime-factors';
describe.only('prime factors spec', () => {
  it('show that infrastructure work', () => {
    true.should.be.true();
  });

  describe.only('prime factors should return', () => {
    it('no prime factors of 1', () => {
      primefactors(1).should.be.deepEqual([]);
    });

    it('2 for 2', () => {
      primefactors(2).should.be.deepEqual([2]);
    });

    it('3 for 3');
    it('2, 2 for 4');
    it('2, 3 for 6');
    it('2, 2, 2 for 8');
    it('3, 3 for 9');
    it('2, 5 for 10');
    it('2, 2, 3 for 12');
    it('error if not integer');

  });

});
