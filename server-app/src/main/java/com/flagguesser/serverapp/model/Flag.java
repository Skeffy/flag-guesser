package com.flagguesser.serverapp.model;

public class Flag {
    private String name;
    private String code;
    private String capital;
    private String continent;
    private String flagImage;

    public Flag() {
    }

    public Flag(String name, String code, String capital, String continent, String flagImage) {
        this.name = name;
        this.code = code;
        this.capital = capital;
        this.continent = continent;
        this.flagImage = flagImage;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return this.code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCapital() {
        return this.capital;
    }

    public void setCapital(String capital) {
        this.capital = capital;
    }

    public String getContinent() {
        return this.continent;
    }

    public void setContinent(String continent) {
        this.continent = continent;
    }

    public String getFlagImage() {
        return this.flagImage;
    }

    public void setFlagImage(String flagImage) {
        this.flagImage = flagImage;
    }
}