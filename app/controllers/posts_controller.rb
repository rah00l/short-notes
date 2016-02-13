class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user! ,:except => [:index, :show, :recent_posts, :subscribe_user]
  before_action :categories_list ,:only => [:index, :show]

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.all
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    @post = Post.find(params[:id])
    @image_name = params[:image_name].gsub! 'small', 'medium'
  end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Post was successfully created.' }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # RECENT_POST /recent_posts/1
  # For having flash of recent-posts
  def recent_posts
    @recent_posts = Post.offset(rand(Post.count)).first
    respond_to do |format|
      format.js
    end
  end

  # SUBSCRIBE_USER /subscribe_user
  def subscribe_user
    sub = Subscribe.create email: params[:email] if params[:email].present?
    if sub.save
      PostMailer.user_subscribe(sub.email).deliver_now
      flash[:notice] = 'Success! You are subscribed.'
    else
      flash[:error] = sub.errors.full_messages.last
    end
    redirect_to :back
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params[:post]
    end

    def categories_list
      @categories = Category.all
    end
end
