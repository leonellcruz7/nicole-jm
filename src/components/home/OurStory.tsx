import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { FADE_IN } from "@/lib/constants";

const OurStory = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });

  return (
    <div className={cn("text-center p-6 md:p-10 space-y-12")}>
      <div className="flex flex-col md:flex-row gap-12 mx-auto w-fit">
        <div
          ref={ref}
          className={cn(
            "delay-100",
            FADE_IN.initial,
            inView && FADE_IN.animate
          )}
        >
          <Image
            width={500}
            height={500}
            src="/images/gal1.JPG"
            alt=""
            className="h-full"
          />
        </div>
        <div
          className={cn(
            "delay-200",
            FADE_IN.initial,
            inView && FADE_IN.animate
          )}
        >
          <Image
            width={500}
            height={500}
            src="/images/gal2.JPG"
            alt=""
            className="h-full"
          />
        </div>
      </div>
      <p
        className={cn(
          "text-[60px] md:text-[144px] cursive delay-500",
          FADE_IN.initial,
          inView && FADE_IN.animate
        )}
      >
        Our Story
      </p>
      <div
        className={cn(
          "max-w-[900px] mx-auto text-[18px] md:text-[24px] space-y-10 delay-700",
          FADE_IN.initial,
          inView && FADE_IN.animate
        )}
      >
        <p>
          It all started with a swipe. Days before Christmas 2022, the stars
          aligned and they matched on Bumble! And the rest was history.
        </p>

        <p>
          A little peek into that history started when Nicole vowed never to
          swipe right on someone who works out as she never had an active
          lifestyle and thought to only swipe on someone she believes she has
          the same interests with. However, that night something came up to her,
          and she thought why not give it a chance? She saw Vince&apos;s profile
          with nothing written on his bio and immediately became curious about
          this mysterious human being. On the other hand, Vince saw
          Nicole&apos;s profile with an essay in her bio, but he didn&apos;t
          bother reading it because he thought she was cute (he still thinks she
          is). Nicole started their conversation with the question &quot;Do you
          like cats?&quot; Vince responded with a photo of him cuddling a cat.
          Instant points for him. Nicole then saw the opportunity to offer Vince
          the preloved clothes she was selling at that time and Vince bought one
          hoodie that led to them asking &quot;San tayo magmeet?&quot; It was
          the first time Nicole agreed to meet someone she only knew online so
          she kept thinking, &quot;Pag ako namatay, bahala na.&quot; Luckily,
          Vince wasn&apos;t a killer. They met the day after Christmas and spent
          the whole day telling each other stories, laughing, and being more
          interested in one another. Days turned into a week, and after 7 days,
          Vince told Nicole his feelings for her. Nicole felt it too but wanted
          to be sure so she gave it more time (Konting pabebe lang). Weeks
          turned into a month, and Nicole finally told Vince she feels the same
          way too. And they had never been happier ever since...
        </p>

        <p>
          Until Christmas 2023 came and this time Vince started the conversation
          with the question &quot;Will you marry me?&quot; and you know the
          rest.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
