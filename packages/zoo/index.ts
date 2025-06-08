// (0. only when testing in the repo => go to packages/animals, packages/names and packages/zoo and run npm run build in every folder) [also run npm install]
// 1. Remove this import
import { Animal } from "@tuskdesign/animals";

// 2. Go to this line
// 3. Put the cursor the the end of the word animal and trigger intellisense/autocompletion (by default ctrl+space)
// 4. Auto imports don't offer the option to import from @tuskdesign/animals (expect it to offer the option when project references and aliases are setup correctly)
const animal: Animal = {
  name: "test",
  sound: "test",
};

console.log(animal);
