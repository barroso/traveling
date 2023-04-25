import OffersCard from "../components/Cards/OffersCard";

export default function Board() {
  return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap px-10 justify-center">
      <OffersCard company="Hotel Colors" place="Paris" img="/hotel/hotel-de-ville-of-paris.jpeg" description="You'll be within a 10-minute drive of Paris Expo Porte de Versailles and Luxembourg Gardens"/>
      <OffersCard company="Hotel Collection" place="Chicago" img="/hotel/chicago.png" description="offers the amenities, services, and location that business and leisure traveler's desire"/>
      <OffersCard company="Hotel Blake" place="Chicago" img="/hotel/chicago-blake.png" description="unique city experience at our boutique hotel in the heart of downtown Chicago"/>
      <OffersCard company="Garden Hotel" place="Algarve" img="/hotel/algarve-garden.png" description="Providing an ideal mix of value, comfort and convenience"/>
      <OffersCard company="Bike" place="Algarve" img="/tour/bike.png" description="Spend time in the fresh, ocean air and explore the natural reserve in the area"/>
      <OffersCard company="Boat" place="Algarve" img="/tour/boat.png" description="Spend some time relaxing on the Algarvian water aboard this sailing tour"/>
      <OffersCard company="Snorkeling" place="Silfra" img="/tour/diving.png" description="This tour makes snorkeling the rift as easy as possible by including a guide, dry suit and snorkeling equipment"/>
      <OffersCard company="Walking Tour" place="Reykjavik" img="/tour/walking.png" description="Packed with history and culture. Uncover the fascinating stories of the Icelandic capital on this walking tour."/>
    </div>
  );
}
