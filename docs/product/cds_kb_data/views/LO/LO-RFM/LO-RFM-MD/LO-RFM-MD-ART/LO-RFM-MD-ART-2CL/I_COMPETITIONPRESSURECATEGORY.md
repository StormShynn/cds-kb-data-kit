---
name: I_COMPETITIONPRESSURECATEGORY
description: "Code of Competition Pressure of a Product"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPETITIONPRESSURECATEGORY')/$value
semantic_en: "Code of Competition Pressure of a Product"
semantic_vi: "Code of Competition Pressure of a Product — CDS view giao diện dựa trên dd07l."
keywords:
  - "code"
  - "competition"
  - "pressure"
  - "product"
  - "category"
  - "domain"
  - "value"
tags:
  - LO
  - bo:material
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
  - product
---
# I_COMPETITIONPRESSURECATEGORY

**Code of Competition Pressure of a Product**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPETITIONPRESSURECATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompetitionPressureCategory` | ✓ | |  | `cast( dd07l.domvalue_l as competitionpressurecategory )` | `CHAR(1)` | Competition characterization of a product |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPETITIONPRESSURECATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPETITIONPRESSURECATEGORY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICOMPETPRESSCAT'
@EndUserText.label: 'Code of Competition Pressure of a Product'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'CompetitionPressureCategory'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER,
                                     #SQL_DATA_SOURCE]
@ObjectModel: {           
    compositionRoot: true,
    representativeKey: 'CompetitionPressureCategory',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    resultSet.sizeCategory: #XS,
    usageType.dataClass: #META,
    dataCategory: #VALUE_HELP
    
}
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define root view I_CompetitionPressureCategory
  as select from dd07l
  composition [0..*] of I_CompetitionPressureCategoryT as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as competitionpressurecategory ) as CompetitionPressureCategory,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                  as DomainValue,
      _Text

}
where
      domname  = 'MATKC'
  and as4local = 'A'
  and as4vers  = '0000';
```
