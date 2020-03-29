/*
 * MIT License
 *
 * Copyright (c) 2020 Politechnika Wrocławska - Projektowanie i implementacja systemów webowych
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
package io.github.pwrpiiws.bookstore.app.rest;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Configuration
public class Routes {
  @Bean
  public RouterFunction<ServerResponse> routerFunction(
      final BookHandler bookHandler, final ReviewHandler reviewHandler) {
    return RouterFunctions.route()
        .GET("/api/books", bookHandler::findAllBooks)
        .GET("/api/books/{bookId}", bookHandler::findBookById)
        .POST("/api/books", bookHandler::save)
        .DELETE("/api/books/{bookId}", bookHandler::delete)
        .GET("/api/reviews/{reviewId}", reviewHandler::findById)
        .GET("/api/books/{bookId}/reviews", reviewHandler::findAllReviewsForBook)
        .POST("/api/reviews", reviewHandler::save)
        .resources("/ui/**", new ClassPathResource("static/frontend/"))
        .build();
  }
}
