---
name: I_LOGISTICALROUNDINGPROFILET
description: "Logistical Rounding Profile - Text"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICALROUNDINGPROFILET')/$value
semantic_en: "Logistical Rounding Profile - Text"
semantic_vi: "Logistical Rounding Profile - Text — CDS view giao diện dựa trên rdtx."
keywords:
  - "logistical"
  - "rounding"
  - "profile"
  - "text"
  - "language"
  - "plant"
  - "name"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
---
# I_LOGISTICALROUNDINGPROFILET

**Logistical Rounding Profile - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICALROUNDINGPROFILET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `Plant` | ✓ | |  | `werks` | `CHAR(4)` | Plant |
| `LogisticalRoundingProfile` | ✓ | |  | `cast( rdprf as logisticalroundingprofile preserving type )` | `CHAR(4)` | Logistical Rounding Profile |
| `LogisticalRoundingProfileName` |  | |  | `text40` | `CHAR(40)` | Text, 40 Characters Long |
| `_Plant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_LogisticalRoundingProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICALROUNDINGPROFILET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICALROUNDINGPROFILET')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ILROUNDPROFILET'
@EndUserText.label: 'Logistical Rounding Profile - Text'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true 
@VDM.viewType: #BASIC
@ObjectModel: {
    supportedCapabilities: [#VALUE_HELP_PROVIDER],
    dataCategory: #TEXT,
    representativeKey: 'LogisticalRoundingProfile',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_LogisticalRoundingProfileT
  as select from rdtx
  association [1..1] to I_Plant as _Plant on $projection.Plant = _Plant.Plant
  association [0..1] to I_Language                  as _Language                  on  $projection.Language = _Language.Language
  association to parent I_LogisticalRoundingProfile as _LogisticalRoundingProfile on  $projection.LogisticalRoundingProfile = _LogisticalRoundingProfile.LogisticalRoundingProfile
                                                                                  and $projection.Plant                     = _LogisticalRoundingProfile.Plant
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,
      @ObjectModel.foreignKey.association: '_Plant'
  key werks  as Plant,
      @ObjectModel.foreignKey.association: '_LogisticalRoundingProfile'
      @ObjectModel.text.element: ['LogisticalRoundingProfileName']
  key cast( rdprf as logisticalroundingprofile preserving type ) as LogisticalRoundingProfile,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      @EndUserText.quickInfo: 'Name'
      text40 as LogisticalRoundingProfileName,
      _Plant,
      _LogisticalRoundingProfile,
      _Language
}
```
