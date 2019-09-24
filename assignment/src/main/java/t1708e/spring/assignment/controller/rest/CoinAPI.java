package t1708e.spring.assignment.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import t1708e.spring.assignment.dto.CoinDTO;
import t1708e.spring.assignment.entity.Coin;
import t1708e.spring.assignment.entity.Market;
import t1708e.spring.assignment.service.CoinService;
import t1708e.spring.assignment.service.MarketService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/coins")
@CrossOrigin
public class CoinAPI {
    @Autowired
    private CoinService coinService;
    @Autowired
    private MarketService marketService;

    @GetMapping
    public ResponseEntity getList(){
        List<Coin> coinList = coinService.getList();
        List<CoinDTO> coinDTOS = new ArrayList<>();
        for (Coin coin: coinList) {
            coinDTOS.add(new CoinDTO(coin));
        }
        return new ResponseEntity( coinDTOS, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity create(@RequestBody CoinDTO coinDTO){
        Coin coin = new Coin(coinDTO);
        System.out.println(coin);
        Market market = marketService.getById(coinDTO.getMarketId());
        System.out.println(coinDTO.getMarketId());
        coin.setMarket(market);
        market.addCoin(coin);
        Coin savedCoin = coinService.store(coin);
        return new ResponseEntity(savedCoin, HttpStatus.OK);
    }
}
