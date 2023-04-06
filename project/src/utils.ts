export function getUppercase(data: string):string {
  return data.charAt(0).toUpperCase() + data.slice(1);
}

export function formatDate(date:string) {
  return new Date(date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
}

export function formatDatetoIso(date:string) {
  return new Date(date).toISOString().slice(0,10);
}

const getRandomIndex = (n: number) => Math.round(Math.random() * n);

export function GetRandomArrayItems<T>(lines: T[], max: number): T[] {
  const rawImages = lines.map((e) => e);
  const resultImages: T[] = [];

  for (let i = 0; i <= max - 1; i++) {

    const imageIndex = getRandomIndex(rawImages.length - 1);

    resultImages.push(rawImages[imageIndex]);
    rawImages.splice(imageIndex, 1);
  }

  return resultImages;
}

const STARS_AMOUNT = 5;
export const calcRating = (rating: number) => `${Math.round(rating) / STARS_AMOUNT * 100}%`;
