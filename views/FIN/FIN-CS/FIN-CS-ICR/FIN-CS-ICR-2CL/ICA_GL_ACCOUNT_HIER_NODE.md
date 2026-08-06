---
name: ICA_GL_ACCOUNT_HIER_NODE
description: Ica GL Account Hier Node
app_component: FIN-CS-ICR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-ICR
  - component:FIN-CS-ICR-2CL
  - lob:Other
---
# ICA_GL_ACCOUNT_HIER_NODE

**Ica GL Account Hier Node**

| Property | Value |
|---|---|
| App Component | `FIN-CS-ICR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `hryid` | `hryid` |
| `parnode` | `parnode` |
| `racct` | `saknr` |

## Source Code

```abap
@EndUserText.label: 'Example: GL Account Hierarchy Node'
@ObjectModel: { usageType.sizeCategory: #M,
                usageType.dataClass:  #MASTER,
                usageType.serviceQuality: #X,
                supportedCapabilities: [ #SQL_DATA_SOURCE ] }     
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
define view entity ICA_GL_ACCOUNT_HIER_NODE 
   as select from hrrp_node_n {
    hryid,
    parnode,       --Parent Node
    saknr as racct --GL Account 
} where hrytyp  = 'FSVN'
    and nodetype = 'L'
    --and hryid  = 'H109/CACN/REF01'
/*
  Create a view entity from this one and adding a filter on hierarchy ID,
  for example:  
            hryid  = 'H109/CACN/REF01'
  The pattern is H109/{Chart of Account}/{Hierarchy ID}
  H109 is fixed which means the hierarchy sub type is GL Account
*/
```
