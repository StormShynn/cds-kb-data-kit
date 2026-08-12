---
name: I_BOOVERSIONSTATUSTEXT
description: "Bill of Operations Version Status - Text"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOVERSIONSTATUSTEXT')/$value
semantic_en: "Bill of Operations Version Status - Text"
semantic_vi: "Bill of Operations Version Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "bill"
  - "operations"
  - "version"
  - "status"
  - "text"
  - "language"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_BOOVERSIONSTATUSTEXT

**Bill of Operations Version Status - Text**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOVERSIONSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsVersionStatus` | ✓ | |  | `cast(substring(txt.domvalue_l, 1, 2) as plnversn_status preserving type)` | `CHAR(2)` | Processing Status of a Version |
| `Language` | ✓ | |  | `cast(txt.ddlanguage as spras preserving type)` | `LANG(1)` | Language Key |
| `BOOVersionStatusText` |  | |  | `cast(substring(txt.ddtext, 1, 30) as plnversn_status_txt preserving type)` | `CHAR(30)` | Processing Status of a Version |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOVERSIONSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOVERSIONSTATUSTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBOOVERSSTATUTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BillOfOperationsVersionStatus'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Bill of Operations Version Status - Text'
@ObjectModel.sapObjectNodeType.name: 'BillOfOpsVersionStatusText'
@Analytics.dataExtraction.enabled: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view I_BOOVersionStatusText
  as select from dd07t as txt

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @ObjectModel.text.element: 'BOOVersionStatusText'
  key cast(substring(txt.domvalue_l, 1, 2) as plnversn_status preserving type)        as BillOfOperationsVersionStatus,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.ddlanguage as spras preserving type)                                   as Language,
      @Semantics.text: true
      cast(substring(txt.ddtext, 1, 30) as plnversn_status_txt preserving type)       as BOOVersionStatusText,

      --- Associations ---
      _Language
}
where
      txt.domname  = 'PLNVERSN_STATUS'
  and txt.as4local = 'A'
  and txt.as4vers  = '0000';
```
