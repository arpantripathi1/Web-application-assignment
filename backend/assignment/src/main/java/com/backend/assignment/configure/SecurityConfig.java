// package com.backend.assignment.configure;


// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.AuthenticationProvider;
// import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
// import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
// import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
// import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// import com.backend.assignment.services.serviceImpl.UserServiceImpl;



// @Configuration
// @EnableWebSecurity
// @EnableMethodSecurity
// public class SecurityConfig extends WebSecurityConfigurerAdapter {

//     @Autowired
//     private UserServiceImpl userDetailsService;

//     @Autowired
//     private JwtAuthenticationEntryPoint unauthorizedHandler;

//     @Autowired
//     private PasswordEncoder passwordEncoder;

//     @Bean
//     public JwtAuthenticationFilter jwtAuthenticationFilter() {
//         return new JwtAuthenticationFilter();
//     }

//     @Override
//     @Bean
//     public AuthenticationManager authenticationManagerBean() throws Exception {
//         return super.authenticationManagerBean();
//     }

//     @Override
//     protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//         auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder);
//     }


    // @Override
    // protected void configure(HttpSecurity http) throws Exception {
    //     http.cors().and().csrf().disable()
    //             .exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
    //             .and()
    //             .authorizeRequests()
    //             .antMatchers("/user/signup", "/user/signin").permitAll() // Allow sign-up and sign-in endpoints
    //             .anyRequest().authenticated(); // All other requests need to be authenticated

    //     // Add JWT filter before UsernamePasswordAuthenticationFilter
    //     http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    // }
// }







// public class SecurityConfig {

//     @Autowired
//     private JwtAuthFilter authFilter;

//     // User Creation
//     @Bean
//     public UserDetailsService userDetailsService() {
//         return new UserInfoService();
//     }

//     // Configuring HttpSecurity
//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//         return http.csrf(csrf -> csrf.disable())
//                 .authorizeHttpRequests(auth -> auth.requestMatchers("/auth/welcome", "/auth/addNewUser", "/auth/generateToken").permitAll())
//                 .authorizeHttpRequests(auth -> auth.requestMatchers("/auth/user/**").authenticated())
//                 .authorizeHttpRequests(auth -> auth.requestMatchers("/auth/admin/**").authenticated())
//                 .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                 .authenticationProvider(authenticationProvider())
//                 .addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class)
//                 .build();
//     }

//     // Password Encoding
//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }

//     @Bean
//     public AuthenticationProvider authenticationProvider() {
//         DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
//         authenticationProvider.setUserDetailsService(userDetailsService());
//         authenticationProvider.setPasswordEncoder(passwordEncoder());
//         return authenticationProvider;
//     }

//     @Bean
//     public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
//         return config.getAuthenticationManager();
//     }


// }
