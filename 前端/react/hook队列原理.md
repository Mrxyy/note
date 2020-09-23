# [文章1](https://blog.csdn.net/sinat_17775997/article/details/93383254)
# [文章2](https://www.jianshu.com/p/72720ec4341f)
```javascript
    let currentlyRenderingFiber // 当前
    let workInProgressQueue
    let currentHook
     
    // Source: https://github.com/facebook/react/tree/5f06576f51ece88d846d01abd2ddd575827c6127/react-reconciler/src/ReactFiberHooks.js:123
    第一步：当前fiber及其hooks队列中的第一个hook节点将被存储在全局变量
    function prepareHooks(recentFiber) {
      currentlyRenderingFiber = workInProgressFiber //最近的fiber
      currentHook = recentFiber.memoizedState // 第一个单链
    }
     
    // Source: https://github.com/facebook/react/tree/5f06576f51ece88d846d01abd2ddd575827c6127/react-reconciler/src/ReactFiberHooks.js:148
    function finishHooks() {
       // 将fiber 记忆状态设置为当前合格hook 
      currentlyRenderingFiber.memoizedState = workInProgressHook
      currentlyRenderingFiber = null
      workInProgressHook = null
      currentHook = null
    }
     
    // Source: https://github.com/facebook/react/tree/5f06576f51ece88d846d01abd2ddd575827c6127/react-reconciler/src/ReactFiberHooks.js:115
    function resolveCurrentlyRenderingFiber() {
       第二部 ：产看是否在函数里
      if (currentlyRenderingFiber) return currentlyRenderingFiber
      throw Error("Hooks can't be called")
    }
    // Source: https://github.com/facebook/react/tree/5f06576f51ece88d846d01abd2ddd575827c6127/react-reconciler/src/ReactFiberHooks.js:267
    function createWorkInProgressHook() {
      workInProgressHook = currentHook ? cloneHook(currentHook) : createNewHook()
      currentHook = currentHook.next
      workInProgressHook
    }
     
    function useXXX() {
      const fiber = resolveCurrentlyRenderingFiber()
      const hook = createWorkInProgressHook()
      // ...
    }
    
    function updateFunctionComponent(recentFiber, workInProgressFiber, Component, props) {
        // 将正在工作的fiber，第一个hook传入
      prepareHooks(recentFiber)
      Component(props)
      finishHooks()
    }
    
```