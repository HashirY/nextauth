import { CardWrapper } from "./card-wrapper";
import { BiError } from "react-icons/bi";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <BiError className="h-10 w-10 text-destructive" />
      </div>
    </CardWrapper>
  );
};
