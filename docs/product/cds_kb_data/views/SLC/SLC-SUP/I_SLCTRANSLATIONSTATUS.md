---
name: I_SLCTRANSLATIONSTATUS
description: "This view provides supported values for SLCTRANSLATIONSTATUS. The values and their meanings are: Translation Status Code Fixed Value Description 00 Not Relevant for Translation 01 To Be Translated 02 In Translation 03 Translated"
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SLCTRANSLATIONSTATUS')/$value
semantic_en: "This view provides supported values for SLCTRANSLATIONSTATUS. The values and their meanings are: Translation Status Code Fixed Value Description 00 Not Relevant for Translation 01 To Be Translated 02 In Translation 03 Translated"
semantic_vi: "Translation Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "translation"
  - "status"
tags:
  - SLC
  - bo:companycode
  - component:SLC-SUP
  - interface-view
  - SLC-SUP
---
# I_SLCTRANSLATIONSTATUS

**This view provides supported values for SLCTRANSLATIONSTATUS. The values and their meanings are: Translation Status Code Fixed Value Description 00 Not Relevant for Translation 01 To Be Translated 02 In Translation 03 Translated**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SLCTRANSLATIONSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SLCTranslationStatus` | ✓ | |  | `cast(substring( domvalue_l, 1, 2 ) as /srmsmc/translation_status )` | `NUMC(2)` | Translation Relevance and Status |
| `_SLCTranslationStatusText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SLCTranslationStatusText` | `I_SLCTranslationStatusText` | [0..*] |
| `_Text` | `I_SLCTranslationStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SLCTRANSLATIONSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SLCTRANSLATIONSTATUS')/$value)*

```abap
@EndUserText.label: 'Translation Status'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SLCTranslationStatus'
@AbapCatalog.sqlViewName: 'ISLCTRANSLSTS'

define view I_SLCTranslationStatus
  as select from dd07l
  association [0..*] to I_SLCTranslationStatusText as _SLCTranslationStatusText on $projection.SLCTranslationStatus = _SLCTranslationStatusText.SLCTranslationStatus
  association [0..*] to I_SLCTranslationStatusText as _Text on $projection.SLCTranslationStatus = _Text.SLCTranslationStatus
{
       @ObjectModel.text.association: '_SLCTranslationStatusText'
  key  cast(substring( domvalue_l, 1, 2 )  as /srmsmc/translation_status ) as SLCTranslationStatus,
       _SLCTranslationStatusText,
       _Text
}
where
      domname  = '/SRMSMC/TRANSLATION_STATUS'
  and as4local = 'A'
```
