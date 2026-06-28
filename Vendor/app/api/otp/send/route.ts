import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { method, identifier } = await req.json();

    if (!method || !identifier) {
      return NextResponse.json(
        { error: 'Method and identifier are required' },
        { status: 400 }
      );
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // In a real app, this would use Twilio/SendGrid to send the code.
    // For now, we mock success and log to server console.
    console.log(`[Mock API] Sent OTP '123456' to ${method}: ${identifier}`);

    return NextResponse.json({ success: true, message: `OTP sent successfully to ${identifier}` });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
