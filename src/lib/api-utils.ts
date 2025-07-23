import { NextResponse } from 'next/server';

export function addCorsHeaders(response: NextResponse) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return response;
}

export function createSuccessResponse<T>(data: T, meta?: Record<string, unknown>) {
    const response = NextResponse.json({
        success: true,
        data,
        ...(meta && { meta })
    });
    return addCorsHeaders(response);
}

export function createErrorResponse(error: unknown, status: number = 500) {
    const message = error instanceof Error ? error.message : 'Erro desconhecido';
    const response = NextResponse.json({
        success: false,
        error: message
    }, { status });
    return addCorsHeaders(response);
}

export function createOptionsResponse() {
    const response = new NextResponse(null, { status: 200 });
    return addCorsHeaders(response);
}
