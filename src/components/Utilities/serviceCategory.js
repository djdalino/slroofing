export const category = [
  { _id: "1", name: "Roofing" },
  { _id: "2", name: "Siding" },
  { _id: "3", name: "Gutters" },
  { _id: "4", name: "Others" },
];

export function getSlCategory() {
  return category.filter((c) => c);
}
