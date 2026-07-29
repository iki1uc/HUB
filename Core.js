export function HUB_CORE(nc, pq, tmp){
    return {
        mode: "AI-Core",
        pulse: (nc.energy + pq.load + tmp.echo) % 500,
        fusion: (nc.spin + pq.threads + tmp.echo) % 100,
        status(){
            if(this.pulse < 100) return "ruhig";
            if(this.pulse < 300) return "aktiv";
            return "überladen";
        }
    };
}
