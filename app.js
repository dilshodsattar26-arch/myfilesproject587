const coreModelInstance = {
    version: "1.0.587",
    registry: [489, 1099, 52, 1457, 1867, 1501, 1607, 1862],
    init: function() {
        const nodes = this.registry.filter(x => x > 26);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreModelInstance.init();
});