import React, { useEffect, useState } from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { useSignIn, useSignUp } from "../core/UserProvider";
import { checkUserId } from "../../lib/fetchData";
import TextInput from "../common/TextInput";
import SendButton from "../common/SendButton";

export default function Login() {
  const themeColor = useTheme();
  const language = useLanguage();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const signUp = useSignUp();
  const signIn = useSignIn();

  const [userId, setUserId] = useState("");
  const [userIdChanges, setUserIdChanges] = useState(false);
  const [userIdIsFree, setUserIdIsFree] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordIsCorrect, setPasswordIsCorrect] = useState(true);

  async function handleSubmit(event) {
    event.preventDefault();
    if (userIdIsFree) {
      await signUp({ id: userId, password, theme: themeColor.color });
    } else {
      signIn({ id: userId, password, theme: themeColor.color }).then((user) => {
        if (user === null) setPasswordIsCorrect(false);
      });
    }
  }

  useEffect(() => {
    if (userId === "") {
      setUserIdChanges(false);
      return;
    }
    setPushUp(language.isNameFree);
    checkUserId(userId)
      .then((id) => {
        setPushUp(null);
        id === null ? setUserIdIsFree(true) : setUserIdIsFree(false);
        setUserIdChanges(true);
      })
      .catch((error) => {
        setPushUp(null);
        setPushUpError(language.failedToFetch);
        console.log(error.message);
      });
  }, [
    userId,
    setPushUp,
    setPushUpError,
    language.isNameFree,
    language.failedToFetch,
  ]);

  useEffect(() => setPasswordIsCorrect(true), [password]);

  function handleChangeName(event) {
    setUserId(event.target.value.trim());
  }

  function handleChangePassword(event) {
    setPassword(event.target.value.trim());
  }

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className={`${themeColor.colorTextLabel}`}>
          {!userIdChanges
            ? language.loginLabelName[1]
            : userIdIsFree
            ? language.loginLabelName[2]
            : language.loginLabelName[3]}
        </label>
        <TextInput
          property="name"
          onChange={handleChangeName}
          required
          maxLength={"28"}
          value={userId}
        />
        <label htmlFor="password" className={`${themeColor.colorTextLabel}`}>
          {passwordIsCorrect
            ? language.loginLabelPassword[1]
            : language.loginLabelPassword[2]}
        </label>
        <TextInput
          property="password"
          type="password"
          onChange={handleChangePassword}
          required
          maxLength={"28"}
          value={password}
        />
        <SendButton>{language.loginButton}</SendButton>
      </form>
    </div>
  );
}
