import { db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

// タスク保存
export async function saveTasks(userId: string, tasks: any[]) {
  await setDoc(doc(db, "tasks", userId), { list: tasks });
}

// タスク取得
export async function loadTasks(userId: string): Promise<any[]> {
  const snap = await getDoc(doc(db, "tasks", userId));
  return snap.exists() ? snap.data().list : [];
}