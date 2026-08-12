---
name: I_ORGLCHANGEPRODUCTTP
description: "Orglchangeproducttp"
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
  - product
  - component:FI-GL-OC-2CL
  - lob:Finance
---
# I_ORGLCHANGEPRODUCTTP

**Orglchangeproducttp**

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
| `Product` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `ProductForEdit` |  | |  |  |  |  |
| `PlantForEdit` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ProfitCenterByOrglChange` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_OrganizationalChange` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label:                      'Organizational Change Products - TP'

@AccessControl.authorizationCheck:       #MANDATORY // old #check ATC

@VDM.viewType:                           #TRANSACTIONAL // old #CONSUMPTION ATC
@VDM.usage.type:                         [#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type:            #PUBLIC_LOCAL_API //from I_Salesorder

//@Metadata.allowExtensions:             true //ATC
@Metadata.ignorePropagatedAnnotations:   true
//@Search.searchable:                    true

@ObjectModel.usageType.serviceQuality:   #C
@ObjectModel.usageType.sizeCategory:     #XL
@ObjectModel.usageType.dataClass:        #MIXED
@ObjectModel.supportedCapabilities:      [#TRANSACTIONAL_PROVIDER] // ATC
@ObjectModel.modelingPattern:            #TRANSACTIONAL_INTERFACE

//------------------------------------------------------------------


define view entity I_OrglChangeProductTP
  as projection on R_OrglChangeProductTP as Product

{
              @ObjectModel.foreignKey.association: '_OrganizationalChange'
  key         OrganizationalChange,

  key         Product,
  key         Plant,
              @ObjectModel.editableFieldFor:'Product'
              ProductForEdit,
              @ObjectModel.editableFieldFor:'Plant'
              PlantForEdit,

              ControllingArea,

              ProfitCenter,

              ProfitCenterByOrglChange,

              LastChangeDateTime,

              LastChangedByUser,

              _OrganizationalChange : redirected to parent I_OrganizationalChangeTP


}
```
