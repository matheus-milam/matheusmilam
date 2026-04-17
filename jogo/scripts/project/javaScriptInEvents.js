

const scriptsInEvents = {

	async Eventosjogo_Event15_Act2(runtime, localVars)
	{
		runtime.goToLayout("gameOver");
	},

	async Eventostelainicio_Event3_Act1(runtime, localVars)
	{
		window.close();
	},

	async Eventosgameover_Event1_Act1(runtime, localVars)
	{
		runtime.goToLayout("telaInicio")
	},

	async Eventosgameover_Event2_Act1(runtime, localVars)
	{

	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
