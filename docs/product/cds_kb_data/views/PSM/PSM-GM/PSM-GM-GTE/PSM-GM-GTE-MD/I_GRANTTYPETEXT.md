---
name: I_GRANTTYPETEXT
description: "Grant Type - Text"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTTYPETEXT')/$value
semantic_en: "Grant Type - Text"
semantic_vi: "Grant Type - Text — CDS view giao diện dựa trên gmgrtypetexts."
keywords:
  - "grant"
  - "type"
  - "text"
  - "language"
  - "description"
tags:
  - PSM
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GRANTTYPETEXT

**Grant Type - Text**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantType` | ✓ | |  | `grant_type` | `CHAR(2)` | Grant Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `GrantTypeDescription` |  | |  | `cast (description as gmis_grant_type_desc)` | `CHAR(30)` | Grant Type Description |
| `_Language` | | ✓ | | | | |
| `_GrantType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_GrantType` | `I_GrantType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Grant Type - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled:true
@ObjectModel.usageType: { 
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}
@ObjectModel: {
  representativeKey: 'GrantType',
  dataCategory: #TEXT
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IGMGRANTTYPET'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'GrantTypeText'
define view I_GrantTypeText
  as select from gmgrtypetexts
    association [1..1] to I_Language as _Language on $projection.Language = _Language.Language
    association [0..1] to I_GrantType as _GrantType on $projection.GrantType = _GrantType.GrantType
{

      @ObjectModel.foreignKey.association: '_GrantType'
  key grant_type                                   as GrantType,
  
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                                     as Language,
  
      @Semantics.text: true
      cast (description as gmis_grant_type_desc)   as GrantTypeDescription,

      _Language,
      _GrantType
}
```
