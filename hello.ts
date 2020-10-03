type OptionalKeysOf<T extends object> = Exclude<{
  [K in keyof T]: T extends Record<K, T[K]>
    ? never
    : K
}[keyof T], undefined>

type OptionalPartOf<T extends object> = {
  [key in OptionalKeysOf<T>]: T[key]
}

type Props = {
  names: string,
  email?: string
}

type DefaultProps = Required<OptionalPartOf<Props>>;

const defaultProps: DefaultProps = {
  email: 'aaa@test.com'
}

console.log('### defaultProps', defaultProps);
