import Footer from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const HelpPage = () => {
  return (
    <div className="flex flex-col w-full mt-8  md:px-10 px-5">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How do I create an account on Eeves?
          </AccordionTrigger>
          <AccordionContent>
            To create an account on Eeves, simply click on the &ldquo;Sign
            Up&rdquo; button located at the top right corner of the homepage.
            Follow the prompts to fill in your details and create your account.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            I forgot my password. How can I reset it?
          </AccordionTrigger>
          <AccordionContent>
            If you&apos;ve forgotten your password, you can reset it by clicking
            on the &ldquo;Forgot Password?&rdquo; link on the login page. Enter
            your email address, and we&apos;ll send you a link to reset your
            password.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            IHow can I host an event on Eeves?
          </AccordionTrigger>
          <AccordionContent>
            Hosting an event on Eeves is easy! Once you&apos;re logged in, click
            on the &ldquo;Host an Event&rdquo; button and fill in the required
            details such as event name, date, location, and description. You can
            also set ticket prices and availability.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Can I purchase tickets for events on Eeves?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can purchase tickets for events listed on Eeves. Simply
            navigate to the event page, select the number of tickets you&apos;d
            like to purchase, and proceed to checkout. You&apos;ll receive a
            confirmation email once your purchase is complete.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            What payment methods are accepted on Eeves?
          </AccordionTrigger>
          <AccordionContent>
            Eeves accepts various payment methods including credit/debit cards,
            PayPal, and other secure payment gateways. The available payment
            options may vary depending on the event organizer&apos;s
            preferences.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>How can I find events in my area?</AccordionTrigger>
          <AccordionContent>
            You can find events in your area by using the search filters on the
            homepage. Simply enter your location or choose a category of
            interest to discover upcoming events near you.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="w-full h-1 my-10 text-center">
        For more information contact us at{" "}
        <Link href="mailto:email@example.com">email@example.com</Link>
      </div>
      <Footer />
    </div>
  );
};

export default HelpPage;
