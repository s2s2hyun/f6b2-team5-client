import styled from "@emotion/styled";

import { Menu, Dropdown, message, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';



const Menu01 = styled(Menu)`
    width: 142px;
    height: 186px;
    border: 2px solid #DBDBDB;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Space01 = styled(Space)`
    width: 142px;
    height: 60px;
    background: #FFFFFF;
    border: 2px solid #DBDBDB;
    border-radius: 8px;
        div{
            color:black;
            padding-left: 8px;
            font-family: 'Noto Sans KR';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;
        }
`

const MenuItem = styled(Menu.Item)`
    height: 55px;
    text-align: center;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #767676;
    /* border-bottom: 1px solid #EDEDED; */
`
const Line = styled.div`
width: 116px;
    height: 0px;
    border: 1px solid #EDEDED;
    
`


export default function Dropdown02(){

    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
        console.log({key})
    };


    const menu = (
    <Menu01>
      <MenuItem>서비스 문의</MenuItem>
      <Line></Line>
      <MenuItem>환불 문의</MenuItem>
      <Line></Line>
      <MenuItem>신고하기</MenuItem>
    </Menu01>

  );


    return(
        <Dropdown overlay={menu}>
            <a onClick={e => e.preventDefault()}>
            <Space01>
                <div>문의유형</div><DownOutlined style={{color:"#DBDBDB"}} />
            </Space01>
            </a>
        </Dropdown>
    )
}