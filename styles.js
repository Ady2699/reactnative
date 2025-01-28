import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
  listItem: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginVertical: 5,
    width: '100%',
    textAlign: 'center',
    borderRadius: 8,
  },
  details: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
});
