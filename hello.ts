type OptionalKeysOf<T extends object> = Exclude<{
  [K in keyof T]: T extends Record<K, T[K]>
    ? never
    : K
}[keyof T], undefined>

type OptionalPartOf<T extends object> = {
  [key in OptionalKeysOf<T>]: NonNullable<T[key]>
}

type Props = {
  names: string,
  email?: string
}

type DefaultOptionalProps = OptionalPartOf<Props>;

const defaultProps: DefaultOptionalProps = {
  email: 'aaa@test.com'
}

console.log('### defaultProps', defaultProps);
