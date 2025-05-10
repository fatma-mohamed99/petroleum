export function getPaginationRange(current: number, total: number) {
  if (total <= 6) {
    return Array.from({ length: total }, (_, i) => ({ index: i, type: "number" }));
  }
  
  const result = [];
  
  result.push({ index: 0, type: "number" });
  
  if (current <= 3) {
    for (let i = 1; i <= 4; i++) {
      result.push({ index: i, type: "number" });
    }
    result.push({ index: -1, type: "ellipsis" });
    result.push({ index: total - 1, type: "number" });
  } 
  else if (current >= total - 4) {
    result.push({ index: -1, type: "ellipsis" });
    for (let i = total - 5; i < total; i++) {
      result.push({ index: i, type: "number" });
    }
  } 
  else {
    result.push({ index: -1, type: "ellipsis" });
    for (let i = current - 1; i <= current + 1; i++) {
      result.push({ index: i, type: "number" });
    }
    result.push({ index: -2, type: "ellipsis" });
    result.push({ index: total - 1, type: "number" });
  }
  
  return result;
}