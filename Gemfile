source "https://rubygems.org"
# gem "eventmachine", "~> 1.2.7"

gem "jekyll", "~> 4.4.1"
gemspec
# gem "miri"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!
group :jekyll_plugins do
   gem "jekyll-admin"
   gem "jekyll-feed", "~> 0.17"
   gem 'jekyll-admin'
   gem 'jekyll-paginate-v2'
   gem 'jekyll-seo-tag'
   gem 'jekyll-sitemap'
   gem 'jekyll-archives'
   gem 'jekyll-toc'
   gem "jekyll-reading-time"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end


# Performance-booster for watching directories on Windows
platforms :windows do
  gem "wdm", "~> 0.1"
end
# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.8.0", :platforms => [:jruby]

