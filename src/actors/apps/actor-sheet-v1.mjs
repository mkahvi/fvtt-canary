const { HandlebarsApplicationMixin } = foundry.applications.api;
const { ActorSheetV2 } = foundry.applications.sheets;

export class CanaryActorSheetV1 extends ActorSheet {
  get template() {
    return "systems/canary/templates/actor/sheet.hbs";
  }

  activateListeners(jq) {
    super.activateListeners(jq);

    const html = jq[0];

    html.addEventListener("pointerenter", this._onPointerEnter.bind(this), {
      passive: true,
      capture: true,
    });
    html.addEventListener("pointerleave", this._onPointerLeave.bind(this), {
      passive: true,
      capture: true,
    });


    this._postRender();
  }

  async _postRender() {
    await sleep(200);

    // Auto-start tour
    const tour = game.tours.get("canary.on-sheet-open");
    tour.start();

  }

  _onPointerEnter(event) {
    const target = event.target;

    if (target.dataset.tooltipManual) {
      this._onActivateManualTooltip(event, target);
    }
  }

  async _onActivateManualTooltip(event, target) {
    await sleep(100);
    game.tooltip.activate(target, { text: target.dataset.tooltipManual });
  }

  _onPointerLeave(event) {
    const target = event.target;

    if (target.dataset.tooltipManual) {
      game.tooltip.deactivate();
    }
  }
}

async function sleep(ms = 0) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}
