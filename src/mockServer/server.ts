import { createServer, Factory, Model } from "miragejs";
import { faker } from "@faker-js/faker";

type ProductType = {
  id: string;
  name: string;
  desc: string;
  price: string;
  popular: boolean;
};

export function makeServer({ environment = "test" } = {}) {
  return createServer({
    environment,
    models: {
      product: Model,
    },

    factories: {
      product: Factory.extend<ProductType>({
        id(i) {
          return faker.string.nanoid();
        },
        name(i) {
          return faker.commerce.productName();
        },
        price(i) {
          return faker.commerce.price({ max: 20000, min: 2000, dec: 0 });
        },
        popular(i) {
          return faker.datatype.boolean();
        },
        desc(i) {
          return faker.commerce.productDescription();
        },
      }),
    },

    seeds(_server) {
      _server.createList("product", 10);
      console.log("server", _server.db.dump());
    },

    routes() {
      this.passthrough();
      this.namespace = "api";
      this.get(
        "/products",
        (schema, request) => {
          const { filter } = request.queryParams;
          return schema.all("product");
        },
        { timing: 1000 }
      );
    },
  });
}
