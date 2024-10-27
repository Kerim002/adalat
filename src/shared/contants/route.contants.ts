class RouterLocation {
  private location = "";

  home = `${this.location}`;
  news = `${this.location}news`;
  videos = `${this.location}videos`;
  laws = `${this.location}laws`;
  law = `${this.location}law`;
  workers = `${this.location}workers`;
  about = `${this.location}about`;
  chat = `${this.location}chat`;
}

export const routerLocation = new RouterLocation();

export const navbarLinks = [
  { name: "Bas sahypa", to: `/${routerLocation.home}` },
  { name: "Tazelikler", to: `/${routerLocation.news}` },
  { name: "Wideolar", to: `/${routerLocation.videos}` },
  { name: "Kanunlar", to: `/${routerLocation.laws}` },
  { name: "Isgarler", to: `/${routerLocation.workers}` },
  { name: "Biz barada", to: `/${routerLocation.about}` },
];
