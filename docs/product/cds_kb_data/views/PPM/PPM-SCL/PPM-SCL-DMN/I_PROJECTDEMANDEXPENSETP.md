---
name: I_PROJECTDEMANDEXPENSETP
description: "Projectdemandexpensetp"
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - transactional-processing
  - project
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Project
---
# I_PROJECTDEMANDEXPENSETP

**Projectdemandexpensetp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectDemandExpenseUUID` | ✓ | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `ProjectDemandExpenseType` |  | |  |  |  |  |
| `ProjectUUID` |  | |  |  |  |  |
| `ReferencedObjectUUID` |  | |  |  |  |  |
| `ProjDmndBillingControlCategory` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Root` | | ✓ | | | | |
| `_ProjDmndExpenseDistr` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {authorizationCheck    : #MANDATORY,
                 personalData.blocking : #NOT_REQUIRED }
                 
@VDM: { viewType                : #TRANSACTIONAL,
        lifecycle.contract.type : #PUBLIC_LOCAL_API }
                         
@ObjectModel: { representativeKey     : 'ProjectDemandExpenseUUID',
                supportedCapabilities : [#TRANSACTIONAL_PROVIDER],
                modelingPattern       : #TRANSACTIONAL_INTERFACE,
                usageType             : { dataClass      : #TRANSACTIONAL,
                                          serviceQuality : #B,
                                          sizeCategory   : #L } } 
@Metadata.ignorePropagatedAnnotations: true                                                                                                  
@EndUserText.label: 'Project Demand for Expense - TP'

define view entity I_ProjectDemandExpenseTP
  as projection on R_ProjectDemandExpenseTP as Expense
{
  key ProjectDemandExpenseUUID,
      ProjectDemandUUID,
      ProjectDemandExpenseType,
      ProjectUUID,
      ReferencedObjectUUID,
      ProjDmndBillingControlCategory,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,

      _Root                 : redirected to parent I_ProjectDemandTP_2,
      _ProjDmndExpenseDistr : redirected to composition child I_ProjDmndExpenseDistrTP
}
```
