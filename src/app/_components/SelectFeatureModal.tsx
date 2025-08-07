import { Input, Modal, Radio } from "antd";
import { defaultModalState, DefaultModalStateType } from "../page";
import { useEffect, useMemo, useState } from "react";

enum Actions {
  CREATE = 1,
  JOIN = 2,
}

export default function SelectFeatureModal({
  modalState,
  setModalState,
}: {
  modalState: DefaultModalStateType;
  setModalState: (modalState: DefaultModalStateType) => void;
}) {
  const [action, setAction] = useState<Actions | undefined>();
  const [code, setCode] = useState<string>("");

  const title = useMemo(() => {
    switch (modalState.type) {
      case "planning-poker":
        return "Planning Poker";
      case "retrospective":
        return "Retrospective";
      default:
        return "";
    }
  }, [modalState.type]);

  const onOk = () => {};

  useEffect(() => {
    if (!modalState.visible) {
      setAction(undefined);
      setCode("");
    }
  }, [modalState]);

  return (
    <Modal
      title={title}
      open={modalState.visible}
      onCancel={() => setModalState(defaultModalState)}
      okText="Next"
      onOk={onOk}
      destroyOnHidden
    >
      <Radio.Group
        value={action}
        onChange={(e) => setAction(e.target.value)}
        className="!flex !flex-col !gap-2"
        options={[
          { value: Actions.CREATE, label: "Create" },
          {
            value: Actions.JOIN,
            label: (
              <div className="flex flex-row gap-2 items-center">
                Join
                {action === Actions.JOIN && (
                  <Input
                    placeholder="Enter code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                )}
              </div>
            ),
          },
        ]}
      />
    </Modal>
  );
}
