export function HUB_RUNTIME(nc, pq, tmp, net){
    return {
        ncSpin: nc.spin,
        pqLoad: pq.load,
        tmpEcho: tmp.echo,
        netQuantum: net.quantum,
        hubPulse: (nc.spin + pq.load + tmp.echo + net.quantum) % 500
    };
}
