document.addEventListener('DOMContentLoaded', () => {
    const productData = {
            "_id": {
              "$oid": "63b64dc9e3b230ebb60a495d"
            },
            "_key": "topic:2085",
            "category": "Course",
            "cid": {
              "$numberDouble": "NaN"
            },
            "commitment": "4 hours",
            "commitment_type": "custom",
            "deadline": "",
            "description": "\u003Cp\u003EHave you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.\u003C/p\u003E\n\u003Cp\u003ELet's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.\u003Cbr\u003E80% of the time in researching, and planning and 20% of the time in implementation.\u003C/p\u003E\n\u003Cp\u003ESo for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.\u003C/p\u003E\n\u003Cp\u003ESimilarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.\u003C/p\u003E\n\u003Cp\u003ELet's start thinking together, and search for how you can get the essence of project management.\u003C/p\u003E",
            "faqs": [],
            "globalTags": [],
            "isActive": true,
            "lastposttime": 0,
            "learning_outcomes": [
              "Bare minimum knowledge of project management",
              "4SA Concept",
              "Would be able to handle any project efficiently"
            ],
            "mainPid": 0,
            "postcount": 0,
            "pre_requisites": [
              "An open mind to learn any concept",
              "Thought of Unlearning and Relearning "
            ],
            "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
            "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
            "slug": "2085/technical-project-management",
            "status": "published",
            "tasks": [
              {
                "task_id": 18882,
                "task_title": "Explore the world of management",
                "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
                "status": "notworkyet",
                "assets": [
                  {
                    "asset_id": 18883,
                    "asset_title": "Technical Project Management",
                    "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                    "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
                    "asset_type": "display_asset",
                    "asset_content_type": "video"
                  },
                  {
                    "asset_id": 18884,
                    "asset_title": "Threadbuild",
                    "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "threadbuilder"
                  },
                  {
                    "asset_id": 18885,
                    "asset_title": "Structure you pointers ",
                    "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "article"
                  },
                  {
                    "asset_id": 18886,
                    "asset_title": "4SA Method",
                    "asset_description": "To explore more read more",
                    "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                    "asset_type": "display_asset",
                    "asset_content_type": "article"
                  },    
                ]
              }
            ],
            "tid": 2085,
            "timestamp": 1672891849700,
            "title": "Technical Project Management",
            "type": "project",
            "uid": 100,
            "viewcount": 0,
            "publishedAt": 1672893847792
          
    };

    const tasksarray = productData.tasks;
    const taskTitle = document.getElementById('task-title');
    const taskDescription = document.getElementById('task-description');
    const assestsContainer = document.getElementById('assets-container');
    const sideBarTasksList = document.getElementById('side-bar-tasks-list');
    const SideBarTaskTitleList = document.getElementById('side-bar-task-title');
    const Sidebar = document.getElementById('side-bar');
    const closeBtn = document.getElementById('close-btn');
    const openBtn = document.getElementById('open-btn');
    const journeyBoardStatus = document.getElementById('journey-board-status');
    const sidebarcontent = document.getElementById('side-bar-content');
    const _id18884 = `
                <div class="subcard">
                               
                          <div class="subcards-title" >
                              <img src="./up.svg" style="margin-left:10px;"/>
                               <p>Thread A</p>
                          </div>
                          <div class="subthreads">
                                  <div class="sub-thread1">
                                        <p>Sub Thread 1 </p>
                                        <textarea placeholder="Enter text here "></textarea>    
                                  </div>
                                  <div class="sub-thread1">
                                        <p>Sub Interpretation 1</p>
                                        <textarea placeholder="Enter text here "></textarea>    
                                  </div>
                          </div>
                          <div class="select-options">
                                   <div class="select-block">
                                            <img src="./bulb.svg" />
                                            <img src="./message.svg" style="margin-left: 14px;"/>
                                            <img src="./query.svg" style="margin-left: 14px;"/>
                                            <img src="./lotus.svg" style="margin-left: 14px;"/>
                                            <select name="category" class="select-category">
                                                    <option>Select category</option>
                                                    <option value="Category 1">Category 1</option>
                                                    <option value="Category 2">Category 2</option>
                                                    <option value="Category 3">Category 3</option>
                                                    <option value="Category 4">Category 4</option>
                                            </select>
                                            <select name="category" class="select-process">
                                                    <option>Select process</option>
                                                    <option value="Process 1">Process 1</option>
                                                    <option value="Process 2">Process 2</option>
                                                    <option value="Process 3">Process 3</option>
                                                    <option value="Process 4">Process 4</option>
                                            </select>      
                                   </div>
                          </div>
                          <button class="sub-thread-btn">+  Sub-Thread</button>
                          <div class="summary">
                                 <p class="summary-title">Summary for Thread A</p>
                                 <textarea class="summary-textarea" placeholder="Enter text here"></textarea>
                          </div>
                </div>
    `;
    const _id18885 = ` 
   <div class="subcard-two">
            <p class="subcard-two-title">Title</p>
            <div class="subcard-two-content"></div>
            <p class="subcard-two-heading">Content</p>
            <div class="editor-tools">
                <div class="editor-tools-options">
                    <p style="margin-left:20px;">File<p/>
                    <p style="margin-left:15px;">Edit<p/>
                    <p style="margin-left:15px;">View<p/>
                    <p style="margin-left:15px;">Insert<p/>
                    <p style="margin-left:15px;">Format<p/>
                    <p style="margin-left:15px;">tools<p/>
                    <p style="margin-left:15px;">Table<p/>
                    <p style="margin-left:15px;">help<p/>
                </div>
                <div class="editor-tools-btns">
                     <img src="./left.svg"  style="margin-left:15px;" />
                     <img src="./right.svg"  style="margin-left:10px;" />
                     <img src="./zoom.svg"  style="margin-left:16px;"/>
                     <div>Paragraph</div>
                     <img src="./dot-menu.svg"  style="margin-left:12px;"/>
                     <img src="./dot-menu.svg"  style="margin-left:2px;"/>
                     <img src="./dot-menu.svg"  style="margin-left:2px;"/>
                </div>
            </div>
            <div class="editor"></div>
   </div>
    `;
    const _id18886 = `
    <div class="subcard-three">
            <div class="subcard-three-title">
                 <img src="./up.svg" style="margin-left:14px;"/>
                 <p>Introduction A</p>
            </div>
            <p class="subcard-three-heading">The 4SA Method , How to bring a idea into progress ?</p>
            <p class="see-more">See More</p>
            <div class="subcard-three-thread">
                 <img src="./up.svg" style="margin-left:14px;"/>
                 <p>Thread A</p>
            </div>
            <p class="subcard-three-content">How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
             <p class="see-more">See More</p>
             <div class="example"><p>Example 1</p></div>
            <p class="questions">You have a concept , How will you put into progress?</p>
    </div>
    `;

    closeBtn.addEventListener('click',()=>{
       Sidebar.style.transform = 'translateX(-260px)';
       closeBtn.style.display = 'none';
       openBtn.style.display = 'block';
       journeyBoardStatus.style.display = 'flex';
       journeyBoardStatus.style.justifyContent = 'center';
      journeyBoardStatus.style.alignItems = 'center';
      sideBarTasksList.style.display = 'none';
      SideBarTaskTitleList.style.display = 'none';
    });

    openBtn.addEventListener('click',()=>{
        Sidebar.style.transform = 'translateX(0px)';
        closeBtn.style.display = 'block';
        openBtn.style.display = 'none';
        journeyBoardStatus.style.display = 'none';
        sideBarTasksList.style.display = 'block';
        SideBarTaskTitleList.style.display = 'block';

    });
    tasksarray.map((task,index)=>{
          taskTitle.innerHTML = task.task_title;
          taskDescription.innerHTML = task.task_description;
          const sidebarTaskTitle = document.createElement('li');
          sidebarTaskTitle.innerHTML = task.task_title;
          sidebarTaskTitle.className = 'sidebar-task-title';
          SideBarTaskTitleList.appendChild(sidebarTaskTitle);
          const assets = task.assets;
            assets.map((asset,index)=>{
                const assests = document.createElement('div');
                const header = document.createElement('div');
                const description = document.createElement('div');
                const content = document.createElement('div');
                const sidebartasks = document.createElement('li');
                sidebartasks.className = 'sidebartasks';
                sidebartasks.innerHTML = asset.asset_title;
                assests.className = 'assets';
                header.className = 'title';
                description.className = 'description';
                content.className = 'content';
                header.innerHTML = `<h3>${asset.asset_title}</h3>`;
                description.innerHTML = `<p><span>Description : </span>${asset.asset_description}</p>`;
                if(asset.asset_id === 18883){
                    content.innerHTML = `<iframe src=${asset.asset_content}></iframe>`;
                 }else if (asset.asset_id === 18884){
                    content.innerHTML = _id18884;
                }else if (asset.asset_id === 18885){
                    content.innerHTML = _id18885;
                }else if (asset.asset_id === 18886){
                    content.innerHTML = _id18886;
                }
               
                assests.appendChild(header);
                assests.appendChild(description);
                assests.appendChild(content);
                sideBarTasksList.appendChild(sidebartasks);
                assestsContainer.appendChild(assests);
            })

    })

});
