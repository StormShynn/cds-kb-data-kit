---
name: I_CNCONMNLSETTLMTALLWNCCAT
description: "This CDS view provides the data to answer the following business questions: Are manual settlements of condition contracts allowed? In which cases are manual settlements of condition contracts allowed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONMNLSETTLMTALLWNCCAT')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: Are manual settlements of condition contracts allowed? In which cases are manual settlements of condition contracts allowed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Cndn Contr Mnl Settlmt Allwnc Cat — CDS view cơ bản dựa trên dd07l."
keywords:
  - "cndn"
  - "contr"
  - "mnl"
  - "settlmt"
  - "allwnc"
  - "cat"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNCONMNLSETTLMTALLWNCCAT

**This CDS view provides the data to answer the following business questions: Are manual settlements of condition contracts allowed? In which cases are manual settlements of condition contracts allowed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONMNLSETTLMTALLWNCCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnConMnlSettlmtAllwncCat` | ✓ | |  | `cast( dd07l.domvalue_l as wb2_mnl_settlmt_allowance )` | `CHAR(1)` | Manual Entry of Settlement Documents Allowed |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONMNLSETTLMTALLWNCCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONMNLSETTLMTALLWNCCAT')/$value)*

```abap
@EndUserText.label: 'Cndn Contr Mnl Settlmt Allwnc Cat'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
  }
@ObjectModel: {
  sapObjectNodeType.name: 'CndnContrMnlSettlmtAllwncCat',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CnConMnlSettlmtAllwncCat',
  resultSet.sizeCategory: #XS,
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities:   [ #ANALYTICAL_DIMENSION ,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE,
                             #SEARCHABLE_ENTITY,
                             #SQL_DATA_SOURCE,
                             #VALUE_HELP_PROVIDER ],
  usageType: {
    serviceQuality: #A,
    dataClass:      #META,
    sizeCategory:   #S
    }
  }
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@Search.searchable: true
@Consumption.ranked: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
  }
@Metadata: {
  ignorePropagatedAnnotations: true
  }

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CnConMnlSettlmtAllwncCat
  as select from dd07l

  composition [0..*] of I_CnConMnlSettlmtAllwncCatT as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wb2_mnl_settlmt_allowance ) as CnConMnlSettlmtAllwncCat,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                      as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WB2_MANUAL_SETTL_DOCS_ALLOWED'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
