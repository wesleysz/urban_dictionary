import { gql } from '@apollo/client';

const QUE_QUERY_BY_STRING=gql`
	query queryByString($str: String!){
		queryByString(str: $str){
			_id,
			author{
				_id,
				name,
				penName
			},
			vocabulary,
			explanation,
			example,
			tags,
			if_publish,
			agree_users,
			disagree_users,
			create_date
		}
	}
`;

const QUE_QUERY_BY_VOCABULARY=gql`
	query queryByVocabulary($vocabulary: String!){
		queryByVocabulary(vocabulary: $vocabulary){
			_id,
			author{
				_id,
				name,
				penName
			},
			vocabulary,
			explanation,
			example,
			tags,
			if_publish,
			agree_users,
			disagree_users,
			create_date
		}
	}
`;

const QUE_QUERY_BY_USER=gql`
	query queryByUser($penName: String!){
		queryByUser(penName: $penName){
			_id,
			author{
				_id,
				name,
				penName
			},
			vocabulary,
			explanation,
			example,
			tags,
			if_publish,
			agree_users,
			disagree_users,
			create_date
		}
	}
`;

const QUE_RANDOM_FIVE_POSTS=gql`
	query randomFivePosts($number: Int){
		randomFivePosts(number: $number){
			_id,
			author{
				_id,
				name,
				penName
			},
			vocabulary,
			explanation,
			example,
			tags,
			agree_users,
			disagree_users,
			create_date
		}
	}
`;

export {QUE_QUERY_BY_STRING, QUE_QUERY_BY_VOCABULARY, QUE_QUERY_BY_USER, QUE_RANDOM_FIVE_POSTS};
