require 'test_helper'

class Api::FriendsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_friends_index_url
    assert_response :success
  end

  test "should get update" do
    get api_friends_update_url
    assert_response :success
  end

end
