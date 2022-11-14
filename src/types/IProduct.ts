export default interface IProduct {
    id: number;
    thumbnailUrl: string;
    hdThumbnailUrl: string;
    name: string;
    defaultDisplayedPrice: number;
    defaultDisplayedPriceFormatted: string;
    options: [
        {
            name: string;
            choices: [
                {
                    text: string
                }
            ]
        }
    ]
}
