---
name: I_ORGLCHANGECOCODESELECTIONTP
description: "Orglchangecocodeselectiontp"
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
  - component:FI-GL-OC-2CL
  - lob:Finance
---
# I_ORGLCHANGECOCODESELECTIONTP

**Orglchangecocodeselectiontp**

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
| `OrglChangeSelectionSequence` | ✓ | |  |  |  |  |
| `OrglChangeSelectionSqncForEdit` |  | |  |  |  |  |
| `CompanyCodeRangeSign` |  | |  |  |  |  |
| `CompanyCodeRangeOption` |  | |  |  |  |  |
| `CompanyCodeRangeFrom` |  | |  |  |  |  |
| `CompanyCodeRangeTo` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_OrganizationalChange` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label:                      'OrglChange Company Code Selection - TP'

@AccessControl.authorizationCheck:       #MANDATORY // old #check ATC

@VDM.viewType:                           #TRANSACTIONAL // old #CONSUMPTION ATC
@VDM.usage.type:                         [#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type:            #PUBLIC_LOCAL_API //from I_Salesorder

//@Metadata.allowExtensions:             true //ATC
@Metadata.ignorePropagatedAnnotations:   true
@Search.searchable:                      true

@ObjectModel.usageType.serviceQuality:   #C
@ObjectModel.usageType.sizeCategory:     #XL
@ObjectModel.usageType.dataClass:        #MIXED
@ObjectModel.supportedCapabilities:      [#TRANSACTIONAL_PROVIDER] // ATC
@ObjectModel.modelingPattern:            #TRANSACTIONAL_INTERFACE

//------------------------------------------------------------------




define view entity I_OrglChangeCoCodeSelectionTP
  as projection on R_OrglChangeCoCodeSelectionTP as CoCodeSelection

{

            @ObjectModel.foreignKey.association: '_OrganizationalChange'
  key       OrganizationalChange,

  key       OrglChangeSelectionSequence,
  
            @ObjectModel.editableFieldFor: 'OrglChangeSelectionSequence'
            OrglChangeSelectionSqncForEdit,

            CompanyCodeRangeSign,

            CompanyCodeRangeOption,

            @Search.defaultSearchElement: true
            @Search.fuzzinessThreshold: 0.8
            @Search.ranking: #HIGH
            CompanyCodeRangeFrom,

            @Search.defaultSearchElement: true
            @Search.fuzzinessThreshold: 0.8
            @Search.ranking: #HIGH
            CompanyCodeRangeTo,


            LastChangeDateTime,

            LastChangedByUser,

            _OrganizationalChange : redirected to parent I_OrganizationalChangeTP


}
```
