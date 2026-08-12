---
name: I_RASUSPENSIONREASONTEXT
description: "Suspension Reason - Text"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
