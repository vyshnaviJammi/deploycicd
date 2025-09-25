package hotel.security;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JWTManager {

    // A secure key (make sure it's at least 256 bits for HS256)
    private final String SEC_KEY = "ABCDEFGHIJKLMNOPQRSTUV12345667890WXYZWQERTYUIOASDFGHJKLZXCVBNM";
    private final SecretKey key = Keys.hmacShaKeyFor(SEC_KEY.getBytes());

    // Generate a token with email and optional additional claims
    public String generateToken(String email) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", email);

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 1 day
                .signWith(key)
                .compact();
    }

    // Validate the token and extract email
    public String validateToken(String token) {
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            Date expiry = claims.getExpiration();
            if (expiry == null || expiry.before(new Date())) {
                return "401"; // Token expired
            }

            return claims.get("email", String.class);

        } catch (Exception e) {
            return "401"; // Invalid token
        }
    }
}