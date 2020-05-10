This is a library of useless hooks for common non-use-cases.

### Installation

`npm install react-use-useless`

### Core hook: useLess

The `useLess` hook is a the heart of this library and does all the heavylifting for you:

```ts
const three = useLess(3);
```

Under the hood, it uses a rather complex implementation, but if you want you may [look up source](src/index.ts):

```ts
const useLess = <T>(value: T): T => value;
```

This implementation might seem a bit convoluted but thanks to the effort put into it, it is compatible with ALL versions of React including BEFORE hooks were implemented. It should also work with other frameworks (Vue...) but it has not been tested (PR welcome).

Please note that `useLess` doesn't perform any memoization by itself (unlike e.g. `useMemo`).

### Maths hooks

Thanks to the power of `useLess` we can have specialized implementations:

```ts
const one = use1();
const two = use2();
// ...
const ten = use10();
const number = useNumber(10);
```

We also define math hooks to use in your components:

```ts
const sum = usePlus(3, 4);
const product = useTimes(3, 4);
const difference = useMinus(3, 4);
const ratio = useDivide(3, 4);
const power = usePower(3, 4);
```

Since we use this so often there is a specialized version of `usePower` for powers of two:

```ts
const n = usePowerOfTwo(5);
```

### Boolean hooks

Since boolean state is at the heart of many components (toggles...), we piggyback on the core `useLess` to define the following hooks:

```ts
const t = useTrue();
const f = useFalse();
const and = useAnd(true, false);
const or = useAnd(true, false);
const xor = useXOr(true, false);
const b = useCondition(3 === 4);
const ternary = useTernary(b === true, 3, 4);
```

### Strings

Strings are omnipresent in our apps, so we provide core functionality on top of `useLess` for better integration:

```ts
const s = useString("hello");
const cat = useConcat("hello", " world");
const len = useStringLength("hello");
```

### Objects and arrays hooks

There are specialized version of `useLess` for common cases:

```ts
const u = useUndefined();
const n = useNull();
const o = useObject({ foo: "bar" });
const a = useArray(["fizz", "buzz"]);
```

There are even more specialized for complex cases:

```ts
const p = useObjectProperty({ foo: "bar" }, "foo");
const i = useArrayItem(["fizz", "buzz"], 1);
const m = useMap(["fizz", "buzz"], t => t.toLowerCase());
const f = useFilter(["fizz", "buzz"], t => t === "fizz");
const r = useReduce(["fizz", "buzz"], (s, t) => s + t, "");
```

### Building your own hooks

At the heart of `useless` is the powerful, composable hook `useLess`. It is flexible enough to be used as part of a more complex hook.

Here's an example of using low-level `useLess` for accessing context:

```ts
const useMyContext = () => {
  const myContext = useContext(MyContext);
  return useLess(myContext);
}
```

Another more complex example with multiple higher-level hooks:

```ts
const useAppendLengthToString = (s: string): string => {
  const original = useString(s);
  const length = useStringLength(original);
  const appended = useConcat(original, ` ${length}`);

  return useLess(appended);
}
```

### Is this for real?

You guess.
