package t1708e.spring.assignment.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import t1708e.spring.assignment.entity.Coin;
import t1708e.spring.assignment.entity.Market;
import t1708e.spring.assignment.service.MarketService;

@RestController
@RequestMapping(value = "/api/v1/markets")
@CrossOrigin
public class MarketAPI {
    @Autowired
    private MarketService marketService;

    @GetMapping
    public ResponseEntity getList(){
        return new ResponseEntity(marketService.getList(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity create(@RequestBody Market market){
        if(market == null){
            return new ResponseEntity("nothing", HttpStatus.BAD_REQUEST);
        }
        Market savedMarket = marketService.store(market);
        return new ResponseEntity(savedMarket, HttpStatus.OK);
    }
}
