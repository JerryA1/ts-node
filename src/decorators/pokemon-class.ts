function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("Invalid id");
      } else {
        return originalMethod(id);
      }
    };
    // descriptor.value = () => {
    //   console.log("hola munso");
    // };
  };
}

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);

        return "Gerardo";
      },
      set(this, val) {
        // console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {
  @readOnly(true)
  private publicApi: string = "https://pokeapi.co";

  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Saving to DB with id ${id}`);
  }
}
