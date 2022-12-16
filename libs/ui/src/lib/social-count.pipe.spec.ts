import { SocialCountPipe } from './social-count.pipe';

describe('SocialCountPipe', () => {
  it('create an instance', () => {
    const pipe = new SocialCountPipe();
    expect(pipe).toBeTruthy();
  });

  it('should handle hundreds count correctly', () => {
    const pipe = new SocialCountPipe();
    expect(pipe.transform(999)).toBe('999');
    expect(pipe.transform(12)).toBe('12');
    expect(pipe.transform(3)).toBe('3');
  })

  it('should handle thousand count correctly', () => {
    const pipe = new SocialCountPipe();
    expect(pipe.transform(1536)).toBe('1,5 tsd.');
    expect(pipe.transform(10000)).toBe('10 tsd.');
    expect(pipe.transform(100290)).toBe('100,3 tsd.');
  })

  it('should handle milionen count correctly', () => {
    const pipe = new SocialCountPipe();
    expect(pipe.transform(1500000)).toBe('1,5 mil.');
    expect(pipe.transform(10000000)).toBe('10 mil.');
    expect(pipe.transform(999999)).toBe('1 mil.');
    expect(pipe.transform(100290000)).toBe('100,3 mil.');
  })
});
