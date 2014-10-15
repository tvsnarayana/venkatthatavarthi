class UsersController < ApplicationController
	def index 
		@board = Board
	end
	def new
		@user = User.new()
	end
	def create
	@user = User.new(user_params)
		if @user.save
			redirect_to new_board_path
		else
			render "new"
		end
	end
	def user_params
        params.require(:user).permit( :name, :user_name, :password, :password_confirmation, :image)
    end
end
