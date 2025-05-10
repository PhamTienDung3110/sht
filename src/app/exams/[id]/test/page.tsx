/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle, FaClock } from 'react-icons/fa';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, Typography } from '@mui/material';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import cau14 from '@/assets/img/cau14_toan.jpg';
import cau18 from '@/assets/img/cau18_toan.png';
import cau6de3 from '@/assets/img/cau_6_de_3.jpg';
import Image from 'next/image';
import { EXAM_CONST } from '@/constant/exam';

interface Question {
  id: number;
  content: any;
  type: 'multiple_choice' | 'essay';
  options?: {
    a: string | JSX.Element;
    b: string | JSX.Element;
    c: string | JSX.Element;
    d: string | JSX.Element;
  };
  correctAnswer: string | number;
  showResult?: boolean;
}

const mockQuestionsMath: Question[] = [
  {
    id: 1,
    content: <p>
      Cho hàm số <InlineMath math="y = (x + 1)^{2}(2 - x) + m" />.
      Gọi <InlineMath math="x_{1}, x_{2}" /> tương ứng là điểm cực đại và cực tiểu của hàm số.
      Tính <InlineMath math="100( x_{1} + x_{2})" />?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '150',
      b: '200',
      c: '15',
      d: '0',
    },
    correctAnswer: 'd',
    showResult: true,
  },
  {
    id: 2,
    content: <p>
      Tìm họ nguyên hàm <InlineMath math="f(x) = \frac{1}{1 + \text{sin}(x)}" />?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(- \\text{cot}\\left( \\frac{x}{2} \\right) + C\)',
      b: '\(- \\text{cot}\\left( \\frac{x}{2} + \\frac{\\pi}{4} \\right) + C\)',
      c: '\(\\text{tan}\\left( \\frac{x}{2} \\right) + C\)',
      d: '\(\\text{tan}\\left( \\frac{x}{2} + \\frac{\\pi}{4} \\right)\)',
    },
    correctAnswer: 'b',
    showResult: true,
  },
  {
    id: 3,
    content: <p>
      Cho <InlineMath math="S.ABCD" /> là hình chóp tứ giác đều có cạnh đáy bằng <InlineMath math="a" />, cạnh bên tạo với đáy một góc <InlineMath math="60^{\circ}" />.
      I là trung điểm của <InlineMath math="SC" />. Tính thể tích khối chóp <InlineMath math="I.ABD" />?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(\\frac{a^{3}}{4}\)',
      b: '\(\\frac{a^{3}\\sqrt{6}}{24}\)',
      c: '\(\\frac{a^{3}}{6}\)',
      d: '\(\\frac{a^{3}}{8}\)',
    },
    correctAnswer: 'b',
    showResult: true,
  },
  {
    id: 4,
    content: <p>
      Hình <InlineMath math="(H)" /> giới hạn bởi các đường thẳng <InlineMath math="y = x + m,y = 0,x = 0" />. Tìm <InlineMath math="m > 0" /> sao cho thể tích vật tròn xoay tạo bởi hình <InlineMath math="(H)" /> quay quanh trục <InlineMath math="\text{Ox}" /> bằng <InlineMath math="\frac{19\pi}{3}" />?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '4',
      b: '\(\\sqrt{6}\)',
      c: '\(\\sqrt[3]{19}\)',
      d: '\(\\sqrt{8}\)',
    },
    correctAnswer: 'c',
    showResult: true,
  },
  {
    id: 5,
    content: <p>
      Tìm giá trị của <InlineMath math="m" /> để phương trình: <InlineMath math="2\text{sin}\left( x - \frac{\pi}{4} \right) - 4\text{cos}\left( x - \frac{\pi}{4} \right) = m - 1" /> có nghiệm?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(- \\sqrt{20} + 1 \\leq m \\leq \\sqrt{20} + 1\)',
      b: '\(- \\sqrt{20} \\leq m \\leq \\sqrt{20}\)',
      c: '\(- \\sqrt{10} + 1 \\leq m \\leq \\sqrt{10} + 1\)',
      d: '\(- \\sqrt{10} \\leq m \\leq \\sqrt{10}\)',
    },
    correctAnswer: 'a',
    showResult: true,
  },
  {
    id: 6,
    content: <p>
      Cho hình chóp <InlineMath math="S.ABCD" /> có đáy là hình thoi cạnh a, góc <InlineMath math="BAD" /> bằng <InlineMath math="60^{\circ}" />, <InlineMath math="SA = 2a" />, cạnh bên vuông góc với đáy, <InlineMath math="M" /> là trung điểm của <InlineMath math="SC" />. Tính thể tích khối chóp <InlineMath math="M.ABCD" />?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(\\frac{a^{3}\\sqrt{3}}{6}\)',
      b: '\(\\frac{a^{3}}{2}\)',
      c: '\(\\frac{a^{3}\\sqrt{6}}{3}\)',
      d: '\(\\frac{a^{3}\\sqrt{3}}{4}\)',
    },
    correctAnswer: 'a',
    showResult: true,
  },
  {
    id: 7,
    content: <p>
      Trong không gian <InlineMath math="Oxyz" /> cho điểm <InlineMath math="M(3;3;4)" />. Tính khoảng cách từ <InlineMath math="M" /> đến trục <InlineMath math="Oy" />?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '3',
      b: '4',
      c: '5',
      d: '6',
    },
    correctAnswer: 'c',
    showResult: true,
  },
  {
    id: 8,
    content: <p>
      Cho lăng trụ <InlineMath math="ABC.A'B'C'" />. <InlineMath math="I,J" /> lần lượt là trọng tâm của tam giác <InlineMath math="ABC.A'B'C'" />. Khẳng định nào sau đây đúng?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(IJ//B\'C\'\)',
      b: '\(IJ//\\left( ABC\' \\right)\)',
      c: '\(IJ//\\left( A\'B\'C\' \\right)\)',
      d: '\(IJ//\\text{AA\'}\)',
    },
    correctAnswer: 'd',
    showResult: true,
  },
  {
    id: 9,
    content: <p>
      Cho đường tròn <InlineMath math="(C):x^{2} + y^{2} = 4" />. Từ <InlineMath math="M(2;2)" /> kẻ tiếp tuyến <InlineMath math="MA,MB" /> đến đường tròn <InlineMath math="(C)" />. <InlineMath math="A,B" /> là tiếp điểm. Độ dài <InlineMath math="AB =" />?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(\\sqrt{2}\)',
      b: '\(2\\sqrt{2}\)',
      c: '2',
      d: '\(2\\sqrt{3}\)',
    },
    correctAnswer: 'b',
    showResult: true,
  },
  {
    id: 10,
    content: <p>
      Cho hàm số <InlineMath math="y = \frac{2x - 5}{x + 3}" /> đồng biến trên khoảng nào?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(( - \\infty; - 3)\) và \(( - 3; + \\infty)\)',
      b: '\(( - \\infty; - 3) \\cap ( - 3; + \\infty)\)',
      c: '\(( - \\infty;2)\)',
      d: '\(( - 4; + \\infty)\)',
    },
    correctAnswer: 'a',
    showResult: true,
  },
  {
    id: 11,
    content: <p>
      Cho hình chóp <InlineMath math="S.ABCD" />, đáy hình vuông cạnh <InlineMath math="a" />. <InlineMath math="SAB" /> đều nằm trong mặt phẳng vuông góc với đáy. <InlineMath math="G" /> là trọng tâm của tam giác <InlineMath math="SAB" />. Tính thể tích tứ diện <InlineMath math="G.ACD" />?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(\\frac{a^{3}\\sqrt{3}}{6}\)',
      b: '\(\\frac{a^{3}\\sqrt{3}}{12}\)',
      c: '\(\\frac{a^{3}\\sqrt{3}}{36}\)',
      d: '\(\\frac{a^{3}\\sqrt{3}}{72}\)',
    },
    correctAnswer: 'c',
    showResult: true,
  },
  {
    id: 12,
    content: <p>
      Cho <InlineMath math="a^{b} = 3" /> thì <InlineMath math="a^{ab} - 7 =" />?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(3^{b} - 7\)',
      b: '\(3^{a} - 7\)',
      c: '\(\\text{lo}\\text{g}_{3}a - 7\)',
      d: '\(\\text{lo}\\text{g}_{3}b - 7\)',
    },
    correctAnswer: 'b',
    showResult: true,
  },
  {
    id: 13,
    content:
      <>
        <p>
          Cho tứ diện <InlineMath math="SABC" /> có tam giác <InlineMath math="ABC" /> đều cạnh <InlineMath math="a" />, <InlineMath math="SA" /> vuông góc với mặt phẳng đáy <InlineMath math="(ABC)" />, <InlineMath math="SA = 2a" />, <InlineMath math="M" /> là trung điểm của <InlineMath math="SA" />, <InlineMath math="N \in SC" /> sao cho <InlineMath math="SN = kNC" />. Tìm <InlineMath math="k" /> để thể tích tứ diện <InlineMath math="V_{SMNB} = \frac{a^{3}\sqrt{3}}{36}" />?
        </p>
        <Image src={cau14} alt="exams" width={250} height={200} />
      </>,
    type: 'multiple_choice',
    options: {
      a: '\(k = \\frac{1}{2}\)',
      b: '\(k = \\frac{1}{3}\)',
      c: '\(k = \\frac{2}{3}\)',
      d: '\(k = 2\)',
    },
    correctAnswer: 'a',
    showResult: true,
  },
  {
    id: 14,
    content: <>
      <p>
        Gọi <InlineMath math="X" /> là tập hợp các số tự nhiên có 3 chữ số đôi một khác nhau lập thành từ các số tự nhiên 1 đến 9. Xác suất để số được chọn có tích các chữ số hoặc là số chính phương, hoặc là số lẻ là?
      </p>
    </>,
    type: 'multiple_choice',
    options: {
      a: '\(\\frac{5}{42}\)',
      b: '\(\\frac{5}{28}\)',
      c: '\(\\frac{5}{14}\)',
      d: '\(\\frac{5}{21}\)',
    },
    correctAnswer: 'b',
    showResult: true,
  },
  {
    id: 15,
    content: <p>
      Đường thẳng <InlineMath math="d" /> và mặt phẳng <InlineMath math="(P)" /> lần lượt có phương trình là <InlineMath math="d:\frac{x - 1}{2} = \frac{y + 3}{5} = \frac{z}{1}" />, <InlineMath math="(P):2x + y - 9z + 4 = 0" />. Khoảng cách giữa <InlineMath math="d" /> và <InlineMath math="(P)" /> là?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(\\sqrt{\\frac{3}{86}}\)',
      b: '\(\\frac{\\sqrt{3}}{86}\)',
      c: '\(\\frac{3}{\\sqrt{86}}\)',
      d: '\(\\frac{3}{86}\)',
    },
    correctAnswer: 'c',
    showResult: true,
  },
  {
    id: 16,
    content: <p>
      Trong không gian <InlineMath math="Oxyz" /> cho điểm <InlineMath math="A(1;2;3)" /> và <InlineMath math="M(2;3;0)" />. Xét đường thẳng <InlineMath math="d" /> thay đổi luôn đi qua <InlineMath math="M" /> và cắt các tia <InlineMath math="Ox,Oy" />. Gọi <InlineMath math="B" /> và <InlineMath math="C" /> là giao điểm của <InlineMath math="d" /> và các tia <InlineMath math="Ox,Oy" />. Thể tích thiết diện <InlineMath math="OABC" /> đạt giá trị nhỏ nhất khi phương trình đường thẳng <InlineMath math="d" /> là bao nhiêu?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(y = \\frac{- 3}{2}x + 3\)',
      b: '\(y = \\frac{- 3}{2}x - 3\)',
      c: '\(y = 3x - 3\)',
      d: '\(y = - \\frac{3}{2}x + 6\)',
    },
    correctAnswer: 'd',
    showResult: true,
  },
  {
    id: 17,
    content: <p>
      Cho hàm số <InlineMath math="y = \text{l}\text{g}^{2}x + \frac{1}{\text{l}\text{g}^{2}x + 2} - \frac{3}{2}" />. Khẳng định nào sau đây là đúng?
    </p>,
    type: 'multiple_choice',
    options: {
      a: 'Phương trình có nghiệm \(y = - 2\)',
      b: <span>
        Hàm số không có giá trị nhỏ nhất trên khoảng <InlineMath math="(0; +\infty)" />.
      </span>,
      c: '\(y \\geq 1\\forall x \\in (0; + \\infty)\)',
      d: '\(y \\geq - 1\\forall x \\in (0; + \\infty)\)',
    },
    correctAnswer: 'd',
    showResult: true,
  },
  {
    id: 18,
    content: <>
      <p>
        Số điểm cực tiểu của hàm số <InlineMath math="y = f(x)" /> dựa trên đồ thị hàm số <InlineMath math="y = f\'(x)" /> là?
      </p>
      <Image src={cau18} alt="exams" width={180} height={180} />
    </>,
    type: 'multiple_choice',
    options: {
      a: '1',
      b: '2',
      c: '0',
      d: '3',
    },
    correctAnswer: 'a',
    showResult: true,
  },
  {
    id: 19,
    content: <p>
      Để đồ thị hàm số <InlineMath math="y = x^{3} - x^{2} + (m - 5)x + 7" /> đạt cực trị tại các điểm ở hai phía trục tung <InlineMath math="Oy" /> thì <InlineMath math="m" /> có giá trị là?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(m > 3\)',
      b: '\(m < 5\)',
      c: '\(m > 4\)',
      d: '\(m \\geq 1\)',
    },
    correctAnswer: 'b',
    showResult: true,
  },
  {
    id: 20,
    content: <p>
      Cho tam giác <InlineMath math="ABC" /> với <InlineMath math="A(1; - 3;2),B(5;0; - 4),C( - 3; - 9;20)" />. Tìm tọa độ trọng tâm của tam giác <InlineMath math="ABC" />?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(G(1;4;6)\)',
      b: '\(G( - 1;4;6)\)',
      c: '\(G(1;4; - 6)\)',
      d: '\(G(1; - 4;6)\)',
    },
    correctAnswer: 'd',
    showResult: true,
  },
  {
    id: 21,
    content: <p>
      Tập nghiệm của bất phương trình <InlineMath math="\text{lo}\text{g}_{\frac{3}{4}}^{2}x + \text{lo}\text{g}_{\frac{3}{4}}x + \text{lo}\text{g}_{\frac{4}{3}}x < 1" /> là?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(1 < x < 2\)',
      b: '\(\\frac{3}{4} < x < 2\)',
      c: '\(\\frac{3}{4} < x < \\frac{4}{3}\)',
      d: '\(\\frac{2}{3} < x < \\frac{4}{3}\)',
    },
    correctAnswer: 'c',
    showResult: true,
  },
  {
    id: 22,
    content: <p>
      Trong không gian <InlineMath math="Oxyz" /> cho <InlineMath math="A(1;0;0),B(0;2;0),C(0;0;3),D(1;2;3)" />. Tính bán kính mặt cầu ngoại tiếp tứ diện <InlineMath math="ABCD" />?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(\\frac{\\sqrt{14}}{2}\)',
      b: '\(\\frac{\\sqrt{14}}{4}\)',
      c: '\(\\frac{14}{\\sqrt{2}}\)',
      d: '\(\\frac{\\sqrt{7}}{2}\)',
    },
    correctAnswer: 'a',
    showResult: true,
  },
  {
    id: 23,
    content: <p>
      Xét các bất phương trình
      <InlineMath math="\left\{ \begin{matrix} x^{2} - 13x + 30 \leq 0 & (1) \cr x - m \geq 0 & (2) \end{matrix} \right." />
      . Tìm tất cả các giá trị của <InlineMath math="m" /> để mọi nghiệm của (1) đều là nghiệm của (2)?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(m > 10\)',
      b: '\(m \\geq 10\)',
      c: '\(m \\leq 3\)',
      d: '\(m < 3\)',
    },
    correctAnswer: 'c',
    showResult: true,
  },
  {
    id: 24,
    content: <p>
      Phương trình <InlineMath math="9^{x} - 3^{x + 1} - m^{2} - 2m = 0" /> (m là tham số) có nghiệm duy nhất khi giá trị của m là?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(m \\in \\left( - \\infty; - 2\\left\\rbrack \\cup \\right\\lbrack 0; + \\infty \\right)\)',
      b: '\(m \\in ( - \\infty;0)\)',
      c: '\(m \\in \\left( \\ - \\infty;0 \\right)\)',
      d: '\(m \\in ( - 1; + \\infty)\)',
    },
    correctAnswer: 'a',
    showResult: true,
  },
  {
    id: 25,
    content: <p>
      Cho khối chóp <InlineMath math="S.ABCD" /> có đáy <InlineMath math="ABCD" /> là hình vuông cạnh <InlineMath math="a" />, tam giác <InlineMath math="SAB" /> cân tại <InlineMath math="S" /> và nằm trong mặt phẳng vuông góc với mặt đáy, <InlineMath math="SA = 2a" />. Thể tích khối chóp <InlineMath math="S.ABCD" /> theo <InlineMath math="a" /> là?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(\\frac{a^{3}\\sqrt{15}}{6}\)',
      b: '\(\\frac{a^{3}\\sqrt{5}}{3}\)',
      c: '\(\\frac{a^{3}\\sqrt{15}}{3}\)',
      d: '\(\\frac{a^{3}\\sqrt{5}}{3}\)',
    },
    correctAnswer: 'a',
    showResult: true,
  },
  {
    id: 26,
    content: <p>
      Cho hai mặt phẳng <InlineMath math="(P):3x - 2y + 5z - 5 = 0" /> và <InlineMath math="(Q):3x - 2y + 5z + 33 = 0" />. Khoảng cách giữa hai mặt phẳng <InlineMath math="(P)" /> và <InlineMath math="(Q)" /> là?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(\\frac{\\sqrt{27}}{2}\)',
      b: '\(\\sqrt{32}\)',
      c: '\(\\frac{\\sqrt{76}}{4}\)',
      d: '\(\\sqrt{38}\)',
    },
    correctAnswer: 'd',
    showResult: true,
  },
  {
    id: 27,
    content: <p>
      Cho hàm số <InlineMath math="y = f(x) = 5x^{6} - 18x^{5} + m^{6}" /> (m là tham số, m &gt; 3 ). Khẳng định nào sau đây đúng?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(f(x) \\leq 0\\forall x\)',
      b: '\(f(x) > 0\\forall x\)',
      c: 'Hàm số đạt giá trị lớn nhất tại \(x = 3\)',
      d: <span>
        Tồn tại <InlineMath math="x_{1},x_{2}" /> sao cho{' '}
        <InlineMath math="f\left(x_{1}\right)\cdot f\left(x_{2}\right) < 0" />.
      </span>,
    },
    correctAnswer: 'b',
    showResult: true,
  },
  {
    id: 28,
    content: <p>
      Cho hàm số <InlineMath math="y = x^{3} + 6x^{2} + 1" />. Hệ số góc bé nhất của tiếp tuyến với đồ thị hàm số?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '-10',
      b: '-12',
      c: '-6',
      d: '2',
    },
    correctAnswer: 'b',
    showResult: true,
  },
  {
    id: 29,
    content: <p>
      Trong một lần chơi đu quay, độ cao <InlineMath math="h(m)" /> của một người chơi so với mặt đất vào thời điểm <InlineMath math="t(s)" /> có công thức là <InlineMath math="11 + 9\text{cos}\left( \frac{\pi}{30}(t - 10) \right)" />.
      Hỏi trong thời gian một lượt chơi dài <InlineMath math="5s" />, người đó đạt được độ cao <InlineMath math="2m" /> so với mặt đất lần cuối cùng vào thời điểm nào?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(t = 2\)',
      b: '\(t = 40\)',
      c: '\(t = 12\)',
      d: 'Không có giá trị t thỏa mãn',
    },
    correctAnswer: 'd',
    showResult: true,
  },
  {
    id: 30,
    content: <p>
      Hình phẳng được giới hạn bởi trục <InlineMath math="Ox" />, đồ thị hàm số <InlineMath math="y = \frac{x}{x^{2} + 1}" /> và hai đường thẳng <InlineMath math="x = 0,x = a(a > 0)" /> có diện tích bằng 2. Tính số <InlineMath math="a" /> (làm tròn đến 2 chữ số thập phân)?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '2,52',
      b: '2,53',
      c: '7,32',
      d: '7,33',
    },
    correctAnswer: 'c',
    showResult: true,
  },
  {
    id: 31,
    content: <p>
      Cho <InlineMath math="z \in C" /> thỏa mãn <InlineMath math="(1 + i)z + \bar{z} = 3 + 2i" />.
      Mô - đun của <InlineMath math="z^{2}" /> là?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '3',
      b: '4',
      c: '5',
      d: '6',
    },
    correctAnswer: 'c',
    showResult: true,
  },
  {
    id: 32,
    content: <p>
      Khoảng cách giữa hai mặt phẳng song song
      <InlineMath math="\left\{ \begin{matrix} (P):x - y + z + 5 = 0 \\ (Q):x - y + z - 1 = 0 \end{matrix} \right." />
      ?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(2\\sqrt{3}\)',
      b: '\(3\\sqrt{2}\)',
      c: '\(\\sqrt{6}\)',
      d: '\(4\\sqrt{2}\)',
    },
    correctAnswer: 'a',
    showResult: true,
  },
  {
    id: 33,
    content: <p>
      Hàm số <InlineMath math="y = \frac{1}{3}x^{3} + x^{2} + mx + m" /> đồng biến trên <InlineMath math="(1; + \infty)" /> khi giá trị của <InlineMath math="m" /> là?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(m \\leq 3\)',
      b: '\(m < 2\)',
      c: '\(m \\geq - 3\)',
      d: '\(m \\geq 2\)',
    },
    correctAnswer: 'c',
    showResult: true,
  },
  {
    id: 34,
    content: <p>
      Tìm <InlineMath math="m" /> để đồ thị hàm số <InlineMath math="y = \frac{2x^{2} - 2mx + 3m}{x - 2}" /> có điểm cực đại, điểm cực tiểu ở hai phía của trục <InlineMath math="Ox" />?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '\(m > 6\)',
      b: '\(0 < m < 6\)',
      c: '\(m < 0\)',
      d: '\(m < - 6\)',
    },
    correctAnswer: 'b',
    showResult: true,
  },
  {
    id: 35,
    content: <p>
      Cho đa giác lồi 12 cạnh. Hỏi có nhiều nhất bao nhiêu giao điểm của các đường chéo nằm bên trong đa giác?
    </p>,
    type: 'multiple_choice',
    options: {
      a: '125',
      b: '345',
      c: '350',
      d: '495',
    },
    correctAnswer: 'd',
    showResult: true,
  },
  {
    id: 36,
    content: <p>
      Trong không gian <InlineMath math="Oxyz" /> cho điểm <InlineMath math="M(3;3;4)" />. Tính khoảng cách từ <InlineMath math="M" /> đến trục <InlineMath math="Oy" />?
    </p>,
    type: 'essay',
    correctAnswer: 5,
    showResult: true,
  },
  {
    id: 37,
    content: <p>
      Gọi <InlineMath math="(a;b)" /> là nghiệm của hệ phương trình
      <InlineMath math="\left\{ \begin{matrix} \sqrt{x + 3} = y^{3} + 2y - 1 \\ \sqrt{y + 3} = x^{3} + 2x - 1 \end{matrix} \right." />
      . Tính <InlineMath math="A = a^{3} + b + 1" /> = ?
    </p>,
    type: 'essay',
    correctAnswer: 3,
    showResult: true,
  },
  {
    id: 38,
    content: <p>
      Ban giám khảo một cuộc thi gồm 7 người: 2 người Việt, 3 người Nhật, 1 người Pháp và 1 người Đức. Có bao nhiêu cách sắp xếp 7 giám khảo vào 7 chiếc ghế xếp theo hàng ngang sao cho các giám khảo của cùng một nước ngồi cạnh nhau?
    </p>,
    type: 'essay',
    correctAnswer: 288,
    showResult: true,
  },
  {
    id: 39,
    content: <p>
      Cho hàm số <InlineMath math="y = \frac{1}{3}x^{3} - 3x^{2} - mx + 25" />. Tìm <InlineMath math="m" /> để: <InlineMath math="y\'(2) = 0" />?
    </p>,
    type: 'essay',
    correctAnswer: -8,
    showResult: true,
  },
  {
    id: 40,
    content: <p>
      Trong không gian <InlineMath math="Oxyz" /> cho các điểm <InlineMath math="A(6;0;0),B(0;6;0),C(0;0;6)" />. S là diện tích của tam giác <InlineMath math="ABC" />. Tính giá trị của biểu thức <InlineMath math="P = \sqrt{3}S" />?
    </p>,
    type: 'essay',
    correctAnswer: 54,
    showResult: true,
  },
  {
    id: 41,
    content: <p>
      Tính giá trị <InlineMath math="S" /> biết <InlineMath math="S = 100^{2} - 98^{2} + 96^{2} - 94^{2} + \ldots + 4^{2} - 2^{2}" />?
    </p>,
    type: 'essay',
    correctAnswer: 5100,
    showResult: true,
  },
  {
    id: 42,
    content: <p>
      Tìm giá trị <InlineMath math="m" /> để hàm số <InlineMath math="y = x^{4} - \left( m^{2} + 1 \right)x^{2} + (2m + 1)" /> có tung độ điểm cực đại bằng 5?
    </p>,
    type: 'essay',
    correctAnswer: 2,
    showResult: true,
  },
  {
    id: 43,
    content: <p>
      Tứ diện <InlineMath math="ABCD" /> có <InlineMath math="AB = CD = b,BC = 2a" />. Biết <InlineMath math="BC\bot CD;(ABC),(ABD)" /> cùng vuông góc với mặt phẳng <InlineMath math="(BCD)" />. Khoảng cách giữa hai đường thẳng <InlineMath math="AD,BC" /> là <InlineMath math="\frac{3a}{\sqrt{2}}" />. Thể tích của tứ diện <InlineMath math="ABCD" /> là <InlineMath math="V" />. Tính <InlineMath math="\frac{V}{a^{3}}" />?
    </p>,
    type: 'essay',
    correctAnswer: 3,
    showResult: true,
  },
  {
    id: 44,
    content: <p>
      Cho hàm số <InlineMath math="y = x^{3} + (m + 3)x^{2} + m + 1" /> (<InlineMath math="m" /> là tham số). Tìm <InlineMath math="m" /> để đồ thị hàm số cắt trục hoành tại <InlineMath math="x = - 2" />?
    </p>,
    type: 'essay',
    correctAnswer: -1,
    showResult: true,
  },
  {
    id: 45,
    content: <p>
      Số cực trị của hàm số <InlineMath math="y = \log_{4}\left( x^{2} - 4x + 3 \right)" /> là?
    </p>,
    type: 'essay',
    correctAnswer: 0,
    showResult: true,
  },
  {
    id: 46,
    content: <p>
      Có bao nhiêu giá trị nguyên của tham số <InlineMath math="m" /> để phương trình <InlineMath math="x^{2} - 2mx - 6m + 7 = 0" /> vô nghiệm?
    </p>,
    type: 'essay',
    correctAnswer: 7,
    showResult: true,
  },
  {
    id: 47,
    content: <p>
      Tính tổng nghiệm của phương trình <InlineMath math="\text{lo}g_{2}\left( x^{2} - 8x + 16 \right) + \text{lo}g_{3}\left( x^{2} - 10x + 18 \right) = 2 - \text{lo}g_{3}\left( x^{2} - 10x + 18 \right)\text{.lo}g_{\frac{1}{2}}(4 - x)" />?
    </p>,
    type: 'essay',
    correctAnswer: 3,
    showResult: true,
  },
  {
    id: 48,
    content: <p>
      Tính <InlineMath math="\underset{x \rightarrow 1}{\text{lim}}\frac{2x^{3} - 3x + 1}{x^{3} - 1}" />?
    </p>,
    type: 'essay',
    correctAnswer: 1,
    showResult: true,
  },
  {
    id: 49,
    content: <p>
      Cho đường tròn có phương trình:
      <InlineMath math="(C):(x + 2)^{2} + (y - 2)^{2} = 4" />,
      <InlineMath math="\left( C' \right):(x - 2)^{2} + (y + 2)^{2} = 4" />.
      Có mấy tiếp tuyến chung của <InlineMath math="(C)" /> và <InlineMath math="\left( C' \right)" />?
    </p>,
    type: 'essay',
    correctAnswer: 4,
    showResult: true,
  },
  {
    id: 50,
    content: <p>
      Tìm a để <InlineMath math="I = \int_{0}^{a}{(4 - 2x)d}x" /> đạt giá trị lớn nhất?
    </p>,
    type: 'essay',
    correctAnswer: 2,
    showResult: true,
  },
];

const mockQuestionsVan: Question[] = [
  {
    id: 51,
    content: <div>
      <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 1 đến
        5:</strong></p>
      <p><strong>(1) "Sông Mã xa rồi Tây Tiến ơi</strong></p>
      <p><strong>(2) <em>Nhớ về rừng núi nhớ chơi với</em></strong></p>
      <p><strong>(3) <em>Sài Khao sương lấp đoàn quân mỏi</em></strong></p>
      <p><strong>(4) <em>Mường Lát hoa về trong đêm hơi</em></strong></p>
      <p><strong>(5) <em>Dốc lên khúc khuỷu dốc thăm thẳm</em></strong></p>
      <p><strong>(6) <em>Heo hút cồn mây súng ngửi trời</em></strong></p>
      <p><strong>(7) <em>Ngàn thước lên cao, ngàn thước
        xuống</em></strong></p>
      <p><strong>(8) <em>Nhà ai Pha Luông mưa xa khơi</em></strong></p>
      <p><strong>(9) <em>Anh bạn dãi dầu không bước nữa</em></strong></p>
      <p><strong>(10) <em>Gục lên súng mũ bỏ quên đời!</em></strong></p>
      <p><strong>(11) <em>Chiều chiều oai linh thác gầm thét</em></strong></p>
      <p><strong>(12) <em>Đêm đêm Mường Hịch cọp trêu người</em></strong></p>
      <p><strong>(13) <em>Nhớ ôi Tây Tiến cơm lên khói</em></strong></p>
      <p><strong>(14) <em>Mai Châu mùa em thơm nếp xôi"</em></strong></p>
      <p>(Quang Dũng, <em>Tây Tiến</em>, Ngữ văn 12, tập một, NXB Giáo dục
        Việt Nam, 2010)</p>
      <p style={{ marginTop: '16px' }}>Trong hai câu thơ (11) và (12), tác giả đã sử dụng biện pháp nghệ thuật nào?</p>
    </div>,
    type: "multiple_choice",
    options: {
      a: "Hoán dụ",
      b: "So sánh",
      c: "Ẩn dụ",
      d: "Nhân hóa"
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 52,
    content:
      <div>
        <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 1 đến
          6:</strong></p>
        <p><strong>(1) "Sông Mã xa rồi Tây Tiến ơi</strong></p>
        <p><strong>(2) <em>Nhớ về rừng núi nhớ chơi với</em></strong></p>
        <p><strong>(3) <em>Sài Khao sương lấp đoàn quân mỏi</em></strong></p>
        <p><strong>(4) <em>Mường Lát hoa về trong đêm hơi</em></strong></p>
        <p><strong>(5) <em>Dốc lên khúc khuỷu dốc thăm thẳm</em></strong></p>
        <p><strong>(6) <em>Heo hút cồn mây súng ngửi trời</em></strong></p>
        <p><strong>(7) <em>Ngàn thước lên cao, ngàn thước
          xuống</em></strong></p>
        <p><strong>(8) <em>Nhà ai Pha Luông mưa xa khơi</em></strong></p>
        <p><strong>(9) <em>Anh bạn dãi dầu không bước nữa</em></strong></p>
        <p><strong>(10) <em>Gục lên súng mũ bỏ quên đời!</em></strong></p>
        <p><strong>(11) <em>Chiều chiều oai linh thác gầm thét</em></strong></p>
        <p><strong>(12) <em>Đêm đêm Mường Hịch cọp trêu người</em></strong></p>
        <p><strong>(13) <em>Nhớ ôi Tây Tiến cơm lên khói</em></strong></p>
        <p><strong>(14) <em>Mai Châu mùa em thơm nếp xôi"</em></strong></p>
        <p>(Quang Dũng, <em>Tây Tiến</em>, Ngữ văn 12, tập một, NXB Giáo dục
          Việt Nam, 2010)</p>
        <p style={{ marginTop: '16px' }}>Những câu thơ nào trong đoạn thơ cho biết tác giả nhấn mạnh chặng đường hành quân nhọc nhằn, gian khổ của các chiến sĩ Tây Tiến?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Câu 3, 5, 6, 7",
      b: "Câu 9, 10, 11, 12",
      c: "Câu 6, 7, 9, 10",
      d: "Câu 3, 5, 11, 12"
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 53,
    content:
      <div>
        <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 1 đến
          6:</strong></p>
        <p><strong>(1) "Sông Mã xa rồi Tây Tiến ơi</strong></p>
        <p><strong>(2) <em>Nhớ về rừng núi nhớ chơi với</em></strong></p>
        <p><strong>(3) <em>Sài Khao sương lấp đoàn quân mỏi</em></strong></p>
        <p><strong>(4) <em>Mường Lát hoa về trong đêm hơi</em></strong></p>
        <p><strong>(5) <em>Dốc lên khúc khuỷu dốc thăm thẳm</em></strong></p>
        <p><strong>(6) <em>Heo hút cồn mây súng ngửi trời</em></strong></p>
        <p><strong>(7) <em>Ngàn thước lên cao, ngàn thước
          xuống</em></strong></p>
        <p><strong>(8) <em>Nhà ai Pha Luông mưa xa khơi</em></strong></p>
        <p><strong>(9) <em>Anh bạn dãi dầu không bước nữa</em></strong></p>
        <p><strong>(10) <em>Gục lên súng mũ bỏ quên đời!</em></strong></p>
        <p><strong>(11) <em>Chiều chiều oai linh thác gầm thét</em></strong></p>
        <p><strong>(12) <em>Đêm đêm Mường Hịch cọp trêu người</em></strong></p>
        <p><strong>(13) <em>Nhớ ôi Tây Tiến cơm lên khói</em></strong></p>
        <p><strong>(14) <em>Mai Châu mùa em thơm nếp xôi"</em></strong></p>
        <p>(Quang Dũng, <em>Tây Tiến</em>, Ngữ văn 12, tập một, NXB Giáo dục
          Việt Nam, 2010)</p>
        <p style={{ marginTop: '16px' }}>Những câu thơ nào trong đoạn thơ nhắc đến những kỉ niệm ngọt ngào của các chiến sĩ Tây Tiến với con người miền Tây?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Câu 1, 2",
      b: "Câu 4, 8",
      c: "Câu 13, 14",
      d: "Câu 9, 10"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 54,
    content:
      <div>
        <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 1 đến
          6:</strong></p>
        <p><strong>(1) "Sông Mã xa rồi Tây Tiến ơi</strong></p>
        <p><strong>(2) <em>Nhớ về rừng núi nhớ chơi với</em></strong></p>
        <p><strong>(3) <em>Sài Khao sương lấp đoàn quân mỏi</em></strong></p>
        <p><strong>(4) <em>Mường Lát hoa về trong đêm hơi</em></strong></p>
        <p><strong>(5) <em>Dốc lên khúc khuỷu dốc thăm thẳm</em></strong></p>
        <p><strong>(6) <em>Heo hút cồn mây súng ngửi trời</em></strong></p>
        <p><strong>(7) <em>Ngàn thước lên cao, ngàn thước
          xuống</em></strong></p>
        <p><strong>(8) <em>Nhà ai Pha Luông mưa xa khơi</em></strong></p>
        <p><strong>(9) <em>Anh bạn dãi dầu không bước nữa</em></strong></p>
        <p><strong>(10) <em>Gục lên súng mũ bỏ quên đời!</em></strong></p>
        <p><strong>(11) <em>Chiều chiều oai linh thác gầm thét</em></strong></p>
        <p><strong>(12) <em>Đêm đêm Mường Hịch cọp trêu người</em></strong></p>
        <p><strong>(13) <em>Nhớ ôi Tây Tiến cơm lên khói</em></strong></p>
        <p><strong>(14) <em>Mai Châu mùa em thơm nếp xôi"</em></strong></p>
        <p>(Quang Dũng, <em>Tây Tiến</em>, Ngữ văn 12, tập một, NXB Giáo dục
          Việt Nam, 2010)</p>
        <p style={{ marginTop: '16px' }}>Chủ đề nổi bật trong đoạn trích là gì?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Những kỉ niệm với thiên nhiên và con người vùng núi rừng miền Tây của các chiến sĩ Tây Tiến",
      b: "Bức tranh thiên nhiên miền Tây hiểm trở với vực, dốc heo hút",
      c: "Nỗi nhớ của các chiến sĩ Tây Tiến hướng về con người và thiên nhiên miền Tây",
      d: "Chặng đường hành quân gian nan, vất vả của đoàn quân Tây Tiến"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 55,
    content:
      <div>
        <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 1 đến
          6:</strong></p>
        <p><strong>(1) "Sông Mã xa rồi Tây Tiến ơi</strong></p>
        <p><strong>(2) <em>Nhớ về rừng núi nhớ chơi với</em></strong></p>
        <p><strong>(3) <em>Sài Khao sương lấp đoàn quân mỏi</em></strong></p>
        <p><strong>(4) <em>Mường Lát hoa về trong đêm hơi</em></strong></p>
        <p><strong>(5) <em>Dốc lên khúc khuỷu dốc thăm thẳm</em></strong></p>
        <p><strong>(6) <em>Heo hút cồn mây súng ngửi trời</em></strong></p>
        <p><strong>(7) <em>Ngàn thước lên cao, ngàn thước
          xuống</em></strong></p>
        <p><strong>(8) <em>Nhà ai Pha Luông mưa xa khơi</em></strong></p>
        <p><strong>(9) <em>Anh bạn dãi dầu không bước nữa</em></strong></p>
        <p><strong>(10) <em>Gục lên súng mũ bỏ quên đời!</em></strong></p>
        <p><strong>(11) <em>Chiều chiều oai linh thác gầm thét</em></strong></p>
        <p><strong>(12) <em>Đêm đêm Mường Hịch cọp trêu người</em></strong></p>
        <p><strong>(13) <em>Nhớ ôi Tây Tiến cơm lên khói</em></strong></p>
        <p><strong>(14) <em>Mai Châu mùa em thơm nếp xôi"</em></strong></p>
        <p>(Quang Dũng, <em>Tây Tiến</em>, Ngữ văn 12, tập một, NXB Giáo dục
          Việt Nam, 2010)</p>
        <p style={{ marginTop: '16px' }}>Từ "dãi dầu" trong câu thơ thứ (9) của đoạn thơ trên được hiểu là:</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Trải qua nhiều mưa nắng, vất vả, gian truân",
      b: "Kiệt sức, gục ngã không thể bước tiếp",
      c: "Kiên cường, sẵn sàng đương đầu với tất cả những gian khổ",
      d: "Hiện thực khắc nghiệt, nhọc nhằn của chiến tranh"
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 56,
    content:
      <div>
        <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 6 đến
          10:</strong></p>
        <p><strong>"Người Việt Nam có thể coi là ít tinh thần tôn giáo. Họ coi
          trọng hiện thế trần tục hơn thế giới bên kia. Không phải người Việt Nam
          không mê tín, họ tin có linh hồn, ma quỷ, thần Phật. Nhiều người thực
          hành cầu cúng. Nhưng về tương lai, họ lo cho con cháu hơn là linh hồn
          của mình. Tuy là coi trọng hiện thế nhưng cũng không bám lấy hiện thế,
          không quá sợ hãi cái chết (sống gửi thác về). Trong cuộc sống, ý thức về
          cá nhân và sở hữu không phát triển cao. Của cải vẫn được quan niệm là
          của chung, giàu sang chỉ là tạm thời, tham lam giành giật cho nhiều cũng
          không giữ mãi mà hưởng được. Người ta mong ước thái bình, an cư lạc
          nghiệp để làm ăn cho no đủ, sống thanh nhàn, thong thả, có đông con
          nhiều cháu, ước mong về hạnh phúc nói chung là thiết thực, yên phận thủ
          thường, không mong gì cao xa, khác thường, hơn người. Con người được ưa
          chuộng là con người hiền lành, tình nghĩa. Không chuộng trí mà cũng
          không chuộng dũng. Dân tộc chống ngoại xâm liên tục nhưng không thượng
          võ.”</strong></p>
        <p>(Trần Đình Hượu, <em>Nhìn về vốn văn hóa dân tộc</em>, Ngữ văn 12,
          tập một,</p>
        <p>NXB Giáo dục Việt Nam, 2010)</p>
        <p style={{ marginTop: '16px' }}>Theo tác giả đoạn trích, biểu hiện của “ý thức về cá nhân và sở hữu không phát triển cao” thể hiện ở:</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Không chuộng trí mà cũng không chuộng dũng",
      b: "Của cải vẫn được quan niệm là của chung, giàu sang chỉ là tạm thời, tham lam giành giật cho nhiều cũng không giữ mãi mà hưởng được",
      c: "Người ta mong ước thái bình, an cư lạc nghiệp để làm ăn cho no đủ, sống thanh nhàn, thong thả, có đông con nhiều cháu, ước mong về hạnh phúc nói chung là thiết thực, yên phận thủ thường, không mong gì cao xa, khác thường, hơn người",
      d: "Đất nước ta là đất nước bước ra từ những cuộc chiến tranh, dân tộc ta phải chống ngoại xâm liên tục nhưng nhìn chung người Việt Nam lại không có tinh thần thượng võ"
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 57,
    content:
      <div>
        <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 6 đến
          10:</strong></p>
        <p><strong>“Người Việt Nam có thể coi là ít tinh thần tôn giáo. Họ coi
          trọng hiện thế trần tục hơn thế giới bên kia. Không phải người Việt Nam
          không mê tín, họ tin có linh hồn, ma quỷ, thần Phật. Nhiều người thực
          hành cầu cúng. Nhưng về tương lai, họ lo cho con cháu hơn là linh hồn
          của mình. Tuy là coi trọng hiện thế nhưng cũng không bám lấy hiện thế,
          không quá sợ hãi cái chết (sống gửi thác về). Trong cuộc sống, ý thức về
          cá nhân và sở hữu không phát triển cao. Của cải vẫn được quan niệm là
          của chung, giàu sang chỉ là tạm thời, tham lam giành giật cho nhiều cũng
          không giữ mãi mà hưởng được. Người ta mong ước thái bình, an cư lạc
          nghiệp để làm ăn cho no đủ, sống thanh nhàn, thong thả, có đông con
          nhiều cháu, ước mong về hạnh phúc nói chung là thiết thực, yên phận thủ
          thường, không mong gì cao xa, khác thường, hơn người. Con người được ưa
          chuộng là con người hiền lành, tình nghĩa. Không chuộng trí mà cũng
          không chuộng dũng. Dân tộc chống ngoại xâm liên tục nhưng không thượng
          võ.”</strong></p>
        <p>(Trần Đình Hượu, <em>Nhìn về vốn văn hóa dân tộc</em>, Ngữ văn 12,
          tập một,</p>
        <p>NXB Giáo dục Việt Nam, 2010)</p>
        <p style={{ marginTop: '16px' }}>Phong cách ngôn ngữ của đoạn trích là gì?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Phong cách ngôn ngữ báo chí",
      b: "Phong cách ngôn ngữ nghệ thuật",
      c: "Phong cách ngôn ngữ khoa học",
      d: "Phong cách ngôn ngữ chính luận"
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 58,
    content:
      <div>
        <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 6 đến
          10:</strong></p>
        <p><strong>“Người Việt Nam có thể coi là ít tinh thần tôn giáo. Họ coi
          trọng hiện thế trần tục hơn thế giới bên kia. Không phải người Việt Nam
          không mê tín, họ tin có linh hồn, ma quỷ, thần Phật. Nhiều người thực
          hành cầu cúng. Nhưng về tương lai, họ lo cho con cháu hơn là linh hồn
          của mình. Tuy là coi trọng hiện thế nhưng cũng không bám lấy hiện thế,
          không quá sợ hãi cái chết (sống gửi thác về). Trong cuộc sống, ý thức về
          cá nhân và sở hữu không phát triển cao. Của cải vẫn được quan niệm là
          của chung, giàu sang chỉ là tạm thời, tham lam giành giật cho nhiều cũng
          không giữ mãi mà hưởng được. Người ta mong ước thái bình, an cư lạc
          nghiệp để làm ăn cho no đủ, sống thanh nhàn, thong thả, có đông con
          nhiều cháu, ước mong về hạnh phúc nói chung là thiết thực, yên phận thủ
          thường, không mong gì cao xa, khác thường, hơn người. Con người được ưa
          chuộng là con người hiền lành, tình nghĩa. Không chuộng trí mà cũng
          không chuộng dũng. Dân tộc chống ngoại xâm liên tục nhưng không thượng
          võ.”</strong></p>
        <p>(Trần Đình Hượu, <em>Nhìn về vốn văn hóa dân tộc</em>, Ngữ văn 12,
          tập một,</p>
        <p>NXB Giáo dục Việt Nam, 2010)</p>
        <p style={{ marginTop: '16px' }}>Theo lập luận của tác giả, việc “Người Việt Nam có thể coi là ít tinh thần tôn giáo” được lí giải bằng đặc điểm nào dưới đây?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Về tương lai, họ lo cho con cháu hơn là linh hồn của mình",
      b: "Họ coi trọng hiện thế trần tục hơn thế giới bên kia",
      c: "Không bám lấy hiện thế, không quá sợ hãi cái chết (sống gửi thác về)",
      d: "Không phải người Việt Nam không mê tín, họ tin có linh hồn, ma quỷ, thần Phật"
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 59,
    content:
      <div>
        <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 6 đến
          10:</strong></p>
        <p><strong>“Người Việt Nam có thể coi là ít tinh thần tôn giáo. Họ coi
          trọng hiện thế trần tục hơn thế giới bên kia. Không phải người Việt Nam
          không mê tín, họ tin có linh hồn, ma quỷ, thần Phật. Nhiều người thực
          hành cầu cúng. Nhưng về tương lai, họ lo cho con cháu hơn là linh hồn
          của mình. Tuy là coi trọng hiện thế nhưng cũng không bám lấy hiện thế,
          không quá sợ hãi cái chết (sống gửi thác về). Trong cuộc sống, ý thức về
          cá nhân và sở hữu không phát triển cao. Của cải vẫn được quan niệm là
          của chung, giàu sang chỉ là tạm thời, tham lam giành giật cho nhiều cũng
          không giữ mãi mà hưởng được. Người ta mong ước thái bình, an cư lạc
          nghiệp để làm ăn cho no đủ, sống thanh nhàn, thong thả, có đông con
          nhiều cháu, ước mong về hạnh phúc nói chung là thiết thực, yên phận thủ
          thường, không mong gì cao xa, khác thường, hơn người. Con người được ưa
          chuộng là con người hiền lành, tình nghĩa. Không chuộng trí mà cũng
          không chuộng dũng. Dân tộc chống ngoại xâm liên tục nhưng không thượng
          võ.”</strong></p>
        <p>(Trần Đình Hượu, <em>Nhìn về vốn văn hóa dân tộc</em>, Ngữ văn 12,
          tập một,</p>
        <p>NXB Giáo dục Việt Nam, 2010)</p>
        <p style={{ marginTop: '16px' }}>Đoạn trích bàn về vấn đề gì?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Tôn giáo Việt Nam",
      b: "Phong tục Việt Nam",
      c: "Lịch sử Việt Nam",
      d: "Văn hóa Việt Nam"
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 60,
    content:
      <div>
        <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 6 đến
          10:</strong></p>
        <p><strong>“Người Việt Nam có thể coi là ít tinh thần tôn giáo. Họ coi
          trọng hiện thế trần tục hơn thế giới bên kia. Không phải người Việt Nam
          không mê tín, họ tin có linh hồn, ma quỷ, thần Phật. Nhiều người thực
          hành cầu cúng. Nhưng về tương lai, họ lo cho con cháu hơn là linh hồn
          của mình. Tuy là coi trọng hiện thế nhưng cũng không bám lấy hiện thế,
          không quá sợ hãi cái chết (sống gửi thác về). Trong cuộc sống, ý thức về
          cá nhân và sở hữu không phát triển cao. Của cải vẫn được quan niệm là
          của chung, giàu sang chỉ là tạm thời, tham lam giành giật cho nhiều cũng
          không giữ mãi mà hưởng được. Người ta mong ước thái bình, an cư lạc
          nghiệp để làm ăn cho no đủ, sống thanh nhàn, thong thả, có đông con
          nhiều cháu, ước mong về hạnh phúc nói chung là thiết thực, yên phận thủ
          thường, không mong gì cao xa, khác thường, hơn người. Con người được ưa
          chuộng là con người hiền lành, tình nghĩa. Không chuộng trí mà cũng
          không chuộng dũng. Dân tộc chống ngoại xâm liên tục nhưng không thượng
          võ.”</strong></p>
        <p>(Trần Đình Hượu, <em>Nhìn về vốn văn hóa dân tộc</em>, Ngữ văn 12,
          tập một,</p>
        <p>NXB Giáo dục Việt Nam, 2010)</p>
        <p style={{ marginTop: '16px' }}>Thao tác lập luận chính của đoạn trích là gì?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Bác bỏ",
      b: "So sánh",
      c: "Chứng minh",
      d: "Giải thích"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 61,
    content:
      <div>
        <p><strong>Đọc đoạn trích và trả lời các câu hỏi từ 11 đến
          15:</strong></p>
        <p><strong>Ung thư là một loại bệnh được đặc trưng bởi sự <u>tăng
          sinh</u> không kiểm soát được của một số loại tế bào cơ thể dẫn đến hình
          thành các khối u chèn ép các cơ quan trọng thể. Khối u được gọi là ác
          tính khi các tế bào của nó có khả năng tách khỏi mô ban đầu, di chuyển
          vào máu và đến các nơi khác trong cơ thể tạo nên nhiều khối u khác nhau.
          Nguyên nhân và cơ chế gây ung thư còn chưa hoàn toàn được làm sáng tỏ.
          Tuy nhiên, người ta cũng biết được một số nguyên nhân khác nhau dẫn đến
          ung thư như do các đột biến gen, đột biến NST. Khi con người tiếp xúc
          với các tia phóng xạ, hoá chất gây đột biến, các virut gây ung thư,...
          thì các tế bào có thể bị các đột biến khác nhau. Có nhiều số liệu cho
          thấy khối u thường được phát triển từ một tế bào bị đột biến nhiều lần
          làm cho tế bào không còn khả năng đáp ứng lại cơ chế điều khiển phân bào
          của cơ thể dẫn đến phân chia liên tục. Tế bào khối u có thể là lành tính
          nếu nó không có khả năng di chuyển vào máu và đi đến các nơi khác nhau
          trong cơ thể. Những tế bào bị đột biến nhiều lần có thể trở thành ác
          tính nếu đột biến gen làm cho nó có khả năng tách khỏi mô ban đầu và di
          chuyển vào máu, tái lập các khối u ở nhiều nơi khác nhau gây nên cái
          chết cho bệnh nhân (hình 21.2).</strong></p>
        <p><strong>(<em>Sinh học 12</em>, tập 1, NXB Giáo dục Việt Nam, 2014,
          tr.89)</strong></p>
        <p style={{ marginTop: '16px' }}>Theo đoạn trích, cơ chế gây ung thư là kết quả của điều gì?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Tiếp xúc với phóng xạ và các chất nguy hiểm",
      b: "Tế bào bị đột biến nhiều lần không còn khả năng đáp ứng cơ chế điều khiển của cơ thể",
      c: "Đột biến gen, đột biến NST",
      d: "Tế bào tách khỏi mô ban đầu và di chuyển vào máu"
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 62,
    content:
      <div>
        <p><strong>Đọc đoạn trích và trả lời các câu hỏi từ 11 đến
          15:</strong></p>
        <p><strong>Ung thư là một loại bệnh được đặc trưng bởi sự <u>tăng
          sinh</u> không kiểm soát được của một số loại tế bào cơ thể dẫn đến hình
          thành các khối u chèn ép các cơ quan trọng thể. Khối u được gọi là ác
          tính khi các tế bào của nó có khả năng tách khỏi mô ban đầu, di chuyển
          vào máu và đến các nơi khác trong cơ thể tạo nên nhiều khối u khác nhau.
          Nguyên nhân và cơ chế gây ung thư còn chưa hoàn toàn được làm sáng tỏ.
          Tuy nhiên, người ta cũng biết được một số nguyên nhân khác nhau dẫn đến
          ung thư như do các đột biến gen, đột biến NST. Khi con người tiếp xúc
          với các tia phóng xạ, hoá chất gây đột biến, các virut gây ung thư,...
          thì các tế bào có thể bị các đột biến khác nhau. Có nhiều số liệu cho
          thấy khối u thường được phát triển từ một tế bào bị đột biến nhiều lần
          làm cho tế bào không còn khả năng đáp ứng lại cơ chế điều khiển phân bào
          của cơ thể dẫn đến phân chia liên tục. Tế bào khối u có thể là lành tính
          nếu nó không có khả năng di chuyển vào máu và đi đến các nơi khác nhau
          trong cơ thể. Những tế bào bị đột biến nhiều lần có thể trở thành ác
          tính nếu đột biến gen làm cho nó có khả năng tách khỏi mô ban đầu và di
          chuyển vào máu, tái lập các khối u ở nhiều nơi khác nhau gây nên cái
          chết cho bệnh nhân (hình 21.2).</strong></p>
        <p><strong>(<em>Sinh học 12</em>, tập 1, NXB Giáo dục Việt Nam, 2014,
          tr.89)</strong></p>
        <p style={{ marginTop: '16px' }}>Đoạn trích trên nói về vấn đề gì?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Nguyên nhân và cơ chế ung thư",
      b: "Tác hại của ung thư",
      c: "Cách phòng chống ung thư",
      d: "Cách điều trị ung thư"
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 63,
    content:
      <div>
        <p><strong>Đọc đoạn trích và trả lời các câu hỏi từ 11 đến
          15:</strong></p>
        <p><strong>Ung thư là một loại bệnh được đặc trưng bởi sự <u>tăng
          sinh</u> không kiểm soát được của một số loại tế bào cơ thể dẫn đến hình
          thành các khối u chèn ép các cơ quan trọng thể. Khối u được gọi là ác
          tính khi các tế bào của nó có khả năng tách khỏi mô ban đầu, di chuyển
          vào máu và đến các nơi khác trong cơ thể tạo nên nhiều khối u khác nhau.
          Nguyên nhân và cơ chế gây ung thư còn chưa hoàn toàn được làm sáng tỏ.
          Tuy nhiên, người ta cũng biết được một số nguyên nhân khác nhau dẫn đến
          ung thư như do các đột biến gen, đột biến NST. Khi con người tiếp xúc
          với các tia phóng xạ, hoá chất gây đột biến, các virut gây ung thư,...
          thì các tế bào có thể bị các đột biến khác nhau. Có nhiều số liệu cho
          thấy khối u thường được phát triển từ một tế bào bị đột biến nhiều lần
          làm cho tế bào không còn khả năng đáp ứng lại cơ chế điều khiển phân bào
          của cơ thể dẫn đến phân chia liên tục. Tế bào khối u có thể là lành tính
          nếu nó không có khả năng di chuyển vào máu và đi đến các nơi khác nhau
          trong cơ thể. Những tế bào bị đột biến nhiều lần có thể trở thành ác
          tính nếu đột biến gen làm cho nó có khả năng tách khỏi mô ban đầu và di
          chuyển vào máu, tái lập các khối u ở nhiều nơi khác nhau gây nên cái
          chết cho bệnh nhân (hình 21.2).</strong></p>
        <p><strong>(<em>Sinh học 12</em>, tập 1, NXB Giáo dục Việt Nam, 2014,
          tr.89)</strong></p>
        <p style={{ marginTop: '16px' }}>Từ “<strong>tăng sinh</strong>” trong đoạn trích được hiểu như thế nào?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Tăng lên về khối lượng",
      b: "Tăng lên về số lượng",
      c: "Tăng lên về sinh sản",
      d: "Tăng lên về kích thước"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 64,
    content:
      <div>
        <p><strong>Đọc đoạn trích và trả lời các câu hỏi từ 11 đến
          15:</strong></p>
        <p><strong>Ung thư là một loại bệnh được đặc trưng bởi sự <u>tăng
          sinh</u> không kiểm soát được của một số loại tế bào cơ thể dẫn đến hình
          thành các khối u chèn ép các cơ quan trọng thể. Khối u được gọi là ác
          tính khi các tế bào của nó có khả năng tách khỏi mô ban đầu, di chuyển
          vào máu và đến các nơi khác trong cơ thể tạo nên nhiều khối u khác nhau.
          Nguyên nhân và cơ chế gây ung thư còn chưa hoàn toàn được làm sáng tỏ.
          Tuy nhiên, người ta cũng biết được một số nguyên nhân khác nhau dẫn đến
          ung thư như do các đột biến gen, đột biến NST. Khi con người tiếp xúc
          với các tia phóng xạ, hoá chất gây đột biến, các virut gây ung thư,...
          thì các tế bào có thể bị các đột biến khác nhau. Có nhiều số liệu cho
          thấy khối u thường được phát triển từ một tế bào bị đột biến nhiều lần
          làm cho tế bào không còn khả năng đáp ứng lại cơ chế điều khiển phân bào
          của cơ thể dẫn đến phân chia liên tục. Tế bào khối u có thể là lành tính
          nếu nó không có khả năng di chuyển vào máu và đi đến các nơi khác nhau
          trong cơ thể. Những tế bào bị đột biến nhiều lần có thể trở thành ác
          tính nếu đột biến gen làm cho nó có khả năng tách khỏi mô ban đầu và di
          chuyển vào máu, tái lập các khối u ở nhiều nơi khác nhau gây nên cái
          chết cho bệnh nhân (hình 21.2).</strong></p>
        <p><strong>(<em>Sinh học 12</em>, tập 1, NXB Giáo dục Việt Nam, 2014,
          tr.89)</strong></p>
        <p style={{ marginTop: '16px' }}>Đâu là sự khác biệt giữa u lành tính và u ác tính (di căn)?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "U ác tính có khả năng gây chết người còn u lành tính rất ít khả năng gây chết người",
      b: "U ác tính xuất hiện ở những người ốm yếu còn u lành tính chỉ xuất hiện ở người khỏe mạnh",
      c: "U ác tính có khả năng tách khỏi mô ban đầu và di chuyển vào máu còn u lành tính thì không",
      d: "U ác tính là tên gọi nhiều khối u trong cơ thể còn u lành tính là tên gọi chỉ một khối u"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 65,
    content:
      <div>
        <p><strong>Đọc đoạn trích và trả lời các câu hỏi từ 11 đến
          15:</strong></p>
        <p><strong>Ung thư là một loại bệnh được đặc trưng bởi sự <u>tăng
          sinh</u> không kiểm soát được của một số loại tế bào cơ thể dẫn đến hình
          thành các khối u chèn ép các cơ quan trọng thể. Khối u được gọi là ác
          tính khi các tế bào của nó có khả năng tách khỏi mô ban đầu, di chuyển
          vào máu và đến các nơi khác trong cơ thể tạo nên nhiều khối u khác nhau.
          Nguyên nhân và cơ chế gây ung thư còn chưa hoàn toàn được làm sáng tỏ.
          Tuy nhiên, người ta cũng biết được một số nguyên nhân khác nhau dẫn đến
          ung thư như do các đột biến gen, đột biến NST. Khi con người tiếp xúc
          với các tia phóng xạ, hoá chất gây đột biến, các virut gây ung thư,...
          thì các tế bào có thể bị các đột biến khác nhau. Có nhiều số liệu cho
          thấy khối u thường được phát triển từ một tế bào bị đột biến nhiều lần
          làm cho tế bào không còn khả năng đáp ứng lại cơ chế điều khiển phân bào
          của cơ thể dẫn đến phân chia liên tục. Tế bào khối u có thể là lành tính
          nếu nó không có khả năng di chuyển vào máu và đi đến các nơi khác nhau
          trong cơ thể. Những tế bào bị đột biến nhiều lần có thể trở thành ác
          tính nếu đột biến gen làm cho nó có khả năng tách khỏi mô ban đầu và di
          chuyển vào máu, tái lập các khối u ở nhiều nơi khác nhau gây nên cái
          chết cho bệnh nhân (hình 21.2).</strong></p>
        <p><strong>(<em>Sinh học 12</em>, tập 1, NXB Giáo dục Việt Nam, 2014,
          tr.89)</strong></p>
        <p style={{ marginTop: '16px' }}>Từ “<strong>nó</strong>” trong đoạn trích thay thế cho nội dung nào?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Tế bào đột biến",
      b: "Đột biến gen",
      c: "Tế bào khối u",
      d: "Tế bào bị đột biến nhiều lần"
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 66,
    content:
      <div>
        <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 16 đến
          20:</strong></p>
        <p><strong>Lịch sử hình thành Hà Nội gắn liền với sự hình thành vùng
          châu thổ Bắc Bộ, miền lưu vực sông Hồng. Theo nghiên cứu của hai tác giả
          Trần Quốc Vượng và Vũ Tuấn Sán trong cuốn <em>Hà Nội nghìn xưa</em> thì
          cách đây hàng chục triệu năm, “Hà Nội là một đáy biển nông”<sup>1</sup>
          sau thời gian dài biển lùi, nước biển cạn dần, nó chuyển thành vùng
          trũng lầy rồi thành đồng bằng ven sông như hiện nay. Mỗi quá trình đó
          cũng kéo dài hàng mấy chục vạn đến hàng triệu năm. Cũng theo hai tác giả
          trên, khoan sâu xuống lòng đất Hà Nội, vùng Gia Lâm, trong tầng dây 50m
          <u>trầm tích</u> có thể thấy hai lớp đất: từ 39,5m đến 50m là sỏi và cát
          thô, từ 39,5m đến trên cùng là sét và cát mịn. Từ đó, có thể đoán, sông
          Hồng đã qua hai giai đoạn vận động, từ chỗ chảy mạnh, dữ dội (cát thô và
          sỏi lắng đọng), đến chỗ chày êm đềm hơn (sét, cát mịn). Vùng đất Từ
          Liêm, trong khuôn viên Đại học Sư phạm Hà Nội, khoan sâu 48,87m cho thấy
          khá rõ đặc điểm trầm tích của cửa sông, cát và bùn dày tới 20m. Biển
          rút, nước sông Hồng nặng phù sa đã bồi tích, “thương hải biến vi tang
          điền" (bãi biển đã biến thành nương dâu), đồng bằng Hà Nội được hình
          thành <u>như vậy</u>.</strong></p>
        <p>(Nguyễn Thị Bích Hà, <em>Hà Nội con người lịch sử văn hóa</em>,</p>
        <p>NXB Đại học Sư phạm, 2013, trang 19)</p>
        <p style={{ marginTop: '16px' }}>Ý chính của đoạn trích là gì?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Quá trình hình thành vùng đồng bằng Hà Nội",
      b: "Lịch sử hình thành Hà Nội",
      c: "Tiến trình phát triển vùng châu thổ Bắc Bộ",
      d: "Lịch sử hình thành miền lưu vực sông Hồng"
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 67,
    content:
      <div>
        <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 16 đến
          20:</strong></p>
        <p><strong>Lịch sử hình thành Hà Nội gắn liền với sự hình thành vùng
          châu thổ Bắc Bộ, miền lưu vực sông Hồng. Theo nghiên cứu của hai tác giả
          Trần Quốc Vượng và Vũ Tuấn Sán trong cuốn <em>Hà Nội nghìn xưa</em> thì
          cách đây hàng chục triệu năm, “Hà Nội là một đáy biển nông”<sup>1</sup>
          sau thời gian dài biển lùi, nước biển cạn dần, nó chuyển thành vùng
          trũng lầy rồi thành đồng bằng ven sông như hiện nay. Mỗi quá trình đó
          cũng kéo dài hàng mấy chục vạn đến hàng triệu năm. Cũng theo hai tác giả
          trên, khoan sâu xuống lòng đất Hà Nội, vùng Gia Lâm, trong tầng dây 50m
          <u>trầm tích</u> có thể thấy hai lớp đất: từ 39,5m đến 50m là sỏi và cát
          thô, từ 39,5m đến trên cùng là sét và cát mịn. Từ đó, có thể đoán, sông
          Hồng đã qua hai giai đoạn vận động, từ chỗ chảy mạnh, dữ dội (cát thô và
          sỏi lắng đọng), đến chỗ chày êm đềm hơn (sét, cát mịn). Vùng đất Từ
          Liêm, trong khuôn viên Đại học Sư phạm Hà Nội, khoan sâu 48,87m cho thấy
          khá rõ đặc điểm trầm tích của cửa sông, cát và bùn dày tới 20m. Biển
          rút, nước sông Hồng nặng phù sa đã bồi tích, “thương hải biến vi tang
          điền" (bãi biển đã biến thành nương dâu), đồng bằng Hà Nội được hình
          thành <u>như vậy</u>.</strong></p>
        <p>(Nguyễn Thị Bích Hà, <em>Hà Nội con người lịch sử văn hóa</em>,</p>
        <p>NXB Đại học Sư phạm, 2013, trang 19)</p>
        <p style={{ marginTop: '16px' }}>Xuất phát từ lí do nào mà tác giả có thể đi đến kết luận “sông Hồng đã qua hai giai đoạn vận động”?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Vì trong tầng dày trầm tích xuất hiện hai lớp đất chồng xếp lên nhau theo độ sâu",
      b: "Vì dòng chảy của sông Hồng đã hai lần đổi hướng khi qua vùng châu thổ Bắc Bộ",
      c: "Vì sự vận động trong địa hình của Hà Nội từ đáy biển nông thành vùng trũng lầy",
      d: "Vì sông Hồng chịu ảnh hưởng của sự dịch chuyển giữa các mảng lục địa"
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 68,
    content:
      <div>
        <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 16 đến
          20:</strong></p>
        <p><strong>Lịch sử hình thành Hà Nội gắn liền với sự hình thành vùng
          châu thổ Bắc Bộ, miền lưu vực sông Hồng. Theo nghiên cứu của hai tác giả
          Trần Quốc Vượng và Vũ Tuấn Sán trong cuốn <em>Hà Nội nghìn xưa</em> thì
          cách đây hàng chục triệu năm, “Hà Nội là một đáy biển nông”<sup>1</sup>
          sau thời gian dài biển lùi, nước biển cạn dần, nó chuyển thành vùng
          trũng lầy rồi thành đồng bằng ven sông như hiện nay. Mỗi quá trình đó
          cũng kéo dài hàng mấy chục vạn đến hàng triệu năm. Cũng theo hai tác giả
          trên, khoan sâu xuống lòng đất Hà Nội, vùng Gia Lâm, trong tầng dây 50m
          <u>trầm tích</u> có thể thấy hai lớp đất: từ 39,5m đến 50m là sỏi và cát
          thô, từ 39,5m đến trên cùng là sét và cát mịn. Từ đó, có thể đoán, sông
          Hồng đã qua hai giai đoạn vận động, từ chỗ chảy mạnh, dữ dội (cát thô và
          sỏi lắng đọng), đến chỗ chày êm đềm hơn (sét, cát mịn). Vùng đất Từ
          Liêm, trong khuôn viên Đại học Sư phạm Hà Nội, khoan sâu 48,87m cho thấy
          khá rõ đặc điểm trầm tích của cửa sông, cát và bùn dày tới 20m. Biển
          rút, nước sông Hồng nặng phù sa đã bồi tích, “thương hải biến vi tang
          điền" (bãi biển đã biến thành nương dâu), đồng bằng Hà Nội được hình
          thành <u>như vậy</u>.</strong></p>
        <p>(Nguyễn Thị Bích Hà, <em>Hà Nội con người lịch sử văn hóa</em>,</p>
        <p>NXB Đại học Sư phạm, 2013, trang 19)</p>
        <p style={{ marginTop: '16px' }}>Việc tác giả trích dẫn kết quả nghiên cứu của hai tác giả Trần Quốc Vượng và Vũ Tuấn Sán trong cuốn <em>Hà Nội nghìn xưa</em> có tác dụng gì?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Làm sáng tỏ cho ý kiến: đồng bằng Hà Nội được hình thành do quá trình bồi tụ của phù sa sông Hồng",
      b: "Đảm bảo độ tin cậy cho kết luận: sông Hồng đã trải qua hai giai đoạn vận động",
      c: "Chứng minh cho quan điểm: lịch sử hình thành Hà Nội gắn liền với sự hình thành vùng châu thổ Bắc Bộ",
      d: "Tăng tính thuyết phục cho các thông tin được đưa ra trong đoạn trích"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 69,
    content:
      <div>
        <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 16 đến
          20:</strong></p>
        <p><strong>Lịch sử hình thành Hà Nội gắn liền với sự hình thành vùng
          châu thổ Bắc Bộ, miền lưu vực sông Hồng. Theo nghiên cứu của hai tác giả
          Trần Quốc Vượng và Vũ Tuấn Sán trong cuốn <em>Hà Nội nghìn xưa</em> thì
          cách đây hàng chục triệu năm, “Hà Nội là một đáy biển nông”<sup>1</sup>
          sau thời gian dài biển lùi, nước biển cạn dần, nó chuyển thành vùng
          trũng lầy rồi thành đồng bằng ven sông như hiện nay. Mỗi quá trình đó
          cũng kéo dài hàng mấy chục vạn đến hàng triệu năm. Cũng theo hai tác giả
          trên, khoan sâu xuống lòng đất Hà Nội, vùng Gia Lâm, trong tầng dây 50m
          <u>trầm tích</u> có thể thấy hai lớp đất: từ 39,5m đến 50m là sỏi và cát
          thô, từ 39,5m đến trên cùng là sét và cát mịn. Từ đó, có thể đoán, sông
          Hồng đã qua hai giai đoạn vận động, từ chỗ chảy mạnh, dữ dội (cát thô và
          sỏi lắng đọng), đến chỗ chày êm đềm hơn (sét, cát mịn). Vùng đất Từ
          Liêm, trong khuôn viên Đại học Sư phạm Hà Nội, khoan sâu 48,87m cho thấy
          khá rõ đặc điểm trầm tích của cửa sông, cát và bùn dày tới 20m. Biển
          rút, nước sông Hồng nặng phù sa đã bồi tích, “thương hải biến vi tang
          điền" (bãi biển đã biến thành nương dâu), đồng bằng Hà Nội được hình
          thành <u>như vậy</u>.</strong></p>
        <p>(Nguyễn Thị Bích Hà, <em>Hà Nội con người lịch sử văn hóa</em>,</p>
        <p>NXB Đại học Sư phạm, 2013, trang 19)</p>
        <p style={{ marginTop: '16px' }}>Từ “<strong>như vậy</strong>” trong đoạn trích thay thế cho nội dung nào?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Khi biển rút, nước sông Hồng chở nặng phù sa đã bồi tích thành vùng đồng bằng Hà Nội như hiện nay",
      b: "“Thương hải biến vi tang điền” - Bãi biển đã biến thành nương dâu",
      c: "Sau thời gian dài biển lùi, nước biển cạn dần, nó chuyển thành vùng trũng lầy rồi thành đồng bằng",
      d: "Sông Hồng đã qua hai giai đoạn vận động, từ chỗ chảy mạnh, dữ dội, đến chỗ chảy êm đềm hơn"
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 70,
    content:
      <div>
        <p><strong>Đọc đoạn trích sau đây và trả lời các câu hỏi từ 16 đến
          20:</strong></p>
        <p><strong>Lịch sử hình thành Hà Nội gắn liền với sự hình thành vùng
          châu thổ Bắc Bộ, miền lưu vực sông Hồng. Theo nghiên cứu của hai tác giả
          Trần Quốc Vượng và Vũ Tuấn Sán trong cuốn <em>Hà Nội nghìn xưa</em> thì
          cách đây hàng chục triệu năm, “Hà Nội là một đáy biển nông”<sup>1</sup>
          sau thời gian dài biển lùi, nước biển cạn dần, nó chuyển thành vùng
          trũng lầy rồi thành đồng bằng ven sông như hiện nay. Mỗi quá trình đó
          cũng kéo dài hàng mấy chục vạn đến hàng triệu năm. Cũng theo hai tác giả
          trên, khoan sâu xuống lòng đất Hà Nội, vùng Gia Lâm, trong tầng dây 50m
          <u>trầm tích</u> có thể thấy hai lớp đất: từ 39,5m đến 50m là sỏi và cát
          thô, từ 39,5m đến trên cùng là sét và cát mịn. Từ đó, có thể đoán, sông
          Hồng đã qua hai giai đoạn vận động, từ chỗ chảy mạnh, dữ dội (cát thô và
          sỏi lắng đọng), đến chỗ chày êm đềm hơn (sét, cát mịn). Vùng đất Từ
          Liêm, trong khuôn viên Đại học Sư phạm Hà Nội, khoan sâu 48,87m cho thấy
          khá rõ đặc điểm trầm tích của cửa sông, cát và bùn dày tới 20m. Biển
          rút, nước sông Hồng nặng phù sa đã bồi tích, “thương hải biến vi tang
          điền" (bãi biển đã biến thành nương dâu), đồng bằng Hà Nội được hình
          thành <u>như vậy</u>.</strong></p>
        <p>(Nguyễn Thị Bích Hà, <em>Hà Nội con người lịch sử văn hóa</em>,</p>
        <p>NXB Đại học Sư phạm, 2013, trang 19)</p>
        <p style={{ marginTop: '16px' }}>Từ “<strong>trầm tích</strong>” trong đoạn trích gần nghĩa hơn cả với từ ngữ nào?</p>
      </div>,
    type: "multiple_choice",
    options: {
      a: "Nhũ đá",
      b: "Hóa thạch",
      c: "Di thể",
      d: "Thạch anh"
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 71,
    content: <p>Xác định một từ/ cụm từ SAI về ngữ pháp/ hoặc ngữ nghĩa/ logic/ phong cách: Đại bàng Mã Lai được coi là loài chim <em>săn bắt</em>, thức ăn chủ yếu của nó là động vật <em>có vú</em> như dơi, khỉ, chuột, sóc...</p>,
    type: "multiple_choice",
    options: {
      a: "được coi",
      b: "săn bắt",
      c: "chủ yếu",
      d: "có vú"
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 72,
    content: <p>Xác định một từ/ cụm từ SAI về ngữ pháp/ hoặc ngữ nghĩa/ logic/ phong cách: Khi ý thức cách mạng, ý thức trách nhiệm đã <em>nhiễm</em> sâu vào đảng viên thì việc gì cũng dễ dàng, thuận lợi.</p>,
    type: "multiple_choice",
    options: {
      a: "ý thức",
      b: "trách nhiệm",
      c: "nhiễm",
      d: "dễ dàng"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 73,
    content: <p>Xác định một từ/ cụm từ SAI về ngữ pháp/ hoặc ngữ nghĩa/ logic/ phong cách: Dù <em>bị biệt đãi</em> trong tù ra sao, Huấn Cao vẫn rất hiên ngang trước cái chết.</p>,
    type: "multiple_choice",
    options: {
      a: "bị",
      b: "trong",
      c: "vẫn",
      d: "trước"
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 74,
    content: <p>Xác định một từ/ cụm từ SAI về ngữ pháp/ hoặc ngữ nghĩa/ logic/ phong cách: Cô chăm sóc cho anh từng li từng tí <em>nhưng</em> anh <em>cũng</em> vô cùng cảm động trước tình cảm của cô dành cho mình.</p>,
    type: "multiple_choice",
    options: {
      a: "cho",
      b: "nhưng",
      c: "cũng",
      d: "của"
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 75,
    content: <p>Xác định một từ/ cụm từ SAI về ngữ pháp/ hoặc ngữ nghĩa/ logic/ phong cách: Qua truyện ngắn “Chiếc thuyền ngoài xa\", Nguyễn Minh Châu đã gửi gắm thông điệp: Nhà văn cần phải thường xuyên <em>xâm nhập</em> đời sống thực tế của xã hội.</p>,
    type: "multiple_choice",
    options: {
      a: "gửi gắm",
      b: "thông điệp",
      c: "xâm nhập",
      d: "thực tế"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 76,
    content: <p>Chọn một từ mà nghĩa của nó KHÔNG cùng nhóm với các từ còn lại:</p>,
    type: "multiple_choice",
    options: {
      a: "học vẹt",
      b: "học gạo",
      c: "học tập",
      d: "học vần"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 77,
    content: <p>Chọn một từ mà nghĩa của nó KHÔNG cùng nhóm với các từ còn lại:</p>,
    type: "multiple_choice",
    options: {
      a: "bạn đời",
      b: "bạn đường",
      c: "bạn học",
      d: "bạn bè"
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 78,
    content: <p>Chọn một từ mà nghĩa của nó KHÔNG cùng nhóm với các từ còn lại:</p>,
    type: "multiple_choice",
    options: {
      a: "xanh lét",
      b: "đỏ cờ",
      c: "tím ngắt",
      d: "vàng ruộm"
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 79,
    content: <p>Chọn một từ mà nghĩa của nó KHÔNG cùng nhóm với các từ còn lại:</p>,
    type: "multiple_choice",
    options: {
      a: "quăng",
      b: "quẳng",
      c: "lia",
      d: "kéo"
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 80,
    content: <p>Tác phẩm nào KHÔNG cùng thể loại với tác phẩm còn lại:</p>,
    type: "multiple_choice",
    options: {
      a: "Hồn Trương Ba da hàng thịt",
      b: "Bắc Sơn",
      c: "Ai đã đặt tên cho dòng sông",
      d: "Vĩnh biệt Cửu trùng đài"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 81,
    content: <p>Chọn từ/ cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây: Anh ấy luôn giữ tinh thần ……….. trước mọi sóng gió cuộc đời.</p>,
    type: "multiple_choice",
    options: {
      a: "vững bền",
      b: "vững chãi",
      c: "vững vàng",
      d: "vững chắc"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 82,
    content: <p>Chọn từ/ cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây: Chúng ta có trách nhiệm...... và phát huy vẻ đẹp truyền thống của văn hóa dân tộc.</p>,
    type: "multiple_choice",
    options: {
      a: "bảo toàn",
      b: "bảo tồn",
      c: "bảo vệ",
      d: "bảo đảm"
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 83,
    content: <p>Chọn từ/ cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây: Chiếc khăn rơi xuống lộ ra gương mặt đẹp với làn da..... của cô gái.</p>,
    type: "multiple_choice",
    options: {
      a: "xanh xao",
      b: "xanh xanh",
      c: "xanh lơ",
      d: "xanh biếc"
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 84,
    content: <p>Chọn từ/ cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây: Một mình anh.... lại ba tên cướp.</p>,
    type: "multiple_choice",
    options: {
      a: "chống cự",
      b: "chống đối",
      c: "chống lưng",
      d: "chống chếnh"
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 85,
    content: <p>Chọn từ/ cụm từ thích hợp nhất để điền vào chỗ trống trong câu dưới đây: Có hai cách ... trái ngược khi bị ô tô đỗ chắn cửa.</p>,
    type: "multiple_choice",
    options: {
      a: "hành động",
      b: "hành tung",
      c: "hành vi",
      d: "hành xử"
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 86,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p>“<em><strong>Sao anh không về chơi thôn Vĩ?</strong></em></p>
      <p><em><strong>Nhìn nắng hàng cau nắng mới lên</strong></em></p>
      <p><em><strong>Vườn ai mướt quá xanh như ngọc</strong></em></p>
      <p><strong><em>Lá trúc che ngang mặt chữ điền</em>.”</strong></p>
      <p>(Hàn Mạc Tử, <em>Đây thôn Vĩ Dạ</em>, Ngữ văn 11, tập 2,</p>
      <p>NXB Giáo dục Việt Nam, 2020)</p>
      <p><strong>Biện pháp tu từ nào được sử dụng trong câu thơ
        sau:</strong></p>
      <p><strong>“Nhìn nắng hàng cau nắng mới lên"</strong></p>
    </>,
    type: "multiple_choice",
    options: {
      a: "Điệp âm",
      b: "Điệp cấu trúc",
      c: "Điệp từ",
      d: "Điệp ngữ"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 87,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p><strong>“Làm thơ, ấy là dùng lời và những dấu hiệu thay cho lời nói,
        tức là chữ – để thể hiện một trạng thái tâm lí đang rung chuyển khác
        thường. Làm thơ là đang sống, không phải chỉ nhìn lại sự sống, làm một
        câu thơ yêu, tâm hồn cũng rung động như khi có người yêu trước mặt. Bài
        thơ là những câu, những lời diễn lên, làm sống ngay lên một tình cảm,
        một nỗi niềm trong lòng người đọc. Ta nói truyền sang hình như người đọc
        chỉ đứng yên mà nhận. Nhưng kì thực, cái trạng thái tâm lí truyền sang
        ấy là người đọc tự tạo cho mình, khi nhìn những chữ, khi nghe những lời,
        khi mọi sợi dây của tâm hồn rung lên vì chạm thấy những hình ảnh, những
        ý nghĩa, những mong muốn, những tình cảm mà lời và chữ của bài thơ kéo
        theo đằng sau như vầng sáng xung quanh ngọn lửa".</strong></p>
      <p>(Nguyễn Đình Thi, <em>Mấy ý nghĩ về thơ</em>, Ngữ văn 12, tập
        một,</p>
      <p>NXB Giáo dục Việt Nam, 2020)</p>
      <p>Đoạn trích trên được viết theo phương thức biểu đạt chính nào?</p>
    </>,
    type: "multiple_choice",
    options: {
      a: "Tự sự",
      b: "Thuyết minh",
      c: "Biểu cảm",
      d: "Nghị luận"
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 88,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p><em><strong>“Tương tư thức mấy đêm rồi,</strong></em></p>
      <p><em><strong>Biết cho ai, hỏi ai người biết cho!</strong></em></p>
      <p><em><strong>Bao giờ bến mới gặp đò?</strong></em></p>
      <p><em><strong>Hoa khuê các bướm giang hồ gặp nhau?”</strong></em></p>
      <p><strong>(Nguyễn Bính, <em>Tương tư</em>, Ngữ văn lớp 11, tập hai, NXB
        Giáo dục Việt Nam, 2020)</strong></p>
      <p><strong>Đoạn trích tái hiện cảm xúc nào của nhân vật trữ
        tình?</strong></p>
    </>,
    type: "multiple_choice",
    options: {
      a: "Mong mỏi",
      b: "Hờn trách",
      c: "Ghen tuông",
      d: "Say mê"
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 89,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p><strong>“Ông đỗ phó bảng năm Tân Sửu (1901), làm quan một thời gian
        ngắn rồi từ quan, đi làm cách mạng... Năm 1908, ông bị bắt đày đi Côn
        Đảo... Năm 1925, ông về Sài Gòn, diễn thuyết được vài lần, sau đó ốm
        nặng rồi mất".</strong></p>
      <p>(<em>Ngữ văn 11</em>, tập một, NXB Giáo dục Việt Nam, 2021, trang
        84)</p>
      <p>“Ông” trong đoạn trích là tác giả nào dưới đây?</p>
    </>,
    type: "multiple_choice",
    options: {
      a: "Phan Bội Châu",
      b: "Phan Chu Trinh",
      c: "Phan Huy Chú",
      d: "Phan Kế Bính"
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 90,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p><em><strong>Dữ dội và dịu êm.</strong></em></p>
      <p><em><strong>Ồn ào và lặng lẽ.</strong></em></p>
      <p><em><strong>Sông không hiểu nổi mình.</strong></em></p>
      <p><em><strong>Sóng tìm ra tận bể</strong></em></p>
      <p>(Xuân Quỳnh, <em>Sóng</em>, Ngữ văn 12, tập một, NXB Giáo dục Việt
        Nam, 2020)</p>
      <p>Yếu tố nghệ thuật đặc sắc trong đoạn trích trên là:</p>
    </>,
    type: "multiple_choice",
    options: {
      a: "Sử dụng từ ngữ độc đáo",
      b: "Sử dụng phép lặp từ",
      c: "Sử dụng phép tăng tiến",
      d: "Sử dụng phép nhân hóa và ẩn dụ"
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 91,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p>“<strong>Trần Văn Sửu ngồi khoanh tay ngó dòng nước chảy một hồi rồi
        nói trong trí rằng: “Bây giờ mình còn sống nữa làm gì! Bấy lâu nay mình
        lăn lóc chịu cực khổ mà sống, ấy là vì mình thương con, mình sợ nó không
        hiểu việc xưa rồi nó trở oán mình, mình sợ nó bơ vơ đói rách, mà tội
        nghiệp thân nó. Bây giờ mình biết rõ nó thương mình, nó còn kính trọng
        mình, mà nó lại gần được giàu có sung sướng hết thảy nữa, vậy thì nên
        chết rồi, chết mới quên hết việc cũ được, chết đặng hết buồn rầu cực khổ
        nữa."</strong></p>
      <p><strong>(Hồ Biểu Chánh, <em>Cha con nghĩa nặng</em>, Ngữ văn lớp 11,
        tập một, NXB Giáo dục Việt Nam, 2020)</strong></p>
      <p><strong>Từ “đặng” trong đoạn trích trên đồng nghĩa với từ nào trong
        các từ sau:</strong></p>
    </>,
    type: "multiple_choice",
    options: {
      a: "mới",
      b: "thì",
      c: "để",
      d: "là"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 92,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p><em>"<strong>Bác đã đi rồi sao, Bác ơi!</strong></em></p>
      <p><em><strong>Mùa thu đang đẹp, nắng xanh trời</strong></em></p>
      <p><em><strong>Miền Nam đang thắng, mơ ngày hội</strong></em></p>
      <p><em><strong>Rước Bác vào thăm, thấy Bác cười!"</strong></em></p>
      <p><strong>(Tố Hữu, <em>Bác ơi</em>, Ngữ văn lớp 12, tập một, NXB Giáo
        dục Việt Nam, 2020)</strong></p>
      <p><strong>Dòng nào nói không đúng về nghệ thuật của đoạn trích
        trên?</strong></p>
    </>,
    type: "multiple_choice",
    options: {
      a: "Sử dụng câu cảm thán",
      b: "Sử dụng phép điệp cấu trúc",
      c: "Sử dụng biện pháp ẩn dụ",
      d: "Sử dụng phép liệt kê"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 93,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p><strong>“Cuộc đối thoại tiếp diễn như sau:</strong></p>
      <p><strong>- Thế em nghĩ thế nào về người khách của chúng ta? – Người
        con trai hỏi, ngỡ tôi là một đấng hoàng thượng và tưởng rằng tôi không
        hiểu họ nói gì với nhau.</strong></p>
      <p><strong>- Hắn còn làm mình bật cười hơn nữa cơ lúc hắn đeo lên người
        hắn đủ cả bộ lụa là, đủ cả bộ hạt cườm. – Người bạn gái anh ta trả
        lời."</strong></p>
      <p><strong>(Nguyễn Ái Quốc, <em>Vi hành</em>, Ngữ văn lớp 11, tập một,
        NXB Giáo dục Việt Nam, 2020)</strong></p>
      <p><strong>Đôi nam nữ trong đoạn trích trên đã nhầm nhân vật “tôi” là
        ai?</strong></p>
    </>,
    type: "multiple_choice",
    options: {
      a: "Vua Bảo Đại",
      b: "Vua Đồng Khánh",
      c: "Vua Khải Định",
      d: "Vua Duy Tân"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 94,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p><em><strong>“Làm chi để tiếng về sau,</strong></em></p>
      <p><em><strong>Nghìn năm ai có khen đâu Hoàng Sào!</strong></em></p>
      <p><em><strong>Sao bằng lộc trọng quyền cao,</strong></em></p>
      <p><em><strong>Công danh ai dứt lối nào cho qua?</strong></em></p>
      <p><em><strong>Nghe lời nàng nói mặn mà”</strong></em></p>
      <p><strong>(Nguyễn Du, Truyện Kiều)</strong></p>
      <p><strong>Câu thơ <em>“Nghìn năm ai có khen đâu Hoàng Sào!”</em> có sử
        dụng biện pháp nghệ thuật gì?</strong></p>
    </>,
    type: "multiple_choice",
    options: {
      a: "Điển tích, điển cố",
      b: "Ước lệ, tượng trưng",
      c: "Nhân hóa, so sánh",
      d: "Ẩn dụ, hoán dụ"
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 95,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p><em><strong>Thuở nhỏ tôi ra cống Na câu cá</strong></em></p>
      <p><em><strong>níu váy bà đi chợ Bình Lâm</strong></em></p>
      <p><em><strong>bắt chim sẻ ở vành tai tượng Phật</strong></em></p>
      <p><em><strong>và đôi khi ăn trộm nhãn chùa Trần</strong></em></p>
      <p><em><strong>Thuở nhỏ tôi lên chơi đền Cây Thị</strong></em></p>
      <p><em><strong>chân đất đi đêm xem lễ đền Sòng</strong></em></p>
      <p><em><strong>mùi huệ trắng quyện khói trầm thơm lắm</strong></em></p>
      <p><em><strong>điệu hát văn lảo đảo bóng cô đồng</strong></em></p>
      <p><strong>(Nguyễn Duy, <em>Đò Lèn</em>, Ngữ văn lớp 12, tập một, NXB
        Giáo dục Việt Nam, 2020)</strong></p>
      <p><strong>Các địa danh xuất hiện trong đoạn trích gắn với điều
        gì?</strong></p>
    </>,
    type: "multiple_choice",
    options: {
      a: "Những nơi mà nhân vật trữ tình đã sống và chiến đấu",
      b: "Những trò chơi, niềm vui tuổi thơ của nhân vật trữ tình",
      c: "Những kỉ niệm gắn liền với người bà của nhân vật trữ tình",
      d: "Những cơ cực, vất vả của người bà"
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 96,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p><em><strong>"Tây Ban Nha</strong></em></p>
      <p><em><strong>hát nghêu ngao</strong></em></p>
      <p><em><strong>bỗng kinh hoàng</strong></em></p>
      <p><em><strong>áo choàng bê bết đỏ</strong></em></p>
      <p><em><strong>Lor-ca bị điệu về bãi bắn</strong></em></p>
      <p><em><strong>Chàng đi như người mộng du”</strong></em></p>
      <p>(Thanh Thảo, <em>Đàn ghi ta của Lor-ca</em>, Ngữ văn 12, tập một,</p>
      <p>NXB Giáo dục Việt Nam, 2010)</p>
      <p><strong>Ý chính của đoạn trích là gì?</strong></p>
    </>,
    type: "multiple_choice",
    options: {
      a: "Cảnh bọn phát xít đưa Lor-ca ra pháp trường",
      b: "Sự bi phẫn, đau đớn của người dân Tây Ban Nha trước cái chết của Lor-ca",
      c: "Hình ảnh người nghệ sĩ Lor-ca trong cái chết đầy bi tráng",
      d: "Phong thái lãng mạn của người nghệ sĩ Lor-ca khi đối diện với cái chết"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 97,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p><strong>“Ngày Tết, Mị cũng uống rượu. Mị lén lấy hũ rượu, cứ uống ừng
        ực từng bát. Rồi say, Mị lịm mặt ngồi đấy nhìn mọi người nhảy đồng,
        người hát, nhưng lòng Mị thì đang sống về ngày trước. Tai Mị văng vẳng
        tiếng sáo gọi bạn đầu làng. Ngày trước, Mị thổi sáo giỏi. Mùa xuân này,
        Mị uống rượu bên bếp và thổi sáo. Mị uốn chiếc lá trên môi, thổi lá cũng
        hay như thổi sáo. Có biết bao nhiêu người mê, ngày đêm đã thổi sáo đi
        theo Mị."</strong></p>
      <p><strong>(Tô Hoài, <em>Vợ chồng A Phủ</em>, Ngữ văn 12, tập hai, NXB
        Giáo dục Việt Nam, 2011)</strong></p>
      <p><strong>Khát vọng tình yêu, khát vọng tuổi trẻ, kí ức về quá khứ tươi
        đẹp đã được đánh thức trong lòng Mị thông qua chi tiết nào?</strong></p>
    </>,
    type: "multiple_choice",
    options: {
      a: "Hơi men cay nồng của rượu",
      b: "Tiếng sáo thiết tha bổi hổi",
      c: "Cảnh mọi người nhảy đồng và hát",
      d: "Không khí mùa xuân trên rẻo cao"
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 98,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p><em><strong>“Sóng gợn tràng giang buồn điệp điệp,</strong></em></p>
      <p><em><strong>Con thuyền xuôi mái nước song song,</strong></em></p>
      <p><em><strong>Thuyền về nước lại, sầu trăm ngả,</strong></em></p>
      <p><em><strong>Củi một cành khô lạc mấy dòng.”</strong></em></p>
      <p>(Huy Cận, <em>Tràng giang</em>, Ngữ văn 11, tập hai, NXB Giáo dục
        Việt Nam, 2010)</p>
      <p><strong>Giọng điệu chủ đạo của toàn bộ đoạn trích là gì?</strong></p>
    </>,
    type: "multiple_choice",
    options: {
      a: "Đều đều, triền miên",
      b: "Da diết, khắc khoải",
      c: "Trầm lắng, buồn tẻ",
      d: "Sầu muộn, ưu tư"
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 99,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p><strong>“Từ ngã ba Tuần, sông Hương theo hướng nam bắc qua điện Hòn
        Chén; vấp Ngọc Trản, nó chuyển hướng sang tây bắc, vòng qua thềm đất bãi
        Nguyệt Biều, Lương Quán rồi đột ngột vẽ một hình cung thật tròn về phía
        đông bắc, ôm lấy chân đồi Thiên Mụ, xuôi dần về Huế. Từ Tuần về đây,
        sông Hương vẫn đi trong dư vang của Trường Sơn, vượt qua một lòng vực
        sâu dưới chân núi Ngọc Trân để sắc nước trở nên xanh thẳm, và từ đó nó
        trôi đi giữa hai dãy đồi sừng sững như thành quách, với những điểm cao
        đột ngột như Vọng Cảnh, Tam Thai, Lựu Bảo mà từ đó, người ta luôn luôn
        nhìn thấy dòng sông mềm như tấm lụa, với những chiếc thuyền xuôi ngược
        chỉ bé vừa bằng con thoi."</strong></p>
      <p>(Hoàng Phủ Ngọc Tường, <em>Ai đã đặt tên cho dòng sông?</em>, Ngữ văn
        12, tập một,</p>
      <p>NXB Giáo dục Việt Nam, 2010)</p>
      <p><strong>Những biện pháp tu từ nghệ thuật nào được sử dụng trong đoạn
        trích?</strong></p>
    </>,
    type: "multiple_choice",
    options: {
      a: "Nhân hóa và so sánh",
      b: "Điệp từ và điệp ngữ",
      c: "So sánh và ẩn dụ",
      d: "Hoán dụ và nhân hóa"
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 100,
    content: <>
      <p><strong>Đọc đoạn trích sau đây và trả lời câu hỏi:</strong></p>
      <p><strong>“Cúng mẹ và cơm nước xong, mấy chị em, chú cháu thu xếp đồ
        đạc dời nhà. Chị Chiến ra đứng giữa sân, kéo cái khăn trên cổ xuống,
        cũng xắn tay áo để lộ hai bắp tay tròn vo sạm đỏ màu cháy nắng, rồi dang
        cả thân người to và chắc nịch của mình nhấc bổng một đầu bàn thờ má lên.
        Việt ghé vào một đầu. Nào, đưa má sang ở tạm bên nhà chú, chúng con đi
        đánh giặc trả thù cho ba má, đến chừng nước nhà độc lập con lại đưa má
        về. Việt khiêng trước. Chị Chiến khiêng bịch bịch phía sau. Nghe tiếng
        chân chị, Việt thấy thương chị lạ. Lần đầu tiên Việt mới thấy lòng mình
        rõ như thế. Còn mối thù thằng Mĩ thì có thể rờ thấy được, vì nó đang đè
        nặng ở trên vai.”</strong></p>
      <p>(Nguyễn Thi, <em>Những đứa con trong gia đình</em>, Ngữ văn 12, tập
        hai,</p>
      <p>NXB Giáo dục Việt Nam, 2011)</p>
      <p><strong>Chủ đề nổi bật bao trùm đoạn trích là gì?</strong></p>
    </>,
    type: "multiple_choice",
    options: {
      a: "Hai chị em Việt và Chiến thu xếp việc nhà trước ngày lên đường tòng quân",
      b: "Chú Năm và Chiến chuẩn bị trước cho việc cúng giỗ ba má hàng năm",
      c: "Việt thu xếp sao cho bàn thờ ba má được ấm áp khói hương khi vắng hai chị em",
      d: "Hai chị em Chiến và Việt khiêng bàn thờ má sang gửi nhờ nhà chú Năm"
    },
    correctAnswer: "d",
    showResult: true
  }
]

const mockQuestionsHoa: Question[] = [
  {
    id: 101,
    content: <p>Đặt hai hòn bi thép nhỏ <InlineMath math="\mathbf{A}" /> và <InlineMath math="\mathbf{B}" /> không nhiễm điện, gần nhau, trên một tấm thủy tinh phẳng nhẵn, nằm ngang. Hiện tượng xảy ra sau khi tích điện cho một hòn bi <InlineMath math="\mathbf{B}" /> là</p>,
    type: "multiple_choice",
    options: {
      a: <span>Hai hòn bi đẩy nhau.</span>,
      b: <span>Hai hòn bi đẩy nhau, sau đó lại hút nhau.</span>,
      c: <span>Hai hòn bi hút nhau, sau đó lại đẩy nhau.</span>,
      d: <span>Hòn bi <InlineMath math="A" /> đứng yên, hòn bi <InlineMath math="B" /> chuyển động ra xa hòn bi <InlineMath math="A" />.</span>
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 102,
    content: <p>Phương trình li độ của một sóng ngang trên một sợi dây mềm, rất dài, có dạng: <InlineMath math="\mathbf{u = 4}\text{cos}\left( \mathbf{\pi t + 0,04\pi x} \right)" />, trong đó <InlineMath math="\mathbf{u}" /> và <InlineMath math="\mathbf{x}" /> tính bằng <InlineMath math="\text{cm}" />, <InlineMath math="\mathbf{t}" /> tính bằng <InlineMath math="\mathbf{s}" />. Tốc độ của sóng là</p>,
    type: "multiple_choice",
    options: {
      a: <span>12,5 cm/s</span>,
      b: <span>22,5 cm/s</span>,
      c: <span>50,0 cm/s</span>,
      d: <span>25,0 cm/s</span>
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 103,
    content: <p>Thực hiện thí nghiệm giao thoa khe Y-âng với ánh sáng có bước sóng <InlineMath math="\mathbf{\lambda}" />. Khoảng cách giữa hai khe hẹp <InlineMath math="\mathbf{F}_{\mathbf{1}}\mathbf{,}\text{~}\text{F}_{\mathbf{2}}" /> là <InlineMath math="\mathbf{1,0}\text{~mm}" />. Trên màn quan sát cách mặt phẳng hai khe một đoạn <InlineMath math="\mathbf{D}" />, tại điểm <InlineMath math="\mathbf{M}" /> có vân sáng bậc 6. Giữ cố định các điều kiện khác, di chuyển dần màn quan sát dọc theo đường thẳng vuông góc với mặt phẳng chứa hai khe ra xa cho đến khi vân giao thoa tại <InlineMath math="\mathbf{M}" /> chuyển thành vân tối lần thứ hai thì khoảng dịch màn là <InlineMath math="\mathbf{80}\text{~cm}" />. Giá trị của <InlineMath math="\mathbf{D}" /> là</p>,
    type: "multiple_choice",
    options: {
      a: <span>2,4 m</span>,
      b: <span>2,0 m</span>,
      c: <span>2,5 m</span>,
      d: <span>1,6 m</span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 104,
    content: <p>Trong các ứng dụng dưới đây, ứng dụng không phải của hiện tượng phản xạ toàn phần là</p>,
    type: "multiple_choice",
    options: {
      a: <span>Cáp quang internet</span>,
      b: <span>Kính tiềm vọng</span>,
      c: <span>Kính dành cho mắt bị tật cận thị</span>,
      d: <span>Cáp dẫn sáng trong nội soi</span>
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 105,
    content: <p>Trong một hộ gia đình có sử dụng một bếp điện từ loại <InlineMath math="\left( \mathbf{220}\text{~V}\mathbf{- 2000}\text{~W} \right)" />, bếp được nối vào mạng điện xoay chiều có <InlineMath math="\mathbf{U = 220}\text{~V}" />. Trung bình mỗi ngày hộ gia đình sử dụng bếp 1 giờ và đơn giá tiền điện là <InlineMath math="\mathbf{1.678}" /> VNĐ/ 1 số điện. Số tiền phải trả riêng cho việc sử dụng bếp này trong 1 năm (365 ngày) gần bằng</p>,
    type: "multiple_choice",
    options: {
      a: <span>1225000 VNĐ</span>,
      b: <span>1325000 VNĐ</span>,
      c: <span>1200000 VNĐ</span>,
      d: <span>1500000 VNĐ</span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 106,
    content: <>
      <p>Một hạt prôtôn đang chuyển động với vận tốc <InlineMath math="\mathbf{v =}\ \mathbf{2.1}\mathbf{0}^{\mathbf{5}}\text{~m}\mathbf{/}\mathbf{s}" /> thì bay vào miền có từ trường đều và điện trường đều theo phương vuông góc với các đường sức từ. Cảm ứng từ <InlineMath math="\overrightarrow{\mathbf{B}}" /> có chiều như hình vẽ và có độ lớn <InlineMath math="\mathbf{B =}\ \mathbf{0,02T}" />. Xác định véctơ cường độ điện trường <InlineMath math="\overrightarrow{\mathbf{E}}" /> để cho prôtôn chuyển động thẳng đều theo hướng ban đầu khi vào trong vùng có từ trường đó?</p>
      <Image src={cau6de3} alt="exams" width={180} height={180} />
    </>,
    type: "multiple_choice",
    options: {
      a: <span>Véctơ <InlineMath math="\overrightarrow{\mathbf{E}}" /> hướng thẳng đứng từ trên xuống dưới và có độ lớn <InlineMath math="\mathbf{E = 4000}\text{~V}\mathbf{/}\mathbf{m}" /></span>,
      b: <span>Véctơ <InlineMath math="\overrightarrow{E}" /> hướng thẳng đứng từ trên xuống dưới và có độ lớn <InlineMath math="E = 2000\text{~V}/m" /></span>,
      c: <span>Véctơ <InlineMath math="\overrightarrow{E}" /> hướng thẳng đứng từ dưới lên trên và có độ lớn <InlineMath math="E = 4000\text{~V}/m" /></span>,
      d: <span>Véctơ <InlineMath math="\overrightarrow{E}" /> hướng thẳng đứng từ dưới lên trên và có độ lớn <InlineMath math="E = 2000\text{~V}/m" /></span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 107,
    content: <p>Cho mạch điện xoay chiều gồm: <InlineMath math="\mathbf{R = 20\Omega;L =}\frac{\sqrt{\mathbf{6}}}{\mathbf{4\pi}}\mathbf{H}" /> và <InlineMath math="\mathbf{C =}\frac{\mathbf{1}\mathbf{0}^{\mathbf{- 2}}}{\mathbf{24\pi}\sqrt{\mathbf{6}}}\text{~F}" />. Biết điện áp tức thời giữa hai đầu mạch là <InlineMath math="\mathbf{u = 100}\text{cos}\left( \mathbf{2\pi ft -}\frac{\mathbf{\pi}}{\mathbf{3}} \right)\text{~(V)}" />. Để công suất tiêu thụ của đoạn mạch là <InlineMath math="\mathbf{100W}" /> thì giá trị của <InlineMath math="\mathbf{f}" /> là</p>,
    type: "multiple_choice",
    options: {
      a: <span>50 Hz</span>,
      b: <span>60 Hz</span>,
      c: <span>100 Hz</span>,
      d: <span>120 Hz</span>
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 108,
    content: <p>Một nguồn phát ra ánh sáng có bước sóng <InlineMath math="\mathbf{662,5}\text{~nm}" /> với công suất là <InlineMath math="1,5\cdot10^{-4}\text{~W}" />. Lấy <InlineMath math="\mathbf{h = 6,625\cdot1}\mathbf{0}^{\mathbf{- 34}}\text{~J}\mathbf{.}\mathbf{s}" /> và <InlineMath math="\mathbf{c = 3\cdot1}\mathbf{0}^{\mathbf{8}}\text{~m}\mathbf{/}\mathbf{s}" />. Số phôtôn nguồn phát ra trong <InlineMath math="\mathbf{1}\text{~s}" /> là</p>,
    type: "multiple_choice",
    options: {
      a: <span><InlineMath math="5·10^{14}" /></span>,
      b: <span><InlineMath math="6·10^{14}" /></span>,
      c: <span><InlineMath math="4·10^{14}" /></span>,
      d: <span><InlineMath math="3·10^{14}" /></span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 109,
    content: <p>Chọn câu sai. Tia gamma</p>,
    type: "multiple_choice",
    options: {
      a: <span>Có bản chất là sóng điện từ.</span>,
      b: <span>Có khả năng đâm xuyên rất mạnh.</span>,
      c: <span>Không bị lệch trong điện trường hoặc từ trường.</span>,
      d: <span>Có tần số nhỏ hơn tần số của tia tử ngoại.</span>
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 110,
    content: <p>Một con lắc lò xo gồm một vật có khối lượng <InlineMath math="\mathbf{m}" /> treo phía dưới một lò xo nhẹ có độ cứng <InlineMath math="\mathbf{k}" />. Con lắc được kích thích cho dao động điều hoà theo phương thẳng đứng tại nơi có gia tốc trọng trường <InlineMath math="\mathbf{g}" />. Trong quá trình dao động, lực đàn hồi cực đại của lò xo có độ lớn gấp 3 lần độ lớn của lực đàn hồi cực tiểu. Tỉ số độ lớn lực phục hồi cực đại và trọng lực tác dụng lên vật là</p>,
    type: "multiple_choice",
    options: {
      a: <span>0,5</span>,
      b: <span>2,0</span>,
      c: <span>4,0</span>,
      d: <span>1,5</span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 111,
    content: <p>Cho các dung dịch có cùng nồng độ <InlineMath math="\text{mol}\mathbf{/}\mathbf{l}" /> sau: <InlineMath math="\text{HCl}\mathbf{,}\text{C}\text{H}_{\mathbf{3}}\text{COOH}\mathbf{,}\mathbf{H}_{\mathbf{2}}\text{S}\text{O}_{\mathbf{4}}" />. Thứ tự sắp xếp khả năng dẫn điện tăng dần của các dung dịch là:</p>,
    type: "multiple_choice",
    options: {
      a: <span><InlineMath math="\text{HCl} < \text{C}\text{H}_{3}\text{COOH} < H_{2}\text{S}\text{O}_{4}" /></span>,
      b: <span><InlineMath math="\text{HCl} < H_{2}\text{S}\text{O}_{4} < \text{C}\text{H}_{3}\text{COOH}" /></span>,
      c: <span><InlineMath math="\text{C}\text{H}_{3}\text{COOH} < \text{HCl} < H_{2}\text{S}\text{O}_{4}" /></span>,
      d: <span><InlineMath math="H_{2}\text{S}\text{O}_{4} < \text{HCl} < \text{C}\text{H}_{3}\text{COOH}" /></span>
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 112,
    content: <p>Cho phản ứng <InlineMath math="\text{NaOH}\mathbf{+}\text{HCl}\mathbf{\rightarrow}\text{NaCl}\mathbf{+}\mathbf{H}_{\mathbf{2}}\mathbf{O}" />. Phản ứng hóa học nào sau đây có cùng phương trình ion thu gọn với phản ứng trên?</p>,
    type: "multiple_choice",
    options: {
      a: <span><InlineMath math="2\text{KOH} + \text{FeC}\text{l}_{2} \rightarrow \text{Fe}(\text{OH})_{2} + 2\text{KCl}" /></span>,
      b: <span><InlineMath math="\text{NaOH} + \text{NaHC}\text{O}_{3} \rightarrow \text{N}\text{a}_{2}\text{C}\text{O}_{3} + H_{2}O" /></span>,
      c: <span><InlineMath math="\text{NaOH} + \text{N}\text{H}_{4}\text{Cl} \rightarrow \text{NaCl} + \text{N}\text{H}_{3} + H_{2}O" /></span>,
      d: <span><InlineMath math="\text{KOH} + \text{HN}\text{O}_{3} \rightarrow \text{KN}\text{O}_{3} + H_{2}O" /></span>
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 113,
    content: <p>Cho 13,5 gam hỗn hợp các kim loại <InlineMath math="\text{Al}\mathbf{,}\text{Fe}\mathbf{,}\text{Cr}" /> vào lượng dư dung dịch <InlineMath math="\mathbf{H}_{\mathbf{2}}\text{S}\text{O}_{\mathbf{4}}" /> loãng nóng thu được 7,84 lít khí <InlineMath math="\mathbf{H}_{\mathbf{2}}" /> (đktc) và dung dịch <InlineMath math="\mathbf{X}" />. Cô cạn <InlineMath math="\mathbf{X}" /> thu được <InlineMath math="\mathbf{m}" /> gam các muối khan. Biết các phản ứng xảy ra trong điều kiện không có không khí. Giá trị của <InlineMath math="\mathbf{m}" /> là</p>,
    type: "multiple_choice",
    options: {
      a: <span>42,6</span>,
      b: <span>47,1</span>,
      c: <span>48,8</span>,
      d: <span>45,5</span>
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 114,
    content: <p>Peptit nào sau đây không có phản ứng màu biure?</p>,
    type: "multiple_choice",
    options: {
      a: <span>Ala-Gly</span>,
      b: <span>Ala-Ala-Gly-Gly</span>,
      c: <span>Ala-Gly-Gly</span>,
      d: <span>Gly-Ala-Gly</span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 115,
    content: <p>Cho isopentan tác dụng với <InlineMath math="\text{C}\text{l}_{\mathbf{2}}" /> theo tỉ lệ 1:1. Số sản phẩm monoclo tối đa thu được là</p>,
    type: "multiple_choice",
    options: {
      a: <span>2</span>,
      b: <span>3</span>,
      c: <span>4</span>,
      d: <span>5</span>
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 116,
    content: <p>Cho 0,2 mol kim loại <InlineMath math="\mathbf{X}" /> tác dụng với <InlineMath math="\text{C}\text{l}_{\mathbf{2}}" /> thu được 32,5 <InlineMath math="\mathbf{g}" /> muối. Kim loại <InlineMath math="\mathbf{X}" /> là</p>,
    type: "multiple_choice",
    options: {
      a: <span><InlineMath math="\text{Al}(M = 27)" /></span>,
      b: <span><InlineMath math="\text{Mg}(M = 24)" /></span>,
      c: <span><InlineMath math="\text{Fe}(M = 56)" /></span>,
      d: <span><InlineMath math="\text{Na}(M = 23)" /></span>
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 117,
    content: <p>Hỗn hợp khí <InlineMath math="\mathbf{X}" /> gồm <InlineMath math="\mathbf{N}_{\mathbf{2}}" /> và <InlineMath math="\mathbf{H}_{\mathbf{2}}" /> có tỉ khối so với He bằng 1,8. Đun nóng <InlineMath math="\mathbf{X}" /> một thời gian trong bình kín (có bột <InlineMath math="\mathbf{Fe}" /> làm xúc tác), thu được hỗn hợp khí <InlineMath math="\mathbf{Y}" /> có tỉ khối so với He bằng 2. Hiệu suất của phản ứng tổng hợp <InlineMath math="\text{N}\text{H}_{\mathbf{3}}" /> là</p>,
    type: "multiple_choice",
    options: {
      a: <span>50%</span>,
      b: <span>40%</span>,
      c: <span>36%</span>,
      d: <span>25%</span>
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 118,
    content: <p>Cho 18,4g X gồm <InlineMath math="\text{C}\text{u}_{\mathbf{2}}\mathbf{S,}\text{CuS}\mathbf{,}\text{Fe}\text{S}_{\mathbf{2}}" /> và <InlineMath math="\text{FeS}" /> qua <InlineMath math="\text{HN}\text{O}_{\mathbf{3}}" /> đặc nóng dư thu được <InlineMath math="\mathbf{V}" /> lít <InlineMath math="\text{N}\text{O}_{\mathbf{2}}" /> (đktc, sản phẩm khử duy nhất) và dung dịch <InlineMath math="\mathbf{Y}" />. Cho <InlineMath math="\mathbf{Y}" /> tác dụng với lượng dư <InlineMath math="\text{BaC}\text{l}_{\mathbf{2}}" /> thu được 46,6g kết tủa, còn khi cho <InlineMath math="\mathbf{Y}" /> tác dụng với <InlineMath math="\text{N}\text{H}_{\mathbf{3}}" /> dư thu được <InlineMath math="\mathbf{10,7}\text{~g}" /> kết tủa <InlineMath math="\mathbf{A}" />. Tính V?</p>,
    type: "multiple_choice",
    options: {
      a: <span>38,08</span>,
      b: <span>16,8</span>,
      c: <span>11,2</span>,
      d: <span>24,64</span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 119,
    content: <p>Oxi hoá 0,4 mol rượu etylic <InlineMath math="\mathbf{C}_{\mathbf{2}}\mathbf{H}_{\mathbf{5}}\text{OH}" /> với oxi (xúc tác men giấm) được dung dịch <InlineMath math="\mathbf{X}" />. Chia <InlineMath math="\mathbf{X}" /> thành 2 phần bằng nhau. Phần 1: Tác dụng với Na dư thu được 3,136 lít khí <InlineMath math="\mathbf{H}_{\mathbf{2}}" /> (ở đktc). Phần 2: Thêm <InlineMath math="\mathbf{H}_{\mathbf{2}}\text{S}\text{O}_{\mathbf{4}}" /> dư (xúc tác) nung nóng thu được 5,28g este. Hỏi hiệu suất của phản ứng este là bao nhiêu?</p>,
    type: "multiple_choice",
    options: {
      a: <span>75%</span>,
      b: <span>42,8%</span>,
      c: <span>50%</span>,
      d: <span>30%</span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 120,
    content: <p>Đốt cháy hoàn toàn 38,6 gam hỗn hợp <InlineMath math="\mathbf{X}" /> gồm các amin no, hở thu được 35,84 lít <InlineMath math="\text{C}\text{O}_{\mathbf{2}}" /> (đktc) và 48,6 gam <InlineMath math="\mathbf{H}_{\mathbf{2}}\mathbf{O}" />. Nếu cho 27,02 gam <InlineMath math="\mathbf{X}" /> tác dụng với <InlineMath math="\text{HCl}" /> dư. Số mol <InlineMath math="\text{HCl}" /> phản ứng là:</p>,
    type: "multiple_choice",
    options: {
      a: <span>0,7</span>,
      b: <span>1</span>,
      c: <span>0,5</span>,
      d: <span>0,35</span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 121,
    content: <p>Đường đi của máu trong hệ tuần hoàn kín của động vật?</p>,
    type: "multiple_choice",
    options: {
      a: <span>Tim <InlineMath math="\rightarrow" /> tĩnh mạch <InlineMath math="\rightarrow" /> mao mạch <InlineMath math="\rightarrow" /> động mạch <InlineMath math="\rightarrow" /> tim.</span>,
      b: <span>Tim <InlineMath math="\rightarrow" /> động mạch <InlineMath math="\rightarrow" /> tĩnh mạch <InlineMath math="\rightarrow" /> mao mạch <InlineMath math="\rightarrow" /> tim.</span>,
      c: <span>Tim <InlineMath math="\mathbf{\rightarrow}" /> động mạch <InlineMath math="\mathbf{\rightarrow}" /> mao mạch <InlineMath math="\mathbf{\rightarrow}" /> tĩnh mạch <InlineMath math="\mathbf{\rightarrow}" /> tim.</span>,
      d: <span>Tim <InlineMath math="\rightarrow" /> mao mạch <InlineMath math="\rightarrow" /> tĩnh mạch <InlineMath math="\rightarrow" /> động mạch <InlineMath math="\rightarrow" /> tim.</span>
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 122,
    content: <p>Ở những vùng đất có hiện tượng xâm thực nước biển, người ta nhận thấy một số loại cây trồng không sống được trên vùng đất nhiễm mặn đó. Điều này được giải thích là do</p>,
    type: "multiple_choice",
    options: {
      a: <span>Đất mặn nghèo chất dinh dưỡng nên cây không thể hút được khoáng.</span>,
      b: <span>Cây bị sốc ion <InlineMath math="\text{N}\text{a}^{+}" />, lượng <InlineMath math="\text{N}\text{a}^{+}" /> xâm nhập vào nhiều làm cây mất nước và chết.</span>,
      c: <span>Cây không thể hút khoáng do các ion <InlineMath math="\text{N}\text{a}^{+}" /> bám chặt vào rễ cây gây cản trở.</span>,
      d: <span>Cây không thể hút được nước do áp suất thẩm thấu của rễ thấp hơn môi trường.</span>
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 123,
    content: <p>Sự phối hợp của những loại hoocmôn nào làm cho niêm mạc dạ con dày và phồng lên, tích đầy máu trong mạch chuẩn bị cho sự làm tổ của phôi trong tử cung?</p>,
    type: "multiple_choice",
    options: {
      a: <span>Ơstrôgen và Prôgestêrôn.</span>,
      b: <span>FSH và <InlineMath math="\text{LH}" />.</span>,
      c: <span>GnRH và HCG.</span>,
      d: <span>Prôgestêrôn và HCG.</span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 124,
    content: <p>Theo quan niệm tiến hóa hiện đại, chọn lọc tự nhiên tác động lên mọi cấp độ tổ chức sống, trong đó quan trọng nhất là sự chọn lọc ở cấp độ nào?</p>,
    type: "multiple_choice",
    options: {
      a: <span>Phân tử và tế bào.</span>,
      b: <span>Quần xã và hệ sinh thái.</span>,
      c: <span>Quần thể và quần xã.</span>,
      d: <span>Cá thể và quần thể.</span>
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 125,
    content: <p>Hiện tượng số lượng cá thể của quần thể này bị số lượng cá thể của quần thể khác loài kìm hãm là hiện tượng</p>,
    type: "multiple_choice",
    options: {
      a: <span>Cạnh tranh giữa các loài.</span>,
      b: <span>Khống chế sinh học.</span>,
      c: <span>Cạnh tranh cùng loài.</span>,
      d: <span>Đấu tranh sinh tồn.</span>
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 126,
    content: <p>Khi nói về Opêron Lac ở vi khuẩn E.coli, phát biểu nào sau đây là đúng?</p>,
    type: "multiple_choice",
    options: {
      a: <span>Gen điều hòa <InlineMath math="(R)" /> nằm trong thành phần của Opêron Lac.</span>,
      b: <span>Vì thuộc cùng 1 operon nên các gen cấu trúc A, Z và <InlineMath math="Y" /> có số lần phiên mã bằng số lần tái bản.</span>,
      c: <span>Khi môi trường không có lactôzơ thì gen điều hòa (R) không phiên mã.</span>,
      d: <span>Các gen cấu trúc <InlineMath math="A,Y,Z" /> trong 1 tế bào luôn có số lần nhân đôi bằng nhau.</span>
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 127,
    content: <p>Đặc điểm nào sau đây không phải là biểu hiện của ưu thế lai?</p>,
    type: "multiple_choice",
    options: {
      a: <span>Cơ thể lai <InlineMath math="F1" /> có sức sống cao, sinh trưởng phát triển mạnh.</span>,
      b: <span>Cơ thể lai <InlineMath math="F1" /> có năng suất giảm.</span>,
      c: <span>Cơ thể lai <InlineMath math="F1" /> có khả năng chống chịu tốt hơn với các điều kiện môi trường so với cơ thể mẹ.</span>,
      d: <span>Ưu thế lai biểu hiện cao nhất ở F1, sau đó giảm dần qua các thế hệ.</span>
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 128,
    content: <p>Mật độ cá thể của quần thể có ảnh hưởng tới:</p>,
    type: "multiple_choice",
    options: {
      a: <span>Khối lượng nguồn sống trong môi trường phân bố của quần thể.</span>,
      b: <span>Mức độ sử dụng nguồn sống, khả năng sinh sản và tử vong của quần thể.</span>,
      c: <span>Tập tính sống bầy đàn và hình thức di cư của các cá thể trong quần thể.</span>,
      d: <span>Hình thức khai thác nguồn sống của quần thể.</span>
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 129,
    content: <>
      <p>“Thủy triều đỏ hay còn gọi là tảo nở hoa là hiện tượng quá nhiều tảo sinh sản với số lượng nhanh trong nước. Các nhà khoa học gọi đây là 'hiện tượng tảo nở hoa độc hại'. Thảm họa 'thủy triều đỏ' ở Bình Thuận trung tuần tháng 7/2002 từng làm khoảng 90% sinh vật trong vùng triều, kể cả cá, tôm trong các lồng, bè bị tiêu diệt; môi trường bị ô nhiễm nặng, mấy tháng sau mới hồi phục”. Có bao nhiêu phát biểu sau đây đúng về hiện tượng trên?</p>
      <p>I. Tảo nở hoa gây hại cho các sinh vật biển là ví dụ về mối quan hệ ức chế - cảm nhiễm.</p>
      <p>II. Sự tồn tại của các loại tảo (gây hiện tượng thủy triều đỏ) là hoàn toàn không có lợi cho hệ sinh thái.</p>
      <p>III. Thắt chặt việc kiểm soát nguồn chất thải, nhất là ở vùng nuôi trồng thủy, hải sản là một trong những biện pháp hạn chế hiện tượng này.</p>
      <p>IV. Loại bỏ các loài tảo ra khỏi hệ sinh thái sẽ đảm bảo sự phát triển cân bằng của hệ sinh thái.</p>
    </>,
    type: "multiple_choice",
    options: {
      a: <span>1</span>,
      b: <span>3</span>,
      c: <span>4</span>,
      d: <span>2</span>
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 130,
    content: <p>Cho phép lai AaBbDd x AaBbdd cho biết mỗi gen quy định một tính trạng và các cặp tính trạng đều trội lặn hoàn toàn thì tỉ lệ kiểu hình lặn về cả 3 cặp tính trạng ở <InlineMath math="\mathbf{F1}" /> là:</p>,
    type: "multiple_choice",
    options: {
      a: <span>3/32</span>,
      b: <span>1/32</span>,
      c: <span>3/16</span>,
      d: <span>1/16</span>
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 131,
    content:
      <>
        <p>Chọn nội dung ở cột I phù hợp với nội dung ở cột II trong bảng sau:</p>
        <table>
          <thead>
            <tr>
              <th>Cột I</th>
              <th>Cột II</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Phan Đình Phùng</td>
              <td>d. Lãnh đạo cuộc khởi nghĩa Hương Khê</td>
            </tr>
            <tr>
              <td>2. Nguyễn Tri Phương</td>
              <td>b. Tổng đốc thành Hà Nội</td>
            </tr>
            <tr>
              <td>3. Phan Bội Châu</td>
              <td>a. Khởi xướng phong trào Đông Du</td>
            </tr>
            <tr>
              <td>4. Phan Chu Trinh</td>
              <td>c. Chủ trương cải cách dân chủ</td>
            </tr>
          </tbody>
        </table>

      </>,
    type: "multiple_choice",
    options: {
      a: <span>1a, 2b, 3c, 4d</span>,
      b: <span>1b, 2a, 3d, 4c</span>,
      c: <span>1c, 2b, 3d, 4c</span>,
      d: <span>1d, 2b, 3a, 4c</span>
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 132,
    content: <p>Sự kiện nào sau đây được đánh giá là 'như cánh chim én báo hiệu mùa xuân'?</p>,
    type: "multiple_choice",
    options: {
      a: <span>Vụ mưu sát toàn quyền Đông Dương Méclanh của Phạm Hồng Thái.</span>,
      b: <span>Tư sản Việt Nam thành lập Đảng Lập hiến để tập hợp lực lượng đấu tranh.</span>,
      c: <span>Tổ chức Hội Việt Nam Cách mạng Thanh niên được thành lập.</span>,
      d: <span>Cuộc đấu tranh đòi thả nhà yêu nước Phan Bội Châu diễn ra rộng khắp.</span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 133,
    content: <p>Đầu thế kỉ XX, lực lượng xã hội nào sau đây ở Việt Nam đã tiếp thu tư tưởng dân chủ tư sản?</p>,
    type: "multiple_choice",
    options: {
      a: <span>Công nhân.</span>,
      b: <span>Nông dân.</span>,
      c: <span>Sĩ phu phong kiến tư sản hóa.</span>,
      d: <span>Tiểu tư sản.</span>
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 134,
    content: <p>Sự kiện nào sau đây đánh dấu bước tiến mới của giai cấp công nhân Việt Nam trong những năm 1919-1925?</p>,
    type: "multiple_choice",
    options: {
      a: <span>Công nhân Ba Son bãi công.</span>,
      b: <span>Thành lập chính quyền Xô viết.</span>,
      c: <span>Đảng Cộng sản Việt Nam được thành lập.</span>,
      d: <span>Hội Việt Nam Cách mạng Thanh niên ra đời.</span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 135,
    content: <p>Liên hiệp hết thảy các giới đồng bào yêu nước, không phân biệt giàu nghèo, già trẻ, gái trai, không phân biệt tôn giáo và xu hướng chính trị, đặng cùng nhau mưu cuộc dân tộc giải phóng và sinh tồn. (Văn kiện Đảng 1930-1945) Đoạn tư liệu trên đề cập đến tổ chức nào sau đây?</p>,
    type: "multiple_choice",
    options: {
      a: <span>Mặt trận thống nhất nhân dân phản đế Đông Dương.</span>,
      b: <span>Mặt trận Việt Nam độc lập đồng minh.</span>,
      c: <span>Mặt trận thống nhất dân tộc phản đế Đông Dương.</span>,
      d: <span>Mặt trận Dân chủ Đông Dương.</span>
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 136,
    content: <p>Nội dung nào sau đây không nằm trong kế hoạch Đờ Lát đơ Tátxinhi?</p>,
    type: "multiple_choice",
    options: {
      a: <span>Thiết lập hành lang Đông Tây (Hải Phòng-Hà Nội-Hoà Bình-Sơn La).</span>,
      b: <span>Ra sức phát triển nguỵ quân để xây dựng quân đội quốc gia.</span>,
      c: <span>Thành lập vành đai trắng bao quanh vùng trung du và đồng bằng Bắc Bộ.</span>,
      d: <span>Tiến hành một cuộc chiến tranh tổng lực.</span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 137,
    content: <p>Cuối thế kỉ XIX, Nhật Bản đã kí hiệp ước bất bình đẳng đầu tiên với quốc gia nào sau đây?</p>,
    type: "multiple_choice",
    options: {
      a: <span>Anh.</span>,
      b: <span>Pháp.</span>,
      c: <span>Đức.</span>,
      d: <span>Mĩ.</span>
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 138,
    content: <>
      <p>Cho bảng thống kê về thành tựu một số lĩnh vực của nước Mĩ sau Chiến tranh thế giới thứ hai như sau:</p>
      <table
        style={{
          marginBottom: 20,
          border: "1px solid #333",
          borderCollapse: "collapse"
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #333",
                padding: "8px"
              }}
            >
              Lĩnh vực
            </th>
            <th
              style={{
                border: "1px solid #333",
                padding: "8px"
              }}
            >
              Thành tựu
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Công nghiệp", "Chiếm khoảng 56,4% sản lượng công nghiệp toàn thế giới (1948)."],
            ["Nông nghiệp", "Đạt sản lượng gấp hai lần sản lượng của 5 nước Anh, Pháp, Tây Đức, Italia, Nhật Bản cộng lại."],
            ["Tài chính", "Chiếm 3/4 dự trữ vàng của thế giới."],
            ["Thương mại", "Kiểm soát 50% tàu bè đi lại trên biển."]
          ].map(([label, text], i) => (
            <tr key={i}>
              <td
                style={{
                  border: "1px solid #333",
                  padding: "8px",
                  whiteSpace: "nowrap",
                  marginRight: 10,
                  backgroundColor: i % 2 === 1 ? "#fafafa" : "transparent"
                }}
              >
                {label}
              </td>
              <td
                style={{
                  border: "1px solid #333",
                  padding: "8px",
                  backgroundColor: i % 2 === 1 ? "#fafafa" : "transparent"
                }}
              >
                {text}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        Từ bảng số liệu trên, cho biết nhận xét nào sau đây là chính xác nhất về tình hình kinh tế Mỹ trong hai thập niên đầu sau Chiến tranh thế giới thứ hai?
      </p>
    </>,
    type: "multiple_choice",
    options: {
      a: <span>Mĩ là trung tâm kinh tế - tài chính lớn nhất thế giới.</span>,
      b: <span>Mĩ đã thiết lập được trật tự thế giới đơn cực.</span>,
      c: <span>Mĩ là trung tâm kinh tế - tài chính lớn nhất châu Âu.</span>,
      d: <span>Mĩ có sản lượng thép đứng đầu thế giới.</span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 139,
    content:
      <>
        <p>Mỹ ném bom Hà Nội, Hải Phòng với sự tàn bạo hơn bao giờ hết trong lịch sử chiến tranh Việt Nam. Thả hơn 35 000 tấn bom vào hai trung tâm đô thị lớn ở Bắc Việt Nam. Lầu Năm Góc dùng 200 B52 các pháo đài bay này từng nhóm 3 chiếc, mang 500 và 700 cân Anh, mà khi thả xuống đúng là nhấn chìm những khu vực hình chữ nhật, một dặm bề dài, nửa dặm bề ngang của thành phố. Giới quân sự cho rằng các trung tâm dân cư cũng như các mục tiêu quân sự sẽ bị quét sạch và trong phần lớn các trường hợp, khu vực mục tiêu chỉ còn là những đống gạch vụn. Gạch vụn là mục tiêu thừa nhận của Lầu Năm Góc, nhằm "làm tê liệt đời sống hàng ngày của Hà Nội và Hải Phòng và phá hủy khả năng của Bắc Việt Nam, ủng hộ các lực lượng của Nam Việt Nam. </p>
        <p>(Tổng cục Chính trị, 'Điện Biên Phủ trên không' nhìn từ phía Mỹ, Thư viện Quân đội, Hà Nội, 2002, tr19) Nội dung nào sau đây là mục tiêu của Mỹ trong cuộc chiến tranh phá hoại miền Bắc Việt Nam lần thứ hai 1972?</p>
        <p>
          Nội dung nào sau đây là mục tiêu của Mỹ trong cuộc chiến tranh phá hoại miền Bắc Việt Nam lần thứ hai 1972 ?
        </p>
      </>
    ,
    type: "multiple_choice",
    options: {
      a: <span>Thiết lập một hệ thống phòng thủ quân sự chung ở ba nước Đông Dương.</span>,
      b: <span>Ngăn chặn mọi nguồn chi viện từ các nước XHCN vào miền Bắc Việt Nam.</span>,
      c: <span>Giành thắng lợi quân sự quyết định buộc Việt Nam kí hiệp định có lợi cho Mỹ.</span>,
      d: <span>Thử nghiệm khả năng trinh sát và chiến đấu của loại máy bay mới do Mỹ chế tạo.</span>
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 140,
    content: <>
      <p>Mỹ ném bom Hà Nội, Hải Phòng với sự tàn bạo hơn bao giờ hết trong lịch sử chiến tranh Việt Nam. Thả hơn 35 000 tấn bom vào hai trung tâm đô thị lớn ở Bắc Việt Nam. Lầu Năm Góc dùng 200 B52 các pháo đài bay này từng nhóm 3 chiếc, mang 500 và 700 cân Anh, mà khi thả xuống đúng là nhấn chìm những khu vực hình chữ nhật, một dặm bề dài, nửa dặm bề ngang của thành phố. Giới quân sự cho rằng các trung tâm dân cư cũng như các mục tiêu quân sự sẽ bị quét sạch và trong phần lớn các trường hợp, khu vực mục tiêu chỉ còn là những đống gạch vụn. Gạch vụn là mục tiêu thừa nhận của Lầu Năm Góc, nhằm "làm tê liệt đời sống hàng ngày của Hà Nội và Hải Phòng và phá hủy khả năng của Bắc Việt Nam, ủng hộ các lực lượng của Nam Việt Nam. </p>
      <p>(Tổng cục Chính trị, 'Điện Biên Phủ trên không' nhìn từ phía Mỹ, Thư viện Quân đội, Hà Nội, 2002, tr19) Nội dung nào sau đây là mục tiêu của Mỹ trong cuộc chiến tranh phá hoại miền Bắc Việt Nam lần thứ hai 1972?</p>
      <p>
        Mở cuộc tập kích chiến lược đường không bằng máy bay B52 vào Hà Nội, Hải Phòng và một số thành phố miền Bắc là thủ đoạn của Mỹ trong chiến lược chiến tranh nào sau đây?
      </p>
    </>,
    type: "multiple_choice",
    options: {
      a: <span>Chiến tranh đơn phương.</span>,
      b: <span>Chiến tranh đặc biệt.</span>,
      c: <span>Chiến tranh cục bộ.</span>,
      d: <span>Việt Nam hóa chiến tranh.</span>
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 141,
    content: <p>Vùng trồng lúa gạo của Trung Quốc tập trung chủ yếu ở đồng bằng</p>,
    type: "multiple_choice",
    options: {
      a: <span>Đông Bắc và Hoa Bắc.</span>,
      b: <span>Hoa Nam và Hoa Trung.</span>,
      c: <span>Hoa Nam và Hoa Bắc.</span>,
      d: <span>Hoa Trung và Hoa Bắc.</span>
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 142,
    content: <p>Bằng chứng nào cho thấy EU không tuân thủ đầy đủ các quy định của WTO?</p>,
    type: "multiple_choice",
    options: {
      a: <span>Dỡ bỏ hàng rào thuế quan trong buôn bán với các nước trong khối EU.</span>,
      b: <span>Tích cực nhập khẩu số lượng lớn đối với các mặt hàng 'nhạy cảm' như than sắt.</span>,
      c: <span>Hạn chế nhập khẩu các mặt hàng 'nhạy cảm' và trợ cấp hàng nông sản của EU.</span>,
      d: <span>Có chung một mức thuế quan trong quan hệ thương mại với các nước ngoài EU.</span>
    },
    correctAnswer: "c",
    showResult: true
  },
  {
    id: 143,
    content:
      <>
        <p>Tổ quốc tôi ba nghìn cây số biển</p>
        <p>Móng Cái - Cà Mau hình chiếc lưỡi câu</p>
        <p>Câu những túi vàng đen mỏ dầu trong lòng đất</p>
        <p>   (Nguyễn Trọng Phú, Tổ quốc tôi ba nghìn cây số biển) </p>
        <p>Với hơn 'ba nghìn cây số biển' giúp nước ta có bao nhiêu tỉnh/thành phố giáp biển?</p>
      </>,
    type: "multiple_choice",
    options: {
      a: <span>18</span>,
      b: <span>28</span>,
      c: <span>38</span>,
      d: <span>48</span>
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 144,
    content: <p>Phần lãnh thổ phía Bắc nước ta có biên độ nhiệt độ năm lớn chủ yếu do tác động của</p>,
    type: "multiple_choice",
    options: {
      a: <span>Gió tây nam, Tín phong bán cầu Bắc, thời gian mặt trời lên thiên đỉnh.</span>,
      b: <span>Địa hình núi cao, gió mùa mùa hạ, thời gian mặt trời lên thiên đỉnh.</span>,
      c: <span>Vị trí xa xích đạo, thời gian mặt trời lên thiên đỉnh, địa hình đa dạng.</span>,
      d: <span>Thời gian mặt trời lên thiên đỉnh, gió, vị trí gần vùng ngoại chí tuyến.</span>
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 145,
    content: <p>Căn cứ vào Atlat Địa lí Việt Nam trang 8, cho biết dầu mỏ tập trung nhiều nhất ở đâu?</p>,
    type: "multiple_choice",
    options: {
      a: <span>Thềm lục địa Bắc Trung Bộ.</span>,
      b: <span>Thềm lục địa phía Nam.</span>,
      c: <span>Thềm lục địa Nam Trung Bộ.</span>,
      d: <span>Thềm lục địa phía Bắc.</span>
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 146,
    content:
      <>
        <p>DIỆN TÍCH VÀ SẢN LƯỢNG ĐIỀU CỦA NƯỚC TA, GIAI ĐOẠN 2017 - 2021</p>
        <table
          style={{
            marginBottom: 20,
            border: "1px solid #333",
            borderCollapse: "collapse",
            width: "100%",
            fontFamily: "Arial, sans-serif"
          }}
        >
          <thead>
            <tr>
              {["Năm", "2017", "2019", "2020", "2021"].map((text, idx) => (
                <th
                  key={idx}
                  style={{
                    border: "1px solid #333",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    textAlign: idx === 0 ? "left" : "center",
                    whiteSpace: "nowrap"
                  }}
                >
                  {text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Diện tích (nghìn ha)", ["297,5", "295", "302,4", "314,4"]],
              ["Sản lượng (nghìn tấn)", ["212,3", "283,3", "348,5", "399,3"]]
            ].map(([label, values]: any, rowIndex) => (
              <tr key={rowIndex}>
                <td
                  style={{
                    border: "1px solid #333",
                    padding: "8px",
                    whiteSpace: "nowrap",
                    backgroundColor: rowIndex % 2 === 1 ? "#fafafa" : "transparent"
                  }}
                >
                  {label}
                </td>
                {values?.map((val: any, colIndex: any) => (
                  <td
                    key={colIndex}
                    style={{
                      border: "1px solid #333",
                      padding: "8px",
                      textAlign: "center",
                      backgroundColor: rowIndex % 2 === 1 ? "#fafafa" : "transparent"
                    }}
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <p>(Nguồn: Niên giám thống kê Việt Nam 2022, https://www.gso.gov.vn)</p>
        <p>Theo bảng số liệu, để thể hiện tốc độ tăng trưởng diện tích và sản lượng điều nước ta giai đoạn 2017 - 2021, dạng biểu đồ nào sau đây là thích hợp nhất?</p>
      </>,
    type: "multiple_choice",
    options: {
      a: <span>Miền.</span>,
      b: <span>Kết hợp.</span>,
      c: <span>Cột.</span>,
      d: <span>Đường.</span>
    },
    correctAnswer: "d",
    showResult: true
  },
  {
    id: 147,
    content: <p>Loại cây công nghiệp được trồng chủ yếu trên đất ba dan và đất xám bạc màu trên phù sa cổ của nước ta là</p>,
    type: "multiple_choice",
    options: {
      a: <span>Cao su.</span>,
      b: <span>Cà phê.</span>,
      c: <span>Chè.</span>,
      d: <span>Hồ tiêu.</span>
    },
    correctAnswer: "a",
    showResult: true
  },
  {
    id: 148,
    content: <p>Hoạt động khai thác tài nguyên khoáng sản ở vùng biển nước ta hiện nay</p>,
    type: "multiple_choice",
    options: {
      a: <span>Chủ yếu khai thác ở các vùng ven bờ.</span>,
      b: <span>Mở ra bước phát triển mới cho công nghiệp.</span>,
      c: <span>Hoàn toàn tránh được ô nhiễm môi trường.</span>,
      d: <span>Chỉ tập trung đầu tư vào nghề truyền thống.</span>
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 149,
    content: <p>Ở Tây Nguyên có thể trồng được cây công nghiệp có nguồn gốc cận nhiệt đới vì</p>,
    type: "multiple_choice",
    options: {
      a: <span>Có một mùa đông lạnh nhiệt độ xuống thấp.</span>,
      b: <span>Khí hậu ở các cao nguyên trên 1000m mát mẻ.</span>,
      c: <span>Đất đỏ ba dan màu mỡ, phân bố rất tập trung.</span>,
      d: <span>Khí hậu chia làm hai mùa mưa, khô rất rõ rệt.</span>
    },
    correctAnswer: "b",
    showResult: true
  },
  {
    id: 150,
    content: <p>Ý nghĩa chủ yếu của phát triển kinh tế biển ở Trung du và miền núi Bắc Bộ là</p>,
    type: "multiple_choice",
    options: {
      a: <span>Tăng cường sự phân hóa lãnh thổ, thu hút vốn đầu tư.</span>,
      b: <span>Đẩy nhanh thay đổi cơ cấu kinh tế, đa dạng sản phẩm.</span>,
      c: <span>Tăng vị thế của vùng trong cả nước, tạo việc làm mới.</span>,
      d: <span>Phát huy các nguồn lực, thúc đẩy tăng trưởng kinh tế.</span>
    },
    correctAnswer: "d",
    showResult: true
  }
]

// Helper function to process LaTeX content
const processLatexContent = (content: string) => {
  const parts = content?.split(/(\\\(.*?\\\))/);
  return parts.map((part, index) => {
    if (part.startsWith('\(') && part.endsWith('\)')) {
      const latex = part.slice(1, -1);
      return <InlineMath key={index} math={latex} />;
    }
    return part;
  });
};

// Thêm hàm kiểm tra câu trả lời tự luận
const checkEssayAnswer = (userAnswer: string, correctAnswer: number): boolean => {
  const userNumber = parseFloat(userAnswer);
  return !isNaN(userNumber) && Math.abs(userNumber - correctAnswer) < 0.0001;
};

export default function ExamTestPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(0); // 90 phút
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [openSubmitDialog, setOpenSubmitDialog] = useState(false);
  const [openTimeUpDialog, setOpenTimeUpDialog] = useState(false);
  const [mockQuestions, setMockQuestions] = useState<Question[]>([]);
  const [examMainInfo, setExamMainInfo] = useState<any>(null);

  useEffect(() => {
    if (params.id == '1') {
      setMockQuestions(mockQuestionsMath);
    } else if (params.id == '2') {
      setMockQuestions(mockQuestionsVan);
    } else if (params.id == '3') {
      setMockQuestions(mockQuestionsHoa);
    }
    const mainExamInfo = EXAM_CONST.find(exam => exam.id == parseInt(params.id));
    if (mainExamInfo) {
      setExamMainInfo(mainExamInfo);
      setTimeLeft(mainExamInfo.duration * 60);
    }
  }, []);

  useEffect(() => {
    // Kiểm tra xem có đang trong bài thi không
    const examInfo = localStorage.getItem('examInfo');
    if (!examInfo) {
      router.push(`/exams/${params.id}/info`);
      return;
    }

    // Kiểm tra xem có phải bài thi mới không
    const savedState = localStorage.getItem('examState');
    if (savedState) {
      const { examId } = JSON.parse(savedState);
      if (examId !== params.id) {
        // Nếu là bài thi mới, xóa dữ liệu cũ
        localStorage.removeItem('examAnswers');
        localStorage.removeItem('examState');
      }
    }

    // Khôi phục câu trả lời từ localStorage
    const savedAnswers = localStorage.getItem('examAnswers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }

    // Khôi phục thời gian và câu hỏi hiện tại
    if (savedState) {
      const { currentQuestion: savedQuestion, startTime: savedStartTime } = JSON.parse(savedState);
      setCurrentQuestion(savedQuestion);
      setStartTime(savedStartTime);

      // Tính thời gian còn lại
      const elapsedTime = Math.floor((Date.now() - savedStartTime) / 1000);
      const remainingTime = Math.max(0, Number(examMainInfo?.duration) * 60 - elapsedTime);
      setTimeLeft(remainingTime);
    } else {
      // Lần đầu vào bài thi
      const newStartTime = Date.now();
      setStartTime(newStartTime);
      localStorage.setItem('examState', JSON.stringify({
        currentQuestion: 0,
        startTime: newStartTime,
        examId: params.id
      }));
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setOpenTimeUpDialog(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examMainInfo]);

  // Lưu trạng thái khi chuyển câu hỏi
  useEffect(() => {
    if (startTime) {
      localStorage.setItem('examState', JSON.stringify({
        currentQuestion,
        startTime,
        examId: params.id
      }));
    }
  }, [currentQuestion, startTime, params.id]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Cập nhật hàm handleAnswerSelect
  const handleAnswerSelect = (questionId: number, answer: string) => {
    const question = mockQuestions.find(q => q.id === questionId);
    if (!question) return;

    const newAnswers = {
      ...answers,
      [questionId]: answer,
    };
    setAnswers(newAnswers);
    localStorage.setItem('examAnswers', JSON.stringify(newAnswers));
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const examInfo = JSON.parse(localStorage.getItem('examInfo') || '{}');

      // Tính điểm cho từng câu hỏi
      const results = mockQuestions.map(question => {
        const userAnswer = answers[question.id];
        let isCorrect = false;

        if (question.type === 'multiple_choice') {
          isCorrect = userAnswer === question.correctAnswer;
        } else if (question.type === 'essay') {
          isCorrect = checkEssayAnswer(userAnswer, question.correctAnswer as number);
        }

        return {
          questionId: question.id,
          userAnswer,
          correctAnswer: question.correctAnswer,
          isCorrect,
          type: question.type
        };
      });
      const result = {
        examId: params.id,
        studentInfo: examInfo,
        answers,
        results,
        timeSpent: examMainInfo?.duration * 60 - timeLeft,
        // questions: mockQuestions.map(q => ({
        //   ...q,
        //   showResult: q.showResult
        // }))
      };
      localStorage.setItem('examResult', JSON.stringify(result));
      // TODO: Gửi kết quả lên server

      // Xóa dữ liệu bài thi sau khi nộp
      localStorage.removeItem('examAnswers');
      localStorage.removeItem('examState');

      router.push(`/exams/${params.id}/result`);
    } catch (error) {
      console.error('Lỗi khi nộp bài:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenSubmitDialog = () => {
    setOpenSubmitDialog(true);
  };

  const handleCloseSubmitDialog = () => {
    setOpenSubmitDialog(false);
  };

  const handleConfirmSubmit = () => {
    handleCloseSubmitDialog();
    handleSubmit();
  };

  const handleTimeUp = () => {
    setOpenTimeUpDialog(false);
    handleSubmit();
  };

  const currentQuestionData = mockQuestions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-8 mt-1 md:mt-[50px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-[#3d82af]">Bài thi {examMainInfo?.subject}</h1>
        <div className="text-xl font-bold text-red-600">
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Bảng câu hỏi */}
        <div className="lg:w-1/5">
          <div className="bg-white rounded-lg shadow-md p-3">
            <h2 className="text-sm font-semibold mb-3">Danh sách câu hỏi</h2>
            <div className="grid grid-cols-5 gap-1">
              {mockQuestions.map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => setCurrentQuestion(index)}
                  className={`relative p-1.5 rounded-md text-center text-sm ${currentQuestion === index
                    ? 'bg-[#3d82af] text-white'
                    : answers[question.id]
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 hover:bg-gray-200  text-black'
                    }`}
                >
                  <span className="relative z-10">{index + 1}</span>
                  {answers[question.id] && (
                    <FaCheckCircle className="absolute top-0.5 right-0.5 w-3 h-3 text-green-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Nội dung câu hỏi */}
        <div className="lg:w-4/5">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">
                Câu {currentQuestion + 1}/{mockQuestions.length}
              </h2>
              <p className="text-gray-700 mb-4">{currentQuestionData?.content}</p>
              {currentQuestionData?.type === 'multiple_choice' ? (
                <div className="space-y-3">
                  {Object.entries(currentQuestionData?.options || {}).map(([key, value]) => (
                    <label
                      key={key}
                      className={`block p-3 border rounded-md cursor-pointer hover:bg-gray-50 ${answers[currentQuestionData?.id] === key
                        ? 'border-[#3d82af] bg-blue-50  text-black'
                        : 'border-gray-300  text-black'
                        }`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestionData?.id}`}
                        value={key}
                        checked={answers[currentQuestionData?.id] === key}
                        onChange={() => handleAnswerSelect(currentQuestionData?.id, key)}
                        className="mr-2 text-black"
                      />
                      {
                        typeof value === 'string' ? processLatexContent(value) : value
                      }
                    </label>
                  ))}
                </div>
              ) : (
                <div className="mt-4">
                  <input
                    type="text"
                    value={answers[currentQuestionData?.id] || ''}
                    onChange={(e) => handleAnswerSelect(currentQuestionData?.id, e.target.value)}
                    placeholder="Nhập kết quả của bạn"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d82af] focus:border-transparent  text-black"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
              >
                Câu trước
              </button>
              <button
                onClick={() => setCurrentQuestion((prev) => Math.min(mockQuestions.length - 1, prev + 1))}
                disabled={currentQuestion === mockQuestions.length - 1}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
              >
                Câu tiếp
              </button>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleOpenSubmitDialog}
              disabled={isSubmitting}
              className="w-full bg-[#3d82af] text-white py-2 px-4 rounded-md hover:bg-[#2c6a8f] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Đang nộp bài...' : 'Nộp bài'}
            </button>
          </div>
        </div>
      </div>

      <Dialog
        open={openSubmitDialog}
        onClose={handleCloseSubmitDialog}
        aria-labelledby="submit-dialog-title"
        PaperProps={{
          sx: {
            borderRadius: '12px',
            width: '100%',
            maxWidth: {
              xs: '90%', // Mobile
              sm: '400px', // Tablet
              md: '500px' // Desktop
            },
            m: {
              xs: 2, // Mobile
              sm: 3 // Desktop
            },
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        <Box sx={{
          p: {
            xs: 2, // Mobile
            sm: 3 // Desktop
          }
        }}>
          <DialogTitle
            id="submit-dialog-title"
            sx={{
              textAlign: 'center',
              color: '#3d82af',
              fontSize: {
                xs: '1.25rem', // Mobile
                sm: '1.5rem' // Desktop
              },
              fontWeight: 'bold',
              pb: 1
            }}
          >
            Xác nhận nộp bài
          </DialogTitle>
          <DialogContent sx={{
            textAlign: 'center',
            py: 2,
            px: {
              xs: 1, // Mobile
              sm: 2 // Desktop
            }
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 2,
              color: '#3d82af'
            }}>
              <FaCheckCircle size={40} />
            </Box>
            <Typography variant="body1" sx={{
              color: '#4a5568',
              fontSize: {
                xs: '1rem', // Mobile
                sm: '1.1rem' // Desktop
              },
              mb: 1
            }}>
              Bạn có chắc chắn muốn nộp bài?
            </Typography>
            <Typography variant="body2" sx={{
              color: '#718096',
              fontSize: {
                xs: '0.9rem', // Mobile
                sm: '0.95rem' // Desktop
              }
            }}>
              Sau khi nộp bài, bạn sẽ không thể thay đổi câu trả lời.
            </Typography>
          </DialogContent>
          <DialogActions sx={{
            justifyContent: 'center',
            gap: 2,
            pt: 2,
            flexDirection: {
              xs: 'column', // Mobile
              sm: 'row' // Desktop
            }
          }}>
            <Button
              onClick={handleCloseSubmitDialog}
              variant="outlined"
              fullWidth
              sx={{
                color: '#3d82af',
                borderColor: '#3d82af',
                '&:hover': {
                  borderColor: '#2c6a8f',
                  backgroundColor: 'rgba(61, 130, 175, 0.04)'
                },
                py: 1
              }}
            >
              Hủy
            </Button>
            <Button
              onClick={handleConfirmSubmit}
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#3d82af',
                '&:hover': {
                  backgroundColor: '#2c6a8f'
                },
                py: 1
              }}
            >
              Xác nhận nộp bài
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Dialog hết thời gian */}
      <Dialog
        open={openTimeUpDialog}
        aria-labelledby="timeup-dialog-title"
        PaperProps={{
          sx: {
            borderRadius: '12px',
            width: '100%',
            maxWidth: {
              xs: '90%',
              sm: '400px',
              md: '500px'
            },
            m: {
              xs: 2,
              sm: 3
            },
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        <Box sx={{
          p: {
            xs: 2,
            sm: 3
          }
        }}>
          <DialogTitle
            id="timeup-dialog-title"
            sx={{
              textAlign: 'center',
              color: '#e53e3e',
              fontSize: {
                xs: '1.25rem',
                sm: '1.5rem'
              },
              fontWeight: 'bold',
              pb: 1
            }}
          >
            Hết thời gian làm bài
          </DialogTitle>
          <DialogContent sx={{
            textAlign: 'center',
            py: 2,
            px: {
              xs: 1,
              sm: 2
            }
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 2,
              color: '#e53e3e'
            }}>
              <FaClock size={40} />
            </Box>
            <Typography variant="body1" sx={{
              color: '#4a5568',
              fontSize: {
                xs: '1rem',
                sm: '1.1rem'
              },
              mb: 1
            }}>
              Thời gian làm bài đã kết thúc
            </Typography>
            <Typography variant="body2" sx={{
              color: '#718096',
              fontSize: {
                xs: '0.9rem',
                sm: '0.95rem'
              }
            }}>
              Hệ thống sẽ tự động nộp bài của bạn
            </Typography>
          </DialogContent>
          <DialogActions sx={{
            justifyContent: 'center',
            pt: 2
          }}>
            <Button
              onClick={handleTimeUp}
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#e53e3e',
                '&:hover': {
                  backgroundColor: '#c53030'
                },
                py: 1
              }}
            >
              Đồng ý
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
} 