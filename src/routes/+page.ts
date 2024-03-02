import { graphql, send } from '$lib/graphql';
import type { PageLoad } from './$types';

const UserQuery = graphql(`
	query userQuery {
		currentUser {
			fullName
			specialRole
		}
	}
`);
const CourseQuery = graphql(`
	query courseQuery($id: ID!) {
		course: courseById(id: $id) {
			id
			miniTitle
			createdAt
			activeDiscount {
				percentage
			}
		}
	}
`);

export const load = (() => {
	console.log('CourseQuery:', CourseQuery);
	return {};
}) satisfies PageLoad;
