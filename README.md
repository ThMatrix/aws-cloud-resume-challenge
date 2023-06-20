# AWS Cloud Resume Challenge

<html>
  <head>
    <body>
      <h2> Techstack: </h2>
      <ul>
        <li> HTML & CSS </li>
        <li> Meyawo template </li>
        <li> Amazon S3 </li>
        <li> Route 53 </li>
        <li> Databases: DynamoDB </li>
        <li> ACM </li>
        <li> CloudFront </li>
      </ul>
      <h2> Hosting Services: </h2>
      AWS Cloud Platform was used to host this Portfolio Website. Multiple Services were used to host the portfolio such as:
      <ul>
        <li><b>S3:</b> - Amazon S3 was used to store the website code </li>
        <li><b>Cloudfront:</b> - AWS Cloudfront was used to cache the content better to provide increase website performance that is being hosted from S3 Bucket.</li>
        <li> <b>Route 53:</b> - It provides domain name services, which I used to buy my own personal domain and used cloudfront to redirect the website from CDN domain to personal domain </li>
        <li> <b>ACM:</b> - It was used to provide the secure certificate for the website so that communication can happen securely on HTTPS </li>
        <li><b>DynamoDB:</b> - DynamoDB as a Database service was used to store the data (Viewer count) and update whenever a viewer visits on website </li>
        <li><b> AWS Lambda and API Gatewat:</b> - AWS lambda was used to write the python script which will update the viewer count whenever a visitor open the website, where API Gateway was used to accept requests from the website and communicating with the database and updating it through javascript code </li>
      </ul>
      
#### Architecture Diagram:
![Architecturediagram](https://github.com/gorewaranshul/aws-cloud-resume-challenge/assets/87205043/0024a240-a02c-49fe-a8fe-ba36ac75946d)
      <h2> Cloud Resume Challenge</h2>
       This website was part of Cloud resume challenge, which asks the users who take challenge to use various AWS services to build a simple Portfolio website through various
        AWS services, which are displayed in the Architecture Diagram above. Link for the website is https://www.anshulgorewar.com
