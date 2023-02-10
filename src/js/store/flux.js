const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			API: "http://localhost:3001/",
			products: [],
			categories: [],
			message: [],
			filter_pr: [],
			one_product: [],
			Logg : false,
			user: [],
			cart: [],
			order: [],
			orders: [],
			onlyone : {}
		},
		actions: {

			all_products: async () => {
				try {
					let response = await fetch(`${getStore().API}api/all_products`, {
						method: "GET",
						body: JSON.stringify(),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						let data_p = await response.json();
                		setStore({ products : data_p.product });
						setStore({ categories: data_p.category})
						return true;
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
				return false;
			},

			FilterCategory : async (data) =>{
				try {
					let response = await fetch(`${getStore().API}api/categories/${data}`, {
						method: "GET",
						body: JSON.stringify(),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						let data_p = await response.json();
                		setStore({ filter_pr : data_p });
						return true;
					}
				} catch (error) {
					console.log("something failed in filtercategory");
					console.log(error);
				}
				return false
			},
			Oneproduct : async (id) =>{
				try {
					let response = await fetch(`${getStore().API}api/productbyid/${id}`, {
						method: "GET",
						body: JSON.stringify(),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						let data_p = await response.json();
                		setStore({ one_product : data_p });
						return true;
					}
				} catch (error) {
					console.log("something failed in one_product");
					console.log(error);
				}
				return false
			},
			Login : async (data) =>{
				try {
					let response = await fetch(`${getStore().API}api/login/`, {
						method: "POST",
						body: JSON.stringify(data),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						let data = await response.json();
						localStorage.setItem("token", data.token);
						setStore({ Logg: true });
						return true;
					}
				} catch (error) {
					console.log("something failed in login message");
					console.log(error);
				}
				return false
			},
			register: async (data) => {
				try {
					let response = await fetch(`${getStore().API}api/registration/`, {
					method: "POST",
					// mode: "no-cors",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data),
					});
				if (response.ok) {
					let data = await response.json();
					return true;
					}
				} catch (error) {
					console.log("something failed in login message");
					console.log(error);
				}return false
			},
			logOutUser: () => {
				localStorage.removeItem("token");
				setStore({ Logg: false });
			},
			getinfo: async (data) => {
				try {
					let response = await fetch(`${getStore().API}api/info-user/`, {
					
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
					body: JSON.stringify(data),
					});
				if (response.ok) {
					let data = await response.json();
					setStore({ user: data.user_data });
					return true;
					}
				} catch (error) {
					console.log("something failed in getinfo message");
					console.log(error);
				}return false
			},
			putinfo: async (data) => {
				try {
					let response = await fetch(`${getStore().API}api/info-user/`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
					body: JSON.stringify(data),
					});
				if (response.ok) {
					let data = await response.json();
					return true;
					}
				} catch (error) {
					console.log("something failed in login message");
					console.log(error);
				}return false
			},
			addincart: async (data) => {
				try {
					let response = await fetch(`${getStore().API}api/shopcar/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
					body: JSON.stringify(data),
					});
				if (response.ok) {
					let data = await response.json();
					return true;
					}
				} catch (error) {
					console.log("something failed in addincart message");
					console.log(error);
				}return false
			},
			getincart: async (id) => {
				try {
					let response = await fetch(`${getStore().API}api/shopcart/${id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
					});
				if (response.ok) {
					let data = await response.json();
					setStore({ cart : data.all });
					return true;
					}
				} catch (error) {
					console.log("something failed in getincart message");
					console.log(error);
				}return false
			},
			removeincart: async (data) => {
				try {
					let response = await fetch(`${getStore().API}api/shopcar/`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
					body: JSON.stringify(data),
					});
				if (response.ok) {
					let data = await response.json();
					return true;
					}
				} catch (error) {
					console.log("something failed in removeincart message");
					console.log(error);
				}return false
			},
			create_order: async (data) => {
				try {
					let response = await fetch(`${getStore().API}api/createdorder/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
					body: JSON.stringify(data),
					});
				if (response.ok) {
					let data = await response.json();
					setStore({ order: data });
					return true;
					}
				} catch (error) {
					console.log("something failed in create order message");
					console.log(error);
				}return false
			},
			get_orders: async (data) => {
				try {
					let response = await fetch(`${getStore().API}api/createdorder/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
					body: JSON.stringify(data),
					});
				if (response.ok) {
					let data = await response.json();
					setStore({ orders: data });
					return true;
					}
				} catch (error) {
					console.log("something failed in get_orders message");
					console.log(error);
				}return false
			},
			send_details: async (data) => {
				try {
					let response = await fetch(`${getStore().API}api/send_details/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
					body: JSON.stringify(data),
					});
				if (response.ok) {
					console.log("detalles enviados")
					return true;
					}
				} catch (error) {
					console.log("something failed in send_details message");
					console.log(error);
				}return false
			},
			get_one_order: async (id) => {
				try {
					let response = await fetch(`${getStore().API}api/order/${id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
					});
				if (response.ok) {
					let data = await response.json();
					setStore({ onlyone : data });
					return true;
					}
				} catch (error) {
					console.log("something failed in get message");
					console.log(error);
				}return false
			},
			put_total: async (id, data) => {
				try {
					let response = await fetch(`${getStore().API}api/send_total/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
					body: JSON.stringify(data),
					
					});
				if (response.ok) {
					return true;
					}
				} catch (error) {
					console.log("something put_total in get message");
					console.log(error);
				}return false
			},
			putpayment: async (id, data) => {
				try {
					let response = await fetch(`${getStore().API}api/order/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
					body: JSON.stringify(data),
					});
				if (response.ok) {
					return true;
					}
				} catch (error) {
					console.log("something put_total in get message");
					console.log(error);
				}return false
			},
		}
	};
};

export default getState;
