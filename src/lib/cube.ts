import square from './square'

export default function cube(a: number): number {
  return a * square(a)
}
