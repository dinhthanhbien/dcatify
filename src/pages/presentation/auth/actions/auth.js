import showNotification from '../../../../components/extras/showNotification';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function receiveLogin() {
	return {
		type: LOGIN_SUCCESS,
	};
}

function requestLogout() {
	return {
		type: LOGOUT_REQUEST,
	};
}

export function receiveLogout() {
	return {
		type: LOGOUT_SUCCESS,
	};
}

// logs the user out
export function logoutUser() {
	return (dispatch) => {
		dispatch(requestLogout());
		localStorage.removeItem('authenticated');
		dispatch(receiveLogout());
		// window.location.href("/login");
	};
}

export function loginUser(uname, pword, navigate) {
	const url = 'http://183.81.32.198:8002/ecom-api/users/login';
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			userName: uname,
			password: pword,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.rspCode === '00') {
				localStorage.setItem('authenticated', true);
				localStorage.setItem('username', uname);
				navigate('/dashboard');
			} else {
				// noti('Invalid username or password');
				showNotification('Login Fail', 'Invalid username or password');
				navigate('/auth-pages/login');
			}
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

