const DEFAULT_OPENAI_ADS_PIXEL_ID = "Ui4FFWmostPwksH32uC8BF";
const VALID_PIXEL_ID = /^[A-Za-z0-9_-]{1,128}$/;

export function getOpenAIAdsPixelId() {
  const configuredPixelId = process.env.OPENAI_ADS_PIXEL_ID?.trim();

  return configuredPixelId && VALID_PIXEL_ID.test(configuredPixelId)
    ? configuredPixelId
    : DEFAULT_OPENAI_ADS_PIXEL_ID;
}
