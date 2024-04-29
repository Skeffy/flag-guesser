package com.flagguesser.serverapp.dao;

import com.flagguesser.serverapp.exception.DaoException;
import com.flagguesser.serverapp.model.Flag;
import javax.sql.DataSource;
import org.springframework.jdbc.CannotGetJdbcConnectionException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

@Component
public class JdbcFlagDao implements FlagDao {
    private final JdbcTemplate jdbcTemplate;

    public JdbcFlagDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public Flag getFlag(int id) {
        Flag flag = null;
        String sql = "SELECT * FROM country WHERE country_id = ?;";

        try {
            SqlRowSet results = this.jdbcTemplate.queryForRowSet(sql, new Object[]{id});
            if (results.next()) {
                flag = this.mapRowToFlag(results);
            }

            return flag;
        } catch (CannotGetJdbcConnectionException var5) {
            throw new DaoException("Unable to connect to database", var5);
        }
    }

    public int dbLength() {
        String sql = "SELECT country_id FROM country;";

        try {
            SqlRowSet results = this.jdbcTemplate.queryForRowSet(sql);
            results.last();
            int dbLength = results.getRow();
            return dbLength;
        } catch (CannotGetJdbcConnectionException var4) {
            throw new DaoException("Unable to connect to database", var4);
        }
    }

    private Flag mapRowToFlag(SqlRowSet results) {
        Flag flag = new Flag();
        flag.setName(results.getString("name"));
        flag.setCode(results.getString("code"));
        flag.setCapital(results.getString("capital"));
        flag.setContinent(results.getString("continent"));
        flag.setFlagImage(results.getString("flag_image"));
        return flag;
    }
}