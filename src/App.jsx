import React, { useState } from "react";
import Layouts from "./layouts/Layout";

const App = () => {
  const [userId, setUserId] = useState(null);

  const handleSignIn = (uid) => {
    setUserId(uid);
  };
  return (
    <div>
      <Layouts onSignIn={handleSignIn} userId={userId} />
    </div>
  );
};

export default App;
