

import List from "./List";

function App() {
    const fruits = [{ id: 1, name: "apple", calorise: "60" },
                    { id: 2, name: "orrange", calorise: "45" },
                    { id: 3, name: "banana", calorise: "110" },
                    { id: 4, name: "guava", calorise: "37" }];
    const newFruits = [{ id: 1, name: "apple", calorise: "60" },
                    { id: 2, name: "orrange", calorise: "45" },
                    { id: 3, name: "banana", calorise: "110" },
                    { id: 4, name: "guava", calorise: "37" }];

    return (
        <>
            <List items = {fruits} category = "Fruits" />
            <List items = {newFruits} category = "new Fruits" />
        </>
    )
}
export default App;