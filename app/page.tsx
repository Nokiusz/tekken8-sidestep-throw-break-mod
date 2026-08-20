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

export default function Home() {
  return (
    <>
      <header className="site-header">
        <h1>
          TEKKEN<span className="accent">8</span>
        </h1>
        <p className="subtitle">Sidestep Direction &amp; Throw Break Icons</p>
      </header>

      <main className="icon-grid">
        {ICONS.map((fileName) => (
          <div className="icon-card" key={fileName}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/img/L/${fileName}`}
              alt={fileName.replace("T_UI_HUD_Character_Icon_", "").replace(".png", "")}
              loading="lazy"
            />
          </div>
        ))}
      </main>

      <footer className="site-footer">
        <p>
          Icon set from{" "}
          <a
            href="https://tekkenmods.com/mod/4838/general-sidestep-direction-throw-break-ui-with-dlcs-working"
            target="_blank"
            rel="noopener noreferrer"
          >
            General Sidestep Direction &amp; Throw Break UI
          </a>
        </p>
      </footer>
    </>
  );
}
