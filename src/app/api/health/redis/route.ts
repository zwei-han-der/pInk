import { NextResponse } from "next/server";
import { redis } from '@/lib/redis';

export async function GET() {
    try {
        const testValue = new Date().toISOString();
        await redis.set('health-check', testValue, { ex: 60 });
        
        const retrieved = await redis.get('health-check');
        if (retrieved !== testValue) throw new Error('Redis write/read mismatch');

        return NextResponse.json({
            success: true,
            data: { status: 'healthy', timestamp: testValue }
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : 'Redis check failed'
        }, { status: 500 });
    }
}
