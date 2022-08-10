import React , { useState }from 'react'

export default function Search() {

    const data =[
        {
            name:"ola",
            age:20
        },
        {
            name:"ayo",
            age:20
        },
        {
            name:"tayo",
            age:20
        },
        {
            name:"shola",
            age:20
        },
        {
            name:"bola",
            age:20
        },
        {
            name:"faith",
            age:20
        },
        {
            name:"sayo",
            age:20
        },
    ]
    const [search, setsearch] = useState("");
    const [datastore, setDatastore] = useState(data);
    // const [duplicatedata, setDuplicatedata] = useState(data);

    const filterData = (e) => {
        setsearch(e.target.value);

        // const filtereddata = datastore.filter((datum) =>
        //   datum.name.toLowerCase().includes(e.target.value.toLowerCase())
        // );
        setDatastore(
            data.filter((datum) =>
            datum.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
          );
    }    
    const SearchBar = () => {
        return (
          <div className="searchx">
            <div className="search-input">
              <input
                type="text"
                 value={search}
                autoFocus
                 placeholder="search.."
                 onChange={filterData}
              />
            </div>
          </div>
        );
      };
  return (
    <div className='search'>
        <SearchBar/>
        <section>
            <table className='search_table'>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                </thead>
                <tbody>
                    {
                        datastore.map((x,i) =>{
                            return(
                                <tr key={i}>
                                    <td> {x.name}</td>
                                    <td> {x.age}</td>
                                </tr>

                            )
                        })
                    }

                    
                </tbody>
            </table>

        </section>
    </div>
  )
}
