import React, { useState } from "react";
import "./productList.css";

import { Images, DynamicIcon } from "../../../constants";
import { Box } from "../../../components";
import {
  Button,
  Breadcrumbs,
  styled,
  emphasize,
  Chip,
  FormControl,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";

const ProductList = () => {
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });

  const handleChange = (event, key) => {
    setSelections((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const [selections, setSelections] = useState({
    select1: 10,
    select2: 10,
    select3: 10,
    select4: 10,
  });

  return (
    <>
      <div className="right-content w-100 ">
        <div className="card shadow border-0 w-100 flex-row p-4 m-0">
          <h5 className="mb-0">Product List</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="/"
              label="Dashboard"
              icon={<DynamicIcon iconName="Home" />}
            />
            <StyledBreadcrumb
              component="a"
              href="/product-list"
              label="Product"
            />
            <StyledBreadcrumb
              component="a"
              href="/product-list"
              label="Product List"
            />
          </Breadcrumbs>
        </div>

        <div className="row p-4">
          <div className="col-md-3">
            <Box
              color={["#ed68ff", "#48d483"]}
              icon={<DynamicIcon iconName="Pending" />} //linear-gradient(#ed68ff,#be0ee1)
            ></Box>
          </div>
          <div className="col-md-3">
            <Box
              color={["#ed68ff", "#be0ee1"]}
              icon={<DynamicIcon iconName="LocalShipping" />}
            ></Box>
          </div>
          <div className="col-md-3">
            <Box
              color={["#2c78e5", "#60aff5"]}
              icon={<DynamicIcon iconName="LocalMallOutlined" />}
            ></Box>
          </div>
          <div className="col-md-3">
            <Box
              color={["#e1950e", "#f3cd29"]}
              icon={<DynamicIcon iconName="StarsOutlined" />}
            ></Box>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-0">
          <h3 className="hd">Best Selling Products</h3>

          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>Show by</h4>
              <FormControl size="small" className="w-100">
                <Select
                  labelId="select1-label"
                  id="select1"
                  value={selections["select1"] || ""}
                  onChange={(event) => handleChange(event, "select1")}
                  className="w-100 drop"
                >
                  <MenuItem value={10}>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={20}>Ten</MenuItem>
                  <MenuItem value={30}>Twenty</MenuItem>
                  <MenuItem value={40}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>Show by</h4>
              <FormControl size="small" className="w-100">
                <Select
                  labelId="select2-label"
                  id="select2"
                  value={selections["select2"] || ""}
                  onChange={(event) => handleChange(event, "select2")}
                  className="w-100  drop"
                >
                  <MenuItem value={10}>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={20}>Ten</MenuItem>
                  <MenuItem value={30}>Twenty</MenuItem>
                  <MenuItem value={40}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>Show by</h4>
              <FormControl size="small" className="w-100">
                <Select
                  labelId="select3-label"
                  id="select3"
                  value={selections["select3"] || ""}
                  onChange={(event) => handleChange(event, "select3")}
                  className="w-100  drop"
                >
                  <MenuItem value={10}>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={20}>Ten</MenuItem>
                  <MenuItem value={30}>Twenty</MenuItem>
                  <MenuItem value={40}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>Show by</h4>
              <FormControl size="small" className="w-100">
                <Select
                  labelId="select4-label"
                  id="select4"
                  value={selections["select4"] || ""}
                  onChange={(event) => handleChange(event, "select4")}
                  className="w-100  drop"
                >
                  <MenuItem value={10}>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={20}>Ten</MenuItem>
                  <MenuItem value={30}>Twenty</MenuItem>
                  <MenuItem value={40}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src={Images.Skirt}
                            alt="skirt"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womens</td>
                  <td>richman</td>
                  <td>
                    <del className="old">₹210</del>
                    <span className="new text-success">₹190</span>
                  </td>
                  <td>30</td>
                  <td>4.9</td>
                  <td>380</td>
                  <td>₹38k</td>
                  <td>
                    <div className="d-flex actions align-items-center">
                      <Button color="secondary" className="secondary">
                        <DynamicIcon iconName="Visibility" />
                      </Button>
                      <Button color="success" className="success">
                        <DynamicIcon iconName="Create" />
                      </Button>
                      <Button color="error" className="error">
                        <DynamicIcon iconName="Delete" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src={Images.Skirt}
                            alt="skirt"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womens</td>
                  <td>richman</td>
                  <td>
                    <del className="old">₹210</del>
                    <span className="new text-success">₹190</span>
                  </td>
                  <td>30</td>
                  <td>4.9</td>
                  <td>380</td>
                  <td>₹38k</td>
                  <td>
                    <div className="d-flex actions align-items-center">
                      <Button color="secondary" className="secondary">
                        <DynamicIcon iconName="Visibility" />
                      </Button>
                      <Button color="success" className="success">
                        <DynamicIcon iconName="Create" />
                      </Button>
                      <Button color="error" className="error">
                        <DynamicIcon iconName="Delete" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src={Images.Skirt}
                            alt="skirt"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womens</td>
                  <td>richman</td>
                  <td>
                    <del className="old">₹210</del>
                    <span className="new text-success">₹190</span>
                  </td>
                  <td>30</td>
                  <td>4.9</td>
                  <td>380</td>
                  <td>₹38k</td>
                  <td>
                    <div className="d-flex actions align-items-center">
                      <Button color="secondary" className="secondary">
                        <DynamicIcon iconName="Visibility" />
                      </Button>
                      <Button color="success" className="success">
                        <DynamicIcon iconName="Create" />
                      </Button>
                      <Button color="error" className="error">
                        <DynamicIcon iconName="Delete" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src={Images.Skirt}
                            alt="skirt"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womens</td>
                  <td>richman</td>
                  <td>
                    <del className="old">₹210</del>
                    <span className="new text-success">₹190</span>
                  </td>
                  <td>30</td>
                  <td>4.9</td>
                  <td>380</td>
                  <td>₹38k</td>
                  <td>
                    <div className="d-flex actions align-items-center">
                      <Button color="secondary" className="secondary">
                        <DynamicIcon iconName="Visibility" />
                      </Button>
                      <Button color="success" className="success">
                        <DynamicIcon iconName="Create" />
                      </Button>
                      <Button color="error" className="error">
                        <DynamicIcon iconName="Delete" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src={Images.Skirt}
                            alt="skirt"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womens</td>
                  <td>richman</td>
                  <td>
                    <del className="old">₹210</del>
                    <span className="new text-success">₹190</span>
                  </td>
                  <td>30</td>
                  <td>4.9</td>
                  <td>380</td>
                  <td>₹38k</td>
                  <td>
                    <div className="d-flex actions align-items-center">
                      <Button color="secondary" className="secondary">
                        <DynamicIcon iconName="Visibility" />
                      </Button>
                      <Button color="success" className="success">
                        <DynamicIcon iconName="Create" />
                      </Button>
                      <Button color="error" className="error">
                        <DynamicIcon iconName="Delete" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src={Images.Skirt}
                            alt="skirt"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womens</td>
                  <td>richman</td>
                  <td>
                    <del className="old">₹210</del>
                    <span className="new text-success">₹190</span>
                  </td>
                  <td>30</td>
                  <td>4.9</td>
                  <td>380</td>
                  <td>₹38k</td>
                  <td>
                    <div className="d-flex actions align-items-center">
                      <Button color="secondary" className="secondary">
                        <DynamicIcon iconName="Visibility" />
                      </Button>
                      <Button color="success" className="success">
                        <DynamicIcon iconName="Create" />
                      </Button>
                      <Button color="error" className="error">
                        <DynamicIcon iconName="Delete" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src={Images.Skirt}
                            alt="skirt"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womens</td>
                  <td>richman</td>
                  <td>
                    <del className="old">₹210</del>
                    <span className="new text-success">₹190</span>
                  </td>
                  <td>30</td>
                  <td>4.9</td>
                  <td>380</td>
                  <td>₹38k</td>
                  <td>
                    <div className="d-flex actions align-items-center">
                      <Button color="secondary" className="secondary">
                        <DynamicIcon iconName="Visibility" />
                      </Button>
                      <Button color="success" className="success">
                        <DynamicIcon iconName="Create" />
                      </Button>
                      <Button color="error" className="error">
                        <DynamicIcon iconName="Delete" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img
                            src={Images.Skirt}
                            alt="skirt"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-0">
                        <h6>Tops and skirt set for Female</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womens</td>
                  <td>richman</td>
                  <td>
                    <del className="old">₹210</del>
                    <span className="new text-success">₹190</span>
                  </td>
                  <td>30</td>
                  <td>4.9</td>
                  <td>380</td>
                  <td>₹38k</td>
                  <td>
                    <div className="d-flex actions align-items-center">
                      <Button color="secondary" className="secondary">
                        <DynamicIcon iconName="Visibility" />
                      </Button>
                      <Button color="success" className="success">
                        <DynamicIcon iconName="Create" />
                      </Button>
                      <Button color="error" className="error">
                        <DynamicIcon iconName="Delete" />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="d-flex tableFooter">
              <p>
                showing <b>12</b> of <b>60</b> results{" "}
              </p>
              <Pagination
                count={10}
                variant="outlined"
                color="primary"
                showFirstButton
                showLastButton
                className="ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
