import { PageAnimationWrapper } from "@/widget/animationwrapper";

const About = () => {
  return (
    <PageAnimationWrapper>
      <h1 className="pl-3 text-2xl md:text-3xl font-semibold">About us</h1>
      <div className="flex flex-col gap-2">
        <div className="">
          <h3 className="md:text-lg font-semibold">Title</h3>
          <p className="indent-4 md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus consequuntur quae, doloremque similique illo in modi
            facere suscipit aliquid distinctio eum eius deleniti corporis
            architecto eveniet vero nesciunt sapiente autem?
          </p>
        </div>
        <div className="">
          <h3 className="md:text-lg font-semibold">Title</h3>

          <p className="indent-4 md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus consequuntur quae, doloremque similique illo in modi
            facere suscipit aliquid distinctio eum eius deleniti corporis
            architecto eveniet vero nesciunt sapiente autem?
          </p>
        </div>
      </div>
    </PageAnimationWrapper>
  );
};

export default About;
