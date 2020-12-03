import Resizer from "react-image-file-resizer";

export const resizeImage = (file) =>
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
