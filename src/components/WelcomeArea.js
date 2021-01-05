import React from 'react';

const WelcomeArea = () => {
    return (
        <section class="welcome_area p_120">
		<div class="container">
			<div class="row welcome_inner">
				<div class="col-lg-6">
					<div class="welcome_text">
						<h4>About Myself</h4>
						<p>Nothing is better than solving complex real-world problems with clean, elegant
							software.
							I have a passion to design solutions and solve your problems.</p>
						<div class="row">
							<div class="col-md-4">
								<div class="wel_item">
									<i class="lnr lnr-database"></i>
									<h4>10</h4>
									<p>Repositories</p>
								</div>
							</div>
							<div class="col-md-4">
								<div class="wel_item">
									<i class="lnr lnr-book"></i>
									<h4>5</h4>
									<p>Projects</p>
								</div>
							</div>
							<div class="col-md-4">
								<div class="wel_item">
									<i class="lnr lnr-users"></i>
									<h4>500</h4>
									<p>Contributions</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="tools_expert">
						<div class="skill_main">
							<div class="skill_item">
								<h4>React.js <span class="counter">85</span>%</h4>
								<div class="progress_br">
									<div class="progress">
										<div class="progress-bar" role="progressbar" aria-valuenow="85"
											aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
							<div class="skill_item">
								<h4>Angular <span class="counter">75</span>%</h4>
								<div class="progress_br">
									<div class="progress">
										<div class="progress-bar" role="progressbar" aria-valuenow="85"
											aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
							<div class="skill_item">
								<h4>Node.js <span class="counter">80</span>%</h4>
								<div class="progress_br">
									<div class="progress">
										<div class="progress-bar" role="progressbar" aria-valuenow="90"
											aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
							<div class="skill_item">
								<h4>JavaScript <span class="counter">90</span>%</h4>
								<div class="progress_br">
									<div class="progress">
										<div class="progress-bar" role="progressbar" aria-valuenow="70"
											aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
							<div class="skill_item">
								<h4>HTML <span class="counter">90</span>%</h4>
								<div class="progress_br">
									<div class="progress">
										<div class="progress-bar" role="progressbar" aria-valuenow="95"
											aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
							<div class="skill_item">
								<h4>CSS <span class="counter">70</span>%</h4>
								<div class="progress_br">
									<div class="progress">
										<div class="progress-bar" role="progressbar" aria-valuenow="75"
											aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
    );
}

export default WelcomeArea;