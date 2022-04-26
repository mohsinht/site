---
title: What the f*** is CQRS?
date: 2022/4/26
description: CQRS explanation for someone who hasn't heard of it before.
tag: engineering, design pattern
author: You
---

## CQRS

**C**ommand **Q**uery **R**esponsibility **S**egregation (abbreviated as CQRS) is an architecture pattern that promotes the divide into read and write operations of your datastore.

Just from the abbreviation itself, you can guess it separates read and write part of a datastore. 

## Why do you need CQRS?

Commonly, you would design your datastore based on either how you'll write data to it or read data from it. You'll optimise on either of read or write operations depending on your use-case. As your data grows, you might need to represent data in different formats (i.e creating ledger, daily reports, transcripts etc.). If you use transactions to get these representations, you'll have to create multiple models for each of the representation and then write to these models, which makes it very slow.

CQRS on the other hand, gives you power of both reading and writing. With event-sourcing in place, you can handle write-side part of the data store by saving data incrementally in the database as it changes. You can then generate any representation of the read-side by going through the incremental changes. This means, the system generates any new database tailored for the read-side.

## Write-side: Commands

Event sourcing is commonly used to mutate the state in CQRS, however it is not a hard-fast rule to use event sourcing in CQRS.

In the write-side datastore, we only store the sequence of the events and the payloads with it to re-construct a meaningful state. This can be termed as 'event-streams'.

### Event sourcing

Event sourcing simply means that you save events instead of updating states directly in a datastore.

For example, if you are developing tic-tac-toe, for any point in time if you want to show the current state in the Tic-tac-toe grid you would simply print the following:

o | x | o   
x | o | x   
x | o | x  

And your data would be stored something like this: `[[0, 1, 0], [1, 0, 1], [1, 0, 0]]`

With event sourcing in place, instead of storing just the last state, you would save all the turns taken by each of the player incrementally.

#### Event 0:   

– | – | –   
– | – | –   
– | – | –   

```
{ 
    version: 0, 
    grid: [
        [nil, nil, nil], 
        [nil, nil, nil], 
        [nil, nil, nil]
    ]
}
```

#### Event 1:   

– | – | –   
– | o | –   
– | – | –   

```
{ 
    version: 1, 
    grid: [
        [nil, nil, nil], 
        [nil, 1, nil], 
        [nil, nil, nil]
    ]
}
```

#### Event 2:   
– | – | –   
– | o | –   
x | – | –   

```
{ 
    version: 2, 
    grid: [
        [nil, nil, nil], 
        [nil, 1, nil], 
        [2, nil, nil]
    ]
}
```

and so on. You don't save the end state or the current state in the tic-tac-toe board, you save each of the turn. This turn can be considered as an event.

**Event** -> An event is an immutable piece of information that is used to change the state of the data model.

**Command** -> A command is any instruction to make a change in the data model. It must contain necessary information for that change.

If you want to make any change in the tic-tac-toe grid, you execute a command to `takeTurn` in the system and the system creates an event for that command.

So if someone asks you to get the current state of the grid, you simply fetch all the turns and then process each of the turns to create the final state. Note that order of the events is very important here.

#### Benefits of Event sourcing

- You get the feature of undoing a change.
- You get a whole history of changes. An audit log.
- Having the whole chain of changes gives you more debugging power.
- Can be converted into microservices.

#### Drawbacks of Event sourcing

- You have to save a lot of unneccessary data in the database.
- Getting end result is complex is time-consuming since it involves re-constructing the final state. You see in the above example, if we want to fetch the current grid in Tic-tac-toe, we'll have to calculate turns after all of the events.
- Solving some bug in the event stream is very difficult. 
- Event sourcing opens a whole new programming paradigm for you. It adds extra mental-effort to think in event-sourcing.

### Example command

Lets take an example from tic-tac-toe again, assume you you need to add an 'O' at second column in third row:

– | – | –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– | – | –    
– | o | –&nbsp;&nbsp;->&nbsp;&nbsp;– | o | –    
x | – | –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x | __o__ | –   

What info do you need to make this change?

```
{
    command: 'addCharacter',
    characters: ['o', 'x'],
    position: [3, 2], 
    player: 1
}
```

<small>* characters are for [p1, p2] respectively, and position indicates [row, col]</small>

In the command, we can do validations, error handling, checks etc. For the above command, we can check whether `character.length === 2`, otherwise throw error.

We use the command payload to create an event such as following:
```
{
    event: 'characterAdded',
    payload: {
        characters: ['o', 'x'],
        position: [3, 2], 
        player: 1
    },
    version: 3
}
```

And save it in the database.

## Read-side: Queries

For the read-side datastore, we save the final meaningful state using the events emitted from the commands.


### Event listeners

To reconstruct the read-side datastore, we go through all of the events stored in our event-streams one-by-one and apply the necessary changes. 

For example, the above `version: 3` command emits an event that we can listen to and create the following result:
 
– | – | –   
– | o | –   
x | o | –   

```
{
    grid: [
        [nil, nil, nil], 
        [nil, 1, nil], 
        [2, 1, nil]
    ]
}
```

### Projection

The final step of the CQRS is to actually store the result in the database. This step is called a projection. Or this action is called projecting data to database.

For example, the above payload will be stored in the database on the read-side datastore. This will make it easy to get the final result at any point in time.


<img className="cqrs-img" src="/images/CQRS.png"/>