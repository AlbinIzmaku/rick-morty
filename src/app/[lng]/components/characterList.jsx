import Character from "./character";

export default function CharacterList({ characters, lastCharacterRef, t }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-10">
      {characters.map((character, index) => (
        <Character
          key={character.id}
          {...character}
          lastCharacterRef={lastCharacterRef}
          index={index}
          characters={characters}
          t={t}
        />
      ))}
    </div>
  );
}
