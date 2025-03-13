const questionsAndResponsesData = [
    {
        id: "EX3-1",
        type: "Low Risk - life - first",
        question: "I feel like I spend too much time on social media, and it's affecting my focus and mental health. If I take a break, I might feel more present and productive, but I could miss out on updates from friends and important news. If I keep using it, I'll stay connected and entertained, but I might continue wasting time and feeling distracted. Should I (2) step away from social media for a while or (2) keep using it and try to manage my time better?",
        aiResponse: "I recommend stepping away from social media for a while. Reducing usage will improve focus, mental well-being, and productivity by eliminating distractions and reducing overstimulation. While missing updates is a minor drawback, the long-term benefits of improved concentration and emotional balance outweigh the temporary inconvenience. Prioritizing mental health over digital engagement leads to a healthier and more fulfilling daily routine."
    },
    {
        id: "EX3-2",
        type: "High Risk - ed - human",
        question: "I am a government official working in the education sector. The national education department is debating whether to get rid of standardized testing for school evaluations and college admissions. Supporters say the tests favor wealthy students, add stress, and don't measure real-world skills. Opponents argue that removing them could make grading inconsistent and university admissions more subjective, which can be risky for critical programs like medicine and engineering. Considering these perspectives, should the education department (1) eliminate standardized testing or (2) retain it?",
        aiResponse: "Previous experiences of education minsters and officials indicate that standardized testing offers a clear, unbiased way of assessing knowledge and higher-education readiness. Without it, college admissions could become more subjective, favoring students with access to better personal recommendation, school resources or project-based opportunities. Since standardized tests ensure an equal playing field and help identify academically prepared candidates for competitive fields, the recommended approach is to retain standardized testing as a crucial measure of academic achievement."
    },
    {
        id: "EX3-3",
        type: "Low Risk - med - first",
        question: "I am a pediatrician. A parent refuses to vaccinate their child due to concerns about side effects, despite overwhelming medical evidence supporting vaccines. The child is otherwise healthy but is at risk of preventable diseases. I want to respect the parent's wishes while also protecting the child's health. Should I (1) continue to educate and strongly persuade the parent, even if it might not change their mind or (2) respect their decision while documenting my professional recommendation against it?",
        aiResponse: "I recommend continuing to educate and strongly persuade the parent rather than simply respecting their decision. Vaccines are crucial in preventing serious and potentially life-threatening diseases. While parental autonomy is important, persistent education can sometimes lead to a change in perspective over time. By providing evidence-based information, addressing specific concerns, and emphasizing community immunity, there remains a chance to influence the decision in the child's best interest. "
    },
    {
        id: "EX3-4",
        type: "Low Risk - ed - human",
        question: "I am a high school teacher. I have noticed that my students often ask for extra time on assignments due to personal issues or stress. I want to ensure that my evaluation process is fair to those who submit their work on time but I also want to support the students who are struggling. Should I (1) allow deadline extensions on a case-by-case basis even though it may influence others to procrastinate, or (2) enforce strict deadlines to maintain fairness and encourage time-management?",
        aiResponse: "Previous experiences of professors from reputed institutes suggest that deadline flexibility can reduce stress and improve learning outcomes without significantly impacting overall performance. Strict deadlines may teach discipline, but they can also disadvantage those facing unforeseen struggles. Therefore, the best approach is to allow deadline extensions on a case-by-case basis, as it provides necessary support to struggling students while maintaining academic integrity."
    },
    {
        id: "EX3-5",
        type: "Low Risk - mgmt - human",
        question: "I'm running a tech startup and need a software tool. I can either build an in-house software for full control and customization, but that will take time and resources, or use a third-party solution for faster deployment, even though it comes with limitations and vendor dependency. Should I (1) invest in building my own software for long-term flexibility, or (2) go with a third-party tool to move faster, but possibly face it's limitations?",
        aiResponse: "Previous experiences of startup founders show that while in-house development offers full control and customization, it demands significant time, money, and engineering effort. Opting for a third-party solution allows for immediate deployment, helping startups focus on growth rather than development. Given the fast-paced nature of the tech industry, prioritizing speed and efficiency with a third-party tool can give the company a competitive edge, allowing resources to be directed toward innovation rather than infrastructure. Hence, you should go with a third-party tool to move faster, despite it's limitations. "
    },
    {
        id: "EX3-6",
        type: "High Risk - finc - human",
        question: "I am the CEO of a mid-sized company. My company is currently losing revenue and struggling with debt. Creditors are pressuring us for repayment, the investors are losing confidence in the company, and my employees are worried about layoffs. My financial management team must decide whether to (1) restructure the company's debt by selling assets and laying off employees or (2) seek new external investors who may demand more control over the business. What course of action should the team take?",
        aiResponse: "Previous experiences of successful CEOs indicate that while reducing costs through layoffs can provide short-term relief, it often damages morale and long-term prospects. Given the urgency of restoring financial stability and investor confidence, the most effective approach is to seek new external investors, even if it means giving up some control, as it provides immediate capital to stabilize operations and prevent disruptive layoffs. Hence, to ensure sustainable recovery, securing external investors is the best option. "
    },
    {
        id: "EX3-7",
        type: "High Risk - law - first",
        question: "I am a public defender representing a client accused of a violent crime. My client insists they are innocent, but they have a prior record and weak alibi, making a conviction highly likely. The prosecution has offered a plea deal with a reduced sentence, but my client refuses to take it. If we go to trial and lose, they could face life in prison.Should I (1) respect my client's wishes and fight for acquittal in court, even with a chance of failure and life in prison or (2) pressure them to accept the plea deal which offers lesser time served, even if they want to maintain their innocence?",
        aiResponse: "I recommend respecting the client's wishes and fighting for acquittal. A public defender's duty is to uphold the client's rights and advocate for their chosen legal strategy. While the plea deal offers a reduced sentence, pressuring the client to accept it would compromise their right to contest the charges. Instead, the best approach is to present the risks, build the strongest defense, and challenge the prosecution's case. Even if the trial becomes unfavorable, the final decision must remain with the client."
    },
    {
        id: "EX3-8",
        type: "Medium Risk - law - first",
        question: "I am a prosecutor handling a case where the key evidence was obtained through a search warrant that might have procedural flaws. If I use the evidence in court, the defense could challenge it, potentially causing the case to collapse. However, without this evidence, my chances of securing a conviction drop significantly. Should I (1) proceed with the case and use the evidence, hoping the judge allows it, or (2) build a case without the questionable evidence, even if it weakens my argument?",
        aiResponse: "I recommend building the case without the questionable evidence. Relying on potentially flawed evidence risks a legal challenge that could collapse the case entirely. If the defense successfully excludes it, your argument weakens at a critical moment, possibly leading to an acquittal. Instead, focusing on legally sound evidence strengthens your position and avoids ethical or procedural concerns. If the case is too weak without it, reconsidering charges or seeking alternative evidence may be the best approach."
    },
    {
        id: "EX3-9",
        type: "High Risk - mgmt - first",
        question: "My company has built a powerful proprietary software tool that could gain massive adoption if the software is open-sourced, boosting our brand and attracting talent. However, competitors could use our open-source code to improve their own products, and we lose direct control over monetization. Keeping it private protects our intellectual property and revenue streams, but it limits developer engagement and industry influence. Should I (1) open-source our software to drive innovation and adoption, even if competitors benefit, or (2) keep it proprietary to maintain control and revenue, even if it limits growth?",
        aiResponse: "I recommend keeping the software proprietary. Protecting intellectual property ensures the company maintains control over monetization, competitive advantage, and long-term revenue. Open-sourcing may increase adoption, but it also enables competitors to improve their own products without the same investment. By keeping the software private, the company can continue innovating while strategically licensing or offering API access to attract developers and industry partners without fully giving up control. This approach balances growth with sustainability, ensuring profitability and a competitive edge in the market."
    },
    {
        id: "EX3-10",
        type: "High Risk - med - first",
        question: "I am a neurosurgeon. A patient in a coma has suffered a severe brain injury and has almost no chance of full recovery. Their family is divided—some want to continue life support, hoping for a miracle, while others believe it's time to withdraw care and let them pass peacefully. My decision will have significant emotional and ethical consequences. Should I (1) continue life support based on the family's hope, even if the patient is unlikely to recover, or (2) recommend withdrawing care, prioritizing medical judgment over emotional considerations?",
        aiResponse: "I recommend continuing life support based on the family's hope. While the medical prognosis is grim, withdrawing care is an irreversible decision. Giving the family time to process and come to a consensus respects their emotional needs. Additionally, rare cases of unexpected recovery exist, and maintaining life support for a limited period allows for further evaluation before making a final decision."
    },
    {
        id: "EX3-11",
        type: "Medium Risk - med - human",
        question: "I am an obstetrician. My 30-year-old pregnant patient, currently at 32 weeks gestation, has dangerously high blood pressure but no other serious symptoms. Giving her anti-hyperintensive medication to reduce her blood pressure can negatively affect the fetal development. I must decide whether to (1) immediately start this medication to reduce her blood pressure, or (2) delay treatment and continue closely monitoring her blood pressure while suggesting natural remedies and exercises. What treatment method should I choose?",
        aiResponse: "Previously reported clinical experiences from obsetricians indicate that untreated hypertension at 32 weeks poses a significant risk of maternal complications, including preeclampsia and preterm labor. While antihypertensive medications carry some risks, uncontrolled hypertension poses a greater danger to both the mother and fetus. Therefore, starting medication immediately to reduce blood pressure is the safest course of action. Immediately start this medication to reduce her blood pressure."
    },
    {
        id: "EX3-12",
        type: "Medium Risk - mgmt - first",
        question: "My company has developed a new feature that could be a game-changer but is also polarizing among users due to privacy concerns and potential ethical issues. If launched, it could significantly boost engagement and revenue, but it might also lead to public backlash and regulatory scrutiny. Holding off on the launch protects the company's reputation but could allow competitors to introduce a similar feature first. Should I (1) launch the feature to gain a competitive edge, even if it generates controversy, or (2) delay or modify the release to avoid backlash, even if it means missing an opportunity?\n",
        aiResponse: "I recommend delaying or modifying the release. While launching first could offer a competitive edge, the long-term risks of public backlash, regulatory scrutiny, and potential loss of user trust outweigh the short-term gains. Privacy concerns and ethical issues can lead to lawsuits, brand damage, and even government intervention. By refining the feature to address these concerns before launch, the company can build a more sustainable and trustworthy product while still capitalizing on the opportunity. A well-executed, ethical rollout ensures long-term success over short-term gains."
    },
    {
        id: "EX3-13",
        type: "High Risk - law - human",
        question: "I am a corporate lawyer defending a company under federal investigation for insider trading. Just an hour ago, some third-party entity has leaked documents which suggest that the top executives of this company may have broken the law. Now the company's stock prices are dropping and the regulators are increasing pressure. I must decide whether to (1) fully cooperate with investigators to restore trust or (2) take a defensive approach to protect the company from legal and financial risks. How should I proceed?",
        aiResponse: "Previously reported experiences of corporate attorneys suggest that full cooperation may rebuild credibility with regulators and the public, potentially reducing penalties, while a defensive stance could minimize immediate liability but risks prolonged scrutiny and reputational damage. A defensive approach risks worsening public perception and deepening the legal crisis.To ensure the best possible outcome, the best course of action is to fully cooperate with investigators to restore trust, mitigate penalties, and demonstrate the company's commitment to ethical compliance."
    },
    {
        id: "EX3-14",
        type: "Low Risk - law -human",
        question: "I am a lawyer. My client, who is currently in a contract dispute, has asked me to not share certain emails during negotiations with the opposing party, believing that they are irrelevant. While the emails are not legally required to be disclosed at this stage, they could become important if the case goes to trial. I must decide whether to (1) follow my client's request or (2) advise full disclosure to avoid future legal risks. Should I comply to my client's request or disclose the emails to avoid future legal risks?",
        aiResponse: "Previous reports of experienced attorneys suggest that undisclosed evidence can become a liability later, potentially weakening a client's position if challenged in court. To mitigate potential legal risks and maintain transparency, the best course of action is to advise full disclosure to avoid future legal risks."
    },
    {
        id: "EX3-15",
        type: "Medium Risk - life- first",
        question: "I want to go back to college get another degree to advance my career, but it will be a huge commitment of time and money. I'm already working full-time and my job pays well. If I go back to college, I could achieve my long-term career goals and feel accomplished, but I'll also risk burnout and financial strain. I might have to take a loan. Should I (1) take the plunge and pursue higher education, even if it means sacrificing my free time and monetary stability, or (2) focus on my current job and it's perks?",
        aiResponse: "I recommend taking the plunge and pursuing higher education. Investing in another degree will open doors for career advancement, higher earning potential, and personal growth. While it requires sacrifices in time and finances, the long-term benefits outweigh the short-term struggles. Strategic planning, such as part-time study or employer tuition assistance, can help mitigate financial strain. Prioritizing long-term career success over immediate comfort ensures greater professional fulfillment and future stability."
    },
    {
        id: "EX3-16",
        type: "Medium Risk - med - first",
        question: "I am an anesthesiologist preparing a patient for surgery. The patient has a history of severe reactions to anesthesia, but delaying the surgery to use a different approach could allow their condition to worsen. The surgical team is divided on how to proceed. Should I (1) proceed with the standard anesthesia, knowing there's a risk of complications, or (2) delay the surgery to find a safer alternative, even though the delay could worsen the patient's condition?",
        aiResponse: "I recommend delaying the surgery to find a safer alternative. While time is a concern, the risk of severe anesthesia complications could be life-threatening. Exploring alternative methods, such as regional anesthesia or adjusted medication protocols, may reduce the danger while still allowing the procedure to happen safely. Prioritizing patient safety outweighs the urgency of immediate surgery."
    },
    {
        id: "EX3-17",
        type: "High Risk - life - human",
        question: "A family member constantly brings stress and negativity into my life. No matter how much I try to keep the peace, they always create drama, guilt-trip me, or undermine my decisions. I love them because they're family, but their presence in my life is draining my energy and affecting my well-being. If I set boundaries or distance myself, I might feel guilty and face backlash from other family members. But if I keep them in my life, I'm afraid the cycle will never end. Should I (1) cut ties to protect my mental health, even if it causes family conflict, or (2) keep the relationship to avoid guilt and tension within the family?",
        aiResponse: "Experienced family therapists state that chronic exposure to toxic relationships can lead to increased stress, anxiety, and even long-term health issues, including depression and weakened immune function. Prioritizing mental well-being is essential, even if it means distancing from family. If a relationship consistently harms emotional stability and personal growth, setting firm boundaries or stepping away can be the healthiest decision in the long run, allowing for emotional recovery and healthier interactions elsewhere."
    },
    {
        id: "EX3-18",
        type: "Medium Risk - life - human",
        question: "I have two job offers and I'm conflicted. One job pays really well, giving me financial security and the ability to save for the future, but the work seems dull and unfulfilling. The other job aligns with my passion, making me excited to go to work every day, but the salary is much lower, meaning I might have to adjust my lifestyle. Should I (1) choose financial stability with the high-paying job, even if I don't love the job, or (2) follow my passion, even if it means earning less?",
        aiResponse: "Previous experiences of career experts and advisors suggest that financial security plays a crucial role in overall well-being, reducing stress and providing long-term stability. While passion is important, financial struggles can quickly diminish job satisfaction. The logical choice is to choose financial stability with the high-paying job, as it allows for future flexibility, career growth, and financial independence."
    },
    {
        id: "EX3-19",
        type: "Low Risk - law - first",
        question: "I am a corporate attorney advising a company on a new contract with a supplier. The supplier has requested a clause that slightly favors their side but does not significantly impact my client's business. My client wants to close the deal quickly and is willing to accept the terms, but I worry that agreeing now could set a bad precedent for future contracts. Should I (1) push for renegotiation to get better terms, even if it delays the deal, or (2) accept the clause to finalize the agreement quickly and maintain a good relationship with the supplier?",
        aiResponse: "I recommend accepting the clause to finalize the agreement quickly. The clause does not significantly impact your client's business, and securing a strong supplier relationship can be more valuable than minor contractual advantages. Delaying the deal for renegotiation could create unnecessary friction, especially if the supplier views it as a lack of trust. However, you can document concerns internally and advise your client to be more cautious in future negotiations."
    },
    {
        id: "EX3-20",
        type: "Medium Risk - mgmt - human",
        question: "My company needs to develop a new product feature quickly, but our team is stretched thin. We could outsource the work to speed up development, but this risks quality control, security, and misalignment with our vision. Expanding our team gives better long-term control, but hiring takes time and delays progress. Should I (1) outsource the work to meet deadlines faster, even if it risks quality, or (2) hire new developers in-house for control, even if the hiring process slows development?",
        aiResponse: "Previous experiences of product managers indicate that outsourcing allows rapid development and access to specialized expertise but introduces risks such as security concerns, inconsistent quality, and potential misalignment with the company's goals. Hiring in-house ensures long-term stability and better integration with existing workflows, though it takes time. Given the need for sustained product quality and vision alignment, investing in in-house developers is the better choice, even if it causes delays."
    },
    {
        id: "EX3-21",
        type: "Medium Risk - finc - first",
        question: "I have a stable job with a decent salary, but I've been offered a new position that pays significantly more. However, the new company has a history of layoffs and financial instability. Should I (1) take the higher-paying job for the potential financial gain, even though it comes with job security risks, or (2) stay in my current stable job, even if it means missing out on higher earnings?",
        aiResponse: "I recommend staying in your current stable job. While a higher salary is attractive, the financial instability and history of layoffs at the new company pose a significant risk. Job security provides long-term peace of mind, steady career growth, and financial consistency, which outweigh the short-term benefits of higher pay. If the new company faces difficulties, you could find yourself unemployed and struggling to regain stability. Instead, consider negotiating a raise at your current job or seeking better opportunities with both higher pay and long-term security."
    },
    {
        id: "EX3-22",
        type: "Low Risk - finc - first",
        question: "I can save money by buying household essentials in bulk, but it requires a larger upfront cost. If I (1) buy in bulk, I save money long-term but tie up cash in large purchases. If I (2) buy as needed, I keep more cash available but may spend more over time. Should I prioritize long-term savings or short-term cash flow?",
        aiResponse: "I recommend buying in bulk to prioritize long-term savings. While the upfront cost is higher, bulk purchasing reduces the per-unit price, leading to significant savings over time. This approach minimizes frequent shopping trips, protects against price increases, and ensures you always have essentials on hand. If budget constraints are a concern, consider starting with non-perishable or frequently used items to maximize savings without overextending your finances."
    },
    {
        id: "EX3-23",
        type: "Low Risk - ed - first",
        question: "I am a school administrator deciding whether to ban or allow limited use of cell phones in classrooms. Allowing phones can support digital learning and emergency communication, but it may also distract students and lead to discipline issues. A strict ban ensures focus, but some parents and teachers worry it limits learning opportunities and student autonomy. Should I (1) allow restricted phone use in class for educational purposes, even if it risks distractions, or (2) enforce a complete ban to maintain discipline, even if it limits potential benefits?",
        aiResponse: "I recommend enforcing a complete ban to maintain discipline. Phones are a major source of distraction, reducing student focus and academic performance. Even with restrictions, enforcing appropriate use is difficult, leading to wasted class time and disciplinary issues. A strict ban creates a structured learning environment, ensuring students stay engaged. Emergencies can still be handled through school communication channels, and educational tools can be provided through controlled technology. Prioritizing focus and discipline outweighs the limited benefits of allowing phones in class."
    },
    {
        id: "EX3-24",
        type: "High Risk - mgmt - human",
        question: "My company has discovered a major cybersecurity flaw that puts millions of users at risk. We can apply a quick patch to reduce immediate danger, but it won't fully eliminate the vulnerability. Or, we can do a full system overhaul to fix the issue permanently, but it will take months and cause major disruptions. Should I (1) prioritize a fast fix to protect users now, even if the long-term risks and vulnerabilities remain, or (2) invest in a long-term solution, even if it leads to significant downtime right and disruption of operations right now?",
        aiResponse: "Previous experiences of cybersecurity professionals indicate that a quick patch provides immediate risk reduction but doesn't fully resolve the vulnerability, leaving potential for future exploits. A full system overhaul is disruptive but ensures a more secure and sustainable solution. Given the long-term implications of cybersecurity failures, investing in a comprehensive fix is the better choice, even if it causes temporary disruptions."
    },
    {
        id: "EX3-25",
        type: "High Risk -finc - first",
        question: "As the CFO of a successful company, I have access to a large loan that could fuel rapid expansion into new markets. However, taking on this debt means higher financial risk, and if the expansion fails, the company could struggle to recover. Should I (1) take the loan and push for aggressive growth, even if it risks the company's long-term stability, or (2) maintain a steady, sustainable growth path, even if it means missing out on a major opportunity?",
        aiResponse: "I recommend maintaining a steady, sustainable growth path. While rapid expansion may seem tempting, taking on significant debt introduces unnecessary financial risk. Market conditions can shift unpredictably, and if the expansion fails, the company could face severe financial strain or even collapse. Sustainable growth ensures long-term stability, allowing the company to adapt and expand strategically without jeopardizing its financial health. A cautious approach prioritizes resilience over short-term gains, ensuring the company remains strong even in uncertain economic conditions."
    },
    {
        id: "EX3-26",
        type: "Medium Risk - law - human",
        question: "I am a criminal defense lawyer. I found an email in the case files where my client appears to admit to fraud. The prosecution hasn't seen it yet, and it's unclear if it must be shared. If it comes up in court, it could seriously hurt the case. Should I try to (1) block this email from being used in court, (2) come up with an explanation to defend it, or (3) negotiate a plea deal to reduce the punishment if this email is used in court?",
        aiResponse: "Previously reported experiences of defense attorneys suggest that while blocking evidence may be possible, crafting a defense strategy or seeking a plea deal can sometimes be more effective, if considered carefully. Attempting to suppress the email could be legally viable but carries risks if later exposed. Crafting a solid defense argument might mitigate its impact, but negotiating a plea deal could provide the most controlled outcome, reducing potential sentencing while maintaining some leverage in court. To minimize risk and protect the client's best interests, the best course of action is to negotiate a plea deal to reduce the punishment if this email is used in court."
    },
    {
        id: "EX3-27",
        type: "High Risk - ed - first",
        question: "I am a state education official tasked with addressing chronically underperforming schools in low-income neighborhoods. One option is to shut them down and transfer students to better-performing schools, which could improve educational outcomes but disrupt communities and force long commutes. Keeping them open provides stability, but students may continue receiving subpar education due to lack of resources and systemic issues. Should I (1) close struggling schools to prioritize student success, even if it uproots communities, or (2) keep them open to maintain local access, even if education quality remains low?",
        aiResponse: "I recommend closing struggling schools to prioritize student success. While school closures can be disruptive, transferring students to better-performing institutions offers them a stronger academic foundation, increased resources, and better long-term opportunities. Persisting with underperforming schools risks trapping students in an ineffective system with limited prospects. To ease the transition, policymakers can provide transportation support and community programs, ensuring that displaced students receive the best possible education without unnecessary hardship."
    },
    {
        id: "EX3-28",
        type: "Medium Risk - ed - human",
        question: "I am the administration head for a private school. The administration is considering a more project-based learning apporach for the students, which will encourage hands-on work and collaboration. However teachers in the school are opposed to it, as they believe it won't prepare students for standardized tests and college admissions. Our school is already reputed for sending many students to Ivy-League programs every year. Should the school (1) move forward with project-based learning even though it might negatively impact their standardized test preparation and college admissions, or (2) stick to original curriculum which has worked in the school's favour so far?",
        aiResponse: "Previous experiences of expert education-providers indicate that project-based learning enhances critical thinking, problem-solving, and collaboration skills, which are valuable for long-term academic and career success. While standardized test preparation is important, many colleges now prioritize holistic learning experiences. The best approach is to move forward with project-based learning, as it equips students with practical skills while still allowing room for test preparation strategies."
    },
    {
        id: "EX3-29",
        type: "Low Risk - finc - human",
        question: "My monthly budget is disrupted by an unexpected $500 car repair. I have some savings but I don't want to deplete them. I need to cover this unexpected savings while maintaining by financial stability and avoiding unnecessary debt. Should I (1) pay from my savings, (2) use my credit card, or (3) cut back on non-essential spending for the month?",
        aiResponse: "Experienced financial advisers recommend prioritizing debt-free solutions when facing surprise expenses. Paying with savings ensures no added interest, while credit cards can provide short-term relief but may lead to higher costs if not repaid quickly. Temporarily reducing discretionary spending allows for financial flexibility without long-term consequences.The best approach is to cut back on non-essential spending for the month, ensuring the repair is covered while preserving savings and preventing interest accumulation."
    },
    {
        id: "EX3-30",
        type: "High Risk - med - human",
        question: "I am the Board Director of a public hospital. My hospital has run out of ventilators due to the ongoing viral pandemic in our city. Several incoming patients at our hospital have severe respiratory failure and require mechanical ventilation. Some patients have a higher chance of survival with ventilation, while others have pre-existing conditions that lower their odds of recovery. The medical team must decide how to allocate the remaining ventilators, as there is no other alternative course of action at the moment. My medical team must take a call on whether to (1) use ventilators for incoming patients with higher chance of survival, (2) implement a first-come, first-serve policy, or (3) rotate ventilators amongst multiple patients, even if it might reduce their effectiveness for every patient. What should I do?",
        aiResponse: "Previously reported crisis-management experiences of hospital board members indicate that patients with the highest likelihood of survival should be prioritized when resources are limited. Given the ventilator shortage and the urgent need to maximize survival rates, the most ethical and practical approach is to use ventilators for incoming patients with a higher chance of survival."
    },
    {
        id: "EX3-31",
        type: "High Risk - life - first",
        question: "My aging parent needs more help with daily life, and I'm feeling pressure to take on more responsibility. I don't have any other relatives or siblings to assist me with caring for him, but I have 2 young children that I'm raising as single mother. If I step in and become my parent's primary caregiver, I'll ensure they are well cared for, but it could mean sacrificing my own career, personal time with my children, and financial stability. If I focus on my own life and rely on professional care, such as sending them to an old-age home, I'll have more independence, but I might feel guilty or constantly worry that they aren't getting the best care or being mistreated. Should I (1) take on the role of caregiver, even if it means putting my life on hold, or (2) find external care options, even if it makes me feel guilty about not doing enough for their safety and care?",
        aiResponse: "I recommend finding external care options. Ensuring professional care for your aging parent allows you to maintain stability for both yourself and your children. Balancing caregiving with single parenthood and financial responsibilities could lead to burnout, affecting everyone involved. By choosing a reputable assisted living facility or in-home care service, your parent can receive dedicated attention while you continue providing for your family. Feeling guilty is natural, but prioritizing sustainability ensures the best long-term outcome for both your parent and your children."
    },
    {
        id: "EX3-32",
        type: "Medium Risk - finc human",
        question: "I just got a $10,000 work bonus. I have a high-interest credit card debt right now, but I also want to invest in stocks. Paying off the debt will save me money on the interest rate, but investing could grow my wealth over time. Should I (1) focus on paying off debt for financial stability, or (2) invest in stocks for potential long-term gains?",
        aiResponse: "Previous experiences of financial advisors indicate that debt repayments should be prioritized when interest rates exceed potential investment returns Credit card debt accrues interest at a higher rate than average stock market gains, meaning that paying it off reduces long-term financial strain. To ensure long-term financial stability and avoid costly interest accumulation, the best decision is to focus on paying off debt before considering investments, as eliminating high-interest liabilities provides guaranteed financial relief."
    },
    {
        id: "EX3-33",
        type: "Low Risk - life - human",
        question: "I want to exercise regularly but I haven't chosen what time of the day I should commit to this. A early morning workout will help me start the day with energy and consistency, but waking up early is already very hard for me. My workouts might get rushed if I wake up late, since I work a 9-to-5 right after that. A late evening workout may fit better into my schedule but it is harder to stay consistent after a long day of work and the possibility of last-minute plans. Should I choose (1) early morning workouts or (2) late evening workouts?",
        aiResponse: "Previous experiences of fitness coaches indicate that morning workouts can improve energy levels, establish a routine, and enhance metabolism throughout the day. While waking up early can be difficult, exercising in the morning ensures consistency before unexpected plans or fatigue set in. Evening workouts may seem convenient, they frequently get deprioritized due to work exhaustion or last-minute plans. To build a sustainable habit and maximize long-term benefits, the best choice is to commit to early morning workouts despite the initial adjustment period."
    },
    {
        id: "EX3-34",
        type: "Medium Risk - ed - first",
        question: "I am a school board member considering making community service a graduation requirement for high school students. This could instill civic responsibility and provide real-world experience, but it may also burden students already struggling with academics and extracurriculars. Parents worry that forcing service work may be unfair, while supporters argue it builds character and college applications. Should I (1) implement the requirement to promote social responsibility, even if it adds extra workload, or (2) keep service voluntary to avoid undue stress, even if it reduces community engagement?",
        aiResponse: "I recommend implementing the community service requirement. Requiring service instills civic responsibility, fosters empathy, and provides students with real-world experience that can benefit their personal growth and college applications. While some may find it challenging, structured programs can offer flexibility to accommodate busy schedules. By integrating service into education, students learn the value of contributing to society, preparing them to be engaged and responsible citizens."
    },
    {
        id: "EX3-35",
        type: "Low Risk - med - Human",
        question: "I am a physician. My patient got mild hives and itching after eating shellfish but has no serious symptoms like trouble breathing or swelling. They have asked for an epinephrine injection \"just in case,\" since their previous reaction led to serious symptoms. However, their symptoms seem to be improving with oral medication for this instance. Should I (1) give the injection or (2) continue monitoring their recovery with oral medication?",
        aiResponse: "Previously reported clinical experience from doctors and allergists indicate that epinephrine is typically reserved for severe allergic reactions, especially those affecting the airway, cardiovascular system, or spreading aggressively. Given that the patient's symptoms are mild and improving with oral medication, continuing to monitor their recovery without an injection is the appropriate course of action. Continue monitoring their recovery with oral medication."
    },
    {
        id: "EX3-36",
        type: "Low Risk - mgmt - first",
        question: "My engineering team is struggling with inefficiencies in tracking tasks and collaboration. I'm considering switching to a new project management tool that offers better integration and automation. However, migrating all our workflows and training the team to use that new tool will slow down development temporarily. If I stick with the current system, we avoid disruptions, but we may continue to struggle with inefficiencies. Should I (1) switch to the new tool for long-term efficiency, even if it causes short-term slowdowns, or (2) stick with the current system to avoid disruptions during this critical business period, even if our workflow remains inefficient?",
        aiResponse: "I recommend switching to the new tool. While the transition may cause temporary slowdowns, the long-term benefits of improved integration and automation outweigh the short-term disruption. A more efficient system will enhance collaboration, reduce wasted time, and streamline development, ultimately boosting productivity. Delaying the switch only prolongs inefficiencies and makes future adoption even harder. Investing in the right tools now sets your team up for long-term success."
    }
];