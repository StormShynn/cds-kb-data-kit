---
name: I_PRAACCOUNTINGDOCUMENTTYPE
description: "PRA Accounting Document Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCUMENTTYPE')/$value
semantic_en: "PRA Accounting Document Type"
semantic_vi: "PRA Accounting Document Type — CDS view giao diện dựa trên PRA Accounting Document Type."
keywords:
  - "pra"
  - "accounting"
  - "document"
  - "type"
  - "origin"
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
# I_PRAACCOUNTINGDOCUMENTTYPE

**PRA Accounting Document Type**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCUMENTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Origin` | ✓ | |  | `system_src` | `CHAR(2)` | Application |
| `AccountingDocumentType` | ✓ | |  | `doc_type` | `CHAR(2)` | Document Type |
| `_Text` | | ✓ | | | | |
| `_Origin` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRAAccountingDocumentTypeT` | [0..*] |
| `_Origin` | `I_PRAApplicationOrigin` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCUMENTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCUMENTTYPE')/$value)*

```abap
@EndUserText.label: 'PRA Accounting Document Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVACCTGDOCTYP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'AccountingDocumentType'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAAccountingDocumentType'
define view I_PRAAccountingDocumentType
  as select from /pra/acc_doc_ty
  association [0..*] to I_PRAAccountingDocumentTypeT as _Text   on  $projection.Origin                 = _Text.Origin
                                                                and $projection.AccountingDocumentType = _Text.AccountingDocumentType
  association [0..1] to I_PRAApplicationOrigin       as _Origin on  $projection.Origin = _Origin.Origin
{
      @ObjectModel.foreignKey.association: '_Origin'
  key system_src as Origin,
      @ObjectModel.text.association: '_Text'
  key doc_type   as AccountingDocumentType,
      _Origin,
      _Text
}
```
