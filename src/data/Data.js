import amyrobsonAvatar from "../images/avatars/image-amyrobson.png";
import ramsesmiroAvatar from "../images/avatars/image-ramsesmiron.png";
import maxblagumAvatar from "../images/avatars/image-maxblagun.png";
import julliuseAvarta from "../images/avatars/image-juliusomo.webp";

const Data = [
  {
    id: "8e4da4be-a55e-45a86c2-dda1839ba06d",
    userAvatar: amyrobsonAvatar,
    user: "amyrobson",
    timeCommented: "1 month ago",
    commentMessage:
      "Impressive! though it seem the drag feauture could be improved.but ovarall it look incredible. you have nailed the design and responsiveness at various break points work readily",
    like: 0,
    allReplies: [],
  },
  {
    id: "4ccea-ce55-4b13-9b87-3d38a2d4a398",
    userAvatar: maxblagumAvatar,
    user: "maxblagum",
    timeCommented: "2 week ago",
    commentMessage:
      "Wao yor project lok awesome! how loog have you be coding ? i think i want to dive int react as well soon. perhaps you can give me an insight on where i can learn react ? Thanks ",
    like: 0,
    allReplies: [
      {
        id: "-ce55-4b13-9b87-3d38a2d4a398",
        userAvatar: ramsesmiroAvatar,
        user: "ramsesmiro",
        timeCommented: "2 week ago",
        commentMessage:
          "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        like: 0,
        allReplies: [],
      },
      {
        id: "4ccea-9b87-3d38a2d4a398",
        userAvatar: julliuseAvarta,
        user: "julliuse",
        timeCommented: "2 week ago",
        commentMessage:
          "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        like: 0,
        allReplies: [],
      },
    ],
  },
];

export default Data;
