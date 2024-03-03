import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 22, end: 30 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 31, end: 33 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 35, end: 37 },
                  },
                  loc: { start: 35, end: 37 },
                },
                loc: { start: 35, end: 38 },
              },
              directives: [],
              loc: { start: 31, end: 38 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 41, end: 49 },
            },
            loc: { start: 41, end: 49 },
          },
          directives: [],
          loc: { start: 22, end: 49 },
        },
      ],
      loc: { start: 0, end: 51 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Category", loc: { start: 58, end: 66 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 71, end: 73 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ID", loc: { start: 75, end: 77 } },
              loc: { start: 75, end: 77 },
            },
            loc: { start: 75, end: 78 },
          },
          directives: [],
          loc: { start: 71, end: 78 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 81, end: 92 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 94, end: 100 },
              },
              loc: { start: 94, end: 100 },
            },
            loc: { start: 94, end: 101 },
          },
          directives: [],
          loc: { start: 81, end: 101 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 104, end: 108 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 110, end: 116 },
              },
              loc: { start: 110, end: 116 },
            },
            loc: { start: 110, end: 117 },
          },
          directives: [],
          loc: { start: 104, end: 117 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 120, end: 128 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 131, end: 138 },
                  },
                  loc: { start: 131, end: 138 },
                },
                loc: { start: 131, end: 139 },
              },
              loc: { start: 130, end: 140 },
            },
            loc: { start: 130, end: 141 },
          },
          directives: [],
          loc: { start: 120, end: 141 },
        },
      ],
      loc: { start: 53, end: 143 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 156, end: 161 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "productsByCategory",
            loc: { start: 166, end: 184 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "categoryId",
                loc: { start: 185, end: 195 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 197, end: 199 },
                  },
                  loc: { start: 197, end: 199 },
                },
                loc: { start: 197, end: 200 },
              },
              directives: [],
              loc: { start: 185, end: 200 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 204, end: 211 },
                  },
                  loc: { start: 204, end: 211 },
                },
                loc: { start: 204, end: 212 },
              },
              loc: { start: 203, end: 213 },
            },
            loc: { start: 203, end: 214 },
          },
          directives: [],
          loc: { start: 166, end: 214 },
        },
      ],
      loc: { start: 144, end: 216 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 229, end: 234 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 239, end: 246 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 247, end: 249 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 251, end: 253 },
                  },
                  loc: { start: 251, end: 253 },
                },
                loc: { start: 251, end: 254 },
              },
              directives: [],
              loc: { start: 247, end: 254 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 257, end: 264 },
            },
            loc: { start: 257, end: 264 },
          },
          directives: [],
          loc: { start: 239, end: 264 },
        },
      ],
      loc: { start: 217, end: 266 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 273, end: 280 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 285, end: 287 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 289, end: 291 },
              },
              loc: { start: 289, end: 291 },
            },
            loc: { start: 289, end: 292 },
          },
          directives: [],
          loc: { start: 285, end: 292 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 295, end: 299 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 301, end: 307 },
              },
              loc: { start: 301, end: 307 },
            },
            loc: { start: 301, end: 308 },
          },
          directives: [],
          loc: { start: 295, end: 308 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 311, end: 315 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 317, end: 323 },
              },
              loc: { start: 317, end: 323 },
            },
            loc: { start: 317, end: 324 },
          },
          directives: [],
          loc: { start: 311, end: 324 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 327, end: 338 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 340, end: 346 },
              },
              loc: { start: 340, end: 346 },
            },
            loc: { start: 340, end: 347 },
          },
          directives: [],
          loc: { start: 327, end: 347 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 350, end: 355 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 357, end: 360 },
              },
              loc: { start: 357, end: 360 },
            },
            loc: { start: 357, end: 361 },
          },
          directives: [],
          loc: { start: 350, end: 361 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 364, end: 372 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Category",
                  loc: { start: 375, end: 383 },
                },
                loc: { start: 375, end: 383 },
              },
              loc: { start: 375, end: 384 },
            },
            loc: { start: 374, end: 385 },
          },
          directives: [],
          loc: { start: 364, end: 385 },
        },
      ],
      loc: { start: 268, end: 387 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 393, end: 398 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 388, end: 398 },
    },
  ],
  loc: { start: 0, end: 399 },
} as unknown as DocumentNode;
