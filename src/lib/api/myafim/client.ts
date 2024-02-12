import createClient from "openapi-fetch";
import {paths} from "@/lib/api/myafim/schema";

export const client = createClient<paths>({ baseUrl: "http://localhost:5030" });
