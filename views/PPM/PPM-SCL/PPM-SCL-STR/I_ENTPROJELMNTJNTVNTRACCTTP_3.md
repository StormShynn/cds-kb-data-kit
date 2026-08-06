---
name: I_ENTPROJELMNTJNTVNTRACCTTP_3
description: Entprojelmntjntvntraccttp 3
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
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJELMNTJNTVNTRACCTTP_3

**Entprojelmntjntvntraccttp 3**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProjectElementUUID` | `ProjectElementUUID` |
| `ProjectUUID` | `ProjectUUID` |
| `JointVenture` | `JointVenture` |
| `JointVentureCostRecoveryCode` | `JointVentureCostRecoveryCode` |
| `JointVentureEquityType` | `JointVentureEquityType` |
| `JntVntrProjectType` | `JntVntrProjectType` |
| `JntIntrstBillgClass` | `JntIntrstBillgClass` |
| `JntIntrstBillgSubClass` | `JntIntrstBillgSubClass` |
| `_EnterpriseProjectElement` | *Association* |
| `_EnterpriseProject` | *Association* |

## Source Code

```abap
@AccessControl: {
    authorizationCheck:     #CHECK,
    personalData.blocking:  #BLOCKED_DATA_EXCLUDED
}
@ObjectModel: {
    semanticKey:       [ 'ProjectElementUUID' ],
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    representativeKey: 'ProjectElementUUID',

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

@EndUserText.label: 'JVA Data of Ent Project Element – TP'
@Metadata.ignorePropagatedAnnotations:true

define view entity I_EntProjElmntJntVntrAcctTP_3
  as projection on I_EntProjectElementJVATP_2

{
  key ProjectElementUUID, 
       ProjectUUID, 
      JointVenture,
      JointVentureCostRecoveryCode,
      JointVentureEquityType,
      JntVntrProjectType,
      JntIntrstBillgClass,
      JntIntrstBillgSubClass,      
//Associations
      _EnterpriseProjectElement : redirected to parent I_EnterpriseProjectElementTP_3,
      _EnterpriseProject: redirected to I_EnterpriseProjectTP_3
}
```
