import HorizontalScroll from "../componentes/scroll/HorizontalScroll";
import './page-ml.css'

export default function MachineLearning() {
    return (
      <div className="">
          <div className="container-habilities">
                <h1>Habilidades de Machine Learning</h1>
                <ul>
                  <li>ETL - pipelines</li>
                  <li>Airflow</li>
                  <li>Spark</li>
                  <li>SQL</li>
                </ul>
            </div>     

            <div className="container-project">
                <h1>Projetos de Machine Learning</h1> 
                <HorizontalScroll>
                    <div style={{ width: '250px', height: '250px', backgroundColor: 'lightblue', borderRadius: '15px' }}>
                      Item 1
                    </div>
                    <div style={{ width: '250px', height: '250px', backgroundColor: 'lightblue', borderRadius: '15px' }}>
                      Item 2
                    </div>
                    <div style={{ width: '250px', height: '250px', backgroundColor: 'lightblue', borderRadius: '15px' }}>
                      Item 3
                    </div>
                    <div style={{ width: '250px', height: '250px', backgroundColor: 'lightblue', borderRadius: '15px'  }}>
                      Item 4
                    </div>
                    <div style={{ width: '250px', height: '250px', backgroundColor: 'lightblue', borderRadius: '15px'  }}>
                      Item 5
                    </div>
                </HorizontalScroll>
            </div>
      </div>
    );
  }
  