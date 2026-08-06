---
name: I_ORGLCHANGEWBSELEMENTTP
description: Orglchangewbselementtp
app_component: FI-GL-OC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-OC
  - interface-view
  - transactional-processing
  - wbs
  - component:FI-GL-OC-2CL
  - lob:Finance
  - bo:WBS
---
# I_ORGLCHANGEWBSELEMENTTP

**Orglchangewbselementtp**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `OrganizationalChange` | `OrganizationalChange` |
| key `WBSElementInternalID` | `WBSElementInternalID` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `ControllingArea` | `ControllingArea` |
| `ProfitCenter` | `ProfitCenter` |
| `ProfitCenterByOrglChange` | `ProfitCenterByOrglChange` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `_OrganizationalChange` | *Association* |

## Source Code

```abap
@EndUserText.label:                      'Organizational Change WBS Elements - TP'

@AccessControl.authorizationCheck:       #MANDATORY // old #check wg. ATC

@VDM.viewType:                           #TRANSACTIONAL // old #CONSUMPTION ATC
@VDM.usage.type:                         [#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type:            #PUBLIC_LOCAL_API //from I_Salesorder

//@Metadata.allowExtensions:             true //ATC
@Metadata.ignorePropagatedAnnotations:   true
//@Search.searchable:                    true

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities:      [#TRANSACTIONAL_PROVIDER] // ATC
@ObjectModel.modelingPattern:            #TRANSACTIONAL_INTERFACE

//------------------------------------------------------------------


 


define view entity I_OrglChangeWBSElementTP
  as projection on R_OrglChangeWBSElementTP as WBSElement


{
            @ObjectModel.foreignKey.association: '_OrganizationalChange'
  key       OrganizationalChange,


  key       WBSElementInternalID,

            WBSElementExternalID,


            ControllingArea,

            ProfitCenter,

            ProfitCenterByOrglChange,

            LastChangeDateTime,

            LastChangedByUser,

            _OrganizationalChange : redirected to parent I_OrganizationalChangeTP


}
```
