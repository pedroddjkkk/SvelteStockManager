import type { ComponentType } from "svelte";

export type Pages = {name: string, path: string, icon: ComponentType}[]

export type GridColDef = {
  type?: "string" | "number" | "boolean" | "date" | "datetime" | "time" | "currency",
  field: string,
  headerName: string,
  width?: number,
  valueFormatter?: (value: string) => string,
}