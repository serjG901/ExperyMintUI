import React from "react";
import SimpleIndex from "./SimpleIndex";
import { PeopleProvider } from "../core/PeopleProvider";
import { UniqueIndexProvider } from "../core/UniqueIndexProvider";
import UniqueIndex from "./UniqueIndex";
import FilterStatus from "./FilterStatus";
import SetAndShowProperty from "./SetAndShowProperty";

export default function StatisticOfUser() {
  return (
    <div className="w-1/2 pb-8">
      <SimpleIndex property="score" />
      <SimpleIndex property="mistruth" />
      <PeopleProvider>
        <UniqueIndexProvider>
          <UniqueIndex />
        </UniqueIndexProvider>
      </PeopleProvider>
      <FilterStatus />
      <SetAndShowProperty property="filter" />
    </div>
  );
}
