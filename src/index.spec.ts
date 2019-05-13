import { createSpecialInterval } from ".";
import { observeOn } from "rxjs/operators";
import { getTestScheduler, cold } from "jasmine-marbles";

describe('index test', () => {
  it('fake test', () => {
    expect(true).toBe(true);
  });

  it('createSpecialInterval should create special interval', () => {
    const source = createSpecialInterval(3, getTestScheduler());
    getTestScheduler().flush();
    source.subscribe(v => {
      console.log(v);
    })
    
    expect(source).toBeObservable(cold('a-b-(c|)', {a: 1, b: 2, c: 3}));
  });
});