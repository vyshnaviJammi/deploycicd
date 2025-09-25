package hotel.controller;
import hotel.model.Admin;
import hotel.repository.AdminRepository;
import hotel.security.JWTManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private JWTManager jwtManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public Map<String, String> register(@RequestBody Admin newAdmin) {
        Map<String, String> response = new HashMap<>();
        Admin existing = adminRepository.findByEmail(newAdmin.getEmail());

        if (existing != null) {
            response.put("message", "Email already registered");
        } else {
            newAdmin.setPassword(passwordEncoder.encode(newAdmin.getPassword()));
            adminRepository.save(newAdmin);
            response.put("message", "Registration successful");
        }

        return response;
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Admin loginData) {
        Map<String, String> response = new HashMap<>();
        Admin admin = adminRepository.findByEmail(loginData.getEmail());

        if (admin != null && passwordEncoder.matches(loginData.getPassword(), admin.getPassword())) {
            String token = jwtManager.generateToken(admin.getEmail());
            response.put("message", "Login successful");
            response.put("token", token);
        } else {
            response.put("message", "Invalid email or password");
        }

        return response;
    }
}