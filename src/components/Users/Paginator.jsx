import React from 'react'
import styles from './users.module.css'

let Paginator=({totalUserCount,pageSize,currentPage,onPAgeChange})=>{
let pageCount = Math.ceil(totalUserCount / pageSize);
let page = [];
for (let i = 1; i <= pageCount; i++) {
  page.push(i);
}
return (
  <div>
    <div className={styles.page}>
      {page.map(p => {
        return (
          <span
            className={currentPage === p && styles.selectPage}
            onClick={() => {
              onPAgeChange(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
    </div>
    )
    }
    export default Paginator