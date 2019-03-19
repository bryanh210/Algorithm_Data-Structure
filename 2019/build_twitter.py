"""
Prompt:
# https://leetcode.com/problems/design-twitter/


# Use Cases
# 1. add user2
# 2. user2 post tweet
# 3. user2 follow user1
# 4. user2 checks out their newsfeed
#    top ten most recent tweets accross themselves and following

# O(K) K number of users
# O(N) N tweets per user on average

# Time with merging arrays and sorting: O(N*Klog(NK))

# Time with maxheap = O(N * Klog(K))

# Constructed a max heap:
#      (16, 4)
#    (8, 1) (2, 3)
#  (5, 2)
#


# newsFeed = [20, 18, 17]
# user = user4


# we want to get the newsfeed of user 2
#   user 2 is following user1, user3 and user4
#   top ten most recent tweets posted accross user2 and their followers.
# user2 = []
# user1 = [1, 3, 4, 6]
# user3 = []
# user4 = []
# newsfeed = [9, 8, 6, 5, 4, 3, 1]
"""

import Heap

class User:
  def __init__(self, userId):
    self.userId = userId
    self.following = set([userId])
    self.tweets = []

  def postTweet(self, tweet):
    self.tweets.append(tweet)

  def follow(self, followeeId):
    self.following.add(followeeId)

  def unfollow(self, followeeId):
    if followeeId in self.following:
      self.following.remove(followeeId)


class Tweet:
  def __init__(self, tweetId, timestamp):
    self.tweetId = tweetId
    self.timestamp = timestamp

class Twitter:

    def __init__(self):
        """
        Initialize your data structure here.
        """

        self.users = {}
        self.num_of_tweets = 0

    def add_user(self, userId):
      if userId not in self.users:
        self.users[userId] = User(userId)

    def postTweet(self, userId: 'int', tweetId: 'int') -> 'None':
        """
        Compose a new tweet.
        """
        if userId not in self.users:
          self.add_user(userId)

        user = self.users[userId]
        self.num_of_tweets += 1
        tweet = Tweet(tweetId, self.num_of_tweets)
        user.postTweet(tweet)


    def getNewsFeed(self, userId: 'int') -> 'List[int]':
        """
        Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
        """
        # extract the user
        # go through each user's followers
        # add their tweets to an array --> array of arrays
        # put most recent tweet from each array into max heap
        # removing from max heap ten times

        user = self.users[userId]
        collected_tweets = []
        result = []

        for followerId in user.following:
          follower = self.users[followerId]
          collected_tweets.append(follower.tweets)

        maxheap = Heap("max")

        for index in range(len(collected_tweets)):
          current_tweets = collected_tweets[index]
          last_tweet = current_tweets[-1]
          maxheap.insert([last_tweet.timestamp, last_tweet.tweetId, index])

        count_in_newsfeed = 10

        while (maxheap.size() > 0 and count_in_newsfeed > 0):
          timestamp, tweetId, user = maxheap.remove_peak()
          result.append(tweetId)
          if len(collected_tweets[user]) > 0:
            last_tweet = collected_tweets[user].pop()
            maxheap.insert([last_tweet.timestamp, last_tweet.tweetId, user])
          count_in_newsfeed -= 1

      return result

    def follow(self, followerId: 'int', followeeId: 'int') -> 'None':
        """
        Follower follows a followee. If the operation is invalid, it should be a no-op.
        """

        if followerId not in self.users:
          self.add_user(follower_id)

        if followeeId not in self.users:
          self.add_user(followee_id)

        user = self.users[followerId]
        user.follow(followeeId)

    def unfollow(self, followerId: 'int', followeeId: 'int') -> 'None':
        """
        Follower unfollows a followee. If the operation is invalid, it should be a no-op.
        """

        if followerId == followeeId: return

        if followerId not in self.users: return
        if followeeId not in self.users: return

        user = self.users[followerId]
        user.unfollow(followeeId)



# Your Twitter object will be instantiated and called as such:
obj = Twitter()
obj.postTweet(userId,tweetId)
param_2 = obj.getNewsFeed(userId)
obj.follow(followerId,followeeId)
obj.unfollow(followerId,followeeId)
