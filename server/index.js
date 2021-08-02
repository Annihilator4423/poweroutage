import * as alt from "alt-server";
import * as chat from "chat";


// =============================== Commands Begin ==================================================


chat.registerCmd("poweroff", player => {
    alt.emitClient(alt.Player.all, "blackouton");
});

chat.registerCmd("poweron", player => {
    alt.emitClient(alt.Player.all, "blackoutoff");
});


// =============================== Commands End ====================================================
