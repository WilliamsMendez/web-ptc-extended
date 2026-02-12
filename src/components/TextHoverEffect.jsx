import { TextHoverEffect } from "./ui/text-hover-effect";

export function TextHoverEffectDemo({texto=""}) {
  return (
    <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffect text={texto} />
    </div>
  );
}

