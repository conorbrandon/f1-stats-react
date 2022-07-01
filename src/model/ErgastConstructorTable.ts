import { ErgastConstructor } from "./ErgastConstructor"

export interface ErgastConstructorTable {
  ConstructorTable: {
    constructorId?: string,
    season?: string,
    Constructors: ErgastConstructor[]
  }
}