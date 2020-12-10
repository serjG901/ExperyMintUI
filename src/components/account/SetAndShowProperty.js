import React, { useState } from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import { useUser, useUserSet } from "../core/UserProvider";
import TextInput from "../common/TextInput";
import SendButton from "../common/SendButton";

export default function SetAndShowProperty({ property }) {
  const themeColor = useTheme();
  const language = useLanguage();
  const user = useUser();
  const setUser = useUserSet();

  const [statusInput, setStatusInput] = useState(false);
  const [draftInput, setDraftInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const value = draftInput.trim();
    setUser({ ...user, [property]: value });
    setDraftInput("");
    setStatusInput(false);
  }

  function handleChange(event) {
    setDraftInput(event.target.value);
  }

  return (
    <form className="p-2 mb-2" onSubmit={handleSubmit}>
      <label
        htmlFor={property}
        title={
          statusInput
            ? ""
            : `${language.formExplane} ${language.formProperty[property]}`
        }
        className="block text-sm cursor-pointer italic"
        onClick={() => setStatusInput(!statusInput)}
      >
        <span className={`${themeColor.colorTextLabel} font-bold`}>
          {language.formProperty[property]}
        </span>
        <p
          className={
            statusInput
              ? `${themeColor.colorTextData} break-words`
              : `${themeColor.colorTextData} break-words text-2xl font-bold`
          }
        >
          {user[property]}
        </p>
      </label>
      {statusInput ? (
        <>
          <TextInput
            property={property}
            onChange={handleChange}
            value={draftInput}
          />
          <SendButton />
        </>
      ) : null}
    </form>
  );
}
