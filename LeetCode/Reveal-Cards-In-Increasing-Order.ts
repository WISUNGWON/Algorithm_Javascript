function deckRevealedIncreasing(deck: number[]): number[] {
    deck.sort((a, b) => b - a);
    const queue:number[] = [];
    queue.push(deck[0]);
    for (let i = 1; i < deck.length; i++) {
        const last = queue.pop();
        queue.unshift(...[deck[i], last]);
    }
    
    return queue
};