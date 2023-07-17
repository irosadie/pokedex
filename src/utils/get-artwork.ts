import env from "$/configs/env";

const getArtwork = (id: number | string) => {
  return `${env.imageUrl}${id}${env.imageFormat}`;
}

export default getArtwork
