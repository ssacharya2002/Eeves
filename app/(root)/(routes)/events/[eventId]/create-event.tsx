import { RedirectToSignIn, auth, redirectToSignIn } from "@clerk/nextjs";

const CreateEvent = async () => {
  const { userId } = auth()

  if (!userId) {
    return redirectToSignIn();
  }

  return (
    <div className="px-10">
        create event form
    </div>);
};

export default CreateEvent;
