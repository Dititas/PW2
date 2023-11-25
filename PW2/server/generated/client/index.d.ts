
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Travel
 * 
 */
export type Travel = $Result.DefaultSelection<Prisma.$TravelPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.travel`: Exposes CRUD operations for the **Travel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Travels
    * const travels = await prisma.travel.findMany()
    * ```
    */
  get travel(): Prisma.TravelDelegate<ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Travel: 'Travel',
    Booking: 'Booking',
    Purchase: 'Purchase'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'travel' | 'booking' | 'purchase'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Travel: {
        payload: Prisma.$TravelPayload<ExtArgs>
        fields: Prisma.TravelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          findFirst: {
            args: Prisma.TravelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          findMany: {
            args: Prisma.TravelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>[]
          }
          create: {
            args: Prisma.TravelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          createMany: {
            args: Prisma.TravelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TravelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          update: {
            args: Prisma.TravelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          deleteMany: {
            args: Prisma.TravelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TravelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TravelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          aggregate: {
            args: Prisma.TravelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTravel>
          }
          groupBy: {
            args: Prisma.TravelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TravelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelCountArgs<ExtArgs>,
            result: $Utils.Optional<TravelCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>,
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>,
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Booking: number
    Purchase: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Booking?: boolean | UserCountOutputTypeCountBookingArgs
    Purchase?: boolean | UserCountOutputTypeCountPurchaseArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }



  /**
   * Count Type TravelCountOutputType
   */

  export type TravelCountOutputType = {
    OutboundFlight: number
    ReturnFlight: number
    Purchase: number
  }

  export type TravelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OutboundFlight?: boolean | TravelCountOutputTypeCountOutboundFlightArgs
    ReturnFlight?: boolean | TravelCountOutputTypeCountReturnFlightArgs
    Purchase?: boolean | TravelCountOutputTypeCountPurchaseArgs
  }

  // Custom InputTypes

  /**
   * TravelCountOutputType without action
   */
  export type TravelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelCountOutputType
     */
    select?: TravelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TravelCountOutputType without action
   */
  export type TravelCountOutputTypeCountOutboundFlightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * TravelCountOutputType without action
   */
  export type TravelCountOutputTypeCountReturnFlightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * TravelCountOutputType without action
   */
  export type TravelCountOutputTypeCountPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id_user: number | null
    age_user: number | null
  }

  export type UserSumAggregateOutputType = {
    id_user: number | null
    age_user: number | null
  }

  export type UserMinAggregateOutputType = {
    id_user: number | null
    name_user: string | null
    lastName_user: string | null
    age_user: number | null
    email_user: string | null
    password_user: string | null
  }

  export type UserMaxAggregateOutputType = {
    id_user: number | null
    name_user: string | null
    lastName_user: string | null
    age_user: number | null
    email_user: string | null
    password_user: string | null
  }

  export type UserCountAggregateOutputType = {
    id_user: number
    name_user: number
    lastName_user: number
    age_user: number
    email_user: number
    password_user: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id_user?: true
    age_user?: true
  }

  export type UserSumAggregateInputType = {
    id_user?: true
    age_user?: true
  }

  export type UserMinAggregateInputType = {
    id_user?: true
    name_user?: true
    lastName_user?: true
    age_user?: true
    email_user?: true
    password_user?: true
  }

  export type UserMaxAggregateInputType = {
    id_user?: true
    name_user?: true
    lastName_user?: true
    age_user?: true
    email_user?: true
    password_user?: true
  }

  export type UserCountAggregateInputType = {
    id_user?: true
    name_user?: true
    lastName_user?: true
    age_user?: true
    email_user?: true
    password_user?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id_user: number
    name_user: string | null
    lastName_user: string | null
    age_user: number | null
    email_user: string
    password_user: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    name_user?: boolean
    lastName_user?: boolean
    age_user?: boolean
    email_user?: boolean
    password_user?: boolean
    Booking?: boolean | User$BookingArgs<ExtArgs>
    Purchase?: boolean | User$PurchaseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id_user?: boolean
    name_user?: boolean
    lastName_user?: boolean
    age_user?: boolean
    email_user?: boolean
    password_user?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Booking?: boolean | User$BookingArgs<ExtArgs>
    Purchase?: boolean | User$PurchaseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Booking: Prisma.$BookingPayload<ExtArgs>[]
      Purchase: Prisma.$PurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      name_user: string | null
      lastName_user: string | null
      age_user: number | null
      email_user: string
      password_user: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const userWithId_userOnly = await prisma.user.findMany({ select: { id_user: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Booking<T extends User$BookingArgs<ExtArgs> = {}>(args?: Subset<T, User$BookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    Purchase<T extends User$PurchaseArgs<ExtArgs> = {}>(args?: Subset<T, User$PurchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id_user: FieldRef<"User", 'Int'>
    readonly name_user: FieldRef<"User", 'String'>
    readonly lastName_user: FieldRef<"User", 'String'>
    readonly age_user: FieldRef<"User", 'Int'>
    readonly email_user: FieldRef<"User", 'String'>
    readonly password_user: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Booking
   */
  export type User$BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * User.Purchase
   */
  export type User$PurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Travel
   */

  export type AggregateTravel = {
    _count: TravelCountAggregateOutputType | null
    _avg: TravelAvgAggregateOutputType | null
    _sum: TravelSumAggregateOutputType | null
    _min: TravelMinAggregateOutputType | null
    _max: TravelMaxAggregateOutputType | null
  }

  export type TravelAvgAggregateOutputType = {
    id_travel: number | null
    price_travel: number | null
    duration_travel: number | null
  }

  export type TravelSumAggregateOutputType = {
    id_travel: number | null
    price_travel: number | null
    duration_travel: number | null
  }

  export type TravelMinAggregateOutputType = {
    id_travel: number | null
    airline_travel: string | null
    flightNumber_travel: string | null
    origin_travel: string | null
    destination_travel: string | null
    departureDate_travel: Date | null
    arrivalDate_travel: Date | null
    price_travel: number | null
    duration_travel: number | null
  }

  export type TravelMaxAggregateOutputType = {
    id_travel: number | null
    airline_travel: string | null
    flightNumber_travel: string | null
    origin_travel: string | null
    destination_travel: string | null
    departureDate_travel: Date | null
    arrivalDate_travel: Date | null
    price_travel: number | null
    duration_travel: number | null
  }

  export type TravelCountAggregateOutputType = {
    id_travel: number
    airline_travel: number
    flightNumber_travel: number
    origin_travel: number
    destination_travel: number
    departureDate_travel: number
    arrivalDate_travel: number
    price_travel: number
    duration_travel: number
    _all: number
  }


  export type TravelAvgAggregateInputType = {
    id_travel?: true
    price_travel?: true
    duration_travel?: true
  }

  export type TravelSumAggregateInputType = {
    id_travel?: true
    price_travel?: true
    duration_travel?: true
  }

  export type TravelMinAggregateInputType = {
    id_travel?: true
    airline_travel?: true
    flightNumber_travel?: true
    origin_travel?: true
    destination_travel?: true
    departureDate_travel?: true
    arrivalDate_travel?: true
    price_travel?: true
    duration_travel?: true
  }

  export type TravelMaxAggregateInputType = {
    id_travel?: true
    airline_travel?: true
    flightNumber_travel?: true
    origin_travel?: true
    destination_travel?: true
    departureDate_travel?: true
    arrivalDate_travel?: true
    price_travel?: true
    duration_travel?: true
  }

  export type TravelCountAggregateInputType = {
    id_travel?: true
    airline_travel?: true
    flightNumber_travel?: true
    origin_travel?: true
    destination_travel?: true
    departureDate_travel?: true
    arrivalDate_travel?: true
    price_travel?: true
    duration_travel?: true
    _all?: true
  }

  export type TravelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Travel to aggregate.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Travels
    **/
    _count?: true | TravelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TravelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TravelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelMaxAggregateInputType
  }

  export type GetTravelAggregateType<T extends TravelAggregateArgs> = {
        [P in keyof T & keyof AggregateTravel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravel[P]>
      : GetScalarType<T[P], AggregateTravel[P]>
  }




  export type TravelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelWhereInput
    orderBy?: TravelOrderByWithAggregationInput | TravelOrderByWithAggregationInput[]
    by: TravelScalarFieldEnum[] | TravelScalarFieldEnum
    having?: TravelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelCountAggregateInputType | true
    _avg?: TravelAvgAggregateInputType
    _sum?: TravelSumAggregateInputType
    _min?: TravelMinAggregateInputType
    _max?: TravelMaxAggregateInputType
  }

  export type TravelGroupByOutputType = {
    id_travel: number
    airline_travel: string | null
    flightNumber_travel: string | null
    origin_travel: string | null
    destination_travel: string | null
    departureDate_travel: Date | null
    arrivalDate_travel: Date | null
    price_travel: number | null
    duration_travel: number | null
    _count: TravelCountAggregateOutputType | null
    _avg: TravelAvgAggregateOutputType | null
    _sum: TravelSumAggregateOutputType | null
    _min: TravelMinAggregateOutputType | null
    _max: TravelMaxAggregateOutputType | null
  }

  type GetTravelGroupByPayload<T extends TravelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelGroupByOutputType[P]>
            : GetScalarType<T[P], TravelGroupByOutputType[P]>
        }
      >
    >


  export type TravelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_travel?: boolean
    airline_travel?: boolean
    flightNumber_travel?: boolean
    origin_travel?: boolean
    destination_travel?: boolean
    departureDate_travel?: boolean
    arrivalDate_travel?: boolean
    price_travel?: boolean
    duration_travel?: boolean
    OutboundFlight?: boolean | Travel$OutboundFlightArgs<ExtArgs>
    ReturnFlight?: boolean | Travel$ReturnFlightArgs<ExtArgs>
    Purchase?: boolean | Travel$PurchaseArgs<ExtArgs>
    _count?: boolean | TravelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travel"]>

  export type TravelSelectScalar = {
    id_travel?: boolean
    airline_travel?: boolean
    flightNumber_travel?: boolean
    origin_travel?: boolean
    destination_travel?: boolean
    departureDate_travel?: boolean
    arrivalDate_travel?: boolean
    price_travel?: boolean
    duration_travel?: boolean
  }

  export type TravelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OutboundFlight?: boolean | Travel$OutboundFlightArgs<ExtArgs>
    ReturnFlight?: boolean | Travel$ReturnFlightArgs<ExtArgs>
    Purchase?: boolean | Travel$PurchaseArgs<ExtArgs>
    _count?: boolean | TravelCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TravelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Travel"
    objects: {
      OutboundFlight: Prisma.$BookingPayload<ExtArgs>[]
      ReturnFlight: Prisma.$BookingPayload<ExtArgs>[]
      Purchase: Prisma.$PurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_travel: number
      airline_travel: string | null
      flightNumber_travel: string | null
      origin_travel: string | null
      destination_travel: string | null
      departureDate_travel: Date | null
      arrivalDate_travel: Date | null
      price_travel: number | null
      duration_travel: number | null
    }, ExtArgs["result"]["travel"]>
    composites: {}
  }


  type TravelGetPayload<S extends boolean | null | undefined | TravelDefaultArgs> = $Result.GetResult<Prisma.$TravelPayload, S>

  type TravelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TravelFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TravelCountAggregateInputType | true
    }

  export interface TravelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Travel'], meta: { name: 'Travel' } }
    /**
     * Find zero or one Travel that matches the filter.
     * @param {TravelFindUniqueArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TravelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TravelFindUniqueArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Travel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TravelFindUniqueOrThrowArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TravelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Travel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindFirstArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TravelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelFindFirstArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Travel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindFirstOrThrowArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TravelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Travels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Travels
     * const travels = await prisma.travel.findMany()
     * 
     * // Get first 10 Travels
     * const travels = await prisma.travel.findMany({ take: 10 })
     * 
     * // Only select the `id_travel`
     * const travelWithId_travelOnly = await prisma.travel.findMany({ select: { id_travel: true } })
     * 
    **/
    findMany<T extends TravelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Travel.
     * @param {TravelCreateArgs} args - Arguments to create a Travel.
     * @example
     * // Create one Travel
     * const Travel = await prisma.travel.create({
     *   data: {
     *     // ... data to create a Travel
     *   }
     * })
     * 
    **/
    create<T extends TravelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TravelCreateArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Travels.
     *     @param {TravelCreateManyArgs} args - Arguments to create many Travels.
     *     @example
     *     // Create many Travels
     *     const travel = await prisma.travel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TravelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Travel.
     * @param {TravelDeleteArgs} args - Arguments to delete one Travel.
     * @example
     * // Delete one Travel
     * const Travel = await prisma.travel.delete({
     *   where: {
     *     // ... filter to delete one Travel
     *   }
     * })
     * 
    **/
    delete<T extends TravelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TravelDeleteArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Travel.
     * @param {TravelUpdateArgs} args - Arguments to update one Travel.
     * @example
     * // Update one Travel
     * const travel = await prisma.travel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TravelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TravelUpdateArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Travels.
     * @param {TravelDeleteManyArgs} args - Arguments to filter Travels to delete.
     * @example
     * // Delete a few Travels
     * const { count } = await prisma.travel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TravelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TravelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Travels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Travels
     * const travel = await prisma.travel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TravelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TravelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Travel.
     * @param {TravelUpsertArgs} args - Arguments to update or create a Travel.
     * @example
     * // Update or create a Travel
     * const travel = await prisma.travel.upsert({
     *   create: {
     *     // ... data to create a Travel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Travel we want to update
     *   }
     * })
    **/
    upsert<T extends TravelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TravelUpsertArgs<ExtArgs>>
    ): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Travels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelCountArgs} args - Arguments to filter Travels to count.
     * @example
     * // Count the number of Travels
     * const count = await prisma.travel.count({
     *   where: {
     *     // ... the filter for the Travels we want to count
     *   }
     * })
    **/
    count<T extends TravelCountArgs>(
      args?: Subset<T, TravelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Travel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelAggregateArgs>(args: Subset<T, TravelAggregateArgs>): Prisma.PrismaPromise<GetTravelAggregateType<T>>

    /**
     * Group by Travel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelGroupByArgs['orderBy'] }
        : { orderBy?: TravelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Travel model
   */
  readonly fields: TravelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Travel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    OutboundFlight<T extends Travel$OutboundFlightArgs<ExtArgs> = {}>(args?: Subset<T, Travel$OutboundFlightArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    ReturnFlight<T extends Travel$ReturnFlightArgs<ExtArgs> = {}>(args?: Subset<T, Travel$ReturnFlightArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    Purchase<T extends Travel$PurchaseArgs<ExtArgs> = {}>(args?: Subset<T, Travel$PurchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Travel model
   */ 
  interface TravelFieldRefs {
    readonly id_travel: FieldRef<"Travel", 'Int'>
    readonly airline_travel: FieldRef<"Travel", 'String'>
    readonly flightNumber_travel: FieldRef<"Travel", 'String'>
    readonly origin_travel: FieldRef<"Travel", 'String'>
    readonly destination_travel: FieldRef<"Travel", 'String'>
    readonly departureDate_travel: FieldRef<"Travel", 'DateTime'>
    readonly arrivalDate_travel: FieldRef<"Travel", 'DateTime'>
    readonly price_travel: FieldRef<"Travel", 'Float'>
    readonly duration_travel: FieldRef<"Travel", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Travel findUnique
   */
  export type TravelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where: TravelWhereUniqueInput
  }


  /**
   * Travel findUniqueOrThrow
   */
  export type TravelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where: TravelWhereUniqueInput
  }


  /**
   * Travel findFirst
   */
  export type TravelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Travels.
     */
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }


  /**
   * Travel findFirstOrThrow
   */
  export type TravelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Travels.
     */
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }


  /**
   * Travel findMany
   */
  export type TravelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travels to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }


  /**
   * Travel create
   */
  export type TravelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The data needed to create a Travel.
     */
    data?: XOR<TravelCreateInput, TravelUncheckedCreateInput>
  }


  /**
   * Travel createMany
   */
  export type TravelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Travels.
     */
    data: TravelCreateManyInput | TravelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Travel update
   */
  export type TravelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The data needed to update a Travel.
     */
    data: XOR<TravelUpdateInput, TravelUncheckedUpdateInput>
    /**
     * Choose, which Travel to update.
     */
    where: TravelWhereUniqueInput
  }


  /**
   * Travel updateMany
   */
  export type TravelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Travels.
     */
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyInput>
    /**
     * Filter which Travels to update
     */
    where?: TravelWhereInput
  }


  /**
   * Travel upsert
   */
  export type TravelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The filter to search for the Travel to update in case it exists.
     */
    where: TravelWhereUniqueInput
    /**
     * In case the Travel found by the `where` argument doesn't exist, create a new Travel with this data.
     */
    create: XOR<TravelCreateInput, TravelUncheckedCreateInput>
    /**
     * In case the Travel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelUpdateInput, TravelUncheckedUpdateInput>
  }


  /**
   * Travel delete
   */
  export type TravelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter which Travel to delete.
     */
    where: TravelWhereUniqueInput
  }


  /**
   * Travel deleteMany
   */
  export type TravelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Travels to delete
     */
    where?: TravelWhereInput
  }


  /**
   * Travel.OutboundFlight
   */
  export type Travel$OutboundFlightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * Travel.ReturnFlight
   */
  export type Travel$ReturnFlightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * Travel.Purchase
   */
  export type Travel$PurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }


  /**
   * Travel without action
   */
  export type TravelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
  }



  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id_booking: number | null
    idUser_booking: number | null
    idOutboundFlight_booking: number | null
    idReturnFlight_booking: number | null
    amountPeople_booking: number | null
  }

  export type BookingSumAggregateOutputType = {
    id_booking: number | null
    idUser_booking: number | null
    idOutboundFlight_booking: number | null
    idReturnFlight_booking: number | null
    amountPeople_booking: number | null
  }

  export type BookingMinAggregateOutputType = {
    id_booking: number | null
    idUser_booking: number | null
    idOutboundFlight_booking: number | null
    idReturnFlight_booking: number | null
    reservationDate_booking: Date | null
    amountPeople_booking: number | null
  }

  export type BookingMaxAggregateOutputType = {
    id_booking: number | null
    idUser_booking: number | null
    idOutboundFlight_booking: number | null
    idReturnFlight_booking: number | null
    reservationDate_booking: Date | null
    amountPeople_booking: number | null
  }

  export type BookingCountAggregateOutputType = {
    id_booking: number
    idUser_booking: number
    idOutboundFlight_booking: number
    idReturnFlight_booking: number
    reservationDate_booking: number
    amountPeople_booking: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id_booking?: true
    idUser_booking?: true
    idOutboundFlight_booking?: true
    idReturnFlight_booking?: true
    amountPeople_booking?: true
  }

  export type BookingSumAggregateInputType = {
    id_booking?: true
    idUser_booking?: true
    idOutboundFlight_booking?: true
    idReturnFlight_booking?: true
    amountPeople_booking?: true
  }

  export type BookingMinAggregateInputType = {
    id_booking?: true
    idUser_booking?: true
    idOutboundFlight_booking?: true
    idReturnFlight_booking?: true
    reservationDate_booking?: true
    amountPeople_booking?: true
  }

  export type BookingMaxAggregateInputType = {
    id_booking?: true
    idUser_booking?: true
    idOutboundFlight_booking?: true
    idReturnFlight_booking?: true
    reservationDate_booking?: true
    amountPeople_booking?: true
  }

  export type BookingCountAggregateInputType = {
    id_booking?: true
    idUser_booking?: true
    idOutboundFlight_booking?: true
    idReturnFlight_booking?: true
    reservationDate_booking?: true
    amountPeople_booking?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id_booking: number
    idUser_booking: number | null
    idOutboundFlight_booking: number | null
    idReturnFlight_booking: number | null
    reservationDate_booking: Date | null
    amountPeople_booking: number | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_booking?: boolean
    idUser_booking?: boolean
    idOutboundFlight_booking?: boolean
    idReturnFlight_booking?: boolean
    reservationDate_booking?: boolean
    amountPeople_booking?: boolean
    User?: boolean | Booking$UserArgs<ExtArgs>
    OutboundFlight?: boolean | Booking$OutboundFlightArgs<ExtArgs>
    ReturnFlight?: boolean | Booking$ReturnFlightArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id_booking?: boolean
    idUser_booking?: boolean
    idOutboundFlight_booking?: boolean
    idReturnFlight_booking?: boolean
    reservationDate_booking?: boolean
    amountPeople_booking?: boolean
  }

  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Booking$UserArgs<ExtArgs>
    OutboundFlight?: boolean | Booking$OutboundFlightArgs<ExtArgs>
    ReturnFlight?: boolean | Booking$ReturnFlightArgs<ExtArgs>
  }


  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      OutboundFlight: Prisma.$TravelPayload<ExtArgs> | null
      ReturnFlight: Prisma.$TravelPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_booking: number
      idUser_booking: number | null
      idOutboundFlight_booking: number | null
      idReturnFlight_booking: number | null
      reservationDate_booking: Date | null
      amountPeople_booking: number | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }


  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Booking that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id_booking`
     * const bookingWithId_bookingOnly = await prisma.booking.findMany({ select: { id_booking: true } })
     * 
    **/
    findMany<T extends BookingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
    **/
    create<T extends BookingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookingCreateArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bookings.
     *     @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     *     @example
     *     // Create many Bookings
     *     const booking = await prisma.booking.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
    **/
    delete<T extends BookingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
    **/
    upsert<T extends BookingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>
    ): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends Booking$UserArgs<ExtArgs> = {}>(args?: Subset<T, Booking$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    OutboundFlight<T extends Booking$OutboundFlightArgs<ExtArgs> = {}>(args?: Subset<T, Booking$OutboundFlightArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    ReturnFlight<T extends Booking$ReturnFlightArgs<ExtArgs> = {}>(args?: Subset<T, Booking$ReturnFlightArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Booking model
   */ 
  interface BookingFieldRefs {
    readonly id_booking: FieldRef<"Booking", 'Int'>
    readonly idUser_booking: FieldRef<"Booking", 'Int'>
    readonly idOutboundFlight_booking: FieldRef<"Booking", 'Int'>
    readonly idReturnFlight_booking: FieldRef<"Booking", 'Int'>
    readonly reservationDate_booking: FieldRef<"Booking", 'DateTime'>
    readonly amountPeople_booking: FieldRef<"Booking", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }


  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data?: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }


  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
  }


  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }


  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }


  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
  }


  /**
   * Booking.User
   */
  export type Booking$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Booking.OutboundFlight
   */
  export type Booking$OutboundFlightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    where?: TravelWhereInput
  }


  /**
   * Booking.ReturnFlight
   */
  export type Booking$ReturnFlightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    where?: TravelWhereInput
  }


  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookingInclude<ExtArgs> | null
  }



  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    id_purchase: number | null
    idUser_purchase: number | null
    idTravel_purchase: number | null
    amount_purchase: number | null
    total_purchase: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    id_purchase: number | null
    idUser_purchase: number | null
    idTravel_purchase: number | null
    amount_purchase: number | null
    total_purchase: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id_purchase: number | null
    idUser_purchase: number | null
    idTravel_purchase: number | null
    purchaseDate_purchase: Date | null
    amount_purchase: number | null
    total_purchase: number | null
    paymentMethod_purchase: string | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id_purchase: number | null
    idUser_purchase: number | null
    idTravel_purchase: number | null
    purchaseDate_purchase: Date | null
    amount_purchase: number | null
    total_purchase: number | null
    paymentMethod_purchase: string | null
  }

  export type PurchaseCountAggregateOutputType = {
    id_purchase: number
    idUser_purchase: number
    idTravel_purchase: number
    purchaseDate_purchase: number
    amount_purchase: number
    total_purchase: number
    paymentMethod_purchase: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    id_purchase?: true
    idUser_purchase?: true
    idTravel_purchase?: true
    amount_purchase?: true
    total_purchase?: true
  }

  export type PurchaseSumAggregateInputType = {
    id_purchase?: true
    idUser_purchase?: true
    idTravel_purchase?: true
    amount_purchase?: true
    total_purchase?: true
  }

  export type PurchaseMinAggregateInputType = {
    id_purchase?: true
    idUser_purchase?: true
    idTravel_purchase?: true
    purchaseDate_purchase?: true
    amount_purchase?: true
    total_purchase?: true
    paymentMethod_purchase?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id_purchase?: true
    idUser_purchase?: true
    idTravel_purchase?: true
    purchaseDate_purchase?: true
    amount_purchase?: true
    total_purchase?: true
    paymentMethod_purchase?: true
  }

  export type PurchaseCountAggregateInputType = {
    id_purchase?: true
    idUser_purchase?: true
    idTravel_purchase?: true
    purchaseDate_purchase?: true
    amount_purchase?: true
    total_purchase?: true
    paymentMethod_purchase?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id_purchase: number
    idUser_purchase: number | null
    idTravel_purchase: number | null
    purchaseDate_purchase: Date | null
    amount_purchase: number | null
    total_purchase: number | null
    paymentMethod_purchase: string | null
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_purchase?: boolean
    idUser_purchase?: boolean
    idTravel_purchase?: boolean
    purchaseDate_purchase?: boolean
    amount_purchase?: boolean
    total_purchase?: boolean
    paymentMethod_purchase?: boolean
    User?: boolean | Purchase$UserArgs<ExtArgs>
    Travel?: boolean | Purchase$TravelArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id_purchase?: boolean
    idUser_purchase?: boolean
    idTravel_purchase?: boolean
    purchaseDate_purchase?: boolean
    amount_purchase?: boolean
    total_purchase?: boolean
    paymentMethod_purchase?: boolean
  }

  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Purchase$UserArgs<ExtArgs>
    Travel?: boolean | Purchase$TravelArgs<ExtArgs>
  }


  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Travel: Prisma.$TravelPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_purchase: number
      idUser_purchase: number | null
      idTravel_purchase: number | null
      purchaseDate_purchase: Date | null
      amount_purchase: number | null
      total_purchase: number | null
      paymentMethod_purchase: string | null
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }


  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PurchaseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Purchase that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PurchaseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id_purchase`
     * const purchaseWithId_purchaseOnly = await prisma.purchase.findMany({ select: { id_purchase: true } })
     * 
    **/
    findMany<T extends PurchaseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
    **/
    create<T extends PurchaseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Purchases.
     *     @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     *     @example
     *     // Create many Purchases
     *     const purchase = await prisma.purchase.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PurchaseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
    **/
    delete<T extends PurchaseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PurchaseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PurchaseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PurchaseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
    **/
    upsert<T extends PurchaseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>
    ): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends Purchase$UserArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Travel<T extends Purchase$TravelArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$TravelArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Purchase model
   */ 
  interface PurchaseFieldRefs {
    readonly id_purchase: FieldRef<"Purchase", 'Int'>
    readonly idUser_purchase: FieldRef<"Purchase", 'Int'>
    readonly idTravel_purchase: FieldRef<"Purchase", 'Int'>
    readonly purchaseDate_purchase: FieldRef<"Purchase", 'DateTime'>
    readonly amount_purchase: FieldRef<"Purchase", 'Int'>
    readonly total_purchase: FieldRef<"Purchase", 'Float'>
    readonly paymentMethod_purchase: FieldRef<"Purchase", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }


  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }


  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }


  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }


  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }


  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data?: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }


  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }


  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
  }


  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }


  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }


  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
  }


  /**
   * Purchase.User
   */
  export type Purchase$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Purchase.Travel
   */
  export type Purchase$TravelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TravelInclude<ExtArgs> | null
    where?: TravelWhereInput
  }


  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PurchaseInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id_user: 'id_user',
    name_user: 'name_user',
    lastName_user: 'lastName_user',
    age_user: 'age_user',
    email_user: 'email_user',
    password_user: 'password_user'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TravelScalarFieldEnum: {
    id_travel: 'id_travel',
    airline_travel: 'airline_travel',
    flightNumber_travel: 'flightNumber_travel',
    origin_travel: 'origin_travel',
    destination_travel: 'destination_travel',
    departureDate_travel: 'departureDate_travel',
    arrivalDate_travel: 'arrivalDate_travel',
    price_travel: 'price_travel',
    duration_travel: 'duration_travel'
  };

  export type TravelScalarFieldEnum = (typeof TravelScalarFieldEnum)[keyof typeof TravelScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id_booking: 'id_booking',
    idUser_booking: 'idUser_booking',
    idOutboundFlight_booking: 'idOutboundFlight_booking',
    idReturnFlight_booking: 'idReturnFlight_booking',
    reservationDate_booking: 'reservationDate_booking',
    amountPeople_booking: 'amountPeople_booking'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id_purchase: 'id_purchase',
    idUser_purchase: 'idUser_purchase',
    idTravel_purchase: 'idTravel_purchase',
    purchaseDate_purchase: 'purchaseDate_purchase',
    amount_purchase: 'amount_purchase',
    total_purchase: 'total_purchase',
    paymentMethod_purchase: 'paymentMethod_purchase'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id_user?: IntFilter<"User"> | number
    name_user?: StringNullableFilter<"User"> | string | null
    lastName_user?: StringNullableFilter<"User"> | string | null
    age_user?: IntNullableFilter<"User"> | number | null
    email_user?: StringFilter<"User"> | string
    password_user?: StringFilter<"User"> | string
    Booking?: BookingListRelationFilter
    Purchase?: PurchaseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id_user?: SortOrder
    name_user?: SortOrderInput | SortOrder
    lastName_user?: SortOrderInput | SortOrder
    age_user?: SortOrderInput | SortOrder
    email_user?: SortOrder
    password_user?: SortOrder
    Booking?: BookingOrderByRelationAggregateInput
    Purchase?: PurchaseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id_user?: number
    email_user?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name_user?: StringNullableFilter<"User"> | string | null
    lastName_user?: StringNullableFilter<"User"> | string | null
    age_user?: IntNullableFilter<"User"> | number | null
    password_user?: StringFilter<"User"> | string
    Booking?: BookingListRelationFilter
    Purchase?: PurchaseListRelationFilter
  }, "id_user" | "email_user">

  export type UserOrderByWithAggregationInput = {
    id_user?: SortOrder
    name_user?: SortOrderInput | SortOrder
    lastName_user?: SortOrderInput | SortOrder
    age_user?: SortOrderInput | SortOrder
    email_user?: SortOrder
    password_user?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"User"> | number
    name_user?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName_user?: StringNullableWithAggregatesFilter<"User"> | string | null
    age_user?: IntNullableWithAggregatesFilter<"User"> | number | null
    email_user?: StringWithAggregatesFilter<"User"> | string
    password_user?: StringWithAggregatesFilter<"User"> | string
  }

  export type TravelWhereInput = {
    AND?: TravelWhereInput | TravelWhereInput[]
    OR?: TravelWhereInput[]
    NOT?: TravelWhereInput | TravelWhereInput[]
    id_travel?: IntFilter<"Travel"> | number
    airline_travel?: StringNullableFilter<"Travel"> | string | null
    flightNumber_travel?: StringNullableFilter<"Travel"> | string | null
    origin_travel?: StringNullableFilter<"Travel"> | string | null
    destination_travel?: StringNullableFilter<"Travel"> | string | null
    departureDate_travel?: DateTimeNullableFilter<"Travel"> | Date | string | null
    arrivalDate_travel?: DateTimeNullableFilter<"Travel"> | Date | string | null
    price_travel?: FloatNullableFilter<"Travel"> | number | null
    duration_travel?: IntNullableFilter<"Travel"> | number | null
    OutboundFlight?: BookingListRelationFilter
    ReturnFlight?: BookingListRelationFilter
    Purchase?: PurchaseListRelationFilter
  }

  export type TravelOrderByWithRelationInput = {
    id_travel?: SortOrder
    airline_travel?: SortOrderInput | SortOrder
    flightNumber_travel?: SortOrderInput | SortOrder
    origin_travel?: SortOrderInput | SortOrder
    destination_travel?: SortOrderInput | SortOrder
    departureDate_travel?: SortOrderInput | SortOrder
    arrivalDate_travel?: SortOrderInput | SortOrder
    price_travel?: SortOrderInput | SortOrder
    duration_travel?: SortOrderInput | SortOrder
    OutboundFlight?: BookingOrderByRelationAggregateInput
    ReturnFlight?: BookingOrderByRelationAggregateInput
    Purchase?: PurchaseOrderByRelationAggregateInput
  }

  export type TravelWhereUniqueInput = Prisma.AtLeast<{
    id_travel?: number
    AND?: TravelWhereInput | TravelWhereInput[]
    OR?: TravelWhereInput[]
    NOT?: TravelWhereInput | TravelWhereInput[]
    airline_travel?: StringNullableFilter<"Travel"> | string | null
    flightNumber_travel?: StringNullableFilter<"Travel"> | string | null
    origin_travel?: StringNullableFilter<"Travel"> | string | null
    destination_travel?: StringNullableFilter<"Travel"> | string | null
    departureDate_travel?: DateTimeNullableFilter<"Travel"> | Date | string | null
    arrivalDate_travel?: DateTimeNullableFilter<"Travel"> | Date | string | null
    price_travel?: FloatNullableFilter<"Travel"> | number | null
    duration_travel?: IntNullableFilter<"Travel"> | number | null
    OutboundFlight?: BookingListRelationFilter
    ReturnFlight?: BookingListRelationFilter
    Purchase?: PurchaseListRelationFilter
  }, "id_travel">

  export type TravelOrderByWithAggregationInput = {
    id_travel?: SortOrder
    airline_travel?: SortOrderInput | SortOrder
    flightNumber_travel?: SortOrderInput | SortOrder
    origin_travel?: SortOrderInput | SortOrder
    destination_travel?: SortOrderInput | SortOrder
    departureDate_travel?: SortOrderInput | SortOrder
    arrivalDate_travel?: SortOrderInput | SortOrder
    price_travel?: SortOrderInput | SortOrder
    duration_travel?: SortOrderInput | SortOrder
    _count?: TravelCountOrderByAggregateInput
    _avg?: TravelAvgOrderByAggregateInput
    _max?: TravelMaxOrderByAggregateInput
    _min?: TravelMinOrderByAggregateInput
    _sum?: TravelSumOrderByAggregateInput
  }

  export type TravelScalarWhereWithAggregatesInput = {
    AND?: TravelScalarWhereWithAggregatesInput | TravelScalarWhereWithAggregatesInput[]
    OR?: TravelScalarWhereWithAggregatesInput[]
    NOT?: TravelScalarWhereWithAggregatesInput | TravelScalarWhereWithAggregatesInput[]
    id_travel?: IntWithAggregatesFilter<"Travel"> | number
    airline_travel?: StringNullableWithAggregatesFilter<"Travel"> | string | null
    flightNumber_travel?: StringNullableWithAggregatesFilter<"Travel"> | string | null
    origin_travel?: StringNullableWithAggregatesFilter<"Travel"> | string | null
    destination_travel?: StringNullableWithAggregatesFilter<"Travel"> | string | null
    departureDate_travel?: DateTimeNullableWithAggregatesFilter<"Travel"> | Date | string | null
    arrivalDate_travel?: DateTimeNullableWithAggregatesFilter<"Travel"> | Date | string | null
    price_travel?: FloatNullableWithAggregatesFilter<"Travel"> | number | null
    duration_travel?: IntNullableWithAggregatesFilter<"Travel"> | number | null
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id_booking?: IntFilter<"Booking"> | number
    idUser_booking?: IntNullableFilter<"Booking"> | number | null
    idOutboundFlight_booking?: IntNullableFilter<"Booking"> | number | null
    idReturnFlight_booking?: IntNullableFilter<"Booking"> | number | null
    reservationDate_booking?: DateTimeNullableFilter<"Booking"> | Date | string | null
    amountPeople_booking?: IntNullableFilter<"Booking"> | number | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    OutboundFlight?: XOR<TravelNullableRelationFilter, TravelWhereInput> | null
    ReturnFlight?: XOR<TravelNullableRelationFilter, TravelWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id_booking?: SortOrder
    idUser_booking?: SortOrderInput | SortOrder
    idOutboundFlight_booking?: SortOrderInput | SortOrder
    idReturnFlight_booking?: SortOrderInput | SortOrder
    reservationDate_booking?: SortOrderInput | SortOrder
    amountPeople_booking?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    OutboundFlight?: TravelOrderByWithRelationInput
    ReturnFlight?: TravelOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id_booking?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    idUser_booking?: IntNullableFilter<"Booking"> | number | null
    idOutboundFlight_booking?: IntNullableFilter<"Booking"> | number | null
    idReturnFlight_booking?: IntNullableFilter<"Booking"> | number | null
    reservationDate_booking?: DateTimeNullableFilter<"Booking"> | Date | string | null
    amountPeople_booking?: IntNullableFilter<"Booking"> | number | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    OutboundFlight?: XOR<TravelNullableRelationFilter, TravelWhereInput> | null
    ReturnFlight?: XOR<TravelNullableRelationFilter, TravelWhereInput> | null
  }, "id_booking">

  export type BookingOrderByWithAggregationInput = {
    id_booking?: SortOrder
    idUser_booking?: SortOrderInput | SortOrder
    idOutboundFlight_booking?: SortOrderInput | SortOrder
    idReturnFlight_booking?: SortOrderInput | SortOrder
    reservationDate_booking?: SortOrderInput | SortOrder
    amountPeople_booking?: SortOrderInput | SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id_booking?: IntWithAggregatesFilter<"Booking"> | number
    idUser_booking?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    idOutboundFlight_booking?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    idReturnFlight_booking?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    reservationDate_booking?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    amountPeople_booking?: IntNullableWithAggregatesFilter<"Booking"> | number | null
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id_purchase?: IntFilter<"Purchase"> | number
    idUser_purchase?: IntNullableFilter<"Purchase"> | number | null
    idTravel_purchase?: IntNullableFilter<"Purchase"> | number | null
    purchaseDate_purchase?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    amount_purchase?: IntNullableFilter<"Purchase"> | number | null
    total_purchase?: FloatNullableFilter<"Purchase"> | number | null
    paymentMethod_purchase?: StringNullableFilter<"Purchase"> | string | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Travel?: XOR<TravelNullableRelationFilter, TravelWhereInput> | null
  }

  export type PurchaseOrderByWithRelationInput = {
    id_purchase?: SortOrder
    idUser_purchase?: SortOrderInput | SortOrder
    idTravel_purchase?: SortOrderInput | SortOrder
    purchaseDate_purchase?: SortOrderInput | SortOrder
    amount_purchase?: SortOrderInput | SortOrder
    total_purchase?: SortOrderInput | SortOrder
    paymentMethod_purchase?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    Travel?: TravelOrderByWithRelationInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id_purchase?: number
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    idUser_purchase?: IntNullableFilter<"Purchase"> | number | null
    idTravel_purchase?: IntNullableFilter<"Purchase"> | number | null
    purchaseDate_purchase?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    amount_purchase?: IntNullableFilter<"Purchase"> | number | null
    total_purchase?: FloatNullableFilter<"Purchase"> | number | null
    paymentMethod_purchase?: StringNullableFilter<"Purchase"> | string | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Travel?: XOR<TravelNullableRelationFilter, TravelWhereInput> | null
  }, "id_purchase">

  export type PurchaseOrderByWithAggregationInput = {
    id_purchase?: SortOrder
    idUser_purchase?: SortOrderInput | SortOrder
    idTravel_purchase?: SortOrderInput | SortOrder
    purchaseDate_purchase?: SortOrderInput | SortOrder
    amount_purchase?: SortOrderInput | SortOrder
    total_purchase?: SortOrderInput | SortOrder
    paymentMethod_purchase?: SortOrderInput | SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id_purchase?: IntWithAggregatesFilter<"Purchase"> | number
    idUser_purchase?: IntNullableWithAggregatesFilter<"Purchase"> | number | null
    idTravel_purchase?: IntNullableWithAggregatesFilter<"Purchase"> | number | null
    purchaseDate_purchase?: DateTimeNullableWithAggregatesFilter<"Purchase"> | Date | string | null
    amount_purchase?: IntNullableWithAggregatesFilter<"Purchase"> | number | null
    total_purchase?: FloatNullableWithAggregatesFilter<"Purchase"> | number | null
    paymentMethod_purchase?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
  }

  export type UserCreateInput = {
    name_user?: string | null
    lastName_user?: string | null
    age_user?: number | null
    email_user: string
    password_user: string
    Booking?: BookingCreateNestedManyWithoutUserInput
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id_user?: number
    name_user?: string | null
    lastName_user?: string | null
    age_user?: number | null
    email_user: string
    password_user: string
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    lastName_user?: NullableStringFieldUpdateOperationsInput | string | null
    age_user?: NullableIntFieldUpdateOperationsInput | number | null
    email_user?: StringFieldUpdateOperationsInput | string
    password_user?: StringFieldUpdateOperationsInput | string
    Booking?: BookingUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    lastName_user?: NullableStringFieldUpdateOperationsInput | string | null
    age_user?: NullableIntFieldUpdateOperationsInput | number | null
    email_user?: StringFieldUpdateOperationsInput | string
    password_user?: StringFieldUpdateOperationsInput | string
    Booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id_user?: number
    name_user?: string | null
    lastName_user?: string | null
    age_user?: number | null
    email_user: string
    password_user: string
  }

  export type UserUpdateManyMutationInput = {
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    lastName_user?: NullableStringFieldUpdateOperationsInput | string | null
    age_user?: NullableIntFieldUpdateOperationsInput | number | null
    email_user?: StringFieldUpdateOperationsInput | string
    password_user?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    lastName_user?: NullableStringFieldUpdateOperationsInput | string | null
    age_user?: NullableIntFieldUpdateOperationsInput | number | null
    email_user?: StringFieldUpdateOperationsInput | string
    password_user?: StringFieldUpdateOperationsInput | string
  }

  export type TravelCreateInput = {
    airline_travel?: string | null
    flightNumber_travel?: string | null
    origin_travel?: string | null
    destination_travel?: string | null
    departureDate_travel?: Date | string | null
    arrivalDate_travel?: Date | string | null
    price_travel?: number | null
    duration_travel?: number | null
    OutboundFlight?: BookingCreateNestedManyWithoutOutboundFlightInput
    ReturnFlight?: BookingCreateNestedManyWithoutReturnFlightInput
    Purchase?: PurchaseCreateNestedManyWithoutTravelInput
  }

  export type TravelUncheckedCreateInput = {
    id_travel?: number
    airline_travel?: string | null
    flightNumber_travel?: string | null
    origin_travel?: string | null
    destination_travel?: string | null
    departureDate_travel?: Date | string | null
    arrivalDate_travel?: Date | string | null
    price_travel?: number | null
    duration_travel?: number | null
    OutboundFlight?: BookingUncheckedCreateNestedManyWithoutOutboundFlightInput
    ReturnFlight?: BookingUncheckedCreateNestedManyWithoutReturnFlightInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutTravelInput
  }

  export type TravelUpdateInput = {
    airline_travel?: NullableStringFieldUpdateOperationsInput | string | null
    flightNumber_travel?: NullableStringFieldUpdateOperationsInput | string | null
    origin_travel?: NullableStringFieldUpdateOperationsInput | string | null
    destination_travel?: NullableStringFieldUpdateOperationsInput | string | null
    departureDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_travel?: NullableFloatFieldUpdateOperationsInput | number | null
    duration_travel?: NullableIntFieldUpdateOperationsInput | number | null
    OutboundFlight?: BookingUpdateManyWithoutOutboundFlightNestedInput
    ReturnFlight?: BookingUpdateManyWithoutReturnFlightNestedInput
    Purchase?: PurchaseUpdateManyWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateInput = {
    id_travel?: IntFieldUpdateOperationsInput | number
    airline_travel?: NullableStringFieldUpdateOperationsInput | string | null
    flightNumber_travel?: NullableStringFieldUpdateOperationsInput | string | null
    origin_travel?: NullableStringFieldUpdateOperationsInput | string | null
    destination_travel?: NullableStringFieldUpdateOperationsInput | string | null
    departureDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_travel?: NullableFloatFieldUpdateOperationsInput | number | null
    duration_travel?: NullableIntFieldUpdateOperationsInput | number | null
    OutboundFlight?: BookingUncheckedUpdateManyWithoutOutboundFlightNestedInput
    ReturnFlight?: BookingUncheckedUpdateManyWithoutReturnFlightNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutTravelNestedInput
  }

  export type TravelCreateManyInput = {
    id_travel?: number
    airline_travel?: string | null
    flightNumber_travel?: string | null
    origin_travel?: string | null
    destination_travel?: string | null
    departureDate_travel?: Date | string | null
    arrivalDate_travel?: Date | string | null
    price_travel?: number | null
    duration_travel?: number | null
  }

  export type TravelUpdateManyMutationInput = {
    airline_travel?: NullableStringFieldUpdateOperationsInput | string | null
    flightNumber_travel?: NullableStringFieldUpdateOperationsInput | string | null
    origin_travel?: NullableStringFieldUpdateOperationsInput | string | null
    destination_travel?: NullableStringFieldUpdateOperationsInput | string | null
    departureDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_travel?: NullableFloatFieldUpdateOperationsInput | number | null
    duration_travel?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TravelUncheckedUpdateManyInput = {
    id_travel?: IntFieldUpdateOperationsInput | number
    airline_travel?: NullableStringFieldUpdateOperationsInput | string | null
    flightNumber_travel?: NullableStringFieldUpdateOperationsInput | string | null
    origin_travel?: NullableStringFieldUpdateOperationsInput | string | null
    destination_travel?: NullableStringFieldUpdateOperationsInput | string | null
    departureDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_travel?: NullableFloatFieldUpdateOperationsInput | number | null
    duration_travel?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingCreateInput = {
    reservationDate_booking?: Date | string | null
    amountPeople_booking?: number | null
    User?: UserCreateNestedOneWithoutBookingInput
    OutboundFlight?: TravelCreateNestedOneWithoutOutboundFlightInput
    ReturnFlight?: TravelCreateNestedOneWithoutReturnFlightInput
  }

  export type BookingUncheckedCreateInput = {
    id_booking?: number
    idUser_booking?: number | null
    idOutboundFlight_booking?: number | null
    idReturnFlight_booking?: number | null
    reservationDate_booking?: Date | string | null
    amountPeople_booking?: number | null
  }

  export type BookingUpdateInput = {
    reservationDate_booking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPeople_booking?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUpdateOneWithoutBookingNestedInput
    OutboundFlight?: TravelUpdateOneWithoutOutboundFlightNestedInput
    ReturnFlight?: TravelUpdateOneWithoutReturnFlightNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id_booking?: IntFieldUpdateOperationsInput | number
    idUser_booking?: NullableIntFieldUpdateOperationsInput | number | null
    idOutboundFlight_booking?: NullableIntFieldUpdateOperationsInput | number | null
    idReturnFlight_booking?: NullableIntFieldUpdateOperationsInput | number | null
    reservationDate_booking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPeople_booking?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingCreateManyInput = {
    id_booking?: number
    idUser_booking?: number | null
    idOutboundFlight_booking?: number | null
    idReturnFlight_booking?: number | null
    reservationDate_booking?: Date | string | null
    amountPeople_booking?: number | null
  }

  export type BookingUpdateManyMutationInput = {
    reservationDate_booking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPeople_booking?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingUncheckedUpdateManyInput = {
    id_booking?: IntFieldUpdateOperationsInput | number
    idUser_booking?: NullableIntFieldUpdateOperationsInput | number | null
    idOutboundFlight_booking?: NullableIntFieldUpdateOperationsInput | number | null
    idReturnFlight_booking?: NullableIntFieldUpdateOperationsInput | number | null
    reservationDate_booking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPeople_booking?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PurchaseCreateInput = {
    purchaseDate_purchase?: Date | string | null
    amount_purchase?: number | null
    total_purchase?: number | null
    paymentMethod_purchase?: string | null
    User?: UserCreateNestedOneWithoutPurchaseInput
    Travel?: TravelCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateInput = {
    id_purchase?: number
    idUser_purchase?: number | null
    idTravel_purchase?: number | null
    purchaseDate_purchase?: Date | string | null
    amount_purchase?: number | null
    total_purchase?: number | null
    paymentMethod_purchase?: string | null
  }

  export type PurchaseUpdateInput = {
    purchaseDate_purchase?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    total_purchase?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod_purchase?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutPurchaseNestedInput
    Travel?: TravelUpdateOneWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id_purchase?: IntFieldUpdateOperationsInput | number
    idUser_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    idTravel_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate_purchase?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    total_purchase?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod_purchase?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseCreateManyInput = {
    id_purchase?: number
    idUser_purchase?: number | null
    idTravel_purchase?: number | null
    purchaseDate_purchase?: Date | string | null
    amount_purchase?: number | null
    total_purchase?: number | null
    paymentMethod_purchase?: string | null
  }

  export type PurchaseUpdateManyMutationInput = {
    purchaseDate_purchase?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    total_purchase?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod_purchase?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id_purchase?: IntFieldUpdateOperationsInput | number
    idUser_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    idTravel_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate_purchase?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    total_purchase?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod_purchase?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id_user?: SortOrder
    name_user?: SortOrder
    lastName_user?: SortOrder
    age_user?: SortOrder
    email_user?: SortOrder
    password_user?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id_user?: SortOrder
    age_user?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id_user?: SortOrder
    name_user?: SortOrder
    lastName_user?: SortOrder
    age_user?: SortOrder
    email_user?: SortOrder
    password_user?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id_user?: SortOrder
    name_user?: SortOrder
    lastName_user?: SortOrder
    age_user?: SortOrder
    email_user?: SortOrder
    password_user?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id_user?: SortOrder
    age_user?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TravelCountOrderByAggregateInput = {
    id_travel?: SortOrder
    airline_travel?: SortOrder
    flightNumber_travel?: SortOrder
    origin_travel?: SortOrder
    destination_travel?: SortOrder
    departureDate_travel?: SortOrder
    arrivalDate_travel?: SortOrder
    price_travel?: SortOrder
    duration_travel?: SortOrder
  }

  export type TravelAvgOrderByAggregateInput = {
    id_travel?: SortOrder
    price_travel?: SortOrder
    duration_travel?: SortOrder
  }

  export type TravelMaxOrderByAggregateInput = {
    id_travel?: SortOrder
    airline_travel?: SortOrder
    flightNumber_travel?: SortOrder
    origin_travel?: SortOrder
    destination_travel?: SortOrder
    departureDate_travel?: SortOrder
    arrivalDate_travel?: SortOrder
    price_travel?: SortOrder
    duration_travel?: SortOrder
  }

  export type TravelMinOrderByAggregateInput = {
    id_travel?: SortOrder
    airline_travel?: SortOrder
    flightNumber_travel?: SortOrder
    origin_travel?: SortOrder
    destination_travel?: SortOrder
    departureDate_travel?: SortOrder
    arrivalDate_travel?: SortOrder
    price_travel?: SortOrder
    duration_travel?: SortOrder
  }

  export type TravelSumOrderByAggregateInput = {
    id_travel?: SortOrder
    price_travel?: SortOrder
    duration_travel?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TravelNullableRelationFilter = {
    is?: TravelWhereInput | null
    isNot?: TravelWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    id_booking?: SortOrder
    idUser_booking?: SortOrder
    idOutboundFlight_booking?: SortOrder
    idReturnFlight_booking?: SortOrder
    reservationDate_booking?: SortOrder
    amountPeople_booking?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id_booking?: SortOrder
    idUser_booking?: SortOrder
    idOutboundFlight_booking?: SortOrder
    idReturnFlight_booking?: SortOrder
    amountPeople_booking?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id_booking?: SortOrder
    idUser_booking?: SortOrder
    idOutboundFlight_booking?: SortOrder
    idReturnFlight_booking?: SortOrder
    reservationDate_booking?: SortOrder
    amountPeople_booking?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id_booking?: SortOrder
    idUser_booking?: SortOrder
    idOutboundFlight_booking?: SortOrder
    idReturnFlight_booking?: SortOrder
    reservationDate_booking?: SortOrder
    amountPeople_booking?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id_booking?: SortOrder
    idUser_booking?: SortOrder
    idOutboundFlight_booking?: SortOrder
    idReturnFlight_booking?: SortOrder
    amountPeople_booking?: SortOrder
  }

  export type PurchaseCountOrderByAggregateInput = {
    id_purchase?: SortOrder
    idUser_purchase?: SortOrder
    idTravel_purchase?: SortOrder
    purchaseDate_purchase?: SortOrder
    amount_purchase?: SortOrder
    total_purchase?: SortOrder
    paymentMethod_purchase?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    id_purchase?: SortOrder
    idUser_purchase?: SortOrder
    idTravel_purchase?: SortOrder
    amount_purchase?: SortOrder
    total_purchase?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id_purchase?: SortOrder
    idUser_purchase?: SortOrder
    idTravel_purchase?: SortOrder
    purchaseDate_purchase?: SortOrder
    amount_purchase?: SortOrder
    total_purchase?: SortOrder
    paymentMethod_purchase?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id_purchase?: SortOrder
    idUser_purchase?: SortOrder
    idTravel_purchase?: SortOrder
    purchaseDate_purchase?: SortOrder
    amount_purchase?: SortOrder
    total_purchase?: SortOrder
    paymentMethod_purchase?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    id_purchase?: SortOrder
    idUser_purchase?: SortOrder
    idTravel_purchase?: SortOrder
    amount_purchase?: SortOrder
    total_purchase?: SortOrder
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutOutboundFlightInput = {
    create?: XOR<BookingCreateWithoutOutboundFlightInput, BookingUncheckedCreateWithoutOutboundFlightInput> | BookingCreateWithoutOutboundFlightInput[] | BookingUncheckedCreateWithoutOutboundFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOutboundFlightInput | BookingCreateOrConnectWithoutOutboundFlightInput[]
    createMany?: BookingCreateManyOutboundFlightInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutReturnFlightInput = {
    create?: XOR<BookingCreateWithoutReturnFlightInput, BookingUncheckedCreateWithoutReturnFlightInput> | BookingCreateWithoutReturnFlightInput[] | BookingUncheckedCreateWithoutReturnFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutReturnFlightInput | BookingCreateOrConnectWithoutReturnFlightInput[]
    createMany?: BookingCreateManyReturnFlightInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutTravelInput = {
    create?: XOR<PurchaseCreateWithoutTravelInput, PurchaseUncheckedCreateWithoutTravelInput> | PurchaseCreateWithoutTravelInput[] | PurchaseUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutTravelInput | PurchaseCreateOrConnectWithoutTravelInput[]
    createMany?: PurchaseCreateManyTravelInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutOutboundFlightInput = {
    create?: XOR<BookingCreateWithoutOutboundFlightInput, BookingUncheckedCreateWithoutOutboundFlightInput> | BookingCreateWithoutOutboundFlightInput[] | BookingUncheckedCreateWithoutOutboundFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOutboundFlightInput | BookingCreateOrConnectWithoutOutboundFlightInput[]
    createMany?: BookingCreateManyOutboundFlightInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutReturnFlightInput = {
    create?: XOR<BookingCreateWithoutReturnFlightInput, BookingUncheckedCreateWithoutReturnFlightInput> | BookingCreateWithoutReturnFlightInput[] | BookingUncheckedCreateWithoutReturnFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutReturnFlightInput | BookingCreateOrConnectWithoutReturnFlightInput[]
    createMany?: BookingCreateManyReturnFlightInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutTravelInput = {
    create?: XOR<PurchaseCreateWithoutTravelInput, PurchaseUncheckedCreateWithoutTravelInput> | PurchaseCreateWithoutTravelInput[] | PurchaseUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutTravelInput | PurchaseCreateOrConnectWithoutTravelInput[]
    createMany?: PurchaseCreateManyTravelInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingUpdateManyWithoutOutboundFlightNestedInput = {
    create?: XOR<BookingCreateWithoutOutboundFlightInput, BookingUncheckedCreateWithoutOutboundFlightInput> | BookingCreateWithoutOutboundFlightInput[] | BookingUncheckedCreateWithoutOutboundFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOutboundFlightInput | BookingCreateOrConnectWithoutOutboundFlightInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutOutboundFlightInput | BookingUpsertWithWhereUniqueWithoutOutboundFlightInput[]
    createMany?: BookingCreateManyOutboundFlightInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutOutboundFlightInput | BookingUpdateWithWhereUniqueWithoutOutboundFlightInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutOutboundFlightInput | BookingUpdateManyWithWhereWithoutOutboundFlightInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutReturnFlightNestedInput = {
    create?: XOR<BookingCreateWithoutReturnFlightInput, BookingUncheckedCreateWithoutReturnFlightInput> | BookingCreateWithoutReturnFlightInput[] | BookingUncheckedCreateWithoutReturnFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutReturnFlightInput | BookingCreateOrConnectWithoutReturnFlightInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutReturnFlightInput | BookingUpsertWithWhereUniqueWithoutReturnFlightInput[]
    createMany?: BookingCreateManyReturnFlightInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutReturnFlightInput | BookingUpdateWithWhereUniqueWithoutReturnFlightInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutReturnFlightInput | BookingUpdateManyWithWhereWithoutReturnFlightInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutTravelNestedInput = {
    create?: XOR<PurchaseCreateWithoutTravelInput, PurchaseUncheckedCreateWithoutTravelInput> | PurchaseCreateWithoutTravelInput[] | PurchaseUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutTravelInput | PurchaseCreateOrConnectWithoutTravelInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutTravelInput | PurchaseUpsertWithWhereUniqueWithoutTravelInput[]
    createMany?: PurchaseCreateManyTravelInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutTravelInput | PurchaseUpdateWithWhereUniqueWithoutTravelInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutTravelInput | PurchaseUpdateManyWithWhereWithoutTravelInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutOutboundFlightNestedInput = {
    create?: XOR<BookingCreateWithoutOutboundFlightInput, BookingUncheckedCreateWithoutOutboundFlightInput> | BookingCreateWithoutOutboundFlightInput[] | BookingUncheckedCreateWithoutOutboundFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOutboundFlightInput | BookingCreateOrConnectWithoutOutboundFlightInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutOutboundFlightInput | BookingUpsertWithWhereUniqueWithoutOutboundFlightInput[]
    createMany?: BookingCreateManyOutboundFlightInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutOutboundFlightInput | BookingUpdateWithWhereUniqueWithoutOutboundFlightInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutOutboundFlightInput | BookingUpdateManyWithWhereWithoutOutboundFlightInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutReturnFlightNestedInput = {
    create?: XOR<BookingCreateWithoutReturnFlightInput, BookingUncheckedCreateWithoutReturnFlightInput> | BookingCreateWithoutReturnFlightInput[] | BookingUncheckedCreateWithoutReturnFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutReturnFlightInput | BookingCreateOrConnectWithoutReturnFlightInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutReturnFlightInput | BookingUpsertWithWhereUniqueWithoutReturnFlightInput[]
    createMany?: BookingCreateManyReturnFlightInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutReturnFlightInput | BookingUpdateWithWhereUniqueWithoutReturnFlightInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutReturnFlightInput | BookingUpdateManyWithWhereWithoutReturnFlightInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutTravelNestedInput = {
    create?: XOR<PurchaseCreateWithoutTravelInput, PurchaseUncheckedCreateWithoutTravelInput> | PurchaseCreateWithoutTravelInput[] | PurchaseUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutTravelInput | PurchaseCreateOrConnectWithoutTravelInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutTravelInput | PurchaseUpsertWithWhereUniqueWithoutTravelInput[]
    createMany?: PurchaseCreateManyTravelInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutTravelInput | PurchaseUpdateWithWhereUniqueWithoutTravelInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutTravelInput | PurchaseUpdateManyWithWhereWithoutTravelInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    connect?: UserWhereUniqueInput
  }

  export type TravelCreateNestedOneWithoutOutboundFlightInput = {
    create?: XOR<TravelCreateWithoutOutboundFlightInput, TravelUncheckedCreateWithoutOutboundFlightInput>
    connectOrCreate?: TravelCreateOrConnectWithoutOutboundFlightInput
    connect?: TravelWhereUniqueInput
  }

  export type TravelCreateNestedOneWithoutReturnFlightInput = {
    create?: XOR<TravelCreateWithoutReturnFlightInput, TravelUncheckedCreateWithoutReturnFlightInput>
    connectOrCreate?: TravelCreateOrConnectWithoutReturnFlightInput
    connect?: TravelWhereUniqueInput
  }

  export type UserUpdateOneWithoutBookingNestedInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    upsert?: UserUpsertWithoutBookingInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingInput, UserUpdateWithoutBookingInput>, UserUncheckedUpdateWithoutBookingInput>
  }

  export type TravelUpdateOneWithoutOutboundFlightNestedInput = {
    create?: XOR<TravelCreateWithoutOutboundFlightInput, TravelUncheckedCreateWithoutOutboundFlightInput>
    connectOrCreate?: TravelCreateOrConnectWithoutOutboundFlightInput
    upsert?: TravelUpsertWithoutOutboundFlightInput
    disconnect?: TravelWhereInput | boolean
    delete?: TravelWhereInput | boolean
    connect?: TravelWhereUniqueInput
    update?: XOR<XOR<TravelUpdateToOneWithWhereWithoutOutboundFlightInput, TravelUpdateWithoutOutboundFlightInput>, TravelUncheckedUpdateWithoutOutboundFlightInput>
  }

  export type TravelUpdateOneWithoutReturnFlightNestedInput = {
    create?: XOR<TravelCreateWithoutReturnFlightInput, TravelUncheckedCreateWithoutReturnFlightInput>
    connectOrCreate?: TravelCreateOrConnectWithoutReturnFlightInput
    upsert?: TravelUpsertWithoutReturnFlightInput
    disconnect?: TravelWhereInput | boolean
    delete?: TravelWhereInput | boolean
    connect?: TravelWhereUniqueInput
    update?: XOR<XOR<TravelUpdateToOneWithWhereWithoutReturnFlightInput, TravelUpdateWithoutReturnFlightInput>, TravelUncheckedUpdateWithoutReturnFlightInput>
  }

  export type UserCreateNestedOneWithoutPurchaseInput = {
    create?: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseInput
    connect?: UserWhereUniqueInput
  }

  export type TravelCreateNestedOneWithoutPurchaseInput = {
    create?: XOR<TravelCreateWithoutPurchaseInput, TravelUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: TravelCreateOrConnectWithoutPurchaseInput
    connect?: TravelWhereUniqueInput
  }

  export type UserUpdateOneWithoutPurchaseNestedInput = {
    create?: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseInput
    upsert?: UserUpsertWithoutPurchaseInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchaseInput, UserUpdateWithoutPurchaseInput>, UserUncheckedUpdateWithoutPurchaseInput>
  }

  export type TravelUpdateOneWithoutPurchaseNestedInput = {
    create?: XOR<TravelCreateWithoutPurchaseInput, TravelUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: TravelCreateOrConnectWithoutPurchaseInput
    upsert?: TravelUpsertWithoutPurchaseInput
    disconnect?: TravelWhereInput | boolean
    delete?: TravelWhereInput | boolean
    connect?: TravelWhereUniqueInput
    update?: XOR<XOR<TravelUpdateToOneWithWhereWithoutPurchaseInput, TravelUpdateWithoutPurchaseInput>, TravelUncheckedUpdateWithoutPurchaseInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BookingCreateWithoutUserInput = {
    reservationDate_booking?: Date | string | null
    amountPeople_booking?: number | null
    OutboundFlight?: TravelCreateNestedOneWithoutOutboundFlightInput
    ReturnFlight?: TravelCreateNestedOneWithoutReturnFlightInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id_booking?: number
    idOutboundFlight_booking?: number | null
    idReturnFlight_booking?: number | null
    reservationDate_booking?: Date | string | null
    amountPeople_booking?: number | null
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutUserInput = {
    purchaseDate_purchase?: Date | string | null
    amount_purchase?: number | null
    total_purchase?: number | null
    paymentMethod_purchase?: string | null
    Travel?: TravelCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutUserInput = {
    id_purchase?: number
    idTravel_purchase?: number | null
    purchaseDate_purchase?: Date | string | null
    amount_purchase?: number | null
    total_purchase?: number | null
    paymentMethod_purchase?: string | null
  }

  export type PurchaseCreateOrConnectWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseCreateManyUserInputEnvelope = {
    data: PurchaseCreateManyUserInput | PurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id_booking?: IntFilter<"Booking"> | number
    idUser_booking?: IntNullableFilter<"Booking"> | number | null
    idOutboundFlight_booking?: IntNullableFilter<"Booking"> | number | null
    idReturnFlight_booking?: IntNullableFilter<"Booking"> | number | null
    reservationDate_booking?: DateTimeNullableFilter<"Booking"> | Date | string | null
    amountPeople_booking?: IntNullableFilter<"Booking"> | number | null
  }

  export type PurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutUserInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id_purchase?: IntFilter<"Purchase"> | number
    idUser_purchase?: IntNullableFilter<"Purchase"> | number | null
    idTravel_purchase?: IntNullableFilter<"Purchase"> | number | null
    purchaseDate_purchase?: DateTimeNullableFilter<"Purchase"> | Date | string | null
    amount_purchase?: IntNullableFilter<"Purchase"> | number | null
    total_purchase?: FloatNullableFilter<"Purchase"> | number | null
    paymentMethod_purchase?: StringNullableFilter<"Purchase"> | string | null
  }

  export type BookingCreateWithoutOutboundFlightInput = {
    reservationDate_booking?: Date | string | null
    amountPeople_booking?: number | null
    User?: UserCreateNestedOneWithoutBookingInput
    ReturnFlight?: TravelCreateNestedOneWithoutReturnFlightInput
  }

  export type BookingUncheckedCreateWithoutOutboundFlightInput = {
    id_booking?: number
    idUser_booking?: number | null
    idReturnFlight_booking?: number | null
    reservationDate_booking?: Date | string | null
    amountPeople_booking?: number | null
  }

  export type BookingCreateOrConnectWithoutOutboundFlightInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutOutboundFlightInput, BookingUncheckedCreateWithoutOutboundFlightInput>
  }

  export type BookingCreateManyOutboundFlightInputEnvelope = {
    data: BookingCreateManyOutboundFlightInput | BookingCreateManyOutboundFlightInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutReturnFlightInput = {
    reservationDate_booking?: Date | string | null
    amountPeople_booking?: number | null
    User?: UserCreateNestedOneWithoutBookingInput
    OutboundFlight?: TravelCreateNestedOneWithoutOutboundFlightInput
  }

  export type BookingUncheckedCreateWithoutReturnFlightInput = {
    id_booking?: number
    idUser_booking?: number | null
    idOutboundFlight_booking?: number | null
    reservationDate_booking?: Date | string | null
    amountPeople_booking?: number | null
  }

  export type BookingCreateOrConnectWithoutReturnFlightInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutReturnFlightInput, BookingUncheckedCreateWithoutReturnFlightInput>
  }

  export type BookingCreateManyReturnFlightInputEnvelope = {
    data: BookingCreateManyReturnFlightInput | BookingCreateManyReturnFlightInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutTravelInput = {
    purchaseDate_purchase?: Date | string | null
    amount_purchase?: number | null
    total_purchase?: number | null
    paymentMethod_purchase?: string | null
    User?: UserCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutTravelInput = {
    id_purchase?: number
    idUser_purchase?: number | null
    purchaseDate_purchase?: Date | string | null
    amount_purchase?: number | null
    total_purchase?: number | null
    paymentMethod_purchase?: string | null
  }

  export type PurchaseCreateOrConnectWithoutTravelInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutTravelInput, PurchaseUncheckedCreateWithoutTravelInput>
  }

  export type PurchaseCreateManyTravelInputEnvelope = {
    data: PurchaseCreateManyTravelInput | PurchaseCreateManyTravelInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutOutboundFlightInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutOutboundFlightInput, BookingUncheckedUpdateWithoutOutboundFlightInput>
    create: XOR<BookingCreateWithoutOutboundFlightInput, BookingUncheckedCreateWithoutOutboundFlightInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutOutboundFlightInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutOutboundFlightInput, BookingUncheckedUpdateWithoutOutboundFlightInput>
  }

  export type BookingUpdateManyWithWhereWithoutOutboundFlightInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutOutboundFlightInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutReturnFlightInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutReturnFlightInput, BookingUncheckedUpdateWithoutReturnFlightInput>
    create: XOR<BookingCreateWithoutReturnFlightInput, BookingUncheckedCreateWithoutReturnFlightInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutReturnFlightInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutReturnFlightInput, BookingUncheckedUpdateWithoutReturnFlightInput>
  }

  export type BookingUpdateManyWithWhereWithoutReturnFlightInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutReturnFlightInput>
  }

  export type PurchaseUpsertWithWhereUniqueWithoutTravelInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutTravelInput, PurchaseUncheckedUpdateWithoutTravelInput>
    create: XOR<PurchaseCreateWithoutTravelInput, PurchaseUncheckedCreateWithoutTravelInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutTravelInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutTravelInput, PurchaseUncheckedUpdateWithoutTravelInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutTravelInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutTravelInput>
  }

  export type UserCreateWithoutBookingInput = {
    name_user?: string | null
    lastName_user?: string | null
    age_user?: number | null
    email_user: string
    password_user: string
    Purchase?: PurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingInput = {
    id_user?: number
    name_user?: string | null
    lastName_user?: string | null
    age_user?: number | null
    email_user: string
    password_user: string
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
  }

  export type TravelCreateWithoutOutboundFlightInput = {
    airline_travel?: string | null
    flightNumber_travel?: string | null
    origin_travel?: string | null
    destination_travel?: string | null
    departureDate_travel?: Date | string | null
    arrivalDate_travel?: Date | string | null
    price_travel?: number | null
    duration_travel?: number | null
    ReturnFlight?: BookingCreateNestedManyWithoutReturnFlightInput
    Purchase?: PurchaseCreateNestedManyWithoutTravelInput
  }

  export type TravelUncheckedCreateWithoutOutboundFlightInput = {
    id_travel?: number
    airline_travel?: string | null
    flightNumber_travel?: string | null
    origin_travel?: string | null
    destination_travel?: string | null
    departureDate_travel?: Date | string | null
    arrivalDate_travel?: Date | string | null
    price_travel?: number | null
    duration_travel?: number | null
    ReturnFlight?: BookingUncheckedCreateNestedManyWithoutReturnFlightInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutTravelInput
  }

  export type TravelCreateOrConnectWithoutOutboundFlightInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutOutboundFlightInput, TravelUncheckedCreateWithoutOutboundFlightInput>
  }

  export type TravelCreateWithoutReturnFlightInput = {
    airline_travel?: string | null
    flightNumber_travel?: string | null
    origin_travel?: string | null
    destination_travel?: string | null
    departureDate_travel?: Date | string | null
    arrivalDate_travel?: Date | string | null
    price_travel?: number | null
    duration_travel?: number | null
    OutboundFlight?: BookingCreateNestedManyWithoutOutboundFlightInput
    Purchase?: PurchaseCreateNestedManyWithoutTravelInput
  }

  export type TravelUncheckedCreateWithoutReturnFlightInput = {
    id_travel?: number
    airline_travel?: string | null
    flightNumber_travel?: string | null
    origin_travel?: string | null
    destination_travel?: string | null
    departureDate_travel?: Date | string | null
    arrivalDate_travel?: Date | string | null
    price_travel?: number | null
    duration_travel?: number | null
    OutboundFlight?: BookingUncheckedCreateNestedManyWithoutOutboundFlightInput
    Purchase?: PurchaseUncheckedCreateNestedManyWithoutTravelInput
  }

  export type TravelCreateOrConnectWithoutReturnFlightInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutReturnFlightInput, TravelUncheckedCreateWithoutReturnFlightInput>
  }

  export type UserUpsertWithoutBookingInput = {
    update: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
  }

  export type UserUpdateWithoutBookingInput = {
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    lastName_user?: NullableStringFieldUpdateOperationsInput | string | null
    age_user?: NullableIntFieldUpdateOperationsInput | number | null
    email_user?: StringFieldUpdateOperationsInput | string
    password_user?: StringFieldUpdateOperationsInput | string
    Purchase?: PurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    lastName_user?: NullableStringFieldUpdateOperationsInput | string | null
    age_user?: NullableIntFieldUpdateOperationsInput | number | null
    email_user?: StringFieldUpdateOperationsInput | string
    password_user?: StringFieldUpdateOperationsInput | string
    Purchase?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TravelUpsertWithoutOutboundFlightInput = {
    update: XOR<TravelUpdateWithoutOutboundFlightInput, TravelUncheckedUpdateWithoutOutboundFlightInput>
    create: XOR<TravelCreateWithoutOutboundFlightInput, TravelUncheckedCreateWithoutOutboundFlightInput>
    where?: TravelWhereInput
  }

  export type TravelUpdateToOneWithWhereWithoutOutboundFlightInput = {
    where?: TravelWhereInput
    data: XOR<TravelUpdateWithoutOutboundFlightInput, TravelUncheckedUpdateWithoutOutboundFlightInput>
  }

  export type TravelUpdateWithoutOutboundFlightInput = {
    airline_travel?: NullableStringFieldUpdateOperationsInput | string | null
    flightNumber_travel?: NullableStringFieldUpdateOperationsInput | string | null
    origin_travel?: NullableStringFieldUpdateOperationsInput | string | null
    destination_travel?: NullableStringFieldUpdateOperationsInput | string | null
    departureDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_travel?: NullableFloatFieldUpdateOperationsInput | number | null
    duration_travel?: NullableIntFieldUpdateOperationsInput | number | null
    ReturnFlight?: BookingUpdateManyWithoutReturnFlightNestedInput
    Purchase?: PurchaseUpdateManyWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateWithoutOutboundFlightInput = {
    id_travel?: IntFieldUpdateOperationsInput | number
    airline_travel?: NullableStringFieldUpdateOperationsInput | string | null
    flightNumber_travel?: NullableStringFieldUpdateOperationsInput | string | null
    origin_travel?: NullableStringFieldUpdateOperationsInput | string | null
    destination_travel?: NullableStringFieldUpdateOperationsInput | string | null
    departureDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_travel?: NullableFloatFieldUpdateOperationsInput | number | null
    duration_travel?: NullableIntFieldUpdateOperationsInput | number | null
    ReturnFlight?: BookingUncheckedUpdateManyWithoutReturnFlightNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutTravelNestedInput
  }

  export type TravelUpsertWithoutReturnFlightInput = {
    update: XOR<TravelUpdateWithoutReturnFlightInput, TravelUncheckedUpdateWithoutReturnFlightInput>
    create: XOR<TravelCreateWithoutReturnFlightInput, TravelUncheckedCreateWithoutReturnFlightInput>
    where?: TravelWhereInput
  }

  export type TravelUpdateToOneWithWhereWithoutReturnFlightInput = {
    where?: TravelWhereInput
    data: XOR<TravelUpdateWithoutReturnFlightInput, TravelUncheckedUpdateWithoutReturnFlightInput>
  }

  export type TravelUpdateWithoutReturnFlightInput = {
    airline_travel?: NullableStringFieldUpdateOperationsInput | string | null
    flightNumber_travel?: NullableStringFieldUpdateOperationsInput | string | null
    origin_travel?: NullableStringFieldUpdateOperationsInput | string | null
    destination_travel?: NullableStringFieldUpdateOperationsInput | string | null
    departureDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_travel?: NullableFloatFieldUpdateOperationsInput | number | null
    duration_travel?: NullableIntFieldUpdateOperationsInput | number | null
    OutboundFlight?: BookingUpdateManyWithoutOutboundFlightNestedInput
    Purchase?: PurchaseUpdateManyWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateWithoutReturnFlightInput = {
    id_travel?: IntFieldUpdateOperationsInput | number
    airline_travel?: NullableStringFieldUpdateOperationsInput | string | null
    flightNumber_travel?: NullableStringFieldUpdateOperationsInput | string | null
    origin_travel?: NullableStringFieldUpdateOperationsInput | string | null
    destination_travel?: NullableStringFieldUpdateOperationsInput | string | null
    departureDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_travel?: NullableFloatFieldUpdateOperationsInput | number | null
    duration_travel?: NullableIntFieldUpdateOperationsInput | number | null
    OutboundFlight?: BookingUncheckedUpdateManyWithoutOutboundFlightNestedInput
    Purchase?: PurchaseUncheckedUpdateManyWithoutTravelNestedInput
  }

  export type UserCreateWithoutPurchaseInput = {
    name_user?: string | null
    lastName_user?: string | null
    age_user?: number | null
    email_user: string
    password_user: string
    Booking?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchaseInput = {
    id_user?: number
    name_user?: string | null
    lastName_user?: string | null
    age_user?: number | null
    email_user: string
    password_user: string
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchaseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
  }

  export type TravelCreateWithoutPurchaseInput = {
    airline_travel?: string | null
    flightNumber_travel?: string | null
    origin_travel?: string | null
    destination_travel?: string | null
    departureDate_travel?: Date | string | null
    arrivalDate_travel?: Date | string | null
    price_travel?: number | null
    duration_travel?: number | null
    OutboundFlight?: BookingCreateNestedManyWithoutOutboundFlightInput
    ReturnFlight?: BookingCreateNestedManyWithoutReturnFlightInput
  }

  export type TravelUncheckedCreateWithoutPurchaseInput = {
    id_travel?: number
    airline_travel?: string | null
    flightNumber_travel?: string | null
    origin_travel?: string | null
    destination_travel?: string | null
    departureDate_travel?: Date | string | null
    arrivalDate_travel?: Date | string | null
    price_travel?: number | null
    duration_travel?: number | null
    OutboundFlight?: BookingUncheckedCreateNestedManyWithoutOutboundFlightInput
    ReturnFlight?: BookingUncheckedCreateNestedManyWithoutReturnFlightInput
  }

  export type TravelCreateOrConnectWithoutPurchaseInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutPurchaseInput, TravelUncheckedCreateWithoutPurchaseInput>
  }

  export type UserUpsertWithoutPurchaseInput = {
    update: XOR<UserUpdateWithoutPurchaseInput, UserUncheckedUpdateWithoutPurchaseInput>
    create: XOR<UserCreateWithoutPurchaseInput, UserUncheckedCreateWithoutPurchaseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchaseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchaseInput, UserUncheckedUpdateWithoutPurchaseInput>
  }

  export type UserUpdateWithoutPurchaseInput = {
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    lastName_user?: NullableStringFieldUpdateOperationsInput | string | null
    age_user?: NullableIntFieldUpdateOperationsInput | number | null
    email_user?: StringFieldUpdateOperationsInput | string
    password_user?: StringFieldUpdateOperationsInput | string
    Booking?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchaseInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name_user?: NullableStringFieldUpdateOperationsInput | string | null
    lastName_user?: NullableStringFieldUpdateOperationsInput | string | null
    age_user?: NullableIntFieldUpdateOperationsInput | number | null
    email_user?: StringFieldUpdateOperationsInput | string
    password_user?: StringFieldUpdateOperationsInput | string
    Booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TravelUpsertWithoutPurchaseInput = {
    update: XOR<TravelUpdateWithoutPurchaseInput, TravelUncheckedUpdateWithoutPurchaseInput>
    create: XOR<TravelCreateWithoutPurchaseInput, TravelUncheckedCreateWithoutPurchaseInput>
    where?: TravelWhereInput
  }

  export type TravelUpdateToOneWithWhereWithoutPurchaseInput = {
    where?: TravelWhereInput
    data: XOR<TravelUpdateWithoutPurchaseInput, TravelUncheckedUpdateWithoutPurchaseInput>
  }

  export type TravelUpdateWithoutPurchaseInput = {
    airline_travel?: NullableStringFieldUpdateOperationsInput | string | null
    flightNumber_travel?: NullableStringFieldUpdateOperationsInput | string | null
    origin_travel?: NullableStringFieldUpdateOperationsInput | string | null
    destination_travel?: NullableStringFieldUpdateOperationsInput | string | null
    departureDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_travel?: NullableFloatFieldUpdateOperationsInput | number | null
    duration_travel?: NullableIntFieldUpdateOperationsInput | number | null
    OutboundFlight?: BookingUpdateManyWithoutOutboundFlightNestedInput
    ReturnFlight?: BookingUpdateManyWithoutReturnFlightNestedInput
  }

  export type TravelUncheckedUpdateWithoutPurchaseInput = {
    id_travel?: IntFieldUpdateOperationsInput | number
    airline_travel?: NullableStringFieldUpdateOperationsInput | string | null
    flightNumber_travel?: NullableStringFieldUpdateOperationsInput | string | null
    origin_travel?: NullableStringFieldUpdateOperationsInput | string | null
    destination_travel?: NullableStringFieldUpdateOperationsInput | string | null
    departureDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalDate_travel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_travel?: NullableFloatFieldUpdateOperationsInput | number | null
    duration_travel?: NullableIntFieldUpdateOperationsInput | number | null
    OutboundFlight?: BookingUncheckedUpdateManyWithoutOutboundFlightNestedInput
    ReturnFlight?: BookingUncheckedUpdateManyWithoutReturnFlightNestedInput
  }

  export type BookingCreateManyUserInput = {
    id_booking?: number
    idOutboundFlight_booking?: number | null
    idReturnFlight_booking?: number | null
    reservationDate_booking?: Date | string | null
    amountPeople_booking?: number | null
  }

  export type PurchaseCreateManyUserInput = {
    id_purchase?: number
    idTravel_purchase?: number | null
    purchaseDate_purchase?: Date | string | null
    amount_purchase?: number | null
    total_purchase?: number | null
    paymentMethod_purchase?: string | null
  }

  export type BookingUpdateWithoutUserInput = {
    reservationDate_booking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPeople_booking?: NullableIntFieldUpdateOperationsInput | number | null
    OutboundFlight?: TravelUpdateOneWithoutOutboundFlightNestedInput
    ReturnFlight?: TravelUpdateOneWithoutReturnFlightNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id_booking?: IntFieldUpdateOperationsInput | number
    idOutboundFlight_booking?: NullableIntFieldUpdateOperationsInput | number | null
    idReturnFlight_booking?: NullableIntFieldUpdateOperationsInput | number | null
    reservationDate_booking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPeople_booking?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id_booking?: IntFieldUpdateOperationsInput | number
    idOutboundFlight_booking?: NullableIntFieldUpdateOperationsInput | number | null
    idReturnFlight_booking?: NullableIntFieldUpdateOperationsInput | number | null
    reservationDate_booking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPeople_booking?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PurchaseUpdateWithoutUserInput = {
    purchaseDate_purchase?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    total_purchase?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod_purchase?: NullableStringFieldUpdateOperationsInput | string | null
    Travel?: TravelUpdateOneWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutUserInput = {
    id_purchase?: IntFieldUpdateOperationsInput | number
    idTravel_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate_purchase?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    total_purchase?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod_purchase?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseUncheckedUpdateManyWithoutUserInput = {
    id_purchase?: IntFieldUpdateOperationsInput | number
    idTravel_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate_purchase?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    total_purchase?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod_purchase?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingCreateManyOutboundFlightInput = {
    id_booking?: number
    idUser_booking?: number | null
    idReturnFlight_booking?: number | null
    reservationDate_booking?: Date | string | null
    amountPeople_booking?: number | null
  }

  export type BookingCreateManyReturnFlightInput = {
    id_booking?: number
    idUser_booking?: number | null
    idOutboundFlight_booking?: number | null
    reservationDate_booking?: Date | string | null
    amountPeople_booking?: number | null
  }

  export type PurchaseCreateManyTravelInput = {
    id_purchase?: number
    idUser_purchase?: number | null
    purchaseDate_purchase?: Date | string | null
    amount_purchase?: number | null
    total_purchase?: number | null
    paymentMethod_purchase?: string | null
  }

  export type BookingUpdateWithoutOutboundFlightInput = {
    reservationDate_booking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPeople_booking?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUpdateOneWithoutBookingNestedInput
    ReturnFlight?: TravelUpdateOneWithoutReturnFlightNestedInput
  }

  export type BookingUncheckedUpdateWithoutOutboundFlightInput = {
    id_booking?: IntFieldUpdateOperationsInput | number
    idUser_booking?: NullableIntFieldUpdateOperationsInput | number | null
    idReturnFlight_booking?: NullableIntFieldUpdateOperationsInput | number | null
    reservationDate_booking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPeople_booking?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingUncheckedUpdateManyWithoutOutboundFlightInput = {
    id_booking?: IntFieldUpdateOperationsInput | number
    idUser_booking?: NullableIntFieldUpdateOperationsInput | number | null
    idReturnFlight_booking?: NullableIntFieldUpdateOperationsInput | number | null
    reservationDate_booking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPeople_booking?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingUpdateWithoutReturnFlightInput = {
    reservationDate_booking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPeople_booking?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUpdateOneWithoutBookingNestedInput
    OutboundFlight?: TravelUpdateOneWithoutOutboundFlightNestedInput
  }

  export type BookingUncheckedUpdateWithoutReturnFlightInput = {
    id_booking?: IntFieldUpdateOperationsInput | number
    idUser_booking?: NullableIntFieldUpdateOperationsInput | number | null
    idOutboundFlight_booking?: NullableIntFieldUpdateOperationsInput | number | null
    reservationDate_booking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPeople_booking?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingUncheckedUpdateManyWithoutReturnFlightInput = {
    id_booking?: IntFieldUpdateOperationsInput | number
    idUser_booking?: NullableIntFieldUpdateOperationsInput | number | null
    idOutboundFlight_booking?: NullableIntFieldUpdateOperationsInput | number | null
    reservationDate_booking?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amountPeople_booking?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PurchaseUpdateWithoutTravelInput = {
    purchaseDate_purchase?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    total_purchase?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod_purchase?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutTravelInput = {
    id_purchase?: IntFieldUpdateOperationsInput | number
    idUser_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate_purchase?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    total_purchase?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod_purchase?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseUncheckedUpdateManyWithoutTravelInput = {
    id_purchase?: IntFieldUpdateOperationsInput | number
    idUser_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate_purchase?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_purchase?: NullableIntFieldUpdateOperationsInput | number | null
    total_purchase?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentMethod_purchase?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TravelCountOutputTypeDefaultArgs instead
     */
    export type TravelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TravelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TravelDefaultArgs instead
     */
    export type TravelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TravelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingDefaultArgs instead
     */
    export type BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseDefaultArgs instead
     */
    export type PurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}