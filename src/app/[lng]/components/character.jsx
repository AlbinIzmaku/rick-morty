import List from "./list";
import ListItem from "./listItem";

export default function Character({
  id,
  name,
  status,
  species,
  gender,
  origin,
  lastCharacterRef,
  index,
  characters,
  t,
}) {
  return (
    <div
      key={id}
      ref={index === characters.length - 1 ? lastCharacterRef : null}
      className="realtive flex my-6 p-2 bg-white shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-lg transition-all cursor-pointer items-center gap-2 w-2xs"
    >
      <List>
        <ListItem>{name}</ListItem>
        <ListItem>{t(`character.${status.toLowerCase()}`)}</ListItem>
        <ListItem>{t(`character.${species.toLowerCase()}`)}</ListItem>
        <ListItem>{t(`character.${gender.toLowerCase()}`)}</ListItem>
        <ListItem>{origin?.name}</ListItem>
      </List>
    </div>
  );
}
