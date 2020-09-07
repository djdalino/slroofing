import RubberFlatRoofing from "../Services/SLroofingServicesImages/Flat Roofing.jpeg";
import AsphaltShingle from "../Services/SLroofingServicesImages/Asphalt Shingles.jpeg";
import SlateRoofing from "../Services/SLroofingServicesImages/Slate Roofing.png";
import ClayTileRoofing from "../Services/SLroofingServicesImages/Clay Tile Roofing.jpeg";
import WoodShake from "../Services/SLroofingServicesImages/WoodShake Roofing.jpeg";
import MetalRoofing from "../Services/SLroofingServicesImages/Metal Roofing.jpeg";

const getslservices = [
  {
    id: 1,
    title: "Architectural Composition/Asphalt Shingles",
    img: AsphaltShingle,
    category: { _id: "1", name: "Roofing" },
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 2,
    title: "Metal Roofing",
    img: MetalRoofing,
    category: { _id: "1", name: "Roofing" },
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 3,
    title: "Wood Shingles - Wood Shake",
    img: WoodShake,
    category: { _id: "1", name: "Roofing" },
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 4,
    title: "EPDM - TPO Rubber Roofing",
    img: RubberFlatRoofing,
    category: { _id: "1", name: "Roofing" },
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },

  {
    id: 5,
    title: "Clay (Spanish) Tile Roofing",
    img: ClayTileRoofing,
    category: { _id: "1", name: "Roofing" },
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 6,
    title: "Slate Roofing",
    img: SlateRoofing,
    category: { _id: "1", name: "Roofing" },
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
];

export function getSlServices() {
  return getslservices;
}
