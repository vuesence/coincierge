export function p2pCollections(data: any, providerName: string, type: string, pair: string) {
  const orders = data.p2p.providers
    .filter((provider: any) => provider.name === providerName)[0]
    .collections;
    // .filter((collection: any) => collection.pair === pair && collection.type === type);
  // const sets = section.providers
  //   .filter((provider: any) => provider.name === providerName)[0];
  // const orders = sets[kind]
  //   .filter((group: any) => group.pair === pair)[0].orders;
  return orders;
}

export function getCurrencySymbol(str: string): string {
  let cur = str;
  if (str.includes("/")) {
    cur = str.split("/")[1];
  }

  switch (cur) {
    case "RUB":
      return "₽";
    case "USD":
      return "$";
    case "EUR":
      return "€";
    default:
      return "";
  }
}
