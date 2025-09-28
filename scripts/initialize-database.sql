-- Create a new initialization script to ensure database is set up
-- Initialize Churnalyzer Database
-- This script creates the database tables and seeds initial data

-- Create Categories
INSERT OR IGNORE INTO Category (id, name, slug, description, createdAt, updatedAt) VALUES
('1', 'Tech Companies', 'tech-companies', 'Technology companies that failed to adapt to market changes', datetime('now'), datetime('now')),
('2', 'Platforms', 'platforms', 'Platform businesses that failed to evolve with technology', datetime('now'), datetime('now')),
('3', 'Startups', 'startups', 'Startup companies that failed due to fraud or mismanagement', datetime('now'), datetime('now')),
('4', 'Products', 'products', 'Product failures and discontinued innovations', datetime('now'), datetime('now'));

-- Create Posts
INSERT OR IGNORE INTO Post (id, title, slug, excerpt, content, published, createdAt, updatedAt, categoryId) VALUES
('1', 'The Rise and Fall of Nokia: From Paper Mill to Mobile Giant to Decline', 'nokia-rise-and-fall', 
'How Nokia went from dominating the mobile phone market to losing it all to smartphones.',
'Nokia''s story is one of the most dramatic corporate failures in modern history. Founded in 1865 as a paper mill, Nokia evolved through various industries before becoming the world''s largest mobile phone manufacturer. However, their failure to adapt to the smartphone revolution led to their dramatic decline.

## The Rise of Nokia

Nokia started as a paper mill in Finland in 1865. Over the decades, it diversified into various industries including rubber boots, tires, and eventually electronics. By the 1990s, Nokia had become synonymous with mobile phones.

## The Smartphone Revolution

When Apple launched the iPhone in 2007, it changed everything. Nokia''s leadership dismissed touchscreen phones as a fad, believing that physical keyboards were superior. This miscalculation would prove fatal.

## The Fall

By 2013, Nokia''s mobile phone business was sold to Microsoft for $7.2 billion - a fraction of its former value. The company that once controlled 40% of the global mobile phone market had been reduced to a shadow of its former self.',
true, '2024-01-15 10:00:00', '2024-01-15 10:00:00', '1'),

('2', 'Blockbuster vs Netflix: The Streaming Revolution That Changed Everything', 'blockbuster-vs-netflix',
'The story of how Blockbuster rejected Netflix and paid the ultimate price.',
'In 2000, Netflix offered to sell their company to Blockbuster for $50 million. Blockbuster''s executives laughed them out of the room. This decision would prove to be one of the most costly mistakes in business history.

## The Meeting That Changed Everything

Reed Hastings, Netflix''s CEO, flew to Dallas to meet with Blockbuster''s leadership. He proposed that Netflix would handle Blockbuster''s online presence while Blockbuster would promote Netflix in their stores. The Blockbuster executives were not interested.

## The Streaming Revolution

While Blockbuster continued to focus on physical stores and late fees, Netflix invested heavily in streaming technology. By 2010, Netflix had transformed from a DVD-by-mail service to a streaming giant.

## The Aftermath

Blockbuster filed for bankruptcy in 2010. Netflix, meanwhile, grew to become worth over $240 billion. The company that was once offered for $50 million had become one of the most valuable media companies in the world.',
true, '2024-01-10 09:00:00', '2024-01-10 09:00:00', '2'),

('3', 'Theranos: The $9 Billion Medical Fraud That Fooled Everyone', 'theranos-medical-fraud',
'How Elizabeth Holmes built a medical empire on lies and deception.',
'Theranos promised to revolutionize blood testing with technology that could run hundreds of tests from a single drop of blood. The only problem? The technology never worked.

## The Promise

Elizabeth Holmes founded Theranos in 2003 with the vision of making blood testing faster, cheaper, and more accessible. She claimed her company had developed revolutionary technology that could run hundreds of tests from a single drop of blood.

## The Deception

In reality, Theranos was using traditional machines from other companies for most of their tests. The few tests that were run on their proprietary machines were wildly inaccurate and potentially dangerous.

## The Collapse

In 2015, a Wall Street Journal investigation exposed the fraud. By 2018, Theranos had shut down. Holmes was convicted of fraud and sentenced to over 11 years in prison. Investors lost over $900 million.',
true, '2024-01-05 08:00:00', '2024-01-05 08:00:00', '3');
