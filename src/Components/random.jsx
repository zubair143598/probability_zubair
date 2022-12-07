import React from "react";
import { useState, useEffect} from "react";

const Random = () => {
  const [randnum, setRandnum] = useState("");
  const data =[
    {
      "img": "https://images.unsplash.com/photo-1668868488723-c217b4f89465?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "diamond": 50,
      "gold": 30,
      "silver": 20
    },
    {
      "img": "https://images.unsplash.com/photo-1669605140640-d5908ffe8524?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      "diamond": 10,
      "gold": 20,
      "silver": 80
    },
    {
      "img": "https://images.unsplash.com/photo-1669385184491-8ab70b39324e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "diamond": 5,
      "gold": 2,
      "silver": 93
    },
    {
      "img": "https://images.unsplash.com/photo-1541513986997-e5de04e51ef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "diamond": 50,
      "gold": 0,
      "silver": 50
    },
    {
      "img": "https://images.unsplash.com/photo-1539390272712-eb2d9b1b7583?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      "diamond": 0,
      "gold": 0,
      "silver": 100
    }
  ]
  function getRndInteger() {
    setRandnum(Math.floor(Math.random() * data.length ));
    // data[randnum]
    console.log( data[randnum])
  }

  const [random, setRandom] = useState("");
  const [show, setShow] = useState(false);
  const randomNumber = () => {
    // setRandom(Math.floor(Math.random() * data.length) + 1);
    setShow(true);
    let test = pick_random();
    setRandom(test);
  };
  useEffect(() => {
    setTimeout(function () {
      setShow(false);
    }, 4000);
  }, [random]);
  const set = { 1: 0.4, 2: 0.3, 3: 0.2, 4: 0.1 };
  // get probabilities sum:
  var sum = 0;
  for (let j in set) {
    sum += set[j];
  }
  console.log(pick_random());
  function pick_random() {
    var pick = Math.random() * sum;
    for (let j in set) {
      pick -= set[j];
      if (pick <= 0) {
        return j;
      }
    }
  }
  return (
    <div className="container">
      <div className="row">
        {
          data.map((value,i)=>
          {
            return(
              <>
              <div className="col-lg-2">
                <div className="card h-100">
                  <img src={value.img} className="w-100 h-100" alt="" />
                </div>
              </div>
              </>
            )
          })
        }

        
        
        <div className="row">
          <div className="collg-12 text-center">
            <button
              className="btn btn-danger mt-4"
              type="button"
              onClick={getRndInteger}
            >
              Get your reward
            </button>
          </div>
          <div className="col-lg-5  mt-5">
          <div className="card p-5">
            {
              data.map((val,key)=>
              {
                return

              })
            }
            {/* {
              <img src={data[randnum]?.img} alt="" />
            }
            {
             <p className="mt-5">Dimand {data[randnum]?.diamond}</p>
            }
            {
             <p className="mt-5">gold: {data[randnum]?.gold}</p>
            }
            {
             <p className="mt-5">silver: {data[randnum]?.silver}</p>
            } */}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Random;
