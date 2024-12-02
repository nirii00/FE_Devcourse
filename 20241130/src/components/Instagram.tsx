import { useState } from "react";
import { DeleteImg, UndoImg } from "../assets/images";

const Instagram = () => {
  const picture = [
    "https://cdn.pixabay.com/photo/2013/08/26/09/40/silhouette-175970_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/11/25/09/42/rocks-1061540_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/09/23/12/33/building-3697342_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/05/02/12/43/clouds-335969_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/12/28/21/10/streets-7683842_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/01/08/05/45/mountain-7704584_1280.jpg",
  ];

  const [pictures, setPictures] = useState<string[]>(picture);

  const [imgStack, setImgStack] = useState<string[]>([]);

  const restoreImg = () => {
    if (imgStack.length === 0) return; // 스택이 비어있으면 아무 작업도 하지 않음
    const targetImg = imgStack[imgStack.length - 1];
    setImgStack((prev) => prev.slice(0, -1)); // 스택에서 마지막 이미지 제거
    setPictures((prev) => [...prev, targetImg]); // 복구된 이미지를 추가
  };

  const deleteImg = (index: number) => {
    const targetImg = pictures[index];
    setPictures((prev) => prev.filter((_, i) => i !== index)); // 해당 인덱스 제거
    setImgStack((prev) => [...prev, targetImg]); // 삭제된 이미지를 스택에 추가
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
            onClick={restoreImg}
          >
            <img src={UndoImg} alt="Undo Icon" className="h-5 w-5" />
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {pictures.map((value, index) => (
          <div className="group relative" key={index}>
            <a className="group" href="#">
              <img
                src={value}
                width="400"
                height="400"
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
              />
            </a>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 w-10 absolute top-2 right-2 rounded-full"
              onClick={() => deleteImg(index)}
            >
              <img src={DeleteImg} alt="Delete icon" className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
