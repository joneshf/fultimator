import { useParams } from "react-router-dom";
import { firestore } from "../../firebase";

import { Grid, Divider, Fab } from "@mui/material";
import Layout from "../../components/Layout";
import NpcPretty from "../../components/npc/Pretty";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc, setDoc } from "@firebase/firestore";
import EditBasics from "../../components/npc/EditBasics";
import { Download, Save, Code, Publish } from "@mui/icons-material";
import { createRef, useCallback, useEffect, useState, useRef } from "react";
// import NpcUgly from "../../components/npc/Ugly";
import ExplainSkills from "../../components/npc/ExplainSkills";
import EditAttacks from "../../components/npc/EditAttacks";
import EditWeaponAttacks from "../../components/npc/EditWeaponAttacks";
import EditAffinities from "../../components/npc/EditAffinities";
import EditSpecial from "../../components/npc/EditSpecial";
import ExplainAffinities from "../../components/npc/ExplainAffinities";
import EditExtra from "../../components/npc/EditExtra";
import EditSpells from "../../components/npc/EditSpells";
import EditActions from "../../components/npc/EditActions";
import EditRareGear from "../../components/npc/EditRareGear";
import { createFileName, useScreenshot } from "use-react-screenshot";

export default function NpcEdit() {
  let params = useParams();
  const ref = doc(firestore, "npc-personal", params.npcId);

  const [npc] = useDocumentData(ref, {
    idField: "id",
  });

  const [npcTemp, setNpcTemp] = useState(npc);

  useEffect(() => {
    setNpcTemp(npc);
  }, [npc]);

  const handleCtrlS = useCallback(
    (e) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        setDoc(ref, npcTemp);
      }
    },
    [ref, npcTemp]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleCtrlS);
    return () => {
      document.removeEventListener("keydown", handleCtrlS);
    };
  });

  // Download
  const prettyRef = createRef(null);

  function downloadFile(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  const downloadJSON = () => {
    const jsonData = JSON.stringify(npcTemp);
    downloadFile(jsonData, "npc-export.json", "text/plain");
  };

  const [image, takeScreenShot] = useScreenshot();

  const download = (image, { name = "img", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const readFile = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsText(file, "utf-8");
      reader.onload = () => {
        try {
          const { result } = reader;
          if (!result) reject();
          resolve(JSON.parse(result));
        } catch (error) {
          reject();
        }
      };
    });

  const uploaderRef = useRef(null);

  const getImage = () => takeScreenShot(prettyRef.current);

  useEffect(() => {
    if (image) {
      download(image, { name: npc.name, extension: "png" });
    }
  }, [image, npc?.name]);

  if (!npcTemp) {
    return null;
  }

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <NpcPretty npc={npcTemp} ref={prettyRef} />
        </Grid>
        <Grid item xs={5}>
          <ExplainSkills npc={npcTemp} />
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />

      <EditBasics npc={npcTemp} setNpc={setNpcTemp} />

      <Divider sx={{ my: 2 }} />

      <Grid container>
        <Grid item xs={6}>
          <EditAffinities npc={npcTemp} setNpc={setNpcTemp} />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <ExplainAffinities npc={npcTemp} />
          <EditExtra npc={npcTemp} setNpc={setNpcTemp} />
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      <EditAttacks npc={npcTemp} setNpc={setNpcTemp} />
      <EditWeaponAttacks npc={npcTemp} setNpc={setNpcTemp} />

      <Divider sx={{ my: 2 }} />

      <EditSpells npc={npcTemp} setNpc={setNpcTemp} />

      <Divider sx={{ my: 2 }} />

      <Grid container>
        <Grid item xs={6}>
          <EditActions npc={npcTemp} setNpc={setNpcTemp} />
        </Grid>
        <Grid item xs={6}>
          <EditSpecial npc={npcTemp} setNpc={setNpcTemp} />
        </Grid>
        <Grid item xs={6}>
          <EditRareGear npc={npcTemp} setNpc={setNpcTemp} />
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />

      {/* <NpcUgly npc={npcTemp} /> */}

      <Fab
        color="primary"
        aria-label="save"
        sx={{ position: "absolute", bottom: 70, right: 0 }}
        onClick={() => {
          setDoc(ref, npcTemp);
        }}
        onKeyDown={(e) => {
          console.debug(e);
        }}
        disabled={JSON.stringify(npc) === JSON.stringify(npcTemp)}
      >
        <Save />
      </Fab>
      <Fab
        color="primary"
        aria-label="save"
        sx={{ position: "absolute", bottom: 5, right: 0 }}
        onClick={getImage}
      >
        <Download />
      </Fab>
      <Fab
        color="primary"
        aria-label="export"
        sx={{ position: "absolute", bottom: -120, right: 0 }}
        onClick={downloadJSON}
      >
        <Code />
      </Fab>

      <input
        type="file"
        ref={uploaderRef}
        multiple={false}
        accept=".json"
        style={{ display: " none" }}
        onChange={async ({ target }) => {
          const file = target.files?.[0];
          if (!file) return;
          setNpcTemp(await readFile(file));
        }}
      />
      <Fab
        color="primary"
        aria-label="export"
        sx={{ position: "absolute", bottom: -180, right: 0 }}
        onClick={() => {
          if (!uploaderRef.current) return;
          uploaderRef.current.click();
        }}
      >
        <Publish />
      </Fab>
    </Layout>
  );
}
