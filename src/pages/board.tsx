import OffersCard from "../components/Cards/OffersCard";

export default function Board() {
  return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap px-10 justify-center">
      <OffersCard />
      <OffersCard />
      <OffersCard />
      <OffersCard />
      <OffersCard />
      <OffersCard />
      <OffersCard />
      <OffersCard />
    </div>
  );
}
