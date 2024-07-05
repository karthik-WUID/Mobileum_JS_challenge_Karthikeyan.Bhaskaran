export class Smartphone {
  private _id: number;
  private _name: string;
  private _brand: string;
  private _description: string;
  private _image: string | null;

  constructor(
    id: number,
    name: string,
    brand: string,
    image: string | null,
    description: string
  ) {
    this._id = id;
    this._name = name;
    this._brand = brand;
    this._image = image;
    this._description = description;
  }
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get brand() {
    return this._brand;
  }

  get image() {
    return this._image;
  }

  get description() {
    return this._description;
  }
}

let smartPhones: Smartphone[] = [
  new Smartphone(
    1,
    "IPHONE 15",
    "Apple",
    "https://www.reliancedigital.in/medias/Apple-iPhone-15-128GB-Blue-493839312-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oMjAvaDU2LzEwMDUyMDgyMTM5MTY2LmpwZ3wzZmJmYzllMGQwMjg5ZTI2NTI0MGI1NGZmNGMzYTM1NDAxYzgyZDdjY2RkNjdhOTRjNGJjOTQyN2U3NTVlYTY0",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt diam, non pellentesque est ultricies ac. Aliquam erat volutpat. Aliquam a lacus lorem. Aenean eu ligula at lorem porttitor fermentum luctus et metus."
  ),
  new Smartphone(
    2,
    "Xiaomi Redmi A2 Plus",
    "ONEPLUS",
    "https://www.reliancedigital.in/medias/Redmi-A2-Plus-493838650-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjI3OTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDRlL2hhYS8xMDA1ODk1MzcxOTgzOC5qcGd8ZjQxYTYwODAxNWUwMTNiODkxY2I5MzUyZjE2NDc5M2YxMWY2NjNjNzQ0ZTk5ZmQ5N2U4YTEzNTY4YTlhZDllNw",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt diam, non pellentesque est ultricies ac. Aliquam erat volutpat. Aliquam a lacus lorem. Aenean eu ligula at lorem porttitor fermentum luctus et metus."
  ),
  new Smartphone(
    3,
    "Realme C55 DLC 64GB",
    "REALME",
    "https://www.reliancedigital.in/medias/Realme-C55-MobilePhone-494267979-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDE0NjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDIwL2gwNy8xMDA1OTQ2NzQyMzc3NC5qcGd8MjY2MDg1MjUxYTVmMzY1OWU5YWY1MmFlMjIzZDZmNWM3YmU3MjU3OWQ2YTc5ZTY2ZjE3MzdmNzhhYzllMzMzYQ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt diam, non pellentesque est ultricies ac. Aliquam erat volutpat. Aliquam a lacus lorem. Aenean eu ligula at lorem porttitor fermentum luctus et metus."
  ),
  new Smartphone(
    4,
    "IPhone 11",
    "Apple",
    "https://d1eh9yux7w8iql.cloudfront.net/product_images/290068_07562224-72df-4a97-8655-a335db1f4a34.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt diam, non pellentesque est ultricies ac. Aliquam erat volutpat. Aliquam a lacus lorem. Aenean eu ligula at lorem porttitor fermentum luctus et metus."
  ),
  new Smartphone(
    5,
    "Vivo Y02T 4 GB RAM 64 GB",
    "VIVO",
    "https://www.reliancedigital.in/medias/Vivo-Y-Series-Gold-493838075-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NDA3NXxpbWFnZS9qcGVnfGltYWdlcy9oN2QvaDdjLzEwMDA4NDkwOTAxNTM0LmpwZ3w4ZTYyZTNjNzlhMTQzMGIwODE2ZjNiMDZiZjJiYzU5MDYzNzAzN2E4ZjVmZmZlNjg3MjBhMWY4ZTU5MWQ5Yzc2",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt diam, non pellentesque est ultricies ac. Aliquam erat volutpat. Aliquam a lacus lorem. Aenean eu ligula at lorem porttitor fermentum luctus et metus."
  ),
  new Smartphone(
    6,
    "Samsung S21 FE 5G 256 GB",
    "SAMSUNG",
    "https://www.reliancedigital.in/medias/Samsung-S21-FE-Smartphones-493838389-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NDg0NjR8aW1hZ2UvanBlZ3xpbWFnZXMvaGRmL2hiZS8xMDAyMjQzNjcwMDE5MC5qcGd8NWMxZmY3NDkxNWY1MTY4MmJjNzQyOTNmYTgxOTgwYTNkM2Q4YjhkNzA4MzQ3MDZiMTFlZDljYjkwNThjNWQ2OQ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt diam, non pellentesque est ultricies ac. Aliquam erat volutpat. Aliquam a lacus lorem. Aenean eu ligula at lorem porttitor fermentum luctus et metus."
  ),
  new Smartphone(
    7,
    "Oppo A59 5G 128 GB",
    "OPPO",
    "https://www.reliancedigital.in/medias/Oppo-A-series-Starry-Black-Mobile-Phone-494351586-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4NDQ5MnxpbWFnZS9qcGVnfGltYWdlcy9oZDQvaDY3LzEwMDg0NDM0Mzc4NzgyLmpwZ3w1NGY4NDRkMTNiOWVkODFhZjFhMGRiNTFlYjEyNDJjZGMwYTFiYjg2ZmZkNjk1NDVjYzg1MzYzNDQyNzYwMWNk",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt diam, non pellentesque est ultricies ac. Aliquam erat volutpat. Aliquam a lacus lorem. Aenean eu ligula at lorem porttitor fermentum luctus et metus."
  ),
  new Smartphone(
    8,
    "Moto Edge 40 5G 256 GB",
    "MOTOROLA",
    "https://www.reliancedigital.in/medias/Moto-Edge-Mobile-Phone-493837871-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNjI1MDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDFlL2gxNS8xMDAxNzMyMzA4OTk1MC5qcGd8MjRiNGJmZWJhYjFlNDE4NGIxNTdmYzliOTNmMjlmMjFlZTU2YjRjMTAzZTgxYmE1MzE5MzY0NjkzZWQ5ZTdiZQ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt diam, non pellentesque est ultricies ac. Aliquam erat volutpat. Aliquam a lacus lorem. Aenean eu ligula at lorem porttitor fermentum luctus et metus."
  ),
  new Smartphone(
    9,
    "Nokia C32 6 GB",
    "NOKIA",
    "https://www.reliancedigital.in/medias/Nokia-C32-Charcoal-Smartphone-494268203-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjg0NzB8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2g1Ny8xMDA3MDYxOTAyOTUzNC5qcGd8MmE5ZjE0YWUxZTJlMThjMTIyM2FkM2ZmMWQyZTkyMTdkM2QwOTNkYzU0YzliZWFhMjhiMGM3MTQ1MDYyM2E1MA",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt diam, non pellentesque est ultricies ac. Aliquam erat volutpat. Aliquam a lacus lorem. Aenean eu ligula at lorem porttitor fermentum luctus et metus."
  ),
  new Smartphone(
    10,
    "Itel P40 4 GB RAM 64 GB",
    "ITEL",
    "https://www.reliancedigital.in/medias/Itel-P40-Black-Product-49383842-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MTk4MnxpbWFnZS9qcGVnfGltYWdlcy9oNGMvaDgzLzEwMDIwMTMzNjM0MDc4LmpwZ3wwMzU5MjNkMTdiZGNmMWRhMmM0OTZiZjEyMjUxN2VjMjdhNmE5NDNkMWJjYmNhNzhmNDRiYWNiMjFlNDdlZWFj",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt diam, non pellentesque est ultricies ac. Aliquam erat volutpat. Aliquam a lacus lorem. Aenean eu ligula at lorem porttitor fermentum luctus et metus."
  ),
];

let id = 10;
export class API {
  static async getAll(): Promise<Smartphone[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(smartPhones);
      }, 500);
    });
  }

  static async get(id: number): Promise<Smartphone> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const smartphone = smartPhones.find((item) => item.id === id);

        if (!smartphone) {
          reject("Smartphone not found!");
        } else {
          resolve(smartphone);
        }
      }, 500);
    });
  }

  static async add(
    name: string = "",
    brand: string = "",
    image: string = "",
    description: string = ""
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        id = id + 1;
        smartPhones = [
          ...smartPhones,
          new Smartphone(id, name, brand, image, description),
        ];
        resolve();
      }, 500);
    });
  }

  static async remove(id: number): Promise<Smartphone[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        smartPhones = smartPhones.filter((item) => item.id !== id);
        resolve(smartPhones);
      }, 500);
    });
  }
}
