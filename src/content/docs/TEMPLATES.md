---
title: "Content Templates"
type: "template"
description: "Templates for creating new content in the Heaton Moor Golf Club vault"
tags: ["template", "documentation", "guide"]
---

# 📝 Templates

This file contains templates for creating new content in the Heaton Moor Golf Club vault.

## 🏆 Event Template

```markdown
---
title: "Event Name"
date: YYYY-MM-DD
type: event
participants: []
winner: ""
tags: [event]
---

# Event Name

Brief description of the event.

## Details
- **Date**: 
- **Location**: 
- **Participants**: 
- **Winner**: 

## Results
[Event results and highlights]

## Related
- Participants: [[members/participant-name]]
- Course: [[courses/course-name]]
```

## 👥 Member Template

```markdown
---
name: "Full Name"
join_date: YYYY-MM-DD
handicap: 0
status: active
type: member
tags: [member]
---

# Full Name

Brief member description.

## Member Information
- **Join Date**: 
- **Handicap**: 
- **Status**: 
- **Membership Type**: 

## Recent Activity
- [[events/event-name|Event Name]]

## Notes
[Additional member notes]
```

## 🏌️‍♂️ Course Template

```markdown
---
name: "Course Name"
location: "Location"
holes: 18
par: 72
type: course
tags: [course]
---

# Course Name

Course description and overview.

## Course Details
- **Location**: 
- **Holes**: 
- **Par**: 
- **Length**: 
- **Difficulty**: 

## Course Features
- Feature 1
- Feature 2
- Feature 3

## Related Events
- [[events/event-name|Event Name]]
```

## 💰 Pricing Template

```markdown
---
title: "Pricing Title"
year: YYYY
type: pricing
effective_date: YYYY-MM-DD
tags: [pricing]
---

# Pricing Title

Pricing description and overview.

## Membership Options

### Option 1
- **Price**: 
- **Duration**: 
- **Features**: 

### Option 2
- **Price**: 
- **Duration**: 
- **Features**: 

## Additional Fees
- Fee 1: 
- Fee 2: 

## Notes
[Additional pricing notes]
```

## 📖 History Template

```markdown
---
title: "Historical Event/Period"
date: YYYY-MM-DD
type: history
tags: [history]
---

# Historical Event/Period

Description of the historical event or period.

## Timeline
- **Date**: 
- **Location**: 
- **Key People**: 

## Details
[Detailed historical information]

## Impact
[Impact on the club]

## Related
- [[members/member-name]]
- [[events/event-name]]
```

## 🏷️ Tag Guide

### Common Tags
- `#event` - All events
- `#member` - All members
- `#course` - All courses
- `#pricing` - All pricing information
- `#history` - All historical content
- `#active` - Currently active items
- `#completed` - Completed events/items
- `#upcoming` - Future events

### Tag Combinations
- `#event #completed` - Finished events
- `#event #upcoming` - Future events
- `#member #active` - Active members
- `#pricing #current` - Current pricing 