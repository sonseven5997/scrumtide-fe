"use client";

import { Button } from "antd";
import { useState } from "react";
import SelectFeatureModal from "./_components/SelectFeatureModal";

export type DefaultModalStateType = {
  visible: boolean;
  type?: "planning-poker" | "retrospective";
};

export const defaultModalState: DefaultModalStateType = {
  visible: false,
};

export default function RootPage() {
  const [modalState, setModalState] = useState(defaultModalState);
  return (
    <>
      <div className="h-screen w-screen fixed justify-center items-center flex md:flex-row flex-col gap-4 p-4">
        <Button
          className="md:w-full max-w-100 !h-50"
          onClick={() => setModalState({ visible: true, type: "planning-poker" })}
        >
          Planning Poker
        </Button>
        <Button
          className="md:w-full max-w-100 !h-50"
          onClick={() => setModalState({ visible: true, type: "retrospective" })}
        >
          Retrospective
        </Button>
      </div>
      <SelectFeatureModal
        modalState={modalState}
        setModalState={setModalState}
      />
    </>
  );
}
