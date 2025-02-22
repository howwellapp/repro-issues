import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { StyleSheet, View, Alert,Text } from 'react-native'
import { Button, Input } from '@rneui/themed'
import { Session } from '@supabase/supabase-js'

export default function Account({ session }: { session: Session }) {
  return (
    <View style={styles.container}>
      <Text>{session?.user?.email} logged in</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 400,
    padding: 12,
  },
})
