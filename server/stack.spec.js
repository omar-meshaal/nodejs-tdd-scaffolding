describe('stack spec', () => {
  it('show that infrastructure works', () => {
    true.should.be.true();
  });

  const stack = () => {
    const size = true;

    return {
    isEmpty: () => {
      return size;
    },
    push: () => {}
   };
  };

  describe('stack', () => {
    it('should start empty', () => {
      const myStack = new stack();
      myStack.isEmpty().should.be.true();
    });

    it('not empty after a push', () => {
      stack.push();
      stack.isEmpty().should.be.false();
    });

    it('size is one after one push');
    it('size is zero after pop and push');
    it('pop 1 if push 1');
    it('pop 2,1 if push 1,2');
    it('throw overflow');
    it('throw underflows');
  });
});
