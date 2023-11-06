import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  return Response.json({ hello: "世界你好", location: context.geo.city });
};