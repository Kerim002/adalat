import "plyr-react/plyr.css";

const VideoModal = () => {
  return (
    <div className="md:w-[600px] md:h-[600px] md:p-2 md:py-12 rounded-lg h-[100vh] w-full bg-primary py-12">
      <video
        className="h-80 w-full object-cover"
        controls
        src="https://dev.tmbiz.info//data/videos/videos/86b7eee5-acda-4260-8d71-5d4e840eaee2.mp4"
      />
      <h2 className="text-white text-lg p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
        consequuntur minus, quod recusandae, placeat eligendi corporis ullam
        dolores distinctio in, facilis veniam! Porro sapiente suscipit quo
        voluptates et obcaecati nam!
      </h2>
    </div>
  );
};

export default VideoModal;
