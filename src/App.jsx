import ContactList from "./Components/ContactList"
import { useState } from "react";
import ContactRow from "./Components/ContactRow";



const App = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
      
    </>
  );
}


export default App
