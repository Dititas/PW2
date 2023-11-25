
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id_user: 'id_user',
  name_user: 'name_user',
  lastName_user: 'lastName_user',
  age_user: 'age_user',
  email_user: 'email_user',
  password_user: 'password_user'
};

exports.Prisma.TravelScalarFieldEnum = {
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

exports.Prisma.BookingScalarFieldEnum = {
  id_booking: 'id_booking',
  idUser_booking: 'idUser_booking',
  idOutboundFlight_booking: 'idOutboundFlight_booking',
  idReturnFlight_booking: 'idReturnFlight_booking',
  reservationDate_booking: 'reservationDate_booking',
  amountPeople_booking: 'amountPeople_booking'
};

exports.Prisma.PurchaseScalarFieldEnum = {
  id_purchase: 'id_purchase',
  idUser_purchase: 'idUser_purchase',
  idTravel_purchase: 'idTravel_purchase',
  purchaseDate_purchase: 'purchaseDate_purchase',
  amount_purchase: 'amount_purchase',
  total_purchase: 'total_purchase',
  paymentMethod_purchase: 'paymentMethod_purchase'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Travel: 'Travel',
  Booking: 'Booking',
  Purchase: 'Purchase'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\xampp\\PW2\\PW2\\server\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "mysql://root:admin@localhost:3306/fastTraveler",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gc2NoZW1hLnByaXNtYQ0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gIi4vZ2VuZXJhdGVkL2NsaWVudCINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gIm15c3FsIiAvLyBDYW1iaWEgInBvc3RncmVzcWwiIHBvciAibXlzcWwiDQogIHVybCAgICAgID0gZW52KCJteXNxbDovL3Jvb3Q6YWRtaW5AbG9jYWxob3N0OjMzMDYvZmFzdFRyYXZlbGVyIikgLy8gUHVlZGVzIGVzcGVjaWZpY2FyIGxhIFVSTCBkZSBsYSBiYXNlIGRlIGRhdG9zIGFxdcOtDQp9DQoNCg0KLy8gRGVmaW5lIGVsIG1vZGVsbyBwYXJhIGxhIHRhYmxhIFVzZXINCm1vZGVsIFVzZXIgew0KICBpZF91c2VyICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZV91c2VyICAgICAgU3RyaW5nPw0KICBsYXN0TmFtZV91c2VyICBTdHJpbmc/DQogIGFnZV91c2VyICAgICAgIEludD8NCiAgZW1haWxfdXNlciAgICAgU3RyaW5nICAgIEB1bmlxdWUNCiAgcGFzc3dvcmRfdXNlciAgU3RyaW5nDQogIC8vIEHDsWFkZSBsYSByZWxhY2nDs24gaW52ZXJzYSBwYXJhIEJvb2tpbmcNCiAgQm9va2luZyAgICAgICAgQm9va2luZ1tdDQogIC8vIEHDsWFkZSBsYSByZWxhY2nDs24gaW52ZXJzYSBwYXJhIFB1cmNoYXNlDQogIFB1cmNoYXNlICAgICAgIFB1cmNoYXNlW10NCn0NCg0KLy8gRGVmaW5lIGVsIG1vZGVsbyBwYXJhIGxhIHRhYmxhIFRyYXZlbA0KbW9kZWwgVHJhdmVsIHsNCiAgaWRfdHJhdmVsICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBhaXJsaW5lX3RyYXZlbCAgICAgICAgU3RyaW5nPw0KICBmbGlnaHROdW1iZXJfdHJhdmVsICAgU3RyaW5nPw0KICBvcmlnaW5fdHJhdmVsICAgICAgICAgU3RyaW5nPw0KICBkZXN0aW5hdGlvbl90cmF2ZWwgICAgU3RyaW5nPw0KICBkZXBhcnR1cmVEYXRlX3RyYXZlbCAgRGF0ZVRpbWU/DQogIGFycml2YWxEYXRlX3RyYXZlbCAgICBEYXRlVGltZT8NCiAgcHJpY2VfdHJhdmVsICAgICAgICAgIEZsb2F0Pw0KICBkdXJhdGlvbl90cmF2ZWwgICAgICAgSW50Pw0KICAvLyBBw7FhZGUgbGEgcmVsYWNpw7NuIGludmVyc2EgcGFyYSBCb29raW5nIChpZGEpDQogIE91dGJvdW5kRmxpZ2h0ICAgICAgICBCb29raW5nW10gQHJlbGF0aW9uKCJPdXRib3VuZEZsaWdodCIpDQogIC8vIEHDsWFkZSBsYSByZWxhY2nDs24gaW52ZXJzYSBwYXJhIEJvb2tpbmcgKHZ1ZWx0YSkNCiAgUmV0dXJuRmxpZ2h0ICAgICAgICAgIEJvb2tpbmdbXSBAcmVsYXRpb24oIlJldHVybkZsaWdodCIpDQogIC8vIEHDsWFkZSBsYSByZWxhY2nDs24gaW52ZXJzYSBwYXJhIFB1cmNoYXNlDQogIFB1cmNoYXNlICAgICAgICAgICAgIFB1cmNoYXNlW10NCn0NCg0KLy8gRGVmaW5lIGVsIG1vZGVsbyBwYXJhIGxhIHRhYmxhIEJvb2tpbmcNCm1vZGVsIEJvb2tpbmcgew0KICBpZF9ib29raW5nICAgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGlkVXNlcl9ib29raW5nICAgICAgICAgICBJbnQ/DQogIGlkT3V0Ym91bmRGbGlnaHRfYm9va2luZyBJbnQ/DQogIGlkUmV0dXJuRmxpZ2h0X2Jvb2tpbmcgICBJbnQ/DQogIHJlc2VydmF0aW9uRGF0ZV9ib29raW5nICBEYXRlVGltZT8NCiAgYW1vdW50UGVvcGxlX2Jvb2tpbmcgICAgIEludD8NCiAgLy8gQcOxYWRlIGxhIHJlbGFjacOzbiBwYXJhIFVzZXINCiAgVXNlciAgICAgICAgICAgICAgICAgICAgICBVc2VyPyAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZFVzZXJfYm9va2luZ10sIHJlZmVyZW5jZXM6IFtpZF91c2VyXSkNCiAgLy8gQcOxYWRlIGxhIHJlbGFjacOzbiBwYXJhIFRyYXZlbCAoaWRhKQ0KICBPdXRib3VuZEZsaWdodCAgICAgICAgICAgIFRyYXZlbD8gICAgQHJlbGF0aW9uKCJPdXRib3VuZEZsaWdodCIsIGZpZWxkczogW2lkT3V0Ym91bmRGbGlnaHRfYm9va2luZ10sIHJlZmVyZW5jZXM6IFtpZF90cmF2ZWxdKQ0KICAvLyBBw7FhZGUgbGEgcmVsYWNpw7NuIHBhcmEgVHJhdmVsICh2dWVsdGEpDQogIFJldHVybkZsaWdodCAgICAgICAgICAgICAgVHJhdmVsPyAgICBAcmVsYXRpb24oIlJldHVybkZsaWdodCIsIGZpZWxkczogW2lkUmV0dXJuRmxpZ2h0X2Jvb2tpbmddLCByZWZlcmVuY2VzOiBbaWRfdHJhdmVsXSkNCn0NCg0KLy8gRGVmaW5lIGVsIG1vZGVsbyBwYXJhIGxhIHRhYmxhIFB1cmNoYXNlDQptb2RlbCBQdXJjaGFzZSB7DQogIGlkX3B1cmNoYXNlICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBpZFVzZXJfcHVyY2hhc2UgICAgICAgICBJbnQ/DQogIGlkVHJhdmVsX3B1cmNoYXNlICAgICAgIEludD8NCiAgcHVyY2hhc2VEYXRlX3B1cmNoYXNlICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQ0KICBhbW91bnRfcHVyY2hhc2UgICAgICAgICBJbnQ/DQogIHRvdGFsX3B1cmNoYXNlICAgICAgICAgIEZsb2F0Pw0KICBwYXltZW50TWV0aG9kX3B1cmNoYXNlICBTdHJpbmc/DQogIC8vIEHDsWFkZSBsYSByZWxhY2nDs24gcGFyYSBVc2VyDQogIFVzZXIgICAgICAgICAgICAgICAgICAgIFVzZXI/ICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkVXNlcl9wdXJjaGFzZV0sIHJlZmVyZW5jZXM6IFtpZF91c2VyXSkNCiAgLy8gQcOxYWRlIGxhIHJlbGFjacOzbiBwYXJhIFRyYXZlbA0KICBUcmF2ZWwgICAgICAgICAgICAgICAgICBUcmF2ZWw/ICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZFRyYXZlbF9wdXJjaGFzZV0sIHJlZmVyZW5jZXM6IFtpZF90cmF2ZWxdKQ0KfQ==",
  "inlineSchemaHash": "a0b8a50bb1de948862c8b1d05a0a27d3d16ab192fcf3e91adcae1b9fb281873a",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/client",
    "client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"age_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Booking\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Booking\",\"relationName\":\"BookingToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Purchase\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Purchase\",\"relationName\":\"PurchaseToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Travel\":{\"dbName\":null,\"fields\":[{\"name\":\"id_travel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"airline_travel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"flightNumber_travel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"origin_travel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destination_travel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departureDate_travel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arrivalDate_travel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price_travel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration_travel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OutboundFlight\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Booking\",\"relationName\":\"OutboundFlight\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ReturnFlight\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Booking\",\"relationName\":\"ReturnFlight\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Purchase\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Purchase\",\"relationName\":\"PurchaseToTravel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Booking\":{\"dbName\":null,\"fields\":[{\"name\":\"id_booking\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idUser_booking\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idOutboundFlight_booking\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idReturnFlight_booking\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservationDate_booking\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amountPeople_booking\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BookingToUser\",\"relationFromFields\":[\"idUser_booking\"],\"relationToFields\":[\"id_user\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OutboundFlight\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Travel\",\"relationName\":\"OutboundFlight\",\"relationFromFields\":[\"idOutboundFlight_booking\"],\"relationToFields\":[\"id_travel\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ReturnFlight\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Travel\",\"relationName\":\"ReturnFlight\",\"relationFromFields\":[\"idReturnFlight_booking\"],\"relationToFields\":[\"id_travel\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Purchase\":{\"dbName\":null,\"fields\":[{\"name\":\"id_purchase\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idUser_purchase\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idTravel_purchase\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purchaseDate_purchase\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount_purchase\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_purchase\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentMethod_purchase\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PurchaseToUser\",\"relationFromFields\":[\"idUser_purchase\"],\"relationToFields\":[\"id_user\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Travel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Travel\",\"relationName\":\"PurchaseToTravel\",\"relationFromFields\":[\"idTravel_purchase\"],\"relationToFields\":[\"id_travel\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/client/schema.prisma")
