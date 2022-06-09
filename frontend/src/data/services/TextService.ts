export const TextService = {
    limitText(text: string, sizeMax: number): string {
        if (text.length > sizeMax) {
            return text.slice(0, sizeMax) + '...';
        }
        return text;
    }
}