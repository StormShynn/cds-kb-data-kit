---
name: I_SRVCDOCGOODSISSUESTATUSTEXT
description: Srvcdocgoodsissuestatustext
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - text
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCGOODSISSUESTATUSTEXT

**Srvcdocgoodsissuestatustext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SrvcDocItmGoodsIssueStatus` | `domvalue_l` |
| key `Language` | `ddlanguage` |
| `SrvcDocGoodsIssueStatusText` | `ddtext` |
| `_SrvcDocGoodsIssueStatus` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocGoodsIssueStatus` | `I_SrvcDocGoodsIssueStatus` | [1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Goods Issue Status for Srvc Trans - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVGITATTXT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'SrvcDocItmGoodsIssueStatus',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #D,
     sizeCategory:   #S
   },
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.dataExtraction.enabled: true
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocGoodsIssueStatusText
  as select from dd07t
  association [1]    to I_SrvcDocGoodsIssueStatus as _SrvcDocGoodsIssueStatus on $projection.SrvcDocItmGoodsIssueStatus = _SrvcDocGoodsIssueStatus.SrvcDocItmGoodsIssueStatus
  association [1..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SrvcDocGoodsIssueStatus'
  key domvalue_l as SrvcDocItmGoodsIssueStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage as Language,
      @Semantics.text: true
      ddtext     as SrvcDocGoodsIssueStatusText,

      _SrvcDocGoodsIssueStatus,
      _Language
}
where
      domname  = 'CRMS4_STAT_GOODS_ISSUE'
  and as4local = 'A'
```
