export const initialItems = new Array(29_99_999).fill(0).map((i) => {
  return { id: 1, selected: i === 29_999_998 };
});
