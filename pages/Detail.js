function Detail({ route, navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { idUser } = route.params;

    useEffect(() => {
        fetch(`https://api.github.com/users/${idUser}`)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    return (
        <View style={styles.detaiiView}>
            <View style={styles.viewContent}>
                <Image source={{ uri: data.avatar_url }} style={styles.ImageDetail}></Image>
                <Text style={{fontSize: 24}}>{data.name}</Text>
            </View>
        </View>
    )
}

export default Detail;