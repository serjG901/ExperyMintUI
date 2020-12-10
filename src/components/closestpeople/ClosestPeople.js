import React from "react";
import UserName from "../account/UserName";
import SetAndShowProperty from "../account/SetAndShowProperty";
import { PeopleProvider } from "../core/PeopleProvider";
import { PersonListProvider } from "../core/PersonListProvider";
import PersonList from "./PersonList";

export default function ClosestPeople() {
  return (
    <div className="py-4">
      <UserName />
      <SetAndShowProperty property="manifest" />
      <PeopleProvider>
        <PersonListProvider>
          <PersonList />
        </PersonListProvider>
      </PeopleProvider>
    </div>
  );
}
