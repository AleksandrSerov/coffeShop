class CoffeeService {
  constructor() {
    this.url = "../db.json";
  }
  getData = async () => {
    const url = this.url;
    const res = await fetch(`${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}.`);
    }
    return await res.json();
  };
}

export default CoffeeService;
