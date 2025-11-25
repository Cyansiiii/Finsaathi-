import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-60 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-0 lg:w-96">
          <ImageClipBox
            src="public/img/task_01kax6tt8zegzs01bbtm0xp6ym_1764064438_img_0.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="public/img/FinSaathi_-_Gig_Worker_Financial_Solutions_(Alternative_Dark_Cover_Design).webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src=""
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="public/img/20251125_1523_Financial Chatbot Logo_remix_01kax6tvx4fyxsd2hvgvtcbr9h.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Finsaathi
          </p>

          <AnimatedTitle
            title="Ready <b>to </b>Transform<br /> Your <br /> F<b>i</b>nancial F<b>U</b>TURE?"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
