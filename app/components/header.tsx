import Link from "next/link";

export default function Header() {
  return (<>
  <table>
    <tbody>
    <tr>
    <td><Link href="/"> Home </Link> </td>
      <td><Link href="about"> About </Link></td>
      <td> <Link href="signup"> Registration </Link></td>
      <td>  <Link href="signin"> login </Link>  </td>

      <td>  <Link href="contact"> Contact </Link>  </td>

    </tr>
    </tbody>
  </table>
  </>
  )
}