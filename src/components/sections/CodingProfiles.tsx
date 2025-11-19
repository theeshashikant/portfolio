"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ExternalLink, Github, Code, GitCommit, Star, Trophy } from "lucide-react"
import Link from "next/link"
import { portfolioData } from "@/data/portfolio"

export function CodingProfiles() {
    return (
        <section id="coding-profiles" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-textPrimary">
                            Coding Profiles
                        </h2>
                        <p className="text-lg text-textSecondary leading-relaxed">
                            My contributions to open source and problem-solving journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* GitHub Profile */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 border-textPrimary/5 bg-white">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg bg-textPrimary/5 flex items-center justify-center text-textPrimary">
                                                <Github size={24} />
                                            </div>
                                            <CardTitle className="text-xl">GitHub</CardTitle>
                                        </div>
                                        <Button variant="ghost" size="icon" asChild className="text-textSecondary hover:text-textPrimary">
                                            <Link href={portfolioData.codingProfiles.github.url} target="_blank">
                                                <ExternalLink size={20} />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col gap-6">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="flex flex-col gap-1 p-3 rounded-lg bg-cream border border-textPrimary/5">
                                            <div className="flex items-center gap-2 text-textSecondary text-xs font-medium uppercase tracking-wider">
                                                <GitCommit size={14} />
                                                Commits
                                            </div>
                                            <span className="text-2xl font-bold text-textPrimary">{portfolioData.codingProfiles.github.stats.commits}</span>
                                        </div>
                                        <div className="flex flex-col gap-1 p-3 rounded-lg bg-cream border border-textPrimary/5">
                                            <div className="flex items-center gap-2 text-textSecondary text-xs font-medium uppercase tracking-wider">
                                                <Code size={14} />
                                                Repos
                                            </div>
                                            <span className="text-2xl font-bold text-textPrimary">{portfolioData.codingProfiles.github.stats.repos}</span>
                                        </div>
                                        <div className="flex flex-col gap-1 p-3 rounded-lg bg-cream border border-textPrimary/5">
                                            <div className="flex items-center gap-2 text-textSecondary text-xs font-medium uppercase tracking-wider">
                                                <Star size={14} />
                                                Stars
                                            </div>
                                            <span className="text-2xl font-bold text-textPrimary">{portfolioData.codingProfiles.github.stats.stars}</span>
                                        </div>
                                    </div>

                                    {/* Contribution Graph Visualization (Abstract) */}
                                    <div className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-textSecondary">Contribution Activity</span>
                                        <div className="flex gap-1 flex-wrap">
                                            {Array.from({ length: 52 }).map((_, i) => {
                                                // Use deterministic pattern based on index to avoid hydration mismatch
                                                const seed = (i * 7 + 13) % 10
                                                const intensity = seed > 7 ? 'bg-textPrimary' :
                                                    seed > 4 ? 'bg-textPrimary/60' :
                                                        seed > 2 ? 'bg-textPrimary/30' : 'bg-textPrimary/10'
                                                return (
                                                    <div
                                                        key={i}
                                                        className={`w-3 h-3 rounded-sm ${intensity}`}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* LeetCode Profile */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 border-textPrimary/5 bg-white">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                                                <Code size={24} />
                                            </div>
                                            <CardTitle className="text-xl">LeetCode</CardTitle>
                                        </div>
                                        <Button variant="ghost" size="icon" asChild className="text-textSecondary hover:text-textPrimary">
                                            <Link href={portfolioData.codingProfiles.leetcode.url} target="_blank">
                                                <ExternalLink size={20} />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col gap-6">
                                    <div className="flex items-center justify-between p-4 rounded-lg bg-cream border border-textPrimary/5">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-textSecondary font-medium">Total Solved</span>
                                            <span className="text-3xl font-bold text-textPrimary">{portfolioData.codingProfiles.leetcode.stats.solved}</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-textPrimary/5 shadow-sm">
                                            <Trophy size={16} className="text-yellow-500" />
                                            <span className="text-sm font-bold text-textPrimary">{portfolioData.codingProfiles.leetcode.stats.ranking}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3">
                                            <span className="w-16 text-sm font-medium text-textSecondary">Easy</span>
                                            <div className="flex-grow h-2 bg-textPrimary/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-green-500/80" style={{ width: `${(portfolioData.codingProfiles.leetcode.stats.easy / 350) * 100}%` }} />
                                            </div>
                                            <span className="w-8 text-sm font-bold text-textPrimary text-right">{portfolioData.codingProfiles.leetcode.stats.easy}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="w-16 text-sm font-medium text-textSecondary">Medium</span>
                                            <div className="flex-grow h-2 bg-textPrimary/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-yellow-500/80" style={{ width: `${(portfolioData.codingProfiles.leetcode.stats.medium / 350) * 100}%` }} />
                                            </div>
                                            <span className="w-8 text-sm font-bold text-textPrimary text-right">{portfolioData.codingProfiles.leetcode.stats.medium}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="w-16 text-sm font-medium text-textSecondary">Hard</span>
                                            <div className="flex-grow h-2 bg-textPrimary/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-red-500/80" style={{ width: `${(portfolioData.codingProfiles.leetcode.stats.hard / 350) * 100}%` }} />
                                            </div>
                                            <span className="w-8 text-sm font-bold text-textPrimary text-right">{portfolioData.codingProfiles.leetcode.stats.hard}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
