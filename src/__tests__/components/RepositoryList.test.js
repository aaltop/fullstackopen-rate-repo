import { RepositoryListContainer } from "../../components/RepositoryList";
import { numberInThousands } from "../../utils/misc";

import { render, screen } from "@testing-library/react-native";


describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
            totalCount: 8,
            pageInfo: {
                hasNextPage: true,
                endCursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            edges: [
                {
                node: {
                    id: 'jaredpalmer.formik',
                    fullName: 'jaredpalmer/formik',
                    description: 'Build forms in React, without the tears',
                    language: 'TypeScript',
                    forksCount: 1619,
                    stargazersCount: 21856,
                    ratingAverage: 88,
                    reviewCount: 3,
                    ownerAvatarUrl:
                    'https://avatars2.githubusercontent.com/u/4060187?v=4',
                },
                cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                {
                node: {
                    id: 'async-library.react-async',
                    fullName: 'async-library/react-async',
                    description: 'Flexible promise-based React data loader',
                    language: 'JavaScript',
                    forksCount: 69,
                    stargazersCount: 1760,
                    ratingAverage: 72,
                    reviewCount: 3,
                    ownerAvatarUrl:
                    'https://avatars1.githubusercontent.com/u/54310907?v=4',
                },
                cursor:
                    'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                },
            ],
            };

            const reps = repositories.edges.map(edge => edge.node);

            render(<RepositoryListContainer repositories={reps} />);
            
            // component renders repository's name, description, 
            // language, forks count, stargazers count, rating average, 
            // and review count correctly.
            reps.forEach(rep => {

                // should beVisible be tested?
                const textToText = [
                    rep.fullName,
                    rep.description,
                    rep.language,
                    numberInThousands(rep.forksCount),
                    numberInThousands(rep.stargazersCount),
                    numberInThousands(rep.ratingAverage),
                ];
                textToText.forEach(text => screen.getByText(text));

                const reviewCountNodes = screen.getAllByText(numberInThousands(rep.reviewCount));
                expect(reviewCountNodes).toHaveLength(2);
            });
        });
    });
  });