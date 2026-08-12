---
name: I_GRANTTEXT
description: "Grant - Text"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTTEXT')/$value
semantic_en: "Grant - Text"
semantic_vi: "Grant - Text — CDS view giao diện dựa trên gmgrtexts."
keywords:
  - "grant"
  - "text"
  - "language"
  - "name"
  - "description"
tags:
  - PSM
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GRANTTEXT

**Grant - Text**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  | `grant_nbr` | `CHAR(20)` | Grant |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `GrantName` |  | |  | `short_desc` | `CHAR(20)` | Short Description of the Grant |
| `GrantDescription` |  | |  | `description` | `CHAR(80)` | Descriptive Text |
| `_Grant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Grant` | `I_Grant` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTTEXT')/$value)*

```abap
@EndUserText.label: 'Grant - Text'
@Analytics: { 
              dataExtraction.enabled: true, 
              internalName: #LOCAL 
            } 
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'GrantID'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #L
}
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IGMGRANTT'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@AbapCatalog.preserveKey: true
@ObjectModel.sapObjectNodeType.name: 'GrantText'

define view I_GrantText
  as select from gmgrtexts

  association [1..1] to I_Grant as _Grant on $projection.GrantID = _Grant.GrantID  //for authorization check
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Grant'
  key grant_nbr                                          as GrantID,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                                           as Language,
      @Semantics.text: true
      short_desc                                         as GrantName,
      @Semantics.text: true
      description                                        as GrantDescription,

      _Grant,
      _Language
}
```
