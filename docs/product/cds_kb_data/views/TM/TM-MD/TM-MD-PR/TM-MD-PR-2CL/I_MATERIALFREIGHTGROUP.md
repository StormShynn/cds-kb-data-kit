---
name: I_MATERIALFREIGHTGROUP
description: "Materialfreightgroup"
app_component: TM-MD-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-PR
  - interface-view
  - material
  - freight
  - component:TM-MD-PR-2CL
  - lob:Other
  - bo:Material
---
# I_MATERIALFREIGHTGROUP

**Materialfreightgroup**

| Property | Value |
|---|---|
| App Component | `TM-MD-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialFreightGroup` | ✓ | |  | `mfrgr` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaterialFreightGroupText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics.dataCategory:#DIMENSION
@Analytics.technicalName: 'ILEMATLFRTGRP'
@Analytics.internalName:#LOCAL
@AbapCatalog.entityBuffer.definitionAllowed: true
@Consumption.ranked: true
@EndUserText.label: 'Material Freight Group'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'MaterialFreightGroup'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,                                
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S                                    
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.sapObjectNodeType.name: 'MaterialFreightGroup'
define view entity I_MaterialFreightGroup
as select from
tmfg
association [0..*] to I_MaterialFreightGroupText as _Text on $projection.MaterialFreightGroup = _Text.MaterialFreightGroup
{ 
   @Search.defaultSearchElement: true
   @Search.ranking: #HIGH
   @ObjectModel.text.association: '_Text'   
   key mfrgr as MaterialFreightGroup,
 //Associations
    _Text
};   

//Objectmodel.datacatagory:#value_hep ->removed
```
