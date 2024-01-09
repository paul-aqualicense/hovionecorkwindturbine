module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addWatchTarget('src/css');
    eleventyConfig.addWatchTarget('src/js');

    eleventyConfig.addShortcode('year', () => {
        return `${new Date().getFullYear()}`;
    });

    return {
        dir: {
            input: 'src',
        },
    };
};