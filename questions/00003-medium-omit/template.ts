type MyOmit<T, K extends keyof T> = {
    [P in keyof T as Exclude<P, K>]: T[P];
}
