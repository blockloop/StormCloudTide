require 'rubygems'
 
begin
  root = File.expand_path(File.dirname(Ti.App.getPath))
rescue
  root = File.dirname(__FILE__)
end
puts "Using root path: #{root}"
gem_path = File.join(root, '../', 'Resources', 'vendor', 'bundle','ruby','1.9.1')
puts "Gem path: #{File.expand_path gem_path}"
puts "Path exists? #{File.exists?(gem_path)}"
Gem.use_paths(gem_path)

@resources_dir = Ti.App.getPath
# End init


require 'sequel'


class Db
  def initialize *args
    @connection = ::Sequel.sqlite("#{@resources_dir}/app.db")
  end
end


window.DB = Db.new