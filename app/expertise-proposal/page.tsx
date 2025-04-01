import { redirect } from "next/navigation";

export default function ExpertiseProposalRedirect() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSecxtpZ60S_stA7gzoguSUSoGK13X2DqQ7PBI7W86k4BGfUAA/viewform?usp=dialog"
  );
}
