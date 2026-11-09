import type { LessonTrMap } from "./lessons";
import { PUBLIC_UZ_1 } from "./lessons-uz-public-1";
import { PUBLIC_UZ_2 } from "./lessons-uz-public-2";

// Jamoat joylari odobi olami (o‘zbekcha).
const T: LessonTrMap = { ...PUBLIC_UZ_1, ...PUBLIC_UZ_2 };
export default T;
