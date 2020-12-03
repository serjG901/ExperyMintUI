import React from "react";
import SimpleIndex from "./SimpleIndex";
import { OtherUsersProvider } from "../core/OtherUsersProvider";
import { UniqueIndexProvider } from "../core/UniqueIndexProvider";
import UniqueIndex from "./UniqueIndex";
import FilterStatus from "./FilterStatus";
import FormSendAndShowText from "./FormSendAndShowText";

export default function StatisticOfUser() {
  return (
    <div className="w-1/2 pb-8">
      <SimpleIndex nameProperty="score" />
      <SimpleIndex nameProperty="mistruth" />
      <OtherUsersProvider>
        <UniqueIndexProvider>
          <UniqueIndex />
        </UniqueIndexProvider>
      </OtherUsersProvider>
      <FilterStatus />
      <FormSendAndShowText nameProperty="filter" />
    </div>
  );
}
