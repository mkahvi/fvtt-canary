import * as api from "./src/_module.mjs";

Hooks.once("init", () => {
  CONFIG.Actor.documentClass = api.actors.CanaryActor;
  CONFIG.Item.documentClass = api.items.CanaryItem;

  foundry.applications.apps.DocumentSheetConfig.registerSheet(
    getDocumentClass("Actor"),
    game.system.id,
    api.actors.apps.CanaryActorSheet,
    {
      makeDefault: true,
      types: ["canary"]
    }
  )

  foundry.applications.apps.DocumentSheetConfig.registerSheet(
    getDocumentClass("Item"),
    game.system.id,
    api.items.apps.CanaryItemSheet,
    {
      makeDefault: true,
      types: ["canary"]
    }
  )
});
