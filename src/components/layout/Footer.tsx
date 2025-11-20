import Link from "next/link"
import { Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slateMedium border-t border-textPrimary/10 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold font-display text-textPrimary">Shashikant.</span>
          <p className="text-sm text-textSecondary">
            © {new Date().getFullYear()} Shashikant. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="https://linkedin.com" target="_blank" className="text-textSecondary hover:text-textPrimary transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-textSecondary hover:text-textPrimary transition-colors">
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="mailto:shastrijishashikant@gmail.com" className="text-textSecondary hover:text-textPrimary transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        <div className="text-sm text-textSecondary">
          Crafted with <span className="text-red-400">❤️</span> by SocialMoon
        </div>
      </div>
    </footer>
  )
}
