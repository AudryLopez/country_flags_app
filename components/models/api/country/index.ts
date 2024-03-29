import { Api } from "@/components/models/api";

export async function countryFeed() {
  const { data } = await Api.get('/all');
  return data;
}

export async function getCountryByName(name: string) {
  const { data } = await Api.get(`/name/${name}`);
  return data;
}