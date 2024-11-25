

import { useState } from "react";

export default function useModalPicker(data, defaultValue)
{

    const [visible, setVisible] = useState(false);
    defaultValue = defaultValue ?? data[0].value;
    const [currentValue, setValue] = useState(defaultValue);

    return {
        data,
        state: { visible, setVisible, currentValue, setValue, defaultValue }
    };
}