import React from "react";
import FormSendAndShowText from "../common/FormSendAndShowText";
import SimpleIndex from "./SimpleIndex";
import FilterStatus from "./FilterStatus";
import UniqueIndex from "./UniqueIndex";
import { OtherUsersProvider } from "../core/OtherUsersProvider";
import { UniqueIndexProvider } from "../core/UniqueIndexProvider";

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
