package t1708e.spring.assignment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import t1708e.spring.assignment.entity.Coin;
import t1708e.spring.assignment.repository.CoinRepository;

import java.util.List;

@Service
public class CoinService {
    @Autowired
    private CoinRepository coinRepository;

    public List<Coin> getList(){
        return coinRepository.findAll();
    }

    public Coin getById(int id){
        return coinRepository.findById(id).orElse(null);
    }

    public Coin store(Coin coin){
        return coinRepository.save(coin);
    }
}
