import Image from "next/image";
import bg from "../../../../public/background/back2.jpg";
// import Form from "../../../components/contact/Form";

// export const metadata = {
//   title: "Contact",
// };

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          Send Out Your Poké Ball of Messages! 🚀
</h1>
<p className="text-center font-light text-sm xs:text-base">
  Step into the tall grass and send out your message like a Poké Ball tossed into the wild.  
  Whether you're looking to trade ideas, battle challenges, or evolve your next big adventure,  
  your words will be stored in the PokéDex of destiny.  
  Use the form below to send your message on a journey through the PokéNetwork.  
  Keep your ears open — a response from the Trainer is just one cry away!  
</p>

        </div>
        {/* <Form /> */}
      </article>
    </>
  );
}