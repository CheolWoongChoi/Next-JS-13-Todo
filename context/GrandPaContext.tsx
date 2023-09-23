import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const GrandPaContext = createContext({
  talk: "",
  setTalk: () => null as unknown,
});

export function GrandPaProvider({ children }: PropsWithChildren) {
  const [value, setValue] = useState("grandpa");
  const handleSetTalk = () => setValue("talk-grandpa");

  return (
    <GrandPaContext.Provider value={{ talk: value, setTalk: handleSetTalk }}>
      {children}
    </GrandPaContext.Provider>
  );
}
