require "test_helper"

class DrinkBuilderControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get drink_builder_index_url
    assert_response :success
  end
end
