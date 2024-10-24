<?php

namespace Database\Seeders;

use App\Models\FunFact;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FunFactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $funFacts = [

            'The Origins of Currency: The first known form of currency dates back to around 3000 BC in Mesopotamia, where people used barley as a medium of exchange.',

            'The $1 Bill: The design of the U.S. one-dollar bill has remained largely unchanged since 1929, featuring George Washington on the front and the Great Seal of the United States on the back.',

            'Debt and Happiness: Studies suggest that individuals with lower levels of debt report higher levels of happiness and life satisfaction compared to those with significant debt.',

            'Credit Scores: Your credit score can be influenced by many factors, including your payment history, the length of your credit history, and your credit utilization ratio. A higher credit score can save you money on loans.',

            'Cost of College: The cost of college education in the U.S. has increased over 1,200% since the 1980s, outpacing inflation and wage growth significantly.',

            ' Financial Literacy: Research shows that only about 17% of U.S. adults can correctly answer basic financial literacy questions, highlighting the need for better financial education.',

            ' Interest on Savings: Albert Einstein is famously quoted as saying, "Compound interest is the eighth wonder of the world. He who understands it earns it; he who doesn’t pays it."',

            'Inflation: The average annual inflation rate in the U.S. since 1913 has been about 3.2%, meaning the purchasing power of a dollar decreases over time.',

            'Bitcoin Creation: The mysterious figure Satoshi Nakamoto created Bitcoin in 2009 and is estimated to own around 1 million BTC, making them one of the wealthiest individuals in the world without revealing their identity.',

            'Billionaire Wealth: In 2021, the combined wealth of the world’s billionaires increased by over $5 trillion, with technology and finance sectors seeing the most significant gains.',

            'The 50/30/20 Rule: A popular budgeting method suggests that you allocate 50% of your income to needs, 30% to wants, and 20% to savings or debt repayment.',

            'Barter Systems: Before money, people engaged in bartering, directly exchanging goods and services without a standardized currency, making it challenging to find mutually beneficial trades.',

            'Stock Market Crashes: The Great Depression, which started with the stock market crash in 1929, saw the Dow Jones Industrial Average drop nearly 90% from its peak.',

            'Money Management Apps: The rise of mobile apps has made budgeting and personal finance management more accessible. Apps like Mint, YNAB, and Personal Capital help users track spending and savings.',

            'Roth IRAs: Named after Senator William Roth, Roth IRAs allow individuals to contribute after-tax income, meaning withdrawals during retirement are tax-free.',

            'Pay Yourself First: Financial experts recommend “paying yourself first” by automatically saving a portion of your income before paying bills, which can help build savings over time.',

            'Lottery Winners: Studies show that many lottery winners face financial difficulties within a few years of winning, often due to mismanagement of newfound wealth.',

            'Emergency Funds: Financial advisors typically recommend having three to six months’ worth of living expenses saved in an emergency fund to cover unexpected costs.',

            'Credit Card Debt: The average U.S. household with credit card debt carries over $15,000, and high-interest rates can significantly increase the total amount owed over time.',

            'Financial Independence: The FIRE movement (Financial Independence, Retire Early) advocates for extreme saving and investing to achieve financial independence and retire earlier than traditional retirement age.',
        ];

        foreach ($funFacts as $fact) {
            FunFact::create(['name' => $fact]);
        }
    }
}
