import React from 'react'
import FAQ from './FAQ';
const FaqSection = () => {
    const faqs = [
        {
          question: 'Who will address my query / problem?',
          answer: 'Our team of legal professionals volunteering to help the society will assess and address your query. Our team will study, research and create a memo. This memo will then be explained to you over a 30-minute phone call. We will share a copy of the memo with you as well.          ',
        },
        {
          question: 'What will happen if my call exceed 30-minutes?',
          answer: 'The call will be disconnected and our team will have to move on with providing free legal advice to the person next in queue. If you have more queries, please, feel free to fill the form again. We will get back to you again. But, please, avoid spamming us. We will only cater to genuine concerns, queries or problems. If you have more queries, please, feel free to fill the form again. We will get back to you again. But, please, avoid spamming us. We will only cater to genuine concerns, queries or problems.',
        },
        {
            question: 'How long will it take to address my query / problem?',
            answer: 'We will call you back within 24 hours from the time of submission of your query.            '
        },    
        {
            question: 'Is it safe to disclose my problem? Will my details be disclosed to any third-party?',
            answer: 'Yes, it is safe to disclose your problems to us in the Query Form or on-call. We will never share your information with anyone without your consent.            ',
          },
          {
            question: 'How to get free legal advice?',
            answer: 'Click on “Schedule a Call” or “Drop Query” button at the website. Fill up the Query Form prompted to you & wait for our team of lawyers to call you back.',
          },
          {
            question: 'Why does Lawbriefcase provide free legal advice?',
            answer: 'We believe that everyone has the right to be aware of the best possible legal remedies along with their legal rights & duties available to them.            ',
          },
          {
            question: 'Are there any hidden charges, costs or fee?',
            answer: 'We  DO NOT charge, request or demand any money, fee or donation. We provide free legal advice to promote legal literacy and make justice accessible to all.  ',
          },
          {
            question: 'I have submitted the Query Form! What now?',
            answer: 'If you have submitted the Query Form, then you must wait for at least 24 hours for us to call you back.   ',
          },
          {
            question: 'I have not received any call in 24 hours. What should I do?',
            answer: 'If you still haven’t received a call back from us, please, fill the Query Form again. We try our best to get back to everyone, but sometimes we get more queries than we can handle.     ',
          },
          {
            question: 'What is Lawbriefcase?',
            answer: 'Lawbriefcase is a not-for-profit organization that runs with the support of lawyers and law students working to increase legal literacy and help those in need.   ',
          },
        // Add more FAQ items as needed
      ];
    
  return (
    <div>
      <div className='container mx-auto md:p-4'> 
          <p className="text-center mx-auto w-60 sm:w-80 md:w-96 lg:w-2/5 text-gray-600 text-xl">
          FREQUENTLY ASKED QUESTIONS
          </p>
          {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}

          </div>
    </div>
  )
}

export default FaqSection