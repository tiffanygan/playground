class Channel {
    constructor() {
        this.subscribers = [];
    }
    
    register(subscriber) {
        this.subscribers.push(subscriber);
    }
    
    unregister(subscriber) {
        this.subscribers = this.subscribers.filter((currSubscriber) => currSubscriber !== subscriber);
    }
    
    fire() {
        this.subscribers.forEach(subscriber => subscriber.fire());
    }
}

const channel = new Channel();

class Subscriber {
    constructor(fireMethod) {
        this.fire = fireMethod;
    }
}

const millisecondsElement = document.getElementById('current-milli');
const secondsElement = document.getElementById('current-sec');

const msSubscriber = new Subscriber(() => millisecondsElement.textContent = `Current milliseconds: ${new Date().getUTCMilliseconds()}`);
const secSubscriber = new Subscriber(() => secondsElement.textContent = `Current seconds: ${new Date().getUTCSeconds()}`);

document.getElementById('subscribe-milli').addEventListener('click', () => channel.register(msSubscriber));
document.getElementById('unsubscribe-milli').addEventListener('click', () => {
    channel.unregister(msSubscriber);
    millisecondsElement.textContent = '';
});
document.getElementById('subscribe-sec').addEventListener('click', () => {
    channel.register(secSubscriber);
    const number = Math.random();
    if (number > 0.8) {
        channel.register(easterEgg);
    }
});
document.getElementById('unsubscribe-sec').addEventListener('click', () => {
    channel.unregister(secSubscriber);
    secondsElement.textContent = '';
    channel.unregister(easterEgg);
    document.getElementById('easter-egg').style.display = 'none';
});
document.getElementById('fire').addEventListener('click', () => channel.fire());

const easterEgg = new Subscriber(() => document.getElementById('easter-egg').style.display = 'block');