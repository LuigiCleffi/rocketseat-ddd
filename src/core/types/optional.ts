/**
 * Make some properties of a type optional while keeping the rest required.
 * 
 * @example
 * ```ts
 * type User = {
 *   id: string;
 *   name: string;
 *   email: string;
 *   age: number;
 * };
 *
 * type PartialUser = Optional<User, 'email' | 'age'>;
 * ```
 */
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>