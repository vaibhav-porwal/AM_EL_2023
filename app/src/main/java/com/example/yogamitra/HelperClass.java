package com.example.yogamitra;

public class HelperClass extends DetailsActivity{
    private String BMI,HR,BR,WC;
    public HelperClass()
    {

    }

    public HelperClass(String BMI, String HR, String BR, String WC) {
        this.BMI = BMI;
        this.HR = HR;
        this.BR = BR;
        this.WC = WC;
    }

    public String getBMI() {
        return BMI;
    }

    public void setBMI(String BMI) {
        this.BMI = BMI;
    }

    public String getHR() {
        return HR;
    }

    public void setHR(String HR) {
        this.HR = HR;
    }

    public String getBR() {
        return BR;
    }

    public void setBR(String BR) {
        this.BR = BR;
    }

    public String getWC() {
        return WC;
    }

    public void setWC(String WC) {
        this.WC = WC;
    }
}
