// List of icon files in img/L (auto-generated from folder contents)
const ICONS: string[] = [
  "T_UI_HUD_Character_Icon_L_aml.png",
  "T_UI_HUD_Character_Icon_L_ant.png",
  "T_UI_HUD_Character_Icon_L_bbn.png",
  "T_UI_HUD_Character_Icon_L_bee.png",
  "T_UI_HUD_Character_Icon_L_bsn.png",
  "T_UI_HUD_Character_Icon_L_cat.png",
  "T_UI_HUD_Character_Icon_L_cbr.png",
  "T_UI_HUD_Character_Icon_L_ccn.png",
  "T_UI_HUD_Character_Icon_L_cht.png",
  "T_UI_HUD_Character_Icon_L_cml.png",
  "T_UI_HUD_Character_Icon_L_crw.png",
  "T_UI_HUD_Character_Icon_L_ctr.png",
  "T_UI_HUD_Character_Icon_L_der.png",
  "T_UI_HUD_Character_Icon_L_dog.png",
  "T_UI_HUD_Character_Icon_L_ghp.png",
  "T_UI_HUD_Character_Icon_L_grf.png",
  "T_UI_HUD_Character_Icon_L_grl.png",
  "T_UI_HUD_Character_Icon_L_hms.png",
  "T_UI_HUD_Character_Icon_L_hrs.png",
  "T_UI_HUD_Character_Icon_L_jly.png",
  "T_UI_HUD_Character_Icon_L_kal.png",
  "T_UI_HUD_Character_Icon_L_kgr.png",
  "T_UI_HUD_Character_Icon_L_klw.png",
  "T_UI_HUD_Character_Icon_L_kmd.png",
  "T_UI_HUD_Character_Icon_L_lon.png",
  "T_UI_HUD_Character_Icon_L_lzd.png",
  "T_UI_HUD_Character_Icon_L_mnt.png",
  "T_UI_HUD_Character_Icon_L_okm.png",
  "T_UI_HUD_Character_Icon_L_pgn.png",
  "T_UI_HUD_Character_Icon_L_pig.png",
  "T_UI_HUD_Character_Icon_L_rat.png",
  "T_UI_HUD_Character_Icon_L_rbt.png",
  "T_UI_HUD_Character_Icon_L_snk.png",
  "T_UI_HUD_Character_Icon_L_swl.png",
  "T_UI_HUD_Character_Icon_L_tgr.png",
  "T_UI_HUD_Character_Icon_L_ttr.png",
  "T_UI_HUD_Character_Icon_L_usi.png",
  "T_UI_HUD_Character_Icon_L_wkz.png",
  "T_UI_HUD_Character_Icon_L_wlf.png",
  "T_UI_HUD_Character_Icon_L_zbr.png",
  "T_UI_HUD_Character_Icon_R_ker.png",
  "T_UI_HUD_Character_Icon_R_knk.png",
];

function buildCard(fileName: string): HTMLDivElement {
  const card = document.createElement("div");
  card.className = "icon-card";

  const img = document.createElement("img");
  img.src = `img/L/${fileName}`;
  img.alt = fileName
    .replace("T_UI_HUD_Character_Icon_", "")
    .replace(".png", "");
  img.loading = "lazy";

  card.appendChild(img);
  return card;
}

const grid = document.getElementById("iconGrid") as HTMLDivElement | null;

if (grid) {
  for (const fileName of ICONS) {
    grid.appendChild(buildCard(fileName));
  }
}
