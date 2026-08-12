---
name: I_INVOICELISTSTATUSTEXT
description: "Invoiceliststatustext"
app_component: SD-BIL-IL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IL
  - interface-view
  - text-view
  - text
  - status
  - component:SD-BIL-IL-2CL
  - lob:Sales & Distribution
---
# I_INVOICELISTSTATUSTEXT

**Invoiceliststatustext**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoiceListStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `InvoiceListStatusDesc` |  | |  | `bezei` |  |  |
| `_InvoiceListStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InvoiceListStatus` | `I_InvoiceListStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ISDINVCLSTSTST'

@EndUserText.label: 'Invoice List Status - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'InvoiceListStatus'

@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType: { dataClass: #META, serviceQuality: #A, sizeCategory: #S }

@VDM.viewType: #BASIC

define view entity I_InvoiceListStatusText
  as select from tvbst

  association [0..1] to I_InvoiceListStatus as _InvoiceListStatus on $projection.InvoiceListStatus = _InvoiceListStatus.InvoiceListStatus
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_InvoiceListStatus'
  key statu               as InvoiceListStatus,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras               as Language,

      @Semantics.text: true
      bezei               as InvoiceListStatusDesc,

      // Associations
      _InvoiceListStatus,
      _Language
}

where (tvbst.tbnam = 'VBRK') and (tvbst.fdnam = 'RELIK');
```
