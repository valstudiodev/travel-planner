import { Bus } from "@/entities/bus/types/busTypes";

interface BusCardProps {
  bus: Bus,
  action?: React.ReactNode;
}

function BusCard({
  bus,
  action
}: BusCardProps): React.JSX.Element {
  return (
    <article
      className="bus-card bg-bg
      text-text max-w-75 rounded
      p-4 border-primary border-2">
      <div className="bus-card__inner">
        <h3 className="bus-card__title
        text-2xl text-center mb-3 
        text-text-muted font-semibold" >
          {bus.company}
        </h3>
        <div className="bus-card__way
        flex items-center gap-10">
          <span>{bus.departure}</span> -
          <span>{bus.arrival}</span>
        </div>
        <div className="bus-card__time
        flex items-center gap-10">
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