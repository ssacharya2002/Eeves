import prismadb from "@/lib/prismadb";
import CreateEvent from "./components/create-event";
import { auth, redirectToSignIn } from "@clerk/nextjs";

interface CreateEventPageProps {
  params: {
    eventId: string;
  };
}

const CreateEventPage =async ({ params }: CreateEventPageProps) => {

    const {userId} = auth();

    if (!userId) {
        return redirectToSignIn();
    }

    const initialData = await prismadb.event.findUnique({
        where:{
            id:params.eventId,
            organizerId:userId
            // organizerId:"e906ee2f-30b6-463c-89c9-8276fccba2e7"

        }
    })

    const categories = await prismadb.category.findMany();

  return <CreateEvent initialData={initialData} categories={categories}/>;
};

export default CreateEventPage;
