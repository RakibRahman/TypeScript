
type READONLY<T> ={
  readonly[P in keyof T]:T[P]
}
