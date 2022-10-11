import React from 'react';
import './About.css'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const About = () => {
    const data = [
        
        {"id":1,"name":"React","logo":"https://live.staticflickr.com/65535/52413593240_e00326e727_o.png","total":8},

        {"id":2,"name":"JavaScript","logo":"https://live.staticflickr.com/65535/52412638962_12e932256a_o.png","total":9},

        {"id":4,"name":"CSS","logo":"https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png","total":8},


        {"id":5,"name":"Git","logo":"https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png","total":11}

]
    return (
        <div>
           <h2>Chart By Total Quiz & Id</h2>
            <LineChart className="about"
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 20,
                            bottom: 5,
                            
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="id" stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
        </div>
    );
};

export default About;