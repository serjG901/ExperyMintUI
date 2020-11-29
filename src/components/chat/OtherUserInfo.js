import React from "react";
import OtherUserStatistic from "./OtherUserStatistic";
import OtherUserAvatarAndTags from "./OtherUserAvatarAndTags";

export default function OtherUserInfo({
  avatar,
  tags,
  indexOfClosest,
  mistruth
}) {
  return (
    <div>
      <OtherUserStatistic indexOfClosest={indexOfClosest} mistruth={mistruth} />
      <OtherUserAvatarAndTags avatar={avatar} tags={tags} />
    </div>
  );
}
