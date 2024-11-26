import Picker from "./Picker";
import Modal from "./Modal";


export default function ModalPicker({
    title,
    data,
    state: { visible, setVisible, currentIdx, setIdx, _defaultIdx } 
})
{
    return <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <Picker
            title={title}
            data={data}
            onConfirm={idx => {setIdx(idx); setVisible(false)}}
            onBack={() => setVisible(false)}
            oldIdx={currentIdx}
        />
    </Modal>;
}