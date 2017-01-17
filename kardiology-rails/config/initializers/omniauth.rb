OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE
  provider :google_oauth2, '145508987012-s64edm2pesc2vjjlbdqlbld12mrbt9to.apps.googleusercontent.com', 'sT1lTafkU_D0Hr94PrO5soZC', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
