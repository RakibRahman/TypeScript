const objOne = {
    personOne: {
        name: "John",
        phone: 123,
        address: {
            city: "San Francisco",
            postalCode: "123"
        }
    },
    personTwo: {
        name: "Dwan",
        phone: 796,
    },
};

const getDeepValue = <TObj, TFirstKey extends keyof TObj, TSecondKey extends keyof TObj[TFirstKey]>(
    obj: TObj,
    firstKey: TFirstKey,
    secondKey: TSecondKey
) => {
    return obj[firstKey][secondKey];
};

const value = getDeepValue(objOne, 'personOne', 'address')
console.log(value['city'])