type GetReadonlyKeys<Obj extends object> = { readonly [ prop in keyof Obj]: Obj[prop];
}
