# Engineers Without Borders, University of Illinois at Urbana-Champaign Website

## Issues
Issues can be anything from suggestions, improvements, bugs, and other thingamajigs.

To file an issue, please use this. It helps in tracking everything.

## Posts
Here's the step-by-step process in creating a new post.

1. Go to `ewb-uiuc.github.io/_posts`
2. Create a markdown file in the following format
  - File name: `YYYY-MM-DD-<title>.md`
  - Text format:

  ```Markdown
    ---
    layout: post
    title: Hello, World!
    ---

    ![Hello, World!]({{ site.baseurl }}public/uploads/2013/02/hello_001.jpg)

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum viverra cursus. Cras libero dui, vehicula at ex ac, tempus pharetra purus. Mauris porttitor euismod malesuada. Donec et posuere quam. Etiam augue nisi, interdum eget dui porttitor, lobortis sagittis lectus. Integer rhoncus semper tristique. Praesent pretium posuere porttitor. Nulla neque est, hendrerit non quam venenatis, lacinia egestas eros. Mauris ultricies venenatis nisi, vitae luctus elit scelerisque sit amet. Vestibulum faucibus neque nisl, a rutrum eros posuere eu. Vivamus pretium justo in tortor tempus posuere. Suspendisse elementum purus sed lorem accumsan, sit amet luctus felis euismod. Mauris massa nisi, lacinia sed facilisis vel, finibus id ipsum. Morbi ut dignissim metus. Sed lacinia est in odio suscipit dapibus. Quisque vitae fringilla neque, elementum laoreet elit.
  ```

3. To add pictures, go to `ewb-uiuc.github.io/public/uploads/YYYY/MM/DD` and upload the corresponding files.

  *Make sure remove confidential meta data out of the files, before uploading.*

## Custom Pages
Custom pages can be created by following these steps

1. Go to `ewb-uiuc.github.io`
2. Create a file `<filename>.html`
3. Follow the text format

  ```HTML
  ---
  layout: default
  title: <title>
  permalink: <permalink>
  ---

  <div class="page">
    <h1 class="page-title"></h1>
    <p class="lead"></p>
  </div>
  ```

  *This can be altered, as long as the metadata on the top is there.*
