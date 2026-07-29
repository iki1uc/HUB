export function HUB_DASHBOARD(hub){
    return {
        mode: hub.mode,
        pulse: hub.pulse,
        fusion: hub.fusion,
        status: hub.status()
    };
}

