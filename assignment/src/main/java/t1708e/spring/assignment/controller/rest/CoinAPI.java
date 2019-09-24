package t1708e.spring.assignment.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import t1708e.spring.assignment.entity.Coin;
import t1708e.spring.assignment.service.CoinService;

@RestController
@RequestMapping(value = "/api/v1/coins")
@CrossOrigin(value = "localhost:4200")
public class CoinAPI {
    @Autowired
    private CoinService coinService;

    @GetMapping
    public ResponseEntity getList(){
        return new ResponseEntity(coinService.getList(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity create(Coin coin){
        Coin savedCoin = coinService.store(coin);
        return new ResponseEntity(savedCoin, HttpStatus.OK);
    }
}
