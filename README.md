# online-GIS-programming-course
Activities for teaching GIS programming online, taken from my IDCE 30274 course at Clark University 

# Online Introductory Python Course Materials
This repo contains labs, and other materials for a six-week introductory GIS programming course. This course can be delivered entirely online. The course builds on my **six-week, introduction to Python course.** By the end of these activities, students should:
- have an intermediate understanding of Python, including maniuplating a variet of file formats, concatentating data, and presenting basic analytic or graphical outputs;
- demonstrate proficiency creating a range of different scripts; and
- have online examples the show their ability to navigate, comment on, document, and share code.

## Required Software / Web Applications
This class uses Python 3.x for coding, [Jupyter notebooks](https://jupyter.org/) – specifically [Google Colaboratory](https://colab.research.google.com/) – for demonstrations and lectures, and Github for submitting code work. I have found that using Google Colaboratory (or “Colab”) greatly reduces the frustration of relying on University IT maintenance and labs since the coding is done via browser and everything is run on Google servers. The downside is that it requires good connectivity. There are other huge benefits to using Jupyter notebooks, including the fact that you can combine code, outputs, explanatory text, and multi-media files. Read more about them in this [*Nature* blog post](https://www.nature.com/articles/d41586-018-07196-1). [Colab is well documented](https://colab.research.google.com/notebooks/intro.ipynb) and a good first stop for students is the [Overview of Colab Features](https://colab.research.google.com/notebooks/basic_features_overview.ipynb). 

Although all of the activities presented here can be done in-browser, I strongly encourage students to use a code editor (I use [Atom](https://atom.io) but my course assistant prefers [PyCharm’s community edition](https://www.jetbrains.com/pycharm/download)) and [Github desktop](https://desktop.github.com) to work offline so they don't lose work due to connectivity issues. There are a myriad of ways to set up a local Python environment for students: I have found [Anaconda](https://www.anaconda.com/products/individual) to be relatively straight forward and it includes a version of Jupyter Notebooks that runs locally, but uses a web browser as an interface. 

I recommend instructors survey their students before class to ensure their computing environment and connectivity won’t pose any problems. The end of this README provides links to sample survey questions and a Google form that you can copy and adapt for this purpose.

**To complete these activities students will need:**
- a Github account (specifically [the student developer pack](https://education.github.com/pack)) for receiving assignments and sharing code, and for...
- a free student account on Carto. Students can _only_ get one of these by authenticating with their [Github Student Developer pack](https://education.github.com/pack) and not the normal, free, Github account. [Go here for details and links](https://carto.com/help/getting-started/student-accounts/): the process shouldn't take long.
- a [Google account](https://www.google.com), and
- a version of Python 3 running locally in the event that they cannot access Colab.

## Contents & Delivery of Activities

There are six folders in this repository labeled in chronological order according to the week in which they are delivered (e.g. `Week_1`). I release each lab as a stand-alone Github repository that students clone or fork into their personal Github account from which to work. Lab repositories contain instructions for completion in the `README` file. Some labs are accompanied by a starter `.py` files, data files, or other associated content, while other labs contain only the readme file. 

To submit labs students edit the `README` files to answer basic questions about the labs or share their thoughts, ensure their well-commented `.py` or `.ipynb` file is in the repo, and submit a link to the repo. In some classes I’ve used [Github Classroom](https://classroom.github.com) to manage this, which doesn't require a URL submission. The lab folders in this repo contain sample solutions in an Colab notebook.

By using this workflow, students learn the basics of coding in Python while concurrently learning to document and share code. At the end of the course, students also have online examples of their work in an industry-standard environment.

### Exam & Final Project
TBD.

## Philosophy of the Course
It may be helpful to understand how these activities fit into the larger scheme of my courses. I teach web mapping and GIS in the context of humanitarian affairs. This means that not all students will go on to become web developers or GISers and may instead (or also!) become program officers in humanitarian organizations. The primary goal of my courses is to teach how technology works and how geography or concepts of “humanitarianism” or “international development” can be mediated by it. My courses include lectures, readings and discussions on software development, licensing, diversity and inclusivity, low-connectivity environments, the digital divide, and the structure of humanitarian programs. I also introduce students to critical GIS and the emerging “Digital Geographies” conversation ([book here](https://uk.sagepub.com/en-gb/eur/digital-geographies/book258271) | [AAG specialty group here](https://twitter.com/digitalgeogsg)). In some courses, I introduce activities about [Human Centered Design](https://www.designkit.org/human-centered-design) and place an emphasis on understanding user needs. I challenge students to constantly, and critically, evaluate technology and ask who it is meant to serve, who it actually serves, and why.

## Understand Student Access to Technology & Associated Risks

I watched professors and instructors from all disciplines transition to online teaching in response to the widespread lockdowns and university closures of the 2020 Coronavirus Pandemic with mixed emotions. While I was glad to see so many of them making an extremely valiant efforts, I was also disheartened to see how many of them assumed they would continue to deliver their classes online without any thought to how variable Internet access may be among their students. Nor did I see any of them really consider risks or threats to privacy that their students might be dealing with as a result of the switch to online learning. I wrote [this blogpost](https://medium.com/@Shadrock/teaching-in-the-time-of-corona-part-i-7bb97ce6c715) to provide instructors with a background about why they needed to understand their student’s access to technology and supplied [these draft survey questions and form](https://docs.google.com/document/d/1xcArlcY3EIuTDKAoo4mizWZDsP6t8wpRSMFPTMnVDQU/edit) that can be modified for this purpose.

Please familiarize yourself with the relevant national, state, and institutional policies that govern how student privacy should be protected online. In the U.S., the [Family Educational Rights and Privacy Act (FERPA)](https://studentprivacy.ed.gov/?src=fpco) is a great place to start. Two other great resources for you and your students are [the toolkit for online surveillance self-defense from the Electronic Frontier Foundation]( https://ssd.eff.org) and [“Security in a Box” from the Tactical Technology Collective]( https://securityinabox.org). I’ll update this repo with more resources for online safety and privacy as I find them.   

## References / Citations / Credits
These activities were created as part of my “Introduction to Python” and “Introduction to Computer Programming for GIS” courses at Clark University’s [Department of International Development, Community, and Environment](https://www.clarku.edu/schools/idce/). My course assistant [Shashank Gupta](URL here) **need to add URL**! also contributed heavily to these materials and did a great job of helping me streamline a workflow for delivering the course. All links work as of September 2020, but should be checked periodically.

The [license for this repo is CC-BY-SA-4.0](https://github.com/Shadrock/online-python-course/blob/master/LICENSE.md), so feel free to use or adapt all of this material in your class or training program! Please contribute via pull request or get in touch with me at shadrock.roberts@gmail.com.
