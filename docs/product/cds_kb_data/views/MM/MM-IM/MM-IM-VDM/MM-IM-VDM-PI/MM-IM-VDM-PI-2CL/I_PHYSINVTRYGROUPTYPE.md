---
name: I_PHYSINVTRYGROUPTYPE
description: "Physinvtrygrouptype"
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYGROUPTYPE

**Physinvtrygrouptype**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PhysicalInventoryGroupType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as keord preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PhysInvtryGroupTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Physical Inventory Group Type'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                dataCategory: #VALUE_HELP,
                representativeKey: 'PhysicalInventoryGroupType',
                sapObjectNodeType: {
                                     name: 'PhysicalInventoryGroupType'
                                   },
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
              }
@Search.searchable: true
@VDM: {
        viewType: #BASIC, 
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      } 
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPIGRPTYPE'
@Analytics.dataExtraction.enabled: true
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@Consumption.ranked: true
define view entity I_PhysInvtryGroupType as select from dd07l

association [0..*] to I_PhysInvtryGroupTypeText as _Text on $projection.PhysicalInventoryGroupType = _Text.PhysicalInventoryGroupType
{
      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 2 ) as keord preserving type) as PhysicalInventoryGroupType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      _Text  
} where domname = 'KEORD' and as4local = 'A'
```
