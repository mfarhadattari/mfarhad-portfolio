import ContractInfo from "./components/ContractInfo";
import Message from "./components/Message";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white "
    >
      <div className="flex flex-col p-4 justify-center mx-auto h-full max-w-screen-lg mx-auto">
        <div className="pb-8 mt-12 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5 items-center justify-center">
          <Message />
          <ContractInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
