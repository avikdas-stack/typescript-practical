let discount: number = 10;
let laptopprice: number = 30000;
let headphone: number = 2500;
let speakerprice: number = 1000;

console.log(`FLat Discount Rate: ${discount}%`);
console.log(
  `Laptop: ${laptopprice}/- (discount: - ${(laptopprice * discount) / 100} /-)`,
);
console.log(
  `Head Phone: ${headphone}/- (discount: - ${(headphone * discount) / 100} /-)`,
);
console.log(
  `Speaker: ${speakerprice}/- (discount: - ${(speakerprice * discount) / 100} /-)`,
);
