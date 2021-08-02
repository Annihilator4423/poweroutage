import * as alt from 'alt-client';
import * as game from 'natives';

alt.onServer('blackouton',() => {
  game.setArtificialLightsStateAffectsVehicles(false);
  game.setArtificialLightsState(true);
});

alt.onServer('blackoutoff',() => {
  game.setArtificialLightsStateAffectsVehicles(false);
  game.setArtificialLightsState(false);
});
