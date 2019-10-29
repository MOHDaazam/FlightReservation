import React, { Component } from 'react';
import $ from 'jquery';
import './passStr.css'


class PasswordStrength extends Component {

    state = {

    }
    componentDidMount = () => {
        $("input#pwd").on("focus keyup", function () {

        });

        $("input#pwd").blur(function () {

        });
        $("input#pwd").on("focus keyup", function () {
            var score = 0;
            var a = $(this).val();
            var desc = new Array();

            // strength desc
            desc[0] = "Too short";
            desc[1] = "Weak";
            desc[2] = "Good";
            desc[3] = "Strong";
            desc[4] = "Best";

        });

        $("input#pwd").blur(function () {

        });
        $("input#pwd").on("focus keyup", function () {
            var score = 0;
            var a = $(this).val();
            var desc = new Array();

            // strength desc
            desc[0] = "Too short";
            desc[1] = "Weak";
            desc[2] = "Good";
            desc[3] = "Strong";
            desc[4] = "Best";

            // password length
            if (a.length >= 6) {
                $("#length").removeClass("invalid").addClass("valid");
                score++;
            } else {
                $("#length").removeClass("valid").addClass("invalid");
            }

            // at least 1 digit in password
            if (a.match(/\d/)) {
                $("#pnum").removeClass("invalid").addClass("valid");
                score++;
            } else {
                $("#pnum").removeClass("valid").addClass("invalid");
            }


            if (a.length > 0) {
                //show strength text
                $("#passwordDescription").text(desc[score]);
                // show indicator
                $("#passwordStrength").removeClass().addClass("strength" + score);
            } else {
                $("#passwordDescription").text("Password not entered");
                $("#passwordStrength").removeClass().addClass("strength" + score);
            }
        });

        $("input#pwd").blur(function () {

        });
        $("input#pwd").on("focus keyup", function () {
            var score = 0;
            var a = $(this).val();
            var desc = new Array();

            // strength desc
            desc[0] = "Too short";
            desc[1] = "Weak";
            desc[2] = "Good";
            desc[3] = "Strong";
            desc[4] = "Best";

            $("#pwd_strength_wrap").fadeIn(400);

            // password length
            if (a.length >= 6) {
                $("#length").removeClass("invalid").addClass("valid");
                score++;
            } else {
                $("#length").removeClass("valid").addClass("invalid");
            }

            // at least 1 digit in password
            if (a.match(/\d/)) {
                $("#pnum").removeClass("invalid").addClass("valid");
                score++;
            } else {
                $("#pnum").removeClass("valid").addClass("invalid");
            }

            // at least 1 capital & lower letter in password
            if (a.match(/[A-Z]/) && a.match(/[a-z]/)) {
                $("#capital").removeClass("invalid").addClass("valid");
                score++;
            } else {
                $("#capital").removeClass("valid").addClass("invalid");
            }

            // at least 1 special character in password {
            if (a.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
                $("#spchar").removeClass("invalid").addClass("valid");
                score++;
            } else {
                $("#spchar").removeClass("valid").addClass("invalid");
            }


            if (a.length > 0) {
                //show strength text
                $("#passwordDescription").text(desc[score]);
                // show indicator
                $("#passwordStrength").removeClass().addClass("strength" + score);
            } else {
                $("#passwordDescription").text("Password not entered");
                $("#passwordStrength").removeClass().addClass("strength" + score);
            }
        });

        $("input#pwd").blur(function () {
            $("#pwd_strength_wrap").fadeOut(400);
        });
    }

    render() {
        return (
            <div id="pwd_strength_wrap">
                <div id="passwordDescription">Password not entered</div>
                <div id="passwordStrength" className="strength0"></div>
                <div id="pswd_info">
                    <strong>Strong Password Tips:</strong>
                    <ul>
                        <li class="invalid" id="length">At least 6 characters</li>
                        <li class="invalid" id="pnum">At least one number</li>

                    </ul>
                </div>
            </div>
        )
    }
}
export default PasswordStrength;