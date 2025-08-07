import { Button, Card } from "antd";
import PokerItem from "../_components/PokerItem";

export default async function PlanningPokerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);
  return (
    <>
      <div className="flex flex-col gap-4 flex-1 justify-center items-center">
        <div className="flex flex-row gap-4 w-full max-w-lg flex-wrap justify-between">
          <PokerItem />
          <PokerItem />
          <PokerItem />
          <PokerItem />
        </div>
        <div className="flex flex-row gap-4 w-full max-w-lg flex-wrap justify-between items-center">
          <PokerItem />
          <Card className="!bg-blue-50 flex justify-center items-center h-full">
            <Button type="primary">Reveal Cards</Button>
          </Card>
          <PokerItem />
        </div>
        <div className="flex flex-row gap-4 w-full max-w-lg flex-wrap justify-between">
          <PokerItem />
          <PokerItem />
          <PokerItem />
          <PokerItem />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 flex flex-row gap-4 md:justify-between overflow-x-auto">
        <Button className="!h-20 !w-10 !text-xl !font-bold">0</Button>
        <Button className="!h-20 !w-10 !text-xl !font-bold">1</Button>
        <Button className="!h-20 !w-10 !text-xl !font-bold">2</Button>
        <Button className="!h-20 !w-10 !text-xl !font-bold">3</Button>
        <Button className="!h-20 !w-10 !text-xl !font-bold">5</Button>
        <Button className="!h-20 !w-10 !text-xl !font-bold">8</Button>
        <Button className="!h-20 !w-10 !text-xl !font-bold">13</Button>
        <Button className="!h-20 !w-10 !text-xl !font-bold">21</Button>
        <Button className="!h-20 !w-10 !text-xl !font-bold">34</Button>
        <Button className="!h-20 !w-10 !text-xl !font-bold">55</Button>
        <Button className="!h-20 !w-10 !text-xl !font-bold">89</Button>
      </div>
    </>
  );
}
