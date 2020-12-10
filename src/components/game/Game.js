import React, { useEffect, useState } from "react";
import Tilt from "./Tilt";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import { useUser, useUserSet } from "../core/UserProvider";
import { getRandomImage } from "./imageForGame";
import StatisticOfUser from "../account/StatisticOfUser";

export default function Game() {
  const themeColor = useTheme();
  const language = useLanguage();
  const user = useUser();
  const setUser = useUserSet();

  const styleButton = `
    transition-all 
    duration-1000
    flex-1 
    text-2xl
    mb-4 
    mx-4 
    py-2 
    px-4
    rounded 
    shadow-md 
    focus:outline-none 
    focus:shadow-outline
    `;
  const styleButtonEnabled = `
    ${styleButton}
    cursor-pointer
    ${themeColor.bgButton} 
    ${themeColor.hbgButton} 
    `;
  const styleButtonDisabled = `
    ${styleButton}
    bg-transparent 
    cursor-default
    shadow-none
    `;

  const [image, setImage] = useState(getRandomImage());
  const [load, setLoad] = useState(true);
  const [choiceType, setChoiceType] = useState("");

  useEffect(() => {
    const timeIdChoice = setTimeout(() => setChoiceType("new"), 100);
    const timeIdLoad = setTimeout(() => setLoad(false), 1000);
    return () => {
      clearTimeout(timeIdChoice);
      clearTimeout(timeIdLoad);
    };
  }, [image]);

  function handleResult(image, choice) {
    const score = user.score + 1;
    const mistruth = user.mistruth;
    const addMistruth =
      user.results[image] === undefined
        ? 0
        : user.results[image] === choice
        ? 0
        : 1;
    setUser({
      ...user,
      mistruth: mistruth + addMistruth,
      score,
      results: { ...user.results, [image]: choice },
    });
    setTimeout(() => getNewRandomImage(), 2000);
  }

  function getNewRandomImage() {
    setChoiceType("");
    const number = getRandomImage();
    if (image !== number) {
      setImage(number);
      return;
    }
    setImage(getRandomImage());
  }

  function handleChoice(choice) {
    setLoad(true);
    setChoiceType(choice ? "leave" : "remove");
    handleResult(image, choice);
  }

  return (
    <div className="py-4">
      <div className="p-2">
        {user.name}
        {language.gameExplane}
      </div>
      <div className="flex justify-center py-4">
        <div className="w-1/6"></div>
        <Tilt className="w-2/3" choiceType={choiceType}>
          <div className="totally-centered">
            <img alt="img on wall" src={`./img/${image}`} />
          </div>
        </Tilt>
        <div className="w-1/6"></div>
      </div>
      <div className="flex content-center p-2">
        <button
          tilte={language.leaveTitle}
          className={load ? styleButtonDisabled : styleButtonEnabled}
          disabled={load}
          onClick={() => handleChoice(true)}
        >
          {language.leave}
        </button>
        <button
          tilte={language.removeTitle}
          className={load ? styleButtonDisabled : styleButtonEnabled}
          disabled={load}
          onClick={() => handleChoice(false)}
        >
          {language.remove}
        </button>
      </div>
      <div className="flex justify-center">
        <StatisticOfUser />
      </div>
    </div>
  );
}
