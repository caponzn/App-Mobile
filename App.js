import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BoasVindas } from './src/pages/BoasVindas';
import { PaginaPrincipal } from './src/pages/PaginaPrincipal';
import { ListagemProdutos } from './src/pages/ListagemProdutos';
import { CadProduto } from './src/pages/CadProduto';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        hearderMode="none"
        ScreenOptions={{
          hearderShown: true,
          cardStyle: {
            backgroundColor: '#FF0000',
          },
        }}>
        <Stack.Screen
          name="BoasVindas"
          component={BoasVindas}
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen
          name="PaginaPrincipal"
          component={PaginaPrincipal}
          options={{ title: 'Pagina Inicial' }}
        />
        <Stack.Screen
          name="ListagemProdutos"
          component={ListagemProdutos}
          options={{ title: 'Listagem de Produtos' }}
        />
        <Stack.Screen
          name="CadProduto"
          component={CadProduto}
          options={{ title: 'Cadastro de Produtos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
