import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useAvatar, useAvatarSet } from "../core/AvatarProvider";
import Resizer from "react-image-file-resizer";
import { useLanguage } from "../core/LanguageProvider";

export default function AvatarSetDelete() {
  const themeColor = useTheme();
  const language = useLanguage();

  const avatar = useAvatar();
  const setAvatar = useAvatarSet();

  const styleLikeButton = `
  transition-all 
  duration-1000
  mx-4 py-2 px-4 
  rounded shadow-md
  cursor-pointer
  focus:outline-none 
  focus:shadow-outline
  ${themeColor.bgButton}
  ${themeColor.hbgButton}
  `;

  const resizeImage = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        400,
        400,
        "PNG",
        50,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  async function handleSetAvatar(event) {
    const image = event.currentTarget.files[0];
    if (!image) return;
    const avatar = await resizeImage(image);
    setAvatar(avatar);
  }

  function handleDeleteAvatar() {
    setAvatar(null);
  }

  return (
    <form
      encType="multipart/form-data"
      onSubmit={(event) => event.preventDefault()}
    >
      <label
        htmlFor="avatar"
        title={language.setAvatarTitle}
        className={styleLikeButton}
      >
        {language.setAvatar}
      </label>
      <input
        id="avatar"
        type="file"
        accept="image/png, image/jpeg"
        className="uploadAvatar"
        onChange={handleSetAvatar}
      />
      {avatar ? (
        <span
          title={language.deleteAvatarTitle}
          className={styleLikeButton}
          onClick={handleDeleteAvatar}
        >
          {language.deleteAvatar}
        </span>
      ) : null}
    </form>
  );
}
