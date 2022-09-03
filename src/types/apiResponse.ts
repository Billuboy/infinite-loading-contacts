export interface User {
  email: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    city: string;
  };
}
