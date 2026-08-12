---
name: I_CUSTOMERMATERIALITEMUSAGE
description: "Customermaterialitemusage"
app_component: SD-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-MM
  - interface-view
  - customer
  - material
  - item-level
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
  - bo:Material
  - bo:Customer
---
# I_CUSTOMERMATERIALITEMUSAGE

**Customermaterialitemusage**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerMaterialItemUsage` | ✓ | |  | `vwpos` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustomerMaterialItemUsageT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CustomerMaterialItemUsage'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Customer Material Item Usage'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCUSTMATITMUSG'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION  ]
@ObjectModel.sapObjectNodeType.name: 'CustomerMaterialItemUsage'                                        
define view I_CustomerMaterialItemUsage
as select from tvvw

association [0..*] to I_CustomerMaterialItemUsageT        as _Text             on $projection.CustomerMaterialItemUsage = _Text.CustomerMaterialItemUsage
  
{
      @ObjectModel.text.association: '_Text'
      key vwpos      as       CustomerMaterialItemUsage,
      
      //Association
      _Text
};
```
