import React from "react";
import { Avatar, Box, Rating } from "@mui/material";
import Grid from "@mui/material/Grid";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const ProductReviewCard = () => {
  return (
    <div className="text-start p-5 bg-[#121212] rounded-2xl shadow-xl max-w-md mx-auto border border-[#1f2937] hover:shadow-[#0f766e]/30 transition-shadow duration-300">
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs="auto">
          <Box>
            <Avatar
              sx={{
                width: 56,
                height: 56,
                bgcolor: "#1e3a3a", // muted teal-charcoal
                color: "#cbd5e1", // soft gray-white
                fontWeight: "bold",
                fontSize: "1.5rem",
                border: "2px solid #334155", // subtle border
                boxShadow: "0 2px 6px rgba(13,148,136,0.2)",
              }}
            >
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs>
          <div className="space-y-1">
            <div>
              <p className="font-semibold text-lg text-slate-200">Ram</p>
              <p className="text-slate-400 text-xs">April 5, 2023</p>
            </div>

            <Rating
              value={4.5}
              name="half-rating"
              readOnly
              precision={0.5}
              size="small"
              sx={{
                color: "#14b8a6",
                "& .MuiRating-iconFilled": { color: "#14b8a6" },
                "& .MuiRating-iconEmpty": { color: "#475569" },
              }}
            />

            <div className="mt-2 flex items-start text-slate-200">
              <FormatQuoteIcon
                fontSize="small"
                className="text-[#14b8a6]/70 mt-1 mr-1"
              />
              <p className="italic text-sm leading-relaxed">
                Nice product, I love this shirt.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
