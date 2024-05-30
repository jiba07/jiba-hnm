import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch, faX } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { width } from '@fortawesome/free-regular-svg-icons/faAddressBook';

const NavBar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성'];

    const [width, setWidth] = useState(0);

    const navigate = useNavigate();

    const goToLogin = () => {
        if (authenticate == false) {
            navigate('/login');
        } else {
            setAuthenticate(false);
            navigate('/');
        }
    };

    const search = (event) => {
        if (event.key === "Enter") {
            navigate(`?q=${event.target.value}`);
        }
    };

    const showSide = (width) => {
        setWidth(width);
    }

    return (
        <div>
            <div className='side-menu-area' style={{ width: `${width}px` }}>
                <div className='x-icon'>
                    <FontAwesomeIcon onClick={() => showSide(0)} icon={faX} />
                </div>
                <div className='side-menu'>
                    {menuList.map(menu => <li key={menu.id}>{menu}</li>)}
                </div>
            </div>
            <Container className='top-area'>
                <FontAwesomeIcon className='bars-icon' icon={faBars} onClick={() => showSide(350)} />

                {authenticate === true ?
                    <div className='login-button' onClick={goToLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그아웃</div>
                    </div>
                    : <div className='login-button' onClick={goToLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
                    </div>}
            </Container>

            <div className='nav-section'>
                <a href='/'><img width={100} src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg" /></a>
            </div>

            <Container>
                <Row className='menu-area'>
                    <Col lg={10}>
                        <ul className='menu-list'>
                            {menuList.map(menu => <li key={menu.id}>{menu}</li>)}
                        </ul>
                    </Col>
                    <Col lg={1} className='search-list'>
                        <FontAwesomeIcon className='search-icon' icon={faSearch} />
                        <input type='text' onKeyPress={search} placeholder='제품검색' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NavBar
