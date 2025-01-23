import tensorflow as tf
import tensorflowjs as tfjs

# Load your Keras model
model = tf.keras.models.load_model('mask_detector.keras')

# Convert and save the model to TensorFlow.js format
tfjs.converters.save_keras_model(model, './')
