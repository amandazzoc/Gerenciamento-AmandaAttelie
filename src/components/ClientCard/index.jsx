import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ClientCard = ({ image, description, name, price }) => {
  return (
    <article className="flex items-center justify-between gap-2 border-b pb-2">
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>DV</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm sm:text-base font-semibold">{description}</p>
          <span className="text-[12px] sm:text-sm text-gray-400">{name}</span>
        </div>
      </div>
      <h2 className="mr-4 text-green-800">{price}</h2>
    </article>
  );
};

export default ClientCard;
