import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

driver = webdriver.Chrome()

file1 = open("list_of_urls.txt", 'r')
file2 = open("output.txt", "a")
word = file1.readline()
urls = []
while word:
    temp = word.split("^^*^^")
    urls.append(temp)
    word = file1.readline()
    
for a in urls:
    url = a[0]
    driver.get(url)

    response = BeautifulSoup(driver.page_source, 'html.parser')
    ele = response.find_all('a', class_='hfpxzc')

    scrollable_box = driver.find_elements(By.CSS_SELECTOR, '.Ntshyc')
    previous_height = driver.execute_script("return arguments[0].scrollHeight", scrollable_box)
    
    while True:
        driver.execute_script("arguments[0].scrollTop += arguments[0].offsetHeight;", scrollable_box[0])
        time.sleep(2)  
        response = BeautifulSoup(driver.page_source, 'html.parser')
        ele = response.find_all('a', class_='hfpxzc')
        for i, r in enumerate(ele):
            # print(r["href"])
            file2.writelines(r["href"]+"^^*^^"+a[1])
            file2.writelines("\n")
    
        new_height = driver.execute_script("return arguments[0].scrollHeight", scrollable_box[0])
        if new_height == previous_height:
            break
        previous_height = new_height