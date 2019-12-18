require 'test_helper'

class Api::FriendStatusControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_friend_status_index_url
    assert_response :success
  end

end
