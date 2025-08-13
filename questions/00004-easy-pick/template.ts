type MyPick<O extends object, K extends keyof O> = { [k in K]: O[k]; }
