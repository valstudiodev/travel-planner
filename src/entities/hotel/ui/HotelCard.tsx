import ArticleCard from "@/shared/primitives/article-card/ArticleCard";
import { Hotel } from "@/entities/hotel/types/hotelCardTypes";

interface HotelCardProps {
  hotel: Hotel;
  action?: React.ReactNode;
}

function HotelCard({
  hotel,
  action
}: HotelCardProps): React.JSX.Element {
  return (
    <ArticleCard className="hotel-card h-full">
      <div className="hotel-card__inner flex
      flex-col gap-2 h-full">
        <div className="hotel-card__content flex
        flex-col gap-2 items-start">
          <span className="hotel-card__rating">
            {hotel.rating}
          </span>
          <h3 className="hotel-card__title">
            {hotel.name}
          </h3>
          <span className="hotel-card__city">
            {hotel.city}
          </span>
          <span className="hotel-card__price">
            {hotel.pricePerNight}/ night
          </span>
        </div>
        <div className="hotel-card__image-wrap
        w-full h-full grow overflow-hidden">
          <img
            className="h-full w-full aspect-4/3"
            src={hotel.image} alt={hotel.name} />
        </div>
        <div className="hotel-card__actions">
          {action}
        </div>
      </div>
    </ArticleCard>
  );
}

export default HotelCard;