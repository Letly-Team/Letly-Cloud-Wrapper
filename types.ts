export type ErrorRes = {
  errors: {
    code: Number;
    message: String;
    userMessage: String;
  };
};

export type RequestMethod =
  | "GET"
  | "HEAD"
  | "PATCH"
  | "POST"
  | "PUT"
  | "OPTIONS"
  | "CONNECT"
  | "DELETE"
  | "TRACE";
