import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container" style={{ backgroundImage:  'portfolio\src\app\images\Otang.jpg'}}>
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">About</a>
                <a className="nav-link" href="#">Projects</a>
                <a className="nav-link" href="#">Contact</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
    </div>
  );
}
