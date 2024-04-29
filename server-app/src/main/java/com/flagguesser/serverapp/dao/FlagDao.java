package com.flagguesser.serverapp.dao;

import com.flagguesser.serverapp.model.Flag;

public interface FlagDao {
    Flag getFlag(int id);

    int dbLength();
}