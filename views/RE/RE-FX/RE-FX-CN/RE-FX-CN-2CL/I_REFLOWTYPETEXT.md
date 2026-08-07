---
name: I_REFLOWTYPETEXT
description: Reflowtypetext
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - text-view
  - text
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_REFLOWTYPETEXT

**Reflowtypetext**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `REFlowType` | ✓ | |  | `flowtype` |  |  |
| `REFlowTypeName` |  | |  | `xflowtype` |  |  |
| `_REFlowType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REFlowType` | `I_REFlowType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IREFLOWTYPET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Flow Type - Text'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.dataCategory:#TEXT
@ObjectModel.representativeKey: ['REFlowType']
@ObjectModel.semanticKey: ['REFlowType']
@VDM.viewType:#BASIC
@Analytics.dataExtraction.enabled: true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT, 
                                        #SQL_DATA_SOURCE, 
                                        #CDS_MODELING_DATA_SOURCE, 
                                        #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_REFlowTypeText 
    as select from tivcdflowtypet
    association [0..1] to I_REFlowType    as _REFlowType      on $projection.REFlowType = _REFlowType.REFlowType
    association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras            as Language,
      @ObjectModel.foreignKey.association: '_REFlowType'
  key flowtype  as REFlowType,
      @Semantics.text: true
      xflowtype as REFlowTypeName,
    
    _REFlowType,
    _Language
}
```
