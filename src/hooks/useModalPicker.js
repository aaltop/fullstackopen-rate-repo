

import { useState } from "react";

export default function useModalPicker(data, defaultIdx = 0)
{

    const [visible, setVisible] = useState(false);
    const [currentIdx, setIdx] = useState(defaultIdx);

    return {
        data,
        getValue: () => data[currentIdx].value,
        getText: () => data[currentIdx].text,
        state: { visible, setVisible, currentIdx, setIdx, defaultIdx }
    };
}