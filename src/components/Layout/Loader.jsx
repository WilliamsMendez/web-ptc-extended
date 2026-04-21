import { useRef, useEffect } from "react";

export default function Loader() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

return (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* video encima */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="relative z-10 w-[min(40vw,400px)] h-auto"
    >
      <source src="src/assets/video/PtclogoFinalWEBM.webm" type="video/webm" />
    </video>
  </div>
);
}