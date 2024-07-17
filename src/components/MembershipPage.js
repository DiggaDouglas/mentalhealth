import React from 'react';

function MembershipPage() {
  return (
    <section class="section membership-section">
    <div class="container">
        <h2>Membership Options</h2>
        <p>Choose the plan that's right for you and gain access to exclusive content, tools, and professional counseling.</p>
        
        <div class="membership-tiers">
            <div class="membership-tier">
                <h3>Basic Membership</h3>
                <p>Free access to basic resources and peer support groups.</p>
                <ul>
                    <li>Access to self-help guides</li>
                    <li>Participation in peer support groups</li>
                </ul>
                <p><strong>Cost: Free</strong></p>
            </div>
            <div class="membership-tier">
                <h3>Premium Membership</h3>
                <p>Paid subscription offering additional benefits such as unlimited access to professional counseling, exclusive content, and advanced tools.</p>
                <ul>
                    <li>All benefits of Basic Membership</li>
                    <li>Unlimited professional counseling sessions</li>
                    <li>Exclusive articles and blogs</li>
                    <li>Advanced self-help tools</li>
                    <li>Personalized wellness plans</li>
                </ul>
                <p><strong>Cost: $20/month</strong></p>
            </div>
            <div class="membership-tier">
                <h3>Family Membership</h3>
                <p>Access for the entire family, including all Premium benefits and family-specific counseling sessions.</p>
                <ul>
                    <li>All benefits of Premium Membership</li>
                    <li>Family counseling sessions</li>
                    <li>Parenting resources</li>
                </ul>
                <p><strong>Cost: $50/month</strong></p>
            </div>
            <div class="membership-tier">
                <h3>Student Membership</h3>
                <p>Discounted rate for students, including all Premium benefits.</p>
                <ul>
                    <li>All benefits of Premium Membership</li>
                    <li>Student-specific resources and counseling</li>
                </ul>
                <p><strong>Cost: $15/month</strong></p>
            </div>
        </div>

        <h2>Service Pricing</h2>
        <p>In addition to our membership plans, you can also pay for specific services as needed.</p>
        <div class="service-pricing">
            <div class="service">
                <h3>Private Counseling Session</h3>
                <p>One-on-one session with a licensed professional.</p>
                <p><strong>Cost: $50/session</strong></p>
            </div>
            <div class="service">
                <h3>Personalized Wellness Plan</h3>
                <p>Custom wellness plan tailored to your needs.</p>
                <p><strong>Cost: $100/plan</strong></p>
            </div>
            <div class="service">
                <h3>Advanced Self-Help Tools</h3>
                <p>Access to advanced tools and assessments.</p>
                <p><strong>Cost: $10/tool</strong></p>
            </div>
        </div>
    </div>
</section>
  );
}

export default MembershipPage;
