import Order from "../database/models/order.model.js";

// Create a new order
export const createOrder = async (req, res) => {
  const { userId, customerName, quantity, deliveryDate } = req.body;

  try {
    const newOrder = new Order({
      userId,
      customerName,
      product: "Sata",
      quantity,
      totalAmount: quantity * 280,
      deliveryDate,
    });

    await newOrder.save();
    res
      .status(201)
      .json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("userId", "username email");
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getUsersOrder = async (req, res) => {
  const { userId } = req.params;
  try {
    const order = await Order.find({ userId: userId });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update an order by ID
export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { product, quantity, totalAmount, delivery, status } = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { product, quantity, totalAmount, delivery, status },
      { new: true, runValidators: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res
      .status(200)
      .json({ message: "Order updated successfully", order: updatedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete an order by ID
export const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
