---
name: I_ENTPROJJNTVNTRACCTGTP_3
description: "Entprojjntvntracctgtp 3"
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
# I_ENTPROJJNTVNTRACCTGTP_3

**Entprojjntvntracctgtp 3**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectUUID` | ✓ | |  |  |  |  |
| `JointVenture` |  | |  |  |  |  |
| `JointVentureCostRecoveryCode` |  | |  |  |  |  |
| `JointVentureEquityType` |  | |  |  |  |  |
| `JntVntrProjectType` |  | |  |  |  |  |
| `JntIntrstBillgClass` |  | |  |  |  |  |
| `JntIntrstBillgSubClass` |  | |  |  |  |  |
| `_EnterpriseProject` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
    authorizationCheck:     #CHECK,
    personalData.blocking:  #BLOCKED_DATA_EXCLUDED
}
@ObjectModel: {
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

@EndUserText.label: 'JVA Data of Enterprise Project – TP'
@Metadata.ignorePropagatedAnnotations:true

define view entity I_EntProjJntVntrAcctgTP_3
  as projection on I_EnterpriseProjectJVATP_2

{
  key ProjectUUID,
      JointVenture,
      JointVentureCostRecoveryCode,
      JointVentureEquityType,
      JntVntrProjectType,
      JntIntrstBillgClass,
      JntIntrstBillgSubClass,
//Association      
      _EnterpriseProject : redirected to parent I_EnterpriseProjectTP_3 
}
```
