import React, { Component } from 'react';
import './preloader.css'
import $ from 'jquery';

class Preloader extends Component {


    quotes = ['The average flight travels at 35,000 feet.',
        'Flying is greener than you think.',
        'The gladdest moment in human life is a departure into unknown lands.'
    ]


    state = {
        quote: this.quotes[0],
        quoteNumber: 1,
        arraySize: this.quotes.length
        // count: 1
    }


    componentDidMount = () => {
        var word = $('.quote span');
        var container = $('#preloader');
        function completeLoading() {
            word.each(function (index) {
                var y = Math.floor(Math.random() * 200) - 100;
                $(this).css('transform', 'translateY(' + y + 'px)');
            });

            setTimeout(function () {
                container.fadeOut();
            }, 200);
        }


    }

    setQuote = () => {
        if (this.state.quoteNumber < this.state.arraySize)
            this.setState({
                quote: this.quotes[this.state.quoteNumber],
                quoteNumber: this.state.quoteNumber + 1
            })
       
        //  else
        //  

    }




    render() {
        console.log(this.state)

        var interval = setInterval(() => {
            this.setQuote()

        }, 7000);


        var quotes1 = this.state.quote.split(' ')


        // setTimeout(() => alert('Hello'), 3000);
        // setTimeout(() => alert('Hello2'), 4000);

        //console.log(this.quotes1)
        return (
            <div id="preloader">
                <div class="quote loading">
                    {
                        quotes1 !== null ?
                            quotes1.map((item) => (
                                <span className='span-text'>{item}</span>
                            )) :
                            null
                    }
                    {/* <span>The</span>
                    <span> idea</span>
                    <span> of</span>
                    <span>waiting</span>
                    <span>for</span>
                    <span>something</span>
                    <span>makes</span>
                    <span>it</span>
                    <span>more</span>
                    <span>exciting</span> */}
                    <span class="author">Andy Warhol</span>
                </div>
            </div>
        )
    }
}
export default Preloader;