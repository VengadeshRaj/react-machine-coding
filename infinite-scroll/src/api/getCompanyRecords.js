const COMPANY_RECORDS =[
  ["Google", "Bangalore", "Full-Time"],
  ["Amazon", "Hyderabad", "Contract"],
  ["Microsoft", "Noida", "Full-Time"],
  ["TCS", "Chennai", "Internship"],
  ["Infosys", "Pune", "Full-Time"],
  ["Wipro", "Bangalore", "Contract"],
  ["Accenture", "Mumbai", "Full-Time"],
  ["IBM", "Hyderabad", "Remote"],
  ["Oracle", "Gurgaon", "Full-Time"],
  ["HCL", "Noida", "Internship"]
]

export const getCompanyRecords =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(COMPANY_RECORDS)
        },5000)
    }
        
    )
}