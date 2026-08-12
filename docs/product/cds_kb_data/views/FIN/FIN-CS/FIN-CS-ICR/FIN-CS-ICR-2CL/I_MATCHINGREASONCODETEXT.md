---
name: I_MATCHINGREASONCODETEXT
description: "Matching Reason Code - Text"
app_component: FIN-CS-ICR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATCHINGREASONCODETEXT')/$value
semantic_en: "Matching Reason Code - Text"
semantic_vi: "Matching Reason Code - Text — CDS view giao diện dựa trên ica_rct."
keywords:
  - "matching"
  - "reason"
  - "code"
  - "text"
  - "language"
  - "desc"
tags:
  - FIN
  - bo:salesorder
  - component:FIN-CS-ICR-2CL
  - FIN-CS
  - FIN-CS-ICR
  - FIN-CS-ICR-2CL
  - interface-view
  - lob:finance
---
# I_MATCHINGREASONCODETEXT

**Matching Reason Code - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-ICR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATCHINGREASONCODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MatchingReasonCode` | ✓ | |  | `rcode` | `CHAR(6)` | Reason Code |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `MatchingReasonCodeDesc` |  | |  | `descm` | `CHAR(80)` | Medium Length Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATCHINGREASONCODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATCHINGREASONCODETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IICAREASONCODET'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Matching Reason Code - Text'

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MatchingReasonCode'

@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #S
}

@VDM.viewType: #BASIC

// Required by C1 Contract
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT ]

define view I_MatchingReasonCodeText as select from ica_rct 
  association[0..1]    to I_Language             as _Language           on $projection.Language          = _Language.Language
{
  key rcode as MatchingReasonCode,

  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language
  key langu as Language,

  @Semantics.text
  descm     as MatchingReasonCodeDesc,
  
  _Language
}
```
