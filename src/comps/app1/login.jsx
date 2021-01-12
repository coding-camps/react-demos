import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "admin",
            password: "admin",
        };
        this.login = this.login.bind(this);
        this.check = this.check.bind(this);
        // callback refs
        this.user = null;
        this.setUserRef = (element) => {
            this.user = element;
        }
        this.focusUser = () => {
            if(this.user) this.user.focus();
        }
        // create refs (for React 16.3 +)
        this.pwd = React.createRef();
    }

    componentDidMount() {
        // 获取焦点
        this.focusUser();
    }

    login() {
        if(this.user.value === this.state.username && this.pwd.current.value === this.state.password) {
            console.log('登录成功');
        } else {
            console.log("登录失败");
        }
    }

    check() {
        if(this.user.value.length > 10) {
            alert("超出10个字符，请重新输入");
            this.user.value = this.user.value.substring(0, 10);
        }
    }

    render() {
        let loginStyle = {
            width: 400,
            height: 250,
            background: "#FFF",
            margin: "50px auto",
            position: "relative",
        };
        let hStyle = {
            position: "absolute",
            left: 85,
            top: -50,
            padding: 0,
            margin: 50,
        };
        let pStyle = {
            textAlign: "center",
        };
        let userStyle = {
            width: 200,
            height: 30,
            border: "solid #ccc 1px",
            borderRadius: 3,
            paddingLeft: 32,
            marginTop: 50,
        };
        let pwdStyle = {
            width: 200,
            height: 30,
            border: "solid #ccc 1px",
            borderRadius: 3,
            paddingLeft: 32,
            marginTop: 5,
        };
        let btnStyle = {
            width: 232,
            height: 30,
            background: "#E9E9E9",
            border: "solid #ccc 1px",
            borderRadius: 3,
            textAlign: "center",
        };

        return (
            <div style={loginStyle}>
                <h1 style={hStyle}>登录界面</h1>
                <div>
                    <p style={pStyle}>
                        <input maxLength={20} type="text" placeholder="用户名" ref={this.setUserRef} style={userStyle} onChange={this.check}/>
                    </p>
                    <p style={pStyle}>
                        <input maxLength={20} type="password" placeholder="密码" ref={this.pwd} style={pwdStyle}/>
                    </p>
                    <p style={pStyle}>
                        <button onClick={this.login} style={btnStyle}>登录</button>
                    </p>
                </div>
            </div>
        );
    }
}
