---
name: I_BASICMATERIALVH
description: "Basicmaterialvh"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - value-help
  - material
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BASICMATERIALVH

**Basicmaterialvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BasicMaterial` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBASICMATVH'
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.viewType: #BASIC 
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED   // #CHECK
@ObjectModel.representativeKey: 'BasicMaterial'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true 
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #VALUE_HELP_PROVIDER,
                                      #SEARCHABLE_ENTITY ]


@Metadata.ignorePropagatedAnnotations: true

define view I_BasicMaterialVH 
 as select from I_BasicMaterial 
{
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Search.ranking: #HIGH
  key  BasicMaterial
  };
```
