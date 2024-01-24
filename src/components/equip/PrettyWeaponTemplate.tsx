import {Box, Card, Grid} from "@mui/material";
import {FabCardHeader} from "../FabCard"
import EditableImage from "../EditableImage";
import {useTheme} from "@mui/material/styles";
import {CloseBracket, OpenBracket} from "../Bracket";
import React from "react";
import attributes from "../../libs/attributes";
import types from "../../libs/types";
import ReactMarkdown from "react-markdown";
import {DiamondIcon} from "../icons";

interface PrettyWeaponTemplateProps {
  data: {
    name: string,
    cost: number,
    att1: string,
    att2: string,
    prec: number,
    damage: number,
    type: string,
    category: string,
    hands: number,
    melee: boolean,
    ranged: boolean,
    quality: string,
  }
}

function PrettyWeaponTemplate({data}: PrettyWeaponTemplateProps) {
  const theme = useTheme()

  return <Card>
    <FabCardHeader>
      <Grid container>
        <Grid item xs={4} sx={{pl: 1}}>Weapon</Grid>
        <Grid item xs={2}>Cost</Grid>
        <Grid item xs={3}>Accuracy</Grid>
        <Grid item xs={3}>Damage</Grid>
      </Grid>
    </FabCardHeader>

    <Box display="grid" gridTemplateColumns="repeat(24, 1fr)" gridTemplateRows="repeat(2, 1fr)">
      <Box gridRow="span 2" gridColumn="span 3" sx={{
        borderRight: `1px solid ${theme.palette.secondary.main}`,
        borderBottom: `1px solid ${theme.palette.secondary.main}`
      }}>
        <EditableImage size={70}/>
      </Box>
      <Box gridColumn="span 21" sx={{
        background: `linear-gradient(to right, ${theme.palette.secondary.light}, transparent)`,
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
        py: "5px",
        px: 1
      }}>
        <Box display="grid" gridTemplateColumns="repeat(21, 1fr)">
          <Box gridColumn="span 5" sx={{fontWeight: "bold"}}>
            {data.name}
          </Box>
          <Box gridColumn="span 4">
            {data.cost}z
          </Box>
          <Box gridColumn="span 6" sx={{fontWeight: "bold"}}>
            <OpenBracket/>
            {`${attributes[data.att1].shortcaps} + ${
              attributes[data.att2].shortcaps
            }`}
            <CloseBracket/>
            {data.prec !== 0 ? `+${data.prec}` : ""}
          </Box>
          <Box gridColumn="span 6" sx={{fontWeight: "bold"}}>
            <OpenBracket/>
            HR + {data.damage}
            <CloseBracket/>
            {types[data.type].long}
          </Box>
        </Box>
      </Box>
      <Box gridColumn="span 21" sx={{py: "5px", px: 1, fontFamily: theme.typography.fontFamily,         borderBottom: `1px solid ${theme.palette.secondary.main}`,
      }}>
        <Box>
          {data.category}
          <DiamondIcon color={theme.palette.primary.main}/>
          {data.hands === 1 && "One-handed"}
          {data.hands === 2 && "Two-handed"}
          <DiamondIcon color={theme.palette.primary.main}/>
          {data.melee && "Melee"}
          {data.ranged && "Ranged"}
        </Box>
      </Box>
      <Box gridColumn="span 24" sx={{py: "5px", px: 1}}>
        {!data.quality && "No Qualities"}
        <ReactMarkdown allowedElements={["strong"]} unwrapDisallowed={true}
        >
          {data.quality}
        </ReactMarkdown>
      </Box>
    </Box>
  </Card>
}

export default PrettyWeaponTemplate