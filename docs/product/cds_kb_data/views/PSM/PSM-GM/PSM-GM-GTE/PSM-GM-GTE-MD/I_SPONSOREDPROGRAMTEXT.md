---
name: I_SPONSOREDPROGRAMTEXT
description: "Sponsored Program - Text"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDPROGRAMTEXT')/$value
semantic_en: "Sponsored Program - Text"
semantic_vi: "Sponsored Program - Text — CDS view giao diện dựa trên gmspprogramtexts."
keywords:
  - "sponsored"
  - "program"
  - "text"
  - "language"
  - "description"
  - "name"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_SPONSOREDPROGRAMTEXT

**Sponsored Program - Text**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDPROGRAMTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SponsoredProgram` | ✓ | |  | `sponsored_prog` | `CHAR(20)` | Sponsored Program |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `SponsoredProgramDescription` |  | |  | `description` | `CHAR(30)` | Sponsored Program Description |
| `SponsoredProgramName` |  | |  | `sponsoredprogramname` | `CHAR(24)` | Sponsored Program Name |
| `_SponsoredProgram` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SponsoredProgram` | `I_SponsoredProgram` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDPROGRAMTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDPROGRAMTEXT')/$value)*

```abap
@EndUserText.label: 'Sponsored Program - Text'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'SponsoredProgram'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #L
}
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.sqlViewName: 'IGMSPPROGRAMT'
@ObjectModel.sapObjectNodeType.name: 'SponsoredProgramText'
define view I_SponsoredProgramText
  as select from gmspprogramtexts
  association [1..1] to I_SponsoredProgram as _SponsoredProgram on $projection.SponsoredProgram = _SponsoredProgram.SponsoredProgram
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key sponsored_prog             as SponsoredProgram,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                   as Language,
      @Semantics.text: true
      description                as SponsoredProgramDescription,
      @Semantics.text: true
      sponsoredprogramname as SponsoredProgramName,

      _SponsoredProgram,
      _Language
}
```
