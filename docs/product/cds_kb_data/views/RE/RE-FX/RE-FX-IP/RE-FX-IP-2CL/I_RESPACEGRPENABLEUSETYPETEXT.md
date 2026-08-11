---
name: I_RESPACEGRPENABLEUSETYPETEXT
description: "Space Group Enable Use Type - Text"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGRPENABLEUSETYPETEXT')/$value
semantic_en: "Space Group Enable Use Type - Text"
semantic_vi: "Space Group Enable Use Type - Text — CDS view giao diện dựa trên tivipsgenusetypt."
keywords:
  - "space"
  - "group"
  - "enable"
  - "use"
  - "type"
  - "text"
  - "language"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
  - bo:project
---
# I_RESPACEGRPENABLEUSETYPETEXT

**Space Group Enable Use Type - Text**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGRPENABLEUSETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RESpaceGrpEnableUseType` | ✓ | |  | `iosgenableusetype` | `CHAR(4)` | Usage Enablement Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `RESpaceGrpEnableUseTypeText` |  | |  | `xiosgenableusetype` | `CHAR(60)` | Description Usage Enablement Type |
| `_Language` | | ✓ | | | | |
| `_RESpaceGrpEnableUseType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGRPENABLEUSETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGRPENABLEUSETYPETEXT')/$value)*

```abap
@EndUserText.label: 'Space Group Enable Use Type - Text'
@AbapCatalog.sqlViewName: 'IREIOENUSTYPET'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'RESpaceGrpEnableUseType'
@ObjectModel.semanticKey: ['RESpaceGrpEnableUseType']

@Search.searchable: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY                   ]

@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

define view I_RESpaceGrpEnableUseTypeText
  as select from tivipsgenusetypt
//  association to parent I_RESpaceGrpEnableUseType as _RESpaceGrpEnableUseType on $projection.RESpaceGrpEnableUseType = _RESpaceGrpEnableUseType.RESpaceGrpEnableUseType
  association to parent I_RESpaceGrpEnableUseType as _RESpaceGrpEnableUseType on $projection.RESpaceGrpEnableUseType = _RESpaceGrpEnableUseType.RESpaceGrpEnableUseType
  association [1..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_RESpaceGrpEnableUseType'
      @ObjectModel.text.element: ['RESpaceGrpEnableUseTypeText']
  key iosgenableusetype  as RESpaceGrpEnableUseType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras              as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      xiosgenableusetype as RESpaceGrpEnableUseTypeText,
      _RESpaceGrpEnableUseType,
      _Language

}
```
