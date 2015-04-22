module Admin
  class ProductsController < ApplicationController

    def index
      @products = Product.all
    end

    def show
      @product = Product.find(params[:id])
    end

    def new
      @product = Product.new
    end

    def create
      @product = Product.new(product_params)
      @product.save
      redirect_to admin_product_path(@product)
    end

    def edit
      @product = Product.find(params[:id])
    end

    def update
      @product = Product.find(params[:id])

      if @product.update(product_params)
        redirect_to admin_product_path(@product)
      else
        render 'edit'
      end
    end



    def destroy
      @product = Product.find(params[:id])
      @product.destroy
      redirect_to admin_products_path
    end

    private


    def product_params
      params.require(:product).permit(:name, :medium, :description, :price, :image)
    end

  end
end