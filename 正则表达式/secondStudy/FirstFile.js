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
  */


/**
 *      字符类
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
 * 
 * 
 * 
 * 
 */


