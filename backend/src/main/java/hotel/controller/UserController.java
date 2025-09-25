package hotel.controller;

import hotel.model.User;
import hotel.repository.UserRepository;
import hotel.security.JWTManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JWTManager jwtManager;

    // 🔴 Removed PasswordEncoder — not needed for plain text

    // ------------------ LOGIN ------------------
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();
        User existingUser = userRepository.findByEmail(user.getEmail());

        // ✅ Plain string comparison
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            String token = jwtManager.generateToken(existingUser.getEmail());

            response.put("token", token);
            response.put("message", "Login successful");
            response.put("user", existingUser); // keep password visible if you want
            return ResponseEntity.ok(response);
        }

        response.put("message", "Invalid email or password!");
        return ResponseEntity.status(401).body(response);
    }

    // ------------------ REGISTER ------------------
    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> registerUser(@RequestBody User newUser) {
        Map<String, Object> response = new HashMap<>();
        User existingUser = userRepository.findByEmail(newUser.getEmail());

        if (existingUser != null) {
            response.put("message", "Email already registered");
            return ResponseEntity.status(400).body(response);
        }

        // ✅ Save password exactly as user entered
        User saved = userRepository.save(newUser);

        // Issue token on registration too (optional)
        String token = jwtManager.generateToken(saved.getEmail());

        response.put("message", "Registration successful");
        response.put("user", saved);
        response.put("token", token);
        return ResponseEntity.ok(response);
    }

    // ------------------ SEARCH ------------------
    @GetMapping("/search")
    public List<User> searchUsers(@RequestParam("keyword") String keyword) {
        return userRepository.searchByKeyword(keyword);
    }

    // ------------------ FILTER ------------------
    @GetMapping("/filter") // fixed typo: was "/ilter"
    public List<User> filterUsersByRole(@RequestParam("role") String role) {
        return userRepository.findByRole(role);
    }
}
