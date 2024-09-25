from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from bs4 import BeautifulSoup
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker
from dotenv import load_dotenv
import os
import time
import schedule
import threading

# load env
load_dotenv()

# use env for setup
DATABASE_URL = os.getenv('DATABASE_URL')

# init sqlalchemy
engine = create_engine(DATABASE_URL)  # connect to db
Session = sessionmaker(bind=engine)   # create session
session = Session()                   # create session object
Base = declarative_base()             # base class

# table structure
class BuzzerBeater(Base):
    __tablename__ = 'buzzer_beater'
    id = Column(Integer, primary_key=True)      
    player = Column(String(100))                
    game = Column(String(100))                  
    team = Column(String(100))                 
    opp = Column(String(100))                  
    distance = Column(String(50))               

Base.metadata.create_all(engine)

# scraper
def scrape_and_store():
    
    url = 'https://www.basketball-reference.com/friv/buzzer-beaters.html'
    
    # chrome headless browsing
    chrome_options = Options()
    chrome_options.add_argument("--headless")  
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--log-level=3")  

    
    capabilities = DesiredCapabilities.CHROME
    capabilities['goog:loggingPrefs'] = { 'browser':'SEVERE' }  

    
    for key, value in capabilities.items():
        chrome_options.set_capability(key, value)

    # launch browser
    driver = webdriver.Chrome(options=chrome_options)
    driver.get(url)  
    
    
    time.sleep(5)
    
    # parse with bs4
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    driver.quit()  
    
    # find all rows
    rows = soup.find_all('tr', attrs={'data-row': True})
    results = []  

    # iterate thru rows
    for row in rows:
        # extract name
        player_tag = row.find('th', {'data-stat': 'player'})
        player = player_tag.find('a').text if player_tag and player_tag.find('a') else ''
        
        # extract details
        game = row.find('td', {'data-stat': 'game'}).text if row.find('td', {'data-stat': 'game'}) else ''
        team = row.find('td', {'data-stat': 'team'}).text if row.find('td', {'data-stat': 'team'}) else ''
        opp = row.find('td', {'data-stat': 'opp'}).text if row.find('td', {'data-stat': 'opp'}) else ''
        distance = row.find('td', {'data-stat': 'distance'}).text if row.find('td', {'data-stat': 'distance'}) else ''

        # check for data
        if player or game or team or opp or distance:
            # check for duplicates
            existing_entry = session.query(BuzzerBeater).filter_by(
                player=player, game=game, team=team, opp=opp, distance=distance
            ).first()
            # add
            if not existing_entry:
                buzzer_beater = BuzzerBeater(
                    player=player,
                    game=game,
                    team=team,
                    opp=opp,
                    distance=distance
                )
                session.add(buzzer_beater)  # new entry
                # append to list
                results.append({
                    'player': player,
                    'game': game,
                    'team': team,
                    'opp': opp,
                    'distance': distance
                })
    
    # commit
    session.commit()
    print("completed & inserted into db)

    # print
    for result in results:
        print(result)

def run_scheduler():
    # schedule to run every day
    schedule.every(24).hours.do(scrape_and_store)
    
    while True:
        schedule.run_pending()
        time.sleep(1)

# main
if __name__ == '__main__':
    print("starting...")
    scrape_and_store()  
