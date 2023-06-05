const axios = require('axios');

const urls = [
    'https://www.dice.com/job-detail/babf0716-02c4-4d62-af58-5e60e61905a7',
    'https://www.dice.com/job-detail/3dbc84b1-3aaf-4416-b2cc-802a7797ee99',
    'https://www.dice.com/job-detail/40803ed2-9308-44f9-8f1a-916293c449e4',
    'https://www.dice.com/job-detail/678b5e73-0adf-4290-b709-f1b61fcfce14'
  ];

function scrapeData(url) {
    try {
      url = 'https://job-search-api.svc.dhigroupinc.com/v1/dice/jobs/similar?jobIds=f2454bc55e0f8a213f209a47606c9c41&fields=id%7Ctitle%7CpostedDate%7CmodifiedDate%7CdetailsPageUrl%7CcompanyLogoUrl%7CcompanyName%7CemploymentType%7CeasyApply%7CisRemote%7CjobLocation%7CworkFromHomeAvailability%7CemployerType%7Csummary%7CcompanyPageUrl&pageSize=12&includeRemote=true'


      const config = {
        headers:{
            "X-Api-Key":"scYFMLw1Gt3PRvvcnTxsvXnhcx3KVLp7jmR3JVWd"
        }
      };
      axios.get(url,config).then(res=> console.log(res.data))
      .catch(err=> console.log(err))
    //   const $ = cheerio.load(response.data);
      
    //   const jobTitle = $('.jobTitle').text().trim();
    //   console.log(jobTitle)
    //   const companyName = $('.compName').text().trim();
    //   const location = $('[data-cy="location"]').text().trim();
    //   const jobDescription = $('.jobdesc').text().trim();
  
      jobData.push([jobTitle, companyName, location, jobDescription]);
    } catch (error) {
      console.log(`Error scraping ${url}: ${error.message}`);
    }
  }
  
  scrapeData()