import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};

export const createSuccessResponse = <T>(data: T) => 
  NextResponse.json({ success: true, data }, { headers: corsHeaders });

export const createErrorResponse = (error: unknown, status = 500) => 
  NextResponse.json({ 
    success: false, 
    error: error instanceof Error ? error.message : 'Erro desconhecido' 
  }, { status, headers: corsHeaders });

export const createOptionsResponse = () => 
  new NextResponse(null, { status: 204, headers: corsHeaders });
