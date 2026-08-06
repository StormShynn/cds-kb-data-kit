---
name: I_PHYSINVTRYTYPE
description: Physinvtrytype
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
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
# I_PHYSINVTRYTYPE

**Physinvtrytype**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PhysicalInventoryType` | `cast ( substring( domvalue_l, 1, 1 ) as invart preserving type)` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PhysInvtryTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Physical Inventory Type'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                dataCategory: #VALUE_HELP,
                representativeKey: 'PhysicalInventoryType',
                sapObjectNodeType: {
                                     name: 'PhysicalInventoryType'
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
@Analytics.technicalName: 'IPITYPE'
@Analytics.dataExtraction.enabled: true
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@Consumption.ranked: true
define view entity I_PhysInvtryType as select from dd07l
   
association [0..*] to I_PhysInvtryTypeText as _Text on $projection.PhysicalInventoryType = _Text.PhysicalInventoryType

{
      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as invart preserving type) as PhysicalInventoryType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,

      _Text  
} where domname = 'INVART' and as4local = 'A'
```
