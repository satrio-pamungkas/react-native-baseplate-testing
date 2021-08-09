function Home({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users?since=135')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
 
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Details', { idUser: item.login, });
                    }}>
                        <View style={styles.viewList}>
                            <Text style={styles.textItemLogin}>{item.login}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default Home;