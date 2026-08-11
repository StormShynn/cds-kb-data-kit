---
name: I_COMPETITIONPRESSURECATEGORYT
description: "Competition Pressure Category - Text"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPETITIONPRESSURECATEGORYT')/$value
semantic_en: "Competition Pressure Category - Text"
semantic_vi: "Competition Pressure Category - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "competition"
  - "pressure"
  - "category"
  - "text"
  - "language"
  - "desc"
tags:
  - LO
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
---
# I_COMPETITIONPRESSURECATEGORYT

**Competition Pressure Category - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPETITIONPRESSURECATEGORYT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `CompetitionPressureCategory` | ✓ | |  | `cast( dd07t.domvalue_l as competitionpressurecategory )` | `CHAR(1)` | Competition characterization of a product |
| `CompetitionPressureCatDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_CompetitionPressureCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPETITIONPRESSURECATEGORYT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPETITIONPRESSURECATEGORYT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICOMPETPRESSCATT'
@EndUserText.label: 'Competition Pressure Category - Text'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
    supportedCapabilities: #VALUE_HELP_PROVIDER,
    dataCategory: #TEXT,
    representativeKey: 'CompetitionPressureCategory',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #META
}
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view I_CompetitionPressureCategoryT
  as select from dd07t
  association [0..1] to I_Language                    as _Language                    on $projection.Language = _Language.Language
  association to parent I_CompetitionPressureCategory as _CompetitionPressureCategory on $projection.CompetitionPressureCategory = _CompetitionPressureCategory.CompetitionPressureCategory
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_CompetitionPressureCategory'
      @ObjectModel.text.element: ['CompetitionPressureCatDesc']
  key cast( dd07t.domvalue_l as competitionpressurecategory ) as CompetitionPressureCategory,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      ddtext     as CompetitionPressureCatDesc,


      _CompetitionPressureCategory,
      _Language

}
where
      domname  = 'MATKC'
  and as4local = 'A'
  and as4vers  = '0000';
```
