import { defer, Observable } from "rxjs";

/** Create async observable that emits-once and completes
 *  after a JS engine turn */
export class TestHelper {

    public static asyncData<T>(data: T): Observable<T> {
        return defer(() => Promise.resolve(data));
    }
    public static asyncError<T>(data: T): Observable<T> {
        return defer(() => Promise.reject(data));
    }
}
