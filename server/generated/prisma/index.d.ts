
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model NoteShare
 * 
 */
export type NoteShare = $Result.DefaultSelection<Prisma.$NoteSharePayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model NoteTag
 * 
 */
export type NoteTag = $Result.DefaultSelection<Prisma.$NoteTagPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noteShare`: Exposes CRUD operations for the **NoteShare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoteShares
    * const noteShares = await prisma.noteShare.findMany()
    * ```
    */
  get noteShare(): Prisma.NoteShareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noteTag`: Exposes CRUD operations for the **NoteTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoteTags
    * const noteTags = await prisma.noteTag.findMany()
    * ```
    */
  get noteTag(): Prisma.NoteTagDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Note: 'Note',
    NoteShare: 'NoteShare',
    Tag: 'Tag',
    NoteTag: 'NoteTag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "note" | "noteShare" | "tag" | "noteTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      NoteShare: {
        payload: Prisma.$NoteSharePayload<ExtArgs>
        fields: Prisma.NoteShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>
          }
          findFirst: {
            args: Prisma.NoteShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>
          }
          findMany: {
            args: Prisma.NoteShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>[]
          }
          create: {
            args: Prisma.NoteShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>
          }
          createMany: {
            args: Prisma.NoteShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteShareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>[]
          }
          delete: {
            args: Prisma.NoteShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>
          }
          update: {
            args: Prisma.NoteShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>
          }
          deleteMany: {
            args: Prisma.NoteShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteShareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>[]
          }
          upsert: {
            args: Prisma.NoteShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>
          }
          aggregate: {
            args: Prisma.NoteShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoteShare>
          }
          groupBy: {
            args: Prisma.NoteShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteShareCountArgs<ExtArgs>
            result: $Utils.Optional<NoteShareCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      NoteTag: {
        payload: Prisma.$NoteTagPayload<ExtArgs>
        fields: Prisma.NoteTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          findFirst: {
            args: Prisma.NoteTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          findMany: {
            args: Prisma.NoteTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>[]
          }
          create: {
            args: Prisma.NoteTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          createMany: {
            args: Prisma.NoteTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>[]
          }
          delete: {
            args: Prisma.NoteTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          update: {
            args: Prisma.NoteTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          deleteMany: {
            args: Prisma.NoteTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>[]
          }
          upsert: {
            args: Prisma.NoteTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          aggregate: {
            args: Prisma.NoteTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoteTag>
          }
          groupBy: {
            args: Prisma.NoteTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteTagCountArgs<ExtArgs>
            result: $Utils.Optional<NoteTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    note?: NoteOmit
    noteShare?: NoteShareOmit
    tag?: TagOmit
    noteTag?: NoteTagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
    notes: number
    sharedNotes: number
    tags: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | UserCountOutputTypeCountNotesArgs
    sharedNotes?: boolean | UserCountOutputTypeCountSharedNotesArgs
    tags?: boolean | UserCountOutputTypeCountTagsArgs
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
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteShareWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type NoteCountOutputType
   */

  export type NoteCountOutputType = {
    sharedWith: number
    tags: number
  }

  export type NoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sharedWith?: boolean | NoteCountOutputTypeCountSharedWithArgs
    tags?: boolean | NoteCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCountOutputType
     */
    select?: NoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountSharedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteShareWhereInput
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    notes: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | TagCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
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
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    notes?: boolean | User$notesArgs<ExtArgs>
    sharedNotes?: boolean | User$sharedNotesArgs<ExtArgs>
    tags?: boolean | User$tagsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | User$notesArgs<ExtArgs>
    sharedNotes?: boolean | User$sharedNotesArgs<ExtArgs>
    tags?: boolean | User$tagsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      notes: Prisma.$NotePayload<ExtArgs>[]
      sharedNotes: Prisma.$NoteSharePayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notes<T extends User$notesArgs<ExtArgs> = {}>(args?: Subset<T, User$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedNotes<T extends User$sharedNotesArgs<ExtArgs> = {}>(args?: Subset<T, User$sharedNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends User$tagsArgs<ExtArgs> = {}>(args?: Subset<T, User$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.notes
   */
  export type User$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * User.sharedNotes
   */
  export type User$sharedNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    where?: NoteShareWhereInput
    orderBy?: NoteShareOrderByWithRelationInput | NoteShareOrderByWithRelationInput[]
    cursor?: NoteShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteShareScalarFieldEnum | NoteShareScalarFieldEnum[]
  }

  /**
   * User.tags
   */
  export type User$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    isPinned: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type NoteMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    isPinned: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    title: number
    content: number
    isPinned: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type NoteMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isPinned?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isPinned?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isPinned?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: string
    title: string
    content: string
    isPinned: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    ownerId: string
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isPinned?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    sharedWith?: boolean | Note$sharedWithArgs<ExtArgs>
    tags?: boolean | Note$tagsArgs<ExtArgs>
    _count?: boolean | NoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isPinned?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isPinned?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    isPinned?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "isPinned" | "isDeleted" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    sharedWith?: boolean | Note$sharedWithArgs<ExtArgs>
    tags?: boolean | Note$tagsArgs<ExtArgs>
    _count?: boolean | NoteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      sharedWith: Prisma.$NoteSharePayload<ExtArgs>[]
      tags: Prisma.$NoteTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      isPinned: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      ownerId: string
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
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
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sharedWith<T extends Note$sharedWithArgs<ExtArgs> = {}>(args?: Subset<T, Note$sharedWithArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Note$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Note$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'String'>
    readonly title: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly isPinned: FieldRef<"Note", 'Boolean'>
    readonly isDeleted: FieldRef<"Note", 'Boolean'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
    readonly ownerId: FieldRef<"Note", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note.sharedWith
   */
  export type Note$sharedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    where?: NoteShareWhereInput
    orderBy?: NoteShareOrderByWithRelationInput | NoteShareOrderByWithRelationInput[]
    cursor?: NoteShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteShareScalarFieldEnum | NoteShareScalarFieldEnum[]
  }

  /**
   * Note.tags
   */
  export type Note$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    where?: NoteTagWhereInput
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    cursor?: NoteTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model NoteShare
   */

  export type AggregateNoteShare = {
    _count: NoteShareCountAggregateOutputType | null
    _min: NoteShareMinAggregateOutputType | null
    _max: NoteShareMaxAggregateOutputType | null
  }

  export type NoteShareMinAggregateOutputType = {
    id: string | null
    noteId: string | null
    sharedWithUserId: string | null
  }

  export type NoteShareMaxAggregateOutputType = {
    id: string | null
    noteId: string | null
    sharedWithUserId: string | null
  }

  export type NoteShareCountAggregateOutputType = {
    id: number
    noteId: number
    sharedWithUserId: number
    _all: number
  }


  export type NoteShareMinAggregateInputType = {
    id?: true
    noteId?: true
    sharedWithUserId?: true
  }

  export type NoteShareMaxAggregateInputType = {
    id?: true
    noteId?: true
    sharedWithUserId?: true
  }

  export type NoteShareCountAggregateInputType = {
    id?: true
    noteId?: true
    sharedWithUserId?: true
    _all?: true
  }

  export type NoteShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteShare to aggregate.
     */
    where?: NoteShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteShares to fetch.
     */
    orderBy?: NoteShareOrderByWithRelationInput | NoteShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoteShares
    **/
    _count?: true | NoteShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteShareMaxAggregateInputType
  }

  export type GetNoteShareAggregateType<T extends NoteShareAggregateArgs> = {
        [P in keyof T & keyof AggregateNoteShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoteShare[P]>
      : GetScalarType<T[P], AggregateNoteShare[P]>
  }




  export type NoteShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteShareWhereInput
    orderBy?: NoteShareOrderByWithAggregationInput | NoteShareOrderByWithAggregationInput[]
    by: NoteShareScalarFieldEnum[] | NoteShareScalarFieldEnum
    having?: NoteShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteShareCountAggregateInputType | true
    _min?: NoteShareMinAggregateInputType
    _max?: NoteShareMaxAggregateInputType
  }

  export type NoteShareGroupByOutputType = {
    id: string
    noteId: string
    sharedWithUserId: string
    _count: NoteShareCountAggregateOutputType | null
    _min: NoteShareMinAggregateOutputType | null
    _max: NoteShareMaxAggregateOutputType | null
  }

  type GetNoteShareGroupByPayload<T extends NoteShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteShareGroupByOutputType[P]>
            : GetScalarType<T[P], NoteShareGroupByOutputType[P]>
        }
      >
    >


  export type NoteShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noteId?: boolean
    sharedWithUserId?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    sharedWithUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteShare"]>

  export type NoteShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noteId?: boolean
    sharedWithUserId?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    sharedWithUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteShare"]>

  export type NoteShareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noteId?: boolean
    sharedWithUserId?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    sharedWithUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteShare"]>

  export type NoteShareSelectScalar = {
    id?: boolean
    noteId?: boolean
    sharedWithUserId?: boolean
  }

  export type NoteShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "noteId" | "sharedWithUserId", ExtArgs["result"]["noteShare"]>
  export type NoteShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    sharedWithUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoteShareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    sharedWithUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoteShareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    sharedWithUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NoteSharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoteShare"
    objects: {
      note: Prisma.$NotePayload<ExtArgs>
      sharedWithUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      noteId: string
      sharedWithUserId: string
    }, ExtArgs["result"]["noteShare"]>
    composites: {}
  }

  type NoteShareGetPayload<S extends boolean | null | undefined | NoteShareDefaultArgs> = $Result.GetResult<Prisma.$NoteSharePayload, S>

  type NoteShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteShareCountAggregateInputType | true
    }

  export interface NoteShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoteShare'], meta: { name: 'NoteShare' } }
    /**
     * Find zero or one NoteShare that matches the filter.
     * @param {NoteShareFindUniqueArgs} args - Arguments to find a NoteShare
     * @example
     * // Get one NoteShare
     * const noteShare = await prisma.noteShare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteShareFindUniqueArgs>(args: SelectSubset<T, NoteShareFindUniqueArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NoteShare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteShareFindUniqueOrThrowArgs} args - Arguments to find a NoteShare
     * @example
     * // Get one NoteShare
     * const noteShare = await prisma.noteShare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteShareFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteShare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteShareFindFirstArgs} args - Arguments to find a NoteShare
     * @example
     * // Get one NoteShare
     * const noteShare = await prisma.noteShare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteShareFindFirstArgs>(args?: SelectSubset<T, NoteShareFindFirstArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteShare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteShareFindFirstOrThrowArgs} args - Arguments to find a NoteShare
     * @example
     * // Get one NoteShare
     * const noteShare = await prisma.noteShare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteShareFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NoteShares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoteShares
     * const noteShares = await prisma.noteShare.findMany()
     * 
     * // Get first 10 NoteShares
     * const noteShares = await prisma.noteShare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteShareWithIdOnly = await prisma.noteShare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteShareFindManyArgs>(args?: SelectSubset<T, NoteShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NoteShare.
     * @param {NoteShareCreateArgs} args - Arguments to create a NoteShare.
     * @example
     * // Create one NoteShare
     * const NoteShare = await prisma.noteShare.create({
     *   data: {
     *     // ... data to create a NoteShare
     *   }
     * })
     * 
     */
    create<T extends NoteShareCreateArgs>(args: SelectSubset<T, NoteShareCreateArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NoteShares.
     * @param {NoteShareCreateManyArgs} args - Arguments to create many NoteShares.
     * @example
     * // Create many NoteShares
     * const noteShare = await prisma.noteShare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteShareCreateManyArgs>(args?: SelectSubset<T, NoteShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NoteShares and returns the data saved in the database.
     * @param {NoteShareCreateManyAndReturnArgs} args - Arguments to create many NoteShares.
     * @example
     * // Create many NoteShares
     * const noteShare = await prisma.noteShare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NoteShares and only return the `id`
     * const noteShareWithIdOnly = await prisma.noteShare.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteShareCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NoteShare.
     * @param {NoteShareDeleteArgs} args - Arguments to delete one NoteShare.
     * @example
     * // Delete one NoteShare
     * const NoteShare = await prisma.noteShare.delete({
     *   where: {
     *     // ... filter to delete one NoteShare
     *   }
     * })
     * 
     */
    delete<T extends NoteShareDeleteArgs>(args: SelectSubset<T, NoteShareDeleteArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NoteShare.
     * @param {NoteShareUpdateArgs} args - Arguments to update one NoteShare.
     * @example
     * // Update one NoteShare
     * const noteShare = await prisma.noteShare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteShareUpdateArgs>(args: SelectSubset<T, NoteShareUpdateArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NoteShares.
     * @param {NoteShareDeleteManyArgs} args - Arguments to filter NoteShares to delete.
     * @example
     * // Delete a few NoteShares
     * const { count } = await prisma.noteShare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteShareDeleteManyArgs>(args?: SelectSubset<T, NoteShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoteShares
     * const noteShare = await prisma.noteShare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteShareUpdateManyArgs>(args: SelectSubset<T, NoteShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteShares and returns the data updated in the database.
     * @param {NoteShareUpdateManyAndReturnArgs} args - Arguments to update many NoteShares.
     * @example
     * // Update many NoteShares
     * const noteShare = await prisma.noteShare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NoteShares and only return the `id`
     * const noteShareWithIdOnly = await prisma.noteShare.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoteShareUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteShareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NoteShare.
     * @param {NoteShareUpsertArgs} args - Arguments to update or create a NoteShare.
     * @example
     * // Update or create a NoteShare
     * const noteShare = await prisma.noteShare.upsert({
     *   create: {
     *     // ... data to create a NoteShare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoteShare we want to update
     *   }
     * })
     */
    upsert<T extends NoteShareUpsertArgs>(args: SelectSubset<T, NoteShareUpsertArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NoteShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteShareCountArgs} args - Arguments to filter NoteShares to count.
     * @example
     * // Count the number of NoteShares
     * const count = await prisma.noteShare.count({
     *   where: {
     *     // ... the filter for the NoteShares we want to count
     *   }
     * })
    **/
    count<T extends NoteShareCountArgs>(
      args?: Subset<T, NoteShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoteShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteShareAggregateArgs>(args: Subset<T, NoteShareAggregateArgs>): Prisma.PrismaPromise<GetNoteShareAggregateType<T>>

    /**
     * Group by NoteShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteShareGroupByArgs} args - Group by arguments.
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
      T extends NoteShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteShareGroupByArgs['orderBy'] }
        : { orderBy?: NoteShareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoteShare model
   */
  readonly fields: NoteShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoteShare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sharedWithUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NoteShare model
   */
  interface NoteShareFieldRefs {
    readonly id: FieldRef<"NoteShare", 'String'>
    readonly noteId: FieldRef<"NoteShare", 'String'>
    readonly sharedWithUserId: FieldRef<"NoteShare", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NoteShare findUnique
   */
  export type NoteShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * Filter, which NoteShare to fetch.
     */
    where: NoteShareWhereUniqueInput
  }

  /**
   * NoteShare findUniqueOrThrow
   */
  export type NoteShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * Filter, which NoteShare to fetch.
     */
    where: NoteShareWhereUniqueInput
  }

  /**
   * NoteShare findFirst
   */
  export type NoteShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * Filter, which NoteShare to fetch.
     */
    where?: NoteShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteShares to fetch.
     */
    orderBy?: NoteShareOrderByWithRelationInput | NoteShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteShares.
     */
    cursor?: NoteShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteShares.
     */
    distinct?: NoteShareScalarFieldEnum | NoteShareScalarFieldEnum[]
  }

  /**
   * NoteShare findFirstOrThrow
   */
  export type NoteShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * Filter, which NoteShare to fetch.
     */
    where?: NoteShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteShares to fetch.
     */
    orderBy?: NoteShareOrderByWithRelationInput | NoteShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteShares.
     */
    cursor?: NoteShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteShares.
     */
    distinct?: NoteShareScalarFieldEnum | NoteShareScalarFieldEnum[]
  }

  /**
   * NoteShare findMany
   */
  export type NoteShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * Filter, which NoteShares to fetch.
     */
    where?: NoteShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteShares to fetch.
     */
    orderBy?: NoteShareOrderByWithRelationInput | NoteShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoteShares.
     */
    cursor?: NoteShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteShares.
     */
    distinct?: NoteShareScalarFieldEnum | NoteShareScalarFieldEnum[]
  }

  /**
   * NoteShare create
   */
  export type NoteShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * The data needed to create a NoteShare.
     */
    data: XOR<NoteShareCreateInput, NoteShareUncheckedCreateInput>
  }

  /**
   * NoteShare createMany
   */
  export type NoteShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoteShares.
     */
    data: NoteShareCreateManyInput | NoteShareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoteShare createManyAndReturn
   */
  export type NoteShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * The data used to create many NoteShares.
     */
    data: NoteShareCreateManyInput | NoteShareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteShare update
   */
  export type NoteShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * The data needed to update a NoteShare.
     */
    data: XOR<NoteShareUpdateInput, NoteShareUncheckedUpdateInput>
    /**
     * Choose, which NoteShare to update.
     */
    where: NoteShareWhereUniqueInput
  }

  /**
   * NoteShare updateMany
   */
  export type NoteShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoteShares.
     */
    data: XOR<NoteShareUpdateManyMutationInput, NoteShareUncheckedUpdateManyInput>
    /**
     * Filter which NoteShares to update
     */
    where?: NoteShareWhereInput
    /**
     * Limit how many NoteShares to update.
     */
    limit?: number
  }

  /**
   * NoteShare updateManyAndReturn
   */
  export type NoteShareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * The data used to update NoteShares.
     */
    data: XOR<NoteShareUpdateManyMutationInput, NoteShareUncheckedUpdateManyInput>
    /**
     * Filter which NoteShares to update
     */
    where?: NoteShareWhereInput
    /**
     * Limit how many NoteShares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteShare upsert
   */
  export type NoteShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * The filter to search for the NoteShare to update in case it exists.
     */
    where: NoteShareWhereUniqueInput
    /**
     * In case the NoteShare found by the `where` argument doesn't exist, create a new NoteShare with this data.
     */
    create: XOR<NoteShareCreateInput, NoteShareUncheckedCreateInput>
    /**
     * In case the NoteShare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteShareUpdateInput, NoteShareUncheckedUpdateInput>
  }

  /**
   * NoteShare delete
   */
  export type NoteShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * Filter which NoteShare to delete.
     */
    where: NoteShareWhereUniqueInput
  }

  /**
   * NoteShare deleteMany
   */
  export type NoteShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteShares to delete
     */
    where?: NoteShareWhereInput
    /**
     * Limit how many NoteShares to delete.
     */
    limit?: number
  }

  /**
   * NoteShare without action
   */
  export type NoteShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    userId: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    notes?: boolean | Tag$notesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    notes?: boolean | Tag$notesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      notes: Prisma.$NoteTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notes<T extends Tag$notesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly userId: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.notes
   */
  export type Tag$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    where?: NoteTagWhereInput
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    cursor?: NoteTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model NoteTag
   */

  export type AggregateNoteTag = {
    _count: NoteTagCountAggregateOutputType | null
    _min: NoteTagMinAggregateOutputType | null
    _max: NoteTagMaxAggregateOutputType | null
  }

  export type NoteTagMinAggregateOutputType = {
    noteId: string | null
    tagId: string | null
  }

  export type NoteTagMaxAggregateOutputType = {
    noteId: string | null
    tagId: string | null
  }

  export type NoteTagCountAggregateOutputType = {
    noteId: number
    tagId: number
    _all: number
  }


  export type NoteTagMinAggregateInputType = {
    noteId?: true
    tagId?: true
  }

  export type NoteTagMaxAggregateInputType = {
    noteId?: true
    tagId?: true
  }

  export type NoteTagCountAggregateInputType = {
    noteId?: true
    tagId?: true
    _all?: true
  }

  export type NoteTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteTag to aggregate.
     */
    where?: NoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteTags to fetch.
     */
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoteTags
    **/
    _count?: true | NoteTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteTagMaxAggregateInputType
  }

  export type GetNoteTagAggregateType<T extends NoteTagAggregateArgs> = {
        [P in keyof T & keyof AggregateNoteTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoteTag[P]>
      : GetScalarType<T[P], AggregateNoteTag[P]>
  }




  export type NoteTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteTagWhereInput
    orderBy?: NoteTagOrderByWithAggregationInput | NoteTagOrderByWithAggregationInput[]
    by: NoteTagScalarFieldEnum[] | NoteTagScalarFieldEnum
    having?: NoteTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteTagCountAggregateInputType | true
    _min?: NoteTagMinAggregateInputType
    _max?: NoteTagMaxAggregateInputType
  }

  export type NoteTagGroupByOutputType = {
    noteId: string
    tagId: string
    _count: NoteTagCountAggregateOutputType | null
    _min: NoteTagMinAggregateOutputType | null
    _max: NoteTagMaxAggregateOutputType | null
  }

  type GetNoteTagGroupByPayload<T extends NoteTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteTagGroupByOutputType[P]>
            : GetScalarType<T[P], NoteTagGroupByOutputType[P]>
        }
      >
    >


  export type NoteTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    noteId?: boolean
    tagId?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteTag"]>

  export type NoteTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    noteId?: boolean
    tagId?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteTag"]>

  export type NoteTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    noteId?: boolean
    tagId?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteTag"]>

  export type NoteTagSelectScalar = {
    noteId?: boolean
    tagId?: boolean
  }

  export type NoteTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"noteId" | "tagId", ExtArgs["result"]["noteTag"]>
  export type NoteTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type NoteTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type NoteTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $NoteTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoteTag"
    objects: {
      note: Prisma.$NotePayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      noteId: string
      tagId: string
    }, ExtArgs["result"]["noteTag"]>
    composites: {}
  }

  type NoteTagGetPayload<S extends boolean | null | undefined | NoteTagDefaultArgs> = $Result.GetResult<Prisma.$NoteTagPayload, S>

  type NoteTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteTagCountAggregateInputType | true
    }

  export interface NoteTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoteTag'], meta: { name: 'NoteTag' } }
    /**
     * Find zero or one NoteTag that matches the filter.
     * @param {NoteTagFindUniqueArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteTagFindUniqueArgs>(args: SelectSubset<T, NoteTagFindUniqueArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NoteTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteTagFindUniqueOrThrowArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteTagFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagFindFirstArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteTagFindFirstArgs>(args?: SelectSubset<T, NoteTagFindFirstArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagFindFirstOrThrowArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteTagFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NoteTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoteTags
     * const noteTags = await prisma.noteTag.findMany()
     * 
     * // Get first 10 NoteTags
     * const noteTags = await prisma.noteTag.findMany({ take: 10 })
     * 
     * // Only select the `noteId`
     * const noteTagWithNoteIdOnly = await prisma.noteTag.findMany({ select: { noteId: true } })
     * 
     */
    findMany<T extends NoteTagFindManyArgs>(args?: SelectSubset<T, NoteTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NoteTag.
     * @param {NoteTagCreateArgs} args - Arguments to create a NoteTag.
     * @example
     * // Create one NoteTag
     * const NoteTag = await prisma.noteTag.create({
     *   data: {
     *     // ... data to create a NoteTag
     *   }
     * })
     * 
     */
    create<T extends NoteTagCreateArgs>(args: SelectSubset<T, NoteTagCreateArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NoteTags.
     * @param {NoteTagCreateManyArgs} args - Arguments to create many NoteTags.
     * @example
     * // Create many NoteTags
     * const noteTag = await prisma.noteTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteTagCreateManyArgs>(args?: SelectSubset<T, NoteTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NoteTags and returns the data saved in the database.
     * @param {NoteTagCreateManyAndReturnArgs} args - Arguments to create many NoteTags.
     * @example
     * // Create many NoteTags
     * const noteTag = await prisma.noteTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NoteTags and only return the `noteId`
     * const noteTagWithNoteIdOnly = await prisma.noteTag.createManyAndReturn({
     *   select: { noteId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteTagCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NoteTag.
     * @param {NoteTagDeleteArgs} args - Arguments to delete one NoteTag.
     * @example
     * // Delete one NoteTag
     * const NoteTag = await prisma.noteTag.delete({
     *   where: {
     *     // ... filter to delete one NoteTag
     *   }
     * })
     * 
     */
    delete<T extends NoteTagDeleteArgs>(args: SelectSubset<T, NoteTagDeleteArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NoteTag.
     * @param {NoteTagUpdateArgs} args - Arguments to update one NoteTag.
     * @example
     * // Update one NoteTag
     * const noteTag = await prisma.noteTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteTagUpdateArgs>(args: SelectSubset<T, NoteTagUpdateArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NoteTags.
     * @param {NoteTagDeleteManyArgs} args - Arguments to filter NoteTags to delete.
     * @example
     * // Delete a few NoteTags
     * const { count } = await prisma.noteTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteTagDeleteManyArgs>(args?: SelectSubset<T, NoteTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoteTags
     * const noteTag = await prisma.noteTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteTagUpdateManyArgs>(args: SelectSubset<T, NoteTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteTags and returns the data updated in the database.
     * @param {NoteTagUpdateManyAndReturnArgs} args - Arguments to update many NoteTags.
     * @example
     * // Update many NoteTags
     * const noteTag = await prisma.noteTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NoteTags and only return the `noteId`
     * const noteTagWithNoteIdOnly = await prisma.noteTag.updateManyAndReturn({
     *   select: { noteId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoteTagUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NoteTag.
     * @param {NoteTagUpsertArgs} args - Arguments to update or create a NoteTag.
     * @example
     * // Update or create a NoteTag
     * const noteTag = await prisma.noteTag.upsert({
     *   create: {
     *     // ... data to create a NoteTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoteTag we want to update
     *   }
     * })
     */
    upsert<T extends NoteTagUpsertArgs>(args: SelectSubset<T, NoteTagUpsertArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NoteTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagCountArgs} args - Arguments to filter NoteTags to count.
     * @example
     * // Count the number of NoteTags
     * const count = await prisma.noteTag.count({
     *   where: {
     *     // ... the filter for the NoteTags we want to count
     *   }
     * })
    **/
    count<T extends NoteTagCountArgs>(
      args?: Subset<T, NoteTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoteTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteTagAggregateArgs>(args: Subset<T, NoteTagAggregateArgs>): Prisma.PrismaPromise<GetNoteTagAggregateType<T>>

    /**
     * Group by NoteTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagGroupByArgs} args - Group by arguments.
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
      T extends NoteTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteTagGroupByArgs['orderBy'] }
        : { orderBy?: NoteTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoteTag model
   */
  readonly fields: NoteTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoteTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NoteTag model
   */
  interface NoteTagFieldRefs {
    readonly noteId: FieldRef<"NoteTag", 'String'>
    readonly tagId: FieldRef<"NoteTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NoteTag findUnique
   */
  export type NoteTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTag to fetch.
     */
    where: NoteTagWhereUniqueInput
  }

  /**
   * NoteTag findUniqueOrThrow
   */
  export type NoteTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTag to fetch.
     */
    where: NoteTagWhereUniqueInput
  }

  /**
   * NoteTag findFirst
   */
  export type NoteTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTag to fetch.
     */
    where?: NoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteTags to fetch.
     */
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteTags.
     */
    cursor?: NoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteTags.
     */
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * NoteTag findFirstOrThrow
   */
  export type NoteTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTag to fetch.
     */
    where?: NoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteTags to fetch.
     */
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteTags.
     */
    cursor?: NoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteTags.
     */
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * NoteTag findMany
   */
  export type NoteTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTags to fetch.
     */
    where?: NoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteTags to fetch.
     */
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoteTags.
     */
    cursor?: NoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteTags.
     */
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * NoteTag create
   */
  export type NoteTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * The data needed to create a NoteTag.
     */
    data: XOR<NoteTagCreateInput, NoteTagUncheckedCreateInput>
  }

  /**
   * NoteTag createMany
   */
  export type NoteTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoteTags.
     */
    data: NoteTagCreateManyInput | NoteTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoteTag createManyAndReturn
   */
  export type NoteTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * The data used to create many NoteTags.
     */
    data: NoteTagCreateManyInput | NoteTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteTag update
   */
  export type NoteTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * The data needed to update a NoteTag.
     */
    data: XOR<NoteTagUpdateInput, NoteTagUncheckedUpdateInput>
    /**
     * Choose, which NoteTag to update.
     */
    where: NoteTagWhereUniqueInput
  }

  /**
   * NoteTag updateMany
   */
  export type NoteTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoteTags.
     */
    data: XOR<NoteTagUpdateManyMutationInput, NoteTagUncheckedUpdateManyInput>
    /**
     * Filter which NoteTags to update
     */
    where?: NoteTagWhereInput
    /**
     * Limit how many NoteTags to update.
     */
    limit?: number
  }

  /**
   * NoteTag updateManyAndReturn
   */
  export type NoteTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * The data used to update NoteTags.
     */
    data: XOR<NoteTagUpdateManyMutationInput, NoteTagUncheckedUpdateManyInput>
    /**
     * Filter which NoteTags to update
     */
    where?: NoteTagWhereInput
    /**
     * Limit how many NoteTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteTag upsert
   */
  export type NoteTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * The filter to search for the NoteTag to update in case it exists.
     */
    where: NoteTagWhereUniqueInput
    /**
     * In case the NoteTag found by the `where` argument doesn't exist, create a new NoteTag with this data.
     */
    create: XOR<NoteTagCreateInput, NoteTagUncheckedCreateInput>
    /**
     * In case the NoteTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteTagUpdateInput, NoteTagUncheckedUpdateInput>
  }

  /**
   * NoteTag delete
   */
  export type NoteTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter which NoteTag to delete.
     */
    where: NoteTagWhereUniqueInput
  }

  /**
   * NoteTag deleteMany
   */
  export type NoteTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteTags to delete
     */
    where?: NoteTagWhereInput
    /**
     * Limit how many NoteTags to delete.
     */
    limit?: number
  }

  /**
   * NoteTag without action
   */
  export type NoteTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
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
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    isPinned: 'isPinned',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const NoteShareScalarFieldEnum: {
    id: 'id',
    noteId: 'noteId',
    sharedWithUserId: 'sharedWithUserId'
  };

  export type NoteShareScalarFieldEnum = (typeof NoteShareScalarFieldEnum)[keyof typeof NoteShareScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const NoteTagScalarFieldEnum: {
    noteId: 'noteId',
    tagId: 'tagId'
  };

  export type NoteTagScalarFieldEnum = (typeof NoteTagScalarFieldEnum)[keyof typeof NoteTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    notes?: NoteListRelationFilter
    sharedNotes?: NoteShareListRelationFilter
    tags?: TagListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    notes?: NoteOrderByRelationAggregateInput
    sharedNotes?: NoteShareOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    notes?: NoteListRelationFilter
    sharedNotes?: NoteShareListRelationFilter
    tags?: TagListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: StringFilter<"Note"> | string
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    isPinned?: BoolFilter<"Note"> | boolean
    isDeleted?: BoolFilter<"Note"> | boolean
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    ownerId?: StringFilter<"Note"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    sharedWith?: NoteShareListRelationFilter
    tags?: NoteTagListRelationFilter
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPinned?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    sharedWith?: NoteShareOrderByRelationAggregateInput
    tags?: NoteTagOrderByRelationAggregateInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    isPinned?: BoolFilter<"Note"> | boolean
    isDeleted?: BoolFilter<"Note"> | boolean
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    ownerId?: StringFilter<"Note"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    sharedWith?: NoteShareListRelationFilter
    tags?: NoteTagListRelationFilter
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPinned?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Note"> | string
    title?: StringWithAggregatesFilter<"Note"> | string
    content?: StringWithAggregatesFilter<"Note"> | string
    isPinned?: BoolWithAggregatesFilter<"Note"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Note"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    ownerId?: StringWithAggregatesFilter<"Note"> | string
  }

  export type NoteShareWhereInput = {
    AND?: NoteShareWhereInput | NoteShareWhereInput[]
    OR?: NoteShareWhereInput[]
    NOT?: NoteShareWhereInput | NoteShareWhereInput[]
    id?: StringFilter<"NoteShare"> | string
    noteId?: StringFilter<"NoteShare"> | string
    sharedWithUserId?: StringFilter<"NoteShare"> | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    sharedWithUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NoteShareOrderByWithRelationInput = {
    id?: SortOrder
    noteId?: SortOrder
    sharedWithUserId?: SortOrder
    note?: NoteOrderByWithRelationInput
    sharedWithUser?: UserOrderByWithRelationInput
  }

  export type NoteShareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    noteId_sharedWithUserId?: NoteShareNoteIdSharedWithUserIdCompoundUniqueInput
    AND?: NoteShareWhereInput | NoteShareWhereInput[]
    OR?: NoteShareWhereInput[]
    NOT?: NoteShareWhereInput | NoteShareWhereInput[]
    noteId?: StringFilter<"NoteShare"> | string
    sharedWithUserId?: StringFilter<"NoteShare"> | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    sharedWithUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "noteId_sharedWithUserId">

  export type NoteShareOrderByWithAggregationInput = {
    id?: SortOrder
    noteId?: SortOrder
    sharedWithUserId?: SortOrder
    _count?: NoteShareCountOrderByAggregateInput
    _max?: NoteShareMaxOrderByAggregateInput
    _min?: NoteShareMinOrderByAggregateInput
  }

  export type NoteShareScalarWhereWithAggregatesInput = {
    AND?: NoteShareScalarWhereWithAggregatesInput | NoteShareScalarWhereWithAggregatesInput[]
    OR?: NoteShareScalarWhereWithAggregatesInput[]
    NOT?: NoteShareScalarWhereWithAggregatesInput | NoteShareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NoteShare"> | string
    noteId?: StringWithAggregatesFilter<"NoteShare"> | string
    sharedWithUserId?: StringWithAggregatesFilter<"NoteShare"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    userId?: StringFilter<"Tag"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    notes?: NoteTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    notes?: NoteTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_userId?: TagNameUserIdCompoundUniqueInput
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    userId?: StringFilter<"Tag"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    notes?: NoteTagListRelationFilter
  }, "id" | "name_userId">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    userId?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type NoteTagWhereInput = {
    AND?: NoteTagWhereInput | NoteTagWhereInput[]
    OR?: NoteTagWhereInput[]
    NOT?: NoteTagWhereInput | NoteTagWhereInput[]
    noteId?: StringFilter<"NoteTag"> | string
    tagId?: StringFilter<"NoteTag"> | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type NoteTagOrderByWithRelationInput = {
    noteId?: SortOrder
    tagId?: SortOrder
    note?: NoteOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type NoteTagWhereUniqueInput = Prisma.AtLeast<{
    noteId_tagId?: NoteTagNoteIdTagIdCompoundUniqueInput
    AND?: NoteTagWhereInput | NoteTagWhereInput[]
    OR?: NoteTagWhereInput[]
    NOT?: NoteTagWhereInput | NoteTagWhereInput[]
    noteId?: StringFilter<"NoteTag"> | string
    tagId?: StringFilter<"NoteTag"> | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "noteId_tagId" | "noteId_tagId">

  export type NoteTagOrderByWithAggregationInput = {
    noteId?: SortOrder
    tagId?: SortOrder
    _count?: NoteTagCountOrderByAggregateInput
    _max?: NoteTagMaxOrderByAggregateInput
    _min?: NoteTagMinOrderByAggregateInput
  }

  export type NoteTagScalarWhereWithAggregatesInput = {
    AND?: NoteTagScalarWhereWithAggregatesInput | NoteTagScalarWhereWithAggregatesInput[]
    OR?: NoteTagScalarWhereWithAggregatesInput[]
    NOT?: NoteTagScalarWhereWithAggregatesInput | NoteTagScalarWhereWithAggregatesInput[]
    noteId?: StringWithAggregatesFilter<"NoteTag"> | string
    tagId?: StringWithAggregatesFilter<"NoteTag"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    notes?: NoteCreateNestedManyWithoutOwnerInput
    sharedNotes?: NoteShareCreateNestedManyWithoutSharedWithUserInput
    tags?: TagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutOwnerInput
    sharedNotes?: NoteShareUncheckedCreateNestedManyWithoutSharedWithUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutOwnerNestedInput
    sharedNotes?: NoteShareUpdateManyWithoutSharedWithUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutOwnerNestedInput
    sharedNotes?: NoteShareUncheckedUpdateManyWithoutSharedWithUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateInput = {
    id?: string
    title: string
    content: string
    isPinned?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutNotesInput
    sharedWith?: NoteShareCreateNestedManyWithoutNoteInput
    tags?: NoteTagCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    isPinned?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    sharedWith?: NoteShareUncheckedCreateNestedManyWithoutNoteInput
    tags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutNotesNestedInput
    sharedWith?: NoteShareUpdateManyWithoutNoteNestedInput
    tags?: NoteTagUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    sharedWith?: NoteShareUncheckedUpdateManyWithoutNoteNestedInput
    tags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteCreateManyInput = {
    id?: string
    title: string
    content: string
    isPinned?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type NoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteShareCreateInput = {
    id?: string
    note: NoteCreateNestedOneWithoutSharedWithInput
    sharedWithUser: UserCreateNestedOneWithoutSharedNotesInput
  }

  export type NoteShareUncheckedCreateInput = {
    id?: string
    noteId: string
    sharedWithUserId: string
  }

  export type NoteShareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NoteUpdateOneRequiredWithoutSharedWithNestedInput
    sharedWithUser?: UserUpdateOneRequiredWithoutSharedNotesNestedInput
  }

  export type NoteShareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteId?: StringFieldUpdateOperationsInput | string
    sharedWithUserId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteShareCreateManyInput = {
    id?: string
    noteId: string
    sharedWithUserId: string
  }

  export type NoteShareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type NoteShareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteId?: StringFieldUpdateOperationsInput | string
    sharedWithUserId?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutTagsInput
    notes?: NoteTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    notes?: NoteTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTagsNestedInput
    notes?: NoteTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notes?: NoteTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    userId: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteTagCreateInput = {
    note: NoteCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutNotesInput
  }

  export type NoteTagUncheckedCreateInput = {
    noteId: string
    tagId: string
  }

  export type NoteTagUpdateInput = {
    note?: NoteUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteTagUncheckedUpdateInput = {
    noteId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteTagCreateManyInput = {
    noteId: string
    tagId: string
  }

  export type NoteTagUpdateManyMutationInput = {

  }

  export type NoteTagUncheckedUpdateManyInput = {
    noteId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type NoteShareListRelationFilter = {
    every?: NoteShareWhereInput
    some?: NoteShareWhereInput
    none?: NoteShareWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteShareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NoteTagListRelationFilter = {
    every?: NoteTagWhereInput
    some?: NoteTagWhereInput
    none?: NoteTagWhereInput
  }

  export type NoteTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPinned?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPinned?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isPinned?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NoteScalarRelationFilter = {
    is?: NoteWhereInput
    isNot?: NoteWhereInput
  }

  export type NoteShareNoteIdSharedWithUserIdCompoundUniqueInput = {
    noteId: string
    sharedWithUserId: string
  }

  export type NoteShareCountOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
    sharedWithUserId?: SortOrder
  }

  export type NoteShareMaxOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
    sharedWithUserId?: SortOrder
  }

  export type NoteShareMinOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
    sharedWithUserId?: SortOrder
  }

  export type TagNameUserIdCompoundUniqueInput = {
    name: string
    userId: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type NoteTagNoteIdTagIdCompoundUniqueInput = {
    noteId: string
    tagId: string
  }

  export type NoteTagCountOrderByAggregateInput = {
    noteId?: SortOrder
    tagId?: SortOrder
  }

  export type NoteTagMaxOrderByAggregateInput = {
    noteId?: SortOrder
    tagId?: SortOrder
  }

  export type NoteTagMinOrderByAggregateInput = {
    noteId?: SortOrder
    tagId?: SortOrder
  }

  export type NoteCreateNestedManyWithoutOwnerInput = {
    create?: XOR<NoteCreateWithoutOwnerInput, NoteUncheckedCreateWithoutOwnerInput> | NoteCreateWithoutOwnerInput[] | NoteUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutOwnerInput | NoteCreateOrConnectWithoutOwnerInput[]
    createMany?: NoteCreateManyOwnerInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NoteShareCreateNestedManyWithoutSharedWithUserInput = {
    create?: XOR<NoteShareCreateWithoutSharedWithUserInput, NoteShareUncheckedCreateWithoutSharedWithUserInput> | NoteShareCreateWithoutSharedWithUserInput[] | NoteShareUncheckedCreateWithoutSharedWithUserInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutSharedWithUserInput | NoteShareCreateOrConnectWithoutSharedWithUserInput[]
    createMany?: NoteShareCreateManySharedWithUserInputEnvelope
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutUserInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<NoteCreateWithoutOwnerInput, NoteUncheckedCreateWithoutOwnerInput> | NoteCreateWithoutOwnerInput[] | NoteUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutOwnerInput | NoteCreateOrConnectWithoutOwnerInput[]
    createMany?: NoteCreateManyOwnerInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NoteShareUncheckedCreateNestedManyWithoutSharedWithUserInput = {
    create?: XOR<NoteShareCreateWithoutSharedWithUserInput, NoteShareUncheckedCreateWithoutSharedWithUserInput> | NoteShareCreateWithoutSharedWithUserInput[] | NoteShareUncheckedCreateWithoutSharedWithUserInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutSharedWithUserInput | NoteShareCreateOrConnectWithoutSharedWithUserInput[]
    createMany?: NoteShareCreateManySharedWithUserInputEnvelope
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NoteUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<NoteCreateWithoutOwnerInput, NoteUncheckedCreateWithoutOwnerInput> | NoteCreateWithoutOwnerInput[] | NoteUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutOwnerInput | NoteCreateOrConnectWithoutOwnerInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutOwnerInput | NoteUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: NoteCreateManyOwnerInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutOwnerInput | NoteUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutOwnerInput | NoteUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type NoteShareUpdateManyWithoutSharedWithUserNestedInput = {
    create?: XOR<NoteShareCreateWithoutSharedWithUserInput, NoteShareUncheckedCreateWithoutSharedWithUserInput> | NoteShareCreateWithoutSharedWithUserInput[] | NoteShareUncheckedCreateWithoutSharedWithUserInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutSharedWithUserInput | NoteShareCreateOrConnectWithoutSharedWithUserInput[]
    upsert?: NoteShareUpsertWithWhereUniqueWithoutSharedWithUserInput | NoteShareUpsertWithWhereUniqueWithoutSharedWithUserInput[]
    createMany?: NoteShareCreateManySharedWithUserInputEnvelope
    set?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    disconnect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    delete?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    update?: NoteShareUpdateWithWhereUniqueWithoutSharedWithUserInput | NoteShareUpdateWithWhereUniqueWithoutSharedWithUserInput[]
    updateMany?: NoteShareUpdateManyWithWhereWithoutSharedWithUserInput | NoteShareUpdateManyWithWhereWithoutSharedWithUserInput[]
    deleteMany?: NoteShareScalarWhereInput | NoteShareScalarWhereInput[]
  }

  export type TagUpdateManyWithoutUserNestedInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUserInput | TagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUserInput | TagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUserInput | TagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<NoteCreateWithoutOwnerInput, NoteUncheckedCreateWithoutOwnerInput> | NoteCreateWithoutOwnerInput[] | NoteUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutOwnerInput | NoteCreateOrConnectWithoutOwnerInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutOwnerInput | NoteUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: NoteCreateManyOwnerInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutOwnerInput | NoteUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutOwnerInput | NoteUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type NoteShareUncheckedUpdateManyWithoutSharedWithUserNestedInput = {
    create?: XOR<NoteShareCreateWithoutSharedWithUserInput, NoteShareUncheckedCreateWithoutSharedWithUserInput> | NoteShareCreateWithoutSharedWithUserInput[] | NoteShareUncheckedCreateWithoutSharedWithUserInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutSharedWithUserInput | NoteShareCreateOrConnectWithoutSharedWithUserInput[]
    upsert?: NoteShareUpsertWithWhereUniqueWithoutSharedWithUserInput | NoteShareUpsertWithWhereUniqueWithoutSharedWithUserInput[]
    createMany?: NoteShareCreateManySharedWithUserInputEnvelope
    set?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    disconnect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    delete?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    update?: NoteShareUpdateWithWhereUniqueWithoutSharedWithUserInput | NoteShareUpdateWithWhereUniqueWithoutSharedWithUserInput[]
    updateMany?: NoteShareUpdateManyWithWhereWithoutSharedWithUserInput | NoteShareUpdateManyWithWhereWithoutSharedWithUserInput[]
    deleteMany?: NoteShareScalarWhereInput | NoteShareScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUserInput | TagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUserInput | TagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUserInput | TagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type NoteShareCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteShareCreateWithoutNoteInput, NoteShareUncheckedCreateWithoutNoteInput> | NoteShareCreateWithoutNoteInput[] | NoteShareUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutNoteInput | NoteShareCreateOrConnectWithoutNoteInput[]
    createMany?: NoteShareCreateManyNoteInputEnvelope
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
  }

  export type NoteTagCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput> | NoteTagCreateWithoutNoteInput[] | NoteTagUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutNoteInput | NoteTagCreateOrConnectWithoutNoteInput[]
    createMany?: NoteTagCreateManyNoteInputEnvelope
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
  }

  export type NoteShareUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteShareCreateWithoutNoteInput, NoteShareUncheckedCreateWithoutNoteInput> | NoteShareCreateWithoutNoteInput[] | NoteShareUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutNoteInput | NoteShareCreateOrConnectWithoutNoteInput[]
    createMany?: NoteShareCreateManyNoteInputEnvelope
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
  }

  export type NoteTagUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput> | NoteTagCreateWithoutNoteInput[] | NoteTagUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutNoteInput | NoteTagCreateOrConnectWithoutNoteInput[]
    createMany?: NoteTagCreateManyNoteInputEnvelope
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotesInput, UserUpdateWithoutNotesInput>, UserUncheckedUpdateWithoutNotesInput>
  }

  export type NoteShareUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteShareCreateWithoutNoteInput, NoteShareUncheckedCreateWithoutNoteInput> | NoteShareCreateWithoutNoteInput[] | NoteShareUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutNoteInput | NoteShareCreateOrConnectWithoutNoteInput[]
    upsert?: NoteShareUpsertWithWhereUniqueWithoutNoteInput | NoteShareUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteShareCreateManyNoteInputEnvelope
    set?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    disconnect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    delete?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    update?: NoteShareUpdateWithWhereUniqueWithoutNoteInput | NoteShareUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteShareUpdateManyWithWhereWithoutNoteInput | NoteShareUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteShareScalarWhereInput | NoteShareScalarWhereInput[]
  }

  export type NoteTagUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput> | NoteTagCreateWithoutNoteInput[] | NoteTagUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutNoteInput | NoteTagCreateOrConnectWithoutNoteInput[]
    upsert?: NoteTagUpsertWithWhereUniqueWithoutNoteInput | NoteTagUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteTagCreateManyNoteInputEnvelope
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    update?: NoteTagUpdateWithWhereUniqueWithoutNoteInput | NoteTagUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteTagUpdateManyWithWhereWithoutNoteInput | NoteTagUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
  }

  export type NoteShareUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteShareCreateWithoutNoteInput, NoteShareUncheckedCreateWithoutNoteInput> | NoteShareCreateWithoutNoteInput[] | NoteShareUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutNoteInput | NoteShareCreateOrConnectWithoutNoteInput[]
    upsert?: NoteShareUpsertWithWhereUniqueWithoutNoteInput | NoteShareUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteShareCreateManyNoteInputEnvelope
    set?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    disconnect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    delete?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    update?: NoteShareUpdateWithWhereUniqueWithoutNoteInput | NoteShareUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteShareUpdateManyWithWhereWithoutNoteInput | NoteShareUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteShareScalarWhereInput | NoteShareScalarWhereInput[]
  }

  export type NoteTagUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput> | NoteTagCreateWithoutNoteInput[] | NoteTagUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutNoteInput | NoteTagCreateOrConnectWithoutNoteInput[]
    upsert?: NoteTagUpsertWithWhereUniqueWithoutNoteInput | NoteTagUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteTagCreateManyNoteInputEnvelope
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    update?: NoteTagUpdateWithWhereUniqueWithoutNoteInput | NoteTagUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteTagUpdateManyWithWhereWithoutNoteInput | NoteTagUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
  }

  export type NoteCreateNestedOneWithoutSharedWithInput = {
    create?: XOR<NoteCreateWithoutSharedWithInput, NoteUncheckedCreateWithoutSharedWithInput>
    connectOrCreate?: NoteCreateOrConnectWithoutSharedWithInput
    connect?: NoteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSharedNotesInput = {
    create?: XOR<UserCreateWithoutSharedNotesInput, UserUncheckedCreateWithoutSharedNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedNotesInput
    connect?: UserWhereUniqueInput
  }

  export type NoteUpdateOneRequiredWithoutSharedWithNestedInput = {
    create?: XOR<NoteCreateWithoutSharedWithInput, NoteUncheckedCreateWithoutSharedWithInput>
    connectOrCreate?: NoteCreateOrConnectWithoutSharedWithInput
    upsert?: NoteUpsertWithoutSharedWithInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutSharedWithInput, NoteUpdateWithoutSharedWithInput>, NoteUncheckedUpdateWithoutSharedWithInput>
  }

  export type UserUpdateOneRequiredWithoutSharedNotesNestedInput = {
    create?: XOR<UserCreateWithoutSharedNotesInput, UserUncheckedCreateWithoutSharedNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedNotesInput
    upsert?: UserUpsertWithoutSharedNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharedNotesInput, UserUpdateWithoutSharedNotesInput>, UserUncheckedUpdateWithoutSharedNotesInput>
  }

  export type UserCreateNestedOneWithoutTagsInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput
    connect?: UserWhereUniqueInput
  }

  export type NoteTagCreateNestedManyWithoutTagInput = {
    create?: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput> | NoteTagCreateWithoutTagInput[] | NoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutTagInput | NoteTagCreateOrConnectWithoutTagInput[]
    createMany?: NoteTagCreateManyTagInputEnvelope
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
  }

  export type NoteTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput> | NoteTagCreateWithoutTagInput[] | NoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutTagInput | NoteTagCreateOrConnectWithoutTagInput[]
    createMany?: NoteTagCreateManyTagInputEnvelope
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput
    upsert?: UserUpsertWithoutTagsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTagsInput, UserUpdateWithoutTagsInput>, UserUncheckedUpdateWithoutTagsInput>
  }

  export type NoteTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput> | NoteTagCreateWithoutTagInput[] | NoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutTagInput | NoteTagCreateOrConnectWithoutTagInput[]
    upsert?: NoteTagUpsertWithWhereUniqueWithoutTagInput | NoteTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: NoteTagCreateManyTagInputEnvelope
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    update?: NoteTagUpdateWithWhereUniqueWithoutTagInput | NoteTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: NoteTagUpdateManyWithWhereWithoutTagInput | NoteTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
  }

  export type NoteTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput> | NoteTagCreateWithoutTagInput[] | NoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutTagInput | NoteTagCreateOrConnectWithoutTagInput[]
    upsert?: NoteTagUpsertWithWhereUniqueWithoutTagInput | NoteTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: NoteTagCreateManyTagInputEnvelope
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    update?: NoteTagUpdateWithWhereUniqueWithoutTagInput | NoteTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: NoteTagUpdateManyWithWhereWithoutTagInput | NoteTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
  }

  export type NoteCreateNestedOneWithoutTagsInput = {
    create?: XOR<NoteCreateWithoutTagsInput, NoteUncheckedCreateWithoutTagsInput>
    connectOrCreate?: NoteCreateOrConnectWithoutTagsInput
    connect?: NoteWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutNotesInput = {
    create?: XOR<TagCreateWithoutNotesInput, TagUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TagCreateOrConnectWithoutNotesInput
    connect?: TagWhereUniqueInput
  }

  export type NoteUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<NoteCreateWithoutTagsInput, NoteUncheckedCreateWithoutTagsInput>
    connectOrCreate?: NoteCreateOrConnectWithoutTagsInput
    upsert?: NoteUpsertWithoutTagsInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutTagsInput, NoteUpdateWithoutTagsInput>, NoteUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<TagCreateWithoutNotesInput, TagUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TagCreateOrConnectWithoutNotesInput
    upsert?: TagUpsertWithoutNotesInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutNotesInput, TagUpdateWithoutNotesInput>, TagUncheckedUpdateWithoutNotesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NoteCreateWithoutOwnerInput = {
    id?: string
    title: string
    content: string
    isPinned?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sharedWith?: NoteShareCreateNestedManyWithoutNoteInput
    tags?: NoteTagCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    content: string
    isPinned?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sharedWith?: NoteShareUncheckedCreateNestedManyWithoutNoteInput
    tags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutOwnerInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutOwnerInput, NoteUncheckedCreateWithoutOwnerInput>
  }

  export type NoteCreateManyOwnerInputEnvelope = {
    data: NoteCreateManyOwnerInput | NoteCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type NoteShareCreateWithoutSharedWithUserInput = {
    id?: string
    note: NoteCreateNestedOneWithoutSharedWithInput
  }

  export type NoteShareUncheckedCreateWithoutSharedWithUserInput = {
    id?: string
    noteId: string
  }

  export type NoteShareCreateOrConnectWithoutSharedWithUserInput = {
    where: NoteShareWhereUniqueInput
    create: XOR<NoteShareCreateWithoutSharedWithUserInput, NoteShareUncheckedCreateWithoutSharedWithUserInput>
  }

  export type NoteShareCreateManySharedWithUserInputEnvelope = {
    data: NoteShareCreateManySharedWithUserInput | NoteShareCreateManySharedWithUserInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutUserInput = {
    id?: string
    name: string
    notes?: NoteTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    notes?: NoteTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutUserInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput>
  }

  export type TagCreateManyUserInputEnvelope = {
    data: TagCreateManyUserInput | TagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NoteUpsertWithWhereUniqueWithoutOwnerInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutOwnerInput, NoteUncheckedUpdateWithoutOwnerInput>
    create: XOR<NoteCreateWithoutOwnerInput, NoteUncheckedCreateWithoutOwnerInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutOwnerInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutOwnerInput, NoteUncheckedUpdateWithoutOwnerInput>
  }

  export type NoteUpdateManyWithWhereWithoutOwnerInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutOwnerInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: StringFilter<"Note"> | string
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    isPinned?: BoolFilter<"Note"> | boolean
    isDeleted?: BoolFilter<"Note"> | boolean
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    ownerId?: StringFilter<"Note"> | string
  }

  export type NoteShareUpsertWithWhereUniqueWithoutSharedWithUserInput = {
    where: NoteShareWhereUniqueInput
    update: XOR<NoteShareUpdateWithoutSharedWithUserInput, NoteShareUncheckedUpdateWithoutSharedWithUserInput>
    create: XOR<NoteShareCreateWithoutSharedWithUserInput, NoteShareUncheckedCreateWithoutSharedWithUserInput>
  }

  export type NoteShareUpdateWithWhereUniqueWithoutSharedWithUserInput = {
    where: NoteShareWhereUniqueInput
    data: XOR<NoteShareUpdateWithoutSharedWithUserInput, NoteShareUncheckedUpdateWithoutSharedWithUserInput>
  }

  export type NoteShareUpdateManyWithWhereWithoutSharedWithUserInput = {
    where: NoteShareScalarWhereInput
    data: XOR<NoteShareUpdateManyMutationInput, NoteShareUncheckedUpdateManyWithoutSharedWithUserInput>
  }

  export type NoteShareScalarWhereInput = {
    AND?: NoteShareScalarWhereInput | NoteShareScalarWhereInput[]
    OR?: NoteShareScalarWhereInput[]
    NOT?: NoteShareScalarWhereInput | NoteShareScalarWhereInput[]
    id?: StringFilter<"NoteShare"> | string
    noteId?: StringFilter<"NoteShare"> | string
    sharedWithUserId?: StringFilter<"NoteShare"> | string
  }

  export type TagUpsertWithWhereUniqueWithoutUserInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutUserInput, TagUncheckedUpdateWithoutUserInput>
    create: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput>
  }

  export type TagUpdateWithWhereUniqueWithoutUserInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutUserInput, TagUncheckedUpdateWithoutUserInput>
  }

  export type TagUpdateManyWithWhereWithoutUserInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutUserInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    userId?: StringFilter<"Tag"> | string
  }

  export type UserCreateWithoutNotesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    sharedNotes?: NoteShareCreateNestedManyWithoutSharedWithUserInput
    tags?: TagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    sharedNotes?: NoteShareUncheckedCreateNestedManyWithoutSharedWithUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type NoteShareCreateWithoutNoteInput = {
    id?: string
    sharedWithUser: UserCreateNestedOneWithoutSharedNotesInput
  }

  export type NoteShareUncheckedCreateWithoutNoteInput = {
    id?: string
    sharedWithUserId: string
  }

  export type NoteShareCreateOrConnectWithoutNoteInput = {
    where: NoteShareWhereUniqueInput
    create: XOR<NoteShareCreateWithoutNoteInput, NoteShareUncheckedCreateWithoutNoteInput>
  }

  export type NoteShareCreateManyNoteInputEnvelope = {
    data: NoteShareCreateManyNoteInput | NoteShareCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type NoteTagCreateWithoutNoteInput = {
    tag: TagCreateNestedOneWithoutNotesInput
  }

  export type NoteTagUncheckedCreateWithoutNoteInput = {
    tagId: string
  }

  export type NoteTagCreateOrConnectWithoutNoteInput = {
    where: NoteTagWhereUniqueInput
    create: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput>
  }

  export type NoteTagCreateManyNoteInputEnvelope = {
    data: NoteTagCreateManyNoteInput | NoteTagCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedNotes?: NoteShareUpdateManyWithoutSharedWithUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedNotes?: NoteShareUncheckedUpdateManyWithoutSharedWithUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NoteShareUpsertWithWhereUniqueWithoutNoteInput = {
    where: NoteShareWhereUniqueInput
    update: XOR<NoteShareUpdateWithoutNoteInput, NoteShareUncheckedUpdateWithoutNoteInput>
    create: XOR<NoteShareCreateWithoutNoteInput, NoteShareUncheckedCreateWithoutNoteInput>
  }

  export type NoteShareUpdateWithWhereUniqueWithoutNoteInput = {
    where: NoteShareWhereUniqueInput
    data: XOR<NoteShareUpdateWithoutNoteInput, NoteShareUncheckedUpdateWithoutNoteInput>
  }

  export type NoteShareUpdateManyWithWhereWithoutNoteInput = {
    where: NoteShareScalarWhereInput
    data: XOR<NoteShareUpdateManyMutationInput, NoteShareUncheckedUpdateManyWithoutNoteInput>
  }

  export type NoteTagUpsertWithWhereUniqueWithoutNoteInput = {
    where: NoteTagWhereUniqueInput
    update: XOR<NoteTagUpdateWithoutNoteInput, NoteTagUncheckedUpdateWithoutNoteInput>
    create: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput>
  }

  export type NoteTagUpdateWithWhereUniqueWithoutNoteInput = {
    where: NoteTagWhereUniqueInput
    data: XOR<NoteTagUpdateWithoutNoteInput, NoteTagUncheckedUpdateWithoutNoteInput>
  }

  export type NoteTagUpdateManyWithWhereWithoutNoteInput = {
    where: NoteTagScalarWhereInput
    data: XOR<NoteTagUpdateManyMutationInput, NoteTagUncheckedUpdateManyWithoutNoteInput>
  }

  export type NoteTagScalarWhereInput = {
    AND?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
    OR?: NoteTagScalarWhereInput[]
    NOT?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
    noteId?: StringFilter<"NoteTag"> | string
    tagId?: StringFilter<"NoteTag"> | string
  }

  export type NoteCreateWithoutSharedWithInput = {
    id?: string
    title: string
    content: string
    isPinned?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutNotesInput
    tags?: NoteTagCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutSharedWithInput = {
    id?: string
    title: string
    content: string
    isPinned?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    tags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutSharedWithInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutSharedWithInput, NoteUncheckedCreateWithoutSharedWithInput>
  }

  export type UserCreateWithoutSharedNotesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    notes?: NoteCreateNestedManyWithoutOwnerInput
    tags?: TagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSharedNotesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutOwnerInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSharedNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedNotesInput, UserUncheckedCreateWithoutSharedNotesInput>
  }

  export type NoteUpsertWithoutSharedWithInput = {
    update: XOR<NoteUpdateWithoutSharedWithInput, NoteUncheckedUpdateWithoutSharedWithInput>
    create: XOR<NoteCreateWithoutSharedWithInput, NoteUncheckedCreateWithoutSharedWithInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutSharedWithInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutSharedWithInput, NoteUncheckedUpdateWithoutSharedWithInput>
  }

  export type NoteUpdateWithoutSharedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutNotesNestedInput
    tags?: NoteTagUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutSharedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    tags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type UserUpsertWithoutSharedNotesInput = {
    update: XOR<UserUpdateWithoutSharedNotesInput, UserUncheckedUpdateWithoutSharedNotesInput>
    create: XOR<UserCreateWithoutSharedNotesInput, UserUncheckedCreateWithoutSharedNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharedNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharedNotesInput, UserUncheckedUpdateWithoutSharedNotesInput>
  }

  export type UserUpdateWithoutSharedNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutOwnerNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutOwnerNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTagsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    notes?: NoteCreateNestedManyWithoutOwnerInput
    sharedNotes?: NoteShareCreateNestedManyWithoutSharedWithUserInput
  }

  export type UserUncheckedCreateWithoutTagsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutOwnerInput
    sharedNotes?: NoteShareUncheckedCreateNestedManyWithoutSharedWithUserInput
  }

  export type UserCreateOrConnectWithoutTagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
  }

  export type NoteTagCreateWithoutTagInput = {
    note: NoteCreateNestedOneWithoutTagsInput
  }

  export type NoteTagUncheckedCreateWithoutTagInput = {
    noteId: string
  }

  export type NoteTagCreateOrConnectWithoutTagInput = {
    where: NoteTagWhereUniqueInput
    create: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput>
  }

  export type NoteTagCreateManyTagInputEnvelope = {
    data: NoteTagCreateManyTagInput | NoteTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTagsInput = {
    update: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
  }

  export type UserUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutOwnerNestedInput
    sharedNotes?: NoteShareUpdateManyWithoutSharedWithUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutOwnerNestedInput
    sharedNotes?: NoteShareUncheckedUpdateManyWithoutSharedWithUserNestedInput
  }

  export type NoteTagUpsertWithWhereUniqueWithoutTagInput = {
    where: NoteTagWhereUniqueInput
    update: XOR<NoteTagUpdateWithoutTagInput, NoteTagUncheckedUpdateWithoutTagInput>
    create: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput>
  }

  export type NoteTagUpdateWithWhereUniqueWithoutTagInput = {
    where: NoteTagWhereUniqueInput
    data: XOR<NoteTagUpdateWithoutTagInput, NoteTagUncheckedUpdateWithoutTagInput>
  }

  export type NoteTagUpdateManyWithWhereWithoutTagInput = {
    where: NoteTagScalarWhereInput
    data: XOR<NoteTagUpdateManyMutationInput, NoteTagUncheckedUpdateManyWithoutTagInput>
  }

  export type NoteCreateWithoutTagsInput = {
    id?: string
    title: string
    content: string
    isPinned?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutNotesInput
    sharedWith?: NoteShareCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    content: string
    isPinned?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    sharedWith?: NoteShareUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutTagsInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutTagsInput, NoteUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutNotesInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutNotesInput = {
    id?: string
    name: string
    userId: string
  }

  export type TagCreateOrConnectWithoutNotesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutNotesInput, TagUncheckedCreateWithoutNotesInput>
  }

  export type NoteUpsertWithoutTagsInput = {
    update: XOR<NoteUpdateWithoutTagsInput, NoteUncheckedUpdateWithoutTagsInput>
    create: XOR<NoteCreateWithoutTagsInput, NoteUncheckedCreateWithoutTagsInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutTagsInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutTagsInput, NoteUncheckedUpdateWithoutTagsInput>
  }

  export type NoteUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutNotesNestedInput
    sharedWith?: NoteShareUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    sharedWith?: NoteShareUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type TagUpsertWithoutNotesInput = {
    update: XOR<TagUpdateWithoutNotesInput, TagUncheckedUpdateWithoutNotesInput>
    create: XOR<TagCreateWithoutNotesInput, TagUncheckedCreateWithoutNotesInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutNotesInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutNotesInput, TagUncheckedUpdateWithoutNotesInput>
  }

  export type TagUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteCreateManyOwnerInput = {
    id?: string
    title: string
    content: string
    isPinned?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteShareCreateManySharedWithUserInput = {
    id?: string
    noteId: string
  }

  export type TagCreateManyUserInput = {
    id?: string
    name: string
  }

  export type NoteUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedWith?: NoteShareUpdateManyWithoutNoteNestedInput
    tags?: NoteTagUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedWith?: NoteShareUncheckedUpdateManyWithoutNoteNestedInput
    tags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteShareUpdateWithoutSharedWithUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NoteUpdateOneRequiredWithoutSharedWithNestedInput
  }

  export type NoteShareUncheckedUpdateWithoutSharedWithUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteShareUncheckedUpdateManyWithoutSharedWithUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteId?: StringFieldUpdateOperationsInput | string
  }

  export type TagUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: NoteTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: NoteTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NoteShareCreateManyNoteInput = {
    id?: string
    sharedWithUserId: string
  }

  export type NoteTagCreateManyNoteInput = {
    tagId: string
  }

  export type NoteShareUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedWithUser?: UserUpdateOneRequiredWithoutSharedNotesNestedInput
  }

  export type NoteShareUncheckedUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedWithUserId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteShareUncheckedUpdateManyWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedWithUserId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteTagUpdateWithoutNoteInput = {
    tag?: TagUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteTagUncheckedUpdateWithoutNoteInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteTagUncheckedUpdateManyWithoutNoteInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteTagCreateManyTagInput = {
    noteId: string
  }

  export type NoteTagUpdateWithoutTagInput = {
    note?: NoteUpdateOneRequiredWithoutTagsNestedInput
  }

  export type NoteTagUncheckedUpdateWithoutTagInput = {
    noteId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteTagUncheckedUpdateManyWithoutTagInput = {
    noteId?: StringFieldUpdateOperationsInput | string
  }



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