---
name: I_ORGLCHANGEPRFTCTRSELECTIONTP
description: "Orglchangeprftctrselectiontp"
app_component: FI-GL-OC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-OC
  - interface-view
  - transactional-processing
  - component:FI-GL-OC-2CL
  - lob:Finance
---
# I_ORGLCHANGEPRFTCTRSELECTIONTP

**Orglchangeprftctrselectiontp**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrganizationalChange` | ✓ | |  |  |  |  |
| `ControllingArea` | ✓ | |  |  |  |  |
| `ProfitCenter` | ✓ | |  |  |  |  |
| `ControllingAreaForEdit` |  | |  |  |  |  |
| `ProfitCenterForEdit` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_OrganizationalChange` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label:                      'OrglChange Profit Center Selection - TP'

@AccessControl.authorizationCheck:       #MANDATORY // old #check ATC

@VDM.viewType:                           #TRANSACTIONAL // old #CONSUMPTION ATC
@VDM.usage.type:                         [#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type:            #PUBLIC_LOCAL_API //from I_Salesorder

//@Metadata.allowExtensions:             true
@Metadata.ignorePropagatedAnnotations:   true

@ObjectModel.usageType.serviceQuality:   #C
@ObjectModel.usageType.sizeCategory:     #XL
@ObjectModel.usageType.dataClass:        #MIXED
@ObjectModel.supportedCapabilities:      [#TRANSACTIONAL_PROVIDER] // ATC
@ObjectModel.modelingPattern:            #TRANSACTIONAL_INTERFACE

//------------------------------------------------------------------

define view entity I_OrglChangePrftCtrSelectionTP
  as projection on R_OrglChangePrftCtrSelectionTP as PrftCtrSelection

{


           @ObjectModel.foreignKey.association: '_OrganizationalChange'
  key      OrganizationalChange,

  key      ControllingArea,
  key      ProfitCenter,
           @ObjectModel.editableFieldFor:'ControllingArea'
           ControllingAreaForEdit,
           @ObjectModel.editableFieldFor:'ProfitCenter'
           ProfitCenterForEdit,

           LastChangeDateTime,

           LastChangedByUser,

           _OrganizationalChange : redirected to parent I_OrganizationalChangeTP
}
```
