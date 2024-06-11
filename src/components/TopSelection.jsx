import { SelectionList } from "./SelectionList";
import { SelectionListItem } from "./SelectionListItem";

const topSelectionItemList = [
  {
    key: "1",
    title: "Banana Game",
    subTitle: "Seja uma banana...",
    image: "react-streaming-dashboard-selection-item-image-1.jpg",
    avatar: "react-streaming-dashboard-selection-item-avatar-1.jpg",
    tags: [
      { text: "kids", color: "#d94b87" },
      { text: "tweens", color: "#eb8052" },
    ],
  },
  {
    key: "2",
    title: "Squishy Muffinz",
    subTitle: "Novo mapa",
    image: "react-streaming-dashboard-selection-item-image-2.jpg",
    avatar: "react-streaming-dashboard-selection-item-avatar-2.jpg",
    tags: [{ text: "teens", color: "#70b944" }],
  },
  {
    key: "3",
    title: "Forza Horizon",
    subTitle: "Customize seu carro",
    image: "react-streaming-dashboard-selection-item-image-3.jpg",
    avatar: "react-streaming-dashboard-selection-item-avatar-3.jpg",
    tags: [{ text: "game", color: "#6647bf" }],
  },
];
export function TopSelection() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <div className="text-white text-3xl">Sua seleção principal</div>
        <div className="w-20 tag-red text-white flex rounded-full items-center justify-center py-0.5">
          <div className="w-2 h-2 rounded-full tag-red-dot" />
          <div className="ml-2 text-xs font-bold">Live</div>
        </div>
      </div>
      <div className="flex mt-8">
        <SelectionList />
        <div className="ml-24 space-x-8 flex">
          {topSelectionItemList.map((item) => (
            <SelectionListItem key={item.key} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
