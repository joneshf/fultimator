import React, { useState, useEffect } from "react";
import { useTranslate } from "../../../../translation/translate";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import shields from "../../../../libs/shields";
import qualities from "../../../../routes/equip/ArmorShield/qualities";
import ChangeBase from "./ChangeBase";
import SelectQuality from "../../../../routes/equip/ArmorShield/SelectQuality";
import ChangeName from "../../../../routes/equip/common/ChangeName";
import ChangeQuality from "../../../../routes/equip/common/ChangeQuality";
import ApplyRework from "../../../../routes/equip/common/ApplyRework";
import PrettyArmor from "../armor/PrettyArmor";
import ChangeModifiers from "../ChangeModifiers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PlayerShieldModal({
  open,
  onClose,
  editShieldIndex,
  shield,
  setShield,
  onAddShield,
  onDeleteShield,
}) {
  const { t } = useTranslate();

  const [base, setBase] = useState(shield?.base || shields[0]);
  const [name, setName] = useState(shield?.name || shields[0].name);
  const [quality, setQuality] = useState(shield?.quality || "");
  const [martial, setMartial] = useState(shield?.martial || false);
  const [qualityCost, setQualityCost] = useState(shield?.qualityCost || 0);
  const [selectedQuality, setSelectedQuality] = useState(
    shield?.selectedQuality || ""
  );
  const [init, setInit] = useState(shield?.init || 0);
  const [rework, setRework] = useState(shield?.rework || false);
  const [defModifier, setDefModifier] = useState(shield?.defModifier || 0);
  const [mDefModifier, setMDefModifier] = useState(shield?.mDefModifier || 0);
  const [initModifier, setInitModifier] = useState(shield?.initModifier || 0);
  const [isEquipped, setIsEquipped] = useState(shield?.isEquipped || false);

  useEffect(() => {
    setBase(shield?.base || shields[0]);
    setName(shield?.name || shields[0].name);
    setQuality(shield?.quality || "");
    setMartial(shield?.martial || false);
    setQualityCost(shield?.qualityCost || 0);
    setSelectedQuality(shield?.selectedQuality || "");
    setInit(shield?.init || 0);
    setRework(shield?.rework || false);
    setIsEquipped(shield?.isEquipped || false);
    setDefModifier(shield?.defModifier || 0);
    setMDefModifier(shield?.mDefModifier || 0);
    setInitModifier(shield?.initModifier || 0);
  }, [shield]);

  function calcCost() {
    let cost = base.cost;
    // Quality
    cost += parseInt(qualityCost);
    return cost;
  }

  const cost = calcCost();

  const handleClearFields = () => {
    setBase(shields[0]);
    setName(shields[0].name);
    setMartial(shields[0].martial);
    setQuality("");
    setQualityCost(0);
    setSelectedQuality("");
    setInit(shields[0].init);
    setRework(false);
    setDefModifier(0);
    setMDefModifier(0);
    setInitModifier(0);
  };

  const handleSave = () => {
    const updatedShield = {
      base,
      name,
      quality,
      martial,
      qualityCost,
      selectedQuality,
      init,
      rework,
      isEquipped: martial !== shield?.martial ? false : isEquipped,
      cost,
      category: "Shield",
      def: base.def,
      mdef: base.mdef,
      defModifier: parseInt(defModifier),
      mDefModifier: parseInt(mDefModifier),
      initModifier: parseInt(initModifier),
    };

    onAddShield(updatedShield);
  };

  const handleDelete = (shieldIndex) => {
    if (shieldIndex !== null) {
      onDeleteShield(shieldIndex);
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: "lg",
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        {t("Add Shield")}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <Close />
      </IconButton>
      <DialogContent>
        <Grid container spacing={2} alignItems="center">
          {/* Form */}

          {/* Change Base */}
          <Grid item xs={12} md={4}>
            <ChangeBase
              value={base.name}
              onChange={(e) => {
                const base = shields.find((el) => el.name === e.target.value);

                setBase(base);
                setName(base.name);
                setMartial(base.martial);
                setInit(base.init);
              }}
            />
          </Grid>
          {/* <Grid item xs={2}>
                <ChangeMartial martial={martial} setMartial={setMartial} />
              </Grid> */}
          <Grid item xs={12} md={4}>
            <SelectQuality
              quality={selectedQuality}
              setQuality={(e) => {
                const quality = qualities.find(
                  (el) => el.name === e.target.value
                );
                setSelectedQuality(quality.name);
                setQuality(quality.quality);
                setQualityCost(quality.cost);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <ChangeName
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <ChangeQuality
              quality={quality}
              setQuality={(e) => setQuality(e.target.value)}
              qualityCost={qualityCost}
              setQualityCost={(e) => setQualityCost(e.target.value)}
            />
          </Grid>
          <Accordion sx={{ width: "100%", marginLeft: "10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Modifiers</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ChangeModifiers
                    label={"DEF Modifier"}
                    value={defModifier}
                    onChange={(e) => setDefModifier(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ChangeModifiers
                    label={"MDEF Modifier"}
                    value={mDefModifier}
                    onChange={(e) => setMDefModifier(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ChangeModifiers
                    label={"INIT Modifier"}
                    value={initModifier}
                    onChange={(e) => setInitModifier(e.target.value)}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} sx={{ py: 0 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Button variant="outlined" onClick={handleClearFields}>
                  {t("Clear All Fields")}
                </Button>
              </Grid>
              {/* Rework */}
              <Grid item xs>
                <ApplyRework rework={rework} setRework={setRework} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>
        </Grid>
        {/* Pretty */}
        <Grid item xs={12} sm={6}>
          <PrettyArmor
            armor={{
              base,
              ...base,
              name: name,
              cost: cost,
              martial: martial,
              quality: quality,
              init: init,
              rework: rework,
              defModifier: parseInt(defModifier),
              mDefModifier: parseInt(mDefModifier),
              initModifier: parseInt(initModifier),
            }}
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        {editShieldIndex !== null && (
          <Button onClick={() => handleDelete(editShieldIndex)} color="error">
            {t("Delete")}
          </Button>
        )}
        <Button onClick={handleSave} color="primary">
          {t("Save Changes")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
