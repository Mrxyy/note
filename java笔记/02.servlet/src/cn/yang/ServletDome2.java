package cn.yang;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/ServletDome2")
public class ServletDome2 extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {
        System.out.println(req.getMethod());
    }

    protected void doGet(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {
        System.out.println(req.getMethod());// 获取请求方式
        System.out.println(req.getContextPath()); // 虚拟路径
        System.out.println(req.getServerName()); // 域名
        System.out.println(req.getServletPath()); //servet 路径
        System.out.println(req.getServletContext()); //req 包
        System.out.println(req.getRequestURL()); //定位符
        System.out.println(req.getRequestURI());  //标识符
        System.out.println(req.getRemoteAddr()); // 客户端IP
        RequestDispatcher dispatcher = req.getRequestDispatcher("");
        dispatcher.forward(req,response);
}
}
