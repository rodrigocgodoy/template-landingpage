import { createRouter } from '@tanstack/react-router'
import { NotFound } from '@/components/layout/not-found'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultNotFoundComponent: NotFound,
    scrollRestoration: true,
  })
}
