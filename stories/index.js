import "styles";
import "styles/storybook";

const ctx = require.context("./", true);
ctx.keys().map(ctx);
