import { useConfirm } from "@/hooks/useConfirm";

export default function ConfirmHookExample() {
  const deleteWorld = () => console.log("delete the world");
  const abort = () => console.log("aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

  return (
    <div>
      <h1>승인 훅</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}
