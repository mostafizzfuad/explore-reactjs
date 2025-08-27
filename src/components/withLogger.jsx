// src/components/withLogger.jsx

// Higher Order Component
function withLogger(WrappedComponent) {
	return function EnhancedComponent(props) {
		console.log("Props:", props); // extra feature
		return <WrappedComponent {...props} />;
	};
}

export default withLogger;



// const HelloWithLogger = withLogger(Hello);
// এখানে withLogger(Hello) কল হবে এবং একটি নতুন কম্পোনেন্ট রিটার্ন করবে।
// সেই নতুন কম্পোনেন্টের নাম হলো function EnhancedComponent(props) {},
// যেটিকে আমরা HelloWithLogger নামে ধরে নিচ্ছি।

// এখন App কম্পোনেন্টে <HelloWithLogger /> ব্যবহার করলে আসলে EnhancedComponent রান হবে।
// <HelloWithLogger name="Mostafizur" /> ব্যবহার করলে, EnhancedComponent রান হবে এবং এর props হবে { name: "Mostafizur" }।

// EnhancedComponent প্রথমে console.log("Props:", props); চালাবে,
// তারপর আসল Hello (WrappedComponent হিসেবে রিসিভ করা হয়েছিল) কম্পোনেন্টে props ফরওয়ার্ড করবে।
// ফলে Hello কম্পোনেন্টে name প্রপস হিসেবে "Mostafizur" যাবে।
// Hello কম্পোনেন্ট তখন <h2>Hello, Mostafizur!</h2> রিটার্ন করবে। 
// আর UI তে "Hello, Mostafizur!" দেখাবে।

// ---------------------------------------------------------------------------
// তাই পুরো প্রক্রিয়াটি হবে:
// 0. withLogger(Hello) কল হবে এবং EnhancedComponent রিটার্ন হবে। যা HelloWithLogger এ অ্যাসাইন করা হবে।
// 1. App কম্পোনেন্টে <HelloWithLogger name="Mostafizur" />
// 2. এটি EnhancedComponent(props) কল করবে যেখানে props = { name: "Mostafizur" }
// 3. EnhancedComponent কনসোলে লগ করবে: Props: { name: "Mostafizur" }
// 4. তারপর এটি WrappedComponent (Hello) কে কল করবে: <Hello name="Mostafizur" />
// 5. Hello কম্পোনেন্ট রিটার্ন করবে: <h2>Hello, Mostafizur!</h2>
// 6. UI তে আউটপুট হবে: Hello, Mostafizur!

// ---------------------------------------------------------------------------
// WrappedComponent = Hello
// EnhancedComponent = HelloWithLogger