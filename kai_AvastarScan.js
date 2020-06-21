const kai_AvastarScan = ( ()=>{

    // constants
const traitRef = { 
    'Skin Tone' : [
        {name:`Pale Pink`,rarity:`Common`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#FADFD5;`},
        {name:`Amber Brown`,rarity:`Common`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#894C1A;`},
        {name:`Tumbleweed`,rarity:`Common`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#E0AB8B;`},
        {name:`Mellow Apricot`,rarity:`Uncommon`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#F1C27D;`},
        {name:`Mohave Sand`,rarity:`Uncommon`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#EAC2B0;`},
        {name:`Brown Sugar`,rarity:`Uncommon`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#B06C49;`},
        {name:`Navaho White`,rarity:`Rare`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#FFDBAC;`},
        {name:`Deer`,rarity:`Rare`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#C68863;`},
        {name:`Pale Chestnut`,rarity:`Rare`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#E1B9B9;`},
        {name:`Champagne Pink`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#EDDBD6;`},
        {name:`Peach Puff`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#F6D3BD;`},
        {name:`Pastel Pink`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#E2A898;`},
        {name:`Lavender Rose`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#F8AFF8;`},
        {name:`Zombie`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#54C571;`},
        {name:`Alien`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`.skin_fill{fill:#9CCDE2;`},
    ],
    'Hair Color' : [
        {name:`Bleached Blonde`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`.hair_fill{fill:#DCD0BA;`},
        {name:`White Blonde`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`.hair_fill{fill:#FFF5E1;`},
        {name:`Light Blonde`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`.hair_fill{fill:#E6CEA8;`},
        {name:`Strawberry Blonde`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`.hair_fill{fill:#A56B46;`},
        {name:`Light Red`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`.hair_fill{fill:#B55239;`},
        {name:`Dark Red`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`.hair_fill{fill:#8D4A43;`},
        {name:`Brown`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`.hair_fill{fill:#6A4E42;`},
        {name:`Light Brown`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`.hair_fill{fill:#A7856A;`},
        {name:`Ash Brown`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`.hair_fill{fill:#977961;`},
        {name:`Orange`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`.hair_fill{fill:#FF9900;`},
        {name:`Off Black`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`.hair_fill{fill:#2C222B;`},
        {name:`Dark Brown`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`.hair_fill{fill:#3B3024;`},
        {name:`Light Grey`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`.hair_fill{fill:#D6C4C2;`},
        {name:`Medium Grey`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`.hair_fill{fill:#B7A69E;`},
        {name:`Dark Grey`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`.hair_fill{fill:#71635A;`},
        {name:`Golden Blonde`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`.hair_fill{fill:#E5C8A8;`},
        {name:`Ash Blonde`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`.hair_fill{fill:#DEBC99;`},
        {name:`Honey Blonde`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`.hair_fill{fill:#B89778;`},
        {name:`Platinum Blonde`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`.hair_fill{fill:#CABFB1;`},
        {name:`Light Auburn`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`.hair_fill{fill:#91553D;`},
        {name:`Dark Auburn`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`.hair_fill{fill:#533D32;`},
        {name:`Medium Brown`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`.hair_fill{fill:#4E433F;`},
        {name:`Reddish Brown`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`.hair_fill{fill:#504444;`},
        {name:`Grey`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`.hair_fill{fill:#848484;`},
        {name:`Dark Sky`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`.hair_fill{fill:#417A9B;`},
        {name:`Spring Rain`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`.hair_fill{fill:#4ED3A6;`},
        {name:`Black`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`.hair_fill{fill:#090806;`},
        {name:`Sun`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`.hair_fill{fill:#E4A83E;`},
        {name:`Fire`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`.hair_fill{fill:#F95946;`},
        {name:`Leaf`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`.hair_fill{fill:#7DCD6A;`},
        {name:`Blue`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`.hair_fill{fill:#4A86E8;`},
        {name:`Yellow`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`.hair_fill{fill:#FFFF00;`},
        {name:`Daisies`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`.hair_fill{fill:#E7D35B;`},
        {name:`Red Berry`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`.hair_fill{fill:#980000;`},
        {name:`Cyan`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`.hair_fill{fill:#00FFFF;`},
        {name:`Lava`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`.hair_fill{fill:#FF0000;`},
        {name:`Neon Green`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`.hair_fill{fill:#00FF00;`},
        {name:`Bright Purple`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`.hair_fill{fill:#9900FF;`},
        {name:`Neon Pink`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`.hair_fill{fill:#FF00FF;`},
    ],
    'Eye Color' : [
        {name:`Bubbles`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`.eye_iris{fill:#E7FEFF;`},
        {name:`Rosewood`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`.eye_iris{fill:#65000B;`},
        {name:`Baby`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`.eye_iris{fill:#89CFF0;`},
        {name:`Cerulean`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`.eye_iris{fill:#007BA7;`},
        {name:`Inchworm`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`.eye_iris{fill:#B2EC5D;`},
        {name:`Celadon`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`.eye_iris{fill:#ACE1AF;`},
        {name:`Pistachio`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`.eye_iris{fill:#93C572;`},
        {name:`Dark Olive`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`.eye_iris{fill:#556B2F;`},
        {name:`Bright Lavender`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`.eye_iris{fill:#BF94E4;`},
        {name:`Lavender`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`.eye_iris{fill:#B57EDC;`},
        {name:`Grape`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`.eye_iris{fill:#966FD6;`},
        {name:`Purple Heart`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`.eye_iris{fill:#69359C;`},
        {name:`Iceberg`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`.eye_iris{fill:#71A6D2;`},
        {name:`Cornflower`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`.eye_iris{fill:#6495ED;`},
        {name:`Air Force Blue`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`.eye_iris{fill:#5D8AA8;`},
        {name:`Denim`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`.eye_iris{fill:#1560BD;`},
        {name:`Classic Rose`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`.eye_iris{fill:#FBCCE7;`},
        {name:`Pastel Magenta`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`.eye_iris{fill:#F49AC2;`},
        {name:`Eggplant`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`.eye_iris{fill:#614051;`},
        {name:`Dark Raspberry`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`.eye_iris{fill:#872657;`},
        {name:`Pastel Blue`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`.eye_iris{fill:#AEC6CF;`},
        {name:`Dark Cyan`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`.eye_iris{fill:#008B8B;`},
        {name:`Pine Green`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`.eye_iris{fill:#01796F;`},
        {name:`Prune`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`.eye_iris{fill:#701C1C;`},
        {name:`Lawn Green`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`.eye_iris{fill:#7CFC00;`},
        {name:`Pastel Green`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`.eye_iris{fill:#77DD77;`},
        {name:`Violet`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`.eye_iris{fill:#8F00FF;`},
        {name:`Dark Lavender`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`.eye_iris{fill:#734F96;`},
        {name:`Azure`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`.eye_iris{fill:#007FFF;`},
        {name:`Cobalt`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`.eye_iris{fill:#0047AB;`},
        {name:`Apricot`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`.eye_iris{fill:#FBCEB1;`},
        {name:`Sky Magenta`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`.eye_iris{fill:#CF71AF;`},
        {name:`Auburn`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`.eye_iris{fill:#6D351A;`},
        {name:`Lavender Blue`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`.eye_iris{fill:#CCCCFF;`},
        {name:`Byzantine`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`.eye_iris{fill:#BD33A4;`},
        {name:`Citrine`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`.eye_iris{fill:#E4D00A;`},
        {name:`Chestnut`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`.eye_iris{fill:#CD5C5C;`},
        {name:`Jade`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`.eye_iris{fill:#00A86B;`},
        {name:`Gamboge`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`.eye_iris{fill:#E49B0F;`},
        {name:`Bole`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`.eye_iris{fill:#79443B;`},
        {name:`Duke Blue`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`.eye_iris{fill:#00009C;`},
        {name:`Plumb`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`.eye_iris{fill:#8E4585;`},
        {name:`Clover`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`.eye_iris{fill:#00FF6F;`},
        {name:`Dark Slate Grey`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`.eye_iris{fill:#2F4F4F;`},
        {name:`Mint`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`.eye_iris{fill:#3EB489;`},
        {name:`Safety Orange`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`.eye_iris{fill:#FF6700;`},
        {name:`Bright Ube`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`.eye_iris{fill:#D19FE8;`},
        {name:`Lemon`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`.eye_iris{fill:#FFF700;`},
        {name:`Blue De France`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`.eye_iris{fill:#318CE7;`},
        {name:`Candy Apple`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`.eye_iris{fill:#FF0800;`},
        {name:`Golden`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`.eye_iris{fill:#FFDF00;`},
        {name:`Bright Pink`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`.eye_iris{fill:#FF007F;`},
    ],
    'Bg Color' : [
        {name:`White`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`.bg_color{fill:#EEECED;`},
        {name:`Clear Skies`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`.bg_color{fill:#ECFFFB;`},
        {name:`Purple Urkle`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`.bg_color{fill:#E9F0FF;`},
        {name:`Winter Day`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`.bg_color{fill:#F5f4EF;`},
        {name:`Twilight Blue`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`.bg_color{fill:#FCFFFF;`},
        {name:`Zircon`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`.bg_color{fill:#E9EEFF;`},
        {name:`Spring Breeze`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`.bg_color{fill:#EEFFF2;`},
        {name:`Lilac White`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`.bg_color{fill:#E8E8FF;`},
        {name:`Titan White`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`.bg_color{fill:#FBFBFF;`},
        {name:`Purple Chalk`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`.bg_color{fill:#F1E6FF;`},
        {name:`Little Bird`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`.bg_color{fill:#CAE4F5;`},
        {name:`Lily White`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`.bg_color{fill:#EAF8FF;`},
        {name:`Powder Blue`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`.bg_color{fill:#EBFBFF;`},
        {name:`Pink Pointer`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`.bg_color{fill:#FFE7F1;`},
        {name:`After Rain`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`.bg_color{fill:#EDFFF7;`},
        {name:`Violet White`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`.bg_color{fill:#EBE7FF;`},
        {name:`Tutu`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`.bg_color{fill:#FFFBFF;`},
        {name:`Clearer Day`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`.bg_color{fill:#EDFFF6;`},
        {name:`Blue Chalk`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`.bg_color{fill:#EEE7FF;`},
        {name:`Lavender White`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`.bg_color{fill:#E8EAFF;`},
        {name:`Elephant Tusk`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`.bg_color{fill:#E8C195;`},
        {name:`Black White`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`.bg_color{fill:#F3D8BC;`},
        {name:`White Pointer`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`.bg_color{fill:#FFC77C;`},
        {name:`Ivory`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`.bg_color{fill:#FDE8D0;`},
        {name:`Dew`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`.bg_color{fill:#ECFFFE;`},
        {name:`Sunrise`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`.bg_color{fill:#F8DA77;`},
        {name:`Solitude`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`.bg_color{fill:#6164FF;`},
        {name:`Clear Day`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`.bg_color{fill:#D4EEFF;`},
        {name:`Zumthor`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`.bg_color{fill:#87BEB8;`},
        {name:`Purple White`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`.bg_color{fill:#FFFDFF;`},
        {name:`Blue Dream`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`.bg_color{fill:#E2F4FF;`},
        {name:`Baby Blanket`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`.bg_color{fill:#CBC927;`},
        {name:`Summer Rain`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`.bg_color{fill:#FAB99B;`},
        {name:`Sugar Cane`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`.bg_color{fill:#99865C;`},
        {name:`Violet Chalk`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`.bg_color{fill:#F9A6FF;`},
        {name:`Pink Chalk`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`.bg_color{fill:#FFD3Fe;`},
        {name:`Pale Leaf`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`.bg_color{fill:#1FC4B4;`},
        {name:`Pink`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`.bg_color{fill:#FFE3F5;`},
        {name:`Ceramic`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`.bg_color{fill:#F8BE49;`},
        {name:`Light Mint`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`.bg_color{fill:#77E0B5;`},
        {name:`Hint of Green`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`.bg_color{fill:#4AC575;`},
        {name:`Mellow Yellow`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`.bg_color{fill:#FAEAD0;`},
        {name:`Pink Lace`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`.bg_stroke_3{stroke:#613165;`},
        {name:`Pale Rose`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`.bg_stroke_3{stroke:#FE6A46;`},
        {name:`Easter Egg`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`.bg_color{fill:#D0CCA9;`},
        {name:`Pretty Pink`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`.bg_color{fill:#FFCFE4;`},
        {name:`Spring Hug`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`.bg_color{fill:#F6D047;`},
        {name:`Pale Red Rose`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`.bg_color{fill:#FFCCCC;`},
        {name:`Blue Bubbles`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`.bg_color{fill:#6FE4EB;`},
        {name:`Soft Lavender`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`.bg_color{fill:#4549C3;`},
        {name:`Fabulous`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`.bg_color{fill:#F8D44C;`},
        {name:`Blush`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`.bg_color{fill:#CF5F9C;`},
    ],
    'Backdrop' : [
        {name:`Backdrop 1`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`y1="500" y2="500" gradientUnits="userSpaceOnUse"><stop offset=".006"`},
        {name:`Backdrop 2`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`y1="500" y2="500" gradientUnits="userSpaceOnUse"><stop offset=".007"`},
        {name:`Backdrop 3`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`y1="1000" y2="0" gradientUnits="userSpaceOnUse"><stop offset=".002"`},
        {name:`Backdrop 4`,rarity:`Common`,sex:`any`,series:`1				`,pattern:`x1="500" x2="500" y1="1000" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0"`},
        {name:`Backdrop 5`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`x1="0" x2="1000" y1="1000" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" class="bg_stop_1"`},
        {name:`Backdrop 6`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`x1="0" x2="1000" y1="1000" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" class="bg_stop_2"`},
        {name:`Backdrop 7`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`_2"/></r`},
        {name:`Backdrop 17`,rarity:`Common`,sex:`any`,series:`	2			`,pattern:`1.4-1.4s-.6-1.4-1.4-1.4-1.4.6-1.4 1.4c-.1.8`},
        {name:`Backdrop 9`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`"backdrop_d" cx="1000" cy="0" r="396.636"`},
        {name:`Backdrop 10`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`"backdrop_d" cx="0" cy="1000" r="396.636"`},
        {name:`Backdrop 11`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`"backdrop_d" cx="-41.057" cy="218.502" r="396.636"`},
        {name:`Backdrop 12`,rarity:`Common`,sex:`any`,series:`		3		`,pattern:`y1="500" y2="500" gradientUnits="userSpaceOnUse"><stop offset=".313"`},
        {name:`Backdrop 13`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`M290.9-65.6L`},
        {name:`Backdrop 14`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`cx="898.2" cy="185.3"`},
        {name:`Backdrop 15`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`1.5 0 0 1.5 12014.1 29992.856`},
        {name:`Backdrop 16`,rarity:`Common`,sex:`any`,series:`			4	`,pattern:`16890.275`},
        {name:`Backdrop 37`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`M-30.5 25.6`},
        {name:`Backdrop 18`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`15196.507`},
        {name:`Backdrop 19`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`M56.8 0c-.7 0-.2-1.2.3-.6.2.2.1`},
        {name:`Backdrop 20`,rarity:`Common`,sex:`any`,series:`				5`,pattern:`M71-1.3l1.1-2.9M66.2-1.1l-.7-3.3M50.9-.3`},
        {name:`Backdrop 21`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`7669.68`},
        {name:`Backdrop 22`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`7677.8`},
        {name:`Backdrop 23`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`M830 83`},
        {name:`Backdrop 24`,rarity:`Uncommon`,sex:`any`,series:`1	2			`,pattern:`22492.227`},
        {name:`Backdrop 25`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`22534.96`},
        {name:`Backdrop 26`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`(.9984)`},
        {name:`Backdrop 27`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`M273.7 586.2c0`},
        {name:`Backdrop 28`,rarity:`Uncommon`,sex:`any`,series:`		3	4	`,pattern:`M942.4`},
        {name:`Backdrop 29`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`M1448.3`},
        {name:`Backdrop 30`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`486h202`},
        {name:`Backdrop 31`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`M848.7`},
        {name:`Backdrop 32`,rarity:`Uncommon`,sex:`any`,series:`				5`,pattern:`25537.377`},
        {name:`Backdrop 33`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`519.7S890.5`},
        {name:`Backdrop 34`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`7642.82`},
        {name:`Backdrop 35`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`42.425`},
        {name:`Backdrop 36`,rarity:`Rare`,sex:`any`,series:`1	2	3		`,pattern:`M866.1`},
        {name:`Backdrop 41`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`138.9c26.6`},
        {name:`Backdrop 38`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`1346.4M-525`},
        {name:`Backdrop 39`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`326h92.8c`},
        {name:`Backdrop 40`,rarity:`Rare`,sex:`any`,series:`			4	5`,pattern:`16.1H590.2c`},
        {name:`Backdrop 8`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`_3"/></rad`},
        {name:`Backdrop 42`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`720-764.9`},
        {name:`Backdrop 43`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`67.1L90`},
        {name:`Backdrop 44`,rarity:`Epic`,sex:`any`,series:`1	2	3	4	`,pattern:`697.2zM`},
        {name:`Backdrop 45`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`24.435`},
        {name:`Backdrop 46`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`9.4L766.6`},
        {name:`Backdrop 51`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`9958.875`},
        {name:`Backdrop 48`,rarity:`Epic`,sex:`any`,series:`				5`,pattern:`L1013.5`},
        {name:`Backdrop 49`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`0v537.9H73`},
        {name:`Backdrop 50`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`153.625`},
        {name:`Backdrop 47`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`13.6L607.6`},
        {name:`Backdrop 52`,rarity:`Legendary`,sex:`any`,series:`1	2	3	4	5`,pattern:`894.3c-21`},
    ],
    'Ears' : [
        {name:`Narrow`,rarity:`Common`,sex:`M`,series:`1				`,pattern:`7.2z"/><pattern id="face_i"`},
        {name:`Square Gold Stud`,rarity:`Common`,sex:`F`,series:`1				`,pattern:`"skin_fill" d="M695.`},
        {name:`Attached`,rarity:`Common`,sex:`M`,series:`1				`,pattern:`3.3-1.8z"/></g><pattern`},
        {name:`Pointed`,rarity:`Common`,sex:`F`,series:`1				`,pattern:`22.4-7.7 22.1z"/></g><p`},
        {name:`Square`,rarity:`Common`,sex:`M`,series:`	2			`,pattern:`13.6z"/><pattern id="face_i"`},
        {name:`Narrow`,rarity:`Common`,sex:`F`,series:`	2			`,pattern:`4-7.2z"/><pattern id="face_i"`},
        {name:`Sticking Out`,rarity:`Common`,sex:`M`,series:`	2			`,pattern:`65.9zm264.4 0l17.1`},
        {name:`Narrow Gold Stud`,rarity:`Common`,sex:`F`,series:`	2			`,pattern:`529.1c0`},
        {name:`Rounded`,rarity:`Common`,sex:`M`,series:`		3		`,pattern:`2.3-2.6z"/><pattern id="face_i"`},
        {name:`Sticking Out`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:`6.3 20.7z"/></g><pattern id="face_i"`},
        {name:`Pointed`,rarity:`Common`,sex:`M`,series:`		3		`,pattern:`4.5V526zm264.4`},
        // SAME AS MALE
        //{name:`Attached`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:`SAME AS MALE`},
        {name:`Pointed Ear Cuff`,rarity:`Common`,sex:`M`,series:`			4	`,pattern:`435.9c.1 20.8`},
        // SAME AS MALE
        //{name:`Broad`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:`SAME AS MALE`},
        {name:`Narrow Gold Stud`,rarity:`Common`,sex:`M`,series:`			4	`,pattern:`527c3.2 8.8`},
        {name:`Rounded`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:`4.3-1.3z"/></g><pattern id="face_i"`},
        {name:`Broad`,rarity:`Common`,sex:`M`,series:`				5`,pattern:`8.3-.9z"/></g><p`},
        {name:`Pointed Ear Cuff`,rarity:`Common`,sex:`F`,series:`				5`,pattern:`433.8l.5`},
        {name:`Square Gold Stud`,rarity:`Common`,sex:`M`,series:`				5`,pattern:`54.2M695.6`},
        {name:`Square`,rarity:`Common`,sex:`F`,series:`				5`,pattern:`13.6z"/></g></g><pattern id="face_i"`},
        {name:`Rounded Bitcoin Stud`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`2.3-2.6z"/><path fill="#303030"`},
        // SAME AS BROAD - fix by sex, series
        //{name:`Broad CryptoVoxels Earrings`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`appears as broad ** to fix - only disambig. by Sex, Series`},
        {name:`Narrow Small Hoop`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`531.2c-2.3`},
        {name:`Rounded Bitcoin Earrings`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`1.8v-3.6zm2.6`},
        {name:`Broad CryptoVoxels Stud`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`4-1.2zM333.5`},
        {name:`Narrow Small Hoops`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`M337.5 533.3c0`},
        {name:`Van Gogh`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`#ear_a"/></clipPath><g fill="#820606"`},
        {name:`Attached Bluetooth`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`ear_bm`},
        {name:`Sticking Out Ear Clip`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`437c-12.7`},
        // SAME AS MALE
        //{name:`Van Gogh`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`SAME AS MALE`},
        {name:`Attached Bluetooth`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`478.9l.9`},
        {name:`Sticking Out Ear Clip`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`M293.2 42`},
        {name:`Rounded Gauges`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`332.9 407.5c`},
        {name:`Elf`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`371.3c1.2`},
        {name:`Marmota x Milky Potato`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`434.3c0`},
        {name:`Rounded Gauges`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`1.7 22.5-7`},
        {name:`Pointed Cheeze Wedge Stud`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`M333.9 559.7c4.5`},
        {name:`Pointed Cheeze Wedge Earrings`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`M687.1`},
        {name:`Elf`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`43.1-88.5z"/><patt`},
        {name:`Marmota x Milky Potato`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`22.4 456`},
        {name:`Square Bitcoin Stud`,rarity:`Epic`,sex:`M`,series:`1	2	3	4	`,pattern:`M661.8 536.1c0`},
        {name:`Cyborg`,rarity:`Epic`,sex:`F`,series:`1	2	3	4	`,pattern:`#ear_a"/></clipPath><g class="hair_shadow"`},
        {name:`Narrow Bitcoin Stud`,rarity:`Epic`,sex:`M`,series:`1	2	3	4	`,pattern:`3.4 7.2z"/><path fill="#303030"`},
        {name:`Broad Opensea Earrings`,rarity:`Epic`,sex:`F`,series:`1	2	3	4	`,pattern:`M340.9 550c0 1.7`},
        {name:`Cyborg`,rarity:`Epic`,sex:`M`,series:`				5`,pattern:`<g fill="#65696A"`},
        {name:`Square Bitcoin Earrings`,rarity:`Epic`,sex:`F`,series:`				5`,pattern:`A3D"><path d="M666.1`},
        {name:`Broad Opensea Stud`,rarity:`Epic`,sex:`M`,series:`				5`,pattern:`M346.2 530.1c0`},
        {name:`Narrow Bitcoin Earrings`,rarity:`Epic`,sex:`F`,series:`				5`,pattern:`2.4zm-317`},
        {name:`Elf Ethereum Stud`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`M330.5 526`},
        {name:`Elf Ethereum Earrings`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`552.8c0 4.7-7`},
        {name:`Attached Bitcoin Earring`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`546.9c0`},
        {name:`Attached Bitcoin Earrings`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`6-10.2zm-7.2`},
    ],
    'Face' : [
        {name:`Male Face 1`,rarity:`Common`,sex:`M`,series:`1	2	3		`,pattern:`47495.441`},
        {name:`Male Face 2`,rarity:`Common`,sex:`M`,series:`			4	5`,pattern:`31.4-45.1`},
        {name:`Female Face 1`,rarity:`Common`,sex:`F`,series:`1	2	3		`,pattern:`38.6-7c-9.7`},
        {name:`Female Face 2`,rarity:`Common`,sex:`F`,series:`			4	5`,pattern:`558.1c14.3`},
        {name:`Male Face 3`,rarity:`Uncommon`,sex:`M`,series:`1	2	3		`,pattern:`53326.844`},
        {name:`Male Face 4`,rarity:`Uncommon`,sex:`M`,series:`			4	5`,pattern:`44.8-137.6`},
        {name:`Female Face 3`,rarity:`Uncommon`,sex:`F`,series:`1	2	3		`,pattern:`38.3v20c26.1`},
        {name:`Female Face 4`,rarity:`Uncommon`,sex:`F`,series:`			4	5`,pattern:`410.3c0-18`},
        {name:`Male Face 5`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`211.6C670.9`},
        {name:`Male Face 6`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`31.7-49.1`},
        {name:`Female Face 5`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`106.2zM652.2`},
        {name:`Female Face 6`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`708.9V655c18.1`},
        {name:`Male Face 7`,rarity:`Epic`,sex:`M`,series:`1	2	3		`,pattern:`53294.309`},
        {name:`Male Face 8`,rarity:`Epic`,sex:`M`,series:`			4	5`,pattern:`40.7-67.9`},
        {name:`Female Face 7`,rarity:`Epic`,sex:`F`,series:`1	2	3		`,pattern:`697.4c-74.1`},
        {name:`Female Face 8`,rarity:`Epic`,sex:`F`,series:`			4	5`,pattern:`585.4c4.6`},
        {name:`Male Face 9`,rarity:`Legendary`,sex:`M`,series:`1	2	3		`,pattern:`53301.457`},
        {name:`Male Face 10`,rarity:`Legendary`,sex:`M`,series:`			4	5`,pattern:`38.7-152`},
        {name:`Female Face 9`,rarity:`Legendary`,sex:`F`,series:`1	2	3		`,pattern:`716.2c12.7`},
        {name:`Female Face 10`,rarity:`Legendary`,sex:`F`,series:`			4	5`,pattern:`9-159.1`},
    ],
    'Nose' : [
        {name:`Straight`,rarity:`Common`,sex:`F`,series:`1				`,pattern:`14.3-7.5 14.3 0z"/><pattern`},
        {name:`Nixon`,rarity:`Common`,sex:`M`,series:`1				`,pattern:`M536.3 522c`},
        {name:`Roman`,rarity:`Common`,sex:`F`,series:`1				`,pattern:`44101.691 -11497.336`},
        {name:`Greek`,rarity:`Common`,sex:`M`,series:`1				`,pattern:`553.2c-7.1`},
        {name:`Greek`,rarity:`Common`,sex:`F`,series:`	2			`,pattern:`7.4 5.2-10.8`},
        {name:`Fleshy`,rarity:`Common`,sex:`M`,series:`	2			`,pattern:`25895.268`},
        {name:`Hawk`,rarity:`Common`,sex:`F`,series:`	2			`,pattern:`24.9-2.5c-8.1`},
        {name:`Straight`,rarity:`Common`,sex:`M`,series:`	2			`,pattern:`23.8 40.1`},
        {name:`Marmota x Milky`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:`544.1c-.2`},
        {name:`Snub`,rarity:`Common`,sex:`M`,series:`		3		`,pattern:`34237.473`},
        {name:`Bumpy`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:`498.9c0-14.6`},
        {name:`Hawk`,rarity:`Common`,sex:`M`,series:`		3		`,pattern:`11.8s.1-21.9`},
        {name:`Turned Up`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:`.2 545.5c-7.7`},
        {name:`Marmota x Milky`,rarity:`Common`,sex:`M`,series:`			4	`,pattern:`536.2c-2`},
        {name:`Snub`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:`561.6c-7`},
        {name:`Roman`,rarity:`Common`,sex:`M`,series:`			4	`,pattern:`556.2h14.9s`},
        {name:`Nixon`,rarity:`Common`,sex:`F`,series:`				5`,pattern:`3.8-16.8`},
        {name:`Bumpy`,rarity:`Common`,sex:`M`,series:`				5`,pattern:`5.1-26.1 0z"/><g`},
        {name:`Fleshy`,rarity:`Common`,sex:`F`,series:`				5`,pattern:`-15525.397`},
        {name:`Turned Up`,rarity:`Common`,sex:`M`,series:`				5`,pattern:`552.3c-12.3`},
        {name:`Greek Stud`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`555.8c-6.2`},
        {name:`Bumpy Bull Ring`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`565.5c0-1.4.6-5.6`},
        {name:`Cat Nose`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`20.6-11.9`},
        {name:`Turned Up Nosering`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`28933.117`},
        {name:`Nubian Nosering`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`#8A8A9D" d="M464.6 `},
        {name:`Roman Nosering`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`558.5c-7`},
        {name:`Bumpy Bull Ring`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`0-3.5-1.6`},
        {name:`Nubian Nosering`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`31.6-9.5`},
        {name:`Roman Nosering`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`8.6 0-16.6`},
        {name:`Greek Stud`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`.8c0-.1-7`},
        {name:`Turned Up Nosering`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`15.2 545.5c-7.6`},
        {name:`Cat Nose`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`11V461c0-8-3`},
        {name:`Straight Bull Ring`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`556.5c`},
        {name:`Clown Nose`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`512.5c0`},
        {name:`Fleshy Nose Clip`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`.5 0 5.5 1`},
        {name:`Fleshy Nose Clip`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`.1 537.4c`},
        {name:`Broken Nose`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`49.3 15.4`},
        {name:`Hawk Mole`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`434.2s18.7`},
        {name:`Clown Nose`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`27359.676`},
        {name:`Straight Bull Ring`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`18.9 6.7`},
        {name:`Mona Lisa`,rarity:`Epic`,sex:`F`,series:`1	2	3		`,pattern:`555c-1.5`},
        {name:`Nubian`,rarity:`Epic`,sex:`M`,series:`1	2	3		`,pattern:`13.6 8.5-2`},
        {name:`Da Vinci`,rarity:`Epic`,sex:`F`,series:`1	2	3		`,pattern:`461.3c-14`},
        {name:`Broken Nose`,rarity:`Epic`,sex:`M`,series:`1	2	3		`,pattern:`1 18.3 54.1`},
        {name:`Hawk Mole`,rarity:`Epic`,sex:`F`,series:`			4	5`,pattern:`2.5-9.5 15`},
        {name:`Da Vinci`,rarity:`Epic`,sex:`M`,series:`			4	5`,pattern:`461.7c-14`},
        {name:`Nubian`,rarity:`Epic`,sex:`F`,series:`			4	5`,pattern:`19.8 0z"/></g>`},
        {name:`Mona Lisa`,rarity:`Epic`,sex:`M`,series:`			4	5`,pattern:`252 -7635`},
        {name:`Cyborg`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`1H525L509.1`},
        {name:`Cyborg`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`506.2l-12`},
        {name:`Roman Stud`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`547.5c-1.1`},
        {name:`Roman Stud`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`538.3c-8`},
    ],
    'Mouth' : [
        {name:`Half Smile Right`,rarity:`Common`,sex:`M`,series:`1				`,pattern:`M438 603.2zM515.6 584.2c-19.6`},
        {name:`Simple Smile`,rarity:`Common`,sex:`F`,series:`1				`,pattern:`30977.885`},
        {name:`Gold Tooth Smile`,rarity:`Common`,sex:`M`,series:`1				`,pattern:`"#B59052" d="M518.4`},
        {name:`Lip Ring`,rarity:`Common`,sex:`F`,series:`1				`,pattern:`608.6c-2.9`},
        {name:`Frown`,rarity:`Common`,sex:`M`,series:`1				`,pattern:`614.8c-13.8`},
        {name:`Angry`,rarity:`Common`,sex:`F`,series:`1				`,pattern:`17.5zM473.2`},
        {name:`Simple Smile`,rarity:`Common`,sex:`M`,series:`	2			`,pattern:`-50081.207 -30963.2`},
        {name:`Half Smile Right`,rarity:`Common`,sex:`F`,series:`	2			`,pattern:`.1c-13.7-5-43.3.6-52`},
        {name:`Buck Teeth`,rarity:`Common`,sex:`M`,series:`	2			`,pattern:`.7 33.9-77.1 34.3-85`},
        {name:`Half Frown Right`,rarity:`Common`,sex:`F`,series:`	2			`,pattern:`.7c-15.1 4.6-27.4-2.`},
        {name:`Pursed Lips`,rarity:`Common`,sex:`M`,series:`	2			`,pattern:`27.5-15.2-44.6-2-67.`},
        {name:`Toothpick`,rarity:`Common`,sex:`F`,series:`	2			`,pattern:`3-5.2-45 .5-54.3-.5`},
        {name:`Angry`,rarity:`Common`,sex:`M`,series:`		3		`,pattern:`1-6.3 19-6.3-11.5-.1`},
        {name:`Frown`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:`-1.6c-21-1.5-45.3 21`},
        {name:`Big Smile`,rarity:`Common`,sex:`M`,series:`		3		`,pattern:`1.1c-15.5-6.3-15 3.4`},
        {name:`Sly`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:`-12-49.1 4.2l.5.5c2.`},
        {name:`Biting Lower Lip`,rarity:`Common`,sex:`M`,series:`		3		`,pattern:`467.3 609.6c9.8-5.3`},
        {name:`Fish Lips`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:`8.7 0 28.1-30.5 17.6`},
        {name:`Half Smile Left`,rarity:`Common`,sex:`M`,series:`			4	`,pattern:`1.7 48.1 64.7 48.1 4`},
        {name:`Big Smile`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:`4437 -31727.492 2888`},
        {name:`Half Frown Right`,rarity:`Common`,sex:`M`,series:`			4	`,pattern:`.9c32.9 16.7 43.8 24`},
        {name:`Pursed Lips`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:`27.5-4.4-41.1 4.9-56`},
        {name:`Toothpick`,rarity:`Common`,sex:`M`,series:`			4	`,pattern:`3-3.9-54.7.6c-12.4-4`},
        {name:`Gold Tooth Smile`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:`596.8c-1.3 4.2 1.2`},
        {name:`Fish Lips`,rarity:`Common`,sex:`M`,series:`				5`,pattern:`1H522z"/><pattern id`},
        {name:`Half Smile Left`,rarity:`Common`,sex:`F`,series:`				5`,pattern:`c13.8 57.5 85.8 59 1`},
        {name:`Sly`,rarity:`Common`,sex:`M`,series:`				5`,pattern:`25.3 15.8h24.8l59.4-`},
        {name:`Lip Stud`,rarity:`Common`,sex:`F`,series:`				5`,pattern:`d="M505.5 653.7c0 7`},
        {name:`Soul Patch`,rarity:`Common`,sex:`M`,series:`				5`,pattern:`.9c.3 4.9 2 17.1 10.`},
        {name:`Buck Teeth`,rarity:`Common`,sex:`F`,series:`				5`,pattern:`fill="#231F20" d="M`},
        {name:`Referee Whistle`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`666.3c2.8`},
        {name:`Elvis`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`600.7c.1`},
        {name:`Half Frown Left`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`593.6c21.3`},
        {name:`Stitched Shut`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`642.6c-3.9`},
        {name:`Braces Smile`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`#A44EC4" d="M543.5 `},
        {name:`Bright Smile`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`624.6c-4.3`},
        {name:`Marmota x Milky`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`skin_dark d="M558.`},
        {name:`Referee Whistle`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`.2-2.6-.1-4.3-.2-4.4`},
        {name:`Elvis`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`9.5.3-12.4 3.6-44.8`},
        {name:`Angry Lipring`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`M520.9 611c-1.3 0-1.`},
        {name:`Missing Tooth Smile`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`3.1 5.4 2.6c0 0 1.2`},
        {name:`Half Frown Left`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`.7c15.1 4.6 27.4-2.1`},
        {name:`Busted Lip`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`.4-31-4.9-47-5.7-8.8`},
        {name:`Kiss Kiss`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`.9-18.8-13.6-28.8-2.`},
        {name:`Bright Smile`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`#F7F3E8" d="M547.4`},
        {name:`Braces Smile`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`-42.1-4.9-.4-3.2 3.2`},
        {name:`Angry Lipring`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`-11.5 0-19.5-13.3-34`},
        {name:`Biting Lower Lip`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`537.8 619.1s-6-1-10.`},
        {name:`Mustache`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`1.9s85.7-17.4`},
        {name:`Zippered`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`616.7c1.5`},
        {name:`Thick Mustache`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`14.9zM488.9`},
        {name:`Surprised`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`628c4.3-7.9.9`},
        {name:`Clown`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`599.1c-.2.3`},
        {name:`Silver Grill`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`593.9c`},
        {name:`Silver Grill`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`0 7.2-20.8 24.3-46.4`},
        {name:`Clown`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`M584.6 573.5c-.4 0`},
        {name:`Cyborg`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`43.7-12.8-20.2 3.6-1`},
        {name:`Missing Tooth Smile`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`20 3.4-38.7 0-13.6-2`},
        {name:`Stitched Shut`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`.3 22.1 56 22.1 47.4`},
        {name:`Tongue Out`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`5.2 13.4 20.3 14.5 3`},
        {name:`Hipster Mustache`,rarity:`Epic`,sex:`M`,series:`1	2	3	4	`,pattern:`605.8c-.3-.8-4.8`},
        {name:`Cyborg`,rarity:`Epic`,sex:`F`,series:`1	2	3	4	`,pattern:`M582.3 601`},
        {name:`Fu Man Chu`,rarity:`Epic`,sex:`M`,series:`1	2	3	4	`,pattern:`647.1c-1.1-43.5`},
        {name:`Marmota x Milky`,rarity:`Epic`,sex:`F`,series:`1	2	3	4	`,pattern:`611.5c-.1-.1 3`},
        {name:`Spliff`,rarity:`Epic`,sex:`M`,series:`1	2	3	4	`,pattern:`10.7a52.6`},
        {name:`Bubblegum`,rarity:`Epic`,sex:`F`,series:`1	2	3	4	`,pattern:`586.9c13.5`},
        {name:`Gimp Ball`,rarity:`Epic`,sex:`M`,series:`				5`,pattern:`M502.5 599.8c`},
        {name:`Party Blower`,rarity:`Epic`,sex:`F`,series:`				5`,pattern:`0-3.2-.5-1.8-8.4-12.`},
        {name:`Zippered`,rarity:`Epic`,sex:`M`,series:`				5`,pattern:`.448 12771.015 2981.`},
        {name:`Spliff`,rarity:`Epic`,sex:`F`,series:`				5`,pattern:`1c28 5.2 34.3 21.1 6`},
        {name:`Tongue Out`,rarity:`Epic`,sex:`M`,series:`				5`,pattern:`7-9.5 15.2-13.6-.3-.`},
        {name:`Gimp Ball`,rarity:`Epic`,sex:`F`,series:`				5`,pattern:`url(#mouth_j)"><pa`},
        {name:`Gold Grill`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`608.9c0-1.3`},
        {name:`Gold Grill`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`623.1c1`},
        {name:`Vampire`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`608.2c-.6 0-.6-5.3 0-5.3.5`},
        {name:`Vampire`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`611.3c-17.8`},
        {name:`Taped Shut`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`602.4c-3.1`},
        {name:`Taped Shut`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`591.9c-10.3`},
    ],
    'Facial Feature' : [
        // None	Common	Any	1					
        {name:`Thin Sideburns`,rarity:`Common`,sex:`M`,series:`1				`,pattern:`430.6c.4-.8`},
        {name:`Henna`,rarity:`Common`,sex:`F`,series:`1				`,pattern:`16.4zM631.6`},
        // None v2	Common	Any		2				
        {name:`Small Scar`,rarity:`Common`,sex:`Any`,series:`	2			`,pattern:`5l22.8-4.5 30.5-20.1`},
        // None v3	Common	Any			3			
        {name:`Beard`,rarity:`Common`,sex:`M`,series:`		3		`,pattern:`-8.6 90.2-8.1 74.7-5`},
        {name:`Blush`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:`d="M589.8 491c.3 0`},
        // None v4	Common	Any				4		
        {name:`Kissed`,rarity:`Common`,sex:`M`,series:`			4	`,pattern:`M625.2 540.7c`},
        {name:`Blush v2`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:`.2zm160.6-35.9zm6 0z`},
        // None v5	Common	Any					5	
        {name:`Bitcoin Tattoo`,rarity:`Common`,sex:`M`,series:`				5`,pattern:`2.5 3.5-10.5`},
        {name:`Glitter v3`,rarity:`Common`,sex:`F`,series:`				5`,pattern:`.2.9 2.2-.4 2-1.3-.2`},
        {name:`Bitcoin Tattoo`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`2.2 2-8.8-2.3`},
        {name:`Flower Tattoo`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`461.9c-.2-2.5`},
        {name:`Ethereum Tattoo`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`489.5v9.3c-1`},
        {name:`Black Stripes`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`9-19.8-2.3`},
        {name:`Fashion Show`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`5 0-7 9.1-7 17.2 0 0`},
        {name:`Snowflake Tattoo`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`.4c-.2 0-.1-.8-1-1.3`},
        {name:`Tribal`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`12.7 27.7-28.8 51.5-`},
        {name:`Mutton Chops`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`68.6c-4.7.2-6.4-5.6-`},
        {name:`Glitter v2`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`7.507 -4919.695)" xl`},
        {name:`Henna v2`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`2 50.6-46.6 75.4-47.`},
        {name:`Sideburns`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`-5 105.1-3.5 137.9c1`},
        {name:`Band Aid`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`541.4c-6`},
        {name:`Mountain Man`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`740s-20.3`},
        {name:`Merlin's Beard`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`600.5c5.2`},
        {name:`Rainbow Tattoo`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`508.7c`},
        {name:`Circuit Board Makeup`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`390.6c0-26.5-1`},
        {name:`Goatee`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`-23 16.6-19.4 15-18.`},
        {name:`Hipster Beard`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`09.9c12.4-12.4 12.7-`},
        {name:`Henna v3`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`.6-17.9 8-.4 30 .5.7`},
        {name:`Glitter`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`M-.2.8c0 .5.2.9.4`},
        {name:`Freckles`,rarity:`Epic`,sex:`M`,series:`1	2	3	4	`,pattern:`2.1.8zM458.8`},
        {name:`Carnivale`,rarity:`Epic`,sex:`F`,series:`1	2	3	4	`,pattern:`443.9c-4.9`},
        {name:`Santa`,rarity:`Epic`,sex:`M`,series:`1	2	3	4	`,pattern:`46.6zM663.1`},
        {name:`Ethereum Tattoo`,rarity:`Epic`,sex:`F`,series:`1	2	3	4	`,pattern:`15.2-9.1`},
        {name:`Neckbeard`,rarity:`Epic`,sex:`M`,series:`				5`,pattern:`05.5c-.1-25.4-.3-58.`},
        {name:`Butterfly Tattoo`,rarity:`Epic`,sex:`F`,series:`				5`,pattern:`1 0 .3-.2.7-.2.4-.8.`},
        {name:`Carnivale`,rarity:`Epic`,sex:`M`,series:`				5`,pattern:`c9.2 9.5 10 73.8 10`},
        {name:`Fantasy Makeup`,rarity:`Epic`,sex:`F`,series:`				5`,pattern:`M442.1 472.7c`},
        {name:`Zeus's Beard`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`7.4zM427`},
        {name:`Cyborg`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`549.2h-1v-61.9`},
        {name:`Cat Whiskers`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`0s-85.8-2.3`},
        {name:`Cyborg`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`361c1.2.1`},
    ],
    'Eyes' : [
        {name:`Normal`,rarity:`Common`,sex:`M`,series:`1				`,pattern:`M632.1 41`},
        {name:`Left Wink`,rarity:`Common`,sex:`F`,series:`1				`,pattern:`457.7c-11.6`},
        {name:`Confused`,rarity:`Common`,sex:`M`,series:`1				`,pattern:`420.1c.5`},
        {name:`Sad`,rarity:`Common`,sex:`F`,series:`1				`,pattern:`453.7c0 21.7-3`},
        {name:`Sideways Glance Right`,rarity:`Common`,sex:`M`,series:`1				`,pattern:`59999.004`},
        {name:`Mascara`,rarity:`Common`,sex:`F`,series:`1				`,pattern:`454.3c`},
        {name:`Sparkling Eyes`,rarity:`Common`,sex:`M`,series:`	2			`,pattern:`2754.837`},
        {name:`Surprised`,rarity:`Common`,sex:`F`,series:`	2			`,pattern:`451.3c-14 21-53 16.5`},
        {name:`Left Wink`,rarity:`Common`,sex:`M`,series:`	2			`,pattern:`M632.6 417.3s-5.1`},
        {name:`Furrowed Brows`,rarity:`Common`,sex:`F`,series:`	2			`,pattern:`M452.7 434.8l.1-.1-`},
        {name:`Sad`,rarity:`Common`,sex:`M`,series:`	2			`,pattern:`M598.4 427.3c21.2`},
        {name:`Right Wink`,rarity:`Common`,sex:`F`,series:`	2			`,pattern:`.2-26.3 4.2zM577.7 4`},
        {name:`Single Tear`,rarity:`Common`,sex:`M`,series:`		3		`,pattern:`54488.6`},
        {name:`Angry`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:`19.1 15 3 .5 4.2-1.`},
        {name:`Slanted Eyes`,rarity:`Common`,sex:`M`,series:`		3		`,pattern:`48 48"><path`},
        {name:`Bloodshot`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:`70688.234`},
        {name:`Flirty`,rarity:`Common`,sex:`M`,series:`		3		`,pattern:`M457.5 452.4c0 21.7-`},
        {name:`Sideways Glance Right`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:`-26.2-15.6-5.7 6.7-5`},
        {name:`Furrowed Brows`,rarity:`Common`,sex:`M`,series:`			4	`,pattern:`70858.1`},
        {name:`Normal`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:`25.454 -485.783`},
        {name:`Bloodshot`,rarity:`Common`,sex:`M`,series:`			4	`,pattern:`.7-7-11.1-24.2-55.2-`},
        {name:`Slanted Eyes`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:`595 -46838.563 3516.`},
        {name:`Angry`,rarity:`Common`,sex:`M`,series:`			4	`,pattern:`.6-2 5-2 2.3-4.3 3.3`},
        {name:`Single Tear`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:`478.2c0 4.9 7.3 4.9`},
        {name:`Mascara`,rarity:`Common`,sex:`M`,series:`				5`,pattern:`445 -8595.837`},
        {name:`Crying`,rarity:`Common`,sex:`F`,series:`				5`,pattern:`5.3 8.5zm89.2 0c1.6`},
        {name:`Right Wink`,rarity:`Common`,sex:`M`,series:`				5`,pattern:`.4 8.1 18.6 4.1 23.2`},
        {name:`Sparkling Eyes`,rarity:`Common`,sex:`F`,series:`				5`,pattern:`9 0 9zM575.1 456.4c`},
        {name:`Surprised`,rarity:`Common`,sex:`M`,series:`				5`,pattern:`457.3s1.7 9.9-24.7 9`},
        {name:`Confused`,rarity:`Common`,sex:`F`,series:`				5`,pattern:`32.4 10.6c-35-20.6-5`},
        {name:`Crying`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`462.9c-2.6`},
        {name:`Slim Sunnies`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`448.5c66.6`},
        {name:`Stoned`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`448c11.5`},
        {name:`Ski Goggles`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`377.5c`},
        {name:`Trippy`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`27250.871`},
        {name:`Wireframe`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`443.6h-3.2l3.5`},
        {name:`Closed Eyes`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`.3 31.5-13.3 16.9 0`},
        {name:`Stoned`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`c-15.2 0-17.5-11.2-1`},
        {name:`Cross Eyed`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`6.4l6.4 8.4s-5.6 14.`},
        {name:`Flirty`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`iris" d="M454.2 452.`},
        {name:`Black Eye`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`3.5-1.1 7.4 2.9 7.4`},
        {name:`Jeweled Bindi`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`9-31 18.4c-32.9-17.1`},
        {name:`Alice Cooper`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`8-12.2 8.6-24.5 2.1-`},
        {name:`Cross Eyed`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`M634.3 420.8s-4.2 2`},
        {name:`Ski Goggles`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`-14.2zM357.9 403h-15`},
        {name:`Closed Eyes`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`8 445.7c7.8 22.2 30.`},
        {name:`Wireframe`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`26 -47498.695 1032.9`},
        {name:`Trippy`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`8-17.1 55.2-8.4z`},
        {name:`Bombers`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`47492.695`},
        {name:`Marmota x Milky`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`461.6c0`},
        {name:`VR Googles`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`514.4H400.6c-22.1`},
        {name:`Monocle`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`579.73`},
        {name:`Taped Nerdy`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`437.2c-1.3`},
        {name:`Black Frame`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`417.5c-113.6`},
        {name:`Marmota x Milky`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`.1-20.5 2.3-19.2 23.`},
        {name:`Pirate Patch`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`8 8.3c3.1 3.1 8.3 5.`},
        {name:`Monocle`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`-25.8 19.2c-19.7-26.`},
        {name:`VR Googles`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`0-40 17.9-40 40v20c0`},
        {name:`Black Frame`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`4 -33846.82 5277.506`},
        {name:`Taped Nerdy`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`M589.2 500.5c-25.1`},
        {name:`Pirate Patch`,rarity:`Epic`,sex:`M`,series:`1	2	3	4	`,pattern:`438.1H622c-.4`},
        {name:`Cyclist Sun Glasses`,rarity:`Epic`,sex:`F`,series:`1	2	3	4	`,pattern:`441.9c-3.3`},
        {name:`Cat Eyes`,rarity:`Epic`,sex:`M`,series:`1	2	3	4	`,pattern:`446.6c8.3-4.8`},
        {name:`Heart Glasses`,rarity:`Epic`,sex:`F`,series:`1	2	3	4	`,pattern:`27359.426`},
        {name:`Heart Glasses`,rarity:`Epic`,sex:`M`,series:`1	2	3	4	`,pattern:`433.5h10.8v6`},
        {name:`Glam Rock`,rarity:`Epic`,sex:`F`,series:`1	2	3	4	`,pattern:`445.4c-24.3`},
        {name:`Cyclist Sun Glasses`,rarity:`Epic`,sex:`M`,series:`				5`,pattern:`27245.574`},
        {name:`Bombers`,rarity:`Epic`,sex:`F`,series:`				5`,pattern:`.1 4.9-2.8z"/></g><g`},
        {name:`John Lennon`,rarity:`Epic`,sex:`M`,series:`				5`,pattern:`5-22.8 0-31.9-1.8-42`},
        {name:`Cat Eyes`,rarity:`Epic`,sex:`F`,series:`				5`,pattern:`M363.5 420.9s0`},
        {name:`Slim Sunnies`,rarity:`Epic`,sex:`M`,series:`				5`,pattern:`8.6-17.1-49.9-28-1.3`},
        {name:`John Lennon`,rarity:`Epic`,sex:`F`,series:`				5`,pattern:`M529.6 451`},
        {name:`Hero Mask`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`44089.352`},
        {name:`Hero Mask`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`47.9zM579`},
        {name:`Cyborg`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`476.3 4`},
        {name:`Cyborg`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`441.9c9`},
        {name:`Steampunk`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`7.6-10.5.3`},
        {name:`Steampunk`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`430.6c-3`},
    ],
    'Hair Style' : [
        {name:`Marmota x Milky`,rarity:`Common`,sex:`F`,series:`1				`,pattern:`329.2c-6.9`},
        {name:`Messy`,rarity:`Common`,sex:`F`,series:`1				`,pattern:`66.2-30.4`},
        {name:`Big Mohawk`,rarity:`Common`,sex:`F`,series:`1				`,pattern:`17.1-109`},
        {name:`Cornrows`,rarity:`Common`,sex:`M`,series:`1				`,pattern:`215c0 14.5 3.5`},
        {name:`Slicked Back`,rarity:`Common`,sex:`M`,series:`1				`,pattern:`284.7c13.1-20.4`},
        {name:`Manbun`,rarity:`Common`,sex:`M`,series:`1				`,pattern:`2.8-4zM463.9`},
        {name:`Afro`,rarity:`Common`,sex:`F`,series:`	2			`,pattern:`5.2 5.5-27.3 5.5-27.`},
        {name:`Geisha`,rarity:`Common`,sex:`F`,series:`	2			`,pattern:`3 44-138.9-26.9-274.`},
        {name:`Flowing`,rarity:`Common`,sex:`F`,series:`	2			`,pattern:`.7-16.8-9.7-16.8 21.`},
        {name:`Short Mohawk`,rarity:`Common`,sex:`M`,series:`	2			`,pattern:`3 -97155.852 -49463.`},
        // No features, Bald M
        //{name:`Bald`,rarity:`Common`,sex:`M`,series:`	2			`,pattern:``},
        {name:`Neat Afro`,rarity:`Common`,sex:`M`,series:`	2			`,pattern:`20.4-13 20.4-13 12-1`},
        {name:`Nightclub`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:`-68.7 3.9-87.8 9.1-5`},
        {name:`Cornrows`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:`4-7.8 24.1c-2.1 3.1-`},
        {name:`Birthday Hat`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:`1.8 82.7 85.1 75.4 8`},
        {name:`Afro`,rarity:`Common`,sex:`M`,series:`		3		`,pattern:`687.9 261.5c13.2-45.`},
        {name:`Vampire`,rarity:`Common`,sex:`M`,series:`		3		`,pattern:`7 60.2-32.1 60.2l-9-`},
        {name:`Balding`,rarity:`Common`,sex:`M`,series:`		3		`,pattern:`.7-13.9 6.7-29.7 0-3`},
        // Bald F
        //{name:`Bald`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:``},
        {name:`Buzzed`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:`.7 33.9-71.6 70.2-63`},
        {name:`Vampire`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:`128.4 131.4 145.2 1`},
        {name:`Messy`,rarity:`Common`,sex:`M`,series:`			4	`,pattern:`.6-2.8 3.4-3.2-.3-.4`},
        {name:`Samurai`,rarity:`Common`,sex:`M`,series:`			4	`,pattern:`-29.7-54.5-40.4 29-2`},
        {name:`Big Mohawk`,rarity:`Common`,sex:`M`,series:`			4	`,pattern:`4.9-3.1-57.3z"/><g><`},
        {name:`Tight Curls`,rarity:`Common`,sex:`F`,series:`				5`,pattern:`.9 15.5-25.7-1.4 14.`},
        {name:`Ponytail`,rarity:`Common`,sex:`F`,series:`				5`,pattern:`1-25.5-39.9-34.9-26.`},
        {name:`Short Mohawk`,rarity:`Common`,sex:`F`,series:`				5`,pattern:`220.5s-26`},
        {name:`Marmota x Milky`,rarity:`Common`,sex:`M`,series:`				5`,pattern:`5-104.5 25.2-154.2-9`},
        {name:`Buzzed`,rarity:`Common`,sex:`M`,series:`				5`,pattern:`-34.9 0-78.3 10.8-10`},
        {name:`Long Messy`,rarity:`Common`,sex:`M`,series:`				5`,pattern:`6-6.2-20-7.4-30.3 14`},
        {name:`80's Headband`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`0-51.1-72.5`},
        {name:`Pigtails`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`66.4zm150.6`},
        {name:`Messy Braids`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`46.8.9.2.9-9.3`},
        {name:`Cowgirl`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`314.5c-2.1`},
        {name:`Pirate`,rarity:`Uncommon`,sex:`M`,series:`1	2			`,pattern:`856.8c0-10.6`},
        {name:`Construction Helmet`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:`0.2 4.4-27.6zM699.9`},
        {name:`Castro`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`2m-1.1 17.8c-4.4 25.`},
        {name:`80's Headband`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`17.4-35.6 81.2-62 1`},
        {name:`Turban`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`.4-103.4-100-143.2-7`},
        {name:`Pirate`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`8.8-49.9-30-39.5-3-1`},
        {name:`DJ Headphones`,rarity:`Uncommon`,sex:`M`,series:`		3	4	`,pattern:`7-24.2.5-25.8.1-8.9-`},
        {name:`Beanie`,rarity:`Uncommon`,sex:`F`,series:`		3	4	`,pattern:`.5-14c-60.7 146.7-31`},
        {name:`Punk Rocker`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`0.1 9.4-43.2 17.6 16`},
        {name:`Castro`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`.4c-23.1-68.8-70.8-1`},
        {name:`Dreadlocks`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`6.5-20.5-2.8-30 5.8-`},
        {name:`Firewoman`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`8.8-42.3-73-8.3-75-8`},
        {name:`Beanie`,rarity:`Uncommon`,sex:`M`,series:`				5`,pattern:`206.7-173.7-206.7s-1`},
        {name:`DJ Headphones`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:`30.5-32.8-33.6-53.5-`},
        {name:`Soldier`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`409l-.2`},
        {name:`Dreadlocks`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`11.1zm266.6`},
        {name:`Police Hat`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`7c-.9 0-.9`},
        {name:`Bunny Ears`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`120.8c26.8`},
        {name:`OpenSea Trucker`,rarity:`Rare`,sex:`M`,series:`1	2	3		`,pattern:`20.5-1.8`},
        {name:`Giant Bow`,rarity:`Rare`,sex:`F`,series:`1	2	3		`,pattern:`77.8c-23.2`},
        {name:`Aussie`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`.6 29 14.9 17.8 178.`},
        {name:`Soldier `,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`9.9c-8.8 25.2 35.6 8`},
        {name:`Cowboy`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`#hair_d)" d="M197.7`},
        {name:`Police Hat`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`3.7-22.1 47.2-20.1 1`},
        {name:`Construction Helmet`,rarity:`Rare`,sex:`M`,series:`			4	5`,pattern:`-1.7-34.4-6.9-2.2-3.`},
        {name:`OpenSea Trucker`,rarity:`Rare`,sex:`F`,series:`			4	5`,pattern:`.5-18.8 135.1-7.7 5.`},
        {name:`Fresh`,rarity:`Epic`,sex:`M`,series:`1	2	3	4	`,pattern:`6zm99-120.4c`},
        {name:`Indian Chieftess`,rarity:`Epic`,sex:`F`,series:`1	2	3	4	`,pattern:`101.3c11.4`},
        {name:`Motorcycle Cop`,rarity:`Epic`,sex:`M`,series:`1	2	3	4	`,pattern:`20.9c99.4-35.5`},
        {name:`Wizard Hat`,rarity:`Epic`,sex:`F`,series:`1	2	3	4	`,pattern:`251.1s-30.6`},
        {name:`Admiral's Hat`,rarity:`Epic`,sex:`M`,series:`1	2	3	4	`,pattern:`43390.129`},
        {name:`Cute`,rarity:`Epic`,sex:`F`,series:`1	2	3	4	`,pattern:`186.1c-2.3`},
        {name:`Wizard Hat`,rarity:`Epic`,sex:`M`,series:`				5`,pattern:`1.1-51.9-18.4-77.3 1`},
        {name:`Motorcycle Cop`,rarity:`Epic`,sex:`F`,series:`				5`,pattern:`3.3 197.5 3.6 8.6 15`},
        {name:`Fireman`,rarity:`Epic`,sex:`M`,series:`				5`,pattern:`.1 54z`},
        {name:`Admiral's Hat`,rarity:`Epic`,sex:`F`,series:`				5`,pattern:`.9 93.5 48.2 48.5 20`},
        {name:`Indian Chief`,rarity:`Epic`,sex:`M`,series:`				5`,pattern:`-167 26.5-16.4-24 14`},
        {name:`Turban`,rarity:`Epic`,sex:`F`,series:`				5`,pattern:`6-99.5-306.2 11.5-87`},
        {name:`Top Hat`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`6-10.3zm-350.6`},
        {name:`Top Hat`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`111.3C575`},
        {name:`Space Helmet`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`254.1c-.8`},
        {name:`Space Helmet`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`298c-14.2`},
        {name:`King's Crown`,rarity:`Legendary`,sex:`M`,series:`1	2	3	4	5`,pattern:`122.3 21.6`},
        {name:`Queen's Crown`,rarity:`Legendary`,sex:`F`,series:`1	2	3	4	5`,pattern:`260.7c13.4`},
    ]
}

const rarityIcon = {
    'Common':'🔵',
    'Uncommon':'🍏',
    'Rare':'🔶',
    'Epic':'💜',
    'Legendary':'🍎',
    '?':'???'
}

const rarityLevels = [
    'Any','Common','Uncommon','Rare','Epic','Legendary'
]
const rarityColors = [
    '#DFE3E8', // any
    'rgb(0, 143, 251)', // common
    'rgb(0, 227, 150)', // uncommon
    'rgb(254, 176, 25)', // rare
    'rgb(119, 93, 208)', // epic
    'rgb(255, 69, 96)' // legendary
]

//
// APP CLASS
//

return class AvastarScan {

    constructor(doc){

        this.document = doc ? doc : document

        // Matching list
        this.avastarScanList = new kai_AvastarScanList()
        this.avastarScanList.load()

        // LOGGING STATS
        this.logData = {}
        this.loadLog() // 

        // SETUP SCANNING OBSERVER
        //this.observer = null
        this.initScanObserver()

        // PAGE TRIGGERS to SHOW / HIDE
        this.navDiscover = this.document.getElementsByClassName('nav')[0].children[2].firstChild
        this.navQueue = this.document.getElementsByClassName('nav')[0].children[4].firstChild

        // event listeners
        let hideEvent = new Event('kai_hideView')
        let showEvent = new Event('kai_showView')
        this.navDiscover.addEventListener('click',e=>{ document.dispatchEvent(showEvent)}, false)
        this.navQueue.addEventListener('click',e=>{ document.dispatchEvent(hideEvent)}, false)

        document.addEventListener('kai_scrollToAvastar',(e)=>{e.detail.hasOwnProperty('index') ? this.scrollToAvastar(e.detail.index) : false })

        
    }

    initScanObserver(){
        // Select the node that will be observed for mutations
        const parentNode = document.getElementById('app')

        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: true, subtree: true }
        
        /*
        const scrollObserver = new MutationObserver( (mutationsList, observer)=>{
            console.log('SCROLLING...')
            this.runScan() // runScan will prevent duplicate scans
        })*/

        // track if it existed
        //let prevScroller = false

        // Callback function to execute when mutations are observed
        const appObserver = new MutationObserver( (mutationsList, observer)=>{
            console.log(`PAGE CHANGE - ${mutationsList.length}`)
            
            
            let childNode = document.getElementById('scroller')
            if(childNode){
                // only reset the observer if the scroller has changed
                //if(!prevScroller){
                    //scrollObserver.disconnect()
                    //scrollObserver.observe(childNode, config)
                    this.runScan()
                    //prevScroller = true
                //}
            } 
        })

        // Start observing the target node for configured mutations
        appObserver.observe(parentNode, config)

    }

    loadLog(){
        this.logData = JSON.parse(localStorage.getItem('kai_logData')) || { count: 0 }
    }

    saveLog(){
        localStorage.setItem('kai_logData', JSON.stringify(this.logData))
    }

    logAvastar(){
        this.logData.count++
    }

// --- 

    getTraitString(traits){
        let o = traits
        let result = o.list.reduce( (prev,curr)=>`${prev}_${rarityIcon[curr ? curr.rarity:'?']}`,'')
        return result  
    }

    getTraits(element){
        return this.findAll(this.parseSrc(element.src))
    }

    getScore(traits){

        let max = 0
        let min = 0
        let actual = 0

        let variationsPerLevel = [3,3,4,4,4,4,2,4,6,3,6,6]

        traits.list.map( (t,i)=>{ 
            let rarityLevel = rarityLevels.indexOf(t.rarity)
            let variations = variationsPerLevel[i]
            
            // score calculation
            min += 12 / variations
            max += 12 / (5*variations)
            actual += 12 / ( rarityLevel * variations )
        })

        // final score - scaled 1-100
        return Math.round( 99 * (actual-min) / (max-min) + 1 )
    }

    getOverallRarityByScore(score){

        let rarity = 'Common'
        rarity = score >= 33 && score < 41 ? 'Uncommon' : rarity
        rarity = score >= 41 && score < 50 ? 'Rare' : rarity
        rarity = score >= 50 && score < 60 ? 'Epic' : rarity
        rarity = score >= 60 ? 'Legendary' : rarity

        return rarity
    }

// ---

    parseSrc(src){
        return atob(src.match(/.+;base64,(.+)/)[1])
    }

    findTrait(key,buffer){
        let tData = traitRef[key] || []
        let found = tData.reduce( (prev,curr,i)=>{ 
            if(curr && curr.hasOwnProperty('pattern')){
                return buffer.indexOf(curr.pattern) !== -1 ? curr : prev
            }else{
                return prev
            }
        }, null)
        return found
    }

    findAll(buffer){
        let o = {}
        o.skinTone = this.findTrait('Skin Tone',buffer)
        o.hairColor = this.findTrait('Hair Color',buffer)
        o.eyeColor = this.findTrait('Eye Color',buffer)
        o.bgColor = this.findTrait('Bg Color',buffer)
        o.backdrop = this.findTrait('Backdrop',buffer)
        o.face = this.findTrait('Face',buffer)
        o.ears = this.findTrait('Ears',buffer)
        o.nose = this.findTrait('Nose',buffer)
        o.mouth = this.findTrait('Mouth',buffer)
        o.facialFeature = this.findTrait('Facial Feature',buffer)
        o.eyes = this.findTrait('Eyes',buffer)
        o.hairStyle = this.findTrait('Hair Style',buffer)

        // Ease of use
        o.gender = o.face.sex

        // Disambiguate traits 
        o.facialFeature = o.facialFeature !== null ? o.facialFeature : {name:`None`,rarity:`Common`,sex:`any`,series:`1	2	3	4	5`,pattern:``}
        o.hairStyle = o.hairStyle !== null ? o.hairStyle : {name:`Bald`,rarity:`Common`,sex:`M`,series:`	2			`,pattern:``}
        if(o.gender === 'F'){
            switch(o.ears.name){
                case 'Attached':
                    o.ears = {name:`Attached`,rarity:`Common`,sex:`F`,series:`		3		`,pattern:``}
                    break
                case 'Broad':
                    o.ears = {name:`Broad CryptoVoxels Earrings`,rarity:`Uncommon`,sex:`F`,series:`1	2			`,pattern:``}
                    // TO DO -- SWITCH AFTER SERIES 2!!!
                    //o.ears = {name:`Broad`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:``}
                    break
                case 'Van Gogh':
                    o.ears = {name:`Van Gogh`,rarity:`Uncommon`,sex:`F`,series:`				5`,pattern:``}
                    break
            }
            o.hairStyle = o.hairStyle.name !== 'Bald' ? o.hairStyle : {name:`Bald`,rarity:`Common`,sex:`F`,series:`			4	`,pattern:``}
        }
   

        o.list = [o.skinTone,
            o.hairColor,
            o.eyeColor,
            o.bgColor,
            o.backdrop,
            o.ears,
            o.face,
            o.nose,
            o.mouth,
            o.facialFeature,
            o.eyes,
            o.hairStyle]

        return o
    }


// MAIN FUNCTIONS

    runScan(){

        this.runScan_key = this.runScan_key || ''

        let list = this.document.getElementsByClassName('AvastarImageWrap')
        let key = list[0].firstChild.src
        //console.log(key)

        // DON'T RE-RUN on the same list
        if(this.runScan_key !== key){
            this.runScan_key = key

            let scanResults = []
            for(let i=0;i<list.length;i++){ 

                let el = list[i].firstChild

                // represent an avastar
                let avastar = {}
                // get traits - rawTraits - old data format
                avastar.rawTraits = this.getTraits(el)
                avastar.traits = kai_globals.traitsList.reduce( (prev,curr,i)=>{
                    prev[curr] = {}
                    prev[curr].gene = avastar.rawTraits.list[i].name
                    prev[curr].rarity = avastar.rawTraits.list[i].rarity
                    return prev
                },{})
                // get score & overall rarity
                avastar.score = this.getScore(avastar.rawTraits)
                avastar.overallRarity = this.getOverallRarityByScore(avastar.score)
                debugger

                // rarityColor
                let rarityColor = rarityColors[rarityLevels.indexOf(avastar.overallRarity)]

                // Print the overall rarity
                console.log(`%c${avastar.score}%c\t${i}`,`background:${rarityColor}`,'background:white')
                
                let result = this.scanAvastar(avastar)
                if(result){

                    // Blink the Avastar
                    this.highlightAvastar(i)
                    scanResults.push( {result:result,index:i} )
                }

                this.logAvastar()
            }
            console.log(`MATCHED ${scanResults.map(o=>'['+o.result+':'+o.index+'],').join('')}`)
            this.saveLog() 

            // message the results
            document.dispatchEvent(new CustomEvent('kai_scanResults', { detail: scanResults }))
        }
    }

    scanAvastar(avastar){
    
        let found = this.avastarScanList.pass(avastar)
    
        // Display in console
        let result = this.getTraitString(avastar.rawTraits)
        console.log(`%c ${result}`, found ? 'background:#00ffff77' : '')
            
        return found
    }

    highlightAvastar(i){
        let list = this.document.getElementsByClassName('AvastarImageWrap')
        let el = list[i].firstChild //.style.opacity = '20%'
        el.animate([
            // keyframes
            { filter: 'brightness(100%)', opacity:0.9 }, 
            { filter: 'brightness(130%)', opacity:1 }, 
            { filter: 'brightness(100%)', opacity:0.9 },
          ], { 
            // timing options
            duration: 1000,
            iterations: Infinity
          })
        el.animate([
            // keyframes
            { transform: "rotate(-4deg)" }, 
            { transform: "rotate(0deg)" }, 
            { transform: "rotate(4deg)" },
          ], { 
            // timing options
            duration: 400,
            direction: 'alternate',
            iterations: Infinity
          })
    }

    scrollToAvastar(i){
        const options = {behavior: "smooth", block: "center"}
        this.getAvastarEl(i).scrollIntoView(options)
    }

    getAvastarEl(i){
        return this.document.getElementsByClassName('AvastarImageWrap')[i].firstChild
    }

    getAvastar(i){
        let el = this.getAvastarEl(i)
        return this.getTraits(el)
    }
}

})()

