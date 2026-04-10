"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Ticket, Sparkles, Gift } from "lucide-react"

const nfts = [
  {
    id: 1,
    name: "VIP Backstage Pass",
    event: "Summer Music Festival 2024",
    rarity: "Legendary",
    claimed: false,
    image: "/nft1.png",
  },
  {
    id: 2,
    name: "Golden Ticket",
    event: "Artist Meet & Greet",
    rarity: "Epic",
    claimed: true,
    image: "/nft2.png",
  },
  {
    id: 3,
    name: "Fan Club Membership",
    event: "Exclusive Online Concert",
    rarity: "Rare",
    claimed: false,
    image: "/nft3.png",
  },
]

export function NFTPGallery() {
  const { toast } = useToast()
  const [claiming, setClaiming] = useState<number | null>(null)

  const handleClaim = async (nftId: number) => {
    setClaiming(nftId)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setClaiming(null)
    toast({
      title: "NFT Claimed! 🎉",
      description: "Your NFT has been added to your wallet.",
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ticket className="h-5 w-5" />
            Dynamic NFT Tickets Gallery
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Your evolving collection of fan experiences
          </p>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nfts.map((nft, index) => (
          <motion.div
            key={nft.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl opacity-50">
                  {nft.claimed ? "🎟️" : "🎫"}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{nft.name}</h3>
                  <Badge
                    variant={nft.rarity === 'Legendary' ? 'default' : nft.rarity === 'Epic' ? 'secondary' : 'outline'}
                  >
                    {nft.rarity}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{nft.event}</p>
                {!nft.claimed ? (
                  <Button
                    onClick={() => handleClaim(nft.id)}
                    disabled={claiming === nft.id}
                    className="w-full"
                  >
                    {claiming === nft.id ? (
                      <>
                        <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                        Claiming...
                      </>
                    ) : (
                      <>
                        <Gift className="mr-2 h-4 w-4" />
                        Claim NFT
                      </>
                    )}
                  </Button>
                ) : (
                  <Badge variant="outline" className="w-full justify-center py-2">
                    Claimed ✓
                  </Badge>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}