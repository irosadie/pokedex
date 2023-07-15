import env from "$/configs/env";

const getArtwork = (id: number | string) => {
  console.log(id)
  return `${env.imageUrl}${id}${env.imageFormat}`;
}

export default getArtwork
