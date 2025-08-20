import { db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export async function saveTasks(userId: string, tasks: any[]) {
  await setDoc(doc(db, "tasks", userId), { list: tasks });
}

export async function loadTasks(userId: string): Promise<any[]> {
  const snap = await getDoc(doc(db, "tasks", userId));
  return snap.exists() ? snap.data().list : [];
}