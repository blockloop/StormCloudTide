require 'rubygems'
 
begin
  root = File.expand_path(File.dirname(Ti.App.getPath))
rescue
  root = File.dirname(__FILE__)
end
gem_path = File.join(root, '../', 'Resources', 'vendor', 'bundle','ruby','1.9.1')
Gem.use_paths(gem_path)

@resources_dir = Ti.App.getPath