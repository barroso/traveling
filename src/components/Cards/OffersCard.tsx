
export default function OffersCard() {
    return (
        <div className="rounded-[20px] max-w-[300px] bg-clip-border shadow-3xl shadow-shadow-500 w-full p-4 bg-gray-100 ">
        <div className="basis-1/3 flex-1 ">
            <div className="w-full">
                <img src="./public/hotel/hotel-de-ville-of-paris.jpeg" className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
                
            </div>
            <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                <div className="mb-2">
                    <p className="text-lg font-bold text-navy-700"> Hotel Colors </p>
                    <p className="text-sm font-medium text-gray-500">in Paris </p>
                    <p className="text-sm font-medium text-gray-600 ">
                        You'll be within a 10-minute drive of Paris Expo Porte de Versailles and Luxembourg Gardens
                    </p>
                </div>
            </div>
        </div>
    </div>
      );
  }