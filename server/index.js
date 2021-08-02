import * as alt from "alt-server";
import * as chat from "chat";


// =============================== Commands Begin ==================================================


chat.registerCmd("poweroff", player => {
    alt.emitAllClients("blackouton");
});

chat.registerCmd("poweron", player => {
    alt.emitAllClients("blackoutoff");
});


// =============================== Commands End ====================================================
