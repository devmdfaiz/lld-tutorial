class Burger {
  bunType: string;
  pattyType: string;
  cheese: boolean;
  onion: boolean;
  sauce: string | null;
  size: "small" | "medium" | "large";

  constructor(bunType: string);
  constructor(bunType: string, pattyType: string);
  constructor(bunType: string, pattyType: string, cheese: boolean);
  constructor(bunType: string, pattyType: string, cheese: boolean, onion: boolean);
  constructor(
    bunType: string,
    pattyType: string,
    cheese: boolean,
    onion: boolean,
    sauce: string
  );
  constructor(
    bunType: string,
    pattyType: string,
    cheese: boolean,
    onion: boolean,
    sauce: string,
    size: "small" | "medium" | "large"
  );
  constructor(
    bunType: string,
    pattyType: string = "veg",
    cheese: boolean = false,
    onion: boolean = false,
    sauce: string | null = null,
    size: "small" | "medium" | "large" = "medium"
  ) {
    this.bunType = bunType;
    this.pattyType = pattyType;
    this.cheese = cheese;
    this.onion = onion;
    this.sauce = sauce;
    this.size = size;
  }
}

// sirf bun + cheese chahiye
new Burger("wheat", "veg", true);
