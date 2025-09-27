package hotel.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    	http
    	  .csrf(csrf -> csrf.disable())
    	  .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
    	  .authorizeHttpRequests(auth -> auth
    	      .requestMatchers("/api/admin/**", "/api/users/**").permitAll()
    	      .anyRequest().authenticated()
    	  )
    	  .httpBasic(Customizer.withDefaults()) // disables basic auth
    	  .formLogin(form -> form.disable());   // disables default login page

        return http.build();
    }
}