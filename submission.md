# Project Submission Report

## 1. Student Details

- **Full Name:** Jason Kiragu
- **GitHub Username:** jakiragu
- **Email:** jason.kiragu@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/recipe-manager-166486/

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

- **Commit URL:** https://github.com/IS-PROJECT-2026/recipe-manager-166486/commit/12fc0ab893c44195069005f5b0a335c1ae38f674
- **Why this one?** It uses the conventional commits format using the type feat and the scope recipe as it was a new feature pertaining to recipe management. The body conscisely describes the three changes made: creating the recipe form, storing recipes in local storage, and adding a button linking the homepage to the form.

### B. A Mistake or Struggle

Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke. 

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/recipe-manager-166486/pull/24
- **What happened and how did you recover?** The commit and pull request that implemented the functionality allowing users to add recipes to favorites fixed and another issue's scope (#9: persisting the favorites in localStorage) . To solve this I had to close both issue 8 and 9 in one pull request as opposed to each issue having their own commits and pull request.

### C. A Pull Request You're Proud Of

Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

- **PR URL:** https://github.com/IS-PROJECT-2026/recipe-manager-166486/pull/22
- **What did you check before merging?** I ensured the changes were actually implemented i.e. the search page was created allowing users to type and serach for recipes. I ensured the feature functioned as expected and there were no unrelated changes being added.

### D. One Thing You Would Do Differently

If you had to restart this project from scratch with everything you know now, name one specific workflow decision you would change (not a code change — a Git/project management decision).

- **What would you change?** I would use more specific scopes in commit messages instead of using a broad recipe scope such as "recipe" though the commits were under the same broader scope. For example, I would distinguish between scopes such as recipe-card, add-recipe.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/recipe-manager-166486/commit/12fc0ab893c44195069005f5b0a335c1ae38f674

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues
*Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.*

<img width="1534" height="420" alt="Screenshot 2026-08-16 230954" src="https://github.com/user-attachments/assets/6c371f51-0f4a-44ee-a1a1-aae4f5ed6119" />


* **Caption:** This was the final milestone that involved polishing the website, deployment and documentation. The open issue involves creating the submission.md doc while the closed issues were bug fixes, deployment on git-pages and creating the readme doc.

### B. Project Board
*Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).*

<img width="1919" height="879" alt="Screenshot 2026-08-15 135656" src="https://github.com/user-attachments/assets/59a65c7e-fafe-43eb-852c-55ecd968f10a" />

* **Caption:** In this state the project was dealing with the recipe management milestone and the form creation and validation issues were being worked on. The first milestone, recipe foundational feature was completed with Recipe Manager Polishing and Deployment milestone undone.  

### C. Branching Architecture
*Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`).*

<img width="1520" height="767" alt="Screenshot 2026-08-16 231806" src="https://github.com/user-attachments/assets/75729eb7-402b-484d-85d7-e6b7cdd1ab63" />

* **Caption:** Each branch was linked to the issue it would fix and was labelled according to the contribution e.g. feat when new functionality is introduced, fix when solving a bug, doc when introducing documentation.

### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*

<img width="929" height="827" alt="Screenshot 2026-08-16 232600" src="https://github.com/user-attachments/assets/30a88011-89de-44ae-9986-ab6677b00cf1" />

* **Caption:** Merged recipe creation form and persistence functionality from the feature branch with with main branch and closed the associated issue, #10.

---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** Same-line conflict - Modifying the same line on different branches.

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

<img width="966" height="691" alt="Screenshot 2026-08-16 194222" src="https://github.com/user-attachments/assets/163ef9ad-59a5-4580-a94c-9362b6a368e3" />

* **Caption:** feat/33-update-hero-copy-a and feat/30-update-hero-copy-b provided alternative headers for the homepage hero section hence the warnigng that the feature branches couldnt be merged automatically

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

<img width="1902" height="752" alt="Screenshot 2026-08-16 193942" src="https://github.com/user-attachments/assets/fbd8330a-4e01-420c-8738-981053fd4e98" />

* **Caption:** The conflict was caused as github could not automatically merge feat/30-update-hero-copy-b with main branch, I manually chose the feature branch due to it's more refined wording for the hero section

#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

<img width="944" height="686" alt="Screenshot 2026-08-16 194425" src="https://github.com/user-attachments/assets/a0648eba-86bf-458f-be47-5e8ab183d0c1" />

* **Caption:** In the end the merge was successful after manually choosing to accept feat/30-update-hero-copy-b version

---

### Conflict 2 — Different Cause

**What cause did you use?** Modify/delete conflict

**Why does this cause trigger a conflict?** One branch modifies a file that has been delted in another branch. Github is unable to automatically merge a file change on a delted file.

<img width="1850" height="907" alt="Screenshot 2026-08-16 201523" src="https://github.com/user-attachments/assets/be4ae22e-86dd-48dd-96d7-0ccfe8e79755" />

* **Caption:** refactor/34-merge-favorites-functionality deleted favorites-paga.js after merging it with favorites.js while feat/35-update-favorites-page updated text in favorits-page.js, a file that prepares recipes that have been added to favorites to be displayed together.

---

### Conflict 3 — Different Cause

**What cause did you use?** Add/add conflict

**Why does this cause trigger a conflict?** Both branches add a file with the same name, however the content in them is different and github is unable to automatically selct wich version to keep.

<img width="1009" height="664" alt="Screenshot 2026-08-16 203839" src="https://github.com/user-attachments/assets/56529788-739f-421d-b7bd-4c894b818a0d" />

* **Caption:** feat/38-thank-recipe-developers created a page thanking users who contributed to recipes while feat/38-thank-recipe-manager-users thanked all users who support the website through visits and interacting with it.

---
##
## 6. Feedback & Evaluation

To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!
- [ ] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---
 
## Final Submission
 
Once your repository is complete, submit your work through the official submission form below. The form will **stop accepting responses after Monday, August 17th, 2026** — no late submissions will be accepted.
 
> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)
