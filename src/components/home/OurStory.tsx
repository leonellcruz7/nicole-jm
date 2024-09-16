import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="text-center p-6 md:p-10 space-y-12">
      <div className="flex flex-col md:flex-row gap-12 mx-auto w-fit">
        <div>
          <Image
            width={500}
            height={500}
            src="/images/gal1.jpg"
            alt=""
            className="h-full"
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            src="/images/gal2.jpg"
            alt=""
            className="h-full"
          />
        </div>
      </div>
      <p className="text-[60px] md:text-[144px] cursive">Our Story</p>
      <div className="max-w-[900px] mx-auto text-[18px] md:text-[24px] space-y-10">
        <p>
          It all started with a swipe. Days before Christmas 2022, the stars
          aligned and they matched on Bumble! And the rest was history.
        </p>

        <p>
          A little peek into that history started when Nicole vowed never to
          swipe right on someone who works out as she never had an active
          lifestyle and thought to only swipe on someone she believes she has
          the same interests with. However, that night something came up to her,
          and she thought why not give it a chance? She saw Vince's profile with
          nothing written on his bio and immediately became curious about this
          mysterious human being. On the other hand, Vince saw Nicole's profile
          with an essay in her bio, but he didn't bother reading it because he
          thought she was cute (he still thinks she is). Nicole started their
          conversation with the question "Do you like cats?" Vince responded
          with a photo of him cuddling a cat. Instant points for him. Nicole
          then saw the opportunity to offer Vince the preloved clothes she was
          selling at that time and Vince bought one hoodie that led to them
          asking "San tayo magmeet?" It was the first time Nicole agreed to meet
          someone she only knew online so she kept thinking, "Pag ako namatay,
          bahala na." Luckily, Vince wasn't a killer. They met the day after
          Christmas and spent the whole day telling each other stories,
          laughing, and being more interested in one another. Days turned into a
          week, and after 7 days, Vince told Nicole his feelings for her. Nicole
          felt it too but wanted to be sure so she gave it more time (Konting
          pabebe lang). Weeks turned into a month, and Nicole finally told Vince
          she feels the same way too. And they had never been happier ever
          since...
        </p>

        <p>
          Until Christmas 2023 came and this time Vince started the conversation
          with the question "Will you marry me?" and you know the rest.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
