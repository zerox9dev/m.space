'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import type { ReactElement } from 'react'
import { RiShip2Fill, RiLayout5Fill, RiRobot2Fill, RiFlowChart, RiInformationLine } from 'react-icons/ri'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
} from '@/components/ui/morphing-dialog'
 

type ServiceItem = {
  id: string
  icon: ReactElement
  title: string
  description: string
  price: string
  processLabel: string
  steps: string[]
  includesLabel?: string
  includes?: string
}

export function ServicesPricing() {
  const t = useTranslations('services')

  const services: ServiceItem[] = [
    {
      id: 'mvp',
      icon: <RiShip2Fill className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: t('mvp.title'),
      description: t('mvp.description'),
      price: t('mvp.price'),
      processLabel: t('process'),
      steps: (t.raw('mvp.steps') as string[]) ?? [],
    },
    {
      id: 'productDesign',
      icon: <RiLayout5Fill className="h-6 w-6 text-violet-600 dark:text-violet-400" />,
      title: t('design.title'),
      description: t('design.description'),
      price: t('design.price'),
      processLabel: t('process'),
      steps: (t.raw('design.steps') as string[]) ?? [],
    },
    {
      id: 'telegramBots',
      icon: <RiRobot2Fill className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: t('bots.title'),
      description: t('bots.description'),
      price: t('bots.price'),
      processLabel: t('process'),
      steps: (t.raw('bots.steps') as string[]) ?? [],
    },
    {
      id: 'automation',
      icon: <RiFlowChart className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
      title: t('n8n.title'),
      description: t('n8n.description'),
      price: t('n8n.price'),
      processLabel: t('process'),
      steps: (t.raw('n8n.steps') as string[]) ?? [],
    },
  ]

  return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{services.map((service) => (
				<motion.div
					key={service.id}
					className="bg-white p-4 border-[#F4F4F5] dark:border-zinc-800 border-3 rounded-md dark:bg-zinc-900 relative h-full"
				>
					<div className="absolute -top-4 left-4 bg-white dark:bg-zinc-900 px-2 py-1 text-sm">
						<span className="inline-flex items-center gap-2">
							{service.icon}
							{service.title}
						</span>
					</div>

						<div className="flex flex-col h-full pb-10">
                    <div className="flex items-start gap-3">
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{service.description}</p>
                    </div>

								{service.price && (
									<div className="absolute bottom-3 left-3 text-sm">
										<span className="text-emerald-600 dark:text-emerald-400 font-medium">{service.price}</span>
									</div>
								)}

						<div className="absolute bottom-3 right-3">
							<MorphingDialog transition={{ type: 'spring', bounce: 0, duration: 0.3 }}>
                            <MorphingDialogTrigger
                                aria-label={t('more')}
                                className="inline-flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                            >
                                <RiInformationLine className="h-4 w-4" />
                            </MorphingDialogTrigger>

								<MorphingDialogContainer>
									<MorphingDialogContent className="relative w-full max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-zinc-200/50 dark:bg-zinc-900 dark:ring-zinc-800/50">
										<MorphingDialogClose className="h-fit w-fit rounded-full bg-white p-1.5 shadow-md dark:bg-zinc-950" />

										<div className="flex items-start gap-3">
											<div className="mt-0.5 shrink-0">{service.icon}</div>
                                            <div className="flex-1">
                                                <div className="text-black dark:text-zinc-100 font-medium">{service.title}</div>
                                                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{service.description}</p>
                                            </div>
										</div>

                                        {service.includes && (
                                            <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-3">
                                                <span className="font-medium text-zinc-700 dark:text-zinc-300">{service.includesLabel}:</span> {service.includes}
                                            </p>
                                        )}

										<div className="mt-4">
                                            <div className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-500">{service.processLabel}</div>
                                            <ul className="mt-2 space-y-2">
                                                {service.steps.map((step, idx) => (
                                                    <li key={idx} className="text-sm text-zinc-800 dark:text-zinc-200 flex items-start gap-2">
                                                        <span className="shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
                                                        <div className="flex flex-wrap gap-x-2">
                                                            <span className="text-zinc-600 dark:text-zinc-400">{step}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
										</div>
									</MorphingDialogContent>
								</MorphingDialogContainer>
							</MorphingDialog>
						</div>
					</div>
				</motion.div>
			))}
    </div>
  )
}


