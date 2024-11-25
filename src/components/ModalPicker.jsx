import Picker from "./Picker";
import Modal from "./Modal";


export default function ModalPicker({
    title,
    data,
    state: { visible, setVisible, currentValue, setValue, _defaultValue } 
})
{
    return <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <Picker
            title={title}
            data={data}
            onConfirm={value => {setValue(value); setVisible(false)}}
            onBack={() => setVisible(false)}
            oldValue={currentValue}
        />
    </Modal>;
}