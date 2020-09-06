package cn.yang;

import com.sun.net.httpserver.HttpServer;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/dome")
//public class servletDome1 implements Servlet {
/**
 * @单词描述
 * Generic/普通一般
 * */
//public class servletDome1 extends GenericServlet {
// 使用注解 配置多个partten
//* 为通配符
public class servletDome1 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("1.我已经被Get请求");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("2.我已经被post请求");
    }

    @Override
//    服务启动调用
    public void init(ServletConfig servletConfig) throws ServletException {
        System.out.println("1.我只会执行一次init");
    }

    @Override
    /*
     * 获取servlet配置,
     * */
    public ServletConfig getServletConfig() {
        return null;
    }

//    提供服务时,使用http时需要靠他调用post/get
//    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
//        System.out.println("我会被执行多次");
//    }

    @Override
//    获取servlet信息
    public String getServletInfo() {
        return null;
    }

    @Override
//    服务销毁时调用
    public void destroy() {
        System.out.println("当我销毁时，会被调用");
    }
}
