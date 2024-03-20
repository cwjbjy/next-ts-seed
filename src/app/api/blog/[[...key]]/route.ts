export async function GET(request: Request, { params }: { params: { key: string[] } }) {
  const key = params.key;
  return Response.json({ key });
}
