import { Bus } from "@/entities/bus/types/busTypes";
import '../model/styles.scss'
interface BusCardProps {
  bus: Bus,
  action?: React.ReactNode;
  variant?: 'default' | 'remove'
}

function BusCard({
  bus,
  action,
  variant = 'default'
}: BusCardProps): React.JSX.Element {
  return (
    <article className={`bus-card  h-full bus-card--${variant}`}>
      <div className='bus-card__inner 
      flex flex-col gap-2'>
        <h3 className="bus-card__title
        text-3xl text-center mb-3 
        font-semibold" >
          {bus.company}
        </h3>
        <div className="bus-card__way
        flex items-center gap-5 flex-wrap">
          <span>{bus.departure}</span> -
          <span>{bus.arrival}</span>
        </div>
        <div className="bus-card__time
        flex items-center gap-5 flex-wrap">
          <span>{bus.departureTime}</span> -
          <span>{bus.arrivalTime}</span>
        </div>
        <div className="bus-card__duration">
          {bus.duration}
        </div>
        <span className="bus-card__price">
          {bus.price}$
        </span>
      </div>

      {action}
    </article>
  );
}

export default BusCard;