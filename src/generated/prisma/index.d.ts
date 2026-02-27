
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model YouTubeChannel
 * 
 */
export type YouTubeChannel = $Result.DefaultSelection<Prisma.$YouTubeChannelPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model VideoDraft
 * 
 */
export type VideoDraft = $Result.DefaultSelection<Prisma.$VideoDraftPayload>
/**
 * Model VideoTemplate
 * 
 */
export type VideoTemplate = $Result.DefaultSelection<Prisma.$VideoTemplatePayload>
/**
 * Model ScheduledUpload
 * 
 */
export type ScheduledUpload = $Result.DefaultSelection<Prisma.$ScheduledUploadPayload>
/**
 * Model ChannelAnalytics
 * 
 */
export type ChannelAnalytics = $Result.DefaultSelection<Prisma.$ChannelAnalyticsPayload>
/**
 * Model UserSettings
 * 
 */
export type UserSettings = $Result.DefaultSelection<Prisma.$UserSettingsPayload>
/**
 * Model ApiUsage
 * 
 */
export type ApiUsage = $Result.DefaultSelection<Prisma.$ApiUsagePayload>
/**
 * Model RateLimit
 * 
 */
export type RateLimit = $Result.DefaultSelection<Prisma.$RateLimitPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PrivacyStatus: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  UNLISTED: 'UNLISTED'
};

export type PrivacyStatus = (typeof PrivacyStatus)[keyof typeof PrivacyStatus]


export const MadeForKids: {
  YES: 'YES',
  NO: 'NO',
  UNSET: 'UNSET'
};

export type MadeForKids = (typeof MadeForKids)[keyof typeof MadeForKids]


export const License: {
  YOUTUBE: 'YOUTUBE',
  CREATIVE_COMMON: 'CREATIVE_COMMON'
};

export type License = (typeof License)[keyof typeof License]


export const VideoStatus: {
  DRAFT: 'DRAFT',
  UPLOADING: 'UPLOADING',
  PROCESSING: 'PROCESSING',
  PUBLISHED: 'PUBLISHED',
  SCHEDULED: 'SCHEDULED',
  FAILED: 'FAILED'
};

export type VideoStatus = (typeof VideoStatus)[keyof typeof VideoStatus]


export const ScheduleStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus]


export const Theme: {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  SYSTEM: 'SYSTEM'
};

export type Theme = (typeof Theme)[keyof typeof Theme]

}

export type PrivacyStatus = $Enums.PrivacyStatus

export const PrivacyStatus: typeof $Enums.PrivacyStatus

export type MadeForKids = $Enums.MadeForKids

export const MadeForKids: typeof $Enums.MadeForKids

export type License = $Enums.License

export const License: typeof $Enums.License

export type VideoStatus = $Enums.VideoStatus

export const VideoStatus: typeof $Enums.VideoStatus

export type ScheduleStatus = $Enums.ScheduleStatus

export const ScheduleStatus: typeof $Enums.ScheduleStatus

export type Theme = $Enums.Theme

export const Theme: typeof $Enums.Theme

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
   * const prisma = new PrismaClient()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.youTubeChannel`: Exposes CRUD operations for the **YouTubeChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YouTubeChannels
    * const youTubeChannels = await prisma.youTubeChannel.findMany()
    * ```
    */
  get youTubeChannel(): Prisma.YouTubeChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoDraft`: Exposes CRUD operations for the **VideoDraft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoDrafts
    * const videoDrafts = await prisma.videoDraft.findMany()
    * ```
    */
  get videoDraft(): Prisma.VideoDraftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoTemplate`: Exposes CRUD operations for the **VideoTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoTemplates
    * const videoTemplates = await prisma.videoTemplate.findMany()
    * ```
    */
  get videoTemplate(): Prisma.VideoTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduledUpload`: Exposes CRUD operations for the **ScheduledUpload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduledUploads
    * const scheduledUploads = await prisma.scheduledUpload.findMany()
    * ```
    */
  get scheduledUpload(): Prisma.ScheduledUploadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channelAnalytics`: Exposes CRUD operations for the **ChannelAnalytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChannelAnalytics
    * const channelAnalytics = await prisma.channelAnalytics.findMany()
    * ```
    */
  get channelAnalytics(): Prisma.ChannelAnalyticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSettings`: Exposes CRUD operations for the **UserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSettings.findMany()
    * ```
    */
  get userSettings(): Prisma.UserSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiUsage`: Exposes CRUD operations for the **ApiUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiUsages
    * const apiUsages = await prisma.apiUsage.findMany()
    * ```
    */
  get apiUsage(): Prisma.ApiUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rateLimit`: Exposes CRUD operations for the **RateLimit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RateLimits
    * const rateLimits = await prisma.rateLimit.findMany()
    * ```
    */
  get rateLimit(): Prisma.RateLimitDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    YouTubeChannel: 'YouTubeChannel',
    Video: 'Video',
    VideoDraft: 'VideoDraft',
    VideoTemplate: 'VideoTemplate',
    ScheduledUpload: 'ScheduledUpload',
    ChannelAnalytics: 'ChannelAnalytics',
    UserSettings: 'UserSettings',
    ApiUsage: 'ApiUsage',
    RateLimit: 'RateLimit'
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
      modelProps: "user" | "account" | "session" | "verificationToken" | "youTubeChannel" | "video" | "videoDraft" | "videoTemplate" | "scheduledUpload" | "channelAnalytics" | "userSettings" | "apiUsage" | "rateLimit"
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
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      YouTubeChannel: {
        payload: Prisma.$YouTubeChannelPayload<ExtArgs>
        fields: Prisma.YouTubeChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YouTubeChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouTubeChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YouTubeChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouTubeChannelPayload>
          }
          findFirst: {
            args: Prisma.YouTubeChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouTubeChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YouTubeChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouTubeChannelPayload>
          }
          findMany: {
            args: Prisma.YouTubeChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouTubeChannelPayload>[]
          }
          create: {
            args: Prisma.YouTubeChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouTubeChannelPayload>
          }
          createMany: {
            args: Prisma.YouTubeChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YouTubeChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouTubeChannelPayload>[]
          }
          delete: {
            args: Prisma.YouTubeChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouTubeChannelPayload>
          }
          update: {
            args: Prisma.YouTubeChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouTubeChannelPayload>
          }
          deleteMany: {
            args: Prisma.YouTubeChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YouTubeChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.YouTubeChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouTubeChannelPayload>[]
          }
          upsert: {
            args: Prisma.YouTubeChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouTubeChannelPayload>
          }
          aggregate: {
            args: Prisma.YouTubeChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYouTubeChannel>
          }
          groupBy: {
            args: Prisma.YouTubeChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<YouTubeChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.YouTubeChannelCountArgs<ExtArgs>
            result: $Utils.Optional<YouTubeChannelCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      VideoDraft: {
        payload: Prisma.$VideoDraftPayload<ExtArgs>
        fields: Prisma.VideoDraftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoDraftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoDraftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoDraftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoDraftPayload>
          }
          findFirst: {
            args: Prisma.VideoDraftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoDraftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoDraftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoDraftPayload>
          }
          findMany: {
            args: Prisma.VideoDraftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoDraftPayload>[]
          }
          create: {
            args: Prisma.VideoDraftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoDraftPayload>
          }
          createMany: {
            args: Prisma.VideoDraftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoDraftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoDraftPayload>[]
          }
          delete: {
            args: Prisma.VideoDraftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoDraftPayload>
          }
          update: {
            args: Prisma.VideoDraftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoDraftPayload>
          }
          deleteMany: {
            args: Prisma.VideoDraftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoDraftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoDraftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoDraftPayload>[]
          }
          upsert: {
            args: Prisma.VideoDraftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoDraftPayload>
          }
          aggregate: {
            args: Prisma.VideoDraftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoDraft>
          }
          groupBy: {
            args: Prisma.VideoDraftGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoDraftGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoDraftCountArgs<ExtArgs>
            result: $Utils.Optional<VideoDraftCountAggregateOutputType> | number
          }
        }
      }
      VideoTemplate: {
        payload: Prisma.$VideoTemplatePayload<ExtArgs>
        fields: Prisma.VideoTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTemplatePayload>
          }
          findFirst: {
            args: Prisma.VideoTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTemplatePayload>
          }
          findMany: {
            args: Prisma.VideoTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTemplatePayload>[]
          }
          create: {
            args: Prisma.VideoTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTemplatePayload>
          }
          createMany: {
            args: Prisma.VideoTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTemplatePayload>[]
          }
          delete: {
            args: Prisma.VideoTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTemplatePayload>
          }
          update: {
            args: Prisma.VideoTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTemplatePayload>
          }
          deleteMany: {
            args: Prisma.VideoTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTemplatePayload>[]
          }
          upsert: {
            args: Prisma.VideoTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTemplatePayload>
          }
          aggregate: {
            args: Prisma.VideoTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoTemplate>
          }
          groupBy: {
            args: Prisma.VideoTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<VideoTemplateCountAggregateOutputType> | number
          }
        }
      }
      ScheduledUpload: {
        payload: Prisma.$ScheduledUploadPayload<ExtArgs>
        fields: Prisma.ScheduledUploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduledUploadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledUploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduledUploadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledUploadPayload>
          }
          findFirst: {
            args: Prisma.ScheduledUploadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledUploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduledUploadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledUploadPayload>
          }
          findMany: {
            args: Prisma.ScheduledUploadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledUploadPayload>[]
          }
          create: {
            args: Prisma.ScheduledUploadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledUploadPayload>
          }
          createMany: {
            args: Prisma.ScheduledUploadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduledUploadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledUploadPayload>[]
          }
          delete: {
            args: Prisma.ScheduledUploadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledUploadPayload>
          }
          update: {
            args: Prisma.ScheduledUploadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledUploadPayload>
          }
          deleteMany: {
            args: Prisma.ScheduledUploadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduledUploadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduledUploadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledUploadPayload>[]
          }
          upsert: {
            args: Prisma.ScheduledUploadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledUploadPayload>
          }
          aggregate: {
            args: Prisma.ScheduledUploadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduledUpload>
          }
          groupBy: {
            args: Prisma.ScheduledUploadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduledUploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduledUploadCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduledUploadCountAggregateOutputType> | number
          }
        }
      }
      ChannelAnalytics: {
        payload: Prisma.$ChannelAnalyticsPayload<ExtArgs>
        fields: Prisma.ChannelAnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelAnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelAnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelAnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelAnalyticsPayload>
          }
          findFirst: {
            args: Prisma.ChannelAnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelAnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelAnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelAnalyticsPayload>
          }
          findMany: {
            args: Prisma.ChannelAnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelAnalyticsPayload>[]
          }
          create: {
            args: Prisma.ChannelAnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelAnalyticsPayload>
          }
          createMany: {
            args: Prisma.ChannelAnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelAnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelAnalyticsPayload>[]
          }
          delete: {
            args: Prisma.ChannelAnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelAnalyticsPayload>
          }
          update: {
            args: Prisma.ChannelAnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelAnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.ChannelAnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelAnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelAnalyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelAnalyticsPayload>[]
          }
          upsert: {
            args: Prisma.ChannelAnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelAnalyticsPayload>
          }
          aggregate: {
            args: Prisma.ChannelAnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannelAnalytics>
          }
          groupBy: {
            args: Prisma.ChannelAnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelAnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelAnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelAnalyticsCountAggregateOutputType> | number
          }
        }
      }
      UserSettings: {
        payload: Prisma.$UserSettingsPayload<ExtArgs>
        fields: Prisma.UserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findMany: {
            args: Prisma.UserSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          create: {
            args: Prisma.UserSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          createMany: {
            args: Prisma.UserSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          delete: {
            args: Prisma.UserSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          update: {
            args: Prisma.UserSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          upsert: {
            args: Prisma.UserSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSettings>
          }
          groupBy: {
            args: Prisma.UserSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsCountAggregateOutputType> | number
          }
        }
      }
      ApiUsage: {
        payload: Prisma.$ApiUsagePayload<ExtArgs>
        fields: Prisma.ApiUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>
          }
          findFirst: {
            args: Prisma.ApiUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>
          }
          findMany: {
            args: Prisma.ApiUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>[]
          }
          create: {
            args: Prisma.ApiUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>
          }
          createMany: {
            args: Prisma.ApiUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>[]
          }
          delete: {
            args: Prisma.ApiUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>
          }
          update: {
            args: Prisma.ApiUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>
          }
          deleteMany: {
            args: Prisma.ApiUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>[]
          }
          upsert: {
            args: Prisma.ApiUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiUsagePayload>
          }
          aggregate: {
            args: Prisma.ApiUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiUsage>
          }
          groupBy: {
            args: Prisma.ApiUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiUsageCountArgs<ExtArgs>
            result: $Utils.Optional<ApiUsageCountAggregateOutputType> | number
          }
        }
      }
      RateLimit: {
        payload: Prisma.$RateLimitPayload<ExtArgs>
        fields: Prisma.RateLimitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RateLimitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RateLimitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>
          }
          findFirst: {
            args: Prisma.RateLimitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RateLimitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>
          }
          findMany: {
            args: Prisma.RateLimitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>[]
          }
          create: {
            args: Prisma.RateLimitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>
          }
          createMany: {
            args: Prisma.RateLimitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RateLimitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>[]
          }
          delete: {
            args: Prisma.RateLimitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>
          }
          update: {
            args: Prisma.RateLimitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>
          }
          deleteMany: {
            args: Prisma.RateLimitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RateLimitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RateLimitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>[]
          }
          upsert: {
            args: Prisma.RateLimitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitPayload>
          }
          aggregate: {
            args: Prisma.RateLimitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRateLimit>
          }
          groupBy: {
            args: Prisma.RateLimitGroupByArgs<ExtArgs>
            result: $Utils.Optional<RateLimitGroupByOutputType>[]
          }
          count: {
            args: Prisma.RateLimitCountArgs<ExtArgs>
            result: $Utils.Optional<RateLimitCountAggregateOutputType> | number
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
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    youTubeChannel?: YouTubeChannelOmit
    video?: VideoOmit
    videoDraft?: VideoDraftOmit
    videoTemplate?: VideoTemplateOmit
    scheduledUpload?: ScheduledUploadOmit
    channelAnalytics?: ChannelAnalyticsOmit
    userSettings?: UserSettingsOmit
    apiUsage?: ApiUsageOmit
    rateLimit?: RateLimitOmit
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
    accounts: number
    sessions: number
    channels: number
    videos: number
    drafts: number
    templates: number
    schedules: number
    apiUsage: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    channels?: boolean | UserCountOutputTypeCountChannelsArgs
    videos?: boolean | UserCountOutputTypeCountVideosArgs
    drafts?: boolean | UserCountOutputTypeCountDraftsArgs
    templates?: boolean | UserCountOutputTypeCountTemplatesArgs
    schedules?: boolean | UserCountOutputTypeCountSchedulesArgs
    apiUsage?: boolean | UserCountOutputTypeCountApiUsageArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YouTubeChannelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDraftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoDraftWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoTemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledUploadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiUsageWhereInput
  }


  /**
   * Count Type YouTubeChannelCountOutputType
   */

  export type YouTubeChannelCountOutputType = {
    videos: number
    schedules: number
    analytics: number
  }

  export type YouTubeChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | YouTubeChannelCountOutputTypeCountVideosArgs
    schedules?: boolean | YouTubeChannelCountOutputTypeCountSchedulesArgs
    analytics?: boolean | YouTubeChannelCountOutputTypeCountAnalyticsArgs
  }

  // Custom InputTypes
  /**
   * YouTubeChannelCountOutputType without action
   */
  export type YouTubeChannelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouTubeChannelCountOutputType
     */
    select?: YouTubeChannelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * YouTubeChannelCountOutputType without action
   */
  export type YouTubeChannelCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * YouTubeChannelCountOutputType without action
   */
  export type YouTubeChannelCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledUploadWhereInput
  }

  /**
   * YouTubeChannelCountOutputType without action
   */
  export type YouTubeChannelCountOutputTypeCountAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelAnalyticsWhereInput
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
    name: string | null
    image: string | null
    emailVerified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    image: string | null
    emailVerified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    image: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    lastLoginAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
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
    name: string | null
    image: string | null
    emailVerified: Date | null
    createdAt: Date
    updatedAt: Date
    lastLoginAt: Date | null
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
    name?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    channels?: boolean | User$channelsArgs<ExtArgs>
    videos?: boolean | User$videosArgs<ExtArgs>
    drafts?: boolean | User$draftsArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    schedules?: boolean | User$schedulesArgs<ExtArgs>
    apiUsage?: boolean | User$apiUsageArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "image" | "emailVerified" | "createdAt" | "updatedAt" | "lastLoginAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    channels?: boolean | User$channelsArgs<ExtArgs>
    videos?: boolean | User$videosArgs<ExtArgs>
    drafts?: boolean | User$draftsArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    schedules?: boolean | User$schedulesArgs<ExtArgs>
    apiUsage?: boolean | User$apiUsageArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      channels: Prisma.$YouTubeChannelPayload<ExtArgs>[]
      videos: Prisma.$VideoPayload<ExtArgs>[]
      drafts: Prisma.$VideoDraftPayload<ExtArgs>[]
      templates: Prisma.$VideoTemplatePayload<ExtArgs>[]
      schedules: Prisma.$ScheduledUploadPayload<ExtArgs>[]
      apiUsage: Prisma.$ApiUsagePayload<ExtArgs>[]
      settings: Prisma.$UserSettingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      image: string | null
      emailVerified: Date | null
      createdAt: Date
      updatedAt: Date
      lastLoginAt: Date | null
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    channels<T extends User$channelsArgs<ExtArgs> = {}>(args?: Subset<T, User$channelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videos<T extends User$videosArgs<ExtArgs> = {}>(args?: Subset<T, User$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    drafts<T extends User$draftsArgs<ExtArgs> = {}>(args?: Subset<T, User$draftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoDraftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends User$templatesArgs<ExtArgs> = {}>(args?: Subset<T, User$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends User$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, User$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiUsage<T extends User$apiUsageArgs<ExtArgs> = {}>(args?: Subset<T, User$apiUsageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.channels
   */
  export type User$channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouTubeChannel
     */
    select?: YouTubeChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouTubeChannel
     */
    omit?: YouTubeChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouTubeChannelInclude<ExtArgs> | null
    where?: YouTubeChannelWhereInput
    orderBy?: YouTubeChannelOrderByWithRelationInput | YouTubeChannelOrderByWithRelationInput[]
    cursor?: YouTubeChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YouTubeChannelScalarFieldEnum | YouTubeChannelScalarFieldEnum[]
  }

  /**
   * User.videos
   */
  export type User$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * User.drafts
   */
  export type User$draftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoDraft
     */
    select?: VideoDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoDraft
     */
    omit?: VideoDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoDraftInclude<ExtArgs> | null
    where?: VideoDraftWhereInput
    orderBy?: VideoDraftOrderByWithRelationInput | VideoDraftOrderByWithRelationInput[]
    cursor?: VideoDraftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoDraftScalarFieldEnum | VideoDraftScalarFieldEnum[]
  }

  /**
   * User.templates
   */
  export type User$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTemplate
     */
    select?: VideoTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTemplate
     */
    omit?: VideoTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTemplateInclude<ExtArgs> | null
    where?: VideoTemplateWhereInput
    orderBy?: VideoTemplateOrderByWithRelationInput | VideoTemplateOrderByWithRelationInput[]
    cursor?: VideoTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoTemplateScalarFieldEnum | VideoTemplateScalarFieldEnum[]
  }

  /**
   * User.schedules
   */
  export type User$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledUpload
     */
    select?: ScheduledUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledUpload
     */
    omit?: ScheduledUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledUploadInclude<ExtArgs> | null
    where?: ScheduledUploadWhereInput
    orderBy?: ScheduledUploadOrderByWithRelationInput | ScheduledUploadOrderByWithRelationInput[]
    cursor?: ScheduledUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledUploadScalarFieldEnum | ScheduledUploadScalarFieldEnum[]
  }

  /**
   * User.apiUsage
   */
  export type User$apiUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    where?: ApiUsageWhereInput
    orderBy?: ApiUsageOrderByWithRelationInput | ApiUsageOrderByWithRelationInput[]
    cursor?: ApiUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiUsageScalarFieldEnum | ApiUsageScalarFieldEnum[]
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    where?: UserSettingsWhereInput
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
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model YouTubeChannel
   */

  export type AggregateYouTubeChannel = {
    _count: YouTubeChannelCountAggregateOutputType | null
    _avg: YouTubeChannelAvgAggregateOutputType | null
    _sum: YouTubeChannelSumAggregateOutputType | null
    _min: YouTubeChannelMinAggregateOutputType | null
    _max: YouTubeChannelMaxAggregateOutputType | null
  }

  export type YouTubeChannelAvgAggregateOutputType = {
    subscriberCount: number | null
    videoCount: number | null
    viewCount: number | null
  }

  export type YouTubeChannelSumAggregateOutputType = {
    subscriberCount: bigint | null
    videoCount: number | null
    viewCount: bigint | null
  }

  export type YouTubeChannelMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    customUrl: string | null
    thumbnailUrl: string | null
    bannerUrl: string | null
    subscriberCount: bigint | null
    videoCount: number | null
    viewCount: bigint | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiresAt: Date | null
    accountEmail: string | null
    accountName: string | null
    isBrandAccount: boolean | null
    isActive: boolean | null
    connectedAt: Date | null
    lastSyncAt: Date | null
  }

  export type YouTubeChannelMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    customUrl: string | null
    thumbnailUrl: string | null
    bannerUrl: string | null
    subscriberCount: bigint | null
    videoCount: number | null
    viewCount: bigint | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiresAt: Date | null
    accountEmail: string | null
    accountName: string | null
    isBrandAccount: boolean | null
    isActive: boolean | null
    connectedAt: Date | null
    lastSyncAt: Date | null
  }

  export type YouTubeChannelCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    customUrl: number
    thumbnailUrl: number
    bannerUrl: number
    subscriberCount: number
    videoCount: number
    viewCount: number
    accessToken: number
    refreshToken: number
    tokenExpiresAt: number
    accountEmail: number
    accountName: number
    isBrandAccount: number
    isActive: number
    connectedAt: number
    lastSyncAt: number
    _all: number
  }


  export type YouTubeChannelAvgAggregateInputType = {
    subscriberCount?: true
    videoCount?: true
    viewCount?: true
  }

  export type YouTubeChannelSumAggregateInputType = {
    subscriberCount?: true
    videoCount?: true
    viewCount?: true
  }

  export type YouTubeChannelMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    customUrl?: true
    thumbnailUrl?: true
    bannerUrl?: true
    subscriberCount?: true
    videoCount?: true
    viewCount?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    accountEmail?: true
    accountName?: true
    isBrandAccount?: true
    isActive?: true
    connectedAt?: true
    lastSyncAt?: true
  }

  export type YouTubeChannelMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    customUrl?: true
    thumbnailUrl?: true
    bannerUrl?: true
    subscriberCount?: true
    videoCount?: true
    viewCount?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    accountEmail?: true
    accountName?: true
    isBrandAccount?: true
    isActive?: true
    connectedAt?: true
    lastSyncAt?: true
  }

  export type YouTubeChannelCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    customUrl?: true
    thumbnailUrl?: true
    bannerUrl?: true
    subscriberCount?: true
    videoCount?: true
    viewCount?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    accountEmail?: true
    accountName?: true
    isBrandAccount?: true
    isActive?: true
    connectedAt?: true
    lastSyncAt?: true
    _all?: true
  }

  export type YouTubeChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YouTubeChannel to aggregate.
     */
    where?: YouTubeChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YouTubeChannels to fetch.
     */
    orderBy?: YouTubeChannelOrderByWithRelationInput | YouTubeChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YouTubeChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YouTubeChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YouTubeChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YouTubeChannels
    **/
    _count?: true | YouTubeChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YouTubeChannelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YouTubeChannelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YouTubeChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YouTubeChannelMaxAggregateInputType
  }

  export type GetYouTubeChannelAggregateType<T extends YouTubeChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateYouTubeChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYouTubeChannel[P]>
      : GetScalarType<T[P], AggregateYouTubeChannel[P]>
  }




  export type YouTubeChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YouTubeChannelWhereInput
    orderBy?: YouTubeChannelOrderByWithAggregationInput | YouTubeChannelOrderByWithAggregationInput[]
    by: YouTubeChannelScalarFieldEnum[] | YouTubeChannelScalarFieldEnum
    having?: YouTubeChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YouTubeChannelCountAggregateInputType | true
    _avg?: YouTubeChannelAvgAggregateInputType
    _sum?: YouTubeChannelSumAggregateInputType
    _min?: YouTubeChannelMinAggregateInputType
    _max?: YouTubeChannelMaxAggregateInputType
  }

  export type YouTubeChannelGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    customUrl: string | null
    thumbnailUrl: string | null
    bannerUrl: string | null
    subscriberCount: bigint
    videoCount: number
    viewCount: bigint
    accessToken: string
    refreshToken: string | null
    tokenExpiresAt: Date | null
    accountEmail: string | null
    accountName: string | null
    isBrandAccount: boolean
    isActive: boolean
    connectedAt: Date
    lastSyncAt: Date | null
    _count: YouTubeChannelCountAggregateOutputType | null
    _avg: YouTubeChannelAvgAggregateOutputType | null
    _sum: YouTubeChannelSumAggregateOutputType | null
    _min: YouTubeChannelMinAggregateOutputType | null
    _max: YouTubeChannelMaxAggregateOutputType | null
  }

  type GetYouTubeChannelGroupByPayload<T extends YouTubeChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YouTubeChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YouTubeChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YouTubeChannelGroupByOutputType[P]>
            : GetScalarType<T[P], YouTubeChannelGroupByOutputType[P]>
        }
      >
    >


  export type YouTubeChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    customUrl?: boolean
    thumbnailUrl?: boolean
    bannerUrl?: boolean
    subscriberCount?: boolean
    videoCount?: boolean
    viewCount?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    accountEmail?: boolean
    accountName?: boolean
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: boolean
    lastSyncAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    videos?: boolean | YouTubeChannel$videosArgs<ExtArgs>
    schedules?: boolean | YouTubeChannel$schedulesArgs<ExtArgs>
    analytics?: boolean | YouTubeChannel$analyticsArgs<ExtArgs>
    _count?: boolean | YouTubeChannelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["youTubeChannel"]>

  export type YouTubeChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    customUrl?: boolean
    thumbnailUrl?: boolean
    bannerUrl?: boolean
    subscriberCount?: boolean
    videoCount?: boolean
    viewCount?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    accountEmail?: boolean
    accountName?: boolean
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: boolean
    lastSyncAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["youTubeChannel"]>

  export type YouTubeChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    customUrl?: boolean
    thumbnailUrl?: boolean
    bannerUrl?: boolean
    subscriberCount?: boolean
    videoCount?: boolean
    viewCount?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    accountEmail?: boolean
    accountName?: boolean
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: boolean
    lastSyncAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["youTubeChannel"]>

  export type YouTubeChannelSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    customUrl?: boolean
    thumbnailUrl?: boolean
    bannerUrl?: boolean
    subscriberCount?: boolean
    videoCount?: boolean
    viewCount?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    accountEmail?: boolean
    accountName?: boolean
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: boolean
    lastSyncAt?: boolean
  }

  export type YouTubeChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "customUrl" | "thumbnailUrl" | "bannerUrl" | "subscriberCount" | "videoCount" | "viewCount" | "accessToken" | "refreshToken" | "tokenExpiresAt" | "accountEmail" | "accountName" | "isBrandAccount" | "isActive" | "connectedAt" | "lastSyncAt", ExtArgs["result"]["youTubeChannel"]>
  export type YouTubeChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    videos?: boolean | YouTubeChannel$videosArgs<ExtArgs>
    schedules?: boolean | YouTubeChannel$schedulesArgs<ExtArgs>
    analytics?: boolean | YouTubeChannel$analyticsArgs<ExtArgs>
    _count?: boolean | YouTubeChannelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type YouTubeChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type YouTubeChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $YouTubeChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "YouTubeChannel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      videos: Prisma.$VideoPayload<ExtArgs>[]
      schedules: Prisma.$ScheduledUploadPayload<ExtArgs>[]
      analytics: Prisma.$ChannelAnalyticsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      customUrl: string | null
      thumbnailUrl: string | null
      bannerUrl: string | null
      subscriberCount: bigint
      videoCount: number
      viewCount: bigint
      accessToken: string
      refreshToken: string | null
      tokenExpiresAt: Date | null
      accountEmail: string | null
      accountName: string | null
      isBrandAccount: boolean
      isActive: boolean
      connectedAt: Date
      lastSyncAt: Date | null
    }, ExtArgs["result"]["youTubeChannel"]>
    composites: {}
  }

  type YouTubeChannelGetPayload<S extends boolean | null | undefined | YouTubeChannelDefaultArgs> = $Result.GetResult<Prisma.$YouTubeChannelPayload, S>

  type YouTubeChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YouTubeChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YouTubeChannelCountAggregateInputType | true
    }

  export interface YouTubeChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YouTubeChannel'], meta: { name: 'YouTubeChannel' } }
    /**
     * Find zero or one YouTubeChannel that matches the filter.
     * @param {YouTubeChannelFindUniqueArgs} args - Arguments to find a YouTubeChannel
     * @example
     * // Get one YouTubeChannel
     * const youTubeChannel = await prisma.youTubeChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YouTubeChannelFindUniqueArgs>(args: SelectSubset<T, YouTubeChannelFindUniqueArgs<ExtArgs>>): Prisma__YouTubeChannelClient<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one YouTubeChannel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YouTubeChannelFindUniqueOrThrowArgs} args - Arguments to find a YouTubeChannel
     * @example
     * // Get one YouTubeChannel
     * const youTubeChannel = await prisma.youTubeChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YouTubeChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, YouTubeChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YouTubeChannelClient<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first YouTubeChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouTubeChannelFindFirstArgs} args - Arguments to find a YouTubeChannel
     * @example
     * // Get one YouTubeChannel
     * const youTubeChannel = await prisma.youTubeChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YouTubeChannelFindFirstArgs>(args?: SelectSubset<T, YouTubeChannelFindFirstArgs<ExtArgs>>): Prisma__YouTubeChannelClient<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first YouTubeChannel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouTubeChannelFindFirstOrThrowArgs} args - Arguments to find a YouTubeChannel
     * @example
     * // Get one YouTubeChannel
     * const youTubeChannel = await prisma.youTubeChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YouTubeChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, YouTubeChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__YouTubeChannelClient<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more YouTubeChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouTubeChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YouTubeChannels
     * const youTubeChannels = await prisma.youTubeChannel.findMany()
     * 
     * // Get first 10 YouTubeChannels
     * const youTubeChannels = await prisma.youTubeChannel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const youTubeChannelWithIdOnly = await prisma.youTubeChannel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YouTubeChannelFindManyArgs>(args?: SelectSubset<T, YouTubeChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a YouTubeChannel.
     * @param {YouTubeChannelCreateArgs} args - Arguments to create a YouTubeChannel.
     * @example
     * // Create one YouTubeChannel
     * const YouTubeChannel = await prisma.youTubeChannel.create({
     *   data: {
     *     // ... data to create a YouTubeChannel
     *   }
     * })
     * 
     */
    create<T extends YouTubeChannelCreateArgs>(args: SelectSubset<T, YouTubeChannelCreateArgs<ExtArgs>>): Prisma__YouTubeChannelClient<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many YouTubeChannels.
     * @param {YouTubeChannelCreateManyArgs} args - Arguments to create many YouTubeChannels.
     * @example
     * // Create many YouTubeChannels
     * const youTubeChannel = await prisma.youTubeChannel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YouTubeChannelCreateManyArgs>(args?: SelectSubset<T, YouTubeChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many YouTubeChannels and returns the data saved in the database.
     * @param {YouTubeChannelCreateManyAndReturnArgs} args - Arguments to create many YouTubeChannels.
     * @example
     * // Create many YouTubeChannels
     * const youTubeChannel = await prisma.youTubeChannel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many YouTubeChannels and only return the `id`
     * const youTubeChannelWithIdOnly = await prisma.youTubeChannel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YouTubeChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, YouTubeChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a YouTubeChannel.
     * @param {YouTubeChannelDeleteArgs} args - Arguments to delete one YouTubeChannel.
     * @example
     * // Delete one YouTubeChannel
     * const YouTubeChannel = await prisma.youTubeChannel.delete({
     *   where: {
     *     // ... filter to delete one YouTubeChannel
     *   }
     * })
     * 
     */
    delete<T extends YouTubeChannelDeleteArgs>(args: SelectSubset<T, YouTubeChannelDeleteArgs<ExtArgs>>): Prisma__YouTubeChannelClient<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one YouTubeChannel.
     * @param {YouTubeChannelUpdateArgs} args - Arguments to update one YouTubeChannel.
     * @example
     * // Update one YouTubeChannel
     * const youTubeChannel = await prisma.youTubeChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YouTubeChannelUpdateArgs>(args: SelectSubset<T, YouTubeChannelUpdateArgs<ExtArgs>>): Prisma__YouTubeChannelClient<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more YouTubeChannels.
     * @param {YouTubeChannelDeleteManyArgs} args - Arguments to filter YouTubeChannels to delete.
     * @example
     * // Delete a few YouTubeChannels
     * const { count } = await prisma.youTubeChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YouTubeChannelDeleteManyArgs>(args?: SelectSubset<T, YouTubeChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YouTubeChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouTubeChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YouTubeChannels
     * const youTubeChannel = await prisma.youTubeChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YouTubeChannelUpdateManyArgs>(args: SelectSubset<T, YouTubeChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YouTubeChannels and returns the data updated in the database.
     * @param {YouTubeChannelUpdateManyAndReturnArgs} args - Arguments to update many YouTubeChannels.
     * @example
     * // Update many YouTubeChannels
     * const youTubeChannel = await prisma.youTubeChannel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more YouTubeChannels and only return the `id`
     * const youTubeChannelWithIdOnly = await prisma.youTubeChannel.updateManyAndReturn({
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
    updateManyAndReturn<T extends YouTubeChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, YouTubeChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one YouTubeChannel.
     * @param {YouTubeChannelUpsertArgs} args - Arguments to update or create a YouTubeChannel.
     * @example
     * // Update or create a YouTubeChannel
     * const youTubeChannel = await prisma.youTubeChannel.upsert({
     *   create: {
     *     // ... data to create a YouTubeChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YouTubeChannel we want to update
     *   }
     * })
     */
    upsert<T extends YouTubeChannelUpsertArgs>(args: SelectSubset<T, YouTubeChannelUpsertArgs<ExtArgs>>): Prisma__YouTubeChannelClient<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of YouTubeChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouTubeChannelCountArgs} args - Arguments to filter YouTubeChannels to count.
     * @example
     * // Count the number of YouTubeChannels
     * const count = await prisma.youTubeChannel.count({
     *   where: {
     *     // ... the filter for the YouTubeChannels we want to count
     *   }
     * })
    **/
    count<T extends YouTubeChannelCountArgs>(
      args?: Subset<T, YouTubeChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YouTubeChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YouTubeChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouTubeChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YouTubeChannelAggregateArgs>(args: Subset<T, YouTubeChannelAggregateArgs>): Prisma.PrismaPromise<GetYouTubeChannelAggregateType<T>>

    /**
     * Group by YouTubeChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouTubeChannelGroupByArgs} args - Group by arguments.
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
      T extends YouTubeChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YouTubeChannelGroupByArgs['orderBy'] }
        : { orderBy?: YouTubeChannelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, YouTubeChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYouTubeChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YouTubeChannel model
   */
  readonly fields: YouTubeChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YouTubeChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YouTubeChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videos<T extends YouTubeChannel$videosArgs<ExtArgs> = {}>(args?: Subset<T, YouTubeChannel$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends YouTubeChannel$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, YouTubeChannel$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analytics<T extends YouTubeChannel$analyticsArgs<ExtArgs> = {}>(args?: Subset<T, YouTubeChannel$analyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the YouTubeChannel model
   */
  interface YouTubeChannelFieldRefs {
    readonly id: FieldRef<"YouTubeChannel", 'String'>
    readonly userId: FieldRef<"YouTubeChannel", 'String'>
    readonly title: FieldRef<"YouTubeChannel", 'String'>
    readonly description: FieldRef<"YouTubeChannel", 'String'>
    readonly customUrl: FieldRef<"YouTubeChannel", 'String'>
    readonly thumbnailUrl: FieldRef<"YouTubeChannel", 'String'>
    readonly bannerUrl: FieldRef<"YouTubeChannel", 'String'>
    readonly subscriberCount: FieldRef<"YouTubeChannel", 'BigInt'>
    readonly videoCount: FieldRef<"YouTubeChannel", 'Int'>
    readonly viewCount: FieldRef<"YouTubeChannel", 'BigInt'>
    readonly accessToken: FieldRef<"YouTubeChannel", 'String'>
    readonly refreshToken: FieldRef<"YouTubeChannel", 'String'>
    readonly tokenExpiresAt: FieldRef<"YouTubeChannel", 'DateTime'>
    readonly accountEmail: FieldRef<"YouTubeChannel", 'String'>
    readonly accountName: FieldRef<"YouTubeChannel", 'String'>
    readonly isBrandAccount: FieldRef<"YouTubeChannel", 'Boolean'>
    readonly isActive: FieldRef<"YouTubeChannel", 'Boolean'>
    readonly connectedAt: FieldRef<"YouTubeChannel", 'DateTime'>
    readonly lastSyncAt: FieldRef<"YouTubeChannel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * YouTubeChannel findUnique
   */
  export type YouTubeChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouTubeChannel
     */
    select?: YouTubeChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouTubeChannel
     */
    omit?: YouTubeChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouTubeChannelInclude<ExtArgs> | null
    /**
     * Filter, which YouTubeChannel to fetch.
     */
    where: YouTubeChannelWhereUniqueInput
  }

  /**
   * YouTubeChannel findUniqueOrThrow
   */
  export type YouTubeChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouTubeChannel
     */
    select?: YouTubeChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouTubeChannel
     */
    omit?: YouTubeChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouTubeChannelInclude<ExtArgs> | null
    /**
     * Filter, which YouTubeChannel to fetch.
     */
    where: YouTubeChannelWhereUniqueInput
  }

  /**
   * YouTubeChannel findFirst
   */
  export type YouTubeChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouTubeChannel
     */
    select?: YouTubeChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouTubeChannel
     */
    omit?: YouTubeChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouTubeChannelInclude<ExtArgs> | null
    /**
     * Filter, which YouTubeChannel to fetch.
     */
    where?: YouTubeChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YouTubeChannels to fetch.
     */
    orderBy?: YouTubeChannelOrderByWithRelationInput | YouTubeChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YouTubeChannels.
     */
    cursor?: YouTubeChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YouTubeChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YouTubeChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YouTubeChannels.
     */
    distinct?: YouTubeChannelScalarFieldEnum | YouTubeChannelScalarFieldEnum[]
  }

  /**
   * YouTubeChannel findFirstOrThrow
   */
  export type YouTubeChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouTubeChannel
     */
    select?: YouTubeChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouTubeChannel
     */
    omit?: YouTubeChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouTubeChannelInclude<ExtArgs> | null
    /**
     * Filter, which YouTubeChannel to fetch.
     */
    where?: YouTubeChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YouTubeChannels to fetch.
     */
    orderBy?: YouTubeChannelOrderByWithRelationInput | YouTubeChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YouTubeChannels.
     */
    cursor?: YouTubeChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YouTubeChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YouTubeChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YouTubeChannels.
     */
    distinct?: YouTubeChannelScalarFieldEnum | YouTubeChannelScalarFieldEnum[]
  }

  /**
   * YouTubeChannel findMany
   */
  export type YouTubeChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouTubeChannel
     */
    select?: YouTubeChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouTubeChannel
     */
    omit?: YouTubeChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouTubeChannelInclude<ExtArgs> | null
    /**
     * Filter, which YouTubeChannels to fetch.
     */
    where?: YouTubeChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YouTubeChannels to fetch.
     */
    orderBy?: YouTubeChannelOrderByWithRelationInput | YouTubeChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YouTubeChannels.
     */
    cursor?: YouTubeChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YouTubeChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YouTubeChannels.
     */
    skip?: number
    distinct?: YouTubeChannelScalarFieldEnum | YouTubeChannelScalarFieldEnum[]
  }

  /**
   * YouTubeChannel create
   */
  export type YouTubeChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouTubeChannel
     */
    select?: YouTubeChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouTubeChannel
     */
    omit?: YouTubeChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouTubeChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a YouTubeChannel.
     */
    data: XOR<YouTubeChannelCreateInput, YouTubeChannelUncheckedCreateInput>
  }

  /**
   * YouTubeChannel createMany
   */
  export type YouTubeChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YouTubeChannels.
     */
    data: YouTubeChannelCreateManyInput | YouTubeChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YouTubeChannel createManyAndReturn
   */
  export type YouTubeChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouTubeChannel
     */
    select?: YouTubeChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YouTubeChannel
     */
    omit?: YouTubeChannelOmit<ExtArgs> | null
    /**
     * The data used to create many YouTubeChannels.
     */
    data: YouTubeChannelCreateManyInput | YouTubeChannelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouTubeChannelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * YouTubeChannel update
   */
  export type YouTubeChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouTubeChannel
     */
    select?: YouTubeChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouTubeChannel
     */
    omit?: YouTubeChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouTubeChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a YouTubeChannel.
     */
    data: XOR<YouTubeChannelUpdateInput, YouTubeChannelUncheckedUpdateInput>
    /**
     * Choose, which YouTubeChannel to update.
     */
    where: YouTubeChannelWhereUniqueInput
  }

  /**
   * YouTubeChannel updateMany
   */
  export type YouTubeChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YouTubeChannels.
     */
    data: XOR<YouTubeChannelUpdateManyMutationInput, YouTubeChannelUncheckedUpdateManyInput>
    /**
     * Filter which YouTubeChannels to update
     */
    where?: YouTubeChannelWhereInput
    /**
     * Limit how many YouTubeChannels to update.
     */
    limit?: number
  }

  /**
   * YouTubeChannel updateManyAndReturn
   */
  export type YouTubeChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouTubeChannel
     */
    select?: YouTubeChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YouTubeChannel
     */
    omit?: YouTubeChannelOmit<ExtArgs> | null
    /**
     * The data used to update YouTubeChannels.
     */
    data: XOR<YouTubeChannelUpdateManyMutationInput, YouTubeChannelUncheckedUpdateManyInput>
    /**
     * Filter which YouTubeChannels to update
     */
    where?: YouTubeChannelWhereInput
    /**
     * Limit how many YouTubeChannels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouTubeChannelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * YouTubeChannel upsert
   */
  export type YouTubeChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouTubeChannel
     */
    select?: YouTubeChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouTubeChannel
     */
    omit?: YouTubeChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouTubeChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the YouTubeChannel to update in case it exists.
     */
    where: YouTubeChannelWhereUniqueInput
    /**
     * In case the YouTubeChannel found by the `where` argument doesn't exist, create a new YouTubeChannel with this data.
     */
    create: XOR<YouTubeChannelCreateInput, YouTubeChannelUncheckedCreateInput>
    /**
     * In case the YouTubeChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YouTubeChannelUpdateInput, YouTubeChannelUncheckedUpdateInput>
  }

  /**
   * YouTubeChannel delete
   */
  export type YouTubeChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouTubeChannel
     */
    select?: YouTubeChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouTubeChannel
     */
    omit?: YouTubeChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouTubeChannelInclude<ExtArgs> | null
    /**
     * Filter which YouTubeChannel to delete.
     */
    where: YouTubeChannelWhereUniqueInput
  }

  /**
   * YouTubeChannel deleteMany
   */
  export type YouTubeChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YouTubeChannels to delete
     */
    where?: YouTubeChannelWhereInput
    /**
     * Limit how many YouTubeChannels to delete.
     */
    limit?: number
  }

  /**
   * YouTubeChannel.videos
   */
  export type YouTubeChannel$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * YouTubeChannel.schedules
   */
  export type YouTubeChannel$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledUpload
     */
    select?: ScheduledUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledUpload
     */
    omit?: ScheduledUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledUploadInclude<ExtArgs> | null
    where?: ScheduledUploadWhereInput
    orderBy?: ScheduledUploadOrderByWithRelationInput | ScheduledUploadOrderByWithRelationInput[]
    cursor?: ScheduledUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledUploadScalarFieldEnum | ScheduledUploadScalarFieldEnum[]
  }

  /**
   * YouTubeChannel.analytics
   */
  export type YouTubeChannel$analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelAnalytics
     */
    select?: ChannelAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelAnalytics
     */
    omit?: ChannelAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelAnalyticsInclude<ExtArgs> | null
    where?: ChannelAnalyticsWhereInput
    orderBy?: ChannelAnalyticsOrderByWithRelationInput | ChannelAnalyticsOrderByWithRelationInput[]
    cursor?: ChannelAnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelAnalyticsScalarFieldEnum | ChannelAnalyticsScalarFieldEnum[]
  }

  /**
   * YouTubeChannel without action
   */
  export type YouTubeChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouTubeChannel
     */
    select?: YouTubeChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouTubeChannel
     */
    omit?: YouTubeChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouTubeChannelInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    duration: number | null
  }

  export type VideoSumAggregateOutputType = {
    duration: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    youtubeId: string | null
    userId: string | null
    channelId: string | null
    title: string | null
    description: string | null
    categoryId: string | null
    thumbnailUrl: string | null
    thumbnailGcsUrl: string | null
    videoGcsUrl: string | null
    duration: number | null
    privacyStatus: $Enums.PrivacyStatus | null
    madeForKids: $Enums.MadeForKids | null
    ageRestriction: boolean | null
    license: $Enums.License | null
    language: string | null
    allowComments: boolean | null
    allowEmbedding: boolean | null
    publishToFeed: boolean | null
    isPremiere: boolean | null
    status: $Enums.VideoStatus | null
    publishedAt: Date | null
    scheduledFor: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    youtubeId: string | null
    userId: string | null
    channelId: string | null
    title: string | null
    description: string | null
    categoryId: string | null
    thumbnailUrl: string | null
    thumbnailGcsUrl: string | null
    videoGcsUrl: string | null
    duration: number | null
    privacyStatus: $Enums.PrivacyStatus | null
    madeForKids: $Enums.MadeForKids | null
    ageRestriction: boolean | null
    license: $Enums.License | null
    language: string | null
    allowComments: boolean | null
    allowEmbedding: boolean | null
    publishToFeed: boolean | null
    isPremiere: boolean | null
    status: $Enums.VideoStatus | null
    publishedAt: Date | null
    scheduledFor: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    youtubeId: number
    userId: number
    channelId: number
    title: number
    description: number
    tags: number
    hashtags: number
    categoryId: number
    thumbnailUrl: number
    thumbnailGcsUrl: number
    videoGcsUrl: number
    duration: number
    privacyStatus: number
    madeForKids: number
    ageRestriction: number
    license: number
    language: number
    allowComments: number
    allowEmbedding: number
    publishToFeed: number
    isPremiere: number
    status: number
    publishedAt: number
    scheduledFor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    duration?: true
  }

  export type VideoSumAggregateInputType = {
    duration?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    youtubeId?: true
    userId?: true
    channelId?: true
    title?: true
    description?: true
    categoryId?: true
    thumbnailUrl?: true
    thumbnailGcsUrl?: true
    videoGcsUrl?: true
    duration?: true
    privacyStatus?: true
    madeForKids?: true
    ageRestriction?: true
    license?: true
    language?: true
    allowComments?: true
    allowEmbedding?: true
    publishToFeed?: true
    isPremiere?: true
    status?: true
    publishedAt?: true
    scheduledFor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    youtubeId?: true
    userId?: true
    channelId?: true
    title?: true
    description?: true
    categoryId?: true
    thumbnailUrl?: true
    thumbnailGcsUrl?: true
    videoGcsUrl?: true
    duration?: true
    privacyStatus?: true
    madeForKids?: true
    ageRestriction?: true
    license?: true
    language?: true
    allowComments?: true
    allowEmbedding?: true
    publishToFeed?: true
    isPremiere?: true
    status?: true
    publishedAt?: true
    scheduledFor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    youtubeId?: true
    userId?: true
    channelId?: true
    title?: true
    description?: true
    tags?: true
    hashtags?: true
    categoryId?: true
    thumbnailUrl?: true
    thumbnailGcsUrl?: true
    videoGcsUrl?: true
    duration?: true
    privacyStatus?: true
    madeForKids?: true
    ageRestriction?: true
    license?: true
    language?: true
    allowComments?: true
    allowEmbedding?: true
    publishToFeed?: true
    isPremiere?: true
    status?: true
    publishedAt?: true
    scheduledFor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: string
    youtubeId: string | null
    userId: string
    channelId: string
    title: string
    description: string
    tags: string[]
    hashtags: string[]
    categoryId: string
    thumbnailUrl: string | null
    thumbnailGcsUrl: string | null
    videoGcsUrl: string | null
    duration: number | null
    privacyStatus: $Enums.PrivacyStatus
    madeForKids: $Enums.MadeForKids
    ageRestriction: boolean
    license: $Enums.License
    language: string
    allowComments: boolean
    allowEmbedding: boolean
    publishToFeed: boolean
    isPremiere: boolean
    status: $Enums.VideoStatus
    publishedAt: Date | null
    scheduledFor: Date | null
    createdAt: Date
    updatedAt: Date
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    youtubeId?: boolean
    userId?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    hashtags?: boolean
    categoryId?: boolean
    thumbnailUrl?: boolean
    thumbnailGcsUrl?: boolean
    videoGcsUrl?: boolean
    duration?: boolean
    privacyStatus?: boolean
    madeForKids?: boolean
    ageRestriction?: boolean
    license?: boolean
    language?: boolean
    allowComments?: boolean
    allowEmbedding?: boolean
    publishToFeed?: boolean
    isPremiere?: boolean
    status?: boolean
    publishedAt?: boolean
    scheduledFor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    youtubeId?: boolean
    userId?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    hashtags?: boolean
    categoryId?: boolean
    thumbnailUrl?: boolean
    thumbnailGcsUrl?: boolean
    videoGcsUrl?: boolean
    duration?: boolean
    privacyStatus?: boolean
    madeForKids?: boolean
    ageRestriction?: boolean
    license?: boolean
    language?: boolean
    allowComments?: boolean
    allowEmbedding?: boolean
    publishToFeed?: boolean
    isPremiere?: boolean
    status?: boolean
    publishedAt?: boolean
    scheduledFor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    youtubeId?: boolean
    userId?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    hashtags?: boolean
    categoryId?: boolean
    thumbnailUrl?: boolean
    thumbnailGcsUrl?: boolean
    videoGcsUrl?: boolean
    duration?: boolean
    privacyStatus?: boolean
    madeForKids?: boolean
    ageRestriction?: boolean
    license?: boolean
    language?: boolean
    allowComments?: boolean
    allowEmbedding?: boolean
    publishToFeed?: boolean
    isPremiere?: boolean
    status?: boolean
    publishedAt?: boolean
    scheduledFor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    youtubeId?: boolean
    userId?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    hashtags?: boolean
    categoryId?: boolean
    thumbnailUrl?: boolean
    thumbnailGcsUrl?: boolean
    videoGcsUrl?: boolean
    duration?: boolean
    privacyStatus?: boolean
    madeForKids?: boolean
    ageRestriction?: boolean
    license?: boolean
    language?: boolean
    allowComments?: boolean
    allowEmbedding?: boolean
    publishToFeed?: boolean
    isPremiere?: boolean
    status?: boolean
    publishedAt?: boolean
    scheduledFor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "youtubeId" | "userId" | "channelId" | "title" | "description" | "tags" | "hashtags" | "categoryId" | "thumbnailUrl" | "thumbnailGcsUrl" | "videoGcsUrl" | "duration" | "privacyStatus" | "madeForKids" | "ageRestriction" | "license" | "language" | "allowComments" | "allowEmbedding" | "publishToFeed" | "isPremiere" | "status" | "publishedAt" | "scheduledFor" | "createdAt" | "updatedAt", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      channel: Prisma.$YouTubeChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      youtubeId: string | null
      userId: string
      channelId: string
      title: string
      description: string
      tags: string[]
      hashtags: string[]
      categoryId: string
      thumbnailUrl: string | null
      thumbnailGcsUrl: string | null
      videoGcsUrl: string | null
      duration: number | null
      privacyStatus: $Enums.PrivacyStatus
      madeForKids: $Enums.MadeForKids
      ageRestriction: boolean
      license: $Enums.License
      language: string
      allowComments: boolean
      allowEmbedding: boolean
      publishToFeed: boolean
      isPremiere: boolean
      status: $Enums.VideoStatus
      publishedAt: Date | null
      scheduledFor: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel<T extends YouTubeChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, YouTubeChannelDefaultArgs<ExtArgs>>): Prisma__YouTubeChannelClient<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'String'>
    readonly youtubeId: FieldRef<"Video", 'String'>
    readonly userId: FieldRef<"Video", 'String'>
    readonly channelId: FieldRef<"Video", 'String'>
    readonly title: FieldRef<"Video", 'String'>
    readonly description: FieldRef<"Video", 'String'>
    readonly tags: FieldRef<"Video", 'String[]'>
    readonly hashtags: FieldRef<"Video", 'String[]'>
    readonly categoryId: FieldRef<"Video", 'String'>
    readonly thumbnailUrl: FieldRef<"Video", 'String'>
    readonly thumbnailGcsUrl: FieldRef<"Video", 'String'>
    readonly videoGcsUrl: FieldRef<"Video", 'String'>
    readonly duration: FieldRef<"Video", 'Int'>
    readonly privacyStatus: FieldRef<"Video", 'PrivacyStatus'>
    readonly madeForKids: FieldRef<"Video", 'MadeForKids'>
    readonly ageRestriction: FieldRef<"Video", 'Boolean'>
    readonly license: FieldRef<"Video", 'License'>
    readonly language: FieldRef<"Video", 'String'>
    readonly allowComments: FieldRef<"Video", 'Boolean'>
    readonly allowEmbedding: FieldRef<"Video", 'Boolean'>
    readonly publishToFeed: FieldRef<"Video", 'Boolean'>
    readonly isPremiere: FieldRef<"Video", 'Boolean'>
    readonly status: FieldRef<"Video", 'VideoStatus'>
    readonly publishedAt: FieldRef<"Video", 'DateTime'>
    readonly scheduledFor: FieldRef<"Video", 'DateTime'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
    readonly updatedAt: FieldRef<"Video", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model VideoDraft
   */

  export type AggregateVideoDraft = {
    _count: VideoDraftCountAggregateOutputType | null
    _min: VideoDraftMinAggregateOutputType | null
    _max: VideoDraftMaxAggregateOutputType | null
  }

  export type VideoDraftMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    title: string | null
    description: string | null
    categoryId: string | null
    privacyStatus: $Enums.PrivacyStatus | null
    thumbnailData: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoDraftMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    title: string | null
    description: string | null
    categoryId: string | null
    privacyStatus: $Enums.PrivacyStatus | null
    thumbnailData: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoDraftCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    title: number
    description: number
    tags: number
    hashtags: number
    categoryId: number
    privacyStatus: number
    thumbnailData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoDraftMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    title?: true
    description?: true
    categoryId?: true
    privacyStatus?: true
    thumbnailData?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoDraftMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    title?: true
    description?: true
    categoryId?: true
    privacyStatus?: true
    thumbnailData?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoDraftCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    title?: true
    description?: true
    tags?: true
    hashtags?: true
    categoryId?: true
    privacyStatus?: true
    thumbnailData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoDraftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoDraft to aggregate.
     */
    where?: VideoDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoDrafts to fetch.
     */
    orderBy?: VideoDraftOrderByWithRelationInput | VideoDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoDrafts
    **/
    _count?: true | VideoDraftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoDraftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoDraftMaxAggregateInputType
  }

  export type GetVideoDraftAggregateType<T extends VideoDraftAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoDraft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoDraft[P]>
      : GetScalarType<T[P], AggregateVideoDraft[P]>
  }




  export type VideoDraftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoDraftWhereInput
    orderBy?: VideoDraftOrderByWithAggregationInput | VideoDraftOrderByWithAggregationInput[]
    by: VideoDraftScalarFieldEnum[] | VideoDraftScalarFieldEnum
    having?: VideoDraftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoDraftCountAggregateInputType | true
    _min?: VideoDraftMinAggregateInputType
    _max?: VideoDraftMaxAggregateInputType
  }

  export type VideoDraftGroupByOutputType = {
    id: string
    userId: string
    name: string
    title: string
    description: string
    tags: string[]
    hashtags: string[]
    categoryId: string
    privacyStatus: $Enums.PrivacyStatus
    thumbnailData: string | null
    createdAt: Date
    updatedAt: Date
    _count: VideoDraftCountAggregateOutputType | null
    _min: VideoDraftMinAggregateOutputType | null
    _max: VideoDraftMaxAggregateOutputType | null
  }

  type GetVideoDraftGroupByPayload<T extends VideoDraftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoDraftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoDraftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoDraftGroupByOutputType[P]>
            : GetScalarType<T[P], VideoDraftGroupByOutputType[P]>
        }
      >
    >


  export type VideoDraftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    hashtags?: boolean
    categoryId?: boolean
    privacyStatus?: boolean
    thumbnailData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoDraft"]>

  export type VideoDraftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    hashtags?: boolean
    categoryId?: boolean
    privacyStatus?: boolean
    thumbnailData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoDraft"]>

  export type VideoDraftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    hashtags?: boolean
    categoryId?: boolean
    privacyStatus?: boolean
    thumbnailData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoDraft"]>

  export type VideoDraftSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    hashtags?: boolean
    categoryId?: boolean
    privacyStatus?: boolean
    thumbnailData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoDraftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "title" | "description" | "tags" | "hashtags" | "categoryId" | "privacyStatus" | "thumbnailData" | "createdAt" | "updatedAt", ExtArgs["result"]["videoDraft"]>
  export type VideoDraftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VideoDraftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VideoDraftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VideoDraftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoDraft"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      title: string
      description: string
      tags: string[]
      hashtags: string[]
      categoryId: string
      privacyStatus: $Enums.PrivacyStatus
      thumbnailData: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["videoDraft"]>
    composites: {}
  }

  type VideoDraftGetPayload<S extends boolean | null | undefined | VideoDraftDefaultArgs> = $Result.GetResult<Prisma.$VideoDraftPayload, S>

  type VideoDraftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoDraftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoDraftCountAggregateInputType | true
    }

  export interface VideoDraftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoDraft'], meta: { name: 'VideoDraft' } }
    /**
     * Find zero or one VideoDraft that matches the filter.
     * @param {VideoDraftFindUniqueArgs} args - Arguments to find a VideoDraft
     * @example
     * // Get one VideoDraft
     * const videoDraft = await prisma.videoDraft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoDraftFindUniqueArgs>(args: SelectSubset<T, VideoDraftFindUniqueArgs<ExtArgs>>): Prisma__VideoDraftClient<$Result.GetResult<Prisma.$VideoDraftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoDraft that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoDraftFindUniqueOrThrowArgs} args - Arguments to find a VideoDraft
     * @example
     * // Get one VideoDraft
     * const videoDraft = await prisma.videoDraft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoDraftFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoDraftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoDraftClient<$Result.GetResult<Prisma.$VideoDraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoDraft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoDraftFindFirstArgs} args - Arguments to find a VideoDraft
     * @example
     * // Get one VideoDraft
     * const videoDraft = await prisma.videoDraft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoDraftFindFirstArgs>(args?: SelectSubset<T, VideoDraftFindFirstArgs<ExtArgs>>): Prisma__VideoDraftClient<$Result.GetResult<Prisma.$VideoDraftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoDraft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoDraftFindFirstOrThrowArgs} args - Arguments to find a VideoDraft
     * @example
     * // Get one VideoDraft
     * const videoDraft = await prisma.videoDraft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoDraftFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoDraftFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoDraftClient<$Result.GetResult<Prisma.$VideoDraftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoDrafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoDraftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoDrafts
     * const videoDrafts = await prisma.videoDraft.findMany()
     * 
     * // Get first 10 VideoDrafts
     * const videoDrafts = await prisma.videoDraft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoDraftWithIdOnly = await prisma.videoDraft.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoDraftFindManyArgs>(args?: SelectSubset<T, VideoDraftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoDraftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoDraft.
     * @param {VideoDraftCreateArgs} args - Arguments to create a VideoDraft.
     * @example
     * // Create one VideoDraft
     * const VideoDraft = await prisma.videoDraft.create({
     *   data: {
     *     // ... data to create a VideoDraft
     *   }
     * })
     * 
     */
    create<T extends VideoDraftCreateArgs>(args: SelectSubset<T, VideoDraftCreateArgs<ExtArgs>>): Prisma__VideoDraftClient<$Result.GetResult<Prisma.$VideoDraftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoDrafts.
     * @param {VideoDraftCreateManyArgs} args - Arguments to create many VideoDrafts.
     * @example
     * // Create many VideoDrafts
     * const videoDraft = await prisma.videoDraft.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoDraftCreateManyArgs>(args?: SelectSubset<T, VideoDraftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoDrafts and returns the data saved in the database.
     * @param {VideoDraftCreateManyAndReturnArgs} args - Arguments to create many VideoDrafts.
     * @example
     * // Create many VideoDrafts
     * const videoDraft = await prisma.videoDraft.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoDrafts and only return the `id`
     * const videoDraftWithIdOnly = await prisma.videoDraft.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoDraftCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoDraftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoDraftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoDraft.
     * @param {VideoDraftDeleteArgs} args - Arguments to delete one VideoDraft.
     * @example
     * // Delete one VideoDraft
     * const VideoDraft = await prisma.videoDraft.delete({
     *   where: {
     *     // ... filter to delete one VideoDraft
     *   }
     * })
     * 
     */
    delete<T extends VideoDraftDeleteArgs>(args: SelectSubset<T, VideoDraftDeleteArgs<ExtArgs>>): Prisma__VideoDraftClient<$Result.GetResult<Prisma.$VideoDraftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoDraft.
     * @param {VideoDraftUpdateArgs} args - Arguments to update one VideoDraft.
     * @example
     * // Update one VideoDraft
     * const videoDraft = await prisma.videoDraft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoDraftUpdateArgs>(args: SelectSubset<T, VideoDraftUpdateArgs<ExtArgs>>): Prisma__VideoDraftClient<$Result.GetResult<Prisma.$VideoDraftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoDrafts.
     * @param {VideoDraftDeleteManyArgs} args - Arguments to filter VideoDrafts to delete.
     * @example
     * // Delete a few VideoDrafts
     * const { count } = await prisma.videoDraft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDraftDeleteManyArgs>(args?: SelectSubset<T, VideoDraftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoDrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoDraftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoDrafts
     * const videoDraft = await prisma.videoDraft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoDraftUpdateManyArgs>(args: SelectSubset<T, VideoDraftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoDrafts and returns the data updated in the database.
     * @param {VideoDraftUpdateManyAndReturnArgs} args - Arguments to update many VideoDrafts.
     * @example
     * // Update many VideoDrafts
     * const videoDraft = await prisma.videoDraft.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoDrafts and only return the `id`
     * const videoDraftWithIdOnly = await prisma.videoDraft.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoDraftUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoDraftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoDraftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoDraft.
     * @param {VideoDraftUpsertArgs} args - Arguments to update or create a VideoDraft.
     * @example
     * // Update or create a VideoDraft
     * const videoDraft = await prisma.videoDraft.upsert({
     *   create: {
     *     // ... data to create a VideoDraft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoDraft we want to update
     *   }
     * })
     */
    upsert<T extends VideoDraftUpsertArgs>(args: SelectSubset<T, VideoDraftUpsertArgs<ExtArgs>>): Prisma__VideoDraftClient<$Result.GetResult<Prisma.$VideoDraftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoDrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoDraftCountArgs} args - Arguments to filter VideoDrafts to count.
     * @example
     * // Count the number of VideoDrafts
     * const count = await prisma.videoDraft.count({
     *   where: {
     *     // ... the filter for the VideoDrafts we want to count
     *   }
     * })
    **/
    count<T extends VideoDraftCountArgs>(
      args?: Subset<T, VideoDraftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoDraftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoDraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoDraftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoDraftAggregateArgs>(args: Subset<T, VideoDraftAggregateArgs>): Prisma.PrismaPromise<GetVideoDraftAggregateType<T>>

    /**
     * Group by VideoDraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoDraftGroupByArgs} args - Group by arguments.
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
      T extends VideoDraftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoDraftGroupByArgs['orderBy'] }
        : { orderBy?: VideoDraftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoDraftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoDraftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoDraft model
   */
  readonly fields: VideoDraftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoDraft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoDraftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoDraft model
   */
  interface VideoDraftFieldRefs {
    readonly id: FieldRef<"VideoDraft", 'String'>
    readonly userId: FieldRef<"VideoDraft", 'String'>
    readonly name: FieldRef<"VideoDraft", 'String'>
    readonly title: FieldRef<"VideoDraft", 'String'>
    readonly description: FieldRef<"VideoDraft", 'String'>
    readonly tags: FieldRef<"VideoDraft", 'String[]'>
    readonly hashtags: FieldRef<"VideoDraft", 'String[]'>
    readonly categoryId: FieldRef<"VideoDraft", 'String'>
    readonly privacyStatus: FieldRef<"VideoDraft", 'PrivacyStatus'>
    readonly thumbnailData: FieldRef<"VideoDraft", 'String'>
    readonly createdAt: FieldRef<"VideoDraft", 'DateTime'>
    readonly updatedAt: FieldRef<"VideoDraft", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VideoDraft findUnique
   */
  export type VideoDraftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoDraft
     */
    select?: VideoDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoDraft
     */
    omit?: VideoDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoDraftInclude<ExtArgs> | null
    /**
     * Filter, which VideoDraft to fetch.
     */
    where: VideoDraftWhereUniqueInput
  }

  /**
   * VideoDraft findUniqueOrThrow
   */
  export type VideoDraftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoDraft
     */
    select?: VideoDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoDraft
     */
    omit?: VideoDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoDraftInclude<ExtArgs> | null
    /**
     * Filter, which VideoDraft to fetch.
     */
    where: VideoDraftWhereUniqueInput
  }

  /**
   * VideoDraft findFirst
   */
  export type VideoDraftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoDraft
     */
    select?: VideoDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoDraft
     */
    omit?: VideoDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoDraftInclude<ExtArgs> | null
    /**
     * Filter, which VideoDraft to fetch.
     */
    where?: VideoDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoDrafts to fetch.
     */
    orderBy?: VideoDraftOrderByWithRelationInput | VideoDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoDrafts.
     */
    cursor?: VideoDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoDrafts.
     */
    distinct?: VideoDraftScalarFieldEnum | VideoDraftScalarFieldEnum[]
  }

  /**
   * VideoDraft findFirstOrThrow
   */
  export type VideoDraftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoDraft
     */
    select?: VideoDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoDraft
     */
    omit?: VideoDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoDraftInclude<ExtArgs> | null
    /**
     * Filter, which VideoDraft to fetch.
     */
    where?: VideoDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoDrafts to fetch.
     */
    orderBy?: VideoDraftOrderByWithRelationInput | VideoDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoDrafts.
     */
    cursor?: VideoDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoDrafts.
     */
    distinct?: VideoDraftScalarFieldEnum | VideoDraftScalarFieldEnum[]
  }

  /**
   * VideoDraft findMany
   */
  export type VideoDraftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoDraft
     */
    select?: VideoDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoDraft
     */
    omit?: VideoDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoDraftInclude<ExtArgs> | null
    /**
     * Filter, which VideoDrafts to fetch.
     */
    where?: VideoDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoDrafts to fetch.
     */
    orderBy?: VideoDraftOrderByWithRelationInput | VideoDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoDrafts.
     */
    cursor?: VideoDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoDrafts.
     */
    skip?: number
    distinct?: VideoDraftScalarFieldEnum | VideoDraftScalarFieldEnum[]
  }

  /**
   * VideoDraft create
   */
  export type VideoDraftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoDraft
     */
    select?: VideoDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoDraft
     */
    omit?: VideoDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoDraftInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoDraft.
     */
    data: XOR<VideoDraftCreateInput, VideoDraftUncheckedCreateInput>
  }

  /**
   * VideoDraft createMany
   */
  export type VideoDraftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoDrafts.
     */
    data: VideoDraftCreateManyInput | VideoDraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoDraft createManyAndReturn
   */
  export type VideoDraftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoDraft
     */
    select?: VideoDraftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoDraft
     */
    omit?: VideoDraftOmit<ExtArgs> | null
    /**
     * The data used to create many VideoDrafts.
     */
    data: VideoDraftCreateManyInput | VideoDraftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoDraftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoDraft update
   */
  export type VideoDraftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoDraft
     */
    select?: VideoDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoDraft
     */
    omit?: VideoDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoDraftInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoDraft.
     */
    data: XOR<VideoDraftUpdateInput, VideoDraftUncheckedUpdateInput>
    /**
     * Choose, which VideoDraft to update.
     */
    where: VideoDraftWhereUniqueInput
  }

  /**
   * VideoDraft updateMany
   */
  export type VideoDraftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoDrafts.
     */
    data: XOR<VideoDraftUpdateManyMutationInput, VideoDraftUncheckedUpdateManyInput>
    /**
     * Filter which VideoDrafts to update
     */
    where?: VideoDraftWhereInput
    /**
     * Limit how many VideoDrafts to update.
     */
    limit?: number
  }

  /**
   * VideoDraft updateManyAndReturn
   */
  export type VideoDraftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoDraft
     */
    select?: VideoDraftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoDraft
     */
    omit?: VideoDraftOmit<ExtArgs> | null
    /**
     * The data used to update VideoDrafts.
     */
    data: XOR<VideoDraftUpdateManyMutationInput, VideoDraftUncheckedUpdateManyInput>
    /**
     * Filter which VideoDrafts to update
     */
    where?: VideoDraftWhereInput
    /**
     * Limit how many VideoDrafts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoDraftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoDraft upsert
   */
  export type VideoDraftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoDraft
     */
    select?: VideoDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoDraft
     */
    omit?: VideoDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoDraftInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoDraft to update in case it exists.
     */
    where: VideoDraftWhereUniqueInput
    /**
     * In case the VideoDraft found by the `where` argument doesn't exist, create a new VideoDraft with this data.
     */
    create: XOR<VideoDraftCreateInput, VideoDraftUncheckedCreateInput>
    /**
     * In case the VideoDraft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoDraftUpdateInput, VideoDraftUncheckedUpdateInput>
  }

  /**
   * VideoDraft delete
   */
  export type VideoDraftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoDraft
     */
    select?: VideoDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoDraft
     */
    omit?: VideoDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoDraftInclude<ExtArgs> | null
    /**
     * Filter which VideoDraft to delete.
     */
    where: VideoDraftWhereUniqueInput
  }

  /**
   * VideoDraft deleteMany
   */
  export type VideoDraftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoDrafts to delete
     */
    where?: VideoDraftWhereInput
    /**
     * Limit how many VideoDrafts to delete.
     */
    limit?: number
  }

  /**
   * VideoDraft without action
   */
  export type VideoDraftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoDraft
     */
    select?: VideoDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoDraft
     */
    omit?: VideoDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoDraftInclude<ExtArgs> | null
  }


  /**
   * Model VideoTemplate
   */

  export type AggregateVideoTemplate = {
    _count: VideoTemplateCountAggregateOutputType | null
    _min: VideoTemplateMinAggregateOutputType | null
    _max: VideoTemplateMaxAggregateOutputType | null
  }

  export type VideoTemplateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    titleTemplate: string | null
    descTemplate: string | null
    categoryId: string | null
    privacyStatus: $Enums.PrivacyStatus | null
    madeForKids: $Enums.MadeForKids | null
    license: $Enums.License | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoTemplateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    titleTemplate: string | null
    descTemplate: string | null
    categoryId: string | null
    privacyStatus: $Enums.PrivacyStatus | null
    madeForKids: $Enums.MadeForKids | null
    license: $Enums.License | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoTemplateCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    titleTemplate: number
    descTemplate: number
    tags: number
    hashtags: number
    categoryId: number
    privacyStatus: number
    madeForKids: number
    license: number
    language: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoTemplateMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    titleTemplate?: true
    descTemplate?: true
    categoryId?: true
    privacyStatus?: true
    madeForKids?: true
    license?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoTemplateMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    titleTemplate?: true
    descTemplate?: true
    categoryId?: true
    privacyStatus?: true
    madeForKids?: true
    license?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoTemplateCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    titleTemplate?: true
    descTemplate?: true
    tags?: true
    hashtags?: true
    categoryId?: true
    privacyStatus?: true
    madeForKids?: true
    license?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoTemplate to aggregate.
     */
    where?: VideoTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoTemplates to fetch.
     */
    orderBy?: VideoTemplateOrderByWithRelationInput | VideoTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoTemplates
    **/
    _count?: true | VideoTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoTemplateMaxAggregateInputType
  }

  export type GetVideoTemplateAggregateType<T extends VideoTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoTemplate[P]>
      : GetScalarType<T[P], AggregateVideoTemplate[P]>
  }




  export type VideoTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoTemplateWhereInput
    orderBy?: VideoTemplateOrderByWithAggregationInput | VideoTemplateOrderByWithAggregationInput[]
    by: VideoTemplateScalarFieldEnum[] | VideoTemplateScalarFieldEnum
    having?: VideoTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoTemplateCountAggregateInputType | true
    _min?: VideoTemplateMinAggregateInputType
    _max?: VideoTemplateMaxAggregateInputType
  }

  export type VideoTemplateGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    titleTemplate: string
    descTemplate: string
    tags: string[]
    hashtags: string[]
    categoryId: string
    privacyStatus: $Enums.PrivacyStatus
    madeForKids: $Enums.MadeForKids
    license: $Enums.License
    language: string
    createdAt: Date
    updatedAt: Date
    _count: VideoTemplateCountAggregateOutputType | null
    _min: VideoTemplateMinAggregateOutputType | null
    _max: VideoTemplateMaxAggregateOutputType | null
  }

  type GetVideoTemplateGroupByPayload<T extends VideoTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], VideoTemplateGroupByOutputType[P]>
        }
      >
    >


  export type VideoTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    titleTemplate?: boolean
    descTemplate?: boolean
    tags?: boolean
    hashtags?: boolean
    categoryId?: boolean
    privacyStatus?: boolean
    madeForKids?: boolean
    license?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoTemplate"]>

  export type VideoTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    titleTemplate?: boolean
    descTemplate?: boolean
    tags?: boolean
    hashtags?: boolean
    categoryId?: boolean
    privacyStatus?: boolean
    madeForKids?: boolean
    license?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoTemplate"]>

  export type VideoTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    titleTemplate?: boolean
    descTemplate?: boolean
    tags?: boolean
    hashtags?: boolean
    categoryId?: boolean
    privacyStatus?: boolean
    madeForKids?: boolean
    license?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoTemplate"]>

  export type VideoTemplateSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    titleTemplate?: boolean
    descTemplate?: boolean
    tags?: boolean
    hashtags?: boolean
    categoryId?: boolean
    privacyStatus?: boolean
    madeForKids?: boolean
    license?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "titleTemplate" | "descTemplate" | "tags" | "hashtags" | "categoryId" | "privacyStatus" | "madeForKids" | "license" | "language" | "createdAt" | "updatedAt", ExtArgs["result"]["videoTemplate"]>
  export type VideoTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VideoTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VideoTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VideoTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoTemplate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      titleTemplate: string
      descTemplate: string
      tags: string[]
      hashtags: string[]
      categoryId: string
      privacyStatus: $Enums.PrivacyStatus
      madeForKids: $Enums.MadeForKids
      license: $Enums.License
      language: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["videoTemplate"]>
    composites: {}
  }

  type VideoTemplateGetPayload<S extends boolean | null | undefined | VideoTemplateDefaultArgs> = $Result.GetResult<Prisma.$VideoTemplatePayload, S>

  type VideoTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoTemplateCountAggregateInputType | true
    }

  export interface VideoTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoTemplate'], meta: { name: 'VideoTemplate' } }
    /**
     * Find zero or one VideoTemplate that matches the filter.
     * @param {VideoTemplateFindUniqueArgs} args - Arguments to find a VideoTemplate
     * @example
     * // Get one VideoTemplate
     * const videoTemplate = await prisma.videoTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoTemplateFindUniqueArgs>(args: SelectSubset<T, VideoTemplateFindUniqueArgs<ExtArgs>>): Prisma__VideoTemplateClient<$Result.GetResult<Prisma.$VideoTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoTemplateFindUniqueOrThrowArgs} args - Arguments to find a VideoTemplate
     * @example
     * // Get one VideoTemplate
     * const videoTemplate = await prisma.videoTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoTemplateClient<$Result.GetResult<Prisma.$VideoTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoTemplateFindFirstArgs} args - Arguments to find a VideoTemplate
     * @example
     * // Get one VideoTemplate
     * const videoTemplate = await prisma.videoTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoTemplateFindFirstArgs>(args?: SelectSubset<T, VideoTemplateFindFirstArgs<ExtArgs>>): Prisma__VideoTemplateClient<$Result.GetResult<Prisma.$VideoTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoTemplateFindFirstOrThrowArgs} args - Arguments to find a VideoTemplate
     * @example
     * // Get one VideoTemplate
     * const videoTemplate = await prisma.videoTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoTemplateClient<$Result.GetResult<Prisma.$VideoTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoTemplates
     * const videoTemplates = await prisma.videoTemplate.findMany()
     * 
     * // Get first 10 VideoTemplates
     * const videoTemplates = await prisma.videoTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoTemplateWithIdOnly = await prisma.videoTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoTemplateFindManyArgs>(args?: SelectSubset<T, VideoTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoTemplate.
     * @param {VideoTemplateCreateArgs} args - Arguments to create a VideoTemplate.
     * @example
     * // Create one VideoTemplate
     * const VideoTemplate = await prisma.videoTemplate.create({
     *   data: {
     *     // ... data to create a VideoTemplate
     *   }
     * })
     * 
     */
    create<T extends VideoTemplateCreateArgs>(args: SelectSubset<T, VideoTemplateCreateArgs<ExtArgs>>): Prisma__VideoTemplateClient<$Result.GetResult<Prisma.$VideoTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoTemplates.
     * @param {VideoTemplateCreateManyArgs} args - Arguments to create many VideoTemplates.
     * @example
     * // Create many VideoTemplates
     * const videoTemplate = await prisma.videoTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoTemplateCreateManyArgs>(args?: SelectSubset<T, VideoTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoTemplates and returns the data saved in the database.
     * @param {VideoTemplateCreateManyAndReturnArgs} args - Arguments to create many VideoTemplates.
     * @example
     * // Create many VideoTemplates
     * const videoTemplate = await prisma.videoTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoTemplates and only return the `id`
     * const videoTemplateWithIdOnly = await prisma.videoTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoTemplate.
     * @param {VideoTemplateDeleteArgs} args - Arguments to delete one VideoTemplate.
     * @example
     * // Delete one VideoTemplate
     * const VideoTemplate = await prisma.videoTemplate.delete({
     *   where: {
     *     // ... filter to delete one VideoTemplate
     *   }
     * })
     * 
     */
    delete<T extends VideoTemplateDeleteArgs>(args: SelectSubset<T, VideoTemplateDeleteArgs<ExtArgs>>): Prisma__VideoTemplateClient<$Result.GetResult<Prisma.$VideoTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoTemplate.
     * @param {VideoTemplateUpdateArgs} args - Arguments to update one VideoTemplate.
     * @example
     * // Update one VideoTemplate
     * const videoTemplate = await prisma.videoTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoTemplateUpdateArgs>(args: SelectSubset<T, VideoTemplateUpdateArgs<ExtArgs>>): Prisma__VideoTemplateClient<$Result.GetResult<Prisma.$VideoTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoTemplates.
     * @param {VideoTemplateDeleteManyArgs} args - Arguments to filter VideoTemplates to delete.
     * @example
     * // Delete a few VideoTemplates
     * const { count } = await prisma.videoTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoTemplateDeleteManyArgs>(args?: SelectSubset<T, VideoTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoTemplates
     * const videoTemplate = await prisma.videoTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoTemplateUpdateManyArgs>(args: SelectSubset<T, VideoTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoTemplates and returns the data updated in the database.
     * @param {VideoTemplateUpdateManyAndReturnArgs} args - Arguments to update many VideoTemplates.
     * @example
     * // Update many VideoTemplates
     * const videoTemplate = await prisma.videoTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoTemplates and only return the `id`
     * const videoTemplateWithIdOnly = await prisma.videoTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoTemplate.
     * @param {VideoTemplateUpsertArgs} args - Arguments to update or create a VideoTemplate.
     * @example
     * // Update or create a VideoTemplate
     * const videoTemplate = await prisma.videoTemplate.upsert({
     *   create: {
     *     // ... data to create a VideoTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoTemplate we want to update
     *   }
     * })
     */
    upsert<T extends VideoTemplateUpsertArgs>(args: SelectSubset<T, VideoTemplateUpsertArgs<ExtArgs>>): Prisma__VideoTemplateClient<$Result.GetResult<Prisma.$VideoTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoTemplateCountArgs} args - Arguments to filter VideoTemplates to count.
     * @example
     * // Count the number of VideoTemplates
     * const count = await prisma.videoTemplate.count({
     *   where: {
     *     // ... the filter for the VideoTemplates we want to count
     *   }
     * })
    **/
    count<T extends VideoTemplateCountArgs>(
      args?: Subset<T, VideoTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoTemplateAggregateArgs>(args: Subset<T, VideoTemplateAggregateArgs>): Prisma.PrismaPromise<GetVideoTemplateAggregateType<T>>

    /**
     * Group by VideoTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoTemplateGroupByArgs} args - Group by arguments.
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
      T extends VideoTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoTemplateGroupByArgs['orderBy'] }
        : { orderBy?: VideoTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoTemplate model
   */
  readonly fields: VideoTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoTemplate model
   */
  interface VideoTemplateFieldRefs {
    readonly id: FieldRef<"VideoTemplate", 'String'>
    readonly userId: FieldRef<"VideoTemplate", 'String'>
    readonly name: FieldRef<"VideoTemplate", 'String'>
    readonly description: FieldRef<"VideoTemplate", 'String'>
    readonly titleTemplate: FieldRef<"VideoTemplate", 'String'>
    readonly descTemplate: FieldRef<"VideoTemplate", 'String'>
    readonly tags: FieldRef<"VideoTemplate", 'String[]'>
    readonly hashtags: FieldRef<"VideoTemplate", 'String[]'>
    readonly categoryId: FieldRef<"VideoTemplate", 'String'>
    readonly privacyStatus: FieldRef<"VideoTemplate", 'PrivacyStatus'>
    readonly madeForKids: FieldRef<"VideoTemplate", 'MadeForKids'>
    readonly license: FieldRef<"VideoTemplate", 'License'>
    readonly language: FieldRef<"VideoTemplate", 'String'>
    readonly createdAt: FieldRef<"VideoTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"VideoTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VideoTemplate findUnique
   */
  export type VideoTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTemplate
     */
    select?: VideoTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTemplate
     */
    omit?: VideoTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTemplateInclude<ExtArgs> | null
    /**
     * Filter, which VideoTemplate to fetch.
     */
    where: VideoTemplateWhereUniqueInput
  }

  /**
   * VideoTemplate findUniqueOrThrow
   */
  export type VideoTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTemplate
     */
    select?: VideoTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTemplate
     */
    omit?: VideoTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTemplateInclude<ExtArgs> | null
    /**
     * Filter, which VideoTemplate to fetch.
     */
    where: VideoTemplateWhereUniqueInput
  }

  /**
   * VideoTemplate findFirst
   */
  export type VideoTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTemplate
     */
    select?: VideoTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTemplate
     */
    omit?: VideoTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTemplateInclude<ExtArgs> | null
    /**
     * Filter, which VideoTemplate to fetch.
     */
    where?: VideoTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoTemplates to fetch.
     */
    orderBy?: VideoTemplateOrderByWithRelationInput | VideoTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoTemplates.
     */
    cursor?: VideoTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoTemplates.
     */
    distinct?: VideoTemplateScalarFieldEnum | VideoTemplateScalarFieldEnum[]
  }

  /**
   * VideoTemplate findFirstOrThrow
   */
  export type VideoTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTemplate
     */
    select?: VideoTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTemplate
     */
    omit?: VideoTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTemplateInclude<ExtArgs> | null
    /**
     * Filter, which VideoTemplate to fetch.
     */
    where?: VideoTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoTemplates to fetch.
     */
    orderBy?: VideoTemplateOrderByWithRelationInput | VideoTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoTemplates.
     */
    cursor?: VideoTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoTemplates.
     */
    distinct?: VideoTemplateScalarFieldEnum | VideoTemplateScalarFieldEnum[]
  }

  /**
   * VideoTemplate findMany
   */
  export type VideoTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTemplate
     */
    select?: VideoTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTemplate
     */
    omit?: VideoTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTemplateInclude<ExtArgs> | null
    /**
     * Filter, which VideoTemplates to fetch.
     */
    where?: VideoTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoTemplates to fetch.
     */
    orderBy?: VideoTemplateOrderByWithRelationInput | VideoTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoTemplates.
     */
    cursor?: VideoTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoTemplates.
     */
    skip?: number
    distinct?: VideoTemplateScalarFieldEnum | VideoTemplateScalarFieldEnum[]
  }

  /**
   * VideoTemplate create
   */
  export type VideoTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTemplate
     */
    select?: VideoTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTemplate
     */
    omit?: VideoTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoTemplate.
     */
    data: XOR<VideoTemplateCreateInput, VideoTemplateUncheckedCreateInput>
  }

  /**
   * VideoTemplate createMany
   */
  export type VideoTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoTemplates.
     */
    data: VideoTemplateCreateManyInput | VideoTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoTemplate createManyAndReturn
   */
  export type VideoTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTemplate
     */
    select?: VideoTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTemplate
     */
    omit?: VideoTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many VideoTemplates.
     */
    data: VideoTemplateCreateManyInput | VideoTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoTemplate update
   */
  export type VideoTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTemplate
     */
    select?: VideoTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTemplate
     */
    omit?: VideoTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoTemplate.
     */
    data: XOR<VideoTemplateUpdateInput, VideoTemplateUncheckedUpdateInput>
    /**
     * Choose, which VideoTemplate to update.
     */
    where: VideoTemplateWhereUniqueInput
  }

  /**
   * VideoTemplate updateMany
   */
  export type VideoTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoTemplates.
     */
    data: XOR<VideoTemplateUpdateManyMutationInput, VideoTemplateUncheckedUpdateManyInput>
    /**
     * Filter which VideoTemplates to update
     */
    where?: VideoTemplateWhereInput
    /**
     * Limit how many VideoTemplates to update.
     */
    limit?: number
  }

  /**
   * VideoTemplate updateManyAndReturn
   */
  export type VideoTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTemplate
     */
    select?: VideoTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTemplate
     */
    omit?: VideoTemplateOmit<ExtArgs> | null
    /**
     * The data used to update VideoTemplates.
     */
    data: XOR<VideoTemplateUpdateManyMutationInput, VideoTemplateUncheckedUpdateManyInput>
    /**
     * Filter which VideoTemplates to update
     */
    where?: VideoTemplateWhereInput
    /**
     * Limit how many VideoTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoTemplate upsert
   */
  export type VideoTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTemplate
     */
    select?: VideoTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTemplate
     */
    omit?: VideoTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoTemplate to update in case it exists.
     */
    where: VideoTemplateWhereUniqueInput
    /**
     * In case the VideoTemplate found by the `where` argument doesn't exist, create a new VideoTemplate with this data.
     */
    create: XOR<VideoTemplateCreateInput, VideoTemplateUncheckedCreateInput>
    /**
     * In case the VideoTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoTemplateUpdateInput, VideoTemplateUncheckedUpdateInput>
  }

  /**
   * VideoTemplate delete
   */
  export type VideoTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTemplate
     */
    select?: VideoTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTemplate
     */
    omit?: VideoTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTemplateInclude<ExtArgs> | null
    /**
     * Filter which VideoTemplate to delete.
     */
    where: VideoTemplateWhereUniqueInput
  }

  /**
   * VideoTemplate deleteMany
   */
  export type VideoTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoTemplates to delete
     */
    where?: VideoTemplateWhereInput
    /**
     * Limit how many VideoTemplates to delete.
     */
    limit?: number
  }

  /**
   * VideoTemplate without action
   */
  export type VideoTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTemplate
     */
    select?: VideoTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTemplate
     */
    omit?: VideoTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTemplateInclude<ExtArgs> | null
  }


  /**
   * Model ScheduledUpload
   */

  export type AggregateScheduledUpload = {
    _count: ScheduledUploadCountAggregateOutputType | null
    _avg: ScheduledUploadAvgAggregateOutputType | null
    _sum: ScheduledUploadSumAggregateOutputType | null
    _min: ScheduledUploadMinAggregateOutputType | null
    _max: ScheduledUploadMaxAggregateOutputType | null
  }

  export type ScheduledUploadAvgAggregateOutputType = {
    videoFileSize: number | null
    attempts: number | null
  }

  export type ScheduledUploadSumAggregateOutputType = {
    videoFileSize: bigint | null
    attempts: number | null
  }

  export type ScheduledUploadMinAggregateOutputType = {
    id: string | null
    userId: string | null
    channelId: string | null
    title: string | null
    description: string | null
    categoryId: string | null
    privacyStatus: $Enums.PrivacyStatus | null
    videoFileName: string | null
    videoFileSize: bigint | null
    videoGcsUrl: string | null
    thumbnailGcsUrl: string | null
    scheduledFor: Date | null
    timezone: string | null
    status: $Enums.ScheduleStatus | null
    youtubeId: string | null
    error: string | null
    attempts: number | null
    lastAttemptAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduledUploadMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    channelId: string | null
    title: string | null
    description: string | null
    categoryId: string | null
    privacyStatus: $Enums.PrivacyStatus | null
    videoFileName: string | null
    videoFileSize: bigint | null
    videoGcsUrl: string | null
    thumbnailGcsUrl: string | null
    scheduledFor: Date | null
    timezone: string | null
    status: $Enums.ScheduleStatus | null
    youtubeId: string | null
    error: string | null
    attempts: number | null
    lastAttemptAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduledUploadCountAggregateOutputType = {
    id: number
    userId: number
    channelId: number
    title: number
    description: number
    tags: number
    categoryId: number
    privacyStatus: number
    videoFileName: number
    videoFileSize: number
    videoGcsUrl: number
    thumbnailGcsUrl: number
    scheduledFor: number
    timezone: number
    status: number
    youtubeId: number
    error: number
    attempts: number
    lastAttemptAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduledUploadAvgAggregateInputType = {
    videoFileSize?: true
    attempts?: true
  }

  export type ScheduledUploadSumAggregateInputType = {
    videoFileSize?: true
    attempts?: true
  }

  export type ScheduledUploadMinAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
    title?: true
    description?: true
    categoryId?: true
    privacyStatus?: true
    videoFileName?: true
    videoFileSize?: true
    videoGcsUrl?: true
    thumbnailGcsUrl?: true
    scheduledFor?: true
    timezone?: true
    status?: true
    youtubeId?: true
    error?: true
    attempts?: true
    lastAttemptAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduledUploadMaxAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
    title?: true
    description?: true
    categoryId?: true
    privacyStatus?: true
    videoFileName?: true
    videoFileSize?: true
    videoGcsUrl?: true
    thumbnailGcsUrl?: true
    scheduledFor?: true
    timezone?: true
    status?: true
    youtubeId?: true
    error?: true
    attempts?: true
    lastAttemptAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduledUploadCountAggregateInputType = {
    id?: true
    userId?: true
    channelId?: true
    title?: true
    description?: true
    tags?: true
    categoryId?: true
    privacyStatus?: true
    videoFileName?: true
    videoFileSize?: true
    videoGcsUrl?: true
    thumbnailGcsUrl?: true
    scheduledFor?: true
    timezone?: true
    status?: true
    youtubeId?: true
    error?: true
    attempts?: true
    lastAttemptAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduledUploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledUpload to aggregate.
     */
    where?: ScheduledUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledUploads to fetch.
     */
    orderBy?: ScheduledUploadOrderByWithRelationInput | ScheduledUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduledUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduledUploads
    **/
    _count?: true | ScheduledUploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduledUploadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduledUploadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduledUploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduledUploadMaxAggregateInputType
  }

  export type GetScheduledUploadAggregateType<T extends ScheduledUploadAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduledUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduledUpload[P]>
      : GetScalarType<T[P], AggregateScheduledUpload[P]>
  }




  export type ScheduledUploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledUploadWhereInput
    orderBy?: ScheduledUploadOrderByWithAggregationInput | ScheduledUploadOrderByWithAggregationInput[]
    by: ScheduledUploadScalarFieldEnum[] | ScheduledUploadScalarFieldEnum
    having?: ScheduledUploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduledUploadCountAggregateInputType | true
    _avg?: ScheduledUploadAvgAggregateInputType
    _sum?: ScheduledUploadSumAggregateInputType
    _min?: ScheduledUploadMinAggregateInputType
    _max?: ScheduledUploadMaxAggregateInputType
  }

  export type ScheduledUploadGroupByOutputType = {
    id: string
    userId: string
    channelId: string
    title: string
    description: string
    tags: string[]
    categoryId: string
    privacyStatus: $Enums.PrivacyStatus
    videoFileName: string
    videoFileSize: bigint
    videoGcsUrl: string
    thumbnailGcsUrl: string | null
    scheduledFor: Date
    timezone: string
    status: $Enums.ScheduleStatus
    youtubeId: string | null
    error: string | null
    attempts: number
    lastAttemptAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ScheduledUploadCountAggregateOutputType | null
    _avg: ScheduledUploadAvgAggregateOutputType | null
    _sum: ScheduledUploadSumAggregateOutputType | null
    _min: ScheduledUploadMinAggregateOutputType | null
    _max: ScheduledUploadMaxAggregateOutputType | null
  }

  type GetScheduledUploadGroupByPayload<T extends ScheduledUploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduledUploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduledUploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduledUploadGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduledUploadGroupByOutputType[P]>
        }
      >
    >


  export type ScheduledUploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    categoryId?: boolean
    privacyStatus?: boolean
    videoFileName?: boolean
    videoFileSize?: boolean
    videoGcsUrl?: boolean
    thumbnailGcsUrl?: boolean
    scheduledFor?: boolean
    timezone?: boolean
    status?: boolean
    youtubeId?: boolean
    error?: boolean
    attempts?: boolean
    lastAttemptAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledUpload"]>

  export type ScheduledUploadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    categoryId?: boolean
    privacyStatus?: boolean
    videoFileName?: boolean
    videoFileSize?: boolean
    videoGcsUrl?: boolean
    thumbnailGcsUrl?: boolean
    scheduledFor?: boolean
    timezone?: boolean
    status?: boolean
    youtubeId?: boolean
    error?: boolean
    attempts?: boolean
    lastAttemptAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledUpload"]>

  export type ScheduledUploadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    categoryId?: boolean
    privacyStatus?: boolean
    videoFileName?: boolean
    videoFileSize?: boolean
    videoGcsUrl?: boolean
    thumbnailGcsUrl?: boolean
    scheduledFor?: boolean
    timezone?: boolean
    status?: boolean
    youtubeId?: boolean
    error?: boolean
    attempts?: boolean
    lastAttemptAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledUpload"]>

  export type ScheduledUploadSelectScalar = {
    id?: boolean
    userId?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    categoryId?: boolean
    privacyStatus?: boolean
    videoFileName?: boolean
    videoFileSize?: boolean
    videoGcsUrl?: boolean
    thumbnailGcsUrl?: boolean
    scheduledFor?: boolean
    timezone?: boolean
    status?: boolean
    youtubeId?: boolean
    error?: boolean
    attempts?: boolean
    lastAttemptAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduledUploadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "channelId" | "title" | "description" | "tags" | "categoryId" | "privacyStatus" | "videoFileName" | "videoFileSize" | "videoGcsUrl" | "thumbnailGcsUrl" | "scheduledFor" | "timezone" | "status" | "youtubeId" | "error" | "attempts" | "lastAttemptAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["scheduledUpload"]>
  export type ScheduledUploadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }
  export type ScheduledUploadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }
  export type ScheduledUploadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }

  export type $ScheduledUploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduledUpload"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      channel: Prisma.$YouTubeChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      channelId: string
      title: string
      description: string
      tags: string[]
      categoryId: string
      privacyStatus: $Enums.PrivacyStatus
      videoFileName: string
      videoFileSize: bigint
      videoGcsUrl: string
      thumbnailGcsUrl: string | null
      scheduledFor: Date
      timezone: string
      status: $Enums.ScheduleStatus
      youtubeId: string | null
      error: string | null
      attempts: number
      lastAttemptAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scheduledUpload"]>
    composites: {}
  }

  type ScheduledUploadGetPayload<S extends boolean | null | undefined | ScheduledUploadDefaultArgs> = $Result.GetResult<Prisma.$ScheduledUploadPayload, S>

  type ScheduledUploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduledUploadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduledUploadCountAggregateInputType | true
    }

  export interface ScheduledUploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduledUpload'], meta: { name: 'ScheduledUpload' } }
    /**
     * Find zero or one ScheduledUpload that matches the filter.
     * @param {ScheduledUploadFindUniqueArgs} args - Arguments to find a ScheduledUpload
     * @example
     * // Get one ScheduledUpload
     * const scheduledUpload = await prisma.scheduledUpload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduledUploadFindUniqueArgs>(args: SelectSubset<T, ScheduledUploadFindUniqueArgs<ExtArgs>>): Prisma__ScheduledUploadClient<$Result.GetResult<Prisma.$ScheduledUploadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduledUpload that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduledUploadFindUniqueOrThrowArgs} args - Arguments to find a ScheduledUpload
     * @example
     * // Get one ScheduledUpload
     * const scheduledUpload = await prisma.scheduledUpload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduledUploadFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduledUploadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduledUploadClient<$Result.GetResult<Prisma.$ScheduledUploadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledUpload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledUploadFindFirstArgs} args - Arguments to find a ScheduledUpload
     * @example
     * // Get one ScheduledUpload
     * const scheduledUpload = await prisma.scheduledUpload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduledUploadFindFirstArgs>(args?: SelectSubset<T, ScheduledUploadFindFirstArgs<ExtArgs>>): Prisma__ScheduledUploadClient<$Result.GetResult<Prisma.$ScheduledUploadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledUpload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledUploadFindFirstOrThrowArgs} args - Arguments to find a ScheduledUpload
     * @example
     * // Get one ScheduledUpload
     * const scheduledUpload = await prisma.scheduledUpload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduledUploadFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduledUploadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduledUploadClient<$Result.GetResult<Prisma.$ScheduledUploadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduledUploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledUploadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduledUploads
     * const scheduledUploads = await prisma.scheduledUpload.findMany()
     * 
     * // Get first 10 ScheduledUploads
     * const scheduledUploads = await prisma.scheduledUpload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduledUploadWithIdOnly = await prisma.scheduledUpload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduledUploadFindManyArgs>(args?: SelectSubset<T, ScheduledUploadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduledUpload.
     * @param {ScheduledUploadCreateArgs} args - Arguments to create a ScheduledUpload.
     * @example
     * // Create one ScheduledUpload
     * const ScheduledUpload = await prisma.scheduledUpload.create({
     *   data: {
     *     // ... data to create a ScheduledUpload
     *   }
     * })
     * 
     */
    create<T extends ScheduledUploadCreateArgs>(args: SelectSubset<T, ScheduledUploadCreateArgs<ExtArgs>>): Prisma__ScheduledUploadClient<$Result.GetResult<Prisma.$ScheduledUploadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduledUploads.
     * @param {ScheduledUploadCreateManyArgs} args - Arguments to create many ScheduledUploads.
     * @example
     * // Create many ScheduledUploads
     * const scheduledUpload = await prisma.scheduledUpload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduledUploadCreateManyArgs>(args?: SelectSubset<T, ScheduledUploadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduledUploads and returns the data saved in the database.
     * @param {ScheduledUploadCreateManyAndReturnArgs} args - Arguments to create many ScheduledUploads.
     * @example
     * // Create many ScheduledUploads
     * const scheduledUpload = await prisma.scheduledUpload.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduledUploads and only return the `id`
     * const scheduledUploadWithIdOnly = await prisma.scheduledUpload.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduledUploadCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduledUploadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledUploadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduledUpload.
     * @param {ScheduledUploadDeleteArgs} args - Arguments to delete one ScheduledUpload.
     * @example
     * // Delete one ScheduledUpload
     * const ScheduledUpload = await prisma.scheduledUpload.delete({
     *   where: {
     *     // ... filter to delete one ScheduledUpload
     *   }
     * })
     * 
     */
    delete<T extends ScheduledUploadDeleteArgs>(args: SelectSubset<T, ScheduledUploadDeleteArgs<ExtArgs>>): Prisma__ScheduledUploadClient<$Result.GetResult<Prisma.$ScheduledUploadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduledUpload.
     * @param {ScheduledUploadUpdateArgs} args - Arguments to update one ScheduledUpload.
     * @example
     * // Update one ScheduledUpload
     * const scheduledUpload = await prisma.scheduledUpload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduledUploadUpdateArgs>(args: SelectSubset<T, ScheduledUploadUpdateArgs<ExtArgs>>): Prisma__ScheduledUploadClient<$Result.GetResult<Prisma.$ScheduledUploadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduledUploads.
     * @param {ScheduledUploadDeleteManyArgs} args - Arguments to filter ScheduledUploads to delete.
     * @example
     * // Delete a few ScheduledUploads
     * const { count } = await prisma.scheduledUpload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduledUploadDeleteManyArgs>(args?: SelectSubset<T, ScheduledUploadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledUploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduledUploads
     * const scheduledUpload = await prisma.scheduledUpload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduledUploadUpdateManyArgs>(args: SelectSubset<T, ScheduledUploadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledUploads and returns the data updated in the database.
     * @param {ScheduledUploadUpdateManyAndReturnArgs} args - Arguments to update many ScheduledUploads.
     * @example
     * // Update many ScheduledUploads
     * const scheduledUpload = await prisma.scheduledUpload.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduledUploads and only return the `id`
     * const scheduledUploadWithIdOnly = await prisma.scheduledUpload.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScheduledUploadUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduledUploadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledUploadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduledUpload.
     * @param {ScheduledUploadUpsertArgs} args - Arguments to update or create a ScheduledUpload.
     * @example
     * // Update or create a ScheduledUpload
     * const scheduledUpload = await prisma.scheduledUpload.upsert({
     *   create: {
     *     // ... data to create a ScheduledUpload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduledUpload we want to update
     *   }
     * })
     */
    upsert<T extends ScheduledUploadUpsertArgs>(args: SelectSubset<T, ScheduledUploadUpsertArgs<ExtArgs>>): Prisma__ScheduledUploadClient<$Result.GetResult<Prisma.$ScheduledUploadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduledUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledUploadCountArgs} args - Arguments to filter ScheduledUploads to count.
     * @example
     * // Count the number of ScheduledUploads
     * const count = await prisma.scheduledUpload.count({
     *   where: {
     *     // ... the filter for the ScheduledUploads we want to count
     *   }
     * })
    **/
    count<T extends ScheduledUploadCountArgs>(
      args?: Subset<T, ScheduledUploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduledUploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduledUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledUploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduledUploadAggregateArgs>(args: Subset<T, ScheduledUploadAggregateArgs>): Prisma.PrismaPromise<GetScheduledUploadAggregateType<T>>

    /**
     * Group by ScheduledUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledUploadGroupByArgs} args - Group by arguments.
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
      T extends ScheduledUploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduledUploadGroupByArgs['orderBy'] }
        : { orderBy?: ScheduledUploadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduledUploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduledUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduledUpload model
   */
  readonly fields: ScheduledUploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduledUpload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduledUploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel<T extends YouTubeChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, YouTubeChannelDefaultArgs<ExtArgs>>): Prisma__YouTubeChannelClient<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ScheduledUpload model
   */
  interface ScheduledUploadFieldRefs {
    readonly id: FieldRef<"ScheduledUpload", 'String'>
    readonly userId: FieldRef<"ScheduledUpload", 'String'>
    readonly channelId: FieldRef<"ScheduledUpload", 'String'>
    readonly title: FieldRef<"ScheduledUpload", 'String'>
    readonly description: FieldRef<"ScheduledUpload", 'String'>
    readonly tags: FieldRef<"ScheduledUpload", 'String[]'>
    readonly categoryId: FieldRef<"ScheduledUpload", 'String'>
    readonly privacyStatus: FieldRef<"ScheduledUpload", 'PrivacyStatus'>
    readonly videoFileName: FieldRef<"ScheduledUpload", 'String'>
    readonly videoFileSize: FieldRef<"ScheduledUpload", 'BigInt'>
    readonly videoGcsUrl: FieldRef<"ScheduledUpload", 'String'>
    readonly thumbnailGcsUrl: FieldRef<"ScheduledUpload", 'String'>
    readonly scheduledFor: FieldRef<"ScheduledUpload", 'DateTime'>
    readonly timezone: FieldRef<"ScheduledUpload", 'String'>
    readonly status: FieldRef<"ScheduledUpload", 'ScheduleStatus'>
    readonly youtubeId: FieldRef<"ScheduledUpload", 'String'>
    readonly error: FieldRef<"ScheduledUpload", 'String'>
    readonly attempts: FieldRef<"ScheduledUpload", 'Int'>
    readonly lastAttemptAt: FieldRef<"ScheduledUpload", 'DateTime'>
    readonly completedAt: FieldRef<"ScheduledUpload", 'DateTime'>
    readonly createdAt: FieldRef<"ScheduledUpload", 'DateTime'>
    readonly updatedAt: FieldRef<"ScheduledUpload", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScheduledUpload findUnique
   */
  export type ScheduledUploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledUpload
     */
    select?: ScheduledUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledUpload
     */
    omit?: ScheduledUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledUploadInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledUpload to fetch.
     */
    where: ScheduledUploadWhereUniqueInput
  }

  /**
   * ScheduledUpload findUniqueOrThrow
   */
  export type ScheduledUploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledUpload
     */
    select?: ScheduledUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledUpload
     */
    omit?: ScheduledUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledUploadInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledUpload to fetch.
     */
    where: ScheduledUploadWhereUniqueInput
  }

  /**
   * ScheduledUpload findFirst
   */
  export type ScheduledUploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledUpload
     */
    select?: ScheduledUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledUpload
     */
    omit?: ScheduledUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledUploadInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledUpload to fetch.
     */
    where?: ScheduledUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledUploads to fetch.
     */
    orderBy?: ScheduledUploadOrderByWithRelationInput | ScheduledUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledUploads.
     */
    cursor?: ScheduledUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledUploads.
     */
    distinct?: ScheduledUploadScalarFieldEnum | ScheduledUploadScalarFieldEnum[]
  }

  /**
   * ScheduledUpload findFirstOrThrow
   */
  export type ScheduledUploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledUpload
     */
    select?: ScheduledUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledUpload
     */
    omit?: ScheduledUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledUploadInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledUpload to fetch.
     */
    where?: ScheduledUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledUploads to fetch.
     */
    orderBy?: ScheduledUploadOrderByWithRelationInput | ScheduledUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledUploads.
     */
    cursor?: ScheduledUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledUploads.
     */
    distinct?: ScheduledUploadScalarFieldEnum | ScheduledUploadScalarFieldEnum[]
  }

  /**
   * ScheduledUpload findMany
   */
  export type ScheduledUploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledUpload
     */
    select?: ScheduledUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledUpload
     */
    omit?: ScheduledUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledUploadInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledUploads to fetch.
     */
    where?: ScheduledUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledUploads to fetch.
     */
    orderBy?: ScheduledUploadOrderByWithRelationInput | ScheduledUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduledUploads.
     */
    cursor?: ScheduledUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledUploads.
     */
    skip?: number
    distinct?: ScheduledUploadScalarFieldEnum | ScheduledUploadScalarFieldEnum[]
  }

  /**
   * ScheduledUpload create
   */
  export type ScheduledUploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledUpload
     */
    select?: ScheduledUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledUpload
     */
    omit?: ScheduledUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledUploadInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduledUpload.
     */
    data: XOR<ScheduledUploadCreateInput, ScheduledUploadUncheckedCreateInput>
  }

  /**
   * ScheduledUpload createMany
   */
  export type ScheduledUploadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduledUploads.
     */
    data: ScheduledUploadCreateManyInput | ScheduledUploadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduledUpload createManyAndReturn
   */
  export type ScheduledUploadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledUpload
     */
    select?: ScheduledUploadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledUpload
     */
    omit?: ScheduledUploadOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduledUploads.
     */
    data: ScheduledUploadCreateManyInput | ScheduledUploadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledUploadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduledUpload update
   */
  export type ScheduledUploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledUpload
     */
    select?: ScheduledUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledUpload
     */
    omit?: ScheduledUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledUploadInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduledUpload.
     */
    data: XOR<ScheduledUploadUpdateInput, ScheduledUploadUncheckedUpdateInput>
    /**
     * Choose, which ScheduledUpload to update.
     */
    where: ScheduledUploadWhereUniqueInput
  }

  /**
   * ScheduledUpload updateMany
   */
  export type ScheduledUploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduledUploads.
     */
    data: XOR<ScheduledUploadUpdateManyMutationInput, ScheduledUploadUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledUploads to update
     */
    where?: ScheduledUploadWhereInput
    /**
     * Limit how many ScheduledUploads to update.
     */
    limit?: number
  }

  /**
   * ScheduledUpload updateManyAndReturn
   */
  export type ScheduledUploadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledUpload
     */
    select?: ScheduledUploadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledUpload
     */
    omit?: ScheduledUploadOmit<ExtArgs> | null
    /**
     * The data used to update ScheduledUploads.
     */
    data: XOR<ScheduledUploadUpdateManyMutationInput, ScheduledUploadUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledUploads to update
     */
    where?: ScheduledUploadWhereInput
    /**
     * Limit how many ScheduledUploads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledUploadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduledUpload upsert
   */
  export type ScheduledUploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledUpload
     */
    select?: ScheduledUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledUpload
     */
    omit?: ScheduledUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledUploadInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduledUpload to update in case it exists.
     */
    where: ScheduledUploadWhereUniqueInput
    /**
     * In case the ScheduledUpload found by the `where` argument doesn't exist, create a new ScheduledUpload with this data.
     */
    create: XOR<ScheduledUploadCreateInput, ScheduledUploadUncheckedCreateInput>
    /**
     * In case the ScheduledUpload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduledUploadUpdateInput, ScheduledUploadUncheckedUpdateInput>
  }

  /**
   * ScheduledUpload delete
   */
  export type ScheduledUploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledUpload
     */
    select?: ScheduledUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledUpload
     */
    omit?: ScheduledUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledUploadInclude<ExtArgs> | null
    /**
     * Filter which ScheduledUpload to delete.
     */
    where: ScheduledUploadWhereUniqueInput
  }

  /**
   * ScheduledUpload deleteMany
   */
  export type ScheduledUploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledUploads to delete
     */
    where?: ScheduledUploadWhereInput
    /**
     * Limit how many ScheduledUploads to delete.
     */
    limit?: number
  }

  /**
   * ScheduledUpload without action
   */
  export type ScheduledUploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledUpload
     */
    select?: ScheduledUploadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledUpload
     */
    omit?: ScheduledUploadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledUploadInclude<ExtArgs> | null
  }


  /**
   * Model ChannelAnalytics
   */

  export type AggregateChannelAnalytics = {
    _count: ChannelAnalyticsCountAggregateOutputType | null
    _avg: ChannelAnalyticsAvgAggregateOutputType | null
    _sum: ChannelAnalyticsSumAggregateOutputType | null
    _min: ChannelAnalyticsMinAggregateOutputType | null
    _max: ChannelAnalyticsMaxAggregateOutputType | null
  }

  export type ChannelAnalyticsAvgAggregateOutputType = {
    views: number | null
    subscribers: number | null
    subscribersGained: number | null
    subscribersLost: number | null
    watchTimeMinutes: number | null
    likes: number | null
    comments: number | null
    shares: number | null
    estimatedRevenue: Decimal | null
  }

  export type ChannelAnalyticsSumAggregateOutputType = {
    views: bigint | null
    subscribers: number | null
    subscribersGained: number | null
    subscribersLost: number | null
    watchTimeMinutes: bigint | null
    likes: number | null
    comments: number | null
    shares: number | null
    estimatedRevenue: Decimal | null
  }

  export type ChannelAnalyticsMinAggregateOutputType = {
    id: string | null
    channelId: string | null
    date: Date | null
    views: bigint | null
    subscribers: number | null
    subscribersGained: number | null
    subscribersLost: number | null
    watchTimeMinutes: bigint | null
    likes: number | null
    comments: number | null
    shares: number | null
    estimatedRevenue: Decimal | null
    createdAt: Date | null
  }

  export type ChannelAnalyticsMaxAggregateOutputType = {
    id: string | null
    channelId: string | null
    date: Date | null
    views: bigint | null
    subscribers: number | null
    subscribersGained: number | null
    subscribersLost: number | null
    watchTimeMinutes: bigint | null
    likes: number | null
    comments: number | null
    shares: number | null
    estimatedRevenue: Decimal | null
    createdAt: Date | null
  }

  export type ChannelAnalyticsCountAggregateOutputType = {
    id: number
    channelId: number
    date: number
    views: number
    subscribers: number
    subscribersGained: number
    subscribersLost: number
    watchTimeMinutes: number
    likes: number
    comments: number
    shares: number
    estimatedRevenue: number
    createdAt: number
    _all: number
  }


  export type ChannelAnalyticsAvgAggregateInputType = {
    views?: true
    subscribers?: true
    subscribersGained?: true
    subscribersLost?: true
    watchTimeMinutes?: true
    likes?: true
    comments?: true
    shares?: true
    estimatedRevenue?: true
  }

  export type ChannelAnalyticsSumAggregateInputType = {
    views?: true
    subscribers?: true
    subscribersGained?: true
    subscribersLost?: true
    watchTimeMinutes?: true
    likes?: true
    comments?: true
    shares?: true
    estimatedRevenue?: true
  }

  export type ChannelAnalyticsMinAggregateInputType = {
    id?: true
    channelId?: true
    date?: true
    views?: true
    subscribers?: true
    subscribersGained?: true
    subscribersLost?: true
    watchTimeMinutes?: true
    likes?: true
    comments?: true
    shares?: true
    estimatedRevenue?: true
    createdAt?: true
  }

  export type ChannelAnalyticsMaxAggregateInputType = {
    id?: true
    channelId?: true
    date?: true
    views?: true
    subscribers?: true
    subscribersGained?: true
    subscribersLost?: true
    watchTimeMinutes?: true
    likes?: true
    comments?: true
    shares?: true
    estimatedRevenue?: true
    createdAt?: true
  }

  export type ChannelAnalyticsCountAggregateInputType = {
    id?: true
    channelId?: true
    date?: true
    views?: true
    subscribers?: true
    subscribersGained?: true
    subscribersLost?: true
    watchTimeMinutes?: true
    likes?: true
    comments?: true
    shares?: true
    estimatedRevenue?: true
    createdAt?: true
    _all?: true
  }

  export type ChannelAnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelAnalytics to aggregate.
     */
    where?: ChannelAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelAnalytics to fetch.
     */
    orderBy?: ChannelAnalyticsOrderByWithRelationInput | ChannelAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChannelAnalytics
    **/
    _count?: true | ChannelAnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelAnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelAnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelAnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelAnalyticsMaxAggregateInputType
  }

  export type GetChannelAnalyticsAggregateType<T extends ChannelAnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateChannelAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannelAnalytics[P]>
      : GetScalarType<T[P], AggregateChannelAnalytics[P]>
  }




  export type ChannelAnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelAnalyticsWhereInput
    orderBy?: ChannelAnalyticsOrderByWithAggregationInput | ChannelAnalyticsOrderByWithAggregationInput[]
    by: ChannelAnalyticsScalarFieldEnum[] | ChannelAnalyticsScalarFieldEnum
    having?: ChannelAnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelAnalyticsCountAggregateInputType | true
    _avg?: ChannelAnalyticsAvgAggregateInputType
    _sum?: ChannelAnalyticsSumAggregateInputType
    _min?: ChannelAnalyticsMinAggregateInputType
    _max?: ChannelAnalyticsMaxAggregateInputType
  }

  export type ChannelAnalyticsGroupByOutputType = {
    id: string
    channelId: string
    date: Date
    views: bigint
    subscribers: number
    subscribersGained: number
    subscribersLost: number
    watchTimeMinutes: bigint
    likes: number
    comments: number
    shares: number
    estimatedRevenue: Decimal | null
    createdAt: Date
    _count: ChannelAnalyticsCountAggregateOutputType | null
    _avg: ChannelAnalyticsAvgAggregateOutputType | null
    _sum: ChannelAnalyticsSumAggregateOutputType | null
    _min: ChannelAnalyticsMinAggregateOutputType | null
    _max: ChannelAnalyticsMaxAggregateOutputType | null
  }

  type GetChannelAnalyticsGroupByPayload<T extends ChannelAnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelAnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelAnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelAnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelAnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type ChannelAnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    date?: boolean
    views?: boolean
    subscribers?: boolean
    subscribersGained?: boolean
    subscribersLost?: boolean
    watchTimeMinutes?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    estimatedRevenue?: boolean
    createdAt?: boolean
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelAnalytics"]>

  export type ChannelAnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    date?: boolean
    views?: boolean
    subscribers?: boolean
    subscribersGained?: boolean
    subscribersLost?: boolean
    watchTimeMinutes?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    estimatedRevenue?: boolean
    createdAt?: boolean
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelAnalytics"]>

  export type ChannelAnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    date?: boolean
    views?: boolean
    subscribers?: boolean
    subscribersGained?: boolean
    subscribersLost?: boolean
    watchTimeMinutes?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    estimatedRevenue?: boolean
    createdAt?: boolean
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channelAnalytics"]>

  export type ChannelAnalyticsSelectScalar = {
    id?: boolean
    channelId?: boolean
    date?: boolean
    views?: boolean
    subscribers?: boolean
    subscribersGained?: boolean
    subscribersLost?: boolean
    watchTimeMinutes?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    estimatedRevenue?: boolean
    createdAt?: boolean
  }

  export type ChannelAnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "channelId" | "date" | "views" | "subscribers" | "subscribersGained" | "subscribersLost" | "watchTimeMinutes" | "likes" | "comments" | "shares" | "estimatedRevenue" | "createdAt", ExtArgs["result"]["channelAnalytics"]>
  export type ChannelAnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }
  export type ChannelAnalyticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }
  export type ChannelAnalyticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | YouTubeChannelDefaultArgs<ExtArgs>
  }

  export type $ChannelAnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChannelAnalytics"
    objects: {
      channel: Prisma.$YouTubeChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channelId: string
      date: Date
      views: bigint
      subscribers: number
      subscribersGained: number
      subscribersLost: number
      watchTimeMinutes: bigint
      likes: number
      comments: number
      shares: number
      estimatedRevenue: Prisma.Decimal | null
      createdAt: Date
    }, ExtArgs["result"]["channelAnalytics"]>
    composites: {}
  }

  type ChannelAnalyticsGetPayload<S extends boolean | null | undefined | ChannelAnalyticsDefaultArgs> = $Result.GetResult<Prisma.$ChannelAnalyticsPayload, S>

  type ChannelAnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelAnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelAnalyticsCountAggregateInputType | true
    }

  export interface ChannelAnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChannelAnalytics'], meta: { name: 'ChannelAnalytics' } }
    /**
     * Find zero or one ChannelAnalytics that matches the filter.
     * @param {ChannelAnalyticsFindUniqueArgs} args - Arguments to find a ChannelAnalytics
     * @example
     * // Get one ChannelAnalytics
     * const channelAnalytics = await prisma.channelAnalytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelAnalyticsFindUniqueArgs>(args: SelectSubset<T, ChannelAnalyticsFindUniqueArgs<ExtArgs>>): Prisma__ChannelAnalyticsClient<$Result.GetResult<Prisma.$ChannelAnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChannelAnalytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelAnalyticsFindUniqueOrThrowArgs} args - Arguments to find a ChannelAnalytics
     * @example
     * // Get one ChannelAnalytics
     * const channelAnalytics = await prisma.channelAnalytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelAnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelAnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelAnalyticsClient<$Result.GetResult<Prisma.$ChannelAnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChannelAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAnalyticsFindFirstArgs} args - Arguments to find a ChannelAnalytics
     * @example
     * // Get one ChannelAnalytics
     * const channelAnalytics = await prisma.channelAnalytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelAnalyticsFindFirstArgs>(args?: SelectSubset<T, ChannelAnalyticsFindFirstArgs<ExtArgs>>): Prisma__ChannelAnalyticsClient<$Result.GetResult<Prisma.$ChannelAnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChannelAnalytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAnalyticsFindFirstOrThrowArgs} args - Arguments to find a ChannelAnalytics
     * @example
     * // Get one ChannelAnalytics
     * const channelAnalytics = await prisma.channelAnalytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelAnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelAnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelAnalyticsClient<$Result.GetResult<Prisma.$ChannelAnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChannelAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChannelAnalytics
     * const channelAnalytics = await prisma.channelAnalytics.findMany()
     * 
     * // Get first 10 ChannelAnalytics
     * const channelAnalytics = await prisma.channelAnalytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelAnalyticsWithIdOnly = await prisma.channelAnalytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelAnalyticsFindManyArgs>(args?: SelectSubset<T, ChannelAnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChannelAnalytics.
     * @param {ChannelAnalyticsCreateArgs} args - Arguments to create a ChannelAnalytics.
     * @example
     * // Create one ChannelAnalytics
     * const ChannelAnalytics = await prisma.channelAnalytics.create({
     *   data: {
     *     // ... data to create a ChannelAnalytics
     *   }
     * })
     * 
     */
    create<T extends ChannelAnalyticsCreateArgs>(args: SelectSubset<T, ChannelAnalyticsCreateArgs<ExtArgs>>): Prisma__ChannelAnalyticsClient<$Result.GetResult<Prisma.$ChannelAnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChannelAnalytics.
     * @param {ChannelAnalyticsCreateManyArgs} args - Arguments to create many ChannelAnalytics.
     * @example
     * // Create many ChannelAnalytics
     * const channelAnalytics = await prisma.channelAnalytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelAnalyticsCreateManyArgs>(args?: SelectSubset<T, ChannelAnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChannelAnalytics and returns the data saved in the database.
     * @param {ChannelAnalyticsCreateManyAndReturnArgs} args - Arguments to create many ChannelAnalytics.
     * @example
     * // Create many ChannelAnalytics
     * const channelAnalytics = await prisma.channelAnalytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChannelAnalytics and only return the `id`
     * const channelAnalyticsWithIdOnly = await prisma.channelAnalytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelAnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelAnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelAnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChannelAnalytics.
     * @param {ChannelAnalyticsDeleteArgs} args - Arguments to delete one ChannelAnalytics.
     * @example
     * // Delete one ChannelAnalytics
     * const ChannelAnalytics = await prisma.channelAnalytics.delete({
     *   where: {
     *     // ... filter to delete one ChannelAnalytics
     *   }
     * })
     * 
     */
    delete<T extends ChannelAnalyticsDeleteArgs>(args: SelectSubset<T, ChannelAnalyticsDeleteArgs<ExtArgs>>): Prisma__ChannelAnalyticsClient<$Result.GetResult<Prisma.$ChannelAnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChannelAnalytics.
     * @param {ChannelAnalyticsUpdateArgs} args - Arguments to update one ChannelAnalytics.
     * @example
     * // Update one ChannelAnalytics
     * const channelAnalytics = await prisma.channelAnalytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelAnalyticsUpdateArgs>(args: SelectSubset<T, ChannelAnalyticsUpdateArgs<ExtArgs>>): Prisma__ChannelAnalyticsClient<$Result.GetResult<Prisma.$ChannelAnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChannelAnalytics.
     * @param {ChannelAnalyticsDeleteManyArgs} args - Arguments to filter ChannelAnalytics to delete.
     * @example
     * // Delete a few ChannelAnalytics
     * const { count } = await prisma.channelAnalytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelAnalyticsDeleteManyArgs>(args?: SelectSubset<T, ChannelAnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChannelAnalytics
     * const channelAnalytics = await prisma.channelAnalytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelAnalyticsUpdateManyArgs>(args: SelectSubset<T, ChannelAnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChannelAnalytics and returns the data updated in the database.
     * @param {ChannelAnalyticsUpdateManyAndReturnArgs} args - Arguments to update many ChannelAnalytics.
     * @example
     * // Update many ChannelAnalytics
     * const channelAnalytics = await prisma.channelAnalytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChannelAnalytics and only return the `id`
     * const channelAnalyticsWithIdOnly = await prisma.channelAnalytics.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChannelAnalyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelAnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelAnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChannelAnalytics.
     * @param {ChannelAnalyticsUpsertArgs} args - Arguments to update or create a ChannelAnalytics.
     * @example
     * // Update or create a ChannelAnalytics
     * const channelAnalytics = await prisma.channelAnalytics.upsert({
     *   create: {
     *     // ... data to create a ChannelAnalytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChannelAnalytics we want to update
     *   }
     * })
     */
    upsert<T extends ChannelAnalyticsUpsertArgs>(args: SelectSubset<T, ChannelAnalyticsUpsertArgs<ExtArgs>>): Prisma__ChannelAnalyticsClient<$Result.GetResult<Prisma.$ChannelAnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChannelAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAnalyticsCountArgs} args - Arguments to filter ChannelAnalytics to count.
     * @example
     * // Count the number of ChannelAnalytics
     * const count = await prisma.channelAnalytics.count({
     *   where: {
     *     // ... the filter for the ChannelAnalytics we want to count
     *   }
     * })
    **/
    count<T extends ChannelAnalyticsCountArgs>(
      args?: Subset<T, ChannelAnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelAnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChannelAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelAnalyticsAggregateArgs>(args: Subset<T, ChannelAnalyticsAggregateArgs>): Prisma.PrismaPromise<GetChannelAnalyticsAggregateType<T>>

    /**
     * Group by ChannelAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAnalyticsGroupByArgs} args - Group by arguments.
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
      T extends ChannelAnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelAnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: ChannelAnalyticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChannelAnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChannelAnalytics model
   */
  readonly fields: ChannelAnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChannelAnalytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelAnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channel<T extends YouTubeChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, YouTubeChannelDefaultArgs<ExtArgs>>): Prisma__YouTubeChannelClient<$Result.GetResult<Prisma.$YouTubeChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChannelAnalytics model
   */
  interface ChannelAnalyticsFieldRefs {
    readonly id: FieldRef<"ChannelAnalytics", 'String'>
    readonly channelId: FieldRef<"ChannelAnalytics", 'String'>
    readonly date: FieldRef<"ChannelAnalytics", 'DateTime'>
    readonly views: FieldRef<"ChannelAnalytics", 'BigInt'>
    readonly subscribers: FieldRef<"ChannelAnalytics", 'Int'>
    readonly subscribersGained: FieldRef<"ChannelAnalytics", 'Int'>
    readonly subscribersLost: FieldRef<"ChannelAnalytics", 'Int'>
    readonly watchTimeMinutes: FieldRef<"ChannelAnalytics", 'BigInt'>
    readonly likes: FieldRef<"ChannelAnalytics", 'Int'>
    readonly comments: FieldRef<"ChannelAnalytics", 'Int'>
    readonly shares: FieldRef<"ChannelAnalytics", 'Int'>
    readonly estimatedRevenue: FieldRef<"ChannelAnalytics", 'Decimal'>
    readonly createdAt: FieldRef<"ChannelAnalytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChannelAnalytics findUnique
   */
  export type ChannelAnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelAnalytics
     */
    select?: ChannelAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelAnalytics
     */
    omit?: ChannelAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ChannelAnalytics to fetch.
     */
    where: ChannelAnalyticsWhereUniqueInput
  }

  /**
   * ChannelAnalytics findUniqueOrThrow
   */
  export type ChannelAnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelAnalytics
     */
    select?: ChannelAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelAnalytics
     */
    omit?: ChannelAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ChannelAnalytics to fetch.
     */
    where: ChannelAnalyticsWhereUniqueInput
  }

  /**
   * ChannelAnalytics findFirst
   */
  export type ChannelAnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelAnalytics
     */
    select?: ChannelAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelAnalytics
     */
    omit?: ChannelAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ChannelAnalytics to fetch.
     */
    where?: ChannelAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelAnalytics to fetch.
     */
    orderBy?: ChannelAnalyticsOrderByWithRelationInput | ChannelAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelAnalytics.
     */
    cursor?: ChannelAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelAnalytics.
     */
    distinct?: ChannelAnalyticsScalarFieldEnum | ChannelAnalyticsScalarFieldEnum[]
  }

  /**
   * ChannelAnalytics findFirstOrThrow
   */
  export type ChannelAnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelAnalytics
     */
    select?: ChannelAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelAnalytics
     */
    omit?: ChannelAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ChannelAnalytics to fetch.
     */
    where?: ChannelAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelAnalytics to fetch.
     */
    orderBy?: ChannelAnalyticsOrderByWithRelationInput | ChannelAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChannelAnalytics.
     */
    cursor?: ChannelAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChannelAnalytics.
     */
    distinct?: ChannelAnalyticsScalarFieldEnum | ChannelAnalyticsScalarFieldEnum[]
  }

  /**
   * ChannelAnalytics findMany
   */
  export type ChannelAnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelAnalytics
     */
    select?: ChannelAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelAnalytics
     */
    omit?: ChannelAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ChannelAnalytics to fetch.
     */
    where?: ChannelAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChannelAnalytics to fetch.
     */
    orderBy?: ChannelAnalyticsOrderByWithRelationInput | ChannelAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChannelAnalytics.
     */
    cursor?: ChannelAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChannelAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChannelAnalytics.
     */
    skip?: number
    distinct?: ChannelAnalyticsScalarFieldEnum | ChannelAnalyticsScalarFieldEnum[]
  }

  /**
   * ChannelAnalytics create
   */
  export type ChannelAnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelAnalytics
     */
    select?: ChannelAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelAnalytics
     */
    omit?: ChannelAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelAnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a ChannelAnalytics.
     */
    data: XOR<ChannelAnalyticsCreateInput, ChannelAnalyticsUncheckedCreateInput>
  }

  /**
   * ChannelAnalytics createMany
   */
  export type ChannelAnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChannelAnalytics.
     */
    data: ChannelAnalyticsCreateManyInput | ChannelAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChannelAnalytics createManyAndReturn
   */
  export type ChannelAnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelAnalytics
     */
    select?: ChannelAnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelAnalytics
     */
    omit?: ChannelAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to create many ChannelAnalytics.
     */
    data: ChannelAnalyticsCreateManyInput | ChannelAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelAnalyticsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChannelAnalytics update
   */
  export type ChannelAnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelAnalytics
     */
    select?: ChannelAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelAnalytics
     */
    omit?: ChannelAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelAnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a ChannelAnalytics.
     */
    data: XOR<ChannelAnalyticsUpdateInput, ChannelAnalyticsUncheckedUpdateInput>
    /**
     * Choose, which ChannelAnalytics to update.
     */
    where: ChannelAnalyticsWhereUniqueInput
  }

  /**
   * ChannelAnalytics updateMany
   */
  export type ChannelAnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChannelAnalytics.
     */
    data: XOR<ChannelAnalyticsUpdateManyMutationInput, ChannelAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which ChannelAnalytics to update
     */
    where?: ChannelAnalyticsWhereInput
    /**
     * Limit how many ChannelAnalytics to update.
     */
    limit?: number
  }

  /**
   * ChannelAnalytics updateManyAndReturn
   */
  export type ChannelAnalyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelAnalytics
     */
    select?: ChannelAnalyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelAnalytics
     */
    omit?: ChannelAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to update ChannelAnalytics.
     */
    data: XOR<ChannelAnalyticsUpdateManyMutationInput, ChannelAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which ChannelAnalytics to update
     */
    where?: ChannelAnalyticsWhereInput
    /**
     * Limit how many ChannelAnalytics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelAnalyticsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChannelAnalytics upsert
   */
  export type ChannelAnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelAnalytics
     */
    select?: ChannelAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelAnalytics
     */
    omit?: ChannelAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelAnalyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the ChannelAnalytics to update in case it exists.
     */
    where: ChannelAnalyticsWhereUniqueInput
    /**
     * In case the ChannelAnalytics found by the `where` argument doesn't exist, create a new ChannelAnalytics with this data.
     */
    create: XOR<ChannelAnalyticsCreateInput, ChannelAnalyticsUncheckedCreateInput>
    /**
     * In case the ChannelAnalytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelAnalyticsUpdateInput, ChannelAnalyticsUncheckedUpdateInput>
  }

  /**
   * ChannelAnalytics delete
   */
  export type ChannelAnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelAnalytics
     */
    select?: ChannelAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelAnalytics
     */
    omit?: ChannelAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelAnalyticsInclude<ExtArgs> | null
    /**
     * Filter which ChannelAnalytics to delete.
     */
    where: ChannelAnalyticsWhereUniqueInput
  }

  /**
   * ChannelAnalytics deleteMany
   */
  export type ChannelAnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChannelAnalytics to delete
     */
    where?: ChannelAnalyticsWhereInput
    /**
     * Limit how many ChannelAnalytics to delete.
     */
    limit?: number
  }

  /**
   * ChannelAnalytics without action
   */
  export type ChannelAnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelAnalytics
     */
    select?: ChannelAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChannelAnalytics
     */
    omit?: ChannelAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelAnalyticsInclude<ExtArgs> | null
  }


  /**
   * Model UserSettings
   */

  export type AggregateUserSettings = {
    _count: UserSettingsCountAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  export type UserSettingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    defaultPrivacy: $Enums.PrivacyStatus | null
    defaultCategory: string | null
    defaultLanguage: string | null
    autoSaveDrafts: boolean | null
    rememberLastChannel: boolean | null
    emailNotifications: boolean | null
    theme: $Enums.Theme | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSettingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    defaultPrivacy: $Enums.PrivacyStatus | null
    defaultCategory: string | null
    defaultLanguage: string | null
    autoSaveDrafts: boolean | null
    rememberLastChannel: boolean | null
    emailNotifications: boolean | null
    theme: $Enums.Theme | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSettingsCountAggregateOutputType = {
    id: number
    userId: number
    defaultPrivacy: number
    defaultCategory: number
    defaultLanguage: number
    autoSaveDrafts: number
    rememberLastChannel: number
    emailNotifications: number
    theme: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    defaultPrivacy?: true
    defaultCategory?: true
    defaultLanguage?: true
    autoSaveDrafts?: true
    rememberLastChannel?: true
    emailNotifications?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    defaultPrivacy?: true
    defaultCategory?: true
    defaultLanguage?: true
    autoSaveDrafts?: true
    rememberLastChannel?: true
    emailNotifications?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    defaultPrivacy?: true
    defaultCategory?: true
    defaultLanguage?: true
    autoSaveDrafts?: true
    rememberLastChannel?: true
    emailNotifications?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to aggregate.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingsMaxAggregateInputType
  }

  export type GetUserSettingsAggregateType<T extends UserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSettings[P]>
      : GetScalarType<T[P], AggregateUserSettings[P]>
  }




  export type UserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithAggregationInput | UserSettingsOrderByWithAggregationInput[]
    by: UserSettingsScalarFieldEnum[] | UserSettingsScalarFieldEnum
    having?: UserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingsCountAggregateInputType | true
    _min?: UserSettingsMinAggregateInputType
    _max?: UserSettingsMaxAggregateInputType
  }

  export type UserSettingsGroupByOutputType = {
    id: string
    userId: string
    defaultPrivacy: $Enums.PrivacyStatus
    defaultCategory: string
    defaultLanguage: string
    autoSaveDrafts: boolean
    rememberLastChannel: boolean
    emailNotifications: boolean
    theme: $Enums.Theme
    createdAt: Date
    updatedAt: Date
    _count: UserSettingsCountAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  type GetUserSettingsGroupByPayload<T extends UserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    defaultPrivacy?: boolean
    defaultCategory?: boolean
    defaultLanguage?: boolean
    autoSaveDrafts?: boolean
    rememberLastChannel?: boolean
    emailNotifications?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    defaultPrivacy?: boolean
    defaultCategory?: boolean
    defaultLanguage?: boolean
    autoSaveDrafts?: boolean
    rememberLastChannel?: boolean
    emailNotifications?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    defaultPrivacy?: boolean
    defaultCategory?: boolean
    defaultLanguage?: boolean
    autoSaveDrafts?: boolean
    rememberLastChannel?: boolean
    emailNotifications?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    defaultPrivacy?: boolean
    defaultCategory?: boolean
    defaultLanguage?: boolean
    autoSaveDrafts?: boolean
    rememberLastChannel?: boolean
    emailNotifications?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "defaultPrivacy" | "defaultCategory" | "defaultLanguage" | "autoSaveDrafts" | "rememberLastChannel" | "emailNotifications" | "theme" | "createdAt" | "updatedAt", ExtArgs["result"]["userSettings"]>
  export type UserSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      defaultPrivacy: $Enums.PrivacyStatus
      defaultCategory: string
      defaultLanguage: string
      autoSaveDrafts: boolean
      rememberLastChannel: boolean
      emailNotifications: boolean
      theme: $Enums.Theme
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSettings"]>
    composites: {}
  }

  type UserSettingsGetPayload<S extends boolean | null | undefined | UserSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserSettingsPayload, S>

  type UserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSettingsCountAggregateInputType | true
    }

  export interface UserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSettings'], meta: { name: 'UserSettings' } }
    /**
     * Find zero or one UserSettings that matches the filter.
     * @param {UserSettingsFindUniqueArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSettingsFindUniqueArgs>(args: SelectSubset<T, UserSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSettingsFindFirstArgs>(args?: SelectSubset<T, UserSettingsFindFirstArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSettings.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSettingsFindManyArgs>(args?: SelectSubset<T, UserSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSettings.
     * @param {UserSettingsCreateArgs} args - Arguments to create a UserSettings.
     * @example
     * // Create one UserSettings
     * const UserSettings = await prisma.userSettings.create({
     *   data: {
     *     // ... data to create a UserSettings
     *   }
     * })
     * 
     */
    create<T extends UserSettingsCreateArgs>(args: SelectSubset<T, UserSettingsCreateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSettings.
     * @param {UserSettingsCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSettingsCreateManyArgs>(args?: SelectSubset<T, UserSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSettings and returns the data saved in the database.
     * @param {UserSettingsCreateManyAndReturnArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSettings.
     * @param {UserSettingsDeleteArgs} args - Arguments to delete one UserSettings.
     * @example
     * // Delete one UserSettings
     * const UserSettings = await prisma.userSettings.delete({
     *   where: {
     *     // ... filter to delete one UserSettings
     *   }
     * })
     * 
     */
    delete<T extends UserSettingsDeleteArgs>(args: SelectSubset<T, UserSettingsDeleteArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSettings.
     * @param {UserSettingsUpdateArgs} args - Arguments to update one UserSettings.
     * @example
     * // Update one UserSettings
     * const userSettings = await prisma.userSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSettingsUpdateArgs>(args: SelectSubset<T, UserSettingsUpdateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingsDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSettingsDeleteManyArgs>(args?: SelectSubset<T, UserSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSettingsUpdateManyArgs>(args: SelectSubset<T, UserSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings and returns the data updated in the database.
     * @param {UserSettingsUpdateManyAndReturnArgs} args - Arguments to update many UserSettings.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSettings.
     * @param {UserSettingsUpsertArgs} args - Arguments to update or create a UserSettings.
     * @example
     * // Update or create a UserSettings
     * const userSettings = await prisma.userSettings.upsert({
     *   create: {
     *     // ... data to create a UserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserSettingsUpsertArgs>(args: SelectSubset<T, UserSettingsUpsertArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSettings.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingsCountArgs>(
      args?: Subset<T, UserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSettingsAggregateArgs>(args: Subset<T, UserSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserSettingsAggregateType<T>>

    /**
     * Group by UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsGroupByArgs} args - Group by arguments.
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
      T extends UserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSettings model
   */
  readonly fields: UserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSettings model
   */
  interface UserSettingsFieldRefs {
    readonly id: FieldRef<"UserSettings", 'String'>
    readonly userId: FieldRef<"UserSettings", 'String'>
    readonly defaultPrivacy: FieldRef<"UserSettings", 'PrivacyStatus'>
    readonly defaultCategory: FieldRef<"UserSettings", 'String'>
    readonly defaultLanguage: FieldRef<"UserSettings", 'String'>
    readonly autoSaveDrafts: FieldRef<"UserSettings", 'Boolean'>
    readonly rememberLastChannel: FieldRef<"UserSettings", 'Boolean'>
    readonly emailNotifications: FieldRef<"UserSettings", 'Boolean'>
    readonly theme: FieldRef<"UserSettings", 'Theme'>
    readonly createdAt: FieldRef<"UserSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSettings findUnique
   */
  export type UserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findUniqueOrThrow
   */
  export type UserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findFirst
   */
  export type UserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findFirstOrThrow
   */
  export type UserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findMany
   */
  export type UserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings create
   */
  export type UserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSettings.
     */
    data: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
  }

  /**
   * UserSettings createMany
   */
  export type UserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings createManyAndReturn
   */
  export type UserSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings update
   */
  export type UserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSettings.
     */
    data: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserSettings to update.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings updateMany
   */
  export type UserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSettings updateManyAndReturn
   */
  export type UserSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings upsert
   */
  export type UserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSettings to update in case it exists.
     */
    where: UserSettingsWhereUniqueInput
    /**
     * In case the UserSettings found by the `where` argument doesn't exist, create a new UserSettings with this data.
     */
    create: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
    /**
     * In case the UserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
  }

  /**
   * UserSettings delete
   */
  export type UserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter which UserSettings to delete.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings deleteMany
   */
  export type UserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to delete.
     */
    limit?: number
  }

  /**
   * UserSettings without action
   */
  export type UserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
  }


  /**
   * Model ApiUsage
   */

  export type AggregateApiUsage = {
    _count: ApiUsageCountAggregateOutputType | null
    _avg: ApiUsageAvgAggregateOutputType | null
    _sum: ApiUsageSumAggregateOutputType | null
    _min: ApiUsageMinAggregateOutputType | null
    _max: ApiUsageMaxAggregateOutputType | null
  }

  export type ApiUsageAvgAggregateOutputType = {
    quotaUsed: number | null
  }

  export type ApiUsageSumAggregateOutputType = {
    quotaUsed: number | null
  }

  export type ApiUsageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    endpoint: string | null
    method: string | null
    quotaUsed: number | null
    ipHash: string | null
    timestamp: Date | null
  }

  export type ApiUsageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    endpoint: string | null
    method: string | null
    quotaUsed: number | null
    ipHash: string | null
    timestamp: Date | null
  }

  export type ApiUsageCountAggregateOutputType = {
    id: number
    userId: number
    endpoint: number
    method: number
    quotaUsed: number
    ipHash: number
    timestamp: number
    _all: number
  }


  export type ApiUsageAvgAggregateInputType = {
    quotaUsed?: true
  }

  export type ApiUsageSumAggregateInputType = {
    quotaUsed?: true
  }

  export type ApiUsageMinAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    method?: true
    quotaUsed?: true
    ipHash?: true
    timestamp?: true
  }

  export type ApiUsageMaxAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    method?: true
    quotaUsed?: true
    ipHash?: true
    timestamp?: true
  }

  export type ApiUsageCountAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    method?: true
    quotaUsed?: true
    ipHash?: true
    timestamp?: true
    _all?: true
  }

  export type ApiUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiUsage to aggregate.
     */
    where?: ApiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsages to fetch.
     */
    orderBy?: ApiUsageOrderByWithRelationInput | ApiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiUsages
    **/
    _count?: true | ApiUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiUsageMaxAggregateInputType
  }

  export type GetApiUsageAggregateType<T extends ApiUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateApiUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiUsage[P]>
      : GetScalarType<T[P], AggregateApiUsage[P]>
  }




  export type ApiUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiUsageWhereInput
    orderBy?: ApiUsageOrderByWithAggregationInput | ApiUsageOrderByWithAggregationInput[]
    by: ApiUsageScalarFieldEnum[] | ApiUsageScalarFieldEnum
    having?: ApiUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiUsageCountAggregateInputType | true
    _avg?: ApiUsageAvgAggregateInputType
    _sum?: ApiUsageSumAggregateInputType
    _min?: ApiUsageMinAggregateInputType
    _max?: ApiUsageMaxAggregateInputType
  }

  export type ApiUsageGroupByOutputType = {
    id: string
    userId: string
    endpoint: string
    method: string
    quotaUsed: number
    ipHash: string | null
    timestamp: Date
    _count: ApiUsageCountAggregateOutputType | null
    _avg: ApiUsageAvgAggregateOutputType | null
    _sum: ApiUsageSumAggregateOutputType | null
    _min: ApiUsageMinAggregateOutputType | null
    _max: ApiUsageMaxAggregateOutputType | null
  }

  type GetApiUsageGroupByPayload<T extends ApiUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiUsageGroupByOutputType[P]>
            : GetScalarType<T[P], ApiUsageGroupByOutputType[P]>
        }
      >
    >


  export type ApiUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    method?: boolean
    quotaUsed?: boolean
    ipHash?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsage"]>

  export type ApiUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    method?: boolean
    quotaUsed?: boolean
    ipHash?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsage"]>

  export type ApiUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    method?: boolean
    quotaUsed?: boolean
    ipHash?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiUsage"]>

  export type ApiUsageSelectScalar = {
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    method?: boolean
    quotaUsed?: boolean
    ipHash?: boolean
    timestamp?: boolean
  }

  export type ApiUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "endpoint" | "method" | "quotaUsed" | "ipHash" | "timestamp", ExtArgs["result"]["apiUsage"]>
  export type ApiUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApiUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiUsage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      endpoint: string
      method: string
      quotaUsed: number
      ipHash: string | null
      timestamp: Date
    }, ExtArgs["result"]["apiUsage"]>
    composites: {}
  }

  type ApiUsageGetPayload<S extends boolean | null | undefined | ApiUsageDefaultArgs> = $Result.GetResult<Prisma.$ApiUsagePayload, S>

  type ApiUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiUsageCountAggregateInputType | true
    }

  export interface ApiUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiUsage'], meta: { name: 'ApiUsage' } }
    /**
     * Find zero or one ApiUsage that matches the filter.
     * @param {ApiUsageFindUniqueArgs} args - Arguments to find a ApiUsage
     * @example
     * // Get one ApiUsage
     * const apiUsage = await prisma.apiUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiUsageFindUniqueArgs>(args: SelectSubset<T, ApiUsageFindUniqueArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiUsageFindUniqueOrThrowArgs} args - Arguments to find a ApiUsage
     * @example
     * // Get one ApiUsage
     * const apiUsage = await prisma.apiUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageFindFirstArgs} args - Arguments to find a ApiUsage
     * @example
     * // Get one ApiUsage
     * const apiUsage = await prisma.apiUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiUsageFindFirstArgs>(args?: SelectSubset<T, ApiUsageFindFirstArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageFindFirstOrThrowArgs} args - Arguments to find a ApiUsage
     * @example
     * // Get one ApiUsage
     * const apiUsage = await prisma.apiUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiUsages
     * const apiUsages = await prisma.apiUsage.findMany()
     * 
     * // Get first 10 ApiUsages
     * const apiUsages = await prisma.apiUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiUsageWithIdOnly = await prisma.apiUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiUsageFindManyArgs>(args?: SelectSubset<T, ApiUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiUsage.
     * @param {ApiUsageCreateArgs} args - Arguments to create a ApiUsage.
     * @example
     * // Create one ApiUsage
     * const ApiUsage = await prisma.apiUsage.create({
     *   data: {
     *     // ... data to create a ApiUsage
     *   }
     * })
     * 
     */
    create<T extends ApiUsageCreateArgs>(args: SelectSubset<T, ApiUsageCreateArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiUsages.
     * @param {ApiUsageCreateManyArgs} args - Arguments to create many ApiUsages.
     * @example
     * // Create many ApiUsages
     * const apiUsage = await prisma.apiUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiUsageCreateManyArgs>(args?: SelectSubset<T, ApiUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiUsages and returns the data saved in the database.
     * @param {ApiUsageCreateManyAndReturnArgs} args - Arguments to create many ApiUsages.
     * @example
     * // Create many ApiUsages
     * const apiUsage = await prisma.apiUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiUsages and only return the `id`
     * const apiUsageWithIdOnly = await prisma.apiUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiUsage.
     * @param {ApiUsageDeleteArgs} args - Arguments to delete one ApiUsage.
     * @example
     * // Delete one ApiUsage
     * const ApiUsage = await prisma.apiUsage.delete({
     *   where: {
     *     // ... filter to delete one ApiUsage
     *   }
     * })
     * 
     */
    delete<T extends ApiUsageDeleteArgs>(args: SelectSubset<T, ApiUsageDeleteArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiUsage.
     * @param {ApiUsageUpdateArgs} args - Arguments to update one ApiUsage.
     * @example
     * // Update one ApiUsage
     * const apiUsage = await prisma.apiUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiUsageUpdateArgs>(args: SelectSubset<T, ApiUsageUpdateArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiUsages.
     * @param {ApiUsageDeleteManyArgs} args - Arguments to filter ApiUsages to delete.
     * @example
     * // Delete a few ApiUsages
     * const { count } = await prisma.apiUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiUsageDeleteManyArgs>(args?: SelectSubset<T, ApiUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiUsages
     * const apiUsage = await prisma.apiUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiUsageUpdateManyArgs>(args: SelectSubset<T, ApiUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiUsages and returns the data updated in the database.
     * @param {ApiUsageUpdateManyAndReturnArgs} args - Arguments to update many ApiUsages.
     * @example
     * // Update many ApiUsages
     * const apiUsage = await prisma.apiUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiUsages and only return the `id`
     * const apiUsageWithIdOnly = await prisma.apiUsage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiUsage.
     * @param {ApiUsageUpsertArgs} args - Arguments to update or create a ApiUsage.
     * @example
     * // Update or create a ApiUsage
     * const apiUsage = await prisma.apiUsage.upsert({
     *   create: {
     *     // ... data to create a ApiUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiUsage we want to update
     *   }
     * })
     */
    upsert<T extends ApiUsageUpsertArgs>(args: SelectSubset<T, ApiUsageUpsertArgs<ExtArgs>>): Prisma__ApiUsageClient<$Result.GetResult<Prisma.$ApiUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageCountArgs} args - Arguments to filter ApiUsages to count.
     * @example
     * // Count the number of ApiUsages
     * const count = await prisma.apiUsage.count({
     *   where: {
     *     // ... the filter for the ApiUsages we want to count
     *   }
     * })
    **/
    count<T extends ApiUsageCountArgs>(
      args?: Subset<T, ApiUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiUsageAggregateArgs>(args: Subset<T, ApiUsageAggregateArgs>): Prisma.PrismaPromise<GetApiUsageAggregateType<T>>

    /**
     * Group by ApiUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUsageGroupByArgs} args - Group by arguments.
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
      T extends ApiUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiUsageGroupByArgs['orderBy'] }
        : { orderBy?: ApiUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiUsage model
   */
  readonly fields: ApiUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApiUsage model
   */
  interface ApiUsageFieldRefs {
    readonly id: FieldRef<"ApiUsage", 'String'>
    readonly userId: FieldRef<"ApiUsage", 'String'>
    readonly endpoint: FieldRef<"ApiUsage", 'String'>
    readonly method: FieldRef<"ApiUsage", 'String'>
    readonly quotaUsed: FieldRef<"ApiUsage", 'Int'>
    readonly ipHash: FieldRef<"ApiUsage", 'String'>
    readonly timestamp: FieldRef<"ApiUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiUsage findUnique
   */
  export type ApiUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsage to fetch.
     */
    where: ApiUsageWhereUniqueInput
  }

  /**
   * ApiUsage findUniqueOrThrow
   */
  export type ApiUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsage to fetch.
     */
    where: ApiUsageWhereUniqueInput
  }

  /**
   * ApiUsage findFirst
   */
  export type ApiUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsage to fetch.
     */
    where?: ApiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsages to fetch.
     */
    orderBy?: ApiUsageOrderByWithRelationInput | ApiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiUsages.
     */
    cursor?: ApiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiUsages.
     */
    distinct?: ApiUsageScalarFieldEnum | ApiUsageScalarFieldEnum[]
  }

  /**
   * ApiUsage findFirstOrThrow
   */
  export type ApiUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsage to fetch.
     */
    where?: ApiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsages to fetch.
     */
    orderBy?: ApiUsageOrderByWithRelationInput | ApiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiUsages.
     */
    cursor?: ApiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiUsages.
     */
    distinct?: ApiUsageScalarFieldEnum | ApiUsageScalarFieldEnum[]
  }

  /**
   * ApiUsage findMany
   */
  export type ApiUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * Filter, which ApiUsages to fetch.
     */
    where?: ApiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiUsages to fetch.
     */
    orderBy?: ApiUsageOrderByWithRelationInput | ApiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiUsages.
     */
    cursor?: ApiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiUsages.
     */
    skip?: number
    distinct?: ApiUsageScalarFieldEnum | ApiUsageScalarFieldEnum[]
  }

  /**
   * ApiUsage create
   */
  export type ApiUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiUsage.
     */
    data: XOR<ApiUsageCreateInput, ApiUsageUncheckedCreateInput>
  }

  /**
   * ApiUsage createMany
   */
  export type ApiUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiUsages.
     */
    data: ApiUsageCreateManyInput | ApiUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiUsage createManyAndReturn
   */
  export type ApiUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * The data used to create many ApiUsages.
     */
    data: ApiUsageCreateManyInput | ApiUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiUsage update
   */
  export type ApiUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiUsage.
     */
    data: XOR<ApiUsageUpdateInput, ApiUsageUncheckedUpdateInput>
    /**
     * Choose, which ApiUsage to update.
     */
    where: ApiUsageWhereUniqueInput
  }

  /**
   * ApiUsage updateMany
   */
  export type ApiUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiUsages.
     */
    data: XOR<ApiUsageUpdateManyMutationInput, ApiUsageUncheckedUpdateManyInput>
    /**
     * Filter which ApiUsages to update
     */
    where?: ApiUsageWhereInput
    /**
     * Limit how many ApiUsages to update.
     */
    limit?: number
  }

  /**
   * ApiUsage updateManyAndReturn
   */
  export type ApiUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * The data used to update ApiUsages.
     */
    data: XOR<ApiUsageUpdateManyMutationInput, ApiUsageUncheckedUpdateManyInput>
    /**
     * Filter which ApiUsages to update
     */
    where?: ApiUsageWhereInput
    /**
     * Limit how many ApiUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiUsage upsert
   */
  export type ApiUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiUsage to update in case it exists.
     */
    where: ApiUsageWhereUniqueInput
    /**
     * In case the ApiUsage found by the `where` argument doesn't exist, create a new ApiUsage with this data.
     */
    create: XOR<ApiUsageCreateInput, ApiUsageUncheckedCreateInput>
    /**
     * In case the ApiUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiUsageUpdateInput, ApiUsageUncheckedUpdateInput>
  }

  /**
   * ApiUsage delete
   */
  export type ApiUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
    /**
     * Filter which ApiUsage to delete.
     */
    where: ApiUsageWhereUniqueInput
  }

  /**
   * ApiUsage deleteMany
   */
  export type ApiUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiUsages to delete
     */
    where?: ApiUsageWhereInput
    /**
     * Limit how many ApiUsages to delete.
     */
    limit?: number
  }

  /**
   * ApiUsage without action
   */
  export type ApiUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiUsage
     */
    select?: ApiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiUsage
     */
    omit?: ApiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiUsageInclude<ExtArgs> | null
  }


  /**
   * Model RateLimit
   */

  export type AggregateRateLimit = {
    _count: RateLimitCountAggregateOutputType | null
    _avg: RateLimitAvgAggregateOutputType | null
    _sum: RateLimitSumAggregateOutputType | null
    _min: RateLimitMinAggregateOutputType | null
    _max: RateLimitMaxAggregateOutputType | null
  }

  export type RateLimitAvgAggregateOutputType = {
    requests: number | null
  }

  export type RateLimitSumAggregateOutputType = {
    requests: number | null
  }

  export type RateLimitMinAggregateOutputType = {
    id: string | null
    requests: number | null
    windowStart: Date | null
  }

  export type RateLimitMaxAggregateOutputType = {
    id: string | null
    requests: number | null
    windowStart: Date | null
  }

  export type RateLimitCountAggregateOutputType = {
    id: number
    requests: number
    windowStart: number
    _all: number
  }


  export type RateLimitAvgAggregateInputType = {
    requests?: true
  }

  export type RateLimitSumAggregateInputType = {
    requests?: true
  }

  export type RateLimitMinAggregateInputType = {
    id?: true
    requests?: true
    windowStart?: true
  }

  export type RateLimitMaxAggregateInputType = {
    id?: true
    requests?: true
    windowStart?: true
  }

  export type RateLimitCountAggregateInputType = {
    id?: true
    requests?: true
    windowStart?: true
    _all?: true
  }

  export type RateLimitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateLimit to aggregate.
     */
    where?: RateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimits to fetch.
     */
    orderBy?: RateLimitOrderByWithRelationInput | RateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RateLimits
    **/
    _count?: true | RateLimitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RateLimitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RateLimitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RateLimitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RateLimitMaxAggregateInputType
  }

  export type GetRateLimitAggregateType<T extends RateLimitAggregateArgs> = {
        [P in keyof T & keyof AggregateRateLimit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRateLimit[P]>
      : GetScalarType<T[P], AggregateRateLimit[P]>
  }




  export type RateLimitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateLimitWhereInput
    orderBy?: RateLimitOrderByWithAggregationInput | RateLimitOrderByWithAggregationInput[]
    by: RateLimitScalarFieldEnum[] | RateLimitScalarFieldEnum
    having?: RateLimitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RateLimitCountAggregateInputType | true
    _avg?: RateLimitAvgAggregateInputType
    _sum?: RateLimitSumAggregateInputType
    _min?: RateLimitMinAggregateInputType
    _max?: RateLimitMaxAggregateInputType
  }

  export type RateLimitGroupByOutputType = {
    id: string
    requests: number
    windowStart: Date
    _count: RateLimitCountAggregateOutputType | null
    _avg: RateLimitAvgAggregateOutputType | null
    _sum: RateLimitSumAggregateOutputType | null
    _min: RateLimitMinAggregateOutputType | null
    _max: RateLimitMaxAggregateOutputType | null
  }

  type GetRateLimitGroupByPayload<T extends RateLimitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RateLimitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RateLimitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RateLimitGroupByOutputType[P]>
            : GetScalarType<T[P], RateLimitGroupByOutputType[P]>
        }
      >
    >


  export type RateLimitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requests?: boolean
    windowStart?: boolean
  }, ExtArgs["result"]["rateLimit"]>

  export type RateLimitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requests?: boolean
    windowStart?: boolean
  }, ExtArgs["result"]["rateLimit"]>

  export type RateLimitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requests?: boolean
    windowStart?: boolean
  }, ExtArgs["result"]["rateLimit"]>

  export type RateLimitSelectScalar = {
    id?: boolean
    requests?: boolean
    windowStart?: boolean
  }

  export type RateLimitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requests" | "windowStart", ExtArgs["result"]["rateLimit"]>

  export type $RateLimitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RateLimit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requests: number
      windowStart: Date
    }, ExtArgs["result"]["rateLimit"]>
    composites: {}
  }

  type RateLimitGetPayload<S extends boolean | null | undefined | RateLimitDefaultArgs> = $Result.GetResult<Prisma.$RateLimitPayload, S>

  type RateLimitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RateLimitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RateLimitCountAggregateInputType | true
    }

  export interface RateLimitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RateLimit'], meta: { name: 'RateLimit' } }
    /**
     * Find zero or one RateLimit that matches the filter.
     * @param {RateLimitFindUniqueArgs} args - Arguments to find a RateLimit
     * @example
     * // Get one RateLimit
     * const rateLimit = await prisma.rateLimit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RateLimitFindUniqueArgs>(args: SelectSubset<T, RateLimitFindUniqueArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RateLimit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RateLimitFindUniqueOrThrowArgs} args - Arguments to find a RateLimit
     * @example
     * // Get one RateLimit
     * const rateLimit = await prisma.rateLimit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RateLimitFindUniqueOrThrowArgs>(args: SelectSubset<T, RateLimitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateLimit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitFindFirstArgs} args - Arguments to find a RateLimit
     * @example
     * // Get one RateLimit
     * const rateLimit = await prisma.rateLimit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RateLimitFindFirstArgs>(args?: SelectSubset<T, RateLimitFindFirstArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateLimit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitFindFirstOrThrowArgs} args - Arguments to find a RateLimit
     * @example
     * // Get one RateLimit
     * const rateLimit = await prisma.rateLimit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RateLimitFindFirstOrThrowArgs>(args?: SelectSubset<T, RateLimitFindFirstOrThrowArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RateLimits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RateLimits
     * const rateLimits = await prisma.rateLimit.findMany()
     * 
     * // Get first 10 RateLimits
     * const rateLimits = await prisma.rateLimit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rateLimitWithIdOnly = await prisma.rateLimit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RateLimitFindManyArgs>(args?: SelectSubset<T, RateLimitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RateLimit.
     * @param {RateLimitCreateArgs} args - Arguments to create a RateLimit.
     * @example
     * // Create one RateLimit
     * const RateLimit = await prisma.rateLimit.create({
     *   data: {
     *     // ... data to create a RateLimit
     *   }
     * })
     * 
     */
    create<T extends RateLimitCreateArgs>(args: SelectSubset<T, RateLimitCreateArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RateLimits.
     * @param {RateLimitCreateManyArgs} args - Arguments to create many RateLimits.
     * @example
     * // Create many RateLimits
     * const rateLimit = await prisma.rateLimit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RateLimitCreateManyArgs>(args?: SelectSubset<T, RateLimitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RateLimits and returns the data saved in the database.
     * @param {RateLimitCreateManyAndReturnArgs} args - Arguments to create many RateLimits.
     * @example
     * // Create many RateLimits
     * const rateLimit = await prisma.rateLimit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RateLimits and only return the `id`
     * const rateLimitWithIdOnly = await prisma.rateLimit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RateLimitCreateManyAndReturnArgs>(args?: SelectSubset<T, RateLimitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RateLimit.
     * @param {RateLimitDeleteArgs} args - Arguments to delete one RateLimit.
     * @example
     * // Delete one RateLimit
     * const RateLimit = await prisma.rateLimit.delete({
     *   where: {
     *     // ... filter to delete one RateLimit
     *   }
     * })
     * 
     */
    delete<T extends RateLimitDeleteArgs>(args: SelectSubset<T, RateLimitDeleteArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RateLimit.
     * @param {RateLimitUpdateArgs} args - Arguments to update one RateLimit.
     * @example
     * // Update one RateLimit
     * const rateLimit = await prisma.rateLimit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RateLimitUpdateArgs>(args: SelectSubset<T, RateLimitUpdateArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RateLimits.
     * @param {RateLimitDeleteManyArgs} args - Arguments to filter RateLimits to delete.
     * @example
     * // Delete a few RateLimits
     * const { count } = await prisma.rateLimit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RateLimitDeleteManyArgs>(args?: SelectSubset<T, RateLimitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RateLimits
     * const rateLimit = await prisma.rateLimit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RateLimitUpdateManyArgs>(args: SelectSubset<T, RateLimitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateLimits and returns the data updated in the database.
     * @param {RateLimitUpdateManyAndReturnArgs} args - Arguments to update many RateLimits.
     * @example
     * // Update many RateLimits
     * const rateLimit = await prisma.rateLimit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RateLimits and only return the `id`
     * const rateLimitWithIdOnly = await prisma.rateLimit.updateManyAndReturn({
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
    updateManyAndReturn<T extends RateLimitUpdateManyAndReturnArgs>(args: SelectSubset<T, RateLimitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RateLimit.
     * @param {RateLimitUpsertArgs} args - Arguments to update or create a RateLimit.
     * @example
     * // Update or create a RateLimit
     * const rateLimit = await prisma.rateLimit.upsert({
     *   create: {
     *     // ... data to create a RateLimit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RateLimit we want to update
     *   }
     * })
     */
    upsert<T extends RateLimitUpsertArgs>(args: SelectSubset<T, RateLimitUpsertArgs<ExtArgs>>): Prisma__RateLimitClient<$Result.GetResult<Prisma.$RateLimitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RateLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitCountArgs} args - Arguments to filter RateLimits to count.
     * @example
     * // Count the number of RateLimits
     * const count = await prisma.rateLimit.count({
     *   where: {
     *     // ... the filter for the RateLimits we want to count
     *   }
     * })
    **/
    count<T extends RateLimitCountArgs>(
      args?: Subset<T, RateLimitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RateLimitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RateLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RateLimitAggregateArgs>(args: Subset<T, RateLimitAggregateArgs>): Prisma.PrismaPromise<GetRateLimitAggregateType<T>>

    /**
     * Group by RateLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitGroupByArgs} args - Group by arguments.
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
      T extends RateLimitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RateLimitGroupByArgs['orderBy'] }
        : { orderBy?: RateLimitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RateLimitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRateLimitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RateLimit model
   */
  readonly fields: RateLimitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RateLimit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RateLimitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the RateLimit model
   */
  interface RateLimitFieldRefs {
    readonly id: FieldRef<"RateLimit", 'String'>
    readonly requests: FieldRef<"RateLimit", 'Int'>
    readonly windowStart: FieldRef<"RateLimit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RateLimit findUnique
   */
  export type RateLimitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * Filter, which RateLimit to fetch.
     */
    where: RateLimitWhereUniqueInput
  }

  /**
   * RateLimit findUniqueOrThrow
   */
  export type RateLimitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * Filter, which RateLimit to fetch.
     */
    where: RateLimitWhereUniqueInput
  }

  /**
   * RateLimit findFirst
   */
  export type RateLimitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * Filter, which RateLimit to fetch.
     */
    where?: RateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimits to fetch.
     */
    orderBy?: RateLimitOrderByWithRelationInput | RateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateLimits.
     */
    cursor?: RateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimits.
     */
    distinct?: RateLimitScalarFieldEnum | RateLimitScalarFieldEnum[]
  }

  /**
   * RateLimit findFirstOrThrow
   */
  export type RateLimitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * Filter, which RateLimit to fetch.
     */
    where?: RateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimits to fetch.
     */
    orderBy?: RateLimitOrderByWithRelationInput | RateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateLimits.
     */
    cursor?: RateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimits.
     */
    distinct?: RateLimitScalarFieldEnum | RateLimitScalarFieldEnum[]
  }

  /**
   * RateLimit findMany
   */
  export type RateLimitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * Filter, which RateLimits to fetch.
     */
    where?: RateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimits to fetch.
     */
    orderBy?: RateLimitOrderByWithRelationInput | RateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RateLimits.
     */
    cursor?: RateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimits.
     */
    skip?: number
    distinct?: RateLimitScalarFieldEnum | RateLimitScalarFieldEnum[]
  }

  /**
   * RateLimit create
   */
  export type RateLimitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * The data needed to create a RateLimit.
     */
    data: XOR<RateLimitCreateInput, RateLimitUncheckedCreateInput>
  }

  /**
   * RateLimit createMany
   */
  export type RateLimitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RateLimits.
     */
    data: RateLimitCreateManyInput | RateLimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RateLimit createManyAndReturn
   */
  export type RateLimitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * The data used to create many RateLimits.
     */
    data: RateLimitCreateManyInput | RateLimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RateLimit update
   */
  export type RateLimitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * The data needed to update a RateLimit.
     */
    data: XOR<RateLimitUpdateInput, RateLimitUncheckedUpdateInput>
    /**
     * Choose, which RateLimit to update.
     */
    where: RateLimitWhereUniqueInput
  }

  /**
   * RateLimit updateMany
   */
  export type RateLimitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RateLimits.
     */
    data: XOR<RateLimitUpdateManyMutationInput, RateLimitUncheckedUpdateManyInput>
    /**
     * Filter which RateLimits to update
     */
    where?: RateLimitWhereInput
    /**
     * Limit how many RateLimits to update.
     */
    limit?: number
  }

  /**
   * RateLimit updateManyAndReturn
   */
  export type RateLimitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * The data used to update RateLimits.
     */
    data: XOR<RateLimitUpdateManyMutationInput, RateLimitUncheckedUpdateManyInput>
    /**
     * Filter which RateLimits to update
     */
    where?: RateLimitWhereInput
    /**
     * Limit how many RateLimits to update.
     */
    limit?: number
  }

  /**
   * RateLimit upsert
   */
  export type RateLimitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * The filter to search for the RateLimit to update in case it exists.
     */
    where: RateLimitWhereUniqueInput
    /**
     * In case the RateLimit found by the `where` argument doesn't exist, create a new RateLimit with this data.
     */
    create: XOR<RateLimitCreateInput, RateLimitUncheckedCreateInput>
    /**
     * In case the RateLimit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RateLimitUpdateInput, RateLimitUncheckedUpdateInput>
  }

  /**
   * RateLimit delete
   */
  export type RateLimitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
    /**
     * Filter which RateLimit to delete.
     */
    where: RateLimitWhereUniqueInput
  }

  /**
   * RateLimit deleteMany
   */
  export type RateLimitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateLimits to delete
     */
    where?: RateLimitWhereInput
    /**
     * Limit how many RateLimits to delete.
     */
    limit?: number
  }

  /**
   * RateLimit without action
   */
  export type RateLimitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimit
     */
    select?: RateLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimit
     */
    omit?: RateLimitOmit<ExtArgs> | null
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
    name: 'name',
    image: 'image',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLoginAt: 'lastLoginAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const YouTubeChannelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    customUrl: 'customUrl',
    thumbnailUrl: 'thumbnailUrl',
    bannerUrl: 'bannerUrl',
    subscriberCount: 'subscriberCount',
    videoCount: 'videoCount',
    viewCount: 'viewCount',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    tokenExpiresAt: 'tokenExpiresAt',
    accountEmail: 'accountEmail',
    accountName: 'accountName',
    isBrandAccount: 'isBrandAccount',
    isActive: 'isActive',
    connectedAt: 'connectedAt',
    lastSyncAt: 'lastSyncAt'
  };

  export type YouTubeChannelScalarFieldEnum = (typeof YouTubeChannelScalarFieldEnum)[keyof typeof YouTubeChannelScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    youtubeId: 'youtubeId',
    userId: 'userId',
    channelId: 'channelId',
    title: 'title',
    description: 'description',
    tags: 'tags',
    hashtags: 'hashtags',
    categoryId: 'categoryId',
    thumbnailUrl: 'thumbnailUrl',
    thumbnailGcsUrl: 'thumbnailGcsUrl',
    videoGcsUrl: 'videoGcsUrl',
    duration: 'duration',
    privacyStatus: 'privacyStatus',
    madeForKids: 'madeForKids',
    ageRestriction: 'ageRestriction',
    license: 'license',
    language: 'language',
    allowComments: 'allowComments',
    allowEmbedding: 'allowEmbedding',
    publishToFeed: 'publishToFeed',
    isPremiere: 'isPremiere',
    status: 'status',
    publishedAt: 'publishedAt',
    scheduledFor: 'scheduledFor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const VideoDraftScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    title: 'title',
    description: 'description',
    tags: 'tags',
    hashtags: 'hashtags',
    categoryId: 'categoryId',
    privacyStatus: 'privacyStatus',
    thumbnailData: 'thumbnailData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoDraftScalarFieldEnum = (typeof VideoDraftScalarFieldEnum)[keyof typeof VideoDraftScalarFieldEnum]


  export const VideoTemplateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    titleTemplate: 'titleTemplate',
    descTemplate: 'descTemplate',
    tags: 'tags',
    hashtags: 'hashtags',
    categoryId: 'categoryId',
    privacyStatus: 'privacyStatus',
    madeForKids: 'madeForKids',
    license: 'license',
    language: 'language',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoTemplateScalarFieldEnum = (typeof VideoTemplateScalarFieldEnum)[keyof typeof VideoTemplateScalarFieldEnum]


  export const ScheduledUploadScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    channelId: 'channelId',
    title: 'title',
    description: 'description',
    tags: 'tags',
    categoryId: 'categoryId',
    privacyStatus: 'privacyStatus',
    videoFileName: 'videoFileName',
    videoFileSize: 'videoFileSize',
    videoGcsUrl: 'videoGcsUrl',
    thumbnailGcsUrl: 'thumbnailGcsUrl',
    scheduledFor: 'scheduledFor',
    timezone: 'timezone',
    status: 'status',
    youtubeId: 'youtubeId',
    error: 'error',
    attempts: 'attempts',
    lastAttemptAt: 'lastAttemptAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduledUploadScalarFieldEnum = (typeof ScheduledUploadScalarFieldEnum)[keyof typeof ScheduledUploadScalarFieldEnum]


  export const ChannelAnalyticsScalarFieldEnum: {
    id: 'id',
    channelId: 'channelId',
    date: 'date',
    views: 'views',
    subscribers: 'subscribers',
    subscribersGained: 'subscribersGained',
    subscribersLost: 'subscribersLost',
    watchTimeMinutes: 'watchTimeMinutes',
    likes: 'likes',
    comments: 'comments',
    shares: 'shares',
    estimatedRevenue: 'estimatedRevenue',
    createdAt: 'createdAt'
  };

  export type ChannelAnalyticsScalarFieldEnum = (typeof ChannelAnalyticsScalarFieldEnum)[keyof typeof ChannelAnalyticsScalarFieldEnum]


  export const UserSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    defaultPrivacy: 'defaultPrivacy',
    defaultCategory: 'defaultCategory',
    defaultLanguage: 'defaultLanguage',
    autoSaveDrafts: 'autoSaveDrafts',
    rememberLastChannel: 'rememberLastChannel',
    emailNotifications: 'emailNotifications',
    theme: 'theme',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum]


  export const ApiUsageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    endpoint: 'endpoint',
    method: 'method',
    quotaUsed: 'quotaUsed',
    ipHash: 'ipHash',
    timestamp: 'timestamp'
  };

  export type ApiUsageScalarFieldEnum = (typeof ApiUsageScalarFieldEnum)[keyof typeof ApiUsageScalarFieldEnum]


  export const RateLimitScalarFieldEnum: {
    id: 'id',
    requests: 'requests',
    windowStart: 'windowStart'
  };

  export type RateLimitScalarFieldEnum = (typeof RateLimitScalarFieldEnum)[keyof typeof RateLimitScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PrivacyStatus'
   */
  export type EnumPrivacyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrivacyStatus'>
    


  /**
   * Reference to a field of type 'PrivacyStatus[]'
   */
  export type ListEnumPrivacyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrivacyStatus[]'>
    


  /**
   * Reference to a field of type 'MadeForKids'
   */
  export type EnumMadeForKidsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MadeForKids'>
    


  /**
   * Reference to a field of type 'MadeForKids[]'
   */
  export type ListEnumMadeForKidsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MadeForKids[]'>
    


  /**
   * Reference to a field of type 'License'
   */
  export type EnumLicenseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'License'>
    


  /**
   * Reference to a field of type 'License[]'
   */
  export type ListEnumLicenseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'License[]'>
    


  /**
   * Reference to a field of type 'VideoStatus'
   */
  export type EnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoStatus'>
    


  /**
   * Reference to a field of type 'VideoStatus[]'
   */
  export type ListEnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoStatus[]'>
    


  /**
   * Reference to a field of type 'ScheduleStatus'
   */
  export type EnumScheduleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleStatus'>
    


  /**
   * Reference to a field of type 'ScheduleStatus[]'
   */
  export type ListEnumScheduleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Theme'
   */
  export type EnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme'>
    


  /**
   * Reference to a field of type 'Theme[]'
   */
  export type ListEnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    channels?: YouTubeChannelListRelationFilter
    videos?: VideoListRelationFilter
    drafts?: VideoDraftListRelationFilter
    templates?: VideoTemplateListRelationFilter
    schedules?: ScheduledUploadListRelationFilter
    apiUsage?: ApiUsageListRelationFilter
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    channels?: YouTubeChannelOrderByRelationAggregateInput
    videos?: VideoOrderByRelationAggregateInput
    drafts?: VideoDraftOrderByRelationAggregateInput
    templates?: VideoTemplateOrderByRelationAggregateInput
    schedules?: ScheduledUploadOrderByRelationAggregateInput
    apiUsage?: ApiUsageOrderByRelationAggregateInput
    settings?: UserSettingsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    channels?: YouTubeChannelListRelationFilter
    videos?: VideoListRelationFilter
    drafts?: VideoDraftListRelationFilter
    templates?: VideoTemplateListRelationFilter
    schedules?: ScheduledUploadListRelationFilter
    apiUsage?: ApiUsageListRelationFilter
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
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
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type YouTubeChannelWhereInput = {
    AND?: YouTubeChannelWhereInput | YouTubeChannelWhereInput[]
    OR?: YouTubeChannelWhereInput[]
    NOT?: YouTubeChannelWhereInput | YouTubeChannelWhereInput[]
    id?: StringFilter<"YouTubeChannel"> | string
    userId?: StringFilter<"YouTubeChannel"> | string
    title?: StringFilter<"YouTubeChannel"> | string
    description?: StringNullableFilter<"YouTubeChannel"> | string | null
    customUrl?: StringNullableFilter<"YouTubeChannel"> | string | null
    thumbnailUrl?: StringNullableFilter<"YouTubeChannel"> | string | null
    bannerUrl?: StringNullableFilter<"YouTubeChannel"> | string | null
    subscriberCount?: BigIntFilter<"YouTubeChannel"> | bigint | number
    videoCount?: IntFilter<"YouTubeChannel"> | number
    viewCount?: BigIntFilter<"YouTubeChannel"> | bigint | number
    accessToken?: StringFilter<"YouTubeChannel"> | string
    refreshToken?: StringNullableFilter<"YouTubeChannel"> | string | null
    tokenExpiresAt?: DateTimeNullableFilter<"YouTubeChannel"> | Date | string | null
    accountEmail?: StringNullableFilter<"YouTubeChannel"> | string | null
    accountName?: StringNullableFilter<"YouTubeChannel"> | string | null
    isBrandAccount?: BoolFilter<"YouTubeChannel"> | boolean
    isActive?: BoolFilter<"YouTubeChannel"> | boolean
    connectedAt?: DateTimeFilter<"YouTubeChannel"> | Date | string
    lastSyncAt?: DateTimeNullableFilter<"YouTubeChannel"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    videos?: VideoListRelationFilter
    schedules?: ScheduledUploadListRelationFilter
    analytics?: ChannelAnalyticsListRelationFilter
  }

  export type YouTubeChannelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    customUrl?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    subscriberCount?: SortOrder
    videoCount?: SortOrder
    viewCount?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiresAt?: SortOrderInput | SortOrder
    accountEmail?: SortOrderInput | SortOrder
    accountName?: SortOrderInput | SortOrder
    isBrandAccount?: SortOrder
    isActive?: SortOrder
    connectedAt?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    videos?: VideoOrderByRelationAggregateInput
    schedules?: ScheduledUploadOrderByRelationAggregateInput
    analytics?: ChannelAnalyticsOrderByRelationAggregateInput
  }

  export type YouTubeChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: YouTubeChannelWhereInput | YouTubeChannelWhereInput[]
    OR?: YouTubeChannelWhereInput[]
    NOT?: YouTubeChannelWhereInput | YouTubeChannelWhereInput[]
    userId?: StringFilter<"YouTubeChannel"> | string
    title?: StringFilter<"YouTubeChannel"> | string
    description?: StringNullableFilter<"YouTubeChannel"> | string | null
    customUrl?: StringNullableFilter<"YouTubeChannel"> | string | null
    thumbnailUrl?: StringNullableFilter<"YouTubeChannel"> | string | null
    bannerUrl?: StringNullableFilter<"YouTubeChannel"> | string | null
    subscriberCount?: BigIntFilter<"YouTubeChannel"> | bigint | number
    videoCount?: IntFilter<"YouTubeChannel"> | number
    viewCount?: BigIntFilter<"YouTubeChannel"> | bigint | number
    accessToken?: StringFilter<"YouTubeChannel"> | string
    refreshToken?: StringNullableFilter<"YouTubeChannel"> | string | null
    tokenExpiresAt?: DateTimeNullableFilter<"YouTubeChannel"> | Date | string | null
    accountEmail?: StringNullableFilter<"YouTubeChannel"> | string | null
    accountName?: StringNullableFilter<"YouTubeChannel"> | string | null
    isBrandAccount?: BoolFilter<"YouTubeChannel"> | boolean
    isActive?: BoolFilter<"YouTubeChannel"> | boolean
    connectedAt?: DateTimeFilter<"YouTubeChannel"> | Date | string
    lastSyncAt?: DateTimeNullableFilter<"YouTubeChannel"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    videos?: VideoListRelationFilter
    schedules?: ScheduledUploadListRelationFilter
    analytics?: ChannelAnalyticsListRelationFilter
  }, "id">

  export type YouTubeChannelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    customUrl?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    subscriberCount?: SortOrder
    videoCount?: SortOrder
    viewCount?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiresAt?: SortOrderInput | SortOrder
    accountEmail?: SortOrderInput | SortOrder
    accountName?: SortOrderInput | SortOrder
    isBrandAccount?: SortOrder
    isActive?: SortOrder
    connectedAt?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    _count?: YouTubeChannelCountOrderByAggregateInput
    _avg?: YouTubeChannelAvgOrderByAggregateInput
    _max?: YouTubeChannelMaxOrderByAggregateInput
    _min?: YouTubeChannelMinOrderByAggregateInput
    _sum?: YouTubeChannelSumOrderByAggregateInput
  }

  export type YouTubeChannelScalarWhereWithAggregatesInput = {
    AND?: YouTubeChannelScalarWhereWithAggregatesInput | YouTubeChannelScalarWhereWithAggregatesInput[]
    OR?: YouTubeChannelScalarWhereWithAggregatesInput[]
    NOT?: YouTubeChannelScalarWhereWithAggregatesInput | YouTubeChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"YouTubeChannel"> | string
    userId?: StringWithAggregatesFilter<"YouTubeChannel"> | string
    title?: StringWithAggregatesFilter<"YouTubeChannel"> | string
    description?: StringNullableWithAggregatesFilter<"YouTubeChannel"> | string | null
    customUrl?: StringNullableWithAggregatesFilter<"YouTubeChannel"> | string | null
    thumbnailUrl?: StringNullableWithAggregatesFilter<"YouTubeChannel"> | string | null
    bannerUrl?: StringNullableWithAggregatesFilter<"YouTubeChannel"> | string | null
    subscriberCount?: BigIntWithAggregatesFilter<"YouTubeChannel"> | bigint | number
    videoCount?: IntWithAggregatesFilter<"YouTubeChannel"> | number
    viewCount?: BigIntWithAggregatesFilter<"YouTubeChannel"> | bigint | number
    accessToken?: StringWithAggregatesFilter<"YouTubeChannel"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"YouTubeChannel"> | string | null
    tokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"YouTubeChannel"> | Date | string | null
    accountEmail?: StringNullableWithAggregatesFilter<"YouTubeChannel"> | string | null
    accountName?: StringNullableWithAggregatesFilter<"YouTubeChannel"> | string | null
    isBrandAccount?: BoolWithAggregatesFilter<"YouTubeChannel"> | boolean
    isActive?: BoolWithAggregatesFilter<"YouTubeChannel"> | boolean
    connectedAt?: DateTimeWithAggregatesFilter<"YouTubeChannel"> | Date | string
    lastSyncAt?: DateTimeNullableWithAggregatesFilter<"YouTubeChannel"> | Date | string | null
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: StringFilter<"Video"> | string
    youtubeId?: StringNullableFilter<"Video"> | string | null
    userId?: StringFilter<"Video"> | string
    channelId?: StringFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    description?: StringFilter<"Video"> | string
    tags?: StringNullableListFilter<"Video">
    hashtags?: StringNullableListFilter<"Video">
    categoryId?: StringFilter<"Video"> | string
    thumbnailUrl?: StringNullableFilter<"Video"> | string | null
    thumbnailGcsUrl?: StringNullableFilter<"Video"> | string | null
    videoGcsUrl?: StringNullableFilter<"Video"> | string | null
    duration?: IntNullableFilter<"Video"> | number | null
    privacyStatus?: EnumPrivacyStatusFilter<"Video"> | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFilter<"Video"> | $Enums.MadeForKids
    ageRestriction?: BoolFilter<"Video"> | boolean
    license?: EnumLicenseFilter<"Video"> | $Enums.License
    language?: StringFilter<"Video"> | string
    allowComments?: BoolFilter<"Video"> | boolean
    allowEmbedding?: BoolFilter<"Video"> | boolean
    publishToFeed?: BoolFilter<"Video"> | boolean
    isPremiere?: BoolFilter<"Video"> | boolean
    status?: EnumVideoStatusFilter<"Video"> | $Enums.VideoStatus
    publishedAt?: DateTimeNullableFilter<"Video"> | Date | string | null
    scheduledFor?: DateTimeNullableFilter<"Video"> | Date | string | null
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<YouTubeChannelScalarRelationFilter, YouTubeChannelWhereInput>
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    youtubeId?: SortOrderInput | SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    hashtags?: SortOrder
    categoryId?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    thumbnailGcsUrl?: SortOrderInput | SortOrder
    videoGcsUrl?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    privacyStatus?: SortOrder
    madeForKids?: SortOrder
    ageRestriction?: SortOrder
    license?: SortOrder
    language?: SortOrder
    allowComments?: SortOrder
    allowEmbedding?: SortOrder
    publishToFeed?: SortOrder
    isPremiere?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    channel?: YouTubeChannelOrderByWithRelationInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    youtubeId?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    userId?: StringFilter<"Video"> | string
    channelId?: StringFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    description?: StringFilter<"Video"> | string
    tags?: StringNullableListFilter<"Video">
    hashtags?: StringNullableListFilter<"Video">
    categoryId?: StringFilter<"Video"> | string
    thumbnailUrl?: StringNullableFilter<"Video"> | string | null
    thumbnailGcsUrl?: StringNullableFilter<"Video"> | string | null
    videoGcsUrl?: StringNullableFilter<"Video"> | string | null
    duration?: IntNullableFilter<"Video"> | number | null
    privacyStatus?: EnumPrivacyStatusFilter<"Video"> | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFilter<"Video"> | $Enums.MadeForKids
    ageRestriction?: BoolFilter<"Video"> | boolean
    license?: EnumLicenseFilter<"Video"> | $Enums.License
    language?: StringFilter<"Video"> | string
    allowComments?: BoolFilter<"Video"> | boolean
    allowEmbedding?: BoolFilter<"Video"> | boolean
    publishToFeed?: BoolFilter<"Video"> | boolean
    isPremiere?: BoolFilter<"Video"> | boolean
    status?: EnumVideoStatusFilter<"Video"> | $Enums.VideoStatus
    publishedAt?: DateTimeNullableFilter<"Video"> | Date | string | null
    scheduledFor?: DateTimeNullableFilter<"Video"> | Date | string | null
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<YouTubeChannelScalarRelationFilter, YouTubeChannelWhereInput>
  }, "id" | "youtubeId">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    youtubeId?: SortOrderInput | SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    hashtags?: SortOrder
    categoryId?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    thumbnailGcsUrl?: SortOrderInput | SortOrder
    videoGcsUrl?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    privacyStatus?: SortOrder
    madeForKids?: SortOrder
    ageRestriction?: SortOrder
    license?: SortOrder
    language?: SortOrder
    allowComments?: SortOrder
    allowEmbedding?: SortOrder
    publishToFeed?: SortOrder
    isPremiere?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Video"> | string
    youtubeId?: StringNullableWithAggregatesFilter<"Video"> | string | null
    userId?: StringWithAggregatesFilter<"Video"> | string
    channelId?: StringWithAggregatesFilter<"Video"> | string
    title?: StringWithAggregatesFilter<"Video"> | string
    description?: StringWithAggregatesFilter<"Video"> | string
    tags?: StringNullableListFilter<"Video">
    hashtags?: StringNullableListFilter<"Video">
    categoryId?: StringWithAggregatesFilter<"Video"> | string
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Video"> | string | null
    thumbnailGcsUrl?: StringNullableWithAggregatesFilter<"Video"> | string | null
    videoGcsUrl?: StringNullableWithAggregatesFilter<"Video"> | string | null
    duration?: IntNullableWithAggregatesFilter<"Video"> | number | null
    privacyStatus?: EnumPrivacyStatusWithAggregatesFilter<"Video"> | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsWithAggregatesFilter<"Video"> | $Enums.MadeForKids
    ageRestriction?: BoolWithAggregatesFilter<"Video"> | boolean
    license?: EnumLicenseWithAggregatesFilter<"Video"> | $Enums.License
    language?: StringWithAggregatesFilter<"Video"> | string
    allowComments?: BoolWithAggregatesFilter<"Video"> | boolean
    allowEmbedding?: BoolWithAggregatesFilter<"Video"> | boolean
    publishToFeed?: BoolWithAggregatesFilter<"Video"> | boolean
    isPremiere?: BoolWithAggregatesFilter<"Video"> | boolean
    status?: EnumVideoStatusWithAggregatesFilter<"Video"> | $Enums.VideoStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Video"> | Date | string | null
    scheduledFor?: DateTimeNullableWithAggregatesFilter<"Video"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
  }

  export type VideoDraftWhereInput = {
    AND?: VideoDraftWhereInput | VideoDraftWhereInput[]
    OR?: VideoDraftWhereInput[]
    NOT?: VideoDraftWhereInput | VideoDraftWhereInput[]
    id?: StringFilter<"VideoDraft"> | string
    userId?: StringFilter<"VideoDraft"> | string
    name?: StringFilter<"VideoDraft"> | string
    title?: StringFilter<"VideoDraft"> | string
    description?: StringFilter<"VideoDraft"> | string
    tags?: StringNullableListFilter<"VideoDraft">
    hashtags?: StringNullableListFilter<"VideoDraft">
    categoryId?: StringFilter<"VideoDraft"> | string
    privacyStatus?: EnumPrivacyStatusFilter<"VideoDraft"> | $Enums.PrivacyStatus
    thumbnailData?: StringNullableFilter<"VideoDraft"> | string | null
    createdAt?: DateTimeFilter<"VideoDraft"> | Date | string
    updatedAt?: DateTimeFilter<"VideoDraft"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VideoDraftOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    hashtags?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    thumbnailData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VideoDraftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoDraftWhereInput | VideoDraftWhereInput[]
    OR?: VideoDraftWhereInput[]
    NOT?: VideoDraftWhereInput | VideoDraftWhereInput[]
    userId?: StringFilter<"VideoDraft"> | string
    name?: StringFilter<"VideoDraft"> | string
    title?: StringFilter<"VideoDraft"> | string
    description?: StringFilter<"VideoDraft"> | string
    tags?: StringNullableListFilter<"VideoDraft">
    hashtags?: StringNullableListFilter<"VideoDraft">
    categoryId?: StringFilter<"VideoDraft"> | string
    privacyStatus?: EnumPrivacyStatusFilter<"VideoDraft"> | $Enums.PrivacyStatus
    thumbnailData?: StringNullableFilter<"VideoDraft"> | string | null
    createdAt?: DateTimeFilter<"VideoDraft"> | Date | string
    updatedAt?: DateTimeFilter<"VideoDraft"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VideoDraftOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    hashtags?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    thumbnailData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoDraftCountOrderByAggregateInput
    _max?: VideoDraftMaxOrderByAggregateInput
    _min?: VideoDraftMinOrderByAggregateInput
  }

  export type VideoDraftScalarWhereWithAggregatesInput = {
    AND?: VideoDraftScalarWhereWithAggregatesInput | VideoDraftScalarWhereWithAggregatesInput[]
    OR?: VideoDraftScalarWhereWithAggregatesInput[]
    NOT?: VideoDraftScalarWhereWithAggregatesInput | VideoDraftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoDraft"> | string
    userId?: StringWithAggregatesFilter<"VideoDraft"> | string
    name?: StringWithAggregatesFilter<"VideoDraft"> | string
    title?: StringWithAggregatesFilter<"VideoDraft"> | string
    description?: StringWithAggregatesFilter<"VideoDraft"> | string
    tags?: StringNullableListFilter<"VideoDraft">
    hashtags?: StringNullableListFilter<"VideoDraft">
    categoryId?: StringWithAggregatesFilter<"VideoDraft"> | string
    privacyStatus?: EnumPrivacyStatusWithAggregatesFilter<"VideoDraft"> | $Enums.PrivacyStatus
    thumbnailData?: StringNullableWithAggregatesFilter<"VideoDraft"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VideoDraft"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VideoDraft"> | Date | string
  }

  export type VideoTemplateWhereInput = {
    AND?: VideoTemplateWhereInput | VideoTemplateWhereInput[]
    OR?: VideoTemplateWhereInput[]
    NOT?: VideoTemplateWhereInput | VideoTemplateWhereInput[]
    id?: StringFilter<"VideoTemplate"> | string
    userId?: StringFilter<"VideoTemplate"> | string
    name?: StringFilter<"VideoTemplate"> | string
    description?: StringNullableFilter<"VideoTemplate"> | string | null
    titleTemplate?: StringFilter<"VideoTemplate"> | string
    descTemplate?: StringFilter<"VideoTemplate"> | string
    tags?: StringNullableListFilter<"VideoTemplate">
    hashtags?: StringNullableListFilter<"VideoTemplate">
    categoryId?: StringFilter<"VideoTemplate"> | string
    privacyStatus?: EnumPrivacyStatusFilter<"VideoTemplate"> | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFilter<"VideoTemplate"> | $Enums.MadeForKids
    license?: EnumLicenseFilter<"VideoTemplate"> | $Enums.License
    language?: StringFilter<"VideoTemplate"> | string
    createdAt?: DateTimeFilter<"VideoTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"VideoTemplate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VideoTemplateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    titleTemplate?: SortOrder
    descTemplate?: SortOrder
    tags?: SortOrder
    hashtags?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    madeForKids?: SortOrder
    license?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VideoTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoTemplateWhereInput | VideoTemplateWhereInput[]
    OR?: VideoTemplateWhereInput[]
    NOT?: VideoTemplateWhereInput | VideoTemplateWhereInput[]
    userId?: StringFilter<"VideoTemplate"> | string
    name?: StringFilter<"VideoTemplate"> | string
    description?: StringNullableFilter<"VideoTemplate"> | string | null
    titleTemplate?: StringFilter<"VideoTemplate"> | string
    descTemplate?: StringFilter<"VideoTemplate"> | string
    tags?: StringNullableListFilter<"VideoTemplate">
    hashtags?: StringNullableListFilter<"VideoTemplate">
    categoryId?: StringFilter<"VideoTemplate"> | string
    privacyStatus?: EnumPrivacyStatusFilter<"VideoTemplate"> | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFilter<"VideoTemplate"> | $Enums.MadeForKids
    license?: EnumLicenseFilter<"VideoTemplate"> | $Enums.License
    language?: StringFilter<"VideoTemplate"> | string
    createdAt?: DateTimeFilter<"VideoTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"VideoTemplate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VideoTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    titleTemplate?: SortOrder
    descTemplate?: SortOrder
    tags?: SortOrder
    hashtags?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    madeForKids?: SortOrder
    license?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoTemplateCountOrderByAggregateInput
    _max?: VideoTemplateMaxOrderByAggregateInput
    _min?: VideoTemplateMinOrderByAggregateInput
  }

  export type VideoTemplateScalarWhereWithAggregatesInput = {
    AND?: VideoTemplateScalarWhereWithAggregatesInput | VideoTemplateScalarWhereWithAggregatesInput[]
    OR?: VideoTemplateScalarWhereWithAggregatesInput[]
    NOT?: VideoTemplateScalarWhereWithAggregatesInput | VideoTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoTemplate"> | string
    userId?: StringWithAggregatesFilter<"VideoTemplate"> | string
    name?: StringWithAggregatesFilter<"VideoTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"VideoTemplate"> | string | null
    titleTemplate?: StringWithAggregatesFilter<"VideoTemplate"> | string
    descTemplate?: StringWithAggregatesFilter<"VideoTemplate"> | string
    tags?: StringNullableListFilter<"VideoTemplate">
    hashtags?: StringNullableListFilter<"VideoTemplate">
    categoryId?: StringWithAggregatesFilter<"VideoTemplate"> | string
    privacyStatus?: EnumPrivacyStatusWithAggregatesFilter<"VideoTemplate"> | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsWithAggregatesFilter<"VideoTemplate"> | $Enums.MadeForKids
    license?: EnumLicenseWithAggregatesFilter<"VideoTemplate"> | $Enums.License
    language?: StringWithAggregatesFilter<"VideoTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VideoTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VideoTemplate"> | Date | string
  }

  export type ScheduledUploadWhereInput = {
    AND?: ScheduledUploadWhereInput | ScheduledUploadWhereInput[]
    OR?: ScheduledUploadWhereInput[]
    NOT?: ScheduledUploadWhereInput | ScheduledUploadWhereInput[]
    id?: StringFilter<"ScheduledUpload"> | string
    userId?: StringFilter<"ScheduledUpload"> | string
    channelId?: StringFilter<"ScheduledUpload"> | string
    title?: StringFilter<"ScheduledUpload"> | string
    description?: StringFilter<"ScheduledUpload"> | string
    tags?: StringNullableListFilter<"ScheduledUpload">
    categoryId?: StringFilter<"ScheduledUpload"> | string
    privacyStatus?: EnumPrivacyStatusFilter<"ScheduledUpload"> | $Enums.PrivacyStatus
    videoFileName?: StringFilter<"ScheduledUpload"> | string
    videoFileSize?: BigIntFilter<"ScheduledUpload"> | bigint | number
    videoGcsUrl?: StringFilter<"ScheduledUpload"> | string
    thumbnailGcsUrl?: StringNullableFilter<"ScheduledUpload"> | string | null
    scheduledFor?: DateTimeFilter<"ScheduledUpload"> | Date | string
    timezone?: StringFilter<"ScheduledUpload"> | string
    status?: EnumScheduleStatusFilter<"ScheduledUpload"> | $Enums.ScheduleStatus
    youtubeId?: StringNullableFilter<"ScheduledUpload"> | string | null
    error?: StringNullableFilter<"ScheduledUpload"> | string | null
    attempts?: IntFilter<"ScheduledUpload"> | number
    lastAttemptAt?: DateTimeNullableFilter<"ScheduledUpload"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ScheduledUpload"> | Date | string | null
    createdAt?: DateTimeFilter<"ScheduledUpload"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduledUpload"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<YouTubeChannelScalarRelationFilter, YouTubeChannelWhereInput>
  }

  export type ScheduledUploadOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    videoFileName?: SortOrder
    videoFileSize?: SortOrder
    videoGcsUrl?: SortOrder
    thumbnailGcsUrl?: SortOrderInput | SortOrder
    scheduledFor?: SortOrder
    timezone?: SortOrder
    status?: SortOrder
    youtubeId?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    attempts?: SortOrder
    lastAttemptAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    channel?: YouTubeChannelOrderByWithRelationInput
  }

  export type ScheduledUploadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduledUploadWhereInput | ScheduledUploadWhereInput[]
    OR?: ScheduledUploadWhereInput[]
    NOT?: ScheduledUploadWhereInput | ScheduledUploadWhereInput[]
    userId?: StringFilter<"ScheduledUpload"> | string
    channelId?: StringFilter<"ScheduledUpload"> | string
    title?: StringFilter<"ScheduledUpload"> | string
    description?: StringFilter<"ScheduledUpload"> | string
    tags?: StringNullableListFilter<"ScheduledUpload">
    categoryId?: StringFilter<"ScheduledUpload"> | string
    privacyStatus?: EnumPrivacyStatusFilter<"ScheduledUpload"> | $Enums.PrivacyStatus
    videoFileName?: StringFilter<"ScheduledUpload"> | string
    videoFileSize?: BigIntFilter<"ScheduledUpload"> | bigint | number
    videoGcsUrl?: StringFilter<"ScheduledUpload"> | string
    thumbnailGcsUrl?: StringNullableFilter<"ScheduledUpload"> | string | null
    scheduledFor?: DateTimeFilter<"ScheduledUpload"> | Date | string
    timezone?: StringFilter<"ScheduledUpload"> | string
    status?: EnumScheduleStatusFilter<"ScheduledUpload"> | $Enums.ScheduleStatus
    youtubeId?: StringNullableFilter<"ScheduledUpload"> | string | null
    error?: StringNullableFilter<"ScheduledUpload"> | string | null
    attempts?: IntFilter<"ScheduledUpload"> | number
    lastAttemptAt?: DateTimeNullableFilter<"ScheduledUpload"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ScheduledUpload"> | Date | string | null
    createdAt?: DateTimeFilter<"ScheduledUpload"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduledUpload"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<YouTubeChannelScalarRelationFilter, YouTubeChannelWhereInput>
  }, "id">

  export type ScheduledUploadOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    videoFileName?: SortOrder
    videoFileSize?: SortOrder
    videoGcsUrl?: SortOrder
    thumbnailGcsUrl?: SortOrderInput | SortOrder
    scheduledFor?: SortOrder
    timezone?: SortOrder
    status?: SortOrder
    youtubeId?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    attempts?: SortOrder
    lastAttemptAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduledUploadCountOrderByAggregateInput
    _avg?: ScheduledUploadAvgOrderByAggregateInput
    _max?: ScheduledUploadMaxOrderByAggregateInput
    _min?: ScheduledUploadMinOrderByAggregateInput
    _sum?: ScheduledUploadSumOrderByAggregateInput
  }

  export type ScheduledUploadScalarWhereWithAggregatesInput = {
    AND?: ScheduledUploadScalarWhereWithAggregatesInput | ScheduledUploadScalarWhereWithAggregatesInput[]
    OR?: ScheduledUploadScalarWhereWithAggregatesInput[]
    NOT?: ScheduledUploadScalarWhereWithAggregatesInput | ScheduledUploadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduledUpload"> | string
    userId?: StringWithAggregatesFilter<"ScheduledUpload"> | string
    channelId?: StringWithAggregatesFilter<"ScheduledUpload"> | string
    title?: StringWithAggregatesFilter<"ScheduledUpload"> | string
    description?: StringWithAggregatesFilter<"ScheduledUpload"> | string
    tags?: StringNullableListFilter<"ScheduledUpload">
    categoryId?: StringWithAggregatesFilter<"ScheduledUpload"> | string
    privacyStatus?: EnumPrivacyStatusWithAggregatesFilter<"ScheduledUpload"> | $Enums.PrivacyStatus
    videoFileName?: StringWithAggregatesFilter<"ScheduledUpload"> | string
    videoFileSize?: BigIntWithAggregatesFilter<"ScheduledUpload"> | bigint | number
    videoGcsUrl?: StringWithAggregatesFilter<"ScheduledUpload"> | string
    thumbnailGcsUrl?: StringNullableWithAggregatesFilter<"ScheduledUpload"> | string | null
    scheduledFor?: DateTimeWithAggregatesFilter<"ScheduledUpload"> | Date | string
    timezone?: StringWithAggregatesFilter<"ScheduledUpload"> | string
    status?: EnumScheduleStatusWithAggregatesFilter<"ScheduledUpload"> | $Enums.ScheduleStatus
    youtubeId?: StringNullableWithAggregatesFilter<"ScheduledUpload"> | string | null
    error?: StringNullableWithAggregatesFilter<"ScheduledUpload"> | string | null
    attempts?: IntWithAggregatesFilter<"ScheduledUpload"> | number
    lastAttemptAt?: DateTimeNullableWithAggregatesFilter<"ScheduledUpload"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ScheduledUpload"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ScheduledUpload"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScheduledUpload"> | Date | string
  }

  export type ChannelAnalyticsWhereInput = {
    AND?: ChannelAnalyticsWhereInput | ChannelAnalyticsWhereInput[]
    OR?: ChannelAnalyticsWhereInput[]
    NOT?: ChannelAnalyticsWhereInput | ChannelAnalyticsWhereInput[]
    id?: StringFilter<"ChannelAnalytics"> | string
    channelId?: StringFilter<"ChannelAnalytics"> | string
    date?: DateTimeFilter<"ChannelAnalytics"> | Date | string
    views?: BigIntFilter<"ChannelAnalytics"> | bigint | number
    subscribers?: IntFilter<"ChannelAnalytics"> | number
    subscribersGained?: IntFilter<"ChannelAnalytics"> | number
    subscribersLost?: IntFilter<"ChannelAnalytics"> | number
    watchTimeMinutes?: BigIntFilter<"ChannelAnalytics"> | bigint | number
    likes?: IntFilter<"ChannelAnalytics"> | number
    comments?: IntFilter<"ChannelAnalytics"> | number
    shares?: IntFilter<"ChannelAnalytics"> | number
    estimatedRevenue?: DecimalNullableFilter<"ChannelAnalytics"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"ChannelAnalytics"> | Date | string
    channel?: XOR<YouTubeChannelScalarRelationFilter, YouTubeChannelWhereInput>
  }

  export type ChannelAnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    channelId?: SortOrder
    date?: SortOrder
    views?: SortOrder
    subscribers?: SortOrder
    subscribersGained?: SortOrder
    subscribersLost?: SortOrder
    watchTimeMinutes?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    estimatedRevenue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    channel?: YouTubeChannelOrderByWithRelationInput
  }

  export type ChannelAnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    channelId_date?: ChannelAnalyticsChannelIdDateCompoundUniqueInput
    AND?: ChannelAnalyticsWhereInput | ChannelAnalyticsWhereInput[]
    OR?: ChannelAnalyticsWhereInput[]
    NOT?: ChannelAnalyticsWhereInput | ChannelAnalyticsWhereInput[]
    channelId?: StringFilter<"ChannelAnalytics"> | string
    date?: DateTimeFilter<"ChannelAnalytics"> | Date | string
    views?: BigIntFilter<"ChannelAnalytics"> | bigint | number
    subscribers?: IntFilter<"ChannelAnalytics"> | number
    subscribersGained?: IntFilter<"ChannelAnalytics"> | number
    subscribersLost?: IntFilter<"ChannelAnalytics"> | number
    watchTimeMinutes?: BigIntFilter<"ChannelAnalytics"> | bigint | number
    likes?: IntFilter<"ChannelAnalytics"> | number
    comments?: IntFilter<"ChannelAnalytics"> | number
    shares?: IntFilter<"ChannelAnalytics"> | number
    estimatedRevenue?: DecimalNullableFilter<"ChannelAnalytics"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"ChannelAnalytics"> | Date | string
    channel?: XOR<YouTubeChannelScalarRelationFilter, YouTubeChannelWhereInput>
  }, "id" | "channelId_date">

  export type ChannelAnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    channelId?: SortOrder
    date?: SortOrder
    views?: SortOrder
    subscribers?: SortOrder
    subscribersGained?: SortOrder
    subscribersLost?: SortOrder
    watchTimeMinutes?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    estimatedRevenue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ChannelAnalyticsCountOrderByAggregateInput
    _avg?: ChannelAnalyticsAvgOrderByAggregateInput
    _max?: ChannelAnalyticsMaxOrderByAggregateInput
    _min?: ChannelAnalyticsMinOrderByAggregateInput
    _sum?: ChannelAnalyticsSumOrderByAggregateInput
  }

  export type ChannelAnalyticsScalarWhereWithAggregatesInput = {
    AND?: ChannelAnalyticsScalarWhereWithAggregatesInput | ChannelAnalyticsScalarWhereWithAggregatesInput[]
    OR?: ChannelAnalyticsScalarWhereWithAggregatesInput[]
    NOT?: ChannelAnalyticsScalarWhereWithAggregatesInput | ChannelAnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChannelAnalytics"> | string
    channelId?: StringWithAggregatesFilter<"ChannelAnalytics"> | string
    date?: DateTimeWithAggregatesFilter<"ChannelAnalytics"> | Date | string
    views?: BigIntWithAggregatesFilter<"ChannelAnalytics"> | bigint | number
    subscribers?: IntWithAggregatesFilter<"ChannelAnalytics"> | number
    subscribersGained?: IntWithAggregatesFilter<"ChannelAnalytics"> | number
    subscribersLost?: IntWithAggregatesFilter<"ChannelAnalytics"> | number
    watchTimeMinutes?: BigIntWithAggregatesFilter<"ChannelAnalytics"> | bigint | number
    likes?: IntWithAggregatesFilter<"ChannelAnalytics"> | number
    comments?: IntWithAggregatesFilter<"ChannelAnalytics"> | number
    shares?: IntWithAggregatesFilter<"ChannelAnalytics"> | number
    estimatedRevenue?: DecimalNullableWithAggregatesFilter<"ChannelAnalytics"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChannelAnalytics"> | Date | string
  }

  export type UserSettingsWhereInput = {
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    id?: StringFilter<"UserSettings"> | string
    userId?: StringFilter<"UserSettings"> | string
    defaultPrivacy?: EnumPrivacyStatusFilter<"UserSettings"> | $Enums.PrivacyStatus
    defaultCategory?: StringFilter<"UserSettings"> | string
    defaultLanguage?: StringFilter<"UserSettings"> | string
    autoSaveDrafts?: BoolFilter<"UserSettings"> | boolean
    rememberLastChannel?: BoolFilter<"UserSettings"> | boolean
    emailNotifications?: BoolFilter<"UserSettings"> | boolean
    theme?: EnumThemeFilter<"UserSettings"> | $Enums.Theme
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    defaultPrivacy?: SortOrder
    defaultCategory?: SortOrder
    defaultLanguage?: SortOrder
    autoSaveDrafts?: SortOrder
    rememberLastChannel?: SortOrder
    emailNotifications?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    defaultPrivacy?: EnumPrivacyStatusFilter<"UserSettings"> | $Enums.PrivacyStatus
    defaultCategory?: StringFilter<"UserSettings"> | string
    defaultLanguage?: StringFilter<"UserSettings"> | string
    autoSaveDrafts?: BoolFilter<"UserSettings"> | boolean
    rememberLastChannel?: BoolFilter<"UserSettings"> | boolean
    emailNotifications?: BoolFilter<"UserSettings"> | boolean
    theme?: EnumThemeFilter<"UserSettings"> | $Enums.Theme
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    defaultPrivacy?: SortOrder
    defaultCategory?: SortOrder
    defaultLanguage?: SortOrder
    autoSaveDrafts?: SortOrder
    rememberLastChannel?: SortOrder
    emailNotifications?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSettingsCountOrderByAggregateInput
    _max?: UserSettingsMaxOrderByAggregateInput
    _min?: UserSettingsMinOrderByAggregateInput
  }

  export type UserSettingsScalarWhereWithAggregatesInput = {
    AND?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    OR?: UserSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSettings"> | string
    userId?: StringWithAggregatesFilter<"UserSettings"> | string
    defaultPrivacy?: EnumPrivacyStatusWithAggregatesFilter<"UserSettings"> | $Enums.PrivacyStatus
    defaultCategory?: StringWithAggregatesFilter<"UserSettings"> | string
    defaultLanguage?: StringWithAggregatesFilter<"UserSettings"> | string
    autoSaveDrafts?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    rememberLastChannel?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    emailNotifications?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    theme?: EnumThemeWithAggregatesFilter<"UserSettings"> | $Enums.Theme
    createdAt?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
  }

  export type ApiUsageWhereInput = {
    AND?: ApiUsageWhereInput | ApiUsageWhereInput[]
    OR?: ApiUsageWhereInput[]
    NOT?: ApiUsageWhereInput | ApiUsageWhereInput[]
    id?: StringFilter<"ApiUsage"> | string
    userId?: StringFilter<"ApiUsage"> | string
    endpoint?: StringFilter<"ApiUsage"> | string
    method?: StringFilter<"ApiUsage"> | string
    quotaUsed?: IntFilter<"ApiUsage"> | number
    ipHash?: StringNullableFilter<"ApiUsage"> | string | null
    timestamp?: DateTimeFilter<"ApiUsage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApiUsageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    quotaUsed?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ApiUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiUsageWhereInput | ApiUsageWhereInput[]
    OR?: ApiUsageWhereInput[]
    NOT?: ApiUsageWhereInput | ApiUsageWhereInput[]
    userId?: StringFilter<"ApiUsage"> | string
    endpoint?: StringFilter<"ApiUsage"> | string
    method?: StringFilter<"ApiUsage"> | string
    quotaUsed?: IntFilter<"ApiUsage"> | number
    ipHash?: StringNullableFilter<"ApiUsage"> | string | null
    timestamp?: DateTimeFilter<"ApiUsage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ApiUsageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    quotaUsed?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: ApiUsageCountOrderByAggregateInput
    _avg?: ApiUsageAvgOrderByAggregateInput
    _max?: ApiUsageMaxOrderByAggregateInput
    _min?: ApiUsageMinOrderByAggregateInput
    _sum?: ApiUsageSumOrderByAggregateInput
  }

  export type ApiUsageScalarWhereWithAggregatesInput = {
    AND?: ApiUsageScalarWhereWithAggregatesInput | ApiUsageScalarWhereWithAggregatesInput[]
    OR?: ApiUsageScalarWhereWithAggregatesInput[]
    NOT?: ApiUsageScalarWhereWithAggregatesInput | ApiUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiUsage"> | string
    userId?: StringWithAggregatesFilter<"ApiUsage"> | string
    endpoint?: StringWithAggregatesFilter<"ApiUsage"> | string
    method?: StringWithAggregatesFilter<"ApiUsage"> | string
    quotaUsed?: IntWithAggregatesFilter<"ApiUsage"> | number
    ipHash?: StringNullableWithAggregatesFilter<"ApiUsage"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"ApiUsage"> | Date | string
  }

  export type RateLimitWhereInput = {
    AND?: RateLimitWhereInput | RateLimitWhereInput[]
    OR?: RateLimitWhereInput[]
    NOT?: RateLimitWhereInput | RateLimitWhereInput[]
    id?: StringFilter<"RateLimit"> | string
    requests?: IntFilter<"RateLimit"> | number
    windowStart?: DateTimeFilter<"RateLimit"> | Date | string
  }

  export type RateLimitOrderByWithRelationInput = {
    id?: SortOrder
    requests?: SortOrder
    windowStart?: SortOrder
  }

  export type RateLimitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RateLimitWhereInput | RateLimitWhereInput[]
    OR?: RateLimitWhereInput[]
    NOT?: RateLimitWhereInput | RateLimitWhereInput[]
    requests?: IntFilter<"RateLimit"> | number
    windowStart?: DateTimeFilter<"RateLimit"> | Date | string
  }, "id">

  export type RateLimitOrderByWithAggregationInput = {
    id?: SortOrder
    requests?: SortOrder
    windowStart?: SortOrder
    _count?: RateLimitCountOrderByAggregateInput
    _avg?: RateLimitAvgOrderByAggregateInput
    _max?: RateLimitMaxOrderByAggregateInput
    _min?: RateLimitMinOrderByAggregateInput
    _sum?: RateLimitSumOrderByAggregateInput
  }

  export type RateLimitScalarWhereWithAggregatesInput = {
    AND?: RateLimitScalarWhereWithAggregatesInput | RateLimitScalarWhereWithAggregatesInput[]
    OR?: RateLimitScalarWhereWithAggregatesInput[]
    NOT?: RateLimitScalarWhereWithAggregatesInput | RateLimitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RateLimit"> | string
    requests?: IntWithAggregatesFilter<"RateLimit"> | number
    windowStart?: DateTimeWithAggregatesFilter<"RateLimit"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelCreateNestedManyWithoutUserInput
    videos?: VideoCreateNestedManyWithoutUserInput
    drafts?: VideoDraftCreateNestedManyWithoutUserInput
    templates?: VideoTemplateCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelUncheckedCreateNestedManyWithoutUserInput
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    drafts?: VideoDraftUncheckedCreateNestedManyWithoutUserInput
    templates?: VideoTemplateUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadUncheckedCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUpdateManyWithoutUserNestedInput
    videos?: VideoUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUncheckedUpdateManyWithoutUserNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUncheckedUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUncheckedUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YouTubeChannelCreateInput = {
    id: string
    title: string
    description?: string | null
    customUrl?: string | null
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    subscriberCount?: bigint | number
    videoCount?: number
    viewCount?: bigint | number
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    accountEmail?: string | null
    accountName?: string | null
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: Date | string
    lastSyncAt?: Date | string | null
    user: UserCreateNestedOneWithoutChannelsInput
    videos?: VideoCreateNestedManyWithoutChannelInput
    schedules?: ScheduledUploadCreateNestedManyWithoutChannelInput
    analytics?: ChannelAnalyticsCreateNestedManyWithoutChannelInput
  }

  export type YouTubeChannelUncheckedCreateInput = {
    id: string
    userId: string
    title: string
    description?: string | null
    customUrl?: string | null
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    subscriberCount?: bigint | number
    videoCount?: number
    viewCount?: bigint | number
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    accountEmail?: string | null
    accountName?: string | null
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: Date | string
    lastSyncAt?: Date | string | null
    videos?: VideoUncheckedCreateNestedManyWithoutChannelInput
    schedules?: ScheduledUploadUncheckedCreateNestedManyWithoutChannelInput
    analytics?: ChannelAnalyticsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type YouTubeChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: BigIntFieldUpdateOperationsInput | bigint | number
    videoCount?: IntFieldUpdateOperationsInput | number
    viewCount?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountEmail?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isBrandAccount?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutChannelsNestedInput
    videos?: VideoUpdateManyWithoutChannelNestedInput
    schedules?: ScheduledUploadUpdateManyWithoutChannelNestedInput
    analytics?: ChannelAnalyticsUpdateManyWithoutChannelNestedInput
  }

  export type YouTubeChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: BigIntFieldUpdateOperationsInput | bigint | number
    videoCount?: IntFieldUpdateOperationsInput | number
    viewCount?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountEmail?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isBrandAccount?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    videos?: VideoUncheckedUpdateManyWithoutChannelNestedInput
    schedules?: ScheduledUploadUncheckedUpdateManyWithoutChannelNestedInput
    analytics?: ChannelAnalyticsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type YouTubeChannelCreateManyInput = {
    id: string
    userId: string
    title: string
    description?: string | null
    customUrl?: string | null
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    subscriberCount?: bigint | number
    videoCount?: number
    viewCount?: bigint | number
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    accountEmail?: string | null
    accountName?: string | null
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: Date | string
    lastSyncAt?: Date | string | null
  }

  export type YouTubeChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: BigIntFieldUpdateOperationsInput | bigint | number
    videoCount?: IntFieldUpdateOperationsInput | number
    viewCount?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountEmail?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isBrandAccount?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type YouTubeChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: BigIntFieldUpdateOperationsInput | bigint | number
    videoCount?: IntFieldUpdateOperationsInput | number
    viewCount?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountEmail?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isBrandAccount?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VideoCreateInput = {
    id?: string
    youtubeId?: string | null
    title: string
    description: string
    tags?: VideoCreatetagsInput | string[]
    hashtags?: VideoCreatehashtagsInput | string[]
    categoryId?: string
    thumbnailUrl?: string | null
    thumbnailGcsUrl?: string | null
    videoGcsUrl?: string | null
    duration?: number | null
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    ageRestriction?: boolean
    license?: $Enums.License
    language?: string
    allowComments?: boolean
    allowEmbedding?: boolean
    publishToFeed?: boolean
    isPremiere?: boolean
    status?: $Enums.VideoStatus
    publishedAt?: Date | string | null
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVideosInput
    channel: YouTubeChannelCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateInput = {
    id?: string
    youtubeId?: string | null
    userId: string
    channelId: string
    title: string
    description: string
    tags?: VideoCreatetagsInput | string[]
    hashtags?: VideoCreatehashtagsInput | string[]
    categoryId?: string
    thumbnailUrl?: string | null
    thumbnailGcsUrl?: string | null
    videoGcsUrl?: string | null
    duration?: number | null
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    ageRestriction?: boolean
    license?: $Enums.License
    language?: string
    allowComments?: boolean
    allowEmbedding?: boolean
    publishToFeed?: boolean
    isPremiere?: boolean
    status?: $Enums.VideoStatus
    publishedAt?: Date | string | null
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoUpdatetagsInput | string[]
    hashtags?: VideoUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    ageRestriction?: BoolFieldUpdateOperationsInput | boolean
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowEmbedding?: BoolFieldUpdateOperationsInput | boolean
    publishToFeed?: BoolFieldUpdateOperationsInput | boolean
    isPremiere?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    channel?: YouTubeChannelUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoUpdatetagsInput | string[]
    hashtags?: VideoUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    ageRestriction?: BoolFieldUpdateOperationsInput | boolean
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowEmbedding?: BoolFieldUpdateOperationsInput | boolean
    publishToFeed?: BoolFieldUpdateOperationsInput | boolean
    isPremiere?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateManyInput = {
    id?: string
    youtubeId?: string | null
    userId: string
    channelId: string
    title: string
    description: string
    tags?: VideoCreatetagsInput | string[]
    hashtags?: VideoCreatehashtagsInput | string[]
    categoryId?: string
    thumbnailUrl?: string | null
    thumbnailGcsUrl?: string | null
    videoGcsUrl?: string | null
    duration?: number | null
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    ageRestriction?: boolean
    license?: $Enums.License
    language?: string
    allowComments?: boolean
    allowEmbedding?: boolean
    publishToFeed?: boolean
    isPremiere?: boolean
    status?: $Enums.VideoStatus
    publishedAt?: Date | string | null
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoUpdatetagsInput | string[]
    hashtags?: VideoUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    ageRestriction?: BoolFieldUpdateOperationsInput | boolean
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowEmbedding?: BoolFieldUpdateOperationsInput | boolean
    publishToFeed?: BoolFieldUpdateOperationsInput | boolean
    isPremiere?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoUpdatetagsInput | string[]
    hashtags?: VideoUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    ageRestriction?: BoolFieldUpdateOperationsInput | boolean
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowEmbedding?: BoolFieldUpdateOperationsInput | boolean
    publishToFeed?: BoolFieldUpdateOperationsInput | boolean
    isPremiere?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoDraftCreateInput = {
    id?: string
    name: string
    title: string
    description: string
    tags?: VideoDraftCreatetagsInput | string[]
    hashtags?: VideoDraftCreatehashtagsInput | string[]
    categoryId?: string
    privacyStatus?: $Enums.PrivacyStatus
    thumbnailData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDraftsInput
  }

  export type VideoDraftUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    title: string
    description: string
    tags?: VideoDraftCreatetagsInput | string[]
    hashtags?: VideoDraftCreatehashtagsInput | string[]
    categoryId?: string
    privacyStatus?: $Enums.PrivacyStatus
    thumbnailData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoDraftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoDraftUpdatetagsInput | string[]
    hashtags?: VideoDraftUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    thumbnailData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDraftsNestedInput
  }

  export type VideoDraftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoDraftUpdatetagsInput | string[]
    hashtags?: VideoDraftUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    thumbnailData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoDraftCreateManyInput = {
    id?: string
    userId: string
    name: string
    title: string
    description: string
    tags?: VideoDraftCreatetagsInput | string[]
    hashtags?: VideoDraftCreatehashtagsInput | string[]
    categoryId?: string
    privacyStatus?: $Enums.PrivacyStatus
    thumbnailData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoDraftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoDraftUpdatetagsInput | string[]
    hashtags?: VideoDraftUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    thumbnailData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoDraftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoDraftUpdatetagsInput | string[]
    hashtags?: VideoDraftUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    thumbnailData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoTemplateCreateInput = {
    id?: string
    name: string
    description?: string | null
    titleTemplate: string
    descTemplate: string
    tags?: VideoTemplateCreatetagsInput | string[]
    hashtags?: VideoTemplateCreatehashtagsInput | string[]
    categoryId?: string
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    license?: $Enums.License
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTemplatesInput
  }

  export type VideoTemplateUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    titleTemplate: string
    descTemplate: string
    tags?: VideoTemplateCreatetagsInput | string[]
    hashtags?: VideoTemplateCreatehashtagsInput | string[]
    categoryId?: string
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    license?: $Enums.License
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    titleTemplate?: StringFieldUpdateOperationsInput | string
    descTemplate?: StringFieldUpdateOperationsInput | string
    tags?: VideoTemplateUpdatetagsInput | string[]
    hashtags?: VideoTemplateUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type VideoTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    titleTemplate?: StringFieldUpdateOperationsInput | string
    descTemplate?: StringFieldUpdateOperationsInput | string
    tags?: VideoTemplateUpdatetagsInput | string[]
    hashtags?: VideoTemplateUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoTemplateCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    titleTemplate: string
    descTemplate: string
    tags?: VideoTemplateCreatetagsInput | string[]
    hashtags?: VideoTemplateCreatehashtagsInput | string[]
    categoryId?: string
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    license?: $Enums.License
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    titleTemplate?: StringFieldUpdateOperationsInput | string
    descTemplate?: StringFieldUpdateOperationsInput | string
    tags?: VideoTemplateUpdatetagsInput | string[]
    hashtags?: VideoTemplateUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    titleTemplate?: StringFieldUpdateOperationsInput | string
    descTemplate?: StringFieldUpdateOperationsInput | string
    tags?: VideoTemplateUpdatetagsInput | string[]
    hashtags?: VideoTemplateUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledUploadCreateInput = {
    id?: string
    title: string
    description: string
    tags?: ScheduledUploadCreatetagsInput | string[]
    categoryId?: string
    privacyStatus: $Enums.PrivacyStatus
    videoFileName: string
    videoFileSize: bigint | number
    videoGcsUrl: string
    thumbnailGcsUrl?: string | null
    scheduledFor: Date | string
    timezone?: string
    status?: $Enums.ScheduleStatus
    youtubeId?: string | null
    error?: string | null
    attempts?: number
    lastAttemptAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSchedulesInput
    channel: YouTubeChannelCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduledUploadUncheckedCreateInput = {
    id?: string
    userId: string
    channelId: string
    title: string
    description: string
    tags?: ScheduledUploadCreatetagsInput | string[]
    categoryId?: string
    privacyStatus: $Enums.PrivacyStatus
    videoFileName: string
    videoFileSize: bigint | number
    videoGcsUrl: string
    thumbnailGcsUrl?: string | null
    scheduledFor: Date | string
    timezone?: string
    status?: $Enums.ScheduleStatus
    youtubeId?: string | null
    error?: string | null
    attempts?: number
    lastAttemptAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledUploadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: ScheduledUploadUpdatetagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    videoFileName?: StringFieldUpdateOperationsInput | string
    videoFileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    videoGcsUrl?: StringFieldUpdateOperationsInput | string
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSchedulesNestedInput
    channel?: YouTubeChannelUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduledUploadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: ScheduledUploadUpdatetagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    videoFileName?: StringFieldUpdateOperationsInput | string
    videoFileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    videoGcsUrl?: StringFieldUpdateOperationsInput | string
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledUploadCreateManyInput = {
    id?: string
    userId: string
    channelId: string
    title: string
    description: string
    tags?: ScheduledUploadCreatetagsInput | string[]
    categoryId?: string
    privacyStatus: $Enums.PrivacyStatus
    videoFileName: string
    videoFileSize: bigint | number
    videoGcsUrl: string
    thumbnailGcsUrl?: string | null
    scheduledFor: Date | string
    timezone?: string
    status?: $Enums.ScheduleStatus
    youtubeId?: string | null
    error?: string | null
    attempts?: number
    lastAttemptAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledUploadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: ScheduledUploadUpdatetagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    videoFileName?: StringFieldUpdateOperationsInput | string
    videoFileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    videoGcsUrl?: StringFieldUpdateOperationsInput | string
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledUploadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: ScheduledUploadUpdatetagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    videoFileName?: StringFieldUpdateOperationsInput | string
    videoFileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    videoGcsUrl?: StringFieldUpdateOperationsInput | string
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelAnalyticsCreateInput = {
    id?: string
    date: Date | string
    views?: bigint | number
    subscribers?: number
    subscribersGained?: number
    subscribersLost?: number
    watchTimeMinutes?: bigint | number
    likes?: number
    comments?: number
    shares?: number
    estimatedRevenue?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    channel: YouTubeChannelCreateNestedOneWithoutAnalyticsInput
  }

  export type ChannelAnalyticsUncheckedCreateInput = {
    id?: string
    channelId: string
    date: Date | string
    views?: bigint | number
    subscribers?: number
    subscribersGained?: number
    subscribersLost?: number
    watchTimeMinutes?: bigint | number
    likes?: number
    comments?: number
    shares?: number
    estimatedRevenue?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type ChannelAnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: BigIntFieldUpdateOperationsInput | bigint | number
    subscribers?: IntFieldUpdateOperationsInput | number
    subscribersGained?: IntFieldUpdateOperationsInput | number
    subscribersLost?: IntFieldUpdateOperationsInput | number
    watchTimeMinutes?: BigIntFieldUpdateOperationsInput | bigint | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    estimatedRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: YouTubeChannelUpdateOneRequiredWithoutAnalyticsNestedInput
  }

  export type ChannelAnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: BigIntFieldUpdateOperationsInput | bigint | number
    subscribers?: IntFieldUpdateOperationsInput | number
    subscribersGained?: IntFieldUpdateOperationsInput | number
    subscribersLost?: IntFieldUpdateOperationsInput | number
    watchTimeMinutes?: BigIntFieldUpdateOperationsInput | bigint | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    estimatedRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelAnalyticsCreateManyInput = {
    id?: string
    channelId: string
    date: Date | string
    views?: bigint | number
    subscribers?: number
    subscribersGained?: number
    subscribersLost?: number
    watchTimeMinutes?: bigint | number
    likes?: number
    comments?: number
    shares?: number
    estimatedRevenue?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type ChannelAnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: BigIntFieldUpdateOperationsInput | bigint | number
    subscribers?: IntFieldUpdateOperationsInput | number
    subscribersGained?: IntFieldUpdateOperationsInput | number
    subscribersLost?: IntFieldUpdateOperationsInput | number
    watchTimeMinutes?: BigIntFieldUpdateOperationsInput | bigint | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    estimatedRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelAnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: BigIntFieldUpdateOperationsInput | bigint | number
    subscribers?: IntFieldUpdateOperationsInput | number
    subscribersGained?: IntFieldUpdateOperationsInput | number
    subscribersLost?: IntFieldUpdateOperationsInput | number
    watchTimeMinutes?: BigIntFieldUpdateOperationsInput | bigint | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    estimatedRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateInput = {
    id?: string
    defaultPrivacy?: $Enums.PrivacyStatus
    defaultCategory?: string
    defaultLanguage?: string
    autoSaveDrafts?: boolean
    rememberLastChannel?: boolean
    emailNotifications?: boolean
    theme?: $Enums.Theme
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type UserSettingsUncheckedCreateInput = {
    id?: string
    userId: string
    defaultPrivacy?: $Enums.PrivacyStatus
    defaultCategory?: string
    defaultLanguage?: string
    autoSaveDrafts?: boolean
    rememberLastChannel?: boolean
    emailNotifications?: boolean
    theme?: $Enums.Theme
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultPrivacy?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    defaultCategory?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    autoSaveDrafts?: BoolFieldUpdateOperationsInput | boolean
    rememberLastChannel?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type UserSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    defaultPrivacy?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    defaultCategory?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    autoSaveDrafts?: BoolFieldUpdateOperationsInput | boolean
    rememberLastChannel?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateManyInput = {
    id?: string
    userId: string
    defaultPrivacy?: $Enums.PrivacyStatus
    defaultCategory?: string
    defaultLanguage?: string
    autoSaveDrafts?: boolean
    rememberLastChannel?: boolean
    emailNotifications?: boolean
    theme?: $Enums.Theme
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultPrivacy?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    defaultCategory?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    autoSaveDrafts?: BoolFieldUpdateOperationsInput | boolean
    rememberLastChannel?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    defaultPrivacy?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    defaultCategory?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    autoSaveDrafts?: BoolFieldUpdateOperationsInput | boolean
    rememberLastChannel?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageCreateInput = {
    id?: string
    endpoint: string
    method: string
    quotaUsed?: number
    ipHash?: string | null
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutApiUsageInput
  }

  export type ApiUsageUncheckedCreateInput = {
    id?: string
    userId: string
    endpoint: string
    method: string
    quotaUsed?: number
    ipHash?: string | null
    timestamp?: Date | string
  }

  export type ApiUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    quotaUsed?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiUsageNestedInput
  }

  export type ApiUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    quotaUsed?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageCreateManyInput = {
    id?: string
    userId: string
    endpoint: string
    method: string
    quotaUsed?: number
    ipHash?: string | null
    timestamp?: Date | string
  }

  export type ApiUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    quotaUsed?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    quotaUsed?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitCreateInput = {
    id: string
    requests?: number
    windowStart: Date | string
  }

  export type RateLimitUncheckedCreateInput = {
    id: string
    requests?: number
    windowStart: Date | string
  }

  export type RateLimitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requests?: IntFieldUpdateOperationsInput | number
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requests?: IntFieldUpdateOperationsInput | number
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitCreateManyInput = {
    id: string
    requests?: number
    windowStart: Date | string
  }

  export type RateLimitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requests?: IntFieldUpdateOperationsInput | number
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requests?: IntFieldUpdateOperationsInput | number
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type YouTubeChannelListRelationFilter = {
    every?: YouTubeChannelWhereInput
    some?: YouTubeChannelWhereInput
    none?: YouTubeChannelWhereInput
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type VideoDraftListRelationFilter = {
    every?: VideoDraftWhereInput
    some?: VideoDraftWhereInput
    none?: VideoDraftWhereInput
  }

  export type VideoTemplateListRelationFilter = {
    every?: VideoTemplateWhereInput
    some?: VideoTemplateWhereInput
    none?: VideoTemplateWhereInput
  }

  export type ScheduledUploadListRelationFilter = {
    every?: ScheduledUploadWhereInput
    some?: ScheduledUploadWhereInput
    none?: ScheduledUploadWhereInput
  }

  export type ApiUsageListRelationFilter = {
    every?: ApiUsageWhereInput
    some?: ApiUsageWhereInput
    none?: ApiUsageWhereInput
  }

  export type UserSettingsNullableScalarRelationFilter = {
    is?: UserSettingsWhereInput | null
    isNot?: UserSettingsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type YouTubeChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoDraftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduledUploadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChannelAnalyticsListRelationFilter = {
    every?: ChannelAnalyticsWhereInput
    some?: ChannelAnalyticsWhereInput
    none?: ChannelAnalyticsWhereInput
  }

  export type ChannelAnalyticsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type YouTubeChannelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    customUrl?: SortOrder
    thumbnailUrl?: SortOrder
    bannerUrl?: SortOrder
    subscriberCount?: SortOrder
    videoCount?: SortOrder
    viewCount?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    accountEmail?: SortOrder
    accountName?: SortOrder
    isBrandAccount?: SortOrder
    isActive?: SortOrder
    connectedAt?: SortOrder
    lastSyncAt?: SortOrder
  }

  export type YouTubeChannelAvgOrderByAggregateInput = {
    subscriberCount?: SortOrder
    videoCount?: SortOrder
    viewCount?: SortOrder
  }

  export type YouTubeChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    customUrl?: SortOrder
    thumbnailUrl?: SortOrder
    bannerUrl?: SortOrder
    subscriberCount?: SortOrder
    videoCount?: SortOrder
    viewCount?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    accountEmail?: SortOrder
    accountName?: SortOrder
    isBrandAccount?: SortOrder
    isActive?: SortOrder
    connectedAt?: SortOrder
    lastSyncAt?: SortOrder
  }

  export type YouTubeChannelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    customUrl?: SortOrder
    thumbnailUrl?: SortOrder
    bannerUrl?: SortOrder
    subscriberCount?: SortOrder
    videoCount?: SortOrder
    viewCount?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    accountEmail?: SortOrder
    accountName?: SortOrder
    isBrandAccount?: SortOrder
    isActive?: SortOrder
    connectedAt?: SortOrder
    lastSyncAt?: SortOrder
  }

  export type YouTubeChannelSumOrderByAggregateInput = {
    subscriberCount?: SortOrder
    videoCount?: SortOrder
    viewCount?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPrivacyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyStatus | EnumPrivacyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrivacyStatus[] | ListEnumPrivacyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivacyStatus[] | ListEnumPrivacyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivacyStatusFilter<$PrismaModel> | $Enums.PrivacyStatus
  }

  export type EnumMadeForKidsFilter<$PrismaModel = never> = {
    equals?: $Enums.MadeForKids | EnumMadeForKidsFieldRefInput<$PrismaModel>
    in?: $Enums.MadeForKids[] | ListEnumMadeForKidsFieldRefInput<$PrismaModel>
    notIn?: $Enums.MadeForKids[] | ListEnumMadeForKidsFieldRefInput<$PrismaModel>
    not?: NestedEnumMadeForKidsFilter<$PrismaModel> | $Enums.MadeForKids
  }

  export type EnumLicenseFilter<$PrismaModel = never> = {
    equals?: $Enums.License | EnumLicenseFieldRefInput<$PrismaModel>
    in?: $Enums.License[] | ListEnumLicenseFieldRefInput<$PrismaModel>
    notIn?: $Enums.License[] | ListEnumLicenseFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseFilter<$PrismaModel> | $Enums.License
  }

  export type EnumVideoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusFilter<$PrismaModel> | $Enums.VideoStatus
  }

  export type YouTubeChannelScalarRelationFilter = {
    is?: YouTubeChannelWhereInput
    isNot?: YouTubeChannelWhereInput
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    youtubeId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    hashtags?: SortOrder
    categoryId?: SortOrder
    thumbnailUrl?: SortOrder
    thumbnailGcsUrl?: SortOrder
    videoGcsUrl?: SortOrder
    duration?: SortOrder
    privacyStatus?: SortOrder
    madeForKids?: SortOrder
    ageRestriction?: SortOrder
    license?: SortOrder
    language?: SortOrder
    allowComments?: SortOrder
    allowEmbedding?: SortOrder
    publishToFeed?: SortOrder
    isPremiere?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    scheduledFor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    youtubeId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    thumbnailUrl?: SortOrder
    thumbnailGcsUrl?: SortOrder
    videoGcsUrl?: SortOrder
    duration?: SortOrder
    privacyStatus?: SortOrder
    madeForKids?: SortOrder
    ageRestriction?: SortOrder
    license?: SortOrder
    language?: SortOrder
    allowComments?: SortOrder
    allowEmbedding?: SortOrder
    publishToFeed?: SortOrder
    isPremiere?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    scheduledFor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    youtubeId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    thumbnailUrl?: SortOrder
    thumbnailGcsUrl?: SortOrder
    videoGcsUrl?: SortOrder
    duration?: SortOrder
    privacyStatus?: SortOrder
    madeForKids?: SortOrder
    ageRestriction?: SortOrder
    license?: SortOrder
    language?: SortOrder
    allowComments?: SortOrder
    allowEmbedding?: SortOrder
    publishToFeed?: SortOrder
    isPremiere?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    scheduledFor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumPrivacyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyStatus | EnumPrivacyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrivacyStatus[] | ListEnumPrivacyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivacyStatus[] | ListEnumPrivacyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivacyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrivacyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrivacyStatusFilter<$PrismaModel>
    _max?: NestedEnumPrivacyStatusFilter<$PrismaModel>
  }

  export type EnumMadeForKidsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MadeForKids | EnumMadeForKidsFieldRefInput<$PrismaModel>
    in?: $Enums.MadeForKids[] | ListEnumMadeForKidsFieldRefInput<$PrismaModel>
    notIn?: $Enums.MadeForKids[] | ListEnumMadeForKidsFieldRefInput<$PrismaModel>
    not?: NestedEnumMadeForKidsWithAggregatesFilter<$PrismaModel> | $Enums.MadeForKids
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMadeForKidsFilter<$PrismaModel>
    _max?: NestedEnumMadeForKidsFilter<$PrismaModel>
  }

  export type EnumLicenseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.License | EnumLicenseFieldRefInput<$PrismaModel>
    in?: $Enums.License[] | ListEnumLicenseFieldRefInput<$PrismaModel>
    notIn?: $Enums.License[] | ListEnumLicenseFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseWithAggregatesFilter<$PrismaModel> | $Enums.License
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseFilter<$PrismaModel>
    _max?: NestedEnumLicenseFilter<$PrismaModel>
  }

  export type EnumVideoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel> | $Enums.VideoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoStatusFilter<$PrismaModel>
    _max?: NestedEnumVideoStatusFilter<$PrismaModel>
  }

  export type VideoDraftCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    hashtags?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    thumbnailData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoDraftMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    thumbnailData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoDraftMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    thumbnailData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    titleTemplate?: SortOrder
    descTemplate?: SortOrder
    tags?: SortOrder
    hashtags?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    madeForKids?: SortOrder
    license?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    titleTemplate?: SortOrder
    descTemplate?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    madeForKids?: SortOrder
    license?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    titleTemplate?: SortOrder
    descTemplate?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    madeForKids?: SortOrder
    license?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
  }

  export type ScheduledUploadCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    videoFileName?: SortOrder
    videoFileSize?: SortOrder
    videoGcsUrl?: SortOrder
    thumbnailGcsUrl?: SortOrder
    scheduledFor?: SortOrder
    timezone?: SortOrder
    status?: SortOrder
    youtubeId?: SortOrder
    error?: SortOrder
    attempts?: SortOrder
    lastAttemptAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduledUploadAvgOrderByAggregateInput = {
    videoFileSize?: SortOrder
    attempts?: SortOrder
  }

  export type ScheduledUploadMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    videoFileName?: SortOrder
    videoFileSize?: SortOrder
    videoGcsUrl?: SortOrder
    thumbnailGcsUrl?: SortOrder
    scheduledFor?: SortOrder
    timezone?: SortOrder
    status?: SortOrder
    youtubeId?: SortOrder
    error?: SortOrder
    attempts?: SortOrder
    lastAttemptAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduledUploadMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    privacyStatus?: SortOrder
    videoFileName?: SortOrder
    videoFileSize?: SortOrder
    videoGcsUrl?: SortOrder
    thumbnailGcsUrl?: SortOrder
    scheduledFor?: SortOrder
    timezone?: SortOrder
    status?: SortOrder
    youtubeId?: SortOrder
    error?: SortOrder
    attempts?: SortOrder
    lastAttemptAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduledUploadSumOrderByAggregateInput = {
    videoFileSize?: SortOrder
    attempts?: SortOrder
  }

  export type EnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ChannelAnalyticsChannelIdDateCompoundUniqueInput = {
    channelId: string
    date: Date | string
  }

  export type ChannelAnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    date?: SortOrder
    views?: SortOrder
    subscribers?: SortOrder
    subscribersGained?: SortOrder
    subscribersLost?: SortOrder
    watchTimeMinutes?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    estimatedRevenue?: SortOrder
    createdAt?: SortOrder
  }

  export type ChannelAnalyticsAvgOrderByAggregateInput = {
    views?: SortOrder
    subscribers?: SortOrder
    subscribersGained?: SortOrder
    subscribersLost?: SortOrder
    watchTimeMinutes?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    estimatedRevenue?: SortOrder
  }

  export type ChannelAnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    date?: SortOrder
    views?: SortOrder
    subscribers?: SortOrder
    subscribersGained?: SortOrder
    subscribersLost?: SortOrder
    watchTimeMinutes?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    estimatedRevenue?: SortOrder
    createdAt?: SortOrder
  }

  export type ChannelAnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    date?: SortOrder
    views?: SortOrder
    subscribers?: SortOrder
    subscribersGained?: SortOrder
    subscribersLost?: SortOrder
    watchTimeMinutes?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    estimatedRevenue?: SortOrder
    createdAt?: SortOrder
  }

  export type ChannelAnalyticsSumOrderByAggregateInput = {
    views?: SortOrder
    subscribers?: SortOrder
    subscribersGained?: SortOrder
    subscribersLost?: SortOrder
    watchTimeMinutes?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    estimatedRevenue?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumThemeFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeFilter<$PrismaModel> | $Enums.Theme
  }

  export type UserSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    defaultPrivacy?: SortOrder
    defaultCategory?: SortOrder
    defaultLanguage?: SortOrder
    autoSaveDrafts?: SortOrder
    rememberLastChannel?: SortOrder
    emailNotifications?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    defaultPrivacy?: SortOrder
    defaultCategory?: SortOrder
    defaultLanguage?: SortOrder
    autoSaveDrafts?: SortOrder
    rememberLastChannel?: SortOrder
    emailNotifications?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    defaultPrivacy?: SortOrder
    defaultCategory?: SortOrder
    defaultLanguage?: SortOrder
    autoSaveDrafts?: SortOrder
    rememberLastChannel?: SortOrder
    emailNotifications?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumThemeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeWithAggregatesFilter<$PrismaModel> | $Enums.Theme
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemeFilter<$PrismaModel>
    _max?: NestedEnumThemeFilter<$PrismaModel>
  }

  export type ApiUsageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    quotaUsed?: SortOrder
    ipHash?: SortOrder
    timestamp?: SortOrder
  }

  export type ApiUsageAvgOrderByAggregateInput = {
    quotaUsed?: SortOrder
  }

  export type ApiUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    quotaUsed?: SortOrder
    ipHash?: SortOrder
    timestamp?: SortOrder
  }

  export type ApiUsageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    quotaUsed?: SortOrder
    ipHash?: SortOrder
    timestamp?: SortOrder
  }

  export type ApiUsageSumOrderByAggregateInput = {
    quotaUsed?: SortOrder
  }

  export type RateLimitCountOrderByAggregateInput = {
    id?: SortOrder
    requests?: SortOrder
    windowStart?: SortOrder
  }

  export type RateLimitAvgOrderByAggregateInput = {
    requests?: SortOrder
  }

  export type RateLimitMaxOrderByAggregateInput = {
    id?: SortOrder
    requests?: SortOrder
    windowStart?: SortOrder
  }

  export type RateLimitMinOrderByAggregateInput = {
    id?: SortOrder
    requests?: SortOrder
    windowStart?: SortOrder
  }

  export type RateLimitSumOrderByAggregateInput = {
    requests?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type YouTubeChannelCreateNestedManyWithoutUserInput = {
    create?: XOR<YouTubeChannelCreateWithoutUserInput, YouTubeChannelUncheckedCreateWithoutUserInput> | YouTubeChannelCreateWithoutUserInput[] | YouTubeChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YouTubeChannelCreateOrConnectWithoutUserInput | YouTubeChannelCreateOrConnectWithoutUserInput[]
    createMany?: YouTubeChannelCreateManyUserInputEnvelope
    connect?: YouTubeChannelWhereUniqueInput | YouTubeChannelWhereUniqueInput[]
  }

  export type VideoCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoDraftCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoDraftCreateWithoutUserInput, VideoDraftUncheckedCreateWithoutUserInput> | VideoDraftCreateWithoutUserInput[] | VideoDraftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoDraftCreateOrConnectWithoutUserInput | VideoDraftCreateOrConnectWithoutUserInput[]
    createMany?: VideoDraftCreateManyUserInputEnvelope
    connect?: VideoDraftWhereUniqueInput | VideoDraftWhereUniqueInput[]
  }

  export type VideoTemplateCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoTemplateCreateWithoutUserInput, VideoTemplateUncheckedCreateWithoutUserInput> | VideoTemplateCreateWithoutUserInput[] | VideoTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoTemplateCreateOrConnectWithoutUserInput | VideoTemplateCreateOrConnectWithoutUserInput[]
    createMany?: VideoTemplateCreateManyUserInputEnvelope
    connect?: VideoTemplateWhereUniqueInput | VideoTemplateWhereUniqueInput[]
  }

  export type ScheduledUploadCreateNestedManyWithoutUserInput = {
    create?: XOR<ScheduledUploadCreateWithoutUserInput, ScheduledUploadUncheckedCreateWithoutUserInput> | ScheduledUploadCreateWithoutUserInput[] | ScheduledUploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduledUploadCreateOrConnectWithoutUserInput | ScheduledUploadCreateOrConnectWithoutUserInput[]
    createMany?: ScheduledUploadCreateManyUserInputEnvelope
    connect?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
  }

  export type ApiUsageCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiUsageCreateWithoutUserInput, ApiUsageUncheckedCreateWithoutUserInput> | ApiUsageCreateWithoutUserInput[] | ApiUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageCreateOrConnectWithoutUserInput | ApiUsageCreateOrConnectWithoutUserInput[]
    createMany?: ApiUsageCreateManyUserInputEnvelope
    connect?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
  }

  export type UserSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type YouTubeChannelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<YouTubeChannelCreateWithoutUserInput, YouTubeChannelUncheckedCreateWithoutUserInput> | YouTubeChannelCreateWithoutUserInput[] | YouTubeChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YouTubeChannelCreateOrConnectWithoutUserInput | YouTubeChannelCreateOrConnectWithoutUserInput[]
    createMany?: YouTubeChannelCreateManyUserInputEnvelope
    connect?: YouTubeChannelWhereUniqueInput | YouTubeChannelWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoDraftUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoDraftCreateWithoutUserInput, VideoDraftUncheckedCreateWithoutUserInput> | VideoDraftCreateWithoutUserInput[] | VideoDraftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoDraftCreateOrConnectWithoutUserInput | VideoDraftCreateOrConnectWithoutUserInput[]
    createMany?: VideoDraftCreateManyUserInputEnvelope
    connect?: VideoDraftWhereUniqueInput | VideoDraftWhereUniqueInput[]
  }

  export type VideoTemplateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoTemplateCreateWithoutUserInput, VideoTemplateUncheckedCreateWithoutUserInput> | VideoTemplateCreateWithoutUserInput[] | VideoTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoTemplateCreateOrConnectWithoutUserInput | VideoTemplateCreateOrConnectWithoutUserInput[]
    createMany?: VideoTemplateCreateManyUserInputEnvelope
    connect?: VideoTemplateWhereUniqueInput | VideoTemplateWhereUniqueInput[]
  }

  export type ScheduledUploadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScheduledUploadCreateWithoutUserInput, ScheduledUploadUncheckedCreateWithoutUserInput> | ScheduledUploadCreateWithoutUserInput[] | ScheduledUploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduledUploadCreateOrConnectWithoutUserInput | ScheduledUploadCreateOrConnectWithoutUserInput[]
    createMany?: ScheduledUploadCreateManyUserInputEnvelope
    connect?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
  }

  export type ApiUsageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiUsageCreateWithoutUserInput, ApiUsageUncheckedCreateWithoutUserInput> | ApiUsageCreateWithoutUserInput[] | ApiUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageCreateOrConnectWithoutUserInput | ApiUsageCreateOrConnectWithoutUserInput[]
    createMany?: ApiUsageCreateManyUserInputEnvelope
    connect?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
  }

  export type UserSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type YouTubeChannelUpdateManyWithoutUserNestedInput = {
    create?: XOR<YouTubeChannelCreateWithoutUserInput, YouTubeChannelUncheckedCreateWithoutUserInput> | YouTubeChannelCreateWithoutUserInput[] | YouTubeChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YouTubeChannelCreateOrConnectWithoutUserInput | YouTubeChannelCreateOrConnectWithoutUserInput[]
    upsert?: YouTubeChannelUpsertWithWhereUniqueWithoutUserInput | YouTubeChannelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: YouTubeChannelCreateManyUserInputEnvelope
    set?: YouTubeChannelWhereUniqueInput | YouTubeChannelWhereUniqueInput[]
    disconnect?: YouTubeChannelWhereUniqueInput | YouTubeChannelWhereUniqueInput[]
    delete?: YouTubeChannelWhereUniqueInput | YouTubeChannelWhereUniqueInput[]
    connect?: YouTubeChannelWhereUniqueInput | YouTubeChannelWhereUniqueInput[]
    update?: YouTubeChannelUpdateWithWhereUniqueWithoutUserInput | YouTubeChannelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: YouTubeChannelUpdateManyWithWhereWithoutUserInput | YouTubeChannelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: YouTubeChannelScalarWhereInput | YouTubeChannelScalarWhereInput[]
  }

  export type VideoUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutUserInput | VideoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutUserInput | VideoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutUserInput | VideoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoDraftUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoDraftCreateWithoutUserInput, VideoDraftUncheckedCreateWithoutUserInput> | VideoDraftCreateWithoutUserInput[] | VideoDraftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoDraftCreateOrConnectWithoutUserInput | VideoDraftCreateOrConnectWithoutUserInput[]
    upsert?: VideoDraftUpsertWithWhereUniqueWithoutUserInput | VideoDraftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoDraftCreateManyUserInputEnvelope
    set?: VideoDraftWhereUniqueInput | VideoDraftWhereUniqueInput[]
    disconnect?: VideoDraftWhereUniqueInput | VideoDraftWhereUniqueInput[]
    delete?: VideoDraftWhereUniqueInput | VideoDraftWhereUniqueInput[]
    connect?: VideoDraftWhereUniqueInput | VideoDraftWhereUniqueInput[]
    update?: VideoDraftUpdateWithWhereUniqueWithoutUserInput | VideoDraftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoDraftUpdateManyWithWhereWithoutUserInput | VideoDraftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoDraftScalarWhereInput | VideoDraftScalarWhereInput[]
  }

  export type VideoTemplateUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoTemplateCreateWithoutUserInput, VideoTemplateUncheckedCreateWithoutUserInput> | VideoTemplateCreateWithoutUserInput[] | VideoTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoTemplateCreateOrConnectWithoutUserInput | VideoTemplateCreateOrConnectWithoutUserInput[]
    upsert?: VideoTemplateUpsertWithWhereUniqueWithoutUserInput | VideoTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoTemplateCreateManyUserInputEnvelope
    set?: VideoTemplateWhereUniqueInput | VideoTemplateWhereUniqueInput[]
    disconnect?: VideoTemplateWhereUniqueInput | VideoTemplateWhereUniqueInput[]
    delete?: VideoTemplateWhereUniqueInput | VideoTemplateWhereUniqueInput[]
    connect?: VideoTemplateWhereUniqueInput | VideoTemplateWhereUniqueInput[]
    update?: VideoTemplateUpdateWithWhereUniqueWithoutUserInput | VideoTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoTemplateUpdateManyWithWhereWithoutUserInput | VideoTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoTemplateScalarWhereInput | VideoTemplateScalarWhereInput[]
  }

  export type ScheduledUploadUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScheduledUploadCreateWithoutUserInput, ScheduledUploadUncheckedCreateWithoutUserInput> | ScheduledUploadCreateWithoutUserInput[] | ScheduledUploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduledUploadCreateOrConnectWithoutUserInput | ScheduledUploadCreateOrConnectWithoutUserInput[]
    upsert?: ScheduledUploadUpsertWithWhereUniqueWithoutUserInput | ScheduledUploadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScheduledUploadCreateManyUserInputEnvelope
    set?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    disconnect?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    delete?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    connect?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    update?: ScheduledUploadUpdateWithWhereUniqueWithoutUserInput | ScheduledUploadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScheduledUploadUpdateManyWithWhereWithoutUserInput | ScheduledUploadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScheduledUploadScalarWhereInput | ScheduledUploadScalarWhereInput[]
  }

  export type ApiUsageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiUsageCreateWithoutUserInput, ApiUsageUncheckedCreateWithoutUserInput> | ApiUsageCreateWithoutUserInput[] | ApiUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageCreateOrConnectWithoutUserInput | ApiUsageCreateOrConnectWithoutUserInput[]
    upsert?: ApiUsageUpsertWithWhereUniqueWithoutUserInput | ApiUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiUsageCreateManyUserInputEnvelope
    set?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    disconnect?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    delete?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    connect?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    update?: ApiUsageUpdateWithWhereUniqueWithoutUserInput | ApiUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiUsageUpdateManyWithWhereWithoutUserInput | ApiUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiUsageScalarWhereInput | ApiUsageScalarWhereInput[]
  }

  export type UserSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type YouTubeChannelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<YouTubeChannelCreateWithoutUserInput, YouTubeChannelUncheckedCreateWithoutUserInput> | YouTubeChannelCreateWithoutUserInput[] | YouTubeChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YouTubeChannelCreateOrConnectWithoutUserInput | YouTubeChannelCreateOrConnectWithoutUserInput[]
    upsert?: YouTubeChannelUpsertWithWhereUniqueWithoutUserInput | YouTubeChannelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: YouTubeChannelCreateManyUserInputEnvelope
    set?: YouTubeChannelWhereUniqueInput | YouTubeChannelWhereUniqueInput[]
    disconnect?: YouTubeChannelWhereUniqueInput | YouTubeChannelWhereUniqueInput[]
    delete?: YouTubeChannelWhereUniqueInput | YouTubeChannelWhereUniqueInput[]
    connect?: YouTubeChannelWhereUniqueInput | YouTubeChannelWhereUniqueInput[]
    update?: YouTubeChannelUpdateWithWhereUniqueWithoutUserInput | YouTubeChannelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: YouTubeChannelUpdateManyWithWhereWithoutUserInput | YouTubeChannelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: YouTubeChannelScalarWhereInput | YouTubeChannelScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutUserInput | VideoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutUserInput | VideoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutUserInput | VideoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoDraftUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoDraftCreateWithoutUserInput, VideoDraftUncheckedCreateWithoutUserInput> | VideoDraftCreateWithoutUserInput[] | VideoDraftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoDraftCreateOrConnectWithoutUserInput | VideoDraftCreateOrConnectWithoutUserInput[]
    upsert?: VideoDraftUpsertWithWhereUniqueWithoutUserInput | VideoDraftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoDraftCreateManyUserInputEnvelope
    set?: VideoDraftWhereUniqueInput | VideoDraftWhereUniqueInput[]
    disconnect?: VideoDraftWhereUniqueInput | VideoDraftWhereUniqueInput[]
    delete?: VideoDraftWhereUniqueInput | VideoDraftWhereUniqueInput[]
    connect?: VideoDraftWhereUniqueInput | VideoDraftWhereUniqueInput[]
    update?: VideoDraftUpdateWithWhereUniqueWithoutUserInput | VideoDraftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoDraftUpdateManyWithWhereWithoutUserInput | VideoDraftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoDraftScalarWhereInput | VideoDraftScalarWhereInput[]
  }

  export type VideoTemplateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoTemplateCreateWithoutUserInput, VideoTemplateUncheckedCreateWithoutUserInput> | VideoTemplateCreateWithoutUserInput[] | VideoTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoTemplateCreateOrConnectWithoutUserInput | VideoTemplateCreateOrConnectWithoutUserInput[]
    upsert?: VideoTemplateUpsertWithWhereUniqueWithoutUserInput | VideoTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoTemplateCreateManyUserInputEnvelope
    set?: VideoTemplateWhereUniqueInput | VideoTemplateWhereUniqueInput[]
    disconnect?: VideoTemplateWhereUniqueInput | VideoTemplateWhereUniqueInput[]
    delete?: VideoTemplateWhereUniqueInput | VideoTemplateWhereUniqueInput[]
    connect?: VideoTemplateWhereUniqueInput | VideoTemplateWhereUniqueInput[]
    update?: VideoTemplateUpdateWithWhereUniqueWithoutUserInput | VideoTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoTemplateUpdateManyWithWhereWithoutUserInput | VideoTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoTemplateScalarWhereInput | VideoTemplateScalarWhereInput[]
  }

  export type ScheduledUploadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScheduledUploadCreateWithoutUserInput, ScheduledUploadUncheckedCreateWithoutUserInput> | ScheduledUploadCreateWithoutUserInput[] | ScheduledUploadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduledUploadCreateOrConnectWithoutUserInput | ScheduledUploadCreateOrConnectWithoutUserInput[]
    upsert?: ScheduledUploadUpsertWithWhereUniqueWithoutUserInput | ScheduledUploadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScheduledUploadCreateManyUserInputEnvelope
    set?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    disconnect?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    delete?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    connect?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    update?: ScheduledUploadUpdateWithWhereUniqueWithoutUserInput | ScheduledUploadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScheduledUploadUpdateManyWithWhereWithoutUserInput | ScheduledUploadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScheduledUploadScalarWhereInput | ScheduledUploadScalarWhereInput[]
  }

  export type ApiUsageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiUsageCreateWithoutUserInput, ApiUsageUncheckedCreateWithoutUserInput> | ApiUsageCreateWithoutUserInput[] | ApiUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiUsageCreateOrConnectWithoutUserInput | ApiUsageCreateOrConnectWithoutUserInput[]
    upsert?: ApiUsageUpsertWithWhereUniqueWithoutUserInput | ApiUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiUsageCreateManyUserInputEnvelope
    set?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    disconnect?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    delete?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    connect?: ApiUsageWhereUniqueInput | ApiUsageWhereUniqueInput[]
    update?: ApiUsageUpdateWithWhereUniqueWithoutUserInput | ApiUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiUsageUpdateManyWithWhereWithoutUserInput | ApiUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiUsageScalarWhereInput | ApiUsageScalarWhereInput[]
  }

  export type UserSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutChannelsInput = {
    create?: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelsInput
    connect?: UserWhereUniqueInput
  }

  export type VideoCreateNestedManyWithoutChannelInput = {
    create?: XOR<VideoCreateWithoutChannelInput, VideoUncheckedCreateWithoutChannelInput> | VideoCreateWithoutChannelInput[] | VideoUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutChannelInput | VideoCreateOrConnectWithoutChannelInput[]
    createMany?: VideoCreateManyChannelInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type ScheduledUploadCreateNestedManyWithoutChannelInput = {
    create?: XOR<ScheduledUploadCreateWithoutChannelInput, ScheduledUploadUncheckedCreateWithoutChannelInput> | ScheduledUploadCreateWithoutChannelInput[] | ScheduledUploadUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ScheduledUploadCreateOrConnectWithoutChannelInput | ScheduledUploadCreateOrConnectWithoutChannelInput[]
    createMany?: ScheduledUploadCreateManyChannelInputEnvelope
    connect?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
  }

  export type ChannelAnalyticsCreateNestedManyWithoutChannelInput = {
    create?: XOR<ChannelAnalyticsCreateWithoutChannelInput, ChannelAnalyticsUncheckedCreateWithoutChannelInput> | ChannelAnalyticsCreateWithoutChannelInput[] | ChannelAnalyticsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelAnalyticsCreateOrConnectWithoutChannelInput | ChannelAnalyticsCreateOrConnectWithoutChannelInput[]
    createMany?: ChannelAnalyticsCreateManyChannelInputEnvelope
    connect?: ChannelAnalyticsWhereUniqueInput | ChannelAnalyticsWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<VideoCreateWithoutChannelInput, VideoUncheckedCreateWithoutChannelInput> | VideoCreateWithoutChannelInput[] | VideoUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutChannelInput | VideoCreateOrConnectWithoutChannelInput[]
    createMany?: VideoCreateManyChannelInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type ScheduledUploadUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<ScheduledUploadCreateWithoutChannelInput, ScheduledUploadUncheckedCreateWithoutChannelInput> | ScheduledUploadCreateWithoutChannelInput[] | ScheduledUploadUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ScheduledUploadCreateOrConnectWithoutChannelInput | ScheduledUploadCreateOrConnectWithoutChannelInput[]
    createMany?: ScheduledUploadCreateManyChannelInputEnvelope
    connect?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
  }

  export type ChannelAnalyticsUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<ChannelAnalyticsCreateWithoutChannelInput, ChannelAnalyticsUncheckedCreateWithoutChannelInput> | ChannelAnalyticsCreateWithoutChannelInput[] | ChannelAnalyticsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelAnalyticsCreateOrConnectWithoutChannelInput | ChannelAnalyticsCreateOrConnectWithoutChannelInput[]
    createMany?: ChannelAnalyticsCreateManyChannelInputEnvelope
    connect?: ChannelAnalyticsWhereUniqueInput | ChannelAnalyticsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutChannelsNestedInput = {
    create?: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelsInput
    upsert?: UserUpsertWithoutChannelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChannelsInput, UserUpdateWithoutChannelsInput>, UserUncheckedUpdateWithoutChannelsInput>
  }

  export type VideoUpdateManyWithoutChannelNestedInput = {
    create?: XOR<VideoCreateWithoutChannelInput, VideoUncheckedCreateWithoutChannelInput> | VideoCreateWithoutChannelInput[] | VideoUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutChannelInput | VideoCreateOrConnectWithoutChannelInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutChannelInput | VideoUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: VideoCreateManyChannelInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutChannelInput | VideoUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutChannelInput | VideoUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type ScheduledUploadUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ScheduledUploadCreateWithoutChannelInput, ScheduledUploadUncheckedCreateWithoutChannelInput> | ScheduledUploadCreateWithoutChannelInput[] | ScheduledUploadUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ScheduledUploadCreateOrConnectWithoutChannelInput | ScheduledUploadCreateOrConnectWithoutChannelInput[]
    upsert?: ScheduledUploadUpsertWithWhereUniqueWithoutChannelInput | ScheduledUploadUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ScheduledUploadCreateManyChannelInputEnvelope
    set?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    disconnect?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    delete?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    connect?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    update?: ScheduledUploadUpdateWithWhereUniqueWithoutChannelInput | ScheduledUploadUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ScheduledUploadUpdateManyWithWhereWithoutChannelInput | ScheduledUploadUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ScheduledUploadScalarWhereInput | ScheduledUploadScalarWhereInput[]
  }

  export type ChannelAnalyticsUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ChannelAnalyticsCreateWithoutChannelInput, ChannelAnalyticsUncheckedCreateWithoutChannelInput> | ChannelAnalyticsCreateWithoutChannelInput[] | ChannelAnalyticsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelAnalyticsCreateOrConnectWithoutChannelInput | ChannelAnalyticsCreateOrConnectWithoutChannelInput[]
    upsert?: ChannelAnalyticsUpsertWithWhereUniqueWithoutChannelInput | ChannelAnalyticsUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ChannelAnalyticsCreateManyChannelInputEnvelope
    set?: ChannelAnalyticsWhereUniqueInput | ChannelAnalyticsWhereUniqueInput[]
    disconnect?: ChannelAnalyticsWhereUniqueInput | ChannelAnalyticsWhereUniqueInput[]
    delete?: ChannelAnalyticsWhereUniqueInput | ChannelAnalyticsWhereUniqueInput[]
    connect?: ChannelAnalyticsWhereUniqueInput | ChannelAnalyticsWhereUniqueInput[]
    update?: ChannelAnalyticsUpdateWithWhereUniqueWithoutChannelInput | ChannelAnalyticsUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ChannelAnalyticsUpdateManyWithWhereWithoutChannelInput | ChannelAnalyticsUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ChannelAnalyticsScalarWhereInput | ChannelAnalyticsScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<VideoCreateWithoutChannelInput, VideoUncheckedCreateWithoutChannelInput> | VideoCreateWithoutChannelInput[] | VideoUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutChannelInput | VideoCreateOrConnectWithoutChannelInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutChannelInput | VideoUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: VideoCreateManyChannelInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutChannelInput | VideoUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutChannelInput | VideoUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type ScheduledUploadUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ScheduledUploadCreateWithoutChannelInput, ScheduledUploadUncheckedCreateWithoutChannelInput> | ScheduledUploadCreateWithoutChannelInput[] | ScheduledUploadUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ScheduledUploadCreateOrConnectWithoutChannelInput | ScheduledUploadCreateOrConnectWithoutChannelInput[]
    upsert?: ScheduledUploadUpsertWithWhereUniqueWithoutChannelInput | ScheduledUploadUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ScheduledUploadCreateManyChannelInputEnvelope
    set?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    disconnect?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    delete?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    connect?: ScheduledUploadWhereUniqueInput | ScheduledUploadWhereUniqueInput[]
    update?: ScheduledUploadUpdateWithWhereUniqueWithoutChannelInput | ScheduledUploadUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ScheduledUploadUpdateManyWithWhereWithoutChannelInput | ScheduledUploadUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ScheduledUploadScalarWhereInput | ScheduledUploadScalarWhereInput[]
  }

  export type ChannelAnalyticsUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ChannelAnalyticsCreateWithoutChannelInput, ChannelAnalyticsUncheckedCreateWithoutChannelInput> | ChannelAnalyticsCreateWithoutChannelInput[] | ChannelAnalyticsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ChannelAnalyticsCreateOrConnectWithoutChannelInput | ChannelAnalyticsCreateOrConnectWithoutChannelInput[]
    upsert?: ChannelAnalyticsUpsertWithWhereUniqueWithoutChannelInput | ChannelAnalyticsUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ChannelAnalyticsCreateManyChannelInputEnvelope
    set?: ChannelAnalyticsWhereUniqueInput | ChannelAnalyticsWhereUniqueInput[]
    disconnect?: ChannelAnalyticsWhereUniqueInput | ChannelAnalyticsWhereUniqueInput[]
    delete?: ChannelAnalyticsWhereUniqueInput | ChannelAnalyticsWhereUniqueInput[]
    connect?: ChannelAnalyticsWhereUniqueInput | ChannelAnalyticsWhereUniqueInput[]
    update?: ChannelAnalyticsUpdateWithWhereUniqueWithoutChannelInput | ChannelAnalyticsUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ChannelAnalyticsUpdateManyWithWhereWithoutChannelInput | ChannelAnalyticsUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ChannelAnalyticsScalarWhereInput | ChannelAnalyticsScalarWhereInput[]
  }

  export type VideoCreatetagsInput = {
    set: string[]
  }

  export type VideoCreatehashtagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutVideosInput = {
    create?: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput
    connect?: UserWhereUniqueInput
  }

  export type YouTubeChannelCreateNestedOneWithoutVideosInput = {
    create?: XOR<YouTubeChannelCreateWithoutVideosInput, YouTubeChannelUncheckedCreateWithoutVideosInput>
    connectOrCreate?: YouTubeChannelCreateOrConnectWithoutVideosInput
    connect?: YouTubeChannelWhereUniqueInput
  }

  export type VideoUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type VideoUpdatehashtagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumPrivacyStatusFieldUpdateOperationsInput = {
    set?: $Enums.PrivacyStatus
  }

  export type EnumMadeForKidsFieldUpdateOperationsInput = {
    set?: $Enums.MadeForKids
  }

  export type EnumLicenseFieldUpdateOperationsInput = {
    set?: $Enums.License
  }

  export type EnumVideoStatusFieldUpdateOperationsInput = {
    set?: $Enums.VideoStatus
  }

  export type UserUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput
    upsert?: UserUpsertWithoutVideosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVideosInput, UserUpdateWithoutVideosInput>, UserUncheckedUpdateWithoutVideosInput>
  }

  export type YouTubeChannelUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<YouTubeChannelCreateWithoutVideosInput, YouTubeChannelUncheckedCreateWithoutVideosInput>
    connectOrCreate?: YouTubeChannelCreateOrConnectWithoutVideosInput
    upsert?: YouTubeChannelUpsertWithoutVideosInput
    connect?: YouTubeChannelWhereUniqueInput
    update?: XOR<XOR<YouTubeChannelUpdateToOneWithWhereWithoutVideosInput, YouTubeChannelUpdateWithoutVideosInput>, YouTubeChannelUncheckedUpdateWithoutVideosInput>
  }

  export type VideoDraftCreatetagsInput = {
    set: string[]
  }

  export type VideoDraftCreatehashtagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutDraftsInput = {
    create?: XOR<UserCreateWithoutDraftsInput, UserUncheckedCreateWithoutDraftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDraftsInput
    connect?: UserWhereUniqueInput
  }

  export type VideoDraftUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type VideoDraftUpdatehashtagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutDraftsNestedInput = {
    create?: XOR<UserCreateWithoutDraftsInput, UserUncheckedCreateWithoutDraftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDraftsInput
    upsert?: UserUpsertWithoutDraftsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDraftsInput, UserUpdateWithoutDraftsInput>, UserUncheckedUpdateWithoutDraftsInput>
  }

  export type VideoTemplateCreatetagsInput = {
    set: string[]
  }

  export type VideoTemplateCreatehashtagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type VideoTemplateUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type VideoTemplateUpdatehashtagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    upsert?: UserUpsertWithoutTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemplatesInput, UserUpdateWithoutTemplatesInput>, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type ScheduledUploadCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedulesInput
    connect?: UserWhereUniqueInput
  }

  export type YouTubeChannelCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<YouTubeChannelCreateWithoutSchedulesInput, YouTubeChannelUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: YouTubeChannelCreateOrConnectWithoutSchedulesInput
    connect?: YouTubeChannelWhereUniqueInput
  }

  export type ScheduledUploadUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumScheduleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ScheduleStatus
  }

  export type UserUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedulesInput
    upsert?: UserUpsertWithoutSchedulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSchedulesInput, UserUpdateWithoutSchedulesInput>, UserUncheckedUpdateWithoutSchedulesInput>
  }

  export type YouTubeChannelUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<YouTubeChannelCreateWithoutSchedulesInput, YouTubeChannelUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: YouTubeChannelCreateOrConnectWithoutSchedulesInput
    upsert?: YouTubeChannelUpsertWithoutSchedulesInput
    connect?: YouTubeChannelWhereUniqueInput
    update?: XOR<XOR<YouTubeChannelUpdateToOneWithWhereWithoutSchedulesInput, YouTubeChannelUpdateWithoutSchedulesInput>, YouTubeChannelUncheckedUpdateWithoutSchedulesInput>
  }

  export type YouTubeChannelCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<YouTubeChannelCreateWithoutAnalyticsInput, YouTubeChannelUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: YouTubeChannelCreateOrConnectWithoutAnalyticsInput
    connect?: YouTubeChannelWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type YouTubeChannelUpdateOneRequiredWithoutAnalyticsNestedInput = {
    create?: XOR<YouTubeChannelCreateWithoutAnalyticsInput, YouTubeChannelUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: YouTubeChannelCreateOrConnectWithoutAnalyticsInput
    upsert?: YouTubeChannelUpsertWithoutAnalyticsInput
    connect?: YouTubeChannelWhereUniqueInput
    update?: XOR<XOR<YouTubeChannelUpdateToOneWithWhereWithoutAnalyticsInput, YouTubeChannelUpdateWithoutAnalyticsInput>, YouTubeChannelUncheckedUpdateWithoutAnalyticsInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumThemeFieldUpdateOperationsInput = {
    set?: $Enums.Theme
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserCreateNestedOneWithoutApiUsageInput = {
    create?: XOR<UserCreateWithoutApiUsageInput, UserUncheckedCreateWithoutApiUsageInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiUsageInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutApiUsageNestedInput = {
    create?: XOR<UserCreateWithoutApiUsageInput, UserUncheckedCreateWithoutApiUsageInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiUsageInput
    upsert?: UserUpsertWithoutApiUsageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiUsageInput, UserUpdateWithoutApiUsageInput>, UserUncheckedUpdateWithoutApiUsageInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPrivacyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyStatus | EnumPrivacyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrivacyStatus[] | ListEnumPrivacyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivacyStatus[] | ListEnumPrivacyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivacyStatusFilter<$PrismaModel> | $Enums.PrivacyStatus
  }

  export type NestedEnumMadeForKidsFilter<$PrismaModel = never> = {
    equals?: $Enums.MadeForKids | EnumMadeForKidsFieldRefInput<$PrismaModel>
    in?: $Enums.MadeForKids[] | ListEnumMadeForKidsFieldRefInput<$PrismaModel>
    notIn?: $Enums.MadeForKids[] | ListEnumMadeForKidsFieldRefInput<$PrismaModel>
    not?: NestedEnumMadeForKidsFilter<$PrismaModel> | $Enums.MadeForKids
  }

  export type NestedEnumLicenseFilter<$PrismaModel = never> = {
    equals?: $Enums.License | EnumLicenseFieldRefInput<$PrismaModel>
    in?: $Enums.License[] | ListEnumLicenseFieldRefInput<$PrismaModel>
    notIn?: $Enums.License[] | ListEnumLicenseFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseFilter<$PrismaModel> | $Enums.License
  }

  export type NestedEnumVideoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusFilter<$PrismaModel> | $Enums.VideoStatus
  }

  export type NestedEnumPrivacyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyStatus | EnumPrivacyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrivacyStatus[] | ListEnumPrivacyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivacyStatus[] | ListEnumPrivacyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivacyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrivacyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrivacyStatusFilter<$PrismaModel>
    _max?: NestedEnumPrivacyStatusFilter<$PrismaModel>
  }

  export type NestedEnumMadeForKidsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MadeForKids | EnumMadeForKidsFieldRefInput<$PrismaModel>
    in?: $Enums.MadeForKids[] | ListEnumMadeForKidsFieldRefInput<$PrismaModel>
    notIn?: $Enums.MadeForKids[] | ListEnumMadeForKidsFieldRefInput<$PrismaModel>
    not?: NestedEnumMadeForKidsWithAggregatesFilter<$PrismaModel> | $Enums.MadeForKids
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMadeForKidsFilter<$PrismaModel>
    _max?: NestedEnumMadeForKidsFilter<$PrismaModel>
  }

  export type NestedEnumLicenseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.License | EnumLicenseFieldRefInput<$PrismaModel>
    in?: $Enums.License[] | ListEnumLicenseFieldRefInput<$PrismaModel>
    notIn?: $Enums.License[] | ListEnumLicenseFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseWithAggregatesFilter<$PrismaModel> | $Enums.License
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseFilter<$PrismaModel>
    _max?: NestedEnumLicenseFilter<$PrismaModel>
  }

  export type NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel> | $Enums.VideoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoStatusFilter<$PrismaModel>
    _max?: NestedEnumVideoStatusFilter<$PrismaModel>
  }

  export type NestedEnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
  }

  export type NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumThemeFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeFilter<$PrismaModel> | $Enums.Theme
  }

  export type NestedEnumThemeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeWithAggregatesFilter<$PrismaModel> | $Enums.Theme
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemeFilter<$PrismaModel>
    _max?: NestedEnumThemeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type YouTubeChannelCreateWithoutUserInput = {
    id: string
    title: string
    description?: string | null
    customUrl?: string | null
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    subscriberCount?: bigint | number
    videoCount?: number
    viewCount?: bigint | number
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    accountEmail?: string | null
    accountName?: string | null
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: Date | string
    lastSyncAt?: Date | string | null
    videos?: VideoCreateNestedManyWithoutChannelInput
    schedules?: ScheduledUploadCreateNestedManyWithoutChannelInput
    analytics?: ChannelAnalyticsCreateNestedManyWithoutChannelInput
  }

  export type YouTubeChannelUncheckedCreateWithoutUserInput = {
    id: string
    title: string
    description?: string | null
    customUrl?: string | null
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    subscriberCount?: bigint | number
    videoCount?: number
    viewCount?: bigint | number
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    accountEmail?: string | null
    accountName?: string | null
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: Date | string
    lastSyncAt?: Date | string | null
    videos?: VideoUncheckedCreateNestedManyWithoutChannelInput
    schedules?: ScheduledUploadUncheckedCreateNestedManyWithoutChannelInput
    analytics?: ChannelAnalyticsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type YouTubeChannelCreateOrConnectWithoutUserInput = {
    where: YouTubeChannelWhereUniqueInput
    create: XOR<YouTubeChannelCreateWithoutUserInput, YouTubeChannelUncheckedCreateWithoutUserInput>
  }

  export type YouTubeChannelCreateManyUserInputEnvelope = {
    data: YouTubeChannelCreateManyUserInput | YouTubeChannelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutUserInput = {
    id?: string
    youtubeId?: string | null
    title: string
    description: string
    tags?: VideoCreatetagsInput | string[]
    hashtags?: VideoCreatehashtagsInput | string[]
    categoryId?: string
    thumbnailUrl?: string | null
    thumbnailGcsUrl?: string | null
    videoGcsUrl?: string | null
    duration?: number | null
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    ageRestriction?: boolean
    license?: $Enums.License
    language?: string
    allowComments?: boolean
    allowEmbedding?: boolean
    publishToFeed?: boolean
    isPremiere?: boolean
    status?: $Enums.VideoStatus
    publishedAt?: Date | string | null
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: YouTubeChannelCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutUserInput = {
    id?: string
    youtubeId?: string | null
    channelId: string
    title: string
    description: string
    tags?: VideoCreatetagsInput | string[]
    hashtags?: VideoCreatehashtagsInput | string[]
    categoryId?: string
    thumbnailUrl?: string | null
    thumbnailGcsUrl?: string | null
    videoGcsUrl?: string | null
    duration?: number | null
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    ageRestriction?: boolean
    license?: $Enums.License
    language?: string
    allowComments?: boolean
    allowEmbedding?: boolean
    publishToFeed?: boolean
    isPremiere?: boolean
    status?: $Enums.VideoStatus
    publishedAt?: Date | string | null
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoCreateOrConnectWithoutUserInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput>
  }

  export type VideoCreateManyUserInputEnvelope = {
    data: VideoCreateManyUserInput | VideoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VideoDraftCreateWithoutUserInput = {
    id?: string
    name: string
    title: string
    description: string
    tags?: VideoDraftCreatetagsInput | string[]
    hashtags?: VideoDraftCreatehashtagsInput | string[]
    categoryId?: string
    privacyStatus?: $Enums.PrivacyStatus
    thumbnailData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoDraftUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    title: string
    description: string
    tags?: VideoDraftCreatetagsInput | string[]
    hashtags?: VideoDraftCreatehashtagsInput | string[]
    categoryId?: string
    privacyStatus?: $Enums.PrivacyStatus
    thumbnailData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoDraftCreateOrConnectWithoutUserInput = {
    where: VideoDraftWhereUniqueInput
    create: XOR<VideoDraftCreateWithoutUserInput, VideoDraftUncheckedCreateWithoutUserInput>
  }

  export type VideoDraftCreateManyUserInputEnvelope = {
    data: VideoDraftCreateManyUserInput | VideoDraftCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VideoTemplateCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    titleTemplate: string
    descTemplate: string
    tags?: VideoTemplateCreatetagsInput | string[]
    hashtags?: VideoTemplateCreatehashtagsInput | string[]
    categoryId?: string
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    license?: $Enums.License
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoTemplateUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    titleTemplate: string
    descTemplate: string
    tags?: VideoTemplateCreatetagsInput | string[]
    hashtags?: VideoTemplateCreatehashtagsInput | string[]
    categoryId?: string
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    license?: $Enums.License
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoTemplateCreateOrConnectWithoutUserInput = {
    where: VideoTemplateWhereUniqueInput
    create: XOR<VideoTemplateCreateWithoutUserInput, VideoTemplateUncheckedCreateWithoutUserInput>
  }

  export type VideoTemplateCreateManyUserInputEnvelope = {
    data: VideoTemplateCreateManyUserInput | VideoTemplateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ScheduledUploadCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    tags?: ScheduledUploadCreatetagsInput | string[]
    categoryId?: string
    privacyStatus: $Enums.PrivacyStatus
    videoFileName: string
    videoFileSize: bigint | number
    videoGcsUrl: string
    thumbnailGcsUrl?: string | null
    scheduledFor: Date | string
    timezone?: string
    status?: $Enums.ScheduleStatus
    youtubeId?: string | null
    error?: string | null
    attempts?: number
    lastAttemptAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: YouTubeChannelCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduledUploadUncheckedCreateWithoutUserInput = {
    id?: string
    channelId: string
    title: string
    description: string
    tags?: ScheduledUploadCreatetagsInput | string[]
    categoryId?: string
    privacyStatus: $Enums.PrivacyStatus
    videoFileName: string
    videoFileSize: bigint | number
    videoGcsUrl: string
    thumbnailGcsUrl?: string | null
    scheduledFor: Date | string
    timezone?: string
    status?: $Enums.ScheduleStatus
    youtubeId?: string | null
    error?: string | null
    attempts?: number
    lastAttemptAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledUploadCreateOrConnectWithoutUserInput = {
    where: ScheduledUploadWhereUniqueInput
    create: XOR<ScheduledUploadCreateWithoutUserInput, ScheduledUploadUncheckedCreateWithoutUserInput>
  }

  export type ScheduledUploadCreateManyUserInputEnvelope = {
    data: ScheduledUploadCreateManyUserInput | ScheduledUploadCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiUsageCreateWithoutUserInput = {
    id?: string
    endpoint: string
    method: string
    quotaUsed?: number
    ipHash?: string | null
    timestamp?: Date | string
  }

  export type ApiUsageUncheckedCreateWithoutUserInput = {
    id?: string
    endpoint: string
    method: string
    quotaUsed?: number
    ipHash?: string | null
    timestamp?: Date | string
  }

  export type ApiUsageCreateOrConnectWithoutUserInput = {
    where: ApiUsageWhereUniqueInput
    create: XOR<ApiUsageCreateWithoutUserInput, ApiUsageUncheckedCreateWithoutUserInput>
  }

  export type ApiUsageCreateManyUserInputEnvelope = {
    data: ApiUsageCreateManyUserInput | ApiUsageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSettingsCreateWithoutUserInput = {
    id?: string
    defaultPrivacy?: $Enums.PrivacyStatus
    defaultCategory?: string
    defaultLanguage?: string
    autoSaveDrafts?: boolean
    rememberLastChannel?: boolean
    emailNotifications?: boolean
    theme?: $Enums.Theme
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUncheckedCreateWithoutUserInput = {
    id?: string
    defaultPrivacy?: $Enums.PrivacyStatus
    defaultCategory?: string
    defaultLanguage?: string
    autoSaveDrafts?: boolean
    rememberLastChannel?: boolean
    emailNotifications?: boolean
    theme?: $Enums.Theme
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsCreateOrConnectWithoutUserInput = {
    where: UserSettingsWhereUniqueInput
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type YouTubeChannelUpsertWithWhereUniqueWithoutUserInput = {
    where: YouTubeChannelWhereUniqueInput
    update: XOR<YouTubeChannelUpdateWithoutUserInput, YouTubeChannelUncheckedUpdateWithoutUserInput>
    create: XOR<YouTubeChannelCreateWithoutUserInput, YouTubeChannelUncheckedCreateWithoutUserInput>
  }

  export type YouTubeChannelUpdateWithWhereUniqueWithoutUserInput = {
    where: YouTubeChannelWhereUniqueInput
    data: XOR<YouTubeChannelUpdateWithoutUserInput, YouTubeChannelUncheckedUpdateWithoutUserInput>
  }

  export type YouTubeChannelUpdateManyWithWhereWithoutUserInput = {
    where: YouTubeChannelScalarWhereInput
    data: XOR<YouTubeChannelUpdateManyMutationInput, YouTubeChannelUncheckedUpdateManyWithoutUserInput>
  }

  export type YouTubeChannelScalarWhereInput = {
    AND?: YouTubeChannelScalarWhereInput | YouTubeChannelScalarWhereInput[]
    OR?: YouTubeChannelScalarWhereInput[]
    NOT?: YouTubeChannelScalarWhereInput | YouTubeChannelScalarWhereInput[]
    id?: StringFilter<"YouTubeChannel"> | string
    userId?: StringFilter<"YouTubeChannel"> | string
    title?: StringFilter<"YouTubeChannel"> | string
    description?: StringNullableFilter<"YouTubeChannel"> | string | null
    customUrl?: StringNullableFilter<"YouTubeChannel"> | string | null
    thumbnailUrl?: StringNullableFilter<"YouTubeChannel"> | string | null
    bannerUrl?: StringNullableFilter<"YouTubeChannel"> | string | null
    subscriberCount?: BigIntFilter<"YouTubeChannel"> | bigint | number
    videoCount?: IntFilter<"YouTubeChannel"> | number
    viewCount?: BigIntFilter<"YouTubeChannel"> | bigint | number
    accessToken?: StringFilter<"YouTubeChannel"> | string
    refreshToken?: StringNullableFilter<"YouTubeChannel"> | string | null
    tokenExpiresAt?: DateTimeNullableFilter<"YouTubeChannel"> | Date | string | null
    accountEmail?: StringNullableFilter<"YouTubeChannel"> | string | null
    accountName?: StringNullableFilter<"YouTubeChannel"> | string | null
    isBrandAccount?: BoolFilter<"YouTubeChannel"> | boolean
    isActive?: BoolFilter<"YouTubeChannel"> | boolean
    connectedAt?: DateTimeFilter<"YouTubeChannel"> | Date | string
    lastSyncAt?: DateTimeNullableFilter<"YouTubeChannel"> | Date | string | null
  }

  export type VideoUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutUserInput, VideoUncheckedUpdateWithoutUserInput>
    create: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutUserInput, VideoUncheckedUpdateWithoutUserInput>
  }

  export type VideoUpdateManyWithWhereWithoutUserInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutUserInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: StringFilter<"Video"> | string
    youtubeId?: StringNullableFilter<"Video"> | string | null
    userId?: StringFilter<"Video"> | string
    channelId?: StringFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    description?: StringFilter<"Video"> | string
    tags?: StringNullableListFilter<"Video">
    hashtags?: StringNullableListFilter<"Video">
    categoryId?: StringFilter<"Video"> | string
    thumbnailUrl?: StringNullableFilter<"Video"> | string | null
    thumbnailGcsUrl?: StringNullableFilter<"Video"> | string | null
    videoGcsUrl?: StringNullableFilter<"Video"> | string | null
    duration?: IntNullableFilter<"Video"> | number | null
    privacyStatus?: EnumPrivacyStatusFilter<"Video"> | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFilter<"Video"> | $Enums.MadeForKids
    ageRestriction?: BoolFilter<"Video"> | boolean
    license?: EnumLicenseFilter<"Video"> | $Enums.License
    language?: StringFilter<"Video"> | string
    allowComments?: BoolFilter<"Video"> | boolean
    allowEmbedding?: BoolFilter<"Video"> | boolean
    publishToFeed?: BoolFilter<"Video"> | boolean
    isPremiere?: BoolFilter<"Video"> | boolean
    status?: EnumVideoStatusFilter<"Video"> | $Enums.VideoStatus
    publishedAt?: DateTimeNullableFilter<"Video"> | Date | string | null
    scheduledFor?: DateTimeNullableFilter<"Video"> | Date | string | null
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
  }

  export type VideoDraftUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoDraftWhereUniqueInput
    update: XOR<VideoDraftUpdateWithoutUserInput, VideoDraftUncheckedUpdateWithoutUserInput>
    create: XOR<VideoDraftCreateWithoutUserInput, VideoDraftUncheckedCreateWithoutUserInput>
  }

  export type VideoDraftUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoDraftWhereUniqueInput
    data: XOR<VideoDraftUpdateWithoutUserInput, VideoDraftUncheckedUpdateWithoutUserInput>
  }

  export type VideoDraftUpdateManyWithWhereWithoutUserInput = {
    where: VideoDraftScalarWhereInput
    data: XOR<VideoDraftUpdateManyMutationInput, VideoDraftUncheckedUpdateManyWithoutUserInput>
  }

  export type VideoDraftScalarWhereInput = {
    AND?: VideoDraftScalarWhereInput | VideoDraftScalarWhereInput[]
    OR?: VideoDraftScalarWhereInput[]
    NOT?: VideoDraftScalarWhereInput | VideoDraftScalarWhereInput[]
    id?: StringFilter<"VideoDraft"> | string
    userId?: StringFilter<"VideoDraft"> | string
    name?: StringFilter<"VideoDraft"> | string
    title?: StringFilter<"VideoDraft"> | string
    description?: StringFilter<"VideoDraft"> | string
    tags?: StringNullableListFilter<"VideoDraft">
    hashtags?: StringNullableListFilter<"VideoDraft">
    categoryId?: StringFilter<"VideoDraft"> | string
    privacyStatus?: EnumPrivacyStatusFilter<"VideoDraft"> | $Enums.PrivacyStatus
    thumbnailData?: StringNullableFilter<"VideoDraft"> | string | null
    createdAt?: DateTimeFilter<"VideoDraft"> | Date | string
    updatedAt?: DateTimeFilter<"VideoDraft"> | Date | string
  }

  export type VideoTemplateUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoTemplateWhereUniqueInput
    update: XOR<VideoTemplateUpdateWithoutUserInput, VideoTemplateUncheckedUpdateWithoutUserInput>
    create: XOR<VideoTemplateCreateWithoutUserInput, VideoTemplateUncheckedCreateWithoutUserInput>
  }

  export type VideoTemplateUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoTemplateWhereUniqueInput
    data: XOR<VideoTemplateUpdateWithoutUserInput, VideoTemplateUncheckedUpdateWithoutUserInput>
  }

  export type VideoTemplateUpdateManyWithWhereWithoutUserInput = {
    where: VideoTemplateScalarWhereInput
    data: XOR<VideoTemplateUpdateManyMutationInput, VideoTemplateUncheckedUpdateManyWithoutUserInput>
  }

  export type VideoTemplateScalarWhereInput = {
    AND?: VideoTemplateScalarWhereInput | VideoTemplateScalarWhereInput[]
    OR?: VideoTemplateScalarWhereInput[]
    NOT?: VideoTemplateScalarWhereInput | VideoTemplateScalarWhereInput[]
    id?: StringFilter<"VideoTemplate"> | string
    userId?: StringFilter<"VideoTemplate"> | string
    name?: StringFilter<"VideoTemplate"> | string
    description?: StringNullableFilter<"VideoTemplate"> | string | null
    titleTemplate?: StringFilter<"VideoTemplate"> | string
    descTemplate?: StringFilter<"VideoTemplate"> | string
    tags?: StringNullableListFilter<"VideoTemplate">
    hashtags?: StringNullableListFilter<"VideoTemplate">
    categoryId?: StringFilter<"VideoTemplate"> | string
    privacyStatus?: EnumPrivacyStatusFilter<"VideoTemplate"> | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFilter<"VideoTemplate"> | $Enums.MadeForKids
    license?: EnumLicenseFilter<"VideoTemplate"> | $Enums.License
    language?: StringFilter<"VideoTemplate"> | string
    createdAt?: DateTimeFilter<"VideoTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"VideoTemplate"> | Date | string
  }

  export type ScheduledUploadUpsertWithWhereUniqueWithoutUserInput = {
    where: ScheduledUploadWhereUniqueInput
    update: XOR<ScheduledUploadUpdateWithoutUserInput, ScheduledUploadUncheckedUpdateWithoutUserInput>
    create: XOR<ScheduledUploadCreateWithoutUserInput, ScheduledUploadUncheckedCreateWithoutUserInput>
  }

  export type ScheduledUploadUpdateWithWhereUniqueWithoutUserInput = {
    where: ScheduledUploadWhereUniqueInput
    data: XOR<ScheduledUploadUpdateWithoutUserInput, ScheduledUploadUncheckedUpdateWithoutUserInput>
  }

  export type ScheduledUploadUpdateManyWithWhereWithoutUserInput = {
    where: ScheduledUploadScalarWhereInput
    data: XOR<ScheduledUploadUpdateManyMutationInput, ScheduledUploadUncheckedUpdateManyWithoutUserInput>
  }

  export type ScheduledUploadScalarWhereInput = {
    AND?: ScheduledUploadScalarWhereInput | ScheduledUploadScalarWhereInput[]
    OR?: ScheduledUploadScalarWhereInput[]
    NOT?: ScheduledUploadScalarWhereInput | ScheduledUploadScalarWhereInput[]
    id?: StringFilter<"ScheduledUpload"> | string
    userId?: StringFilter<"ScheduledUpload"> | string
    channelId?: StringFilter<"ScheduledUpload"> | string
    title?: StringFilter<"ScheduledUpload"> | string
    description?: StringFilter<"ScheduledUpload"> | string
    tags?: StringNullableListFilter<"ScheduledUpload">
    categoryId?: StringFilter<"ScheduledUpload"> | string
    privacyStatus?: EnumPrivacyStatusFilter<"ScheduledUpload"> | $Enums.PrivacyStatus
    videoFileName?: StringFilter<"ScheduledUpload"> | string
    videoFileSize?: BigIntFilter<"ScheduledUpload"> | bigint | number
    videoGcsUrl?: StringFilter<"ScheduledUpload"> | string
    thumbnailGcsUrl?: StringNullableFilter<"ScheduledUpload"> | string | null
    scheduledFor?: DateTimeFilter<"ScheduledUpload"> | Date | string
    timezone?: StringFilter<"ScheduledUpload"> | string
    status?: EnumScheduleStatusFilter<"ScheduledUpload"> | $Enums.ScheduleStatus
    youtubeId?: StringNullableFilter<"ScheduledUpload"> | string | null
    error?: StringNullableFilter<"ScheduledUpload"> | string | null
    attempts?: IntFilter<"ScheduledUpload"> | number
    lastAttemptAt?: DateTimeNullableFilter<"ScheduledUpload"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ScheduledUpload"> | Date | string | null
    createdAt?: DateTimeFilter<"ScheduledUpload"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduledUpload"> | Date | string
  }

  export type ApiUsageUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiUsageWhereUniqueInput
    update: XOR<ApiUsageUpdateWithoutUserInput, ApiUsageUncheckedUpdateWithoutUserInput>
    create: XOR<ApiUsageCreateWithoutUserInput, ApiUsageUncheckedCreateWithoutUserInput>
  }

  export type ApiUsageUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiUsageWhereUniqueInput
    data: XOR<ApiUsageUpdateWithoutUserInput, ApiUsageUncheckedUpdateWithoutUserInput>
  }

  export type ApiUsageUpdateManyWithWhereWithoutUserInput = {
    where: ApiUsageScalarWhereInput
    data: XOR<ApiUsageUpdateManyMutationInput, ApiUsageUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiUsageScalarWhereInput = {
    AND?: ApiUsageScalarWhereInput | ApiUsageScalarWhereInput[]
    OR?: ApiUsageScalarWhereInput[]
    NOT?: ApiUsageScalarWhereInput | ApiUsageScalarWhereInput[]
    id?: StringFilter<"ApiUsage"> | string
    userId?: StringFilter<"ApiUsage"> | string
    endpoint?: StringFilter<"ApiUsage"> | string
    method?: StringFilter<"ApiUsage"> | string
    quotaUsed?: IntFilter<"ApiUsage"> | number
    ipHash?: StringNullableFilter<"ApiUsage"> | string | null
    timestamp?: DateTimeFilter<"ApiUsage"> | Date | string
  }

  export type UserSettingsUpsertWithoutUserInput = {
    update: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    where?: UserSettingsWhereInput
  }

  export type UserSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSettingsWhereInput
    data: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultPrivacy?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    defaultCategory?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    autoSaveDrafts?: BoolFieldUpdateOperationsInput | boolean
    rememberLastChannel?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultPrivacy?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    defaultCategory?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    autoSaveDrafts?: BoolFieldUpdateOperationsInput | boolean
    rememberLastChannel?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelCreateNestedManyWithoutUserInput
    videos?: VideoCreateNestedManyWithoutUserInput
    drafts?: VideoDraftCreateNestedManyWithoutUserInput
    templates?: VideoTemplateCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelUncheckedCreateNestedManyWithoutUserInput
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    drafts?: VideoDraftUncheckedCreateNestedManyWithoutUserInput
    templates?: VideoTemplateUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadUncheckedCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUpdateManyWithoutUserNestedInput
    videos?: VideoUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUncheckedUpdateManyWithoutUserNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUncheckedUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUncheckedUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelCreateNestedManyWithoutUserInput
    videos?: VideoCreateNestedManyWithoutUserInput
    drafts?: VideoDraftCreateNestedManyWithoutUserInput
    templates?: VideoTemplateCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelUncheckedCreateNestedManyWithoutUserInput
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    drafts?: VideoDraftUncheckedCreateNestedManyWithoutUserInput
    templates?: VideoTemplateUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadUncheckedCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUpdateManyWithoutUserNestedInput
    videos?: VideoUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUncheckedUpdateManyWithoutUserNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUncheckedUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUncheckedUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutChannelsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    videos?: VideoCreateNestedManyWithoutUserInput
    drafts?: VideoDraftCreateNestedManyWithoutUserInput
    templates?: VideoTemplateCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChannelsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    drafts?: VideoDraftUncheckedCreateNestedManyWithoutUserInput
    templates?: VideoTemplateUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadUncheckedCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChannelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
  }

  export type VideoCreateWithoutChannelInput = {
    id?: string
    youtubeId?: string | null
    title: string
    description: string
    tags?: VideoCreatetagsInput | string[]
    hashtags?: VideoCreatehashtagsInput | string[]
    categoryId?: string
    thumbnailUrl?: string | null
    thumbnailGcsUrl?: string | null
    videoGcsUrl?: string | null
    duration?: number | null
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    ageRestriction?: boolean
    license?: $Enums.License
    language?: string
    allowComments?: boolean
    allowEmbedding?: boolean
    publishToFeed?: boolean
    isPremiere?: boolean
    status?: $Enums.VideoStatus
    publishedAt?: Date | string | null
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutChannelInput = {
    id?: string
    youtubeId?: string | null
    userId: string
    title: string
    description: string
    tags?: VideoCreatetagsInput | string[]
    hashtags?: VideoCreatehashtagsInput | string[]
    categoryId?: string
    thumbnailUrl?: string | null
    thumbnailGcsUrl?: string | null
    videoGcsUrl?: string | null
    duration?: number | null
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    ageRestriction?: boolean
    license?: $Enums.License
    language?: string
    allowComments?: boolean
    allowEmbedding?: boolean
    publishToFeed?: boolean
    isPremiere?: boolean
    status?: $Enums.VideoStatus
    publishedAt?: Date | string | null
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoCreateOrConnectWithoutChannelInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutChannelInput, VideoUncheckedCreateWithoutChannelInput>
  }

  export type VideoCreateManyChannelInputEnvelope = {
    data: VideoCreateManyChannelInput | VideoCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type ScheduledUploadCreateWithoutChannelInput = {
    id?: string
    title: string
    description: string
    tags?: ScheduledUploadCreatetagsInput | string[]
    categoryId?: string
    privacyStatus: $Enums.PrivacyStatus
    videoFileName: string
    videoFileSize: bigint | number
    videoGcsUrl: string
    thumbnailGcsUrl?: string | null
    scheduledFor: Date | string
    timezone?: string
    status?: $Enums.ScheduleStatus
    youtubeId?: string | null
    error?: string | null
    attempts?: number
    lastAttemptAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduledUploadUncheckedCreateWithoutChannelInput = {
    id?: string
    userId: string
    title: string
    description: string
    tags?: ScheduledUploadCreatetagsInput | string[]
    categoryId?: string
    privacyStatus: $Enums.PrivacyStatus
    videoFileName: string
    videoFileSize: bigint | number
    videoGcsUrl: string
    thumbnailGcsUrl?: string | null
    scheduledFor: Date | string
    timezone?: string
    status?: $Enums.ScheduleStatus
    youtubeId?: string | null
    error?: string | null
    attempts?: number
    lastAttemptAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledUploadCreateOrConnectWithoutChannelInput = {
    where: ScheduledUploadWhereUniqueInput
    create: XOR<ScheduledUploadCreateWithoutChannelInput, ScheduledUploadUncheckedCreateWithoutChannelInput>
  }

  export type ScheduledUploadCreateManyChannelInputEnvelope = {
    data: ScheduledUploadCreateManyChannelInput | ScheduledUploadCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type ChannelAnalyticsCreateWithoutChannelInput = {
    id?: string
    date: Date | string
    views?: bigint | number
    subscribers?: number
    subscribersGained?: number
    subscribersLost?: number
    watchTimeMinutes?: bigint | number
    likes?: number
    comments?: number
    shares?: number
    estimatedRevenue?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type ChannelAnalyticsUncheckedCreateWithoutChannelInput = {
    id?: string
    date: Date | string
    views?: bigint | number
    subscribers?: number
    subscribersGained?: number
    subscribersLost?: number
    watchTimeMinutes?: bigint | number
    likes?: number
    comments?: number
    shares?: number
    estimatedRevenue?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type ChannelAnalyticsCreateOrConnectWithoutChannelInput = {
    where: ChannelAnalyticsWhereUniqueInput
    create: XOR<ChannelAnalyticsCreateWithoutChannelInput, ChannelAnalyticsUncheckedCreateWithoutChannelInput>
  }

  export type ChannelAnalyticsCreateManyChannelInputEnvelope = {
    data: ChannelAnalyticsCreateManyChannelInput | ChannelAnalyticsCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChannelsInput = {
    update: XOR<UserUpdateWithoutChannelsInput, UserUncheckedUpdateWithoutChannelsInput>
    create: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChannelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChannelsInput, UserUncheckedUpdateWithoutChannelsInput>
  }

  export type UserUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    videos?: VideoUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUncheckedUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUncheckedUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type VideoUpsertWithWhereUniqueWithoutChannelInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutChannelInput, VideoUncheckedUpdateWithoutChannelInput>
    create: XOR<VideoCreateWithoutChannelInput, VideoUncheckedCreateWithoutChannelInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutChannelInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutChannelInput, VideoUncheckedUpdateWithoutChannelInput>
  }

  export type VideoUpdateManyWithWhereWithoutChannelInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutChannelInput>
  }

  export type ScheduledUploadUpsertWithWhereUniqueWithoutChannelInput = {
    where: ScheduledUploadWhereUniqueInput
    update: XOR<ScheduledUploadUpdateWithoutChannelInput, ScheduledUploadUncheckedUpdateWithoutChannelInput>
    create: XOR<ScheduledUploadCreateWithoutChannelInput, ScheduledUploadUncheckedCreateWithoutChannelInput>
  }

  export type ScheduledUploadUpdateWithWhereUniqueWithoutChannelInput = {
    where: ScheduledUploadWhereUniqueInput
    data: XOR<ScheduledUploadUpdateWithoutChannelInput, ScheduledUploadUncheckedUpdateWithoutChannelInput>
  }

  export type ScheduledUploadUpdateManyWithWhereWithoutChannelInput = {
    where: ScheduledUploadScalarWhereInput
    data: XOR<ScheduledUploadUpdateManyMutationInput, ScheduledUploadUncheckedUpdateManyWithoutChannelInput>
  }

  export type ChannelAnalyticsUpsertWithWhereUniqueWithoutChannelInput = {
    where: ChannelAnalyticsWhereUniqueInput
    update: XOR<ChannelAnalyticsUpdateWithoutChannelInput, ChannelAnalyticsUncheckedUpdateWithoutChannelInput>
    create: XOR<ChannelAnalyticsCreateWithoutChannelInput, ChannelAnalyticsUncheckedCreateWithoutChannelInput>
  }

  export type ChannelAnalyticsUpdateWithWhereUniqueWithoutChannelInput = {
    where: ChannelAnalyticsWhereUniqueInput
    data: XOR<ChannelAnalyticsUpdateWithoutChannelInput, ChannelAnalyticsUncheckedUpdateWithoutChannelInput>
  }

  export type ChannelAnalyticsUpdateManyWithWhereWithoutChannelInput = {
    where: ChannelAnalyticsScalarWhereInput
    data: XOR<ChannelAnalyticsUpdateManyMutationInput, ChannelAnalyticsUncheckedUpdateManyWithoutChannelInput>
  }

  export type ChannelAnalyticsScalarWhereInput = {
    AND?: ChannelAnalyticsScalarWhereInput | ChannelAnalyticsScalarWhereInput[]
    OR?: ChannelAnalyticsScalarWhereInput[]
    NOT?: ChannelAnalyticsScalarWhereInput | ChannelAnalyticsScalarWhereInput[]
    id?: StringFilter<"ChannelAnalytics"> | string
    channelId?: StringFilter<"ChannelAnalytics"> | string
    date?: DateTimeFilter<"ChannelAnalytics"> | Date | string
    views?: BigIntFilter<"ChannelAnalytics"> | bigint | number
    subscribers?: IntFilter<"ChannelAnalytics"> | number
    subscribersGained?: IntFilter<"ChannelAnalytics"> | number
    subscribersLost?: IntFilter<"ChannelAnalytics"> | number
    watchTimeMinutes?: BigIntFilter<"ChannelAnalytics"> | bigint | number
    likes?: IntFilter<"ChannelAnalytics"> | number
    comments?: IntFilter<"ChannelAnalytics"> | number
    shares?: IntFilter<"ChannelAnalytics"> | number
    estimatedRevenue?: DecimalNullableFilter<"ChannelAnalytics"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"ChannelAnalytics"> | Date | string
  }

  export type UserCreateWithoutVideosInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelCreateNestedManyWithoutUserInput
    drafts?: VideoDraftCreateNestedManyWithoutUserInput
    templates?: VideoTemplateCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVideosInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelUncheckedCreateNestedManyWithoutUserInput
    drafts?: VideoDraftUncheckedCreateNestedManyWithoutUserInput
    templates?: VideoTemplateUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadUncheckedCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVideosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
  }

  export type YouTubeChannelCreateWithoutVideosInput = {
    id: string
    title: string
    description?: string | null
    customUrl?: string | null
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    subscriberCount?: bigint | number
    videoCount?: number
    viewCount?: bigint | number
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    accountEmail?: string | null
    accountName?: string | null
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: Date | string
    lastSyncAt?: Date | string | null
    user: UserCreateNestedOneWithoutChannelsInput
    schedules?: ScheduledUploadCreateNestedManyWithoutChannelInput
    analytics?: ChannelAnalyticsCreateNestedManyWithoutChannelInput
  }

  export type YouTubeChannelUncheckedCreateWithoutVideosInput = {
    id: string
    userId: string
    title: string
    description?: string | null
    customUrl?: string | null
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    subscriberCount?: bigint | number
    videoCount?: number
    viewCount?: bigint | number
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    accountEmail?: string | null
    accountName?: string | null
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: Date | string
    lastSyncAt?: Date | string | null
    schedules?: ScheduledUploadUncheckedCreateNestedManyWithoutChannelInput
    analytics?: ChannelAnalyticsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type YouTubeChannelCreateOrConnectWithoutVideosInput = {
    where: YouTubeChannelWhereUniqueInput
    create: XOR<YouTubeChannelCreateWithoutVideosInput, YouTubeChannelUncheckedCreateWithoutVideosInput>
  }

  export type UserUpsertWithoutVideosInput = {
    update: XOR<UserUpdateWithoutVideosInput, UserUncheckedUpdateWithoutVideosInput>
    create: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVideosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVideosInput, UserUncheckedUpdateWithoutVideosInput>
  }

  export type UserUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUncheckedUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUncheckedUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUncheckedUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type YouTubeChannelUpsertWithoutVideosInput = {
    update: XOR<YouTubeChannelUpdateWithoutVideosInput, YouTubeChannelUncheckedUpdateWithoutVideosInput>
    create: XOR<YouTubeChannelCreateWithoutVideosInput, YouTubeChannelUncheckedCreateWithoutVideosInput>
    where?: YouTubeChannelWhereInput
  }

  export type YouTubeChannelUpdateToOneWithWhereWithoutVideosInput = {
    where?: YouTubeChannelWhereInput
    data: XOR<YouTubeChannelUpdateWithoutVideosInput, YouTubeChannelUncheckedUpdateWithoutVideosInput>
  }

  export type YouTubeChannelUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: BigIntFieldUpdateOperationsInput | bigint | number
    videoCount?: IntFieldUpdateOperationsInput | number
    viewCount?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountEmail?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isBrandAccount?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutChannelsNestedInput
    schedules?: ScheduledUploadUpdateManyWithoutChannelNestedInput
    analytics?: ChannelAnalyticsUpdateManyWithoutChannelNestedInput
  }

  export type YouTubeChannelUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: BigIntFieldUpdateOperationsInput | bigint | number
    videoCount?: IntFieldUpdateOperationsInput | number
    viewCount?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountEmail?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isBrandAccount?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: ScheduledUploadUncheckedUpdateManyWithoutChannelNestedInput
    analytics?: ChannelAnalyticsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type UserCreateWithoutDraftsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelCreateNestedManyWithoutUserInput
    videos?: VideoCreateNestedManyWithoutUserInput
    templates?: VideoTemplateCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDraftsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelUncheckedCreateNestedManyWithoutUserInput
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    templates?: VideoTemplateUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadUncheckedCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDraftsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDraftsInput, UserUncheckedCreateWithoutDraftsInput>
  }

  export type UserUpsertWithoutDraftsInput = {
    update: XOR<UserUpdateWithoutDraftsInput, UserUncheckedUpdateWithoutDraftsInput>
    create: XOR<UserCreateWithoutDraftsInput, UserUncheckedCreateWithoutDraftsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDraftsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDraftsInput, UserUncheckedUpdateWithoutDraftsInput>
  }

  export type UserUpdateWithoutDraftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUpdateManyWithoutUserNestedInput
    videos?: VideoUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDraftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUncheckedUpdateManyWithoutUserNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUncheckedUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutTemplatesInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelCreateNestedManyWithoutUserInput
    videos?: VideoCreateNestedManyWithoutUserInput
    drafts?: VideoDraftCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTemplatesInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelUncheckedCreateNestedManyWithoutUserInput
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    drafts?: VideoDraftUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadUncheckedCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
  }

  export type UserUpsertWithoutTemplatesInput = {
    update: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUpdateManyWithoutUserNestedInput
    videos?: VideoUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUncheckedUpdateManyWithoutUserNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUncheckedUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSchedulesInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelCreateNestedManyWithoutUserInput
    videos?: VideoCreateNestedManyWithoutUserInput
    drafts?: VideoDraftCreateNestedManyWithoutUserInput
    templates?: VideoTemplateCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSchedulesInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelUncheckedCreateNestedManyWithoutUserInput
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    drafts?: VideoDraftUncheckedCreateNestedManyWithoutUserInput
    templates?: VideoTemplateUncheckedCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSchedulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
  }

  export type YouTubeChannelCreateWithoutSchedulesInput = {
    id: string
    title: string
    description?: string | null
    customUrl?: string | null
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    subscriberCount?: bigint | number
    videoCount?: number
    viewCount?: bigint | number
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    accountEmail?: string | null
    accountName?: string | null
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: Date | string
    lastSyncAt?: Date | string | null
    user: UserCreateNestedOneWithoutChannelsInput
    videos?: VideoCreateNestedManyWithoutChannelInput
    analytics?: ChannelAnalyticsCreateNestedManyWithoutChannelInput
  }

  export type YouTubeChannelUncheckedCreateWithoutSchedulesInput = {
    id: string
    userId: string
    title: string
    description?: string | null
    customUrl?: string | null
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    subscriberCount?: bigint | number
    videoCount?: number
    viewCount?: bigint | number
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    accountEmail?: string | null
    accountName?: string | null
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: Date | string
    lastSyncAt?: Date | string | null
    videos?: VideoUncheckedCreateNestedManyWithoutChannelInput
    analytics?: ChannelAnalyticsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type YouTubeChannelCreateOrConnectWithoutSchedulesInput = {
    where: YouTubeChannelWhereUniqueInput
    create: XOR<YouTubeChannelCreateWithoutSchedulesInput, YouTubeChannelUncheckedCreateWithoutSchedulesInput>
  }

  export type UserUpsertWithoutSchedulesInput = {
    update: XOR<UserUpdateWithoutSchedulesInput, UserUncheckedUpdateWithoutSchedulesInput>
    create: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSchedulesInput, UserUncheckedUpdateWithoutSchedulesInput>
  }

  export type UserUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUpdateManyWithoutUserNestedInput
    videos?: VideoUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUncheckedUpdateManyWithoutUserNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUncheckedUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUncheckedUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type YouTubeChannelUpsertWithoutSchedulesInput = {
    update: XOR<YouTubeChannelUpdateWithoutSchedulesInput, YouTubeChannelUncheckedUpdateWithoutSchedulesInput>
    create: XOR<YouTubeChannelCreateWithoutSchedulesInput, YouTubeChannelUncheckedCreateWithoutSchedulesInput>
    where?: YouTubeChannelWhereInput
  }

  export type YouTubeChannelUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: YouTubeChannelWhereInput
    data: XOR<YouTubeChannelUpdateWithoutSchedulesInput, YouTubeChannelUncheckedUpdateWithoutSchedulesInput>
  }

  export type YouTubeChannelUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: BigIntFieldUpdateOperationsInput | bigint | number
    videoCount?: IntFieldUpdateOperationsInput | number
    viewCount?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountEmail?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isBrandAccount?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutChannelsNestedInput
    videos?: VideoUpdateManyWithoutChannelNestedInput
    analytics?: ChannelAnalyticsUpdateManyWithoutChannelNestedInput
  }

  export type YouTubeChannelUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: BigIntFieldUpdateOperationsInput | bigint | number
    videoCount?: IntFieldUpdateOperationsInput | number
    viewCount?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountEmail?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isBrandAccount?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    videos?: VideoUncheckedUpdateManyWithoutChannelNestedInput
    analytics?: ChannelAnalyticsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type YouTubeChannelCreateWithoutAnalyticsInput = {
    id: string
    title: string
    description?: string | null
    customUrl?: string | null
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    subscriberCount?: bigint | number
    videoCount?: number
    viewCount?: bigint | number
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    accountEmail?: string | null
    accountName?: string | null
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: Date | string
    lastSyncAt?: Date | string | null
    user: UserCreateNestedOneWithoutChannelsInput
    videos?: VideoCreateNestedManyWithoutChannelInput
    schedules?: ScheduledUploadCreateNestedManyWithoutChannelInput
  }

  export type YouTubeChannelUncheckedCreateWithoutAnalyticsInput = {
    id: string
    userId: string
    title: string
    description?: string | null
    customUrl?: string | null
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    subscriberCount?: bigint | number
    videoCount?: number
    viewCount?: bigint | number
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    accountEmail?: string | null
    accountName?: string | null
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: Date | string
    lastSyncAt?: Date | string | null
    videos?: VideoUncheckedCreateNestedManyWithoutChannelInput
    schedules?: ScheduledUploadUncheckedCreateNestedManyWithoutChannelInput
  }

  export type YouTubeChannelCreateOrConnectWithoutAnalyticsInput = {
    where: YouTubeChannelWhereUniqueInput
    create: XOR<YouTubeChannelCreateWithoutAnalyticsInput, YouTubeChannelUncheckedCreateWithoutAnalyticsInput>
  }

  export type YouTubeChannelUpsertWithoutAnalyticsInput = {
    update: XOR<YouTubeChannelUpdateWithoutAnalyticsInput, YouTubeChannelUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<YouTubeChannelCreateWithoutAnalyticsInput, YouTubeChannelUncheckedCreateWithoutAnalyticsInput>
    where?: YouTubeChannelWhereInput
  }

  export type YouTubeChannelUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: YouTubeChannelWhereInput
    data: XOR<YouTubeChannelUpdateWithoutAnalyticsInput, YouTubeChannelUncheckedUpdateWithoutAnalyticsInput>
  }

  export type YouTubeChannelUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: BigIntFieldUpdateOperationsInput | bigint | number
    videoCount?: IntFieldUpdateOperationsInput | number
    viewCount?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountEmail?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isBrandAccount?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutChannelsNestedInput
    videos?: VideoUpdateManyWithoutChannelNestedInput
    schedules?: ScheduledUploadUpdateManyWithoutChannelNestedInput
  }

  export type YouTubeChannelUncheckedUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: BigIntFieldUpdateOperationsInput | bigint | number
    videoCount?: IntFieldUpdateOperationsInput | number
    viewCount?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountEmail?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isBrandAccount?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    videos?: VideoUncheckedUpdateManyWithoutChannelNestedInput
    schedules?: ScheduledUploadUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type UserCreateWithoutSettingsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelCreateNestedManyWithoutUserInput
    videos?: VideoCreateNestedManyWithoutUserInput
    drafts?: VideoDraftCreateNestedManyWithoutUserInput
    templates?: VideoTemplateCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelUncheckedCreateNestedManyWithoutUserInput
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    drafts?: VideoDraftUncheckedCreateNestedManyWithoutUserInput
    templates?: VideoTemplateUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadUncheckedCreateNestedManyWithoutUserInput
    apiUsage?: ApiUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUpdateManyWithoutUserNestedInput
    videos?: VideoUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUncheckedUpdateManyWithoutUserNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUncheckedUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUncheckedUpdateManyWithoutUserNestedInput
    apiUsage?: ApiUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutApiUsageInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelCreateNestedManyWithoutUserInput
    videos?: VideoCreateNestedManyWithoutUserInput
    drafts?: VideoDraftCreateNestedManyWithoutUserInput
    templates?: VideoTemplateCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiUsageInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    channels?: YouTubeChannelUncheckedCreateNestedManyWithoutUserInput
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    drafts?: VideoDraftUncheckedCreateNestedManyWithoutUserInput
    templates?: VideoTemplateUncheckedCreateNestedManyWithoutUserInput
    schedules?: ScheduledUploadUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiUsageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiUsageInput, UserUncheckedCreateWithoutApiUsageInput>
  }

  export type UserUpsertWithoutApiUsageInput = {
    update: XOR<UserUpdateWithoutApiUsageInput, UserUncheckedUpdateWithoutApiUsageInput>
    create: XOR<UserCreateWithoutApiUsageInput, UserUncheckedCreateWithoutApiUsageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiUsageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiUsageInput, UserUncheckedUpdateWithoutApiUsageInput>
  }

  export type UserUpdateWithoutApiUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUpdateManyWithoutUserNestedInput
    videos?: VideoUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    channels?: YouTubeChannelUncheckedUpdateManyWithoutUserNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    drafts?: VideoDraftUncheckedUpdateManyWithoutUserNestedInput
    templates?: VideoTemplateUncheckedUpdateManyWithoutUserNestedInput
    schedules?: ScheduledUploadUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type YouTubeChannelCreateManyUserInput = {
    id: string
    title: string
    description?: string | null
    customUrl?: string | null
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    subscriberCount?: bigint | number
    videoCount?: number
    viewCount?: bigint | number
    accessToken: string
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    accountEmail?: string | null
    accountName?: string | null
    isBrandAccount?: boolean
    isActive?: boolean
    connectedAt?: Date | string
    lastSyncAt?: Date | string | null
  }

  export type VideoCreateManyUserInput = {
    id?: string
    youtubeId?: string | null
    channelId: string
    title: string
    description: string
    tags?: VideoCreatetagsInput | string[]
    hashtags?: VideoCreatehashtagsInput | string[]
    categoryId?: string
    thumbnailUrl?: string | null
    thumbnailGcsUrl?: string | null
    videoGcsUrl?: string | null
    duration?: number | null
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    ageRestriction?: boolean
    license?: $Enums.License
    language?: string
    allowComments?: boolean
    allowEmbedding?: boolean
    publishToFeed?: boolean
    isPremiere?: boolean
    status?: $Enums.VideoStatus
    publishedAt?: Date | string | null
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoDraftCreateManyUserInput = {
    id?: string
    name: string
    title: string
    description: string
    tags?: VideoDraftCreatetagsInput | string[]
    hashtags?: VideoDraftCreatehashtagsInput | string[]
    categoryId?: string
    privacyStatus?: $Enums.PrivacyStatus
    thumbnailData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoTemplateCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    titleTemplate: string
    descTemplate: string
    tags?: VideoTemplateCreatetagsInput | string[]
    hashtags?: VideoTemplateCreatehashtagsInput | string[]
    categoryId?: string
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    license?: $Enums.License
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledUploadCreateManyUserInput = {
    id?: string
    channelId: string
    title: string
    description: string
    tags?: ScheduledUploadCreatetagsInput | string[]
    categoryId?: string
    privacyStatus: $Enums.PrivacyStatus
    videoFileName: string
    videoFileSize: bigint | number
    videoGcsUrl: string
    thumbnailGcsUrl?: string | null
    scheduledFor: Date | string
    timezone?: string
    status?: $Enums.ScheduleStatus
    youtubeId?: string | null
    error?: string | null
    attempts?: number
    lastAttemptAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiUsageCreateManyUserInput = {
    id?: string
    endpoint: string
    method: string
    quotaUsed?: number
    ipHash?: string | null
    timestamp?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YouTubeChannelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: BigIntFieldUpdateOperationsInput | bigint | number
    videoCount?: IntFieldUpdateOperationsInput | number
    viewCount?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountEmail?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isBrandAccount?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    videos?: VideoUpdateManyWithoutChannelNestedInput
    schedules?: ScheduledUploadUpdateManyWithoutChannelNestedInput
    analytics?: ChannelAnalyticsUpdateManyWithoutChannelNestedInput
  }

  export type YouTubeChannelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: BigIntFieldUpdateOperationsInput | bigint | number
    videoCount?: IntFieldUpdateOperationsInput | number
    viewCount?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountEmail?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isBrandAccount?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    videos?: VideoUncheckedUpdateManyWithoutChannelNestedInput
    schedules?: ScheduledUploadUncheckedUpdateManyWithoutChannelNestedInput
    analytics?: ChannelAnalyticsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type YouTubeChannelUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: BigIntFieldUpdateOperationsInput | bigint | number
    videoCount?: IntFieldUpdateOperationsInput | number
    viewCount?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountEmail?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isBrandAccount?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VideoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoUpdatetagsInput | string[]
    hashtags?: VideoUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    ageRestriction?: BoolFieldUpdateOperationsInput | boolean
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowEmbedding?: BoolFieldUpdateOperationsInput | boolean
    publishToFeed?: BoolFieldUpdateOperationsInput | boolean
    isPremiere?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: YouTubeChannelUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoUpdatetagsInput | string[]
    hashtags?: VideoUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    ageRestriction?: BoolFieldUpdateOperationsInput | boolean
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowEmbedding?: BoolFieldUpdateOperationsInput | boolean
    publishToFeed?: BoolFieldUpdateOperationsInput | boolean
    isPremiere?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoUpdatetagsInput | string[]
    hashtags?: VideoUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    ageRestriction?: BoolFieldUpdateOperationsInput | boolean
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowEmbedding?: BoolFieldUpdateOperationsInput | boolean
    publishToFeed?: BoolFieldUpdateOperationsInput | boolean
    isPremiere?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoDraftUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoDraftUpdatetagsInput | string[]
    hashtags?: VideoDraftUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    thumbnailData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoDraftUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoDraftUpdatetagsInput | string[]
    hashtags?: VideoDraftUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    thumbnailData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoDraftUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoDraftUpdatetagsInput | string[]
    hashtags?: VideoDraftUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    thumbnailData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoTemplateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    titleTemplate?: StringFieldUpdateOperationsInput | string
    descTemplate?: StringFieldUpdateOperationsInput | string
    tags?: VideoTemplateUpdatetagsInput | string[]
    hashtags?: VideoTemplateUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoTemplateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    titleTemplate?: StringFieldUpdateOperationsInput | string
    descTemplate?: StringFieldUpdateOperationsInput | string
    tags?: VideoTemplateUpdatetagsInput | string[]
    hashtags?: VideoTemplateUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoTemplateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    titleTemplate?: StringFieldUpdateOperationsInput | string
    descTemplate?: StringFieldUpdateOperationsInput | string
    tags?: VideoTemplateUpdatetagsInput | string[]
    hashtags?: VideoTemplateUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledUploadUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: ScheduledUploadUpdatetagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    videoFileName?: StringFieldUpdateOperationsInput | string
    videoFileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    videoGcsUrl?: StringFieldUpdateOperationsInput | string
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: YouTubeChannelUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduledUploadUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: ScheduledUploadUpdatetagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    videoFileName?: StringFieldUpdateOperationsInput | string
    videoFileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    videoGcsUrl?: StringFieldUpdateOperationsInput | string
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledUploadUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: ScheduledUploadUpdatetagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    videoFileName?: StringFieldUpdateOperationsInput | string
    videoFileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    videoGcsUrl?: StringFieldUpdateOperationsInput | string
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    quotaUsed?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    quotaUsed?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUsageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    quotaUsed?: IntFieldUpdateOperationsInput | number
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateManyChannelInput = {
    id?: string
    youtubeId?: string | null
    userId: string
    title: string
    description: string
    tags?: VideoCreatetagsInput | string[]
    hashtags?: VideoCreatehashtagsInput | string[]
    categoryId?: string
    thumbnailUrl?: string | null
    thumbnailGcsUrl?: string | null
    videoGcsUrl?: string | null
    duration?: number | null
    privacyStatus?: $Enums.PrivacyStatus
    madeForKids?: $Enums.MadeForKids
    ageRestriction?: boolean
    license?: $Enums.License
    language?: string
    allowComments?: boolean
    allowEmbedding?: boolean
    publishToFeed?: boolean
    isPremiere?: boolean
    status?: $Enums.VideoStatus
    publishedAt?: Date | string | null
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledUploadCreateManyChannelInput = {
    id?: string
    userId: string
    title: string
    description: string
    tags?: ScheduledUploadCreatetagsInput | string[]
    categoryId?: string
    privacyStatus: $Enums.PrivacyStatus
    videoFileName: string
    videoFileSize: bigint | number
    videoGcsUrl: string
    thumbnailGcsUrl?: string | null
    scheduledFor: Date | string
    timezone?: string
    status?: $Enums.ScheduleStatus
    youtubeId?: string | null
    error?: string | null
    attempts?: number
    lastAttemptAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelAnalyticsCreateManyChannelInput = {
    id?: string
    date: Date | string
    views?: bigint | number
    subscribers?: number
    subscribersGained?: number
    subscribersLost?: number
    watchTimeMinutes?: bigint | number
    likes?: number
    comments?: number
    shares?: number
    estimatedRevenue?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type VideoUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoUpdatetagsInput | string[]
    hashtags?: VideoUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    ageRestriction?: BoolFieldUpdateOperationsInput | boolean
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowEmbedding?: BoolFieldUpdateOperationsInput | boolean
    publishToFeed?: BoolFieldUpdateOperationsInput | boolean
    isPremiere?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoUpdatetagsInput | string[]
    hashtags?: VideoUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    ageRestriction?: BoolFieldUpdateOperationsInput | boolean
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowEmbedding?: BoolFieldUpdateOperationsInput | boolean
    publishToFeed?: BoolFieldUpdateOperationsInput | boolean
    isPremiere?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: VideoUpdatetagsInput | string[]
    hashtags?: VideoUpdatehashtagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    madeForKids?: EnumMadeForKidsFieldUpdateOperationsInput | $Enums.MadeForKids
    ageRestriction?: BoolFieldUpdateOperationsInput | boolean
    license?: EnumLicenseFieldUpdateOperationsInput | $Enums.License
    language?: StringFieldUpdateOperationsInput | string
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowEmbedding?: BoolFieldUpdateOperationsInput | boolean
    publishToFeed?: BoolFieldUpdateOperationsInput | boolean
    isPremiere?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledUploadUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: ScheduledUploadUpdatetagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    videoFileName?: StringFieldUpdateOperationsInput | string
    videoFileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    videoGcsUrl?: StringFieldUpdateOperationsInput | string
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduledUploadUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: ScheduledUploadUpdatetagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    videoFileName?: StringFieldUpdateOperationsInput | string
    videoFileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    videoGcsUrl?: StringFieldUpdateOperationsInput | string
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledUploadUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: ScheduledUploadUpdatetagsInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    privacyStatus?: EnumPrivacyStatusFieldUpdateOperationsInput | $Enums.PrivacyStatus
    videoFileName?: StringFieldUpdateOperationsInput | string
    videoFileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    videoGcsUrl?: StringFieldUpdateOperationsInput | string
    thumbnailGcsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    youtubeId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelAnalyticsUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: BigIntFieldUpdateOperationsInput | bigint | number
    subscribers?: IntFieldUpdateOperationsInput | number
    subscribersGained?: IntFieldUpdateOperationsInput | number
    subscribersLost?: IntFieldUpdateOperationsInput | number
    watchTimeMinutes?: BigIntFieldUpdateOperationsInput | bigint | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    estimatedRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelAnalyticsUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: BigIntFieldUpdateOperationsInput | bigint | number
    subscribers?: IntFieldUpdateOperationsInput | number
    subscribersGained?: IntFieldUpdateOperationsInput | number
    subscribersLost?: IntFieldUpdateOperationsInput | number
    watchTimeMinutes?: BigIntFieldUpdateOperationsInput | bigint | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    estimatedRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelAnalyticsUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: BigIntFieldUpdateOperationsInput | bigint | number
    subscribers?: IntFieldUpdateOperationsInput | number
    subscribersGained?: IntFieldUpdateOperationsInput | number
    subscribersLost?: IntFieldUpdateOperationsInput | number
    watchTimeMinutes?: BigIntFieldUpdateOperationsInput | bigint | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    estimatedRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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