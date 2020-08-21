//package com.example.product.config.security;
//
//import com.example.product.config.CustomSuccessHandler;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//
//@Configuration
//@EnableWebSecurity
//public class AppSecurityConfig extends WebSecurityConfigurerAdapter {
//    @Autowired
//    private CustomSuccessHandler customSuccessHandler;
//
////    @Autowired
////    private IAppUserService userService;
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
////        auth.userDetailsService((UserDetailsService) userService)
////                .passwordEncoder(NoOpPasswordEncoder.getInstance());
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests()
//                .antMatchers("/home").permitAll()
//                .and().authorizeRequests()
//                .antMatchers("/home/**").access("hasRole('ADMIN')")  //hasRole("ADMIN")
//                .antMatchers("/home/**").access("hasRole('USER')")  //hasRole("USER")
//                .and()
////                .formLogin()
//                .formLogin()
////                .loginPage("/login").successHandler(customSuccessHandler)
//                .usernameParameter("username").passwordParameter("password").permitAll()
//                .and()
//                .logout().logoutSuccessUrl("/home").permitAll()
////                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//                .and().exceptionHandling().accessDeniedPage("/access-denied");
//        http.csrf().disable();
//    }
//}
