import { ACTIONS } from "./App";

function Todo({ id, name, complete, dispatch }) {
    const toggleHandler = () => {
        dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: id } });
    }

    const deleteHandler = () => {
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } });
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <h4 style={{ color: `${complete ? 'grey' : 'black'}` }}>{name}</h4>
            <div style={{ marginLeft: '10px' }}>
                <button onClick={toggleHandler}>Toggle</button>
                <button onClick={deleteHandler}>Delete</button>
            </div>
        </div >
    );
}

export default Todo;