package t1708e.spring.assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import t1708e.spring.assignment.entity.Market;

public interface MarketRepository extends JpaRepository<Market, Integer> {
}
