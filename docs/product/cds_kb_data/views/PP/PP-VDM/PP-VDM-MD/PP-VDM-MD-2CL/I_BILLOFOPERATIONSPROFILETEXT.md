---
name: I_BILLOFOPERATIONSPROFILETEXT
description: "Bill of Operations Profile - Text"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONSPROFILETEXT')/$value
semantic_en: "Bill of Operations Profile - Text"
semantic_vi: "Bill of Operations Profile - Text — CDS view giao diện dựa trên tca4t."
keywords:
  - "bill"
  - "operations"
  - "profile"
  - "text"
  - "language"
  - "application"
  - "name"
tags:
  - PP
  - bo:companycode
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_BILLOFOPERATIONSPROFILETEXT

**Bill of Operations Profile - Text**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONSPROFILETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BillOfOperationsApplication` | ✓ | |  | `plnaw` | `CHAR(1)` | Application of the task list |
| `BillOfOperationsProfile` | ✓ | |  | `profidnetz` | `CHAR(7)` | Profile |
| `BillOfOperationsProfileName` |  | |  | `profi_txt` | `CHAR(40)` | Text for Profile |
| `_Appl` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Appl` | `I_BOOApplication` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONSPROFILETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONSPROFILETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBOOPROFTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 002}
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING}
@VDM.viewType: #BASIC
@EndUserText.label: 'Bill of Operations Profile - Text'
@ObjectModel.representativeKey: 'BillOfOperationsProfile'
@ObjectModel.sapObjectNodeType.name: 'BillOfOperationsProfileText'
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT


define view I_BillOfOperationsProfileText
  as select from tca4t as txt
  association [1..1] to I_BOOApplication as _Appl     on $projection.BillOfOperationsApplication = _Appl.BillOfOperationsApplication
  association [0..1] to I_Language       as _Language on $projection.Language = _Language.Language
{
      //tca4t
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key txt.spras      as Language,
      @ObjectModel.foreignKey.association: '_Appl'
  key txt.plnaw      as BillOfOperationsApplication,
      @ObjectModel.text.element: 'BillOfOperationsProfileName'
  key txt.profidnetz as BillOfOperationsProfile,
      @Semantics.text: true
      txt.profi_txt  as BillOfOperationsProfileName,
      /* Associations */
      _Appl,
      _Language
}
```
