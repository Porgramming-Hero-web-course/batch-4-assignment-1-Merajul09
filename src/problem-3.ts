{
  const countWordOccurrences = (paragraph: string, check: string) => {
    const result = paragraph
      .toLowerCase()
      .replace(/[$&+,:;=?@#|'<>.-^*()%!]/g, " ")
      .split(" ");
    const res = result.filter((s) => s === check);
    return res.length;
  };
  countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
}
