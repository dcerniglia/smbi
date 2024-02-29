import { motion } from "framer-motion";
import Icon from "./Icon";
import { useFetcher } from "@remix-run/react";


export default function Voting({
  id,
  totalVoteCount,
  userVoteCount,
}: {
  id: string;
  totalVoteCount: number;
  userVoteCount: number;
}) {
  const updateVoteFetcher = useFetcher();
  
  return (
    <updateVoteFetcher.Form method="post">
      <div className="flex gap-3 items-center">
        <motion.button
          type="submit"
          name="_action"
          value="upVote"
          whileTap={{ scale: 1.4, speed: 3 }}
        >
          <Icon icon={"thumbs-up"} size="xl" className="text-white"></Icon>
        </motion.button>
        <p className="text-white">{totalVoteCount}</p>
        <motion.button
          type="submit"
          name="_action"
          value="downVote"
          whileTap={{ scale: 1.4, speed: 3 }}
        >
          <Icon icon={"thumbs-down"} size="xl" className="text-white"></Icon>
        </motion.button>
      </div>
    </updateVoteFetcher.Form>
  );
}
