## Twitter Fetcher

This is a Perl app which has 2 features:

1. Given a twitter username, displays their most recent tweets
2. Given two twitter usernames, display the intersection of the people that they follow

## Getting Started

1. Clone the repository:

        git clone https://github.com/nurazem/TwitterFetcher

2. Install cpanm:

    cpan App::cpanminus

3. Go to project root and install dependencies (this might take around 5 minutes):

    cd TwitterFetcher
    perl cpanm --installdeps .

4. Start the web server:

    bin/app.pl

## Configuration

The app won't work yet because we don't have Twitter OAuth keys.

1. Create a new Twitter app:

    https://apps.twitter.com/

2. Copy the following keys from _Keys and Access Tokens_ tab:

  * Consumer Key
  * Consumer Secret
  * Access Token
  * Access Token Secret

3. There are two options to add these keys to the app:

  1. Add them into `environments/development.yml` file as:

    ```
    consumer_key: 'your_key'
    consumer_secret: 'your_secret'
    access_token: 'your_token'
    access_token_secret: 'your_access_token'
    ```
  2. Create environment variables:

    In your `.bashrc` file or `.zshrc` add the following and start a new terminal session

    ```
    export TWITTER_CONSUMER_KEY=your_key
    export TWITTER_CONSUMER_SECRET=your_secret
    export TWITTER_ACCESS_TOKEN=your_token
    export TWITTER_ACCESS_TOKEN_SECRET=your_access_token
    ```

4. Enjoy :)




