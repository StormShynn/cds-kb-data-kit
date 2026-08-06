---
name: I_ENTPROJECTBLOCKFUNCTIONTP_3
description: Entprojectblockfunctiontp 3
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - transactional-processing
  - project
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTPROJECTBLOCKFUNCTIONTP_3

**Entprojectblockfunctiontp 3**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProjectUUID` | `ProjectUUID` |
| `ParentObjectUUID` | `ParentObjectUUID` |
| `EntProjTimeRecgIsBlkd` | `EntProjTimeRecgIsBlkd` |
| `EntProjStaffExpensePostgIsBlkd` | `EntProjStaffExpensePostgIsBlkd` |
| `EntProjServicePostingIsBlkd` | `EntProjServicePostingIsBlkd` |
| `EntProjOtherExpensePostgIsBlkd` | `EntProjOtherExpensePostgIsBlkd` |
| `EntProjPurchasingIsBlkd` | `EntProjPurchasingIsBlkd` |
| `_EnterpriseProject` | *Association* |
| `_EnterpriseProjectForUser` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Blocked Functions of Ent Project – TP'

@AccessControl: {
    authorizationCheck:     #CHECK,
    personalData.blocking:  #BLOCKED_DATA_EXCLUDED
}

@ObjectModel: {
    semanticKey:       [ 'ProjectUUID' ],
    representativeKey: 'ProjectUUID',
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    usageType: {
      dataClass:       #MIXED,
      serviceQuality:  #C,
      sizeCategory:    #L
    }
}

@VDM: {
    viewType: #TRANSACTIONAL,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations:true

define view entity I_EntProjectBlockFunctionTP_3
  as projection on R_EntProjectBlockFunctionTP_2

{
  key ProjectUUID,
      @Consumption.hidden: true
      ParentObjectUUID,
      EntProjTimeRecgIsBlkd,
      EntProjStaffExpensePostgIsBlkd,
      EntProjServicePostingIsBlkd,
      EntProjOtherExpensePostgIsBlkd,
      EntProjPurchasingIsBlkd,
//Association
      _EnterpriseProject : redirected to parent I_EnterpriseProjectTP_3,
      _EnterpriseProjectForUser

}
```
