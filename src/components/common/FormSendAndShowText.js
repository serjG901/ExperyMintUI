import React, { useState } from "react";
import TextInput from "./TextInput";
import SendButton from "./SendButton";
import { useTheme } from "../core/ThemeProvider";
import { useUser, useUserSet } from "../core/UserProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function FormSendAndShowText({ nameProperty }) {
  const user = useUser();
  const setUser = useUserSet();
  const themeColor = useTheme();
  const language = useLanguage();

  const [statusInput, setStatusInput] = useState(false);
  const [draftInput, setDraftInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const dataSource = draftInput.trim();
    setUser({ ...user, [nameProperty]: dataSource });
    setDraftInput("");
    setStatusInput(false);
  }

  function handleChange(event) {
    setDraftInput(event.target.value);
  }

  return (
    <form className="p-2 mb-2" onSubmit={handleSubmit}>
      <label
        htmlFor={nameProperty}
        title={
          statusInput
            ? ""
            : `${language.formExplane} ${
                nameProperty === "tags"
                  ? language.formTags
                  : nameProperty === "filter"
                  ? language.formFilter
                  : language.formManifest
              }`
        }
        className="block text-sm cursor-pointer"
        onClick={() => setStatusInput(!statusInput)}
      >
        <span className={`${themeColor.colorTextLabel} font-bold`}>
          {nameProperty === "tags"
            ? language.formTags
            : nameProperty === "filter"
            ? language.formFilter
            : language.formManifest}
        </span>
        <p
          className={
            statusInput
              ? `${themeColor.colorTextData} break-words`
              : `${themeColor.colorTextData} break-words text-2xl font-bold`
          }
        >
          {user[nameProperty]}
        </p>
      </label>
      {statusInput ? (
        <>
          <TextInput
            nameProperty={nameProperty}
            onChange={handleChange}
            value={draftInput}
          />
          <SendButton />
        </>
      ) : null}
    </form>
  );
}
