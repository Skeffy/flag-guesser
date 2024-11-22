package com.flagguesser.serverapp.dao;

import com.flagguesser.serverapp.model.Flag;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.jdbc.core.JdbcTemplate;

public class JdbcFlagDaoTests extends BaseDaoTests {

    protected static final Flag FLAG_1 = new Flag(1, "Afghanistan", "AF", "Kabul", "Asia",
            "https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg");

    private JdbcFlagDao dao;

    @Before
    public void setup() {
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        dao = new JdbcFlagDao(dataSource);
    }

    @Test
    public void getFlag_returns_single_flag_given_good_id() {
        Flag flag = dao.getFlag(FLAG_1.getId());

        Assert.assertNotNull(flag);
        assertFlagsMatch(FLAG_1, flag);
    }

    @Test
    public void dbLength_returns_number_of_rows_in_country_table() {
        int dbLength = dao.dbLength();

        Assert.assertEquals(197, dbLength);
    }



    private void assertFlagsMatch(Flag expected, Flag actual) {
        Assert.assertEquals(expected.getId(), actual.getId());
        Assert.assertEquals(expected.getName(), actual.getName());
        Assert.assertEquals(expected.getCode(), actual.getCode());
        Assert.assertEquals(expected.getCapital(), actual.getCapital());
        Assert.assertEquals(expected.getContinent(), actual.getContinent());
    }
}
