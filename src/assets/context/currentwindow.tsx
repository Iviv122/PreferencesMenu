import React, { createContext, ReactNode, useState } from "react";

interface ContexType{
    component: JSX.Element;
    setComponent: (newCompoment: JSX.Element) => void;
}

type Props = {
    children: ReactNode|null;
}

export const CurrentWindowContext = createContext<ContexType | null>(null);

export default function CurrentWindowProvider({children}: Props){

    const [component, setComponent] = useState<JSX.Element>(<div className="text-3xl font-bold ">Welcome</div>);

    return(
        <CurrentWindowContext.Provider value={{component,setComponent}}>
                {children}
        </CurrentWindowContext.Provider>
    );
}

