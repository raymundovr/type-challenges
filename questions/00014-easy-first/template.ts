type First<T extends any[]> = T extends [infer H, ...infer R] ? H : never ;
