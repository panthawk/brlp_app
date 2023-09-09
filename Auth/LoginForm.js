// App.js
import React, { Component } from "react";
import {
  TextInput,
  Text,
  Alert,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import Button from "../Components/Button";

const Form = () => {
  const inputStyle = {
    borderWidth: 1,
    borderColor: "#4e4e4e",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={(values) => Alert.alert(JSON.stringify(values))}
    >
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.formContainer}>
          <TextInput
            value={values.email}
            style={inputStyle}
            onChangeText={handleChange("email")}
            onBlur={() => setFieldTouched("email")}
            placeholder="E-mail"
          />
          {touched.email && errors.email && (
            <Text style={{ fontSize: 12, color: "#FF0D10" }}>
              {errors.email}
            </Text>
          )}
          <TextInput
            value={values.password}
            style={inputStyle}
            onChangeText={handleChange("password")}
            placeholder="Password"
            onBlur={() => setFieldTouched("password")}
            secureTextEntry={true}
          />
          {touched.password && errors.password && (
            <Text style={{ fontSize: 12, color: "#FF0D10" }}>
              {errors.password}
            </Text>
          )}
          <TouchableOpacity activeOpacity={2}>
            <Button
              onPress={handleSubmit}
              iconName="lock"
              text="Login"
              style={{ border: "1px solid black" }}
            />
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
    width: "100%",
    border: "1px solid black",
  },
  button: {
    backgroundColor: "yellow",
  },
});

export default Form;
