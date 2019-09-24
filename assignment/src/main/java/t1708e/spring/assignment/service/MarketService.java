package t1708e.spring.assignment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import t1708e.spring.assignment.entity.Market;
import t1708e.spring.assignment.repository.MarketRepository;

import java.util.List;

@Service
public class MarketService {
    @Autowired
    private MarketRepository marketRepository;

    public List<Market> getList(){
        return marketRepository.findAll();
    }

    public Market getById(int id){
        return marketRepository.findById(id).orElse(null);
    }

    public Market store(Market market){
        return marketRepository.save(market);
    }
}

