module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addWatchTarget('src/css');

    eleventyConfig.addShortcode('year', () => {
        return `${new Date().getFullYear()}`;
    });

    return {
        dir: {
            input: 'src',
        },
    };
};