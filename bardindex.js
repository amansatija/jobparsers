const axios = require('axios');
const cheerio = require('cheerio');

async function scrape_urls(urls) {
  const data = [];
  for (const url of urls) {
    try{
    const response = await axios.get(url);
    

    
        const soup = await cheerio.load(response.data);
        // console.log("soup",soup)
        
        const job = soup('[data-cy=jobTitle]').text();
        const company = soup('[data-cy=companyNameLink]').text();
        const location = soup('[data-cy=companyLocation]').text();
        // const salary = soup('[data-cy=jobTitle]').text();
        // const description = soup('[data-cy=jobTitle]').text();
        
        // const company = soup('#job-details .job-details-header .company')[0].text;
        // const location = soup('#job-details .job-details-header .location')[0].text;
        // const salary = soup('#job-details .job-details-header .salary')[0].text;
        // const description = soup('#job-details .job-details-description')[0].text;
        data.push({
        Job_Title: job,
        Company: company,
        Location: location,
        //   Salary: salary,
        //   Description: description
        });
    }catch(err){
        // console.log(err)
        data.push({
            Job_Title: "err",
            Company: "company",
            Location: "location",
          //   Salary: salary,
          //   Description: description
          });
    }
  }
  return data;
}

const urls = [
    'https://www.dice.com/job-detail/8f6eb528-5baf-46f8-9cac-283122b65d04',
    'https://www.dice.com/job-detail/f7a34cdc-b37e-4940-b14d-c75c82ff8a5d',
    'https://www.dice.com/job-detail/90f64b19-e01f-4f8a-94c2-e3c62ba866d6',
    'https://www.dice.com/job-detail/e7c8aff9-e2ce-4b71-981c-6011a53e0fcf',
    'https://www.dice.com/job-detail/e874da0b-31a2-4b14-ad6d-f5545f6ee2bf',
    'https://www.dice.com/job-detail/239b3f99-96d6-4ffd-91e9-3c3e83b872e1',
    'https://www.dice.com/job-detail/d5987c10-b631-4bbd-9fd1-65aacbe838a7',
    'https://www.dice.com/job-detail/ace4c2c9-87ad-4b23-a63d-ea7cff44c1cb',
    'https://www.dice.com/job-detail/053c837e-e5d3-4a91-b03c-fe96fd258e09',
    'https://www.dice.com/job-detail/a9610171-1cbc-4b71-a138-16efc599fbbe',
    'https://www.dice.com/job-detail/d5384643-cca7-4837-b7a2-85e36da6c10a',
    'https://www.dice.com/job-detail/785a54fc-90e5-4368-97cd-f6219638113b',
    'https://www.dice.com/job-detail/e3daf453-9b7c-426e-9d6d-0c03b65dae55',
    'https://www.dice.com/job-detail/41d75853-a8cf-474e-ac20-bc8b15748b58',
    'https://www.dice.com/job-detail/0e2a9064-c0c3-43f5-b4ab-580cf8f19616',
    'https://www.dice.com/job-detail/93eea2a4-4371-410a-97c7-d1d8365dd0a0'
];

scrape_urls(urls).then(data=>
    console.log(data)
);
console.log("came here")
