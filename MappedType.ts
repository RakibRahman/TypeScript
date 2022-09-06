// a type needs based on another type.

//A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof) to iterate through keys to create a type

//? A mapped type can be surmised by the formula type B = type A + transformation.
type HumanOne = {
    name: string;
}

type Getters<Type> = {
    [Property in keyof Type]: Type[Property]
}
type NewHuman = Getters<HumanOne>

type GettersV2<Type> = {
    [Property in keyof Type]: () => Type[Property]
    // function return type
}

type GettersV3<Type> = {
    [Property in keyof Type]: () => ({ name: 'Rakiv' })
    //transforming
}

//Changing the property names
type ChangePropertyNames<Type> = {
    [Property in keyof Type as `get${string & Property}`]: () => Type[Property]
}

type HumanGetter = ChangePropertyNames<HumanOne>

