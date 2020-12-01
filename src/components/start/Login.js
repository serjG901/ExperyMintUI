import React, { useEffect, useState } from "react";
import { isNameFree, login, setUser } from "../../lib/fetchData";
import SendButton from "../common/SendButton";
import TextInput from "../common/TextInput";
import { useLoginSet } from "../core/LoginProvider";
import { useTheme } from "../core/ThemeProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { usePushUpSet } from "../core/PushUpProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function Login() {
  const [nameStatus, setNameStatus] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState(true);
  const [changeName, setChangeName] = useState(false);
  const [nameDraft, setNameDraft] = useState("");
  const [passwordDraft, setPasswordDraft] = useState("");

  const setLogin = useLoginSet();
  const themeColor = useTheme();
  const language = useLanguage();
  const setPushUpError = usePushUpErrorSet();
  const setPushUp = usePushUpSet();

  function handleSubmit(event) {
    event.preventDefault();
    const currentDate = Date.now();
    const user = {
      name: nameDraft,
      password: passwordDraft,
      lastUpdate: currentDate
    };
    setPushUp(language.loginConnect);
    if (nameStatus) {
      setUser(user)
        .then((statusDataSaved) => {
          setPushUp(null);
          if (statusDataSaved) {
            setLogin(true);
          } else {
            setPushUpError(language.loginCrash);
          }
        })
        .catch((error) => {
          setPushUp(null);
          setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    } else {
      login(user)
        .then((statusLogin) => {
          setPushUp(null);
          setPasswordStatus(statusLogin);
          if (statusLogin) setLogin(true);
        })
        .catch((error) => {
          setPushUp(null);
          setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    }
  }

  useEffect(() => {
    if (nameDraft === "") {
      setChangeName(false);
      return;
    }
    setPushUp(language.isNameFree);
    isNameFree(nameDraft)
      .then((status) => {
        setPushUp(null);
        setNameStatus(status);
        setChangeName(true);
      })
      .catch((error) => {
        setPushUp(null);
        setPushUpError(language.failedToFetch);
        console.log(error.message);
      });
  }, [
    nameDraft,
    setPushUp,
    setPushUpError,
    language.isNameFree,
    language.failedToFetch
  ]);

  useEffect(() => {
    setPasswordStatus(true);
  }, [passwordDraft]);

  function handleChangeName(event) {
    setNameDraft(event.target.value.trim());
  }

  function handleChangePassword(event) {
    setPasswordDraft(event.target.value.trim());
  }

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className={`${themeColor.colorTextLabel}`}>
          {!changeName
            ? language.loginLabelName[1]
            : nameStatus
            ? language.loginLabelName[2]
            : language.loginLabelName[3]}
        </label>
        <TextInput
          nameProperty="name"
          onChange={handleChangeName}
          required
          maxLength={"28"}
          value={nameDraft}
        />
        <label htmlFor="password" className={`${themeColor.colorTextLabel}`}>
          {passwordStatus
            ? language.loginLabelPassword[1]
            : language.loginLabelPassword[2]}
        </label>
        <TextInput
          nameProperty="password"
          type="password"
          onChange={handleChangePassword}
          required
          maxLength={"28"}
          value={passwordDraft}
        />
        <SendButton>{language.loginButton}</SendButton>
      </form>
    </div>
  );
}
