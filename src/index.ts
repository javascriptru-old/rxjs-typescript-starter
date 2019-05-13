import { interval, of, queueScheduler, defer, timer, SchedulerLike } from 'rxjs';
import { delay, switchMap, tap, flatMap, map, repeat, delayWhen, concatMap, take } from 'rxjs/operators';

// v^v delay
export const createSpecialInterval = (number: number, scheduler ?: SchedulerLike ) => {
  return interval(0, scheduler).pipe(concatMap(v => of(v).pipe(delay(v * 1000, scheduler))), take(number));
}

createSpecialInterval(100).subscribe(v => { 
  console.log(v); 
  console.timeEnd('interval'); 
  console.time('interval');
});