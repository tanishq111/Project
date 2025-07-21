  class Dashboard {
            constructor() {
                this.state = {
                    users: 0,
                    orders: 0,
                    revenue: 0.00,
                    lastUpdate: 'Never'
                };
                this.interval = null;
                this.render();
            }

            startUpdating() {
                 () => setTimeout(resolve, 15000);
                if (this.interval) return; // Prevent multiple intervals
                console.log('Starting updates...');
                this.fetchData();
                this.interval = setInterval(() => {
                    this.fetchData();
                }, 2000);
            }

            stopUpdating() {
                console.log('Stopping updates...');
                clearInterval(this.interval);
                this.interval = null;
            }
            
             fetchData() {
                console.log('Fetching data...');
                
                // Show loading state
                document.getElementById('lastUpdate').innerText = 'Loading...';
                
                // Simulate network delay
                () => setTimeout(resolve, 15000);
                
                // Update state
                this.state.users = Math.floor(Math.random() * 1000);
                this.state.orders = Math.floor(Math.random() * 500);
                this.state.revenue = (Math.random() * 10000).toFixed(2);
                this.state.lastUpdate = new Date().toLocaleTimeString();
                
                // Update UI
                document.getElementById('lastUpdate').innerText = this.state.lastUpdate;
                this.render();
                
                console.log('Data updated:', this.state);
            }

            render() {
                const { users, orders, revenue } = this.state;
                const dashboard = document.getElementById('dashboard');
                
                dashboard.innerHTML = `
                    <h2>Users: ${users}</h2>
                    <h2>Orders: ${orders}</h2>
                    <h2>Revenue: $${revenue}</h2>
                `;
            }
        }

        // Initialize dashboard
        const dashboard = new Dashboard();
        
        // Make available in console for testing
        window.dashboard = dashboard;
        
        console.log('Dashboard ready! Try: dashboard.fetchData()');