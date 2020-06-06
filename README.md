# Langtago

Build the largest online database of information relating to real life Chinese content (online movies, drama, online news, books, cartoons, textbooks, blogs, websites etc) for Chinese language learners. Such information includes the difficult level of content and vocab/grammar/expression/slang usage.

## Summary

Many people learn Chinese to just watch their favourite anime and Chinese drama. Finding real world books/movies that matches a student's level is difficult and a manual task.

Langtago attempts to index and categorize Chinese content for learning purposes, addressing the following case studies.

### Case studies

1. I've studied Chinese for 3 years at TAFE and have used "Practical Chinese Reader Series" books series, what native Chinese movies and dramas can I watch given, my basic level.
2. I want to watch the 2009 Chinese drama, "Narrow Dwellings", what level of Chinese do I need to be able to understand this movie.
3. I've learnt this new Chinese grammar, 吧 (ba), but I can't understand it. Can you show me more examples of its use in real context like movies. ie where its used in “Narrow Dwellings”
4. My Chinese is pretty good, but after watching "Narrow Dwellings" drama there were a lot of words/slang used that I've never heard. Can you (automatically) create me some study notes to bridge the gap between my Chinese level and the drama.
5. I'm an intermediate level Chinese student. Its boring to study textbooks, but I want to continue learning more Chinese. What do you suggest I read/watch that I will understand given my level, but would also progressively challenge me.

The system relies on 4 main technical feats

1. Building searchable database of real world Chinese material
2. Determining a Language Learner's Difficulty Rating (LLDR)
3. Building a Language learning content recommendation engine based on Machine learning modelling
4. Building Language Learner's Dictionary

## Building searchable database of real world Chinese material

Index Chinese content (movies, drama, online newspaper, books, movies, cartoons, music, textbooks, websites). Allow content to be searchable by difficulty level, vocab/grammar/expression usage, and any other info deemed useful.

## Language Learner's Difficulty Rating (LLDR)

Chinese level differ by region and country. An advanced level student at Melbourne University, is on paper, lower intermediate in China. These can be confusing for a student who thinks he/she is at Advance level but when he/she try to watch an 'intermediate' level movie, finds it too difficult.

Determining and standardizing a difficulty rating.
The Language Learner's “Difficult Rating” (also known as “LLDR”) are opinions of the relative comprehension difficulty or easiness of Chinese medium (movie/drama/newspaper/novels) is for a Chinese language student. Specifically, it should summarize the Chinese proficiency level likely needed to be able to understand the medium.
Language Learner's Rating considers both quantitative and qualitative factors in the following areas: vocabulary used, grammar used, slang usage, dialects, and speed/clearness of speech. A very important part of the evaluation is understanding the relative comprehension difficult of the movie is for a student, therefore, involves judgments about the percentage of words/grammar understood by the student and the probability of comprehending unknown words/sentence through context.

LLDR uses a letter grade scale that ranges from 5 (“Hard”) for the highest rating to 1 (“Easy”) for the easiest rating. For levels 3 and 4, LLDR adds an alpha modifier, L (lower), I (intermediate) and U (Upper) to indicate the approximate difficulty of the medium in the particular classification.

## Content Recommendation Engine

The recommendation model will select content tailored to the user's language knowledge based on their vocab/grammar/expression usage. The model will be determined by a machine learning model that will be constantly updated to challenge and learn with the student.

## Language Learner's Dictionary

Issues with currently dictionary is that results returned aren't necessarily intended for language students. Searching for word "after", can yield results "After the fall of the roman empire, England's economy...".
A language learner searching for "after" is most like a beginner (else he/she would know how to use the word "after"). Results returned should be relative to the user's level. ie "After I got home, I watch TV.". This simplified usage of words is commonly found in language textbook, but not in online dictionaries.
A Language Learner’s dictionary should also include grammar and expression, as these ties in heavily with words.
