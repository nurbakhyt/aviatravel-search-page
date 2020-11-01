import data from '@/data/results.json';

export default function (): Promise<IsomorphicObject> {
  return Promise.resolve(data);
}
