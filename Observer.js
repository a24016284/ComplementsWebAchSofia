export class Observer {
    constructor() {
        this.observerCollection = [];
    }

    subscribe(observer) {
        this.observerCollection.push(observer);
    }

    notifier(valeur) {
        this.observerCollection.forEach(obs => obs.update(valeur));
    }
}

