import { DoubleNumberPipe } from './double-number.pipe';

describe('DoubleNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new DoubleNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
