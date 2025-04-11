import { sendEmailFn } from '@/server/sendEmail'
import { useMutation } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'

export const Route = createFileRoute('/')({
  component: () => <Home />,
});

function Home() {
  const sendEmailMutation = useServerFn(sendEmailFn)
  const { mutate } = useMutation({
    mutationFn: sendEmailMutation,
  })
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <button onClick={() => mutate({})}>Click me</button>
    </div>
  );
}