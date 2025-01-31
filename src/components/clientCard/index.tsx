import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ClientCardProps {

  description: string;
  name: string;
  price: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ description, name, price }) => {
  // Respeitando a tipagem do Typescript, sem a tipagem e usando a extensão .jsx, ficaria assim e sem o "interface" : const ClientCard = ({ description, name, price }) => {}
  return (
    <article className="flex items-center justify-between gap-2 border-b pb-2">
      <div className="flex gap-2">
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
