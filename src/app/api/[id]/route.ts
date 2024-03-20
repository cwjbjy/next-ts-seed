export async function GET(request: Request, { params }: { params: { id: string } }) {
  return Response.json({ name: '张三', id: params.id });
}
