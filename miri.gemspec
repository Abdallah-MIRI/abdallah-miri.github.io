# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "miri"
  spec.version       = "0.1.0"
  spec.authors       = ["Abdallah Miri"]
  spec.email         = [""]

  spec.summary       = "This template belongs to my website, Abdallah Miri, and is dedicated to the Arabic language."
  spec.homepage      = "https://abdallah-miri.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.4"
end
