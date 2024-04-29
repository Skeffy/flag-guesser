package com.flagguesser.serverapp.controller;

import com.flagguesser.serverapp.DailyId;
import com.flagguesser.serverapp.dao.FlagDao;
import com.flagguesser.serverapp.model.Flag;
import java.util.Random;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin
@RestController
public class FlagController {
    private final FlagDao flagDao;
    private DailyId dailyId;
    private ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);

    public FlagController(FlagDao flagDao) {
        this.flagDao = flagDao;
        this.dailyId = new DailyId(flagDao);
        ScheduledFuture<?> result = this.executor.scheduleAtFixedRate(this.dailyId, 0L, 1L, TimeUnit.DAYS);
    }

    @GetMapping(
            path = {"/flag"}
    )
    public Flag get() {
        Flag flag = this.flagDao.getFlag(this.dailyId.getId());
        if (flag == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Flag not found");
        } else {
            return flag;
        }
    }

    @GetMapping(
            path = {"/practice"}
    )
    public Flag practice() {
        Random random = new Random();
        int dbLength = random.nextInt(this.dailyId.getDbLength() + 1);
        Flag flag = this.flagDao.getFlag(dbLength);
        if (flag == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Flag not found");
        } else {
            return flag;
        }
    }
}
