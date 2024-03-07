/**
 * @copyright Copyright (c) 2024 Max <max@nextcloud.com>
 *
 * @author Max <max@nextcloud.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { Node, isNodeActive, getNodeType } from '@tiptap/core'
import { domHref, parseHref } from './../helpers/links.js'
import { VueNodeViewRenderer } from '@tiptap/vue-2'

import Preview from './Preview.vue'

export default Node.create({

	name: 'preview',

	group: 'block',

	content: 'text?',

	defining: true,

	addOptions() {
		return {
			isEmbedded: false,
			relativePath: null,
		}
	},

	addAttributes() {
		return {
			href: { parseHTML: parseHref },
			title: { parseHTML: el => el.getAttribute('title') },
		}
	},

	parseHTML() {
		return [
			{
				tag: 'a[title="preview"]',
				priority: 1001,
			},
		]
	},

	renderHTML({ node }) {
		return ['a', {
			...node.attrs,
			href: domHref(node, this.options.relativePath),
			rel: 'noopener noreferrer nofollow',
		}, 0]
	},

	addNodeView() {
		return VueNodeViewRenderer(Preview)
	},

	toMarkdown: (state, node) => {
		state.write('[')
		state.text(node.textContent, false)
		state.write(`](${node.attrs.href} (${node.attrs.title}))`)
	},

	addCommands() {
		return {

			/**
			 * Turn a paragraph that contains a single link
			 * into a preview.
			 *
			 */
			setPreview: () => ({ state, chain }) => {
				return previewPossible(state)
					&& chain()
						.setNode(this.name, previewAttributesFromSelection(state))
						.run()
			},

			/**
			 * Turn a preview back into a paragraph
			 * that contains a single link.
			 *
			 */
			unsetPreview: () => ({ state, chain }) => {
				console.info(this.attributes)
				return isPreview(this.name, this.attributes, state)
					&& chain()
						.setNode('paragraph')
						.run()
			},

		}
	},
})

/**
 *
 * @param root0
 * @param root0.selection
 */
function previewAttributesFromSelection({ selection }) {
	const { $from } = selection
	const href = extractHref($from.nodeAfter)
	return { href, title: 'preview' }
}

/**
 *
 * @param typeOrName
 * @param attributes
 * @param state
 */
function isPreview(typeOrName, attributes, state) {
	const type = getNodeType(typeOrName, state.schema)
	return isNodeActive(state, type, attributes)
}

/**
 *
 * @param root0
 * @param root0.selection
 */
function previewPossible({ selection }) {
	const { $from } = selection
	if (childCount($from.parent) > 1) {
		return false
	}
	const href = extractHref($from.nodeAfter)
	if (!href || href.startsWith('#')) {
		return false
	}
	return true
}

/**
 *
 * @param node
 */
function extractHref(node) {
	const link = node.marks.find(mark => mark.type.name === 'link')
	return link?.attrs.href
}

/**
 *
 * @param node
 */
function childCount(node) {
	return node.content.content.length
}