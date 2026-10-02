

function ChoosePlan() {

return (

<div className="choose-plan">

<h1 className="choose-plan__title">Choose your plan</h1>

<div className="choose-plan__cards">

<div className="plan-card">

<h2>Basic</h2>

<p className="plan-card__price">Free</p>
<ul className="plan-card__features">

<li>Access to basic summaries</li>

<li>Limited library access</li>

</ul>

<button className="plan-card__button">Current Plan</button>

</div>

<div className="plan-card">

<h2>Premium</h2>

<p className="plan-card__price">$9.99/month</p>
<ul className="plan-card__features">

<li>Unlimited summaries</li>

<li>Full library access</li>

<li>Premium features</li>

</ul>

<button className="plan-card__button">Upgrade</button>

</div>

</div>

</div>

);

}

export default ChoosePlan;