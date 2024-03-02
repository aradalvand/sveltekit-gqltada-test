import { initGraphQLTada, type TadaDocumentNode } from 'gql.tada';
import type { introspection } from '../graphql-env.d.ts';

export const graphql = initGraphQLTada<{
	introspection: introspection;
	disableMasking: true;
	scalars: {
		ID: string;
		Instant: string;
		Duration: string;
		LocalDate: string;
		DateTimeZone: string;
		Byte: number;
		Decimal: number;
		Interval: string;
		URL: string;
		UUID: string;
	};
}>();

export type { FragmentOf, ResultOf, VariablesOf } from 'gql.tada';
export { readFragment } from 'gql.tada';
