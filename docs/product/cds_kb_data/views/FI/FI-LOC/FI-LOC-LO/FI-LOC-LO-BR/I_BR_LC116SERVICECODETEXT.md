---
name: I_BR_LC116SERVICECODETEXT
description: "Brazil LC116 Service Codes - Text"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_LC116SERVICECODETEXT')/$value
semantic_en: "Brazil LC116 Service Codes - Text"
semantic_vi: "Brazil LC116 Service Codes - Text — CDS view giao diện dựa trên logbr_abrasft."
keywords:
  - "brazil"
  - "lc116"
  - "service"
  - "codes"
  - "text"
  - "language"
  - "c116"
  - "code"
  - "desc"
tags:
  - FI
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_BR_LC116SERVICECODETEXT

**Brazil LC116 Service Codes - Text**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_LC116SERVICECODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_BR_LC116ServiceCodeText` | `language` | `LANG(1)` | Language Key |
| `BR_LC116ServiceCode` | ✓ | | `_BR_LC116ServiceCodeText` | `abrasf` | `CHAR(5)` | LC 116 Service Type Code |
| `BR_LC116ServiceCodeDesc` |  | | `_BR_LC116ServiceCodeText` | `description1` | `CHAR(255)` | LC 116 Service Type Description |
| `_BR_LC116ServiceCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_LC116ServiceCode` | `I_BR_LC116ServiceCode` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_LC116SERVICECODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_LC116SERVICECODETEXT')/$value)*

```abap
@EndUserText.label: 'Brazil LC116 Service Codes - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics: {dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRLC116CODETXT'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.representativeKey: 'BR_LC116ServiceCode'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@AbapCatalog.preserveKey:true 

define view I_BR_LC116ServiceCodeText  as select from logbr_abrasft as _BR_LC116ServiceCodeText
  association [1..1] to I_BR_LC116ServiceCode as _BR_LC116ServiceCode on $projection.BR_LC116ServiceCode = _BR_LC116ServiceCode.BR_LC116ServiceCode
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language 
{
  @Semantics.language: true
  key _BR_LC116ServiceCodeText.language as Language,
  
  @ObjectModel.foreignKey.association: '_BR_LC116ServiceCode'
  key _BR_LC116ServiceCodeText.abrasf as BR_LC116ServiceCode,
  
  @Semantics.text: true
  _BR_LC116ServiceCodeText.description1 as BR_LC116ServiceCodeDesc,
  
  _BR_LC116ServiceCode,
  _Language
}
```
