import { Myself } from "./models";


type GetOnlyName = Omit<Myself, "age" | "division" | "hometown">;