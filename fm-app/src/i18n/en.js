export default  {
		product: 'Laboratory work No4 on the discipline "Corporate systems"',
		auth: {
			title: "Authorization",
			enter_email_ph: 'Enter e-mail',
			enter_pass_ph: 'Enter password',
			registration: 'Register'
		},
		reg: {
			title: 'Fill out the registration form',
			firstname: 'Username (Login)',
			email: 'e-mail',
			password: 'Password',
			country: 'Country',
			id_user: 'User ID number',
			password_confirm: 'Password Confirmation',
			errors: {
				empty_firstname: 'The "Username" field is required!',
				empty_email: 'The "e-mail" field is required!',
				uncorrect_email: 'The field "e-mail" is specified incorrectly!',
				empty_password: 'The "Password" field is required!',
				uncorrect_password: 'Password field is too short! At least 6 characters! ',
				password_not_match: 'The entered passwords do not match!'
			}
		},
		changa_state: {
			title: 'Change username / password',
			login: 'Login',
			password: 'Password',
			new_email: 'New e-mail',
			new_password: 'New password'
		},
		dialog: {
			title: 'Dialog Box',
			a_val: {
				title: 'Parameter A',
				error: 'A value must be in the range -10 to 10',
				empty: 'Enter A'
			},
			b_val: {
				title: 'Parameter B',
				error: 'B value must be in the range -10 to 10',
				empty: 'Enter B'
			},
			c_val: {
				title: 'Parameter C',
				error: 'C value must be in the range -25 to 25',
				empty: 'Enter C'
			},
			x_low: {
				title: 'Minimum X Value',
				error: 'Min. X must be in the range of -100 to Max. X ',
				empty: 'Enter minimum X value'
			},
			x_high: {
				title: 'Max X Value',
				error: 'Max. X must be in the range Min.X to 100 ',
				empty: 'Enter maximum X value'
			}
		},
		left_menu: {
			title: 'Main Menu',
			table: 'Sample chart',
			exit: 'Exit',
		},
		buttons: {
			params: 'Parameters',
			changa_state: 'Change username / password',
			clean: 'Clean up the graph',
			close: 'Close',
			enter: 'Login',
			logout: 'Log out',
			yes: 'Yes',
			no: 'No',
			ok: 'OK',
			cancel: 'Cancel',
			refresh: 'Refresh',
			registration: 'Registration',
			home: 'Home',
			addNew: 'Add new chart'
		},
		labels: {
			title: 'Sample chart',
			firstname: 'Name',
			profile: 'User profile',
			chart: 'Graph',
			pleas_login: 'Please log in',
			language: 'en'
		},
		titles: {
			exit: 'Exit'
		},
		errors: {
			error: 'Error',
			login_empty: 'The "Login" field is empty!',
			pass_empty: 'The "Password" field is empty!',
			load_settings: 'Failed to get your account settings!',
			auth: 'Authorization failed! Make sure you have entered the correct Login and Password! ',
			registration: 'Failed to register user!',
			user_exists: 'A user with this name already exists!',
			empty_firstname: 'Username field is empty!',
			empty_lastname: 'The field "User surname" is empty!',
			empty_address: 'The "Address" field is empty!',
			empty_birthday: 'The "Birthday" field is empty!',
		},
		success: {
			add: 'Entry added successfully!',
			edit: 'Post edited successfully!',
			delete: 'The entry was successfully deleted!',
			welcome: 'Welcome to My Account!',
			exit_lk: 'You have left your Personal Account! Use authorization to enter ',
			registration: 'Registration completed! Go through authorization with your username and password! ',
		}
	}
