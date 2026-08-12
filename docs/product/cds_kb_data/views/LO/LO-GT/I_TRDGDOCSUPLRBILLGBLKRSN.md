---
name: I_TRDGDOCSUPLRBILLGBLKRSN
description: "Block Reason for Suplr Billg in Trdg Doc"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCSUPLRBILLGBLKRSN')/$value
semantic_en: "Block Reason for Suplr Billg in Trdg Doc"
semantic_vi: "Block Reason for Suplr Billg in Trdg Doc — CDS view cơ bản dựa trên R_TrdgDocSuplrBillgBlkRsn."
keywords:
  - "block"
  - "reason"
  - "for"
  - "suplr"
  - "billg"
  - "trdg"
  - "doc"
tags:
  - LO
  - bo:salesorder
  - component:LO-GT
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGDOCSUPLRBILLGBLKRSN

**Block Reason for Suplr Billg in Trdg Doc**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCSUPLRBILLGBLKRSN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdgDocSuplrBillgBlkRsn` | ✓ | |  |  | `CHAR(2)` | Blocking Reason Document Header |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCSUPLRBILLGBLKRSN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCSUPLRBILLGBLKRSN')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Block Reason for Suplr Billg in Trdg Doc'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  representativeKey: 'TrdgDocSuplrBillgBlkRsn',
  dataCategory: #VALUE_HELP,
  resultSet.sizeCategory: #XS,
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory:   #S
  }
}
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_TrdgDocSuplrBillgBlkRsn
  as select from R_TrdgDocSuplrBillgBlkRsn

  composition [0..*] of I_TrdgDocSuplrBillgBlkRsnText as _Text
{
      @ObjectModel.text.association: '_Text'
  key TrdgDocSuplrBillgBlkRsn,
      _Text
}
```
