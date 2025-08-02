export class Slug {
    public value: string;
    constructor(value: string){
        this.value = value;
    }

    /**
     * Receives a string and returns a slugified version of it.
     *
     *  example: "An example Title!" becomes "an-example-title"
     * 
     * @param text (string) - The text to slugify
     */
    static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')
        return new Slug(slugText);
    }
}