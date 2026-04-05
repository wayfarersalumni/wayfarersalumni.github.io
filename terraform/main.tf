terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

variable "cloudflare_api_token" {
  description = "Cloudflare API Token"
  type        = string
  sensitive   = true
}

variable "domain" {
  description = "Domain name for the site"
  type        = string
  default     = "wayfarersalumni.org.uk"
}

variable "github_pages_ip" {
  description = "GitHub Pages IP addresses"
  type        = list(string)
  default     = ["185.199.108.153", "185.199.109.153", "185.199.110.153", "185.199.111.153"]
}

# Main domain CNAME to github pages
resource "cloudflare_record" "github_pages" {
  zone_id = var.cloudflare_zone_id
  name    = var.domain
  value   = "wayfarersalumni.github.io"
  type    = "CNAME"
  proxied = true
}

variable "cloudflare_zone_id" {
  description = "Cloudflare Zone ID"
  type        = string
  sensitive   = true
}

# Optional: Add www subdomain as CNAME
resource "cloudflare_record" "www" {
  zone_id = var.cloudflare_zone_id
  name    = "www"
  value   = "wayfarersalumni.github.io"
  type    = "CNAME"
  proxied = true
}

output "cname_record" {
  value = cloudflare_record.github_pages.hostname
}
