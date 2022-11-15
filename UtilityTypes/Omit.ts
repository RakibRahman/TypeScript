type OMIT<Type,Keys>={
  [P in keyof Type as P extends Keys?never:P]:Type[P]
}
