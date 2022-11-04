import { mdiPencilOutline } from "@mdi/js";
import {
  OptSideLayoutContent,
  OptActionToolbar,
  OptActionButton,
} from "@optsol/react";
import React, { useState } from "react";
import { Colors } from "../../core/colors";
import { Routes } from "../../routes/index.routes";

const CONFIRMAR = "Editar";

const Home = () => {
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = () => setIsEditing(true);

  return (
    <OptSideLayoutContent>
      <OptActionToolbar
        goBackRoute={Routes.Home}
        title="Exibição da proposta"
        background={Colors.white}
        color={Colors.primary}
        clearMargin
      >
        <OptActionButton
          startIcon={{
            path: mdiPencilOutline,
            color: Colors.primary,
          }}
          disabled={isEditing}
          onClick={handleClick}
        >
          {CONFIRMAR}
        </OptActionButton>
      </OptActionToolbar>
      <span>Home</span>
    </OptSideLayoutContent>
  );
};

export default Home;
