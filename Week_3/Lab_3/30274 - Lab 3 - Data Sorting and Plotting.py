#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np


# In[2]:


data = pd.read_csv("us_counties_covid19_daily.csv")


# In[3]:


data.head()


# In[4]:


grouped_single = data.groupby('state').agg({'cases': ['sum']})


# In[5]:


print(grouped_single)


# In[6]:


grouped_single.columns= ['Total_Cases']


# In[7]:


grouped_single = grouped_single.reset_index()


# In[8]:


print(grouped_single)


# In[9]:


grouped_single.sort_values(by=['Total_Cases'], ascending=False)


# In[10]:


filter_state = data[(data.state == "New York")]


# In[11]:


print(filter_state)


# In[15]:


filter_state.to_csv("concat_state.csv")


# In[ ]:




