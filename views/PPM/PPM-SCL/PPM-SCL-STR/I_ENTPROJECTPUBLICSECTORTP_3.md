---
name: I_ENTPROJECTPUBLICSECTORTP_3
description: Entprojectpublicsectortp 3
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
# I_ENTPROJECTPUBLICSECTORTP_3

**Entprojectpublicsectortp 3**

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
| `Fund` | `Fund` |
| `FundIsFixAssigned` | `FundIsFixAssigned` |
| `FunctionalAreaIsFixAssigned` | `FunctionalAreaIsFixAssigned` |
| `GrantID` | `GrantID` |
| `GrantIsFixAssigned` | `GrantIsFixAssigned` |
| `SponsoredProgram` | `SponsoredProgram` |
| `_EnterpriseProject` | *Association* |

## Source Code

```abap
@AccessControl: {
    authorizationCheck:     #CHECK,
    personalData.blocking:  #BLOCKED_DATA_EXCLUDED
}

@VDM: {
    viewType: #TRANSACTIONAL,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    usageType: {
      dataClass:       #MIXED,
      serviceQuality:  #C,
      sizeCategory:    #L
    }
}

@EndUserText.label: 'Public Sector Data of Ent Project – TP'
@Metadata.ignorePropagatedAnnotations:true

define view entity I_EntProjectPublicSectorTP_3 as projection on I_EntProjectPublicSectorTP_2
    
  {      
  key ProjectUUID,      
      Fund, 
      FundIsFixAssigned,
      FunctionalAreaIsFixAssigned,
      GrantID,
      GrantIsFixAssigned,
      SponsoredProgram,     
// Association
     _EnterpriseProject : redirected to parent I_EnterpriseProjectTP_3   
}
```
