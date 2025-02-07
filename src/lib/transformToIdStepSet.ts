export function transformToIdStepSet<T>(
  arr: T[],
  idKey: keyof T = "id" as keyof T,
  stepKey: keyof T = "step" as keyof T,
): Set<{ id: number; step: number }> {
  return new Set(
    arr
      .map((item) => ({
        id: Number(item[idKey]),
        step: Number(item[stepKey]),
      }))
      .sort((a, b) => a.step - b.step),
  );
}

export interface IdStepSet {
  id: number;
  step: number;
}
