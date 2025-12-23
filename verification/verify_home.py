from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto('http://localhost:4200/')

            # Wait for main content
            expect(page.get_by_role('heading', name='Awaken an element of Yogi in your life.')).to_be_visible(timeout=10000)

            # Take a screenshot of the top
            page.screenshot(path='verification/home_top.png')
            print('Screenshot saved to verification/home_top.png')

            # Scroll down to Offerings
            offerings_header = page.get_by_role('heading', name='Isha Hatha Yoga & Yogi Re Offerings')
            offerings_header.scroll_into_view_if_needed()
            expect(offerings_header).to_be_visible()
            page.screenshot(path='verification/home_offerings.png')
            print('Screenshot saved to verification/home_offerings.png')

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == '__main__':
    run()
