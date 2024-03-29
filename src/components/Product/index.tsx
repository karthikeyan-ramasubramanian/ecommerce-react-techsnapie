import { useAppDispatch } from "../../redux/app/hooks";
import { addProductController } from "../../redux/slices/basketSlice";
import { Grid, Box, Typography, Button, Chip } from "@mui/material";
import { textCut } from "../../utils/textCut";
import { Link } from "react-router-dom";
import { Margin } from "@mui/icons-material";

interface Rating {
  rate: number;
  count: number;
}

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface PropsType {
  product: ProductType;
}

export default function Product(props: PropsType) {
  const product = props.product;
  const dispatch = useAppDispatch();

  const handleAddCart = (product: ProductType) => {
    dispatch(addProductController(product));
  };

  return (
    <>
      <Grid item xs={12} md={4}>
        <Box>
          <Link to={`/product/${product.id}`}>
            <Box height={"280px"} border={"1px solid #e8e8e8"}>
              <Box
                component={"img"}
                src={product.image}
                width={"100%"}
                height={"100%"}
                sx={{ objectFit: "contain", objectPosition: "center" }}
              />
            </Box>
            <Box p={2} pb={0}>
              <Box my={2}>
                <Chip
                  label={product.category}
                  color="primary"
                  size="small"
                  variant="outlined"
                  sx={{ textTransform: "capitalize" }}
                />
              </Box>
              <Box my={2}>
                <Typography fontSize={"small"}>
                  {textCut(product.title, 15)}
                </Typography>
              </Box>
              <Box my={2}>
                <Typography fontSize={"medium"} fontWeight={"bold"}>
                  Rs.{product.price}
                </Typography>
              </Box>
            </Box>
          </Link>
          <Box px={2}>
            <Button
              onClick={() => handleAddCart(product)}
              fullWidth
              variant="contained"
            >
              Add Cart
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
