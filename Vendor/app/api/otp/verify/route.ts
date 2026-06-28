import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { identifier, code } = await req.json();

    if (!identifier || !code) {
      return NextResponse.json(
        { error: 'Identifier and code are required' },
        { status: 400 }
      );
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Mock verification: accept only "123456"
    if (code === '123456') {
      return NextResponse.json({ success: true, message: 'Verified successfully' });
    } else {
      return NextResponse.json(
        { error: 'Invalid or expired verification code. Please try again.' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
