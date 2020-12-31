import React, { useEffect, useState } from "react";
import { useLanguage } from "../core/LanguageProvider";

export default function PersonStatistic({
  themeColor,
  closest,
  comparedImage,
  mistruth,
  lastActionTime,
}) {
  const language = useLanguage();

  const indexes = [
    { explane: language.otherCloseness, index: closest },
    { explane: language.otherCompared, index: comparedImage },
    { explane: language.otherMistruth, index: mistruth },
    {
      explane: language.otherLastUpdate,
      index: new Date(lastActionTime).toLocaleString(),
    },
  ];

  const [showingIndex, setShowingIndex] = useState(0);
  const [opacity, setOpacity] = useState("opacity-100");

  useEffect(() => {
    setOpacity("opacity-100");
    const timeoutOpacity = setTimeout(() => {
      setOpacity("opacity-0");
    }, 4000);
    const timeoutIndexes = setTimeout(() => {
      showingIndex === indexes.length - 1
        ? setShowingIndex(0)
        : setShowingIndex(showingIndex + 1);
    }, 5000);
    return () => {
      clearTimeout(timeoutOpacity);
      clearTimeout(timeoutIndexes);
    };
  }, [showingIndex]);

  function showIndex(numberItem, items) {
    return (
      <div className="text-center">
        <span className={`${themeColor.colorTextExplane}`}>
          {items[numberItem].explane}:{" "}
        </span>
        {items[numberItem].index}
      </div>
    );
  }

  return (
    <div className={`transition-all duration-1000 ${opacity}`}>
      {showIndex(showingIndex, indexes)}
    </div>
  );
}
