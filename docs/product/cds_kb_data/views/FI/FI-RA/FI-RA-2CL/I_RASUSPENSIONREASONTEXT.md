---
name: I_RASUSPENSIONREASONTEXT
description: "Suspension Reason - Text"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RASUSPENSIONREASONTEXT')/$value
semantic_en: "Suspension Reason - Text"
semantic_vi: "Suspension Reason - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "suspension"
  - "reason"
  - "text"
  - "language"
  - "revn"
  - "acctg"
  - "domain"
  - "value"
  - "name"
tags:
  - FI
  - bo:salesorder
  - component:FI-RA-2CL
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
---
# I_RASUSPENSIONREASONTEXT

**Suspension Reason - Text**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RASUSPENSIONREASONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(dd07t.ddlanguage as spras preserving type)` | `LANG(1)` | Language Key |
| `RevnAcctgSuspensionReason` | ✓ | |  | `cast(dd07t.domvalue_l as farr_suspension_reason)` | `CHAR(1)` | Suspension Reason |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `RevnAcctgSuspensionReasonName` |  | |  | `cast(dd07t.ddtext as farr_suspension_reason_name preserving type)` | `CHAR(60)` | Suspension Reason Name |
| `_Language` | | ✓ | | | | |
| `_RASuspensionReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RASUSPENSIONREASONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RASUSPENSIONREASONTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Suspension Reason - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'RevnAcctgSuspensionReason'

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_RASuspensionReasonText
  as select from dd07t

  association to parent I_RASuspensionReason       as _RASuspensionReason
    on $projection.RevnAcctgSuspensionReason = _RASuspensionReason.RevnAcctgSuspensionReason

  association [0..1] to I_Language                 as _Language
    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(dd07t.ddlanguage as spras preserving type)                   as Language,

      @ObjectModel.foreignKey.association: '_RASuspensionReason'
      @ObjectModel.text.element: [ 'RevnAcctgSuspensionReasonName' ]
  key cast(dd07t.domvalue_l as farr_suspension_reason)                  as RevnAcctgSuspensionReason,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                  as DomainValue,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      @Semantics.text: true
      cast(dd07t.ddtext as farr_suspension_reason_name preserving type) as RevnAcctgSuspensionReasonName,

      _RASuspensionReason,
      _Language

}
where dd07t.domname  = 'FARR_SUSPENSION_REASON'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
