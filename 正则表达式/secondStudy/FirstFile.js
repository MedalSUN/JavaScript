/**
 * 
 *  正则表达式的理论基础
 * 
 *      1：Regular expression  即按照某种规则去匹配符合条件的字符串
 *          正则表达式就是这种规则
 *      如果使用js中的普通的方法去匹配一段字符串，有时会非常的麻烦，但是使用正则表达式，就会非常的方便
 *      2： RegExp对象  正则表达式对象
 */

 /**
  *     每一种不同的语言，正则表达式也不相同
  *     在js中通常使用 js内置对象：RegExp对象 来支持正则表达式。
  *     
  * 
  *     通常情况下有两种方式可以实例化RegExp对象
  *         1：通过字面量的方式（创建变量）
  *             var reg = /\bis\b/g;
  *                   为查找单独单词为is的字符串，进行全局匹配 \b为单词边界，g代表全局匹配 global; // 正则表达式写在两个斜杠之间
  *             var str = 'He is a good boy, she is a good girl, This is a good love'
  *             str.replace(reg, 'IS')
  *             结果为：  'He IS a good boy, she IS a good girl, This IS a good love'
  *         2：通过构造函数的方式（创建对象）
  *             var reg = new RegExp('正则表达式'， '修饰符')
  *             var reg = new RegExp('\\bis\\b', 'g')   在字符串中\属于特殊字符，需要使用转义字符进行转义，故使用\\b表示单词边界（boundary）
  *             var str = 'He is a good boy, she is a good girl, This is a good love'
  *             str.replace(reg, 'IS')
  *             结果为：  'He IS a good boy, she IS a good girl, This IS a good love'
  * 
  */


/**
 *      RegExp正则表达式的修饰符
 * 
 *  1： g global 全局匹配，如果不写则找到第一个符合条件之后就不会再进行匹配
 *  2： i ignore case 忽略大小写，默认情况下是大小写敏感
 *  3： m multiple lines 多行搜索
 * 
 *      注意修饰符可以多个一起使用
 *      例如： var reg = /\bi\b/gi;  全局搜索i 不论大小写。 
 *              str.replace(reg, '0')
 * 
 * 
 * 
 *      修饰符m
 *      mulStr = '@123
 *                @456
 *                @789'
 * 
 *      var reg = /^@\d/gm    全局多行匹配 以@ 开始后面跟一个数字
 *      mulStr.replace(reg, 'Q')
 *      结果为：'Q23
 *              Q56
 *              Q89'  
 * 
 * 
 */

 /**
  * 
  *     元字符
  *     
  *     正则表达式中有两种基本字符类型
  *     1：原义文本字符
  *         即表达式中的字符和匹配字符串中的字符是一样的，没有特殊含义
  *     2：元字符
  *         在正则表达式中有特殊含义的非字母字符
  * 
  *     例如：
  *         * + ？ $ ^ . | \ ( ) { } [ ]
  * 
  * 
  *         ================注意元字符的含义并不是唯一的，在不同的场景下，元字符的含义都有可能会不同。
  *                 例如 ^    [^]表示取反； 不在中括号中则是表示以XXXX开始
  * 
  */


/**
 *      字符类
 * 
 *      类 【】
 * 
 *      一般情况下，正则表达式中的一个字符对应字符串的一个字符
 *      但有时，我们需要的是表达式中的字符匹配的是一类字符，而不是一个字符。
 *       此时就可以使用【】来构建一个类  表示符合某些特征的对象，是一个泛指，而不是一个特指
 *         例如[abc]表示a或b或c归为一类  表示one of 指有其中一个即可
 *     
 *       var reg = /[abc]/g;
 *       var str = 'a1b2c3b4'
 *       str.replace(reg, 'X')
 *       结果为： 'X1X2X3b4'
 * 
 *          ==== 字符类取反
 *      使用^创建反向类/负向类
 *      反向类的意思为不属于某类的内容
 *          [^abc]表示不属于字符a，b， c的内容  表示none of
 *      var reg = /[^abc]/g;
 *       var str = 'a1b2c3b4'
 *       str.replace(reg, 'X')
 *       结果为： 'aXbXcXXX'
 * 
 */

 /**
  *     范围类
  * 
  *     如果使用上面的字符类去匹配数字，是非常麻烦的， [0123456789]  字母则是26个字母
  *     此时就需要范围类的帮助
  *     数字： [0-9]  字母： [a-z] [A-Z] [a-zA-Z]
  *       var reg = /[a-z]/g;
  *       var str = 'a1b2c3b4'
  *       str.replace(reg, 'X')
  *       结果为： 'X1X2X3X4'
  * 
  */


  /**
   *    JS预定义类与边界
   * 
   *        预定义类
   *            正则表达式提供预定义类来匹配常见字符
   *    1： .  等价于： [^\r\n]   除了回车符和换行符之外的所有字符
   *    2： \d 等价于： [0~9]     数字字符
   *    3： \D 等价于： [^0~9]    非数字字符
   *    4： \s 等价于： [\t\n\x0B\f\r]  空白符
   *    5： \S 等价于： [^\t\n\x0B\f\r] 非空白符
   *    6： \w 等价于： [a-zA-Z_0-9]  单词字符（字母数字下划线）
   *    7： \W 等价于： [^a-zA-Z_0-9] 非单词字符
   * 
   *    例如：匹配一个  ab+数字+任意字符的字符串 如何写正则表达式。
   *        使用常规正则表达式为：  ab[0~9][^\r\n]
   *        使用预定义类表达式为：  ab\d.
   * 
   * 
   *        边界
   *    1： ^  以XXX开始  在正则的前面添加
   *    2： $  以XXX结束  在正则的后面添加
   *    3： \b 单词边界
   *    4： \B 非单词边界
   *  
   *    
   * 
   * 
   * 
   */



   /**
    * 
    *   量词
    *   正则表达式的方便书写
    *   1： ？ 表示最多出现一次  {0,1}
    *   2:  +  表示至少出现一次  {1，}
    *   3： *  表示出现任意次    {0，}
    *   4： {n} 出现n次
    *   5： {n,m} 出现n到m次
    *   6： {n，} 至少出现n次
    * 
    *       注意量词是作用于紧挨着他的那个字符，并不是整体
    *       例如： 匹配boy连续出现三次的字符串  boy{3}
    *       但是抱歉的是，只能匹配到 boyyy，即y出现三次的字符串，
    * 
    *       此时使用分组即可
    *           （boy）{3}  即为boy出现三次的字符串。
    * 
    * 
    */

    /**
     *  js正则的贪婪模式和非贪婪模式
     *  贪婪模式： 正则表达式在匹配过程中会尽可能多的匹配，直到匹配失败。
     *  非贪婪模式：让正则表达式一旦成功匹配之后就不需要再进行尝试匹配了。尽可能少的进行匹配。
     *      在量词后面加上？就可以执行非贪婪模式的匹配策略。
     * 
     *       var reg = /\d{3,6}/g;
     *       var str = '123456789'
     *       str.replace(reg, 'X')
     *       结果为： 'X789'
     *       
     *       非贪婪模式
     *       var reg = /\d{3,6}?/g;
     *       var str = '123456789'
     *       str.replace(reg, 'X')
     *       结果为： 'XXX'
     * 
     * 
     */


     /**
      * 
      *     1:分组：   
      *          使用（）分组可以将量词作用于整个分组，而不是距离他最近的那个字符中。
      * 
      * 
      *     匹配一个小写字母和一个数字紧挨着出现三次的字符。
      *       var reg = /([a-z]\d){3}/g;
      *       var str = 'a1b2c3b4'
      *       str.replace(reg, 'X')
      *       结果为： 'XXXb4'
      * 
      * 
      *     2: 或：    
      *         |  表示两个的其中之一就可以
      *              如果只是使用一个| 那么就会将整个正则表达式的前后两部分分隔开进行匹配，因此需要使用（），分组进行配合。
      * 
      *     例如：
      *         var str =  'MyLoveIsMyFreeLive'
      *         var reg =  /(Lo|Li)/g
      *         str.replace(reg, 'X')
      *         结果为： 'MyXveIsMyFreeXve'
      * 
      *     3:反向引用
      *         例子  2015-11-12 转换成 11/12/2015  即年月日转换成月日年
      *         在这里就不能使用简单的正则表达式进行替换了。
      *         涉及到分组之后的变量引用。
      *         
      *         var str = '2015-11-20'
      *         var reg = /(\d{4})-(\d{2})-(\d{2})/g
      *         str.replace(reg, '$2/$3/$1')
      * 
      *     4:如果不希望使用某一些分组，那么就可以选择忽略分组。
      *       在分组内添加  ？： 即可
      *      （?:boy）.(ok)
      */



      /**
       *       前瞻：  ！！！！前瞻的断言只是作为匹配规则的判断的一部分，但是不进行匹配，只是为规则的匹配做一个保障。
       *    正则表达式
       *      从文本头部向尾部进行解析  文本尾部的方向成为 前
       * 
       *    前瞻就是正则表达式在匹配到规则时，向前检查是否符合断言。
       * 
       *    1：正向前瞻
       *        exp(?=assert)   匹配到规则后需要向前检查是否符合断言。
       *    2：负向前瞻
       *        exp(?!assert)   匹配到规则后需要向前检查是否不符合断言。
       * 
       *    例子：
       * 
       *    var str = 'a1*34dv4'
       *    var reg = /\w(?=\d)/g     表示匹配一个单词字符（字母数字下划线），并且前瞻要求这个单词字符的后面必须跟一个数字
       *    str.replace(reg, 'X')
       *    结果为： X1*X4dX4
       * 
       */

/**
 * 
 *  正则表达式的属性
 * 
 *  1： global 是否全局搜索
 *  2： ignore case 是否忽略大小写
 *  3： multiline 多行匹配搜索
 *  4： lastIndex   是当前表达式匹配内容的最后一个字符的下一个位置。（非全局状态下是没有这个属性的。因为你想全局匹配都是从
 *                   上一个匹配的字符开始继续查找，因此全局匹配就必须要有lastIndex这个属性。  没有lastIndex时是0）
 *  5： source  正则表达式的文本内容，即你的匹配规则
 * 
 *   上述五个属性都是只读的，不能手动赋值。
 * 
 */



 /**
  * 
  *     正则表达式的本身的方法！！！！
  *     
  *     RegExp.prototype.test(str)
  * 
  *     1： test方法： 用于测试字符串中是否存在匹配正则表达式中规则的字符串  存在返回true 反之返回false
  *         当正则表达式的匹配规则有g（global匹配）时，使用test方法会有隐患
  *         test就是为了测试有没有，而不是有多少
  *         由于存在lastIndex的存在，导致test在测试时，每一次都从上一次测得的index开始测试
  *         例如：
  *             var reg1 = /\w/
  *             var reg2 = /\w/g
  *             reg1.test('ab')  不论执行多次，都会为true
  *             reg2.test('ab')  前两次是true，第三次是false。【这种方式是由于lastIndex导致的，去掉全局匹配即可。非全局状态下，是没有lastIndex属性的】
  *     
  *     RegExp.prototype.exce(str)
  *     2：  exce
  *      exec方法，用来使用正则表达式模式对字符串执行搜索，并将更新全局的RegExp对象的属性以反映匹配结果
  *                 如果没有匹配的文本则返回null，如果有则返回一个结果数组。
  *                 这个数组有两个属性
  *                     1; index 声明匹配文本的第一个字符，即明白是从字符串的第几个字符开始匹配到的。
  *                     2: input 存放被检索的字符串string 
  * 
  *        exec 非全局调用
  *         返回的是一个数组：
  *             1：数组的第一项是与正则表达式相匹配的文本；
  *             2：如果表达式中有分组的话，可以将字符串中匹配的分组展示出来
  *             3：依次类推，可以将所有的分组都显示出来
  * 
  * 
  *         如果只是想将第一个匹配结果显示出来，就可以使用非全局匹配。
  *         var reg = /\d(\w)\d/
  *         var str = '1z2xx3c4v5'
  *         reg.exec(str)
  *         匹配结果为：(多次调用结果还是一样)
  *             ['1z2', z]
  * 
  * 
  *         exec全局调用：  如果想将所有的匹配结果都显示出来，就可以使用全局匹配。
  *         var reg = /\d(\w)\d/g
  *         var str = '1z2xx3c4v5'
  *         reg.exec(str)
  *          匹配结果为：
  *             第一次执行：['1z2', z]
  *             第二次执行：['3c4', c]
  *             第三次执行： null
  * 
  */


  /**
   * 
   *    字符串的方法
   *        有些字符串的方法的参数可以使用正则表达式。
   * 
   *    1： String.prototype.search(reg)
   *        search方法用于检索字符串中的指定子字符串，或者是检索与正则匹配的字符串； 
   *        匹配到返回index，匹配不到返回-1；
   *        注意serach方法自动忽略全局匹配g 即他每次查找都是从字符串的起点开始。
   * 
   * 
   *    2： String.prototype.match(reg)
   *        match方法用于检索字符串，以找到一个或者多个与RegExp匹配的文本
   *        match的非全局匹配：
   *            1： 只执行依次匹配，如果成功，就返回一个相关数组，如果不成功就返回null
   *            2： 类比正则表达式的方法exec方法
   *                1）：返回值是一个数组;
   *                2) : 数组的第一个元素是第一个匹配的文本，其他项则是当有分组时，存放分组的匹配字符
   *                3）： 数组还有两个属性，： index 和 input   和exec是一样的
   *        match的全局匹配：
   *            1：匹配成功返回数组，否则返回null
   *            2：如果返回的是一个数组，不同于非全局的匹配，他没有那么多的额外信息，数组中的每一项都是匹配上的字符，而没有分组的字符
   *            3： 没有index属性 （undefined）  没有input属性    没有lastIndex  （为0）
   * 
   * 
   *    3： String.prototype.split(reg)
   *        split 方法将字符串分割成数组
   *          例如： 'a,b,c,d,e'.split(',')  结果为 [a,b,c,d,e]
   *          上面的方法还是比较简单的分割，但是
   *            以数字分割字符串  'a1b2c3d4e'.split(/\d/g)  结果为：[a,b,c,d,e]   
   * 
   * 
   *    4:  String.prototype.replace()
   *        replace 方法，替换字符串
   *            1; replace(str, replaceStr)
   *            2: replace(reg, replaceStr)
   *            3: replace(reg, function)  用function的返回值作为他的替换结果
   * 
   * 
   *            'a1b2c3'.replace('1', X)   ==== 'aXb2c3'   只能一个一个转换
   *            如果使用正则表达式会更加方便
   *            'a1b2c3'.replace(/\d/g, X)   ====  'aXbXcX'
   * 
   *         第二个参数是function的：
   *            function会在每一次匹配时被调用到，有四个参数
   *                1）：第一个参数是匹配的字符串  match
   *                2）：第二个参数乃至后面更多的参数是分组 group   ： group1 group2....  如果有分组就写，没有分组就不写
   *                3）：第三个参数为匹配项在字符串中index
   *                4）：第四个参数为原字符串  origin
   *        
   * 
   *            例如：
   *        'a1b2c3d4e5f6'.replace(/(\d)(\w)(\d)/g, function(match, group1, group2, group3, origin){
   *                        console.log(match)                                    
   *                        return  group1 + group3
   *                        })
   * 
   *            输出结果为：  '1b2' , '3d4', '5f6' 
   *               最后的替换结果为  ：      'a12c34e56'
   * 
   *        
   */

























