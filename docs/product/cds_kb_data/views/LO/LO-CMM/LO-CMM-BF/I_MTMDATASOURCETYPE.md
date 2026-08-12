---
name: I_MTMDATASOURCETYPE
description: "Mark To Market Data Source Type"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMDATASOURCETYPE')/$value
semantic_en: "Mark To Market Data Source Type"
semantic_vi: "MTM Data Source Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "mtm"
  - "data"
  - "source"
  - "type"
tags:
  - LO
  - bo:salesorder
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_MTMDATASOURCETYPE

**Mark To Market Data Source Type**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMDATASOURCETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MTMDataSourceType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as cmm_vlogp_rec_type)` | `CHAR(2)` | Type of Data Record |
| `_MtmDataSourceTypT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MtmDataSourceTypT` | `I_MtmDataSourceTypT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMDATASOURCETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMDATASOURCETYPE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMTMDATASRCTYPE'
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'MTMDataSourceType'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'MTM Data Source Type'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]

define view I_MtmDataSourceType
  as select from dd07l
  association [0..*] to I_MtmDataSourceTypT as _MtmDataSourceTypT on $projection.MTMDataSourceType = _MtmDataSourceTypT.MTMDataSourceType
{
      @ObjectModel.text.association: '_MtmDataSourceTypT'
  key cast ( substring( domvalue_l, 1, 2 ) as cmm_vlogp_rec_type) as MTMDataSourceType,
      _MtmDataSourceTypT
}
where
      dd07l.domname  = 'CMM_VLOGP_REC_TYPE'
  and dd07l.as4local = 'A'
```
