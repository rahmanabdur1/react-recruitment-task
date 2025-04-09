import { Complain } from './types';

const API_BASE = 'https://sugarytestapi.azurewebsites.net';

export async function fetchComplains(): Promise<Complain[]> {
  const res = await fetch(`${API_BASE}/TestApi/GetComplains`);
  if (!res.ok) throw new Error('Failed to fetch complaints');
  return res.json();
}

export async function saveComplain(title: string, body: string): Promise<{ Success: boolean; Message?: string }> {
  const res = await fetch(`${API_BASE}/TestApi/SaveComplain`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ Title: title, Body: body }),
  });

  const data = await res.json();
  if (!res.ok || !data.Success) throw new Error(data.Message || 'Failed to save complaint');
  return data;
}
