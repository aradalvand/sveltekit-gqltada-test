import { graphql, readFragment, type ResultOf } from '$lib/graphql';

export const lessonTitleCardFragment = graphql(`
	fragment lessonTitleCard on Lesson @_unmask {
		__typename
		id
		number
		title
		attachmentsCount
	}
`);

export const lessonForLearningPageFragment = graphql(
	`
		fragment lessonForLearningPage on Lesson @_unmask {
			...lessonTitleCard
			... on ArticleLesson {
				contentAsHtml
				totalWordsCount
			}
			... on VideoLesson {
				video {
					id
				}
			}
		}
	`,
	[lessonTitleCardFragment]
);

let lesson: ResultOf<typeof lessonForLearningPageFragment>;
if (lesson.__typename == 'ArticleLesson') {
	// NOTE: `lesson` here doesn't have the `ArticleLesson` properties
	lesson.totalWordsCount;
}
