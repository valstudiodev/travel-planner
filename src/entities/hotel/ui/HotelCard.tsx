import { Hotel } from "@/entities/hotel/types/hotelCardTypes";
import '../model/styles.scss'

interface HotelCardProps {
  hotel: Hotel;
  action?: React.ReactNode;
  variant?: 'default' | 'remove'
}

function HotelCard({
  hotel,
  action,
  variant = 'default'
}: HotelCardProps): React.JSX.Element {
  return (
    <article className={`hotel-card hotel-card--${variant} flex
      flex-col gap-2 h-full p-5 rounded`}>
      <div className="hotel-card__inner flex
        flex-col gap-2 items-start">
        <div className="hotel-card__content flex
        flex-col gap-2">
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
      </div>
      <div className={`hotel-card__body hotel-card__body--${variant}`}>
        <div className={`hotel-card__image-wrap
        w-full h-full grow overflow-hidden hotel-card__image-wrap--${variant}`}>
          <img
            className="hotel-card__img h-full w-full aspect-4/3"
            src={hotel.image} alt={hotel.name} />
        </div>

      </div>
      <div className="hotel-card__actions">
        {action}
      </div>
    </article>
  );
}

export default HotelCard;