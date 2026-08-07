---
name: I_CUSTOMERMATERIALITEMUSAGET
description: Customermaterialitemusaget
app_component: SD-MD-MM-2CL
software_component: SAPSCORE
release_state: released
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
# I_CUSTOMERMATERIALITEMUSAGET

**Customermaterialitemusaget**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CustomerMaterialItemUsage` | ✓ | |  | `vwpos` |
| `Language` | ✓ | |  | `spras` |
| `CustomerMaterialItemUsageDesc` |  | |  | `bezei` |
| `_CustomerMaterialItemUsage` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerMaterialItemUsage` | `I_CustomerMaterialItemUsage` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CustomerMaterialItemUsage'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Customer Material Item Usage - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCUSTMATLITMUT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL 
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT  ]
define view I_CustomerMaterialItemUsageT
as select from tvvwt

association[0..1] to I_CustomerMaterialItemUsage as _CustomerMaterialItemUsage on $projection.CustomerMaterialItemUsage = _CustomerMaterialItemUsage.CustomerMaterialItemUsage
association[0..1] to I_Language  as _Language  on $projection.Language = _Language.Language

{  
    @ObjectModel.foreignKey.association: '_CustomerMaterialItemUsage'
    key vwpos as CustomerMaterialItemUsage,

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as CustomerMaterialItemUsageDesc,
    
    _CustomerMaterialItemUsage,
    _Language
};
```
