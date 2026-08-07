---
name: I_MANUFACTURERPARTPROFILE
description: "Manufacturerpartprofile"
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - component:MM
  - lob:Sourcing & Procurement
---
# I_MANUFACTURERPARTPROFILE

**Manufacturerpartprofile**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturerPartProfile` | ✓ | |  | `mprof` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMMANUPRTPRF'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@Analytics.dataExtraction.enabled: true 
@Analytics.internalName: #LOCAL         
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Manufacturer Part Profile'
@Metadata.ignorePropagatedAnnotations: true  
@Analytics.dataCategory: #DIMENSION
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION   
@ObjectModel.representativeKey: 'ManufacturerPartProfile' 
@ObjectModel.supportedCapabilities: [
                                    #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
//                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]  
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API  
@VDM.viewType: #BASIC

define root view I_ManufacturerPartProfile
  as select from tmppf

  composition [0..*] of I_ManufacturerPartProfileText as _Text
{
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
      @Semantics.text: true
      @ObjectModel.sapObjectNodeTypeReference: 'ManufacturerPartProfile'
  key mprof as ManufacturerPartProfile,

      _Text
}
```
