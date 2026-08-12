---
name: I_PRAACCOUNTINGDOCUMENTTYPET
description: "PRA Accounting Document Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCUMENTTYPET')/$value
semantic_en: "PRA Accounting Document Type - Text"
semantic_vi: "PRA Accounting Document Type - Text — CDS view giao diện dựa trên PRA Accounting Document Type - Text."
keywords:
  - "pra"
  - "accounting"
  - "document"
  - "type"
  - "text"
  - "origin"
  - "language"
  - "name"
tags:
  - IS
  - account
  - bo:journalentry
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAACCOUNTINGDOCUMENTTYPET

**PRA Accounting Document Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCUMENTTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Origin` | ✓ | |  | `system_src` | `CHAR(2)` | Application |
| `AccountingDocumentType` | ✓ | |  | `doc_type` | `CHAR(2)` | Document Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `AccountingDocumentTypeName` |  | |  | `doc_type_desc` | `CHAR(30)` | Document Type Description |
| `_Origin` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Origin` | `I_PRAApplicationOrigin` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCUMENTTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCUMENTTYPET')/$value)*

```abap
@EndUserText.label: 'PRA Accounting Document Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVACCTGDOCTYPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'AccountingDocumentType'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRAAccountingDocumentTypeT
  as select from /pra/acc_doc_tyt
  association [0..1] to I_PRAApplicationOrigin as _Origin on $projection.Origin = _Origin.Origin
{
    @ObjectModel.foreignKey.association: '_Origin'
  key system_src as Origin,
  key doc_type   as AccountingDocumentType,
      @Semantics.language
  key spras     as Language,
      @Semantics.text
      doc_type_desc as AccountingDocumentTypeName,
      _Origin
}
```
