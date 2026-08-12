---
name: I_MATCHINGREASONCODE
description: "Matching Reason Code"
app_component: FIN-CS-ICR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATCHINGREASONCODE')/$value
semantic_en: "Matching Reason Code"
semantic_vi: "Matching Reason Code — CDS view giao diện dựa trên ica_rc."
keywords:
  - "matching"
  - "reason"
  - "code"
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
# I_MATCHINGREASONCODE

**Matching Reason Code**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATCHINGREASONCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MatchingReasonCode` | ✓ | |  | `rcode` | `CHAR(6)` | Reason Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MatchingReasonCodeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATCHINGREASONCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATCHINGREASONCODE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IICAREASONCODE'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Matching Reason Code'

@ObjectModel.representativeKey: 'MatchingReasonCode'

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A

@VDM.viewType: #BASIC

// Required by C1 Contract
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET]


define view I_MatchingReasonCode as select from ica_rc 
  association[0..*]    to I_MatchingReasonCodeText             as _Text on $projection.MatchingReasonCode          = _Text.MatchingReasonCode
{

  @ObjectModel.text.association: '_Text'
  key rcode as MatchingReasonCode,
  
  _Text
}
```
