require 'sinatra'
enable :sessions

get '/' do
  redirect '/bowling.html'
end

post '/score' do
  session[:roll1] = params[:roll1]
  session[:roll2] = params[:roll2]
end
