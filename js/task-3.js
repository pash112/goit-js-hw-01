function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
    return totalWidth;
}
