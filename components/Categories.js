import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15
      }}
    >
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 1' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 2' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 3' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 1' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 2' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 3' />
    </ScrollView>
  )
}

export default Categories