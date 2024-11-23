// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

mount(() => <StartClient />, document.getElementById("app")!);

window.onbeforeunload = () => {
	window.scrollTo(0, 0);
}
