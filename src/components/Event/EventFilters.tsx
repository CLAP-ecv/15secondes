"use client"

import { useQueryState } from "nuqs";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export type EventFiltersProps = {
  cities: string[];
  categories: string[];
}

export const EventFilters = (props: EventFiltersProps) => {

  const [city, setCity] = useQueryState("city");
  const [category, setCategory] = useQueryState("category");

  return (
    <section className="py-8 flex flex-row gap-8">
      <div>
        <Label htmlFor="city">Ville</Label>
        <Select name="city" value={city ?? ""} onValueChange={(value) => setCity(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Toutes les villes" />
          </SelectTrigger>
          <SelectContent>
            {/* @ts-ignore */}
            <SelectItem value={null}>Toutes les villes</SelectItem>
            {
              props.cities.map((city, index) => <SelectItem key={index} value={city}>{city}</SelectItem>)
            }
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="category">Catégorie</Label>
        <Select name="category" value={category ?? ""} onValueChange={(value) => setCategory(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Toutes les catégories" />
          </SelectTrigger>
          <SelectContent>
            {/* @ts-ignore */}
            <SelectItem value={null}>Toutes les catégories</SelectItem>
            {
              props.categories.map((category, index) => <SelectItem key={index} value={category}>{category}</SelectItem>)
            }
          </SelectContent>
        </Select>
      </div >
    </section>
  )
}